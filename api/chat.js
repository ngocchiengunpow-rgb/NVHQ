// api/chat.js

// Global cache for verified tokens (persists across warm serverless invocations)
const tokenCache = new Map();
const CACHE_TTL = 10 * 60 * 1000; // 10 minutes caching

async function verifyToken(token) {
  if (!token) return false;
  
  const now = Date.now();
  if (tokenCache.has(token)) {
    const cacheEntry = tokenCache.get(token);
    if (now - cacheEntry.timestamp < CACHE_TTL) {
      return cacheEntry.isValid;
    }
  }
  
  try {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
    if (!supabaseUrl || !supabaseAnonKey) {
      console.error("Missing SUPABASE_URL or SUPABASE_ANON_KEY environment variables.");
      return false;
    }
    
    // Call Supabase RPC get_questions to check if the session token is valid
    const response = await fetch(`${supabaseUrl}/rest/v1/rpc/get_questions`, {
      method: 'POST',
      headers: {
        'apikey': supabaseAnonKey,
        'Authorization': `Bearer ${supabaseAnonKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ p_token: token })
    });
    
    if (response.ok) {
      const data = await response.json();
      const isValid = Array.isArray(data) && data.length > 0;
      
      // Store in memory cache
      tokenCache.set(token, {
        timestamp: now,
        isValid: isValid
      });
      
      return isValid;
    }
    return false;
  } catch (error) {
    console.error("Error verifying token in backend:", error);
    return false;
  }
}

module.exports = async (req, res) => {
  const origin = req.headers.origin;
  const allowedOrigins = [
    'https://nvhq-v2.vercel.app',
    'http://localhost:3000',
    'http://localhost:5000',
    'http://127.0.0.1:5500',
    'http://localhost:5500'
  ];

  // Dynamic CORS setup
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    res.setHeader('Access-Control-Allow-Origin', 'https://nvhq-v2.vercel.app');
  }

  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  // Handle OPTIONS preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
    return;
  }

  // Extract and verify Bearer token
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Unauthorized: Missing or invalid Authorization header.' });
    return;
  }

  const token = authHeader.split(' ')[1];
  const isValid = await verifyToken(token);
  if (!isValid) {
    res.status(401).json({ error: 'Unauthorized: Invalid session token.' });
    return;
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'Groq API Key is not configured on the server. Please add GROQ_API_KEY to environment variables.' });
    return;
  }

  try {
    const { messages, temperature = 0.3 } = req.body;

    if (!messages || !Array.isArray(messages)) {
      res.status(400).json({ error: 'Invalid or missing messages array.' });
      return;
    }

    // Call Groq API via HTTP POST using native Node.js fetch
    const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: messages,
        temperature: temperature,
        max_tokens: 1500
      })
    });

    if (!groqResponse.ok) {
      const errorText = await groqResponse.text();
      res.status(groqResponse.status).json({ error: `Groq API error: ${errorText}` });
      return;
    }

    const data = await groqResponse.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error in proxy chat handler:', error);
    res.status(500).json({ error: 'Internal server error: ' + error.message });
  }
};
