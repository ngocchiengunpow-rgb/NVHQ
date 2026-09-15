// State variables
let currentCourse = 'NVHQ'; // 'NVHQ' or 'VNYLT'
let NVHQ_QUESTION_BANK = (typeof NVHQ_FALLBACK_QUESTIONS !== 'undefined' && Array.isArray(NVHQ_FALLBACK_QUESTIONS)) ? NVHQ_FALLBACK_QUESTIONS : [];
let VNYLT_QUESTION_BANK = (typeof VNYLT_QUESTIONS !== 'undefined' && Array.isArray(VNYLT_QUESTIONS)) ? VNYLT_QUESTIONS : [];
let QUESTION_BANK = NVHQ_QUESTION_BANK;

let activeTab = 'dashboard-view';
let selectedChapter = 'all';
let searchQuery = '';

// Performance scroll variables
let currentFilteredQuestions = [];
let currentlyRenderedCount = 0;
const renderBatchSize = 15; // Render 15 questions per batch

// Mock Exam state
let mockQuestions = [];
let mockCurrentIndex = 0;
let mockAnswers = {};
let mockTimer = null;
let mockTimeLeft = 600; // 10 minutes in seconds

// Chapter Practice state
let practiceQuestions = [];
let practiceCurrentIndex = 0;
let practiceSelectedAnswer = null;
let practiceAnswered = false;

// User progress states (saved in localStorage)
let masteredQuestions = new Set();
let reviewQuestions = new Set();

// Chapter / Sets configuration for courses
const NVHQ_CHAPTERS = [
  { value: 'all', label: 'Tất cả các chương (600 câu)' },
  { value: 'CD001', label: 'Chương 1. Tổng quan về Hải quan' },
  { value: 'CD002', label: 'Chương 2.1. Hệ thống pháp quy quản lý XNK' },
  { value: 'CD003', label: 'Chương 2.2. Hệ thống pháp quy về xuất xứ hàng hóa' },
  { value: 'CD004', label: 'Chương 2.3. Cơ sở pháp quy về thuế XNK' },
  { value: 'CD005', label: 'Chương 2.4. Xác định trị giá hải quan đối với hàng XNK' },
  { value: 'CD006', label: 'Chương 3.1. Thủ tục hải quan' },
  { value: 'CD007', label: 'Chương 3.2. ECUS' },
  { value: 'CD008', label: 'Chương 3.3. Quản lý rủi ro trong hoạt động hải quan' },
  { value: 'CD009', label: 'Chương 3.4. Mã HS' },
  { value: 'CD010', label: 'Chương 4.1. Kiểm tra hải quan' },
  { value: 'CD011', label: 'Chương 4.2. Giám sát hải quan' },
  { value: 'CD012', label: 'Chương 4.3. Kiểm tra sau thông quan' }
];

const VNYLT_CHAPTERS = [
  { value: 'all', label: 'Tất cả các đợt VNYLT (249 câu)' },
  { value: 'File 1 (Đợt 1)', label: 'File 1 - Đợt 1 (73 câu)' },
  { value: 'File 2 (Đợt 1)', label: 'File 2 - Đợt 1 (45 câu)' },
  { value: 'File 2 (Đợt 2)', label: 'File 2 - Đợt 2 (12 câu)' },
  { value: 'File 2 (Đợt 3)', label: 'File 2 - Đợt 3 (39 câu)' },
  { value: 'File 2 (Đợt 4)', label: 'File 2 - Đợt 4 (40 câu)' },
  { value: 'File 2 (Đợt 5)', label: 'File 2 - Đợt 5 (40 câu)' }
];

// Supabase Configuration Toggle (Online Mode)
const USE_SUPABASE = true;
const SUPABASE_URL = window.SUPABASE_URL || "https://zfnatlvlykktrqeuwlye.supabase.co";
const SUPABASE_ANON_KEY = window.SUPABASE_ANON_KEY || "sb_publishable_MMtOfXQn251GjODjDdzFtg_uGLMHfe8";

let supabaseClient = null;
if (USE_SUPABASE && typeof supabase !== 'undefined') {
  supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// Normalizes input strings
function normalizeString(str) {
  if (!str) return '';
  return str.toString()
    .trim()
    .normalize('NFC')
    .toLowerCase()
    .replace(/ð/g, 'đ')
    .replace(/dh/g, 'đh')
    .replace(/\s+/g, ' ');
}

// ==================== SYSTEM LOCK & ACCESS CONTROL ====================
function checkLockState() {
  const isUnlocked = localStorage.getItem('nvhq_site_unlocked') === 'true';
  const lockOverlay = document.getElementById('lock-overlay');
  const relockBtn = document.getElementById('relock-btn');
  const statusBadge = document.getElementById('header-status-badge');

  if (isUnlocked) {
    if (lockOverlay) {
      lockOverlay.classList.add('hidden');
    }
    if (relockBtn) {
      relockBtn.style.display = 'flex';
    }
    if (statusBadge) {
      statusBadge.innerHTML = `
        <span style="font-size: 11.5px; font-weight: 800; color: #10b981; background: rgba(16, 185, 129, 0.15); padding: 4px 10px; border-radius: 8px; border: 1px solid rgba(16, 185, 129, 0.3);">
          <i class="fa-solid fa-lock-open"></i> ĐÃ MỞ KHÓA
        </span>
      `;
    }
    if (typeof updateAIChatVisibility === 'function') {
      updateAIChatVisibility();
    }
  } else {
    if (lockOverlay) {
      lockOverlay.classList.remove('hidden');
    }
    if (relockBtn) {
      relockBtn.style.display = 'none';
    }
    if (statusBadge) {
      statusBadge.innerHTML = `
        <span style="font-size: 11.5px; font-weight: 800; color: #ef4444; background: rgba(239, 68, 68, 0.15); padding: 4px 10px; border-radius: 8px; border: 1px solid rgba(239, 68, 68, 0.3);">
          <i class="fa-solid fa-lock"></i> ĐÃ TẠM KHÓA
        </span>
      `;
    }
    // Hide AI chat floating button when site is locked
    const aiToggle = document.getElementById('ai-chat-toggle');
    const aiWindow = document.getElementById('ai-chat-window');
    if (aiToggle) aiToggle.style.display = 'none';
    if (aiWindow) aiWindow.style.display = 'none';
  }
}

function checkAuthState() {
  checkLockState();
}

function togglePasscodeSection() {
  const container = document.getElementById('passcode-container');
  if (!container) return;
  const isHidden = container.style.display === 'none' || !container.style.display;
  container.style.display = isHidden ? 'block' : 'none';
  if (isHidden) {
    const input = document.getElementById('unlock-passcode');
    if (input) input.focus();
  }
}

function verifyUnlockPasscode() {
  const input = document.getElementById('unlock-passcode');
  const errorMsg = document.getElementById('passcode-error');
  if (!input) return;

  const entered = input.value.trim().toLowerCase();
  const validPasscodes = ['banhmicampha', 'nvhq2026', 'chien2026', '330a', 'ngocchien', 'admin'];

  if (validPasscodes.includes(entered)) {
    if (errorMsg) errorMsg.style.display = 'none';
    localStorage.setItem('nvhq_site_unlocked', 'true');
    checkLockState();
  } else {
    if (errorMsg) errorMsg.style.display = 'block';
    input.classList.add('shake');
    setTimeout(() => input.classList.remove('shake'), 400);
  }
}

function relockWebsite() {
  if (confirm("Bạn có chắc chắn muốn khóa lại website?")) {
    localStorage.removeItem('nvhq_site_unlocked');
    checkLockState();
  }
}

function initExamCountdown() {
  checkLockState();
}

// Dynamic server-side question bank loading (Supabase)
async function loadQuestionsFromServer(token) {
  if (!token) token = "19b55cd13309c5903780fa483ee13dc0";
  
  if (typeof supabase === 'undefined' || !supabaseClient) {
    return false;
  }
  
  try {
    const { data, error } = await supabaseClient.rpc('get_questions', { p_token: token });
    if (error) throw error;
    
    if (data && data.length > 0) {
      NVHQ_QUESTION_BANK = data.map(q => ({
        maCauHoi: q.macauhoi || q.maCauHoi,
        stt: q.stt,
        mucDo: q.mucdo || q.mucDo,
        tenChuDe: q.tenchude || q.tenChuDe,
        cauHoi: q.cauhoi || q.cauHoi,
        options: q.options,
        correctAnswer: q.correctanswer || q.correctAnswer
      }));
      
      const badgeNvhq = document.getElementById('badge-count-nvhq');
      if (badgeNvhq) badgeNvhq.textContent = `${NVHQ_QUESTION_BANK.length} câu`;
      
      if (currentCourse === 'NVHQ') {
        QUESTION_BANK = NVHQ_QUESTION_BANK;
        renderDashboard();
        if (activeTab === 'all-view') {
          renderAllQuestionsList();
        } else if (activeTab === 'practice-view') {
          initPracticeMode();
        }
      }
      return true;
    }
  } catch (e) {
    console.warn("Supabase questions fetch note:", e);
  }
  return false;
}

// Switch Course between NVHQ and VNYLT
function switchCourse(course) {
  currentCourse = course;
  localStorage.setItem('nvhq_current_course', course);
  selectedChapter = 'all';

  // Toggle active tab buttons
  const btnNvhq = document.getElementById('course-tab-nvhq');
  const btnVnylt = document.getElementById('course-tab-vnylt');
  if (btnNvhq && btnVnylt) {
    btnNvhq.classList.toggle('active', course === 'NVHQ');
    btnVnylt.classList.toggle('active', course === 'VNYLT');
  }

  // Update App title
  const titleEl = document.getElementById('app-title');
  if (titleEl) {
    titleEl.textContent = course === 'NVHQ' ? 'Ôn tập NVHQ' : 'Ôn thi VNYLT 2026';
  }

  // Update current question bank
  if (course === 'NVHQ') {
    QUESTION_BANK = NVHQ_QUESTION_BANK;
  } else {
    QUESTION_BANK = VNYLT_QUESTION_BANK;
  }

  // Update badge counts
  const badgeNvhq = document.getElementById('badge-count-nvhq');
  const badgeVnylt = document.getElementById('badge-count-vnylt');
  if (badgeNvhq) badgeNvhq.textContent = `${NVHQ_QUESTION_BANK.length} câu`;
  if (badgeVnylt) badgeVnylt.textContent = `${VNYLT_QUESTION_BANK.length} câu`;

  loadProgress();
  updateChapterFilterDropdown();
  renderDashboard();

  if (activeTab === 'all-view') {
    renderAllQuestionsList();
  } else if (activeTab === 'practice-view') {
    initPracticeMode();
  } else if (activeTab === 'mock-view') {
    resetMockExam();
  }
}

// Update Chapters Dropdown according to active course
function updateChapterFilterDropdown() {
  const select = document.getElementById('chapter-filter');
  if (!select) return;
  const list = currentCourse === 'NVHQ' ? NVHQ_CHAPTERS : VNYLT_CHAPTERS;
  select.innerHTML = list.map(item => `<option value="${item.value}">${item.label}</option>`).join('');
  select.value = selectedChapter;
}

// Initialize Application
window.addEventListener('DOMContentLoaded', async () => {
  // 1. Load local fallback datasets
  if (typeof NVHQ_FALLBACK_QUESTIONS !== 'undefined' && Array.isArray(NVHQ_FALLBACK_QUESTIONS)) {
    NVHQ_QUESTION_BANK = NVHQ_FALLBACK_QUESTIONS;
  }
  if (typeof VNYLT_QUESTIONS !== 'undefined' && Array.isArray(VNYLT_QUESTIONS)) {
    VNYLT_QUESTION_BANK = VNYLT_QUESTIONS;
  }

  initTheme();
  checkAuthState();

  // 2. Set saved or default course
  const savedCourse = localStorage.getItem('nvhq_current_course') || 'NVHQ';
  switchCourse(savedCourse);

  switchTab('dashboard-view');
  initExamCountdown();
  initDonationModal();

  // 3. Connect theme toggle button
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);

  // 4. Fetch updated questions from Supabase in background
  loadQuestionsFromServer("19b55cd13309c5903780fa483ee13dc0");

  // Bind keyboard navigation keys (Enter, ArrowLeft, ArrowRight)
  window.addEventListener('keydown', (e) => {
    // If the lock screen is active, don't trigger quiz navigation
    const lockOverlay = document.getElementById('lock-overlay');
    if (lockOverlay && !lockOverlay.classList.contains('hidden') && lockOverlay.style.display !== 'none') {
      return;
    }
    
    // If user is focused on a search input or dropdown, don't trigger quiz navigation
    if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'SELECT')) {
      return;
    }
    
    if (e.key === 'Enter' || e.key === 'ArrowRight') {
      // 1. Mock Exam active
      const quizActiveArea = document.getElementById('quiz-active-area');
      if (quizActiveArea && quizActiveArea.style.display === 'block') {
        const nextBtn = document.getElementById('quiz-next-btn');
        if (nextBtn && !nextBtn.disabled) {
          nextBtn.click();
          e.preventDefault();
        }
      }
      
      // 2. Practice Mode active
      const practiceActive = document.getElementById('practice-active');
      if (practiceActive && practiceActive.style.display === 'block') {
        const nextBtn = document.getElementById('practice-next-btn');
        if (nextBtn && !nextBtn.disabled) {
          nextBtn.click();
          e.preventDefault();
        }
      }
    } else if (e.key === 'ArrowLeft') {
      // 1. Mock Exam active (Previous)
      const quizActiveArea = document.getElementById('quiz-active-area');
      if (quizActiveArea && quizActiveArea.style.display === 'block') {
        const prevBtn = document.getElementById('quiz-prev-btn');
        if (prevBtn && !prevBtn.disabled) {
          prevBtn.click();
          e.preventDefault();
        }
      }
      
      // 2. Practice Mode active (Previous)
      const practiceActive = document.getElementById('practice-active');
      if (practiceActive && practiceActive.style.display === 'block') {
        const prevBtn = document.getElementById('practice-prev-btn');
        if (prevBtn && !prevBtn.disabled) {
          prevBtn.click();
          e.preventDefault();
        }
      }
    }
  });
});

// Load progress from LocalStorage
function loadProgress() {
  const prefix = currentCourse === 'VNYLT' ? 'vnylt_' : 'nvhq_';
  try {
    const mastered = localStorage.getItem(prefix + 'mastered');
    masteredQuestions = mastered ? new Set(JSON.parse(mastered)) : new Set();
    
    const review = localStorage.getItem(prefix + 'review');
    reviewQuestions = review ? new Set(JSON.parse(review)) : new Set();
  } catch (e) {
    masteredQuestions = new Set();
    reviewQuestions = new Set();
  }
}

// Save progress to LocalStorage
function saveProgress() {
  const prefix = currentCourse === 'VNYLT' ? 'vnylt_' : 'nvhq_';
  try {
    localStorage.setItem(prefix + 'mastered', JSON.stringify([...masteredQuestions]));
    localStorage.setItem(prefix + 'review', JSON.stringify([...reviewQuestions]));
    renderDashboard();
  } catch (e) {
    console.error("Error saving progress:", e);
  }
}

// Initialize Theme (Sleek Dark/Light Mode)
function initTheme() {
  const savedTheme = localStorage.getItem('nvhq_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('nvhq_theme', newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const icon = document.querySelector('#theme-toggle i');
  if (theme === 'dark') {
    icon.className = 'fa-solid fa-sun';
  } else {
    icon.className = 'fa-solid fa-moon';
  }
}

// Render Dashboard Statistics Metrics
function renderDashboard() {
  document.getElementById('metric-total-questions').textContent = QUESTION_BANK.length;
  document.getElementById('metric-mastered').textContent = masteredQuestions.size;
  document.getElementById('metric-flagged').textContent = reviewQuestions.size;
  
  const welcomeTitle = document.querySelector('#view-dashboard-view h2');
  if (welcomeTitle) {
    welcomeTitle.textContent = currentCourse === 'NVHQ' ? 'Chào mừng bạn đến với Ôn tập NVHQ!' : 'Chào mừng bạn đến với Ôn thi VNYLT 2026!';
  }
  const welcomeDesc = document.querySelector('#view-dashboard-view p');
  if (welcomeDesc) {
    if (currentCourse === 'NVHQ') {
      welcomeDesc.innerHTML = `Hệ thống ôn tập <strong>Nghiệp vụ Hải quan (NVHQ)</strong>. Toàn bộ <strong>${QUESTION_BANK.length} câu hỏi</strong> chính thức đã mở khóa tự do, sẵn sàng cho bạn ôn tập và thi thử!`;
    } else {
      welcomeDesc.innerHTML = `Hệ thống ôn thi <strong>Cuộc thi Vận tải & Logistics Trẻ Việt Nam (VNYLT)</strong>. Trọn bộ <strong>${QUESTION_BANK.length} câu hỏi</strong> chuẩn từ các đợt thi và ngân hàng đề thi đã sẵn sàng!`;
    }
  }
}

// Tab Switching Mechanism
function switchTab(tabId) {
  activeTab = tabId;
  
  // Update Tab Button styles
  const tabs = document.querySelectorAll('#tab-container button');
  tabs.forEach(btn => {
    btn.classList.remove('active');
  });
  
  const activeBtn = document.querySelector(`button[onclick="switchTab('${tabId}')"]`);
  if (activeBtn) activeBtn.classList.add('active');
  
  // Hide all panels
  const panels = document.querySelectorAll('.view-panel');
  panels.forEach(p => {
    p.style.display = 'none';
    p.classList.remove('active');
  });
  
  // Show active panel
  const activePanel = document.getElementById(`view-${tabId}`);
  if (activePanel) {
    activePanel.style.display = 'block';
    activePanel.classList.add('active');
  }
  
  // Perform tab-specific renders
  if (tabId === 'all-view') {
    renderAllQuestionsList();
  } else if (tabId === 'practice-view') {
    initPracticeMode();
  } else if (tabId === 'dashboard-view') {
    renderDashboard();
  }

  if (typeof updateAIChatContextBtn === 'function') {
    updateAIChatContextBtn();
  }
}

// Handle Filter Changes
function handleChapterFilterChange() {
  const selectEl = document.getElementById('chapter-filter');
  if (selectEl) selectEl.blur();
  selectedChapter = document.getElementById('chapter-filter').value;
  
  if (activeTab === 'all-view') {
    renderAllQuestionsList();
  } else if (activeTab === 'practice-view') {
    initPracticeMode();
  }
}

let searchTimeout = null;
function handleSearch() {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    searchQuery = document.getElementById('search-input').value.trim().toLowerCase();
    
    if (activeTab === 'all-view') {
      renderAllQuestionsList();
    }
  }, 250); // Debounce database query to prevent key lag
}

// Filter Helper
function getFilteredQuestions() {
  return QUESTION_BANK.filter(q => {
    // 1. Chapter / Set filter
    const matchesChapter = selectedChapter === 'all' || 
                           q.maCauHoi.startsWith(selectedChapter) || 
                           (q.tenChuDe && q.tenChuDe.includes(selectedChapter)) ||
                           (q.boDot && q.boDot === selectedChapter) ||
                           (q.originalId && q.originalId.includes(selectedChapter));
    
    // 2. Search query filter
    let matchesSearch = true;
    if (searchQuery) {
      const questionText = (q.cauHoi || '').toLowerCase();
      const topicText = (q.tenChuDe || '').toLowerCase();
      const optionsText = (q.options || []).map(o => (o.text || '').toLowerCase()).join(' ');
      const noteText = (q.ghiChu || '').toLowerCase();
      
      matchesSearch = questionText.includes(searchQuery) || 
                      topicText.includes(searchQuery) || 
                      optionsText.includes(searchQuery) ||
                      noteText.includes(searchQuery);
    }
    
    return matchesChapter && matchesSearch;
  });
}

// ==================== MOCK EXAM SYSTEM ====================
function startMockExam() {
  if (QUESTION_BANK.length === 0) {
    alert("Cơ sở dữ liệu câu hỏi đang được cập nhật!");
    return;
  }
  
  // Get question count from selection
  const countVal = document.getElementById('mock-question-count').value;
  let count = countVal === 'all' ? QUESTION_BANK.length : parseInt(countVal, 10);
  
  // Get dynamic random questions from the entire bank
  const shuffled = [...QUESTION_BANK].sort(() => 0.5 - Math.random());
  mockQuestions = shuffled.slice(0, count);
  
  // Reset Mock state
  mockCurrentIndex = 0;
  mockAnswers = {};
  
  // Set dynamic timer
  const timerBox = document.getElementById('quiz-timer-box');
  if (countVal === 'all') {
    mockTimeLeft = 36000; // 10 hours limit for 'all' questions
    timerBox.style.display = 'none';
  } else {
    mockTimeLeft = count * 60; // 1 minute per question
    timerBox.style.display = 'flex';
  }
  
  // UI transitions
  document.getElementById('quiz-config-area').style.display = 'none';
  document.getElementById('quiz-active-area').style.display = 'block';
  document.getElementById('quiz-result-area').style.display = 'none';
  
  renderMockQuestion();
  startTimer();
}

function startTimer() {
  clearInterval(mockTimer);
  updateTimerDisplay();
  
  mockTimer = setInterval(() => {
    mockTimeLeft--;
    updateTimerDisplay();
    
    if (mockTimeLeft <= 0) {
      clearInterval(mockTimer);
      submitMockExam(true); // Auto submit
    }
  }, 1000);
}

function updateTimerDisplay() {
  const timerBox = document.getElementById('quiz-timer-box');
  const display = document.getElementById('quiz-timer-display');
  
  const min = Math.floor(mockTimeLeft / 60);
  const sec = mockTimeLeft % 60;
  
  display.textContent = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  
  // Highlight timer when running out of time
  if (mockTimeLeft <= 60) {
    timerBox.className = 'quiz-timer danger';
  } else {
    timerBox.className = 'quiz-timer';
  }
}

function renderMockQuestion() {
  const q = mockQuestions[mockCurrentIndex];
  if (!q) return;
  
  // Meta and Counter
  document.getElementById('quiz-active-topic').textContent = q.tenChuDe || "Đề thi thử Nghiệp vụ Hải quan";
  document.getElementById('quiz-counter').textContent = `Câu ${mockCurrentIndex + 1}/${mockQuestions.length}`;
  
  // Progress Bar
  const progressPercent = ((mockCurrentIndex) / mockQuestions.length) * 100;
  document.getElementById('quiz-progress-fill').style.width = `${progressPercent}%`;
  
  // Question text
  document.getElementById('quiz-question-text').textContent = `Câu ${mockCurrentIndex + 1}. ${q.cauHoi}`;
  
  // Options
  const optionsBox = document.getElementById('quiz-options-box');
  optionsBox.innerHTML = '';
  
  q.options.forEach(opt => {
    const isSelected = mockAnswers[q.maCauHoi] === opt.key;
    
    const div = document.createElement('div');
    div.className = `option-item ${isSelected ? 'selected' : ''}`;
    div.onclick = () => selectMockOption(opt.key);
    div.innerHTML = `
      <span class="option-key">${opt.key}.</span>
      <span class="option-text">${escapeHtml(opt.text)}</span>
    `;
    optionsBox.appendChild(div);
  });
  
  // Navigation Buttons
  document.getElementById('quiz-prev-btn').disabled = mockCurrentIndex === 0;
  const nextBtn = document.getElementById('quiz-next-btn');
  if (mockCurrentIndex === mockQuestions.length - 1) {
    nextBtn.innerHTML = `Nộp bài <i class="fa-solid fa-circle-check"></i>`;
  } else {
    nextBtn.innerHTML = `Tiếp tục <i class="fa-solid fa-arrow-right"></i>`;
  }

  if (typeof updateAIChatContextBtn === 'function') {
    updateAIChatContextBtn();
  }
}

function selectMockOption(key) {
  const q = mockQuestions[mockCurrentIndex];
  mockAnswers[q.maCauHoi] = key;
  
  // Re-render to show selected state
  renderMockQuestion();
}

function nextQuestion() {
  const q = mockQuestions[mockCurrentIndex];
  if (!mockAnswers[q.maCauHoi]) {
    alert("Vui lòng chọn một đáp án trước khi tiếp tục!");
    return;
  }
  
  if (mockCurrentIndex < mockQuestions.length - 1) {
    mockCurrentIndex++;
    renderMockQuestion();
  } else {
    // Submit Exam
    submitMockExam(false);
  }
}

function prevQuestion() {
  if (mockCurrentIndex > 0) {
    mockCurrentIndex--;
    renderMockQuestion();
  }
}

function submitMockExam(isAuto) {
  clearInterval(mockTimer);
  
  let score = 0;
  let wrongList = [];
  
  mockQuestions.forEach(q => {
    const selected = mockAnswers[q.maCauHoi];
    const correct = q.correctAnswer;
    
    if (selected === correct) {
      score++;
      // Mark as mastered
      masteredQuestions.add(q.maCauHoi);
      reviewQuestions.delete(q.maCauHoi);
    } else {
      wrongList.push({
        question: q,
        selected: selected || "Không trả lời"
      });
      // Flag for review
      reviewQuestions.add(q.maCauHoi);
    }
  });
  
  saveProgress();
  
  // Render results
  document.getElementById('quiz-active-area').style.display = 'none';
  document.getElementById('quiz-result-area').style.display = 'block';
  
  document.getElementById('result-score-text').textContent = isAuto 
    ? `Hết giờ! Kết quả bài làm: ${score}/${mockQuestions.length} điểm`
    : `Hoàn thành! Bạn đạt: ${score}/${mockQuestions.length} điểm`;
    
  const summaryBox = document.getElementById('result-summary-box');
  summaryBox.innerHTML = '';
  
  if (wrongList.length > 0) {
    summaryBox.innerHTML = `<h4>Các câu trả lời sai cần ôn lại:</h4><div style="margin-top:12px; display:flex; flex-direction:column; gap:16px;"></div>`;
    const container = summaryBox.querySelector('div');
    
    wrongList.forEach(w => {
      const q = w.question;
      const qDiv = document.createElement('div');
      qDiv.style.borderLeft = '4px solid var(--danger)';
      qDiv.style.paddingLeft = '12px';
      
      const optListHtml = q.options.map(o => {
        let optClass = '';
        if (o.key === q.correctAnswer) optClass = 'color: var(--success); font-weight:700;';
        if (o.key === w.selected) optClass = 'color: var(--danger); text-decoration: line-through;';
        
        return `<div style="font-size:13px; margin:4px 0; ${optClass}"><strong>${o.key}.</strong> ${escapeHtml(o.text)}</div>`;
      }).join('');
      
      qDiv.innerHTML = `
        <div style="font-size:14px; font-weight:700; margin-bottom:6px;">${escapeHtml(q.cauHoi)}</div>
        ${optListHtml}
        <div style="font-size:12px; color:var(--text-muted); margin-top:4px;">Bạn chọn: ${w.selected} | Đáp án đúng: ${q.correctAnswer}</div>
      `;
      container.appendChild(qDiv);
    });
  } else {
    summaryBox.innerHTML = `<div style="text-align:center; padding:16px; color:var(--success-text);"><i class="fa-solid fa-trophy" style="font-size:32px; margin-bottom:8px;"></i><p style="font-weight:700;">Xuất sắc! Bạn trả lời đúng tất cả ${mockQuestions.length} câu hỏi!</p></div>`;
  }
}

function restartQuiz() {
  document.getElementById('quiz-config-area').style.display = 'block';
  document.getElementById('quiz-active-area').style.display = 'none';
  document.getElementById('quiz-result-area').style.display = 'none';
}


// ==================== CHAPTER PRACTICE ENGINE ====================
function initPracticeMode() {
  document.getElementById('practice-initial').style.display = 'block';
  document.getElementById('practice-active').style.display = 'none';
  
  if (selectedChapter !== 'all') {
    practiceQuestions = QUESTION_BANK.filter(q => 
      q.maCauHoi.startsWith(selectedChapter) || 
      (q.tenChuDe && q.tenChuDe.includes(selectedChapter)) ||
      (q.boDot && q.boDot === selectedChapter)
    );
  } else {
    practiceQuestions = [...QUESTION_BANK];
  }

  if (practiceQuestions.length > 0) {
    document.getElementById('practice-initial').style.display = 'none';
    document.getElementById('practice-active').style.display = 'block';
    
    practiceCurrentIndex = 0;
    renderPracticeQuestion();
  } else {
    document.getElementById('practice-initial').innerHTML = `
      <i class="fa-solid fa-triangle-exclamation" style="font-size: 64px; color: var(--warning); margin-bottom: 16px;"></i>
      <h3 style="font-family: var(--font-title); font-size: 22px; font-weight: 800;">Phần này hiện chưa có câu hỏi nào.</h3>
    `;
  }
}

function renderPracticeQuestion() {
  const q = practiceQuestions[practiceCurrentIndex];
  if (!q) return;
  
  document.getElementById('practice-topic-name').textContent = q.tenChuDe || "Luyện tập";
  document.getElementById('practice-counter').textContent = `Câu ${practiceCurrentIndex + 1}/${practiceQuestions.length}`;
  
  document.getElementById('practice-question-text').textContent = `Câu ${practiceCurrentIndex + 1}. ${q.cauHoi}`;
  
  // Reset Practice question states
  practiceSelectedAnswer = null;
  practiceAnswered = false;
  document.getElementById('practice-explanation-box').style.display = 'none';
  
  const optionsBox = document.getElementById('practice-options-box');
  optionsBox.innerHTML = '';
  
  q.options.forEach(opt => {
    const div = document.createElement('div');
    div.className = 'option-item';
    div.onclick = () => selectPracticeOption(div, opt.key);
    div.innerHTML = `
      <span class="option-key">${opt.key}.</span>
      <span class="option-text">${escapeHtml(opt.text)}</span>
    `;
    optionsBox.appendChild(div);
  });
  
  // Navigation
  document.getElementById('practice-prev-btn').disabled = practiceCurrentIndex === 0;
  document.getElementById('practice-next-btn').disabled = practiceCurrentIndex === practiceQuestions.length - 1;

  if (typeof updateAIChatContextBtn === 'function') {
    updateAIChatContextBtn();
  }
}

function selectPracticeOption(element, key) {
  if (practiceAnswered) return; // Prevent double answering
  
  const q = practiceQuestions[practiceCurrentIndex];
  practiceSelectedAnswer = key;
  practiceAnswered = true;
  
  const isCorrect = key === q.correctAnswer;
  
  // Feedback Option classes
  const options = document.querySelectorAll('#practice-options-box .option-item');
  options.forEach((optDiv, idx) => {
    const optKey = q.options[idx].key;
    if (optKey === q.correctAnswer) {
      optDiv.classList.add('correct');
    } else if (optKey === key) {
      optDiv.classList.add('incorrect');
    }
  });
  
  // Show detailed feedback box
  const feedbackBox = document.getElementById('practice-explanation-box');
  feedbackBox.style.display = 'block';
  
  let noteHtml = '';
  if (q.ansText) {
    noteHtml += `<div style="margin-top:6px; font-size:13px; opacity:0.95;">• <strong>Nội dung:</strong> ${escapeHtml(q.ansText)}</div>`;
  }
  if (q.ghiChu) {
    noteHtml += `<div style="margin-top:4px; font-size:12.5px; opacity:0.9;"><i class="fa-solid fa-lightbulb"></i> <strong>Ghi chú:</strong> ${escapeHtml(q.ghiChu)}</div>`;
  }

  if (isCorrect) {
    feedbackBox.className = 'notice success';
    feedbackBox.innerHTML = `<i class="fa-solid fa-circle-check"></i> <strong>Chính xác!</strong> Đáp án đúng là <strong>${q.correctAnswer}</strong>.${noteHtml}`;
    masteredQuestions.add(q.maCauHoi);
    reviewQuestions.delete(q.maCauHoi);
  } else {
    feedbackBox.className = 'notice error';
    feedbackBox.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> <strong>Sai rồi!</strong> Bạn đã chọn ${key}. Đáp án đúng là <strong>${q.correctAnswer}</strong>.${noteHtml}`;
    reviewQuestions.add(q.maCauHoi);
    masteredQuestions.delete(q.maCauHoi);
  }
  
  saveProgress();
}

function nextPracticeQuestion() {
  if (practiceCurrentIndex < practiceQuestions.length - 1) {
    practiceCurrentIndex++;
    renderPracticeQuestion();
  }
}

function prevPracticeQuestion() {
  if (practiceCurrentIndex > 0) {
    practiceCurrentIndex--;
    renderPracticeQuestion();
  }
}


// ==================== TRA CỨU CƠ SỞ DỮ LIỆU (555 CÂU) ====================
function renderAllQuestionsList() {
  const container = document.getElementById('questions-list-container');
  container.innerHTML = '';
  
  currentFilteredQuestions = getFilteredQuestions();
  currentlyRenderedCount = 0;
  
  document.getElementById('search-results-counter').textContent = `Hiển thị ${currentFilteredQuestions.length}/${QUESTION_BANK.length} câu hỏi`;
  
  if (currentFilteredQuestions.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding: 40px; color:var(--text-muted);">Không tìm thấy câu hỏi nào phù hợp với bộ lọc hoặc từ khóa.</div>`;
    return;
  }
  
  renderNextQuestionBatch();
}

function renderNextQuestionBatch() {
  if (currentlyRenderedCount >= currentFilteredQuestions.length) return;
  
  const container = document.getElementById('questions-list-container');
  const end = Math.min(currentlyRenderedCount + renderBatchSize, currentFilteredQuestions.length);
  
  const fragment = document.createDocumentFragment();
  
  for (let i = currentlyRenderedCount; i < end; i++) {
    const q = currentFilteredQuestions[i];
    const card = document.createElement('div');
    card.className = 'glass-card list-item-card animate-fade-in';
    
    const isMastered = masteredQuestions.has(q.maCauHoi);
    const isFlagged = reviewQuestions.has(q.maCauHoi);
    
    const optHtml = q.options.map(o => {
      const isCorrect = o.key === q.correctAnswer;
      return `<div class="list-option ${isCorrect ? 'correct' : ''}"><strong>${o.key}.</strong> ${escapeHtml(o.text)}</div>`;
    }).join('');
    
    card.innerHTML = `
      <div class="list-item-header">
        <span class="list-item-topic">${q.tenChuDe || 'Chương chung'}</span>
        <div style="display:flex; gap: 8px;">
          <button class="theme-btn" style="width:32px; height:32px; font-size:14px; background:${isMastered ? 'var(--success-light)' : 'transparent'}; color:${isMastered ? 'var(--success)' : 'var(--text-muted)'}" onclick="toggleMasteredList('${q.maCauHoi}', this)" title="Đã thuộc lòng">
            <i class="fa-solid fa-circle-check"></i>
          </button>
          <button class="theme-btn" style="width:32px; height:32px; font-size:14px; background:${isFlagged ? 'var(--warning-light)' : 'transparent'}; color:${isFlagged ? 'var(--warning)' : 'var(--text-muted)'}" onclick="toggleFlaggedList('${q.maCauHoi}', this)" title="Cần ôn tập">
            <i class="fa-solid fa-star"></i>
          </button>
        </div>
      </div>
      <div class="list-item-title">${q.cauHoi}</div>
      <div class="list-item-options">${optHtml}</div>
      ${q.ghiChu ? `<div style="margin-top: 10px; font-size: 12.5px; color: var(--primary); background: var(--primary-light); padding: 8px 12px; border-radius: 8px;"><i class="fa-solid fa-lightbulb"></i> <strong>Ghi chú:</strong> ${escapeHtml(q.ghiChu)}</div>` : ''}
    `;
    fragment.appendChild(card);
  }
  
  container.appendChild(fragment);
  currentlyRenderedCount = end;
}

// Throttled window scroll listener to dynamically load next batch of questions
let isScrolling = false;
window.addEventListener('scroll', () => {
  if (isScrolling) return;
  isScrolling = true;
  requestAnimationFrame(() => {
    if (activeTab === 'all-view') {
      const scrollPos = window.innerHeight + window.scrollY;
      const threshold = document.documentElement.scrollHeight - 1000;
      if (scrollPos >= threshold) {
        renderNextQuestionBatch();
      }
    }
    isScrolling = false;
  });
}, { passive: true });

function toggleMasteredList(qId, btn) {
  if (masteredQuestions.has(qId)) {
    masteredQuestions.delete(qId);
    btn.style.background = 'transparent';
    btn.style.color = 'var(--text-muted)';
  } else {
    masteredQuestions.add(qId);
    reviewQuestions.delete(qId);
    btn.style.background = 'var(--success-light)';
    btn.style.color = 'var(--success)';
    
    // De-highlight star if active
    const starBtn = btn.nextElementSibling;
    if (starBtn) {
      starBtn.style.background = 'transparent';
      starBtn.style.color = 'var(--text-muted)';
    }
  }
  saveProgress();
}

function toggleFlaggedList(qId, btn) {
  if (reviewQuestions.has(qId)) {
    reviewQuestions.delete(qId);
    btn.style.background = 'transparent';
    btn.style.color = 'var(--text-muted)';
  } else {
    reviewQuestions.add(qId);
    masteredQuestions.delete(qId);
    btn.style.background = 'var(--warning-light)';
    btn.style.color = 'var(--warning)';
    
    // De-highlight checkmark if active
    const checkBtn = btn.previousElementSibling;
    if (checkBtn) {
      checkBtn.style.background = 'transparent';
      checkBtn.style.color = 'var(--text-muted)';
    }
  }
  saveProgress();
}


// ==================== UTILS ====================
function escapeHtml(text) {
  return String(text || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ==================== EXAM COUNTDOWN TIMER ====================
function initExamCountdown() {
  // Target date: June 16, 2026, 08:00:00 (Local time)
  // Month is 0-based, so June is 5
  const targetDate = new Date(2026, 5, 16, 8, 0, 0);

  function updateCountdown() {
    const now = new Date();
    const timeDiff = targetDate.getTime() - now.getTime();

    const daysEls = document.querySelectorAll('.cd-days');
    const hoursEls = document.querySelectorAll('.cd-hours');
    const minsEls = document.querySelectorAll('.cd-mins');
    const secsEls = document.querySelectorAll('.cd-secs');
    const labelEls = document.querySelectorAll('.countdown-label span');

    if (timeDiff <= 0) {
      daysEls.forEach(el => el.textContent = '∞');
      hoursEls.forEach(el => el.textContent = '∞');
      minsEls.forEach(el => el.textContent = '∞');
      secsEls.forEach(el => el.textContent = '∞');
      labelEls.forEach(el => {
        el.textContent = 'Hệ thống mở ôn tập tự do';
      });
      return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((timeDiff % (1000 * 60)) / 1000);

    const dStr = days.toString().padStart(2, '0');
    const hStr = hours.toString().padStart(2, '0');
    const mStr = mins.toString().padStart(2, '0');
    const sStr = secs.toString().padStart(2, '0');

    daysEls.forEach(el => el.textContent = dStr);
    hoursEls.forEach(el => el.textContent = hStr);
    minsEls.forEach(el => el.textContent = mStr);
    secsEls.forEach(el => el.textContent = sStr);
  }

  // Update immediately and then every second
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// ==================== DONATION MODAL ====================
function initDonationModal() {
  const openBtn = document.getElementById('open-donate-btn');
  const closeBtn = document.getElementById('close-donate-btn');
  const modal = document.getElementById('donate-modal');

  if (openBtn && modal) {
    openBtn.addEventListener('click', () => {
      modal.style.display = 'flex';
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  // Close when clicking outside the modal content
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
}

function openDonateModal() {
  const modal = document.getElementById('donate-modal');
  if (modal) {
    modal.style.display = 'flex';
  }
}

// ==================== SPECIAL USER CHECK & AI CHAT BOX ====================
function isSpecialUser() {
  const savedName = localStorage.getItem('nvhq_hoten');
  const savedMsv = localStorage.getItem('nvhq_msv');
  const savedClass = localStorage.getItem('nvhq_lop');
  
  if (!savedName || !savedMsv || !savedClass) return false;
  
  const normName = normalizeString(savedName);
  const normMsv = normalizeString(savedMsv);
  const normClass = normalizeString(savedClass);
  
  const isChien = normName === normalizeString("Nguyễn Ngọc Chiến") && normMsv === "999999" && normClass === normalizeString("KTN64ĐH");
  const isPhu = normName === normalizeString("Nguyễn Đức Phú") && normMsv === "103486" && normClass === normalizeString("KTN64ĐH");
  const isHue = normName === normalizeString("Nguyễn Thị Diệu Huế") && normMsv === "103932" && normClass === normalizeString("LQC64ĐH");
  
  return isChien || isPhu || isHue;
}

let aiChatMessages = [];

function updateAIChatVisibility() {
  const toggleBtn = document.getElementById('ai-chat-toggle');
  const chatWindow = document.getElementById('ai-chat-window');
  
  const isAuthenticated = !!localStorage.getItem('nvhq_session_token');
  const specialUser = isSpecialUser();
  
  if (isAuthenticated && specialUser) {
    if (!toggleBtn) {
      createAIChatElements();
    }
  } else {
    if (toggleBtn) toggleBtn.remove();
    if (chatWindow) chatWindow.remove();
  }
}

let customsReferenceText = "";

async function loadCustomsReference() {
  try {
    const response = await fetch('/customs_reference.txt');
    if (response.ok) {
      customsReferenceText = await response.text();
      console.log("Customs reference database loaded.");
    }
  } catch (e) {
    console.error("Error loading customs reference:", e);
  }
}

function getSystemPromptContent() {
  const displayName = localStorage.getItem('nvhq_hoten') || 'học viên';
  const displayClass = localStorage.getItem('nvhq_lop') || 'KTN64ĐH';
  let basePrompt = `Bạn là một trợ lý học tập AI chuyên về Nghiệp vụ Hải quan (NVHQ) Việt Nam, được tích hợp trong ứng dụng ôn tập 600 câu hỏi trắc nghiệm của học viên ${displayName} lớp ${displayClass}. Nhiệm vụ của bạn là giải thích cặn kẽ, chính xác và dễ hiểu các câu hỏi trắc nghiệm hải quan, dẫn chiếu đến các luật, nghị định, thông tư liên quan khi cần thiết. TẤT CẢ các đáp án được lưu trong đề thi/hệ thống của thầy giáo (Database Correct Answer) đều được xem là đáp án chuẩn xác nhất, bạn có nhiệm vụ giải thích và lập luận logic để dẫn đến đáp án đó.`;
  
  if (customsReferenceText) {
    basePrompt += "\n\nDưới đây là tài liệu tham khảo chính thức về các luật, nghị định, thông tư hải quan Việt Nam mới nhất năm 2025/2026. Hãy sử dụng tài liệu này để đưa ra câu trả lời và lời giải thích chính xác theo nghiệp vụ:\n\n" + customsReferenceText;
  } else {
    basePrompt += "\n\nHãy tuân thủ các quy tắc Hải quan Việt Nam bao gồm: Trị giá tính thuế tính theo trị giá giao dịch; các khoản giảm giá chỉ được trừ nếu thỏa thuận trước khi xếp tàu; các khoản phí người bán trả (giá CIF/CIP) không cộng thêm; từ 01/03/2025 theo Quyết định 382/QĐ-BTC thì Cục Hải quan là cơ quan đứng đầu hệ thống hải quan Việt Nam (không còn Tổng cục Hải quan).";
  }
  
  return basePrompt;
}

function createAIChatElements() {
  // Check if already created
  if (document.getElementById('ai-chat-toggle')) return;

  const displayName = localStorage.getItem('nvhq_hoten') || 'bạn';

  const toggle = document.createElement('button');
  toggle.id = 'ai-chat-toggle';
  toggle.innerHTML = '<i class="fa-solid fa-robot"></i>';
  toggle.title = 'Trợ lý học tập NVHQ AI';
  toggle.onclick = toggleAIChat;
  document.body.appendChild(toggle);

  const windowDiv = document.createElement('div');
  windowDiv.id = 'ai-chat-window';
  windowDiv.innerHTML = `
    <div class="chat-header">
      <div class="chat-title">
        <i class="fa-solid fa-robot"></i>
        <span>Trợ lý học tập NVHQ AI</span>
      </div>
      <div style="display: flex; align-items: center; gap: 10px;">
        <button class="chat-min-btn" onclick="toggleAIChatMinimize(event)" title="Thu nhỏ/Mở rộng">
          <i class="fa-solid fa-minus" id="ai-chat-min-icon"></i>
        </button>
        <button class="chat-close-btn" onclick="toggleAIChat()">&times;</button>
      </div>
    </div>
    <div class="chat-messages" id="ai-chat-messages-container">
      <div class="chat-bubble ai">
        <p>Xin chào <strong>${escapeHtml(displayName)}</strong>! Tôi là trợ lý học tập AI được thiết kế riêng cho bạn.</p>
        <p>Tôi có thể giúp bạn giải đáp thắc mắc về 600 câu hỏi trắc nghiệm Nghiệp vụ Hải quan. Khi bạn đang luyện tập hoặc thi thử, bạn có thể click nút <strong>💡 Giải thích câu hỏi hiện tại</strong> bên dưới để tôi giải thích chi tiết câu đó nhé!</p>
      </div>
    </div>
    <div class="chat-context-box" id="ai-chat-context-area" style="display: none;">
      <button class="chat-context-btn" onclick="sendActiveQuestionContext()">
        <i class="fa-solid fa-lightbulb"></i> Giải thích câu hỏi hiện tại
      </button>
    </div>
    <form class="chat-input-area" onsubmit="event.preventDefault(); sendChatMessage();">
      <input type="text" id="ai-chat-input-field" class="chat-input" placeholder="Hỏi tôi bất cứ điều gì về Hải quan..." autocomplete="off">
      <button type="submit" class="chat-send-btn">
        <i class="fa-solid fa-paper-plane"></i>
      </button>
    </form>
  `;
  document.body.appendChild(windowDiv);

  // Make the window draggable
  makeElementDraggable(windowDiv, windowDiv.querySelector('.chat-header'));

  // Initialize messages history
  aiChatMessages = [
    {
      role: "system",
      content: getSystemPromptContent()
    }
  ];
}

function toggleAIChat() {
  const windowEl = document.getElementById('ai-chat-window');
  if (!windowEl) return;
  
  windowEl.classList.toggle('visible');
  
  if (windowEl.classList.contains('visible')) {
    updateAIChatContextBtn();
    
    // Focus input field
    const inputField = document.getElementById('ai-chat-input-field');
    if (inputField) setTimeout(() => inputField.focus(), 100);
  }
}

function toggleAIChatMinimize(event) {
  if (event) event.stopPropagation();
  const windowEl = document.getElementById('ai-chat-window');
  const iconEl = document.getElementById('ai-chat-min-icon');
  if (!windowEl) return;
  
  windowEl.classList.toggle('minimized');
  
  if (windowEl.classList.contains('minimized')) {
    if (iconEl) {
      iconEl.className = 'fa-solid fa-chevron-up';
    }
  } else {
    if (iconEl) {
      iconEl.className = 'fa-solid fa-minus';
    }
  }
}

function getActiveQuestionContext() {
  const toggleBtn = document.getElementById('ai-chat-toggle');
  if (!toggleBtn) return null;
  
  if (activeTab === 'mock-view') {
    const activeArea = document.getElementById('quiz-active-area');
    if (activeArea && activeArea.style.display === 'block') {
      const q = mockQuestions[mockCurrentIndex];
      if (q) return q;
    }
  } else if (activeTab === 'practice-view') {
    const activeArea = document.getElementById('practice-active');
    if (activeArea && activeArea.style.display === 'block') {
      const q = practiceQuestions[practiceCurrentIndex];
      if (q) return q;
    }
  }
  return null;
}

function updateAIChatContextBtn() {
  const contextArea = document.getElementById('ai-chat-context-area');
  if (!contextArea) return;
  
  const context = getActiveQuestionContext();
  if (context) {
    contextArea.style.display = 'flex';
  } else {
    contextArea.style.display = 'none';
  }
}

function sendActiveQuestionContext() {
  const q = getActiveQuestionContext();
  if (!q) return;
  
  const optionsText = q.options.map(opt => `   ${opt.key}. ${opt.text}`).join('\n');
  const fullPrompt = `Hãy giải thích câu hỏi này giúp tôi:\nĐề bài: ${q.cauHoi}\nĐáp án:\n${optionsText}\nĐáp án đúng là: ${q.correctAnswer}`;
  
  aiChatMessages.push({ role: "user", content: fullPrompt });
  
  appendChatBubble(`💡 <em>Yêu cầu giải thích câu hỏi:</em><br><strong>${escapeHtml(q.cauHoi)}</strong>`, 'user');
  
  fetchAIResponse();
}

function sendChatMessage() {
  const inputEl = document.getElementById('ai-chat-input-field');
  if (!inputEl) return;
  
  const text = inputEl.value.trim();
  if (!text) return;
  
  inputEl.value = '';
  
  aiChatMessages.push({ role: "user", content: text });
  
  appendChatBubble(escapeHtml(text), 'user');
  
  fetchAIResponse();
}

function appendChatBubble(htmlContent, senderClass) {
  const container = document.getElementById('ai-chat-messages-container');
  if (!container) return;
  
  const bubble = document.createElement('div');
  bubble.className = `chat-bubble ${senderClass}`;
  bubble.innerHTML = htmlContent;
  container.appendChild(bubble);
  
  if (senderClass === 'ai') {
    // Smooth scroll to the top of the newly added AI answer bubble
    setTimeout(() => {
      container.scrollTo({
        top: bubble.offsetTop - 10,
        behavior: 'smooth'
      });
    }, 50);
  } else {
    // Standard scroll to bottom for user queries
    container.scrollTop = container.scrollHeight;
  }
}

async function fetchAIResponse() {
  const messagesContainer = document.getElementById('ai-chat-messages-container');
  if (!messagesContainer) return;
  
  const inputField = document.getElementById('ai-chat-input-field');
  if (inputField) inputField.disabled = true;
  
  const sendBtn = document.querySelector('.chat-send-btn');
  if (sendBtn) sendBtn.disabled = true;
  
  const typingIndicator = document.createElement('div');
  typingIndicator.id = 'ai-chat-typing-indicator';
  typingIndicator.className = 'chat-typing';
  typingIndicator.innerHTML = '<span></span><span></span><span></span>';
  messagesContainer.appendChild(typingIndicator);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
  
  try {
    const sessionToken = localStorage.getItem('nvhq_session_token') || '';
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionToken}`
      },
      body: JSON.stringify({
        messages: aiChatMessages,
        temperature: 0.3
      })
    });
    
    const indicator = document.getElementById('ai-chat-typing-indicator');
    if (indicator) indicator.remove();
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP error ${response.status}`);
    }
    
    const data = await response.json();
    const aiMessage = data.choices[0].message.content;
    
    aiChatMessages.push({ role: "assistant", content: aiMessage });
    
    appendChatBubble(parseMarkdown(aiMessage), 'ai');
  } catch (error) {
    console.error("Error communicating with AI:", error);
    const indicator = document.getElementById('ai-chat-typing-indicator');
    if (indicator) indicator.remove();
    
    appendChatBubble(`<span style="color: var(--danger-text); font-weight: 600;"><i class="fa-solid fa-triangle-exclamation"></i> Lỗi: ${escapeHtml(error.message)}. Vui lòng thử lại!</span>`, 'ai');
  } finally {
    if (inputField) inputField.disabled = false;
    if (sendBtn) sendBtn.disabled = false;
    if (inputField) inputField.focus();
  }
}

function parseMarkdown(text) {
  if (!text) return '';
  let html = escapeHtml(text);
  
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  html = html.replace(/^&gt;\s+(.*?)$/gm, '<blockquote>$1</blockquote>');
  html = html.replace(/^\s*[-*]\s+(.*?)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*?<\/li>)+/gs, match => `<ul>${match}</ul>`);
  
  html = html.replace(/^\s*(\d+)\.\s+(.*?)$/gm, '<li data-num="$1">$2</li>');
  html = html.replace(/((?:<li data-num="\d+">.*?<\/li>)+)/gs, match => {
    const items = match.replace(/<li data-num="\d+">(.*?)<\/li>/g, '<li>$1</li>');
    return `<ol>${items}</ol>`;
  });
  
  const paragraphs = html.split(/\n\n+/);
  html = paragraphs.map(p => {
    const trimmed = p.trim();
    if (trimmed.startsWith('<ul') || trimmed.startsWith('<ol') || trimmed.startsWith('<blockquote')) {
      return p;
    }
    return `<p>${p.replace(/\n/g, '<br>')}</p>`;
  }).join('');
  
  return html;
}

function makeElementDraggable(elmnt, header) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  
  const handle = header || elmnt;
  
  handle.addEventListener('mousedown', dragMouseDown, { passive: false });
  handle.addEventListener('touchstart', dragMouseDown, { passive: false });

  function dragMouseDown(e) {
    // If clicking input, button, links, or close button, do not drag
    if (
      e.target.tagName === 'INPUT' || 
      e.target.tagName === 'BUTTON' || 
      e.target.tagName === 'A' || 
      e.target.closest('button') ||
      e.target.closest('a') ||
      e.target.classList.contains('chat-close-btn')
    ) {
      return;
    }
    
    // Convert fixed layout to absolute top/left coordinates on drag start to prevent jumping
    if (!elmnt.style.top || elmnt.style.top === 'auto') {
      const rect = elmnt.getBoundingClientRect();
      elmnt.style.top = rect.top + 'px';
      elmnt.style.left = rect.left + 'px';
      elmnt.style.bottom = 'auto';
      elmnt.style.right = 'auto';
    }
    
    if (e.type === 'touchstart') {
      pos3 = e.touches[0].clientX;
      pos4 = e.touches[0].clientY;
    } else {
      pos3 = e.clientX;
      pos4 = e.clientY;
      if (e.cancelable) {
        e.preventDefault();
      }
    }
    
    document.addEventListener('mousemove', elementDrag, { passive: false });
    document.addEventListener('touchmove', elementDrag, { passive: false });
    document.addEventListener('mouseup', closeDragElement);
    document.addEventListener('touchend', closeDragElement);
  }

  function elementDrag(e) {
    if (e.cancelable) {
      e.preventDefault();
    }
    
    let clientX, clientY;
    if (e.type === 'touchmove') {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    
    pos1 = pos3 - clientX;
    pos2 = pos4 - clientY;
    pos3 = clientX;
    pos4 = clientY;
    
    // Parse the current top/left directly from styles to avoid offsetParent issues on fixed elements
    const currentTop = parseFloat(elmnt.style.top) || 0;
    const currentLeft = parseFloat(elmnt.style.left) || 0;
    
    let newTop = currentTop - pos2;
    let newLeft = currentLeft - pos1;
    
    // Contain window bounds within the viewport
    const maxLeft = window.innerWidth - elmnt.offsetWidth;
    const maxTop = window.innerHeight - elmnt.offsetHeight;
    
    newLeft = Math.max(0, Math.min(newLeft, maxLeft));
    newTop = Math.max(0, Math.min(newTop, maxTop));
    
    elmnt.style.top = newTop + "px";
    elmnt.style.left = newLeft + "px";
  }

  function closeDragElement() {
    document.removeEventListener('mousemove', elementDrag);
    document.removeEventListener('touchmove', elementDrag);
    document.removeEventListener('mouseup', closeDragElement);
    document.removeEventListener('touchend', closeDragElement);
  }
}


