// Ngân hàng câu hỏi Nghiệp vụ Hải quan (NVHQ) - 600 câu chuẩn
const NVHQ_FALLBACK_QUESTIONS = [
  {
    "maCauHoi": "CD001_0001",
    "stt": 1,
    "mucDo": "NB",
    "tenChuDe": "Chương 1 Tổng quan về Hải quan",
    "cauHoi": "Trong cơ cấu tổ chức của Hải quan Việt Nam hiện nay, cơ quan đứng đầu là:",
    "options": [
      {
        "key": "A",
        "text": "Sở Thuế quan và Thuế gián thu"
      },
      {
        "key": "B",
        "text": "Cục Hải quan"
      },
      {
        "key": "C",
        "text": "Sở Hải quan Trung ương"
      },
      {
        "key": "D",
        "text": "Tổng cục Hải quan"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD001_0002",
    "stt": 2,
    "mucDo": "NB",
    "tenChuDe": "Chương 1 Tổng quan về Hải quan",
    "cauHoi": "Địa điểm nào sau đây thuộc địa bàn hoạt động hải quan?",
    "options": [
      {
        "key": "A",
        "text": "Khu công nghiệp"
      },
      {
        "key": "B",
        "text": "Khu sản xuất hàng phụ trợ"
      },
      {
        "key": "C",
        "text": "Kho bảo thuế"
      },
      {
        "key": "D",
        "text": "Khu công nghệ cao"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD001_0003",
    "stt": 3,
    "mucDo": "NB",
    "tenChuDe": "Chương 1 Tổng quan về Hải quan",
    "cauHoi": "Đội Thông quan thuộc Chi cục Hải quan khu vực III có địa chỉ tại đâu?",
    "options": [
      {
        "key": "A",
        "text": "Số 159 đường Lê Hồng Phong, Hải Phòng"
      },
      {
        "key": "B",
        "text": "Số 05 đường Chùa Vẽ, Đông Hải, Hải Phòng"
      },
      {
        "key": "C",
        "text": "Số 132B Nguyễn Bỉnh Khiêm, Đông Hải, Hải Phòng"
      },
      {
        "key": "D",
        "text": "Km6 đường Đình Vũ, Đông Hải 2, Hải An, Hải Phòng"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD001_0004",
    "stt": 4,
    "mucDo": "NB",
    "tenChuDe": "Chương 1 Tổng quan về Hải quan",
    "cauHoi": "Mô hình thông quan tập trung được ngành Hải quan thí điểm tại đơn vị nào?",
    "options": [
      {
        "key": "A",
        "text": "Chi cục Hải quan khu vực I"
      },
      {
        "key": "B",
        "text": "Chi cục Hải quan khu vực II"
      },
      {
        "key": "C",
        "text": "Chi cục Hải quan khu vực III"
      },
      {
        "key": "D",
        "text": "Chi cục Hải quan khu vực IV"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD001_0005",
    "stt": 5,
    "mucDo": "NB",
    "tenChuDe": "Chương 1 Tổng quan về Hải quan",
    "cauHoi": "Một lô hàng nhập khẩu được dỡ xuống Cảng Cát Lái và đang chờ hoàn tất thủ tục để đưa ra khỏi cảng. Nhận định nào đúng?",
    "options": [
      {
        "key": "A",
        "text": "Lô hàng chưa thuộc phạm vi quản lý của hải quan vì chưa đưa về kho doanh nghiệp"
      },
      {
        "key": "B",
        "text": "Lô hàng chỉ thuộc phạm vi quản lý của hải quan sau khi doanh nghiệp mở tờ khai"
      },
      {
        "key": "C",
        "text": "Lô hàng đang nằm trong địa bàn hoạt động hải quan"
      },
      {
        "key": "D",
        "text": "Lô hàng chỉ chịu quản lý của doanh nghiệp khai thác cảng"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD001_0006",
    "stt": 6,
    "mucDo": "NB",
    "tenChuDe": "Chương 1 Tổng quan về Hải quan",
    "cauHoi": "Theo mô hình tổ chức hiện nay, hệ thống Hải quan được tổ chức theo mấy cấp?",
    "options": [
      {
        "key": "A",
        "text": "01 cấp"
      },
      {
        "key": "B",
        "text": "02 cấp"
      },
      {
        "key": "C",
        "text": "03 cấp"
      },
      {
        "key": "D",
        "text": "04 cấp"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD001_0007",
    "stt": 7,
    "mucDo": "NB",
    "tenChuDe": "Chương 1 Tổng quan về Hải quan",
    "cauHoi": "Nhận định nào thể hiện đúng mô hình tổ chức của hệ thống Hải quan hiện nay?",
    "options": [
      {
        "key": "A",
        "text": "Cục Hải quan - Cục địa phương - Hải quan cửa khẩu"
      },
      {
        "key": "B",
        "text": "Tổng cục Hải quan - Cục tỉnh, thành phố - Chi cục"
      },
      {
        "key": "C",
        "text": "Cục Hải quan - Chi cục khu vực - Hải quan cửa khẩu"
      },
      {
        "key": "D",
        "text": "Cục Hải quan - Hải quan khu vực - Đội cửa khẩu"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD001_0008",
    "stt": 8,
    "mucDo": "NB",
    "tenChuDe": "Chương 1 Tổng quan về Hải quan",
    "cauHoi": "Theo mô hình tổ chức hiện nay, cấp trung gian giữa Cục Hải quan và Hải quan cửa khẩu, ngoài cửa khẩu là cấp nào?",
    "options": [
      {
        "key": "A",
        "text": "Cục Hải quan tỉnh, thành phố"
      },
      {
        "key": "B",
        "text": "Cục Hải quan địa phương"
      },
      {
        "key": "C",
        "text": "Chi cục Hải quan khu vực"
      },
      {
        "key": "D",
        "text": "Hải quan khu vực"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD001_0009",
    "stt": 9,
    "mucDo": "NB",
    "tenChuDe": "Chương 1 Tổng quan về Hải quan",
    "cauHoi": "Theo mô hình tổ chức hiện nay, cấp trung ương của hệ thống Hải quan là cơ quan nào?",
    "options": [
      {
        "key": "A",
        "text": "Tổng cục Hải quan"
      },
      {
        "key": "B",
        "text": "Cục Hải quan"
      },
      {
        "key": "C",
        "text": "Chi cục Hải quan khu vực"
      },
      {
        "key": "D",
        "text": "Hải quan cửa khẩu và ngoài cửa khẩu"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD001_0010",
    "stt": 10,
    "mucDo": "NB",
    "tenChuDe": "Chương 1 Tổng quan về Hải quan",
    "cauHoi": "Khi lập dự toán thu ngân sách nhà nước hằng năm, Cục Hải quan căn cứ vào nhóm hoạt động nào?",
    "options": [
      {
        "key": "A",
        "text": "Sản xuất, phân phối và bán lẻ hàng hóa"
      },
      {
        "key": "B",
        "text": "Xuất khẩu, nhập khẩu và quá cảnh"
      },
      {
        "key": "C",
        "text": "Đăng ký kinh doanh và đầu tư"
      },
      {
        "key": "D",
        "text": "Vận tải nội địa và kho bãi"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD001_0011",
    "stt": 11,
    "mucDo": "NB",
    "tenChuDe": "Chương 1 Tổng quan về Hải quan",
    "cauHoi": "Nội dung nào sau đây không thuộc nhiệm vụ của cơ quan Hải quan Việt Nam?",
    "options": [
      {
        "key": "A",
        "text": "Thực hiện kiểm tra, giám sát hàng hóa, phương tiện vận tải"
      },
      {
        "key": "B",
        "text": "Thống kê hàng hóa xuất khẩu, nhập khẩu"
      },
      {
        "key": "C",
        "text": "Phòng, chống buôn lậu, vận chuyển trái phép qua biên giới"
      },
      {
        "key": "D",
        "text": "Cấp giấy phép kinh doanh xuất khẩu, nhập khẩu cho doanh nghiệp"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD001_0012",
    "stt": 12,
    "mucDo": "NB",
    "tenChuDe": "Chương 1 Tổng quan về Hải quan",
    "cauHoi": "Khu vực nào sau đây không thuộc khu phi thuế quan?",
    "options": [
      {
        "key": "A",
        "text": "Khu chế xuất"
      },
      {
        "key": "B",
        "text": "Kho ngoại quan"
      },
      {
        "key": "C",
        "text": "Kho bảo thuế"
      },
      {
        "key": "D",
        "text": "Khu công nghiệp"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD001_0013",
    "stt": 13,
    "mucDo": "NB",
    "tenChuDe": "Chương 1 Tổng quan về Hải quan",
    "cauHoi": "Tổ chức tiền thân của Hải quan Việt Nam, được thành lập năm 1945 để thực hiện nhiệm vụ thu thuế và kiểm soát hàng hóa xuất nhập qua biên giới, là tổ chức nào?",
    "options": [
      {
        "key": "A",
        "text": "Sở Hải quan Trung ương"
      },
      {
        "key": "B",
        "text": "Sở Thuế quan và Thuế gián thu"
      },
      {
        "key": "C",
        "text": "Cục Hải quan Việt Nam"
      },
      {
        "key": "D",
        "text": "Tổng cục Hải quan Việt Nam"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD002_0001",
    "stt": 14,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.1 Hệ thống pháp quy quản lý XNK",
    "cauHoi": "Hàng hóa nào sau đây không thuộc đối tượng kiểm tra chuyên ngành?",
    "options": [
      {
        "key": "A",
        "text": "Hàng hóa phải kiểm dịch động vật"
      },
      {
        "key": "B",
        "text": "Hàng hóa phải kiểm tra y tế"
      },
      {
        "key": "C",
        "text": "Hàng hóa phải kiểm tra chất lượng"
      },
      {
        "key": "D",
        "text": "Hàng hóa xuất nhập khẩu có điều kiện"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD002_0002",
    "stt": 15,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.1 Hệ thống pháp quy quản lý XNK",
    "cauHoi": "Chính sách mặt hàng trong hoạt động xuất nhập khẩu được hiểu là gì?",
    "options": [
      {
        "key": "A",
        "text": "Các quy định về quy trình và thủ tục thông quan hàng hóa của cơ quan Hải quan"
      },
      {
        "key": "B",
        "text": "Các quy định của Nhà nước về việc cho phép, cấm hoặc hạn chế xuất nhập khẩu đối với từng loại hàng hóa"
      },
      {
        "key": "C",
        "text": "Các quy định về biểu thuế và thuế suất áp dụng cho hàng hóa khi đi qua biên giới"
      },
      {
        "key": "D",
        "text": "Các quy định về biện pháp nghiệp vụ nhằm bảo đảm nguyên trạng hàng hóa trong quá trình vận chuyển"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD002_0003",
    "stt": 16,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.1 Hệ thống pháp quy quản lý XNK",
    "cauHoi": "Hàng hóa thuộc diện \"cấm xuất khẩu\" là hàng hóa:",
    "options": [
      {
        "key": "A",
        "text": "Được xuất khẩu khi đáp ứng điều kiện chuyên ngành"
      },
      {
        "key": "B",
        "text": "Được xuất khẩu khi có giấy phép xuất khẩu"
      },
      {
        "key": "C",
        "text": "Không được phép xuất khẩu theo quy định của pháp luật"
      },
      {
        "key": "D",
        "text": "Được xuất khẩu sau khi có kết quả kiểm tra đạt yêu cầu"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD002_0004",
    "stt": 17,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.1 Hệ thống pháp quy quản lý XNK",
    "cauHoi": "Công ty A dự kiến xuất khẩu một lô gỗ tròn thuộc Danh mục hàng hóa cấm xuất khẩu. Theo quy định, lô hàng này được xử lý như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Được xuất khẩu nếu doanh nghiệp đã nộp đủ thuế xuất khẩu"
      },
      {
        "key": "B",
        "text": "Được xuất khẩu nếu có hợp đồng ngoại thương hợp lệ"
      },
      {
        "key": "C",
        "text": "Không được phép xuất khẩu theo quy định của pháp luật"
      },
      {
        "key": "D",
        "text": "Được xuất khẩu nếu khai báo đúng mã số HS"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD002_0005",
    "stt": 18,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.1 Hệ thống pháp quy quản lý XNK",
    "cauHoi": "Công ty H muốn xuất khẩu một lô phế liệu kim loại thuộc Danh mục hàng hóa cấm xuất khẩu. Trường hợp thông thường, cơ quan hải quan sẽ xử lý như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Cho xuất khẩu nếu hàng hóa có chứng từ mua bán hợp lệ"
      },
      {
        "key": "B",
        "text": "Cho xuất khẩu nếu doanh nghiệp khai đúng mã số HS"
      },
      {
        "key": "C",
        "text": "Cho xuất khẩu nếu người mua nước ngoài đã thanh toán"
      },
      {
        "key": "D",
        "text": "Không giải quyết thủ tục xuất khẩu đối với lô hàng này"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD002_0006",
    "stt": 19,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.1 Hệ thống pháp quy quản lý XNK",
    "cauHoi": "Doanh nghiệp A xuất khẩu một lô hàng thuộc diện phải có giấy phép xuất khẩu của Bộ quản lý chuyên ngành. Điều kiện quan trọng để hải quan giải quyết thủ tục là gì?",
    "options": [
      {
        "key": "A",
        "text": "Có chứng từ thanh toán của người mua nước ngoài"
      },
      {
        "key": "B",
        "text": "Có giấy phép xuất khẩu hợp lệ của cơ quan có thẩm quyền"
      },
      {
        "key": "C",
        "text": "Có cam kết giao hàng đúng thời hạn trong hợp đồng"
      },
      {
        "key": "D",
        "text": "Có chứng nhận bảo hiểm hàng hóa xuất khẩu"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD002_0007",
    "stt": 20,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.1 Hệ thống pháp quy quản lý XNK",
    "cauHoi": "Công ty B xuất khẩu một lô hàng thuộc diện phải kiểm dịch thực vật. Cơ quan hải quan căn cứ vào chứng từ nào để giải quyết thủ tục theo quy định?",
    "options": [
      {
        "key": "A",
        "text": "Hợp đồng mua bán ngoại thương"
      },
      {
        "key": "B",
        "text": "Phiếu đóng gói của lô hàng xuất khẩu"
      },
      {
        "key": "C",
        "text": "Giấy chứng nhận kiểm dịch thực vật hợp lệ"
      },
      {
        "key": "D",
        "text": "Chứng từ thanh toán của người mua nước ngoài"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD002_0008",
    "stt": 21,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.1 Hệ thống pháp quy quản lý XNK",
    "cauHoi": "Công ty D xuất khẩu một mặt hàng thuộc diện cấm xuất khẩu nhưng có văn bản cho phép của Thủ tướng Chính phủ trong trường hợp đặc biệt. Cơ quan hải quan sẽ xử lý thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Từ chối làm thủ tục vì hàng hóa thuộc diện cấm xuất khẩu"
      },
      {
        "key": "B",
        "text": "Xem xét làm thủ tục nếu văn bản cho phép phù hợp quy định"
      },
      {
        "key": "C",
        "text": "Chỉ yêu cầu doanh nghiệp nộp thêm thuế xuất khẩu bổ sung"
      },
      {
        "key": "D",
        "text": "Chuyển lô hàng sang diện kiểm tra chuyên ngành thông thường"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD002_0009",
    "stt": 22,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.1 Hệ thống pháp quy quản lý XNK",
    "cauHoi": "Trong các lô hàng sau, lô hàng nào thuộc diện cấm nhập khẩu theo quy định?",
    "options": [
      {
        "key": "A",
        "text": "Lô hàng ô tô mới tay lái bên trái nhập khẩu để kinh doanh"
      },
      {
        "key": "B",
        "text": "Lô hàng xe nâng hàng chuyên dùng trong kho, cảng"
      },
      {
        "key": "C",
        "text": "Lô hàng ô tô tay lái bên phải nhập khẩu để lưu thông"
      },
      {
        "key": "D",
        "text": "Lô hàng xe chuyên dùng hoạt động trong khu vực sân bay"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD002_0010",
    "stt": 23,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.1 Hệ thống pháp quy quản lý XNK",
    "cauHoi": "Trong các lô hàng sau, lô hàng nào thuộc diện cấm nhập khẩu theo quy định?",
    "options": [
      {
        "key": "A",
        "text": "Lô hàng máy điều hòa mới 100% sử dụng môi chất lạnh hợp quy"
      },
      {
        "key": "B",
        "text": "Lô hàng phụ tùng ô tô mới nhập khẩu để thay thế, sửa chữa"
      },
      {
        "key": "C",
        "text": "Lô hàng thiết bị làm lạnh đã qua sử dụng có sử dụng CFC"
      },
      {
        "key": "D",
        "text": "Lô hàng máy bơm nước mới nhập khẩu phục vụ sản xuất"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD002_0011",
    "stt": 24,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.1 Hệ thống pháp quy quản lý XNK",
    "cauHoi": "Doanh nghiệp A muốn xuất khẩu một lô gỗ tròn khai thác từ rừng tự nhiên trong nước. Theo chính sách mặt hàng hiện hành, lô hàng này thuộc diện nào?",
    "options": [
      {
        "key": "A",
        "text": "Được xuất khẩu bình thường nếu có hợp đồng thương mại hợp lệ"
      },
      {
        "key": "B",
        "text": "Được xuất khẩu sau khi doanh nghiệp hoàn thành nghĩa vụ thuế xuất khẩu"
      },
      {
        "key": "C",
        "text": "Thuộc danh mục hàng hóa cấm xuất khẩu theo quy định hiện hành"
      },
      {
        "key": "D",
        "text": "Được phép xuất khẩu nếu có giấy phép kiểm dịch thực vật của cơ quan quản lý"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD002_0012",
    "stt": 25,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.1 Hệ thống pháp quy quản lý XNK",
    "cauHoi": "Doanh nghiệp B nhập khẩu một lô quần áo đã qua sử dụng để kinh doanh tại thị trường Việt Nam. Theo chính sách mặt hàng hiện hành, lô hàng này thuộc diện nào?",
    "options": [
      {
        "key": "A",
        "text": "Được nhập khẩu bình thường nếu hàng hóa còn giá trị sử dụng trên 80%"
      },
      {
        "key": "B",
        "text": "Được nhập khẩu nếu doanh nghiệp cung cấp được chứng từ chứng minh nguồn gốc"
      },
      {
        "key": "C",
        "text": "Thuộc danh mục hàng hóa cấm nhập khẩu theo quy định hiện hành"
      },
      {
        "key": "D",
        "text": "Được nhập khẩu sau khi thực hiện kiểm tra nhà nước về chất lượng sản phẩm"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD002_0013",
    "stt": 26,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.1 Hệ thống pháp quy quản lý XNK",
    "cauHoi": "Doanh nghiệp C xuất khẩu cà phê rang xay đóng gói sang thị trường nước ngoài. Trường hợp hàng hóa không thuộc danh mục cấm, không thuộc diện quản lý bằng giấy phép, doanh nghiệp thực hiện theo hướng nào?",
    "options": [
      {
        "key": "A",
        "text": "Không được xuất khẩu vì nông sản luôn thuộc diện hạn chế của Nhà nước"
      },
      {
        "key": "B",
        "text": "Được làm thủ tục xuất khẩu trực tiếp tại cơ quan hải quan theo quy định"
      },
      {
        "key": "C",
        "text": "Chỉ được phép xuất khẩu sau khi có văn bản phê duyệt của Thủ tướng Chính phủ"
      },
      {
        "key": "D",
        "text": "Phải xin giấy phép xuất khẩu riêng biệt vì là hàng hóa có nguồn gốc nông nghiệp"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD002_0014",
    "stt": 27,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.1 Hệ thống pháp quy quản lý XNK",
    "cauHoi": "Doanh nghiệp D nhập khẩu máy tính xách tay mới 100% để kinh doanh tại Việt Nam. Trường hợp hàng hóa không thuộc danh mục cấm và không thuộc diện quản lý bằng giấy phép chuyên ngành, doanh nghiệp thực hiện theo hướng nào?",
    "options": [
      {
        "key": "A",
        "text": "Không được nhập khẩu vì hàng điện tử luôn thuộc danh mục cấm của Bộ Công Thương"
      },
      {
        "key": "B",
        "text": "Chỉ được phép nhập khẩu nếu lô hàng đã qua sử dụng không quá 5 năm tính từ ngày sản xuất"
      },
      {
        "key": "C",
        "text": "Được làm thủ tục nhập khẩu trực tiếp tại cơ quan hải quan theo quy định"
      },
      {
        "key": "D",
        "text": "Phải xin văn bản xác nhận hạn ngạch vì mọi hàng điện tử đều bị hạn chế nhập khẩu"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD002_0015",
    "stt": 28,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.1 Hệ thống pháp quy quản lý XNK",
    "cauHoi": "Hàng hóa xuất khẩu, nhập khẩu có điều kiện là gì?",
    "options": [
      {
        "key": "A",
        "text": "Hàng hóa bắt buộc phải làm thủ tục tại cửa khẩu quốc tế"
      },
      {
        "key": "B",
        "text": "Hàng hóa phải đáp ứng điều kiện theo quy định trước khi xuất khẩu, nhập khẩu"
      },
      {
        "key": "C",
        "text": "Hàng hóa thuộc diện áp dụng mức thuế suất nhập khẩu cao"
      },
      {
        "key": "D",
        "text": "Hàng hóa chỉ do một số doanh nghiệp được phép kinh doanh xuất nhập khẩu"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD002_0016",
    "stt": 29,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.1 Hệ thống pháp quy quản lý XNK",
    "cauHoi": "Cơ quan có thẩm quyền cấp giấy phép đối với hàng hóa thuộc danh mục xuất khẩu, nhập khẩu có điều kiện là:",
    "options": [
      {
        "key": "A",
        "text": "Bộ Công Thương và các Bộ, cơ quan ngang Bộ quản lý chuyên ngành tương ứng"
      },
      {
        "key": "B",
        "text": "Tổng cục Hải quan hoặc Chi cục Hải quan nơi doanh nghiệp mở tờ khai hàng hóa"
      },
      {
        "key": "C",
        "text": "Bộ Tài chính và các cơ quan quản lý thuế trực tiếp tại địa phương của doanh nghiệp"
      },
      {
        "key": "D",
        "text": "Sở Công Thương hoặc Ủy ban nhân dân cấp tỉnh nơi doanh nghiệp có trụ sở chính"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD002_0017",
    "stt": 30,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.1 Hệ thống pháp quy quản lý XNK",
    "cauHoi": "Lý do chủ yếu khiến hàng hóa kinh doanh theo loại hình tạm nhập - tái xuất thuộc diện quản lý trọng điểm của cơ quan hải quan là gì?",
    "options": [
      {
        "key": "A",
        "text": "Hàng hóa có thể phát sinh nghĩa vụ thuế nếu không tái xuất đúng quy định"
      },
      {
        "key": "B",
        "text": "Hàng hóa có thể phải đáp ứng điều kiện quản lý chuyên ngành khi kinh doanh"
      },
      {
        "key": "C",
        "text": "Hàng hóa có nguy cơ bị lợi dụng để gian lận thương mại hoặc thẩm lậu vào nội địa"
      },
      {
        "key": "D",
        "text": "Hàng hóa cần được theo dõi trong thời gian lưu giữ trước khi tái xuất"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD002_0018",
    "stt": 31,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.1 Hệ thống pháp quy quản lý XNK",
    "cauHoi": "Hành vi xuất khẩu hàng hóa thuộc danh mục tạm ngừng xuất khẩu sẽ bị xử lý như thế nào theo quy định hiện hành?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ bị cơ quan hải quan cảnh cáo nếu doanh nghiệp tự nguyện khai báo đúng tên hàng"
      },
      {
        "key": "B",
        "text": "Bị xử phạt vi phạm hành chính và áp dụng các biện pháp xử lý hàng hóa theo quy định"
      },
      {
        "key": "C",
        "text": "Được miễn truy cứu trách nhiệm nếu hàng hóa đó đã hoàn thành đầy đủ nghĩa vụ thuế"
      },
      {
        "key": "D",
        "text": "Doanh nghiệp vi phạm sẽ bị tước quyền kinh doanh xuất nhập khẩu vĩnh viễn ngay lập tức"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD002_0019",
    "stt": 32,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.1 Hệ thống pháp quy quản lý XNK",
    "cauHoi": "Hàng rào phi thuế quan thường bao gồm những biện pháp nào?",
    "options": [
      {
        "key": "A",
        "text": "Hạn chế số lượng, cấp giấy phép, xây dựng hàng rào kỹ thuật"
      },
      {
        "key": "B",
        "text": "Miễn thuế, giảm thuế và trợ giá sản phẩm"
      },
      {
        "key": "C",
        "text": "Tăng thuế nhập khẩu và quy định hạn ngạch"
      },
      {
        "key": "D",
        "text": "Tạo điều kiện thuận lợi cho doanh nghiệp nước ngoài"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD002_0020",
    "stt": 33,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.1 Hệ thống pháp quy quản lý XNK",
    "cauHoi": "Vì sao các quốc gia vẫn duy trì các hàng rào thuế quan và phi thuế quan?",
    "options": [
      {
        "key": "A",
        "text": "Để tăng thu nhập ngân sách nhà nước"
      },
      {
        "key": "B",
        "text": "Để đảm bảo chất lượng hàng hóa xuất khẩu"
      },
      {
        "key": "C",
        "text": "Để bảo hộ nền sản xuất nội địa"
      },
      {
        "key": "D",
        "text": "Để tuân thủ các cam kết quốc tế"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD002_0021",
    "stt": 34,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.1 Hệ thống pháp quy quản lý XNK",
    "cauHoi": "Thương nhân Việt Nam không có vốn đầu tư nước ngoài được kinh doanh xuất khẩu, nhập khẩu theo nguyên tắc nào?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ được xuất nhập khẩu hàng hóa ghi trong ngành nghề đăng ký kinh doanh"
      },
      {
        "key": "B",
        "text": "Được kinh doanh xuất nhập khẩu, trừ hàng hóa bị cấm hoặc tạm ngừng theo quy định"
      },
      {
        "key": "C",
        "text": "Chỉ được xuất khẩu hàng hóa sản xuất trực tiếp tại doanh nghiệp"
      },
      {
        "key": "D",
        "text": "Phải xin giấy phép riêng cho mọi lô hàng xuất khẩu, nhập khẩu"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD002_0022",
    "stt": 35,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.1 Hệ thống pháp quy quản lý XNK",
    "cauHoi": "Đối với hàng hóa áp dụng chế độ giấy phép nhập khẩu tự động, chứng từ nào là căn cứ để hải quan giải quyết thủ tục?",
    "options": [
      {
        "key": "A",
        "text": "Hóa đơn thương mại của lô hàng"
      },
      {
        "key": "B",
        "text": "Vận đơn hoặc chứng từ vận tải"
      },
      {
        "key": "C",
        "text": "Giấy phép nhập khẩu tự động"
      },
      {
        "key": "D",
        "text": "Giấy chứng nhận bảo hiểm hàng hóa"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD002_0023",
    "stt": 36,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.1 Hệ thống pháp quy quản lý XNK",
    "cauHoi": "Doanh nghiệp nhập khẩu hàng hóa thuộc danh mục quản lý theo hạn ngạch thuế quan nhưng không có giấy phép của Bộ Công Thương. Cách áp dụng nào phù hợp?",
    "options": [
      {
        "key": "A",
        "text": "Áp dụng mức thuế trong hạn ngạch nếu doanh nghiệp đã mở tờ khai"
      },
      {
        "key": "B",
        "text": "Áp dụng mức thuế trong hạn ngạch nếu doanh nghiệp đã nộp đủ thuế"
      },
      {
        "key": "C",
        "text": "Áp dụng mức thuế ngoài hạn ngạch thuế quan theo quy định"
      },
      {
        "key": "D",
        "text": "Áp dụng mức thuế ưu đãi đặc biệt nếu doanh nghiệp có hợp đồng nhập khẩu"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD002_0024",
    "stt": 37,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.1 Hệ thống pháp quy quản lý XNK",
    "cauHoi": "Với hàng hóa thuộc diện quản lý chuyên ngành, căn cứ nào được dùng để hải quan giải quyết thủ tục?",
    "options": [
      {
        "key": "A",
        "text": "Cam kết giao hàng của doanh nghiệp xuất khẩu"
      },
      {
        "key": "B",
        "text": "Xác nhận giao nhận của doanh nghiệp cảng"
      },
      {
        "key": "C",
        "text": "Giấy phép, điều kiện hoặc tiêu chuẩn chuyên ngành"
      },
      {
        "key": "D",
        "text": "Thỏa thuận thanh toán giữa người mua và người bán"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD002_0025",
    "stt": 38,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.1 Hệ thống pháp quy quản lý XNK",
    "cauHoi": "Công ty A nhập khẩu một mặt hàng thuộc diện phải đáp ứng điều kiện kỹ thuật do Bộ quản lý chuyên ngành công bố. Khi làm thủ tục hải quan, công ty cần xử lý thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ nộp hợp đồng và hóa đơn vì hàng không thuộc danh mục cấm"
      },
      {
        "key": "B",
        "text": "Xin xác nhận của doanh nghiệp logistics thay cho chứng từ chuyên ngành"
      },
      {
        "key": "C",
        "text": "Chuẩn bị chứng từ chứng minh hàng đáp ứng điều kiện kỹ thuật theo quy định"
      },
      {
        "key": "D",
        "text": "Đề nghị hải quan bỏ qua điều kiện kỹ thuật nếu đã nộp đủ thuế"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD003_0001",
    "stt": 39,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Mệnh đề nào sau đây là sai?",
    "options": [
      {
        "key": "A",
        "text": "Xuất xứ hàng hóa là chỉ tiêu quan trọng nhất khẳng định vị trí của nước xuất khẩu trong thương mại quốc tế"
      },
      {
        "key": "B",
        "text": "Xuất xứ hàng hóa kết hợp với mã HS để xác định mức thuế suất"
      },
      {
        "key": "C",
        "text": "Xuất xứ hàng hóa tạo điều kiện cho hàng xuất khẩu được hưởng ưu đãi thuế quan khi thâm nhập vào các thị trường nước nhập khẩu"
      },
      {
        "key": "D",
        "text": "Xuất xứ hàng hóa liên quan đến việc kiểm soát hoạt động ngoại thương"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD003_0002",
    "stt": 40,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Trong quy tắc xuất xứ ATIGA, mệnh đề nào đúng?",
    "options": [
      {
        "key": "A",
        "text": "Ngoài tiêu chí RVC, người xuất khẩu hàng hóa có thể sử dụng tiêu chí CTC ở cấp 3 số để xác định xuất xứ hàng hóa."
      },
      {
        "key": "B",
        "text": "Khi xác định tiêu chuẩn xuất xứ đối với sản phẩm có xuất xứ không thuần túy, sản phẩm đáp ứng tiêu chuẩn xuất xứ khi có hàm lượng ASEAN dưới 40%."
      },
      {
        "key": "C",
        "text": "Hàng hóa đáp ứng điều kiện về chứng từ chứng minh xuất xứ khi được cấp C/O mẫu D do cơ quan có thẩm quyền của nước thành viên ASEAN cấp."
      },
      {
        "key": "D",
        "text": "Khi xác định tiêu chuẩn xuất xứ đối với sản phẩm có xuất xứ không thuần túy, Việt Nam chỉ tính RVC theo công thức trực tiếp."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD003_0003",
    "stt": 41,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Theo thỏa ước giữa EU và ASEAN về cộng gộp khu vực, khi nhập khẩu vào thị trường EU:",
    "options": [
      {
        "key": "A",
        "text": "Hàng hóa có xuất xứ Việt Nam cũng được coi là hàng hóa có xuất xứ từ một nước nào khác trong khối ASEAN"
      },
      {
        "key": "B",
        "text": "Hàng hoá có xuất xứ từ bất cứ nước nào trong ASEAN cũng được coi là có xuất xứ từ các nước EU."
      },
      {
        "key": "C",
        "text": "Hàng hóa có xuất xứ Việt Nam sẽ được hưởng ưu đãi thuế quan khi đáp ứng quy tắc xuất xứ."
      },
      {
        "key": "D",
        "text": "Hàng hóa có xuất xứ Thái Lan cũng được coi là hàng hóa có xuất xứ từ bất cứ nước nào trong EU"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD003_0004",
    "stt": 42,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "C/O ưu đãi theo Hiệp định khung về hợp tác kinh tế toàn diện giữa ASEAN và Trung Quốc là:",
    "options": [
      {
        "key": "A",
        "text": "E"
      },
      {
        "key": "B",
        "text": "AK"
      },
      {
        "key": "C",
        "text": "AI"
      },
      {
        "key": "D",
        "text": "AJ"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD003_0005",
    "stt": 43,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "C/O cấp cho hàng xuất khẩu đi Nam Phi là",
    "options": [
      {
        "key": "A",
        "text": "DA59"
      },
      {
        "key": "B",
        "text": "B"
      },
      {
        "key": "C",
        "text": "ICO"
      },
      {
        "key": "D",
        "text": "A"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD003_0006",
    "stt": 44,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Có bao nhiêu công thức tính hàm lượng giá trị khu vực được sử dụng trong Hiệp định RCEP?",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
      },
      {
        "key": "D",
        "text": "4"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD003_0007",
    "stt": 45,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "\"… là nước hoặc vùng lãnh thổ nơi sản xuất ra toàn bộ hàng hóa hoặc nơi thực hiện công đoạn chế biến cơ bản cuối cùng đối với hàng hoá do nhiều nước và vùng lãnh thổ tham gia sản xuất\"",
    "options": [
      {
        "key": "A",
        "text": "Nguồn gốc hàng hóa"
      },
      {
        "key": "B",
        "text": "Xuất xứ hàng hóa"
      },
      {
        "key": "C",
        "text": "Quốc tịch hàng hóa"
      },
      {
        "key": "D",
        "text": "Nơi tạo ra hàng hóa"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD003_0008",
    "stt": 46,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "GSP là",
    "options": [
      {
        "key": "A",
        "text": "General System of Preferences"
      },
      {
        "key": "B",
        "text": "Generalized System of Preferences"
      },
      {
        "key": "C",
        "text": "Global System of Preferential Tariffs"
      },
      {
        "key": "D",
        "text": "General System of Preferential Trade"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD003_0009",
    "stt": 47,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Công ty có lô hàng xuất khẩu đi UAE cần xin C/O form gì?",
    "options": [
      {
        "key": "A",
        "text": "A"
      },
      {
        "key": "B",
        "text": "B"
      },
      {
        "key": "C",
        "text": "C"
      },
      {
        "key": "D",
        "text": "D"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD003_0010",
    "stt": 48,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Công ty có lô hàng xuất khẩu đi Qatar cần xin C/O form gì?",
    "options": [
      {
        "key": "A",
        "text": "B"
      },
      {
        "key": "B",
        "text": "A"
      },
      {
        "key": "C",
        "text": "X"
      },
      {
        "key": "D",
        "text": "Y"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD003_0011",
    "stt": 49,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "C/O nào áp dụng cho hàng dệt may xuất khẩu sang EU theo Hiệp định Việt Nam - EU là",
    "options": [
      {
        "key": "A",
        "text": "EUR.1"
      },
      {
        "key": "B",
        "text": "EUR.2"
      },
      {
        "key": "C",
        "text": "EUR.V"
      },
      {
        "key": "D",
        "text": "T"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD003_0012",
    "stt": 50,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Thời hạn cấp C/O không quá bao nhiêu ngày kể từ thời điểm Người đề nghị cấp C/O nộp Bộ hồ sơ đầy đủ và hợp lệ?",
    "options": [
      {
        "key": "A",
        "text": "3"
      },
      {
        "key": "B",
        "text": "5"
      },
      {
        "key": "C",
        "text": "7"
      },
      {
        "key": "D",
        "text": "9"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD003_0013",
    "stt": 51,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Sản phẩm nào sau đây có xuất xứ không toàn bộ",
    "options": [
      {
        "key": "A",
        "text": "Rau quả thu hoạch ở nước được hưởng"
      },
      {
        "key": "B",
        "text": "Sản phẩm chế biến ở nước được hưởng"
      },
      {
        "key": "C",
        "text": "Khoáng sản khai thác ở nước được hưởng"
      },
      {
        "key": "D",
        "text": "Phế liệu và phế thải từ hoạt động sản xuất diễn ra tại nước được hưởng"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD003_0014",
    "stt": 52,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "\"Những nước cho hưởng sẽ ký kết một thoả ước với một khối nước trong khu vực cho phép rằng hàng hoá có xuất xứ tại bất kỳ một nước trong khu vực cũng được coi là có xuất xứ từ một nước khác trong cùng khu vực đó\" là:",
    "options": [
      {
        "key": "A",
        "text": "quy tắc bảo trợ"
      },
      {
        "key": "B",
        "text": "quy tắc cộng gộp khu vực"
      },
      {
        "key": "C",
        "text": "tiêu chuẩn tỷ lệ phần trăm"
      },
      {
        "key": "D",
        "text": "tiêu chuẩn gia công"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD003_0015",
    "stt": 53,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "\"Nguyên phụ liệu nhập từ nước cho hưởng để sản xuất ra thành phẩm tại nước được hưởng sẽ có xuất xứ của nước được hưởng để sản xuất ra thành phẩm tại nước được hưởng.\" là quy tắc",
    "options": [
      {
        "key": "A",
        "text": "quy tắc bảo trợ"
      },
      {
        "key": "B",
        "text": "quy tắc cộng gộp khu vực"
      },
      {
        "key": "C",
        "text": "tiêu chuẩn tỷ lệ phần trăm"
      },
      {
        "key": "D",
        "text": "tiêu chuẩn gia công"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD003_0016",
    "stt": 54,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "ATIGA là:",
    "options": [
      {
        "key": "A",
        "text": "ASEAN Trade In Goods Agreement"
      },
      {
        "key": "B",
        "text": "ASEAN Trade In Good Agreement"
      },
      {
        "key": "C",
        "text": "ASEAN Trading In Goods Agreement"
      },
      {
        "key": "D",
        "text": "ASEAN Trading In Good Agreement"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD003_0017",
    "stt": 55,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Trong các tiêu chí xác định xuất xứ không thuần túy, tiêu chuẩn CTH yêu cầu hàng hóa phải có sự thay đổi mã số HS ở cấp độ",
    "options": [
      {
        "key": "A",
        "text": "2 số"
      },
      {
        "key": "B",
        "text": "4 số"
      },
      {
        "key": "C",
        "text": "6 số"
      },
      {
        "key": "D",
        "text": "8 số"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD003_0018",
    "stt": 56,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Hà Lan cho Việt Nam hưởng quy tắc bảo trợ:",
    "options": [
      {
        "key": "A",
        "text": "Nguyên liệu nhập từ Hà Lan về Việt Nam sẽ không phải nộp thuế nhập khẩu"
      },
      {
        "key": "B",
        "text": "Hàng hóa có xuất xứ tại bất kỳ nước EU nào cũng coi là có xuất xứ Hà Lan."
      },
      {
        "key": "C",
        "text": "Nguyên phụ liệu nhập từ Việt Nam để sản xuất ra thành phẩm ở Hà Lan sẽ có xuất xứ tại Hà Lan."
      },
      {
        "key": "D",
        "text": "Nguyên phụ liệu nhập từ Hà Lan để sản xuất ra thành phẩm ở Việt Nam sẽ có xuất xứ của Việt Nam."
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD003_0019",
    "stt": 57,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Mệnh đề nào sau đây là sai?",
    "options": [
      {
        "key": "A",
        "text": "Xuất xứ hàng hóa tạo điều kiện cho hàng XK được hưởng ưu đãi thuế quan khi thâm nhập vào các thị trường nước NK."
      },
      {
        "key": "B",
        "text": "Xuất xứ hàng hoá liên quan đến việc kiểm soát hoạt động ngoại thương"
      },
      {
        "key": "C",
        "text": "Xuất xứ hàng hóa kết hợp với mã HS để xác định mức thuế suất."
      },
      {
        "key": "D",
        "text": "Xuất xứ hàng là chỉ tiêu quan trọng khẳng định vị trí của nước XK trong thương mại quốc tế"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD003_0020",
    "stt": 58,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Câu nào KHÔNG đúng đối với chế độ ưu đãi thuế quan phổ cập (GSP)?",
    "options": [
      {
        "key": "A",
        "text": "GSP được coi là ngoại lệ hợp pháp đối với nguyên tắc tối huệ quốc."
      },
      {
        "key": "B",
        "text": "Các nước chậm phát triển và đang phát triển được gọi là các nước được hưởng."
      },
      {
        "key": "C",
        "text": "Các nước được hưởng GSP phải dành ưu đãi thuế quan tương ứng cho nước cho hưởng."
      },
      {
        "key": "D",
        "text": "Trên cơ sở của hệ thống GSP, mỗi quốc gia xây dựng một chế độ GSP cho riêng mình."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD003_0021",
    "stt": 59,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Kiểm tra xuất xứ hàng hóa không căn cứ vào:",
    "options": [
      {
        "key": "A",
        "text": "Thực tế hàng hóa XNK"
      },
      {
        "key": "B",
        "text": "Hồ sơ hải quan"
      },
      {
        "key": "C",
        "text": "Đánh giá việc chấp hành pháp luật hải quan của chủ hàng"
      },
      {
        "key": "D",
        "text": "Giấy chứng nhận xuất xứ"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD003_0022",
    "stt": 60,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "C/O mẫu AANz cho hàng giầy dép của Việt Nam xuất đi các nước thành viên hiệp định AANzFTA do cơ quan nào cấp?",
    "options": [
      {
        "key": "A",
        "text": "Tổng cục Hải quan Việt Nam"
      },
      {
        "key": "B",
        "text": "Phòng Thương Mại và công nghiệp Việt Nam"
      },
      {
        "key": "C",
        "text": "Bộ Công Thương Việt Nam"
      },
      {
        "key": "D",
        "text": "Bộ Thương mại Việt Nam"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD003_0023",
    "stt": 61,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "CO mẫu X là C/O được cấp cho:",
    "options": [
      {
        "key": "A",
        "text": "Hàng cà phê xuất khẩu nói chung"
      },
      {
        "key": "B",
        "text": "Hàng cà phê XK sang các nước không phải thành viên ICO"
      },
      {
        "key": "C",
        "text": "Hàng cà phê XK sang các nước thành viên ICO"
      },
      {
        "key": "D",
        "text": "Không có đáp án đúng"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD003_0024",
    "stt": 62,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Thời hạn hiệu lực của C/O mẫu EUR.1 kể từ ngày cấp là bao lâu?",
    "options": [
      {
        "key": "A",
        "text": "6 tháng"
      },
      {
        "key": "B",
        "text": "12 tháng"
      },
      {
        "key": "C",
        "text": "24 tháng"
      },
      {
        "key": "D",
        "text": "Vô thời hạn"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD003_0025",
    "stt": 63,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Đồng hồ đeo tay (HS 9102.11) được sản xuất từ bộ phận cơ không có xuất xứ nhập khẩu từ Trung Quốc. Mỗi chiếc được bán 50$ theo giá FOB. Giá trị NVL không có xuất xứ là 18$. Quy tắc xuất xứ đối với phân nhóm 9102.11 là \"RVC(40)\". Đồng hồ có được coi là có xuất xứ không?",
    "options": [
      {
        "key": "A",
        "text": "Có"
      },
      {
        "key": "B",
        "text": "Không"
      },
      {
        "key": "C",
        "text": "Tùy từng trường hợp"
      },
      {
        "key": "D",
        "text": "Có xuất xứ WO"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD003_0026",
    "stt": 64,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Thời điểm nộp C/O mẫu AANZ cho cơ quan hải quan để áp dụng thuế suất thuế ưu đãi đặc biệt là khi nào?",
    "options": [
      {
        "key": "A",
        "text": "Tại thời điểm làm thủ tục hải quan hoặc trong thời gian không quá 15 ngày kể từ ngày đăng ký tờ khai"
      },
      {
        "key": "B",
        "text": "Tại thời điểm làm thủ tục hải quan hoặc trong thời gian không quá 30 ngày kể từ ngày đăng ký tờ khai"
      },
      {
        "key": "C",
        "text": "Tại thời điểm làm thủ tục hải quan hoặc trong thời gian không quá 60 ngày kể từ ngày đăng ký tờ khai"
      },
      {
        "key": "D",
        "text": "Tại thời điểm làm thủ tục hải quan hoặc trong thời gian không quá 90 ngày kể từ ngày đăng ký tờ khai"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD003_0027",
    "stt": 65,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "C/O mẫu AK được đánh dấu vào ô \"third country invoicing\" thể hiện nội dung gì?",
    "options": [
      {
        "key": "A",
        "text": "Hàng hóa làm thủ tục nhập khẩu có Hóa đơn thương mại được cấp bởi một nước thứ ba"
      },
      {
        "key": "B",
        "text": "Hàng hóa làm thủ tục nhập khẩu có Hóa đơn thương mại được phát hành bởi một công ty đặt tại nước thứ ba hoặc bởi người xuất khẩu thay mặt cho công ty đó"
      },
      {
        "key": "C",
        "text": "Hàng hóa làm thủ tục nhập khẩu có Hóa đơn thương mại được phát hành bởi một nước không thành viên"
      },
      {
        "key": "D",
        "text": "Hàng hóa làm thủ tục nhập khẩu có Hóa đơn thương mại được phát hành bởi người xuất khẩu thay mặt cho công ty đó"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD003_0028",
    "stt": 66,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Đối với mẫu C/O của Hiệp định thương mại tự do giữa Việt Nam và Liên minh kinh tế Á-Âu, nếu do lỗi hoặc sai sót không cố ý trên bản gốc Giấy chứng nhận xuất xứ hàng hóa, cơ quan được ủy quyền cấp Giấy chứng nhận xuất xứ hàng hóa thay thế cho bản gốc Giấy chứng nhận xuất xứ. Trong trường hợp này, Giấy chứng nhận xuất xứ hàng hóa phải ghi rõ cụm từ ...",
    "options": [
      {
        "key": "A",
        "text": "\"ISSUED IN SUBSTITUTION FOR THE CERTIFICATE OF ORIGIN NUMBER ___ DATE ___\""
      },
      {
        "key": "B",
        "text": "REPLACING C/O REF NUMBER…."
      },
      {
        "key": "C",
        "text": "FOR REPLACEMENT OF C/O REF NUMBER…."
      },
      {
        "key": "D",
        "text": "TO REPLACE FOR C/O NUMBER…"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD003_0029",
    "stt": 67,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Hàng hóa chưa được lắp ráp hoặc đang ở tình hạng bị tháo rời được nhập khẩu thành nhiều chuyến hàng do điều kiện vận tải hoặc sản xuất không thể nhập khẩu trong một chuyến hàng, nếu người nhập khẩu có yêu cầu, xuất xứ của hàng hóa trong từng chuyến hàng ……………..",
    "options": [
      {
        "key": "A",
        "text": "được coi là có cùng xuất xứ thuần túy với hàng hóa đó"
      },
      {
        "key": "B",
        "text": "có thể được cấp cho cả lô hàng."
      },
      {
        "key": "C",
        "text": "được coi là có cùng xuất xứ với hàng hóa đó"
      },
      {
        "key": "D",
        "text": "phải được cấp từng lần một"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD003_0030",
    "stt": 68,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "C/O mẫu nào phải được nộp tại thời điểm làm thủ tục hải quan để được áp dụng mức thuế suất thuế nhập khẩu ưu đãi đặc biệt và không được chậm nộp?",
    "options": [
      {
        "key": "A",
        "text": "KV"
      },
      {
        "key": "B",
        "text": "EAV"
      },
      {
        "key": "C",
        "text": "AK"
      },
      {
        "key": "D",
        "text": "AJ"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD003_0031",
    "stt": 69,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Trường hợp người khai hải quan không nộp chứng từ chứng nhận xuất xứ tại thời điểm làm thủ tục hải quan để được áp dụng mức thuế suất ưu đãi đặc biệt, lô hàng sẽ được xử lý thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Lô hàng không được áp dụng thuế suất ưu đãi đặc biệt nhưng vẫn được thông quan"
      },
      {
        "key": "B",
        "text": "Lô hàng không được áp dụng ưu đãi đặc biệt và không được thông quan"
      },
      {
        "key": "C",
        "text": "Lô hàng được thông quan, tạm thời được áp dụng mức thuế suất ưu đãi đặc biệt và nộp bổ sung C/O sau thời điểm làm thủ tục hải quan"
      },
      {
        "key": "D",
        "text": "Người khai hải quan xin bảo lãnh và cung cấp chứng từ chứng nhận xuất xứ sau"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD003_0032",
    "stt": 70,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Hàng hóa có mã HS 9609.10 được sản xuất tại Việt Nam từ nguyên liệu chính nhập khẩu từ Đài Loan. Phần nguyên liệu mua tại Đài Loan trị giá 6 $. Hàng hóa này được bán với giá FOB 10$ sang thị trường ASEAN. Vậy hàng hóa có đáp ứng tiêu chí RVC của ASEAN hay không?",
    "options": [
      {
        "key": "A",
        "text": "Có vì RVC =40%"
      },
      {
        "key": "B",
        "text": "Có vì RVC = 45%"
      },
      {
        "key": "C",
        "text": "Không vì RVC = 35%"
      },
      {
        "key": "D",
        "text": "Có vì RVC = 35%"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD003_0033",
    "stt": 71,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Theo Hiệp định thương mại tự do Việt Nam - Nhật Bản thì Một bộ C/O cấp cho hàng hóa từ Việt Nam sang Nhật Bản gồm…?",
    "options": [
      {
        "key": "A",
        "text": "2 bản sao"
      },
      {
        "key": "B",
        "text": "1 bản sao"
      },
      {
        "key": "C",
        "text": "1 bản gốc và 02 bản sao"
      },
      {
        "key": "D",
        "text": "3 bản sao"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD003_0034",
    "stt": 72,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Hàng hóa thuộc diện Việt Nam hoặc các tổ chức quốc tế thông báo đang ở trong thời điểm có nguy cơ gây hại đến an toàn xã hội, sức khỏe của cộng đồng hoặc vệ sinh môi trường cần được kiểm soát, người khai hải quan nộp chứng từ xuất xứ nào cho cơ quan hải quan?",
    "options": [
      {
        "key": "A",
        "text": "C/O"
      },
      {
        "key": "B",
        "text": "Chứng từ tự chứng nhận xuất xứ"
      },
      {
        "key": "C",
        "text": "Không phải nộp và chỉ cần khai báo trên tờ khai hải quan về xuất xứ hàng hóa"
      },
      {
        "key": "D",
        "text": "Tùy từng trường hợp"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD003_0035",
    "stt": 73,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Bò con được nhập khẩu từ Ác-hen-ti-na vào In-đô-nê-xia nuôi trong 2 năm rồi xuất khẩu sang Việt Nam có thỏa mãn xuất xứ Indonesia theo quy định của Thông tư 22/2016/TT-BCT hay không?",
    "options": [
      {
        "key": "A",
        "text": "Không, vì bò con chỉ được nuôi trong vòng 2 năm nên không đủ đáp ứng giá trị hàm lượng khu vực"
      },
      {
        "key": "B",
        "text": "Không, vì bò con không được sinh ra và nuôi lớn tại nước thành viên"
      },
      {
        "key": "C",
        "text": "Có, vì bò con được nuôi 2 năm tại Indonesia và đây là nước thành viên"
      },
      {
        "key": "D",
        "text": "Tùy từng trường hợp"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD003_0036",
    "stt": 74,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Quy tắc Tỉ lệ không đáng kể nguyên vật liệu không đáp ứng tiêu chí CTC (De-minimis) trong C/O mẫu D là như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Hàng hoá không đáp ứng tiêu chí CTC vẫn được coi là hàng hóa có xuất xứ nếu phần trị giá của nguyên vật liệu không có xuất xứ sử dụng để sản xuất ra hàng hoá không đạt tiêu chí CTC nhỏ hơn hoặc bằng 10% trị giá FOB của hàng hoá"
      },
      {
        "key": "B",
        "text": "Hàng hoá không đáp ứng tiêu chí CTC vẫn được coi là hàng hóa có xuất xứ nếu phần trị giá của nguyên vật liệu không có xuất xứ nhỏ hơn hoặc bằng 15% trị giá FOB"
      },
      {
        "key": "C",
        "text": "Hàng hoá không đáp ứng tiêu chí CTC vẫn được coi là hàng hóa có xuất xứ nếu phần trị giá của nguyên vật liệu không có xuất xứ nhỏ hơn hoặc bằng 5% trị giá FOB"
      },
      {
        "key": "D",
        "text": "Hàng hoá không đáp ứng tiêu chí CTC vẫn được coi là hàng hóa có xuất xứ nếu phần trị giá của nguyên vật liệu không có xuất xứ nhỏ hơn hoặc bằng 20% trị giá FOB"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD003_0037",
    "stt": 75,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Để được hưởng thuế suất ưu đãi đặc biệt, người khai hải quan phải khai báo thông tin gì về C/O trên tờ khai hải quan?",
    "options": [
      {
        "key": "A",
        "text": "Khai số tham chiếu và ngày cấp C/O"
      },
      {
        "key": "B",
        "text": "Khai số tham chiếu"
      },
      {
        "key": "C",
        "text": "Khai loại mẫu C/O"
      },
      {
        "key": "D",
        "text": "Không phải khai báo"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD003_0038",
    "stt": 76,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "C/O mẫu nào sau đây mà cơ quan hải quan không phải kiểm tra đối chiếu chữ ký của cơ quan có thẩm quyền cấp C/O nước xuất khẩu?",
    "options": [
      {
        "key": "A",
        "text": "VJ"
      },
      {
        "key": "B",
        "text": "EAV"
      },
      {
        "key": "C",
        "text": "AI"
      },
      {
        "key": "D",
        "text": "D"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD003_0039",
    "stt": 77,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Đâu là cơ quan quản lý nhà nước có thẩm quyền cấp hoặc ủy quyền cấp C/O tại Việt Nam hiện nay?",
    "options": [
      {
        "key": "A",
        "text": "Bộ Thương mại theo thẩm quyền quản lý hoạt động thương mại"
      },
      {
        "key": "B",
        "text": "Liên đoàn Thương mại và Công nghiệp Việt Nam theo ủy quyền"
      },
      {
        "key": "C",
        "text": "Phòng Thương mại và Công nghiệp Việt Nam theo thẩm quyền riêng"
      },
      {
        "key": "D",
        "text": "Bộ Công Thương theo thẩm quyền quản lý xuất xứ hàng hóa"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD003_0040",
    "stt": 78,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Những quy định pháp luật để xác định một sản phẩm hàng hóa có nguồn gốc từ một nước, vùng lãnh thổ hay một khối nước nào đó được gọi là gì?",
    "options": [
      {
        "key": "A",
        "text": "Tiêu chuẩn xuất xứ"
      },
      {
        "key": "B",
        "text": "Quy tắc xuất xứ"
      },
      {
        "key": "C",
        "text": "Nguyên tắc xác định xuất xứ"
      },
      {
        "key": "D",
        "text": "Căn cứ xác định xuất xứ"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD003_0041",
    "stt": 79,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Khi nhà nhập khẩu Việt Nam muốn được hưởng thuế suất ưu đãi đặc biệt với lô hàng thịt bò có xuất xứ từ Úc thì sẽ yêu cầu nhà xuất khẩu xin cấp loại C/O mẫu nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "C/O mẫu A"
      },
      {
        "key": "B",
        "text": "C/O mẫu AANZ"
      },
      {
        "key": "C",
        "text": "C/O mẫu AI"
      },
      {
        "key": "D",
        "text": "Mẫu AHK"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD003_0042",
    "stt": 80,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Lô hàng nhập khẩu từ Nhật Bản nhưng nhà nhập khẩu không xuất trình được C/O ưu đãi khi làm thủ tục hải quan thì sẽ áp dụng mức thuế nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Thuế suất thông thường"
      },
      {
        "key": "B",
        "text": "Thuế suất ưu đãi"
      },
      {
        "key": "C",
        "text": "Thuế suất ưu đãi đặc biệt"
      },
      {
        "key": "D",
        "text": "Thuế tự vệ"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD003_0043",
    "stt": 81,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Theo Quy tắc xuất xứ EVFTA, để được hưởng ưu đãi thuế quan với hàng hoá xuất khẩu của Việt Nam vào các nước thuộc EU, nhà xuất khẩu Việt Nam có thể gửi cho người nhập khẩu loại chứng từ nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Giấy chứng nhận chất lượng"
      },
      {
        "key": "B",
        "text": "Giấy chứng nhận kiểm dịch thực vật"
      },
      {
        "key": "C",
        "text": "Phiếu đóng gói chi tiết hàng hóa"
      },
      {
        "key": "D",
        "text": "Chứng từ tự chứng nhận xuất xứ"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD003_0044",
    "stt": 82,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Hàng hoá có xuất xứ thuần tuý tại Việt Nam để được cấp C/O mẫu EUR1 bao gồm loại nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Khoáng sản khai thác từ đáy biển của Việt Nam"
      },
      {
        "key": "B",
        "text": "Vải được dệt từ sợi nhập khẩu từ Trung Quốc"
      },
      {
        "key": "C",
        "text": "Sàn gỗ được sản xuất từ gỗ nhập khẩu từ Lào"
      },
      {
        "key": "D",
        "text": "Hoa quả nhập khẩu từ nước ngoài được sấy khô và đóng gói tại Việt Nam"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD003_0045",
    "stt": 83,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Tiêu chí nào sau đây không được dùng để xác định xuất xứ hàng hoá trong các hiệp định thương mại tự do (FTA)?",
    "options": [
      {
        "key": "A",
        "text": "RVC"
      },
      {
        "key": "B",
        "text": "CTC"
      },
      {
        "key": "C",
        "text": "WO"
      },
      {
        "key": "D",
        "text": "IQI"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD003_0046",
    "stt": 84,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Tiêu chí nào sau đây là tiêu chí hàm lượng giá trị khu vực?",
    "options": [
      {
        "key": "A",
        "text": "RVC"
      },
      {
        "key": "B",
        "text": "CTC"
      },
      {
        "key": "C",
        "text": "WO"
      },
      {
        "key": "D",
        "text": "IQI"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD003_0047",
    "stt": 85,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "IQI là tiêu chí nào sau đây là?",
    "options": [
      {
        "key": "A",
        "text": "Tiêu chí hàm lượng giá trị khu vực"
      },
      {
        "key": "B",
        "text": "Tiêu chí chuyển đổi mã số hàng hóa"
      },
      {
        "key": "C",
        "text": "Tiêu chí xuất xứ thuần túy"
      },
      {
        "key": "D",
        "text": "Tiêu chí chỉ số chất lượng sản phẩm"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD003_0048",
    "stt": 86,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "CTC là tiêu chí nào sau đây là?",
    "options": [
      {
        "key": "A",
        "text": "Tiêu chí hàm lượng giá trị khu vực"
      },
      {
        "key": "B",
        "text": "Tiêu chí chuyển đổi mã số hàng hóa"
      },
      {
        "key": "C",
        "text": "Tiêu chí xuất xứ thuần túy"
      },
      {
        "key": "D",
        "text": "Tiêu chí chỉ số chất lượng sản phẩm"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD003_0049",
    "stt": 87,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Tiêu chí nào sau đây là tiêu chí xuất xứ thuần túy?",
    "options": [
      {
        "key": "A",
        "text": "RVC"
      },
      {
        "key": "B",
        "text": "CTC"
      },
      {
        "key": "C",
        "text": "WO"
      },
      {
        "key": "D",
        "text": "IQI"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD003_0050",
    "stt": 88,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Theo … thì những nước cho hưởng ký kết một thỏa ước với một khối nước trong khu vực, cho phép hàng hóa có xuất xứ tại bất kỳ nước nào trong khu vực cũng được coi là có xuất xứ từ một nước khác trong cùng khu vực đó?",
    "options": [
      {
        "key": "A",
        "text": "Quy tắc bảo trợ"
      },
      {
        "key": "B",
        "text": "Quy tắc cộng gộp khu vực"
      },
      {
        "key": "C",
        "text": "Tiêu chuẩn tỷ lệ phần trăm"
      },
      {
        "key": "D",
        "text": "Tiêu chuẩn gia công"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD003_0051",
    "stt": 89,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Doanh nghiệp A ở Việt Nam xuất khẩu hàng hoá sang Hàn Quốc. Lô hàng sẽ được cấp C/O mẫu VK khi nào?",
    "options": [
      {
        "key": "A",
        "text": "Hàng hoá đáp ứng tiêu chuẩn xuất xứ trong hiệp định VKFTA"
      },
      {
        "key": "B",
        "text": "Hàng hoá đáp ứng tiêu chuẩn xuất xứ trong hiệp định VKFTA và phải được vận chuyển thẳng từ Việt Nam sang Hàn Quốc"
      },
      {
        "key": "C",
        "text": "Hàng hoá được vận chuyển thẳng từ Việt Nam sang Hàn Quốc không qua nước thứ 3 nào"
      },
      {
        "key": "D",
        "text": "Hàng hoá phải được sản xuất hoàn toàn tại Việt Nam từ nguyên liệu có nguồn gốc Việt Nam hoặc nhập khẩu"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD003_0052",
    "stt": 90,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Khái niệm \"xuất xứ hàng hóa\" theo Hiệp định GATT 1994 được hiểu là gì?",
    "options": [
      {
        "key": "A",
        "text": "Nơi hàng hóa được tiêu thụ"
      },
      {
        "key": "B",
        "text": "\"Quốc tịch\" của hàng hóa"
      },
      {
        "key": "C",
        "text": "Nơi doanh nghiệp đăng ký kinh doanh"
      },
      {
        "key": "D",
        "text": "Nơi hàng hóa được vận chuyển qua"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD003_0053",
    "stt": 91,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Xuất xứ hàng hóa đóng vai trò quan trọng nhất trong vấn đề nào dưới đây?",
    "options": [
      {
        "key": "A",
        "text": "Quảng bá thương hiệu"
      },
      {
        "key": "B",
        "text": "Kiểm soát hoạt động ngoại thương"
      },
      {
        "key": "C",
        "text": "Khuyến mại thương mại"
      },
      {
        "key": "D",
        "text": "Định giá hàng hóa bán lẻ"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD003_0054",
    "stt": 92,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Hàng hóa hoàn toàn được khai thác, nuôi trồng, chế biến tại một nước được coi là gì?",
    "options": [
      {
        "key": "A",
        "text": "Hàng phi mậu dịch"
      },
      {
        "key": "B",
        "text": "Hàng quá cảnh"
      },
      {
        "key": "C",
        "text": "Có xuất xứ thuần túy"
      },
      {
        "key": "D",
        "text": "Không xác định được xuất xứ"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD003_0055",
    "stt": 93,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Một sản phẩm có nhiều quốc gia tham gia vào quá trình sản xuất thì xuất xứ được xác định theo nguyên tắc nào?",
    "options": [
      {
        "key": "A",
        "text": "Quốc gia cung cấp nguyên liệu nhiều nhất"
      },
      {
        "key": "B",
        "text": "Quốc gia tiêu thụ sản phẩm cuối cùng"
      },
      {
        "key": "C",
        "text": "Nơi thực hiện công đoạn chế biến cơ bản cuối cùng"
      },
      {
        "key": "D",
        "text": "Nơi đóng gói sản phẩm"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD003_0056",
    "stt": 94,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Cơ quan quản lý nhà nước nào của Việt Nam có thẩm quyền cấp hoặc ủy quyền cấp C/O hiện nay?",
    "options": [
      {
        "key": "A",
        "text": "Bộ Khoa học và Công nghệ"
      },
      {
        "key": "B",
        "text": "Phòng Thương mại và Công nghiệp Việt Nam"
      },
      {
        "key": "C",
        "text": "Bộ Tài chính"
      },
      {
        "key": "D",
        "text": "Bộ Công Thương"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD003_0057",
    "stt": 95,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "C/O mẫu D áp dụng cho hiệp định nào?",
    "options": [
      {
        "key": "A",
        "text": "AANZFTA"
      },
      {
        "key": "B",
        "text": "ATIGA"
      },
      {
        "key": "C",
        "text": "AKFTA"
      },
      {
        "key": "D",
        "text": "VJEPA"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD003_0058",
    "stt": 96,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Quy định về xuất xứ hàng hóa được các quốc gia sử dụng để làm gì?",
    "options": [
      {
        "key": "A",
        "text": "Đẩy mạnh tự do hóa thương mại"
      },
      {
        "key": "B",
        "text": "Áp dụng các biện pháp bảo vệ đối với hàng hóa xuất nhập khẩu"
      },
      {
        "key": "C",
        "text": "Thực thi các hiệp định thương mại tự do"
      },
      {
        "key": "D",
        "text": "Thúc đẩy hợp tác quốc tế trong thương mại"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD003_0059",
    "stt": 97,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Vai trò nào dưới đây của xuất xứ hàng hóa giúp hàng hóa nhập khẩu hưởng ưu đãi tại nước nhập khẩu?",
    "options": [
      {
        "key": "A",
        "text": "Kiểm soát ngoại thương"
      },
      {
        "key": "B",
        "text": "Xác định mức thuế suất ưu đãi áp dụng cho hàng hóa"
      },
      {
        "key": "C",
        "text": "Tạo thuận lợi trong hoạt động vận chuyển quốc tế"
      },
      {
        "key": "D",
        "text": "Bảo vệ sức khỏe cộng đồng"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD003_0060",
    "stt": 98,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Xuất xứ hàng hóa góp phần bảo vệ môi trường bằng cách nào?",
    "options": [
      {
        "key": "A",
        "text": "Hỗ trợ xác định quốc gia sản xuất hàng hóa"
      },
      {
        "key": "B",
        "text": "Hỗ trợ kiểm soát hàng hóa có nguy cơ gây hại đến môi trường"
      },
      {
        "key": "C",
        "text": "Khuyến khích thương mại giữa các quốc gia ký kết thỏa thuận FTA"
      },
      {
        "key": "D",
        "text": "Đánh giá thị phần của quốc gia trên thị trường quốc tế"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD003_0061",
    "stt": 99,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Quy tắc xác định xuất xứ hàng hóa được định nghĩa trong Hiệp định về Quy tắc xuất xứ của WTO là gì?",
    "options": [
      {
        "key": "A",
        "text": "Các chính sách thương mại được áp dụng để bảo vệ sản xuất nội địa"
      },
      {
        "key": "B",
        "text": "Những luật, quy định và quyết định hành chính chung dùng để xác định nước xuất xứ của hàng hóa"
      },
      {
        "key": "C",
        "text": "Các biện pháp kiểm soát mức độ tiếp cận thị trường của nhà xuất khẩu nước ngoài"
      },
      {
        "key": "D",
        "text": "Những quy định về hạn ngạch thuế quan áp dụng đối với hàng hóa nhập khẩu"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD003_0062",
    "stt": 100,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Công ty A tại Việt Nam sản xuất máy may xuất khẩu sang Indonesia theo điều kiện CIF Jakarta 180.000 USD. Cước vận tải biển là 500 USD, phí bảo hiểm là 200 USD. Nguyên liệu, linh kiện có xuất xứ ASEAN gồm 70.000 USD từ Thái Lan và 50.000 USD từ Malaysia; chi phí nhân công tại Việt Nam là 6.000 USD, chi phí phân bổ trực tiếp là 4.000 USD và chi phí khác là 2.000 USD. Theo công thức trực tiếp, RVC của lô hàng là bao nhiêu và lô hàng có đạt tiêu chí xuất xứ để cấp C/O Form D không?",
    "options": [
      {
        "key": "A",
        "text": "73,33%, đạt tiêu chí xuất xứ"
      },
      {
        "key": "B",
        "text": "66,67%, đạt tiêu chí xuất xứ"
      },
      {
        "key": "C",
        "text": "73,62%, đạt tiêu chí xuất xứ"
      },
      {
        "key": "D",
        "text": "6,69%, không đạt tiêu chí xuất xứ"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD003_0063",
    "stt": 101,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Công ty A tại Việt Nam sản xuất bàn ghế gỗ xuất khẩu sang Philippines theo điều kiện CIF Manila 240.000 USD. Cước vận tải biển là 1.200 USD, phí bảo hiểm là 800 USD. Nguyên liệu có xuất xứ ASEAN gồm gỗ đã xử lý nhập từ Lào trị giá 90.000 USD và phụ kiện từ Thái Lan trị giá 35.000 USD. Chi phí nhân công tại Việt Nam là 12.000 USD, chi phí phân bổ trực tiếp là 8.000 USD và chi phí khác là 5.000 USD. Theo công thức trực tiếp, RVC của lô hàng là bao nhiêu và lô hàng có đạt tiêu chí xuất xứ để cấp C/O Form D không?",
    "options": [
      {
        "key": "A",
        "text": "62,50%, đạt tiêu chí xuất xứ"
      },
      {
        "key": "B",
        "text": "52,52%, đạt tiêu chí xuất xứ"
      },
      {
        "key": "C",
        "text": "63,03%, đạt tiêu chí xuất xứ"
      },
      {
        "key": "D",
        "text": "10,50%, không đạt tiêu chí xuất xứ"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD003_0064",
    "stt": 102,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Công ty B tại Việt Nam sản xuất áo khoác thể thao xuất khẩu sang Singapore theo điều kiện CIF Singapore 95.000 USD. Cước vận tải biển là 600 USD, phí bảo hiểm là 400 USD. Vải có xuất xứ ASEAN nhập từ Indonesia trị giá 32.000 USD, khóa kéo từ Malaysia trị giá 8.000 USD. Chi phí nhân công tại Việt Nam là 9.000 USD, chi phí phân bổ trực tiếp là 3.500 USD và chi phí khác là 2.500 USD. Theo công thức trực tiếp, RVC của lô hàng là bao nhiêu và lô hàng có đạt tiêu chí xuất xứ để cấp C/O Form D không?",
    "options": [
      {
        "key": "A",
        "text": "57,89%, đạt tiêu chí xuất xứ"
      },
      {
        "key": "B",
        "text": "58,51%, đạt tiêu chí xuất xứ"
      },
      {
        "key": "C",
        "text": "42,55%, đạt tiêu chí xuất xứ"
      },
      {
        "key": "D",
        "text": "15,96%, không đạt tiêu chí xuất xứ"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD003_0065",
    "stt": 103,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Công ty C tại Việt Nam sản xuất quạt điện xuất khẩu sang Malaysia theo điều kiện CIF Port Klang 160.000 USD. Cước vận tải biển là 900 USD, phí bảo hiểm là 300 USD. Linh kiện có xuất xứ ASEAN gồm động cơ nhập từ Thái Lan trị giá 48.000 USD và bộ điều khiển từ Philippines trị giá 22.000 USD. Chi phí nhân công tại Việt Nam là 10.000 USD, chi phí phân bổ trực tiếp là 6.000 USD và chi phí khác là 4.000 USD. Theo công thức trực tiếp, RVC của lô hàng là bao nhiêu và lô hàng có đạt tiêu chí xuất xứ để cấp C/O Form D không?",
    "options": [
      {
        "key": "A",
        "text": "56,25%, đạt tiêu chí xuất xứ"
      },
      {
        "key": "B",
        "text": "44,08%, đạt tiêu chí xuất xứ"
      },
      {
        "key": "C",
        "text": "56,68%, đạt tiêu chí xuất xứ"
      },
      {
        "key": "D",
        "text": "12,59%, không đạt tiêu chí xuất xứ"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD003_0066",
    "stt": 104,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Công ty D tại Việt Nam sản xuất túi xách vải xuất khẩu sang Thái Lan theo điều kiện CIF Bangkok 70.000 USD. Cước vận tải là 500 USD, phí bảo hiểm là 200 USD. Nguyên liệu có xuất xứ ASEAN gồm vải từ Campuchia trị giá 18.000 USD và phụ kiện từ Malaysia trị giá 7.000 USD. Chi phí nhân công tại Việt Nam là 5.500 USD, chi phí phân bổ trực tiếp là 2.500 USD và chi phí khác là 1.500 USD. Theo công thức trực tiếp, RVC của lô hàng là bao nhiêu và lô hàng có đạt tiêu chí xuất xứ để cấp C/O Form D không?",
    "options": [
      {
        "key": "A",
        "text": "49,29%, đạt tiêu chí xuất xứ"
      },
      {
        "key": "B",
        "text": "36,08%, không đạt tiêu chí xuất xứ"
      },
      {
        "key": "C",
        "text": "49,78%, đạt tiêu chí xuất xứ"
      },
      {
        "key": "D",
        "text": "13,71%, không đạt tiêu chí xuất xứ"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD003_0067",
    "stt": 105,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Công ty E tại Việt Nam sản xuất máy bơm nước xuất khẩu sang Indonesia theo điều kiện CIF Jakarta 125.000 USD. Cước vận tải biển là 700 USD, phí bảo hiểm là 300 USD. Linh kiện có xuất xứ ASEAN gồm thân bơm từ Thái Lan trị giá 38.000 USD và mô-tơ từ Malaysia trị giá 24.000 USD. Chi phí nhân công tại Việt Nam là 8.000 USD, chi phí phân bổ trực tiếp là 5.000 USD và chi phí khác là 3.000 USD. Theo công thức trực tiếp, RVC của lô hàng là bao nhiêu và lô hàng có đạt tiêu chí xuất xứ để cấp C/O Form D không?",
    "options": [
      {
        "key": "A",
        "text": "62,40%, đạt tiêu chí xuất xứ"
      },
      {
        "key": "B",
        "text": "50,00%, đạt tiêu chí xuất xứ"
      },
      {
        "key": "C",
        "text": "62,90%, đạt tiêu chí xuất xứ"
      },
      {
        "key": "D",
        "text": "12,90%, không đạt tiêu chí xuất xứ"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD003_0068",
    "stt": 106,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Công ty A tại Việt Nam sản xuất đèn LED xuất khẩu sang Thái Lan theo điều kiện CIF Bangkok 150.000 USD. Cước vận tải là 800 USD, phí bảo hiểm là 200 USD. Linh kiện có xuất xứ ASEAN gồm chip LED từ Malaysia trị giá 32.000 USD và bộ nguồn từ Indonesia trị giá 10.000 USD. Ngoài ra, công ty sử dụng vỏ nhựa nhập từ Trung Quốc trị giá 8.500 USD. Chi phí nhân công tại Việt Nam là 5.000 USD, chi phí phân bổ trực tiếp là 3.000 USD và chi phí khác là 1.500 USD. Theo công thức trực tiếp, RVC của lô hàng là bao nhiêu và lô hàng có đạt tiêu chí xuất xứ để cấp C/O Form D không?",
    "options": [
      {
        "key": "A",
        "text": "40,27%, đạt tiêu chí xuất xứ"
      },
      {
        "key": "B",
        "text": "28,19%, không đạt tiêu chí xuất xứ"
      },
      {
        "key": "C",
        "text": "34,56%, không đạt tiêu chí xuất xứ"
      },
      {
        "key": "D",
        "text": "34,33%, đạt tiêu chí xuất xứ"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD003_0069",
    "stt": 107,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Công ty B tại Việt Nam sản xuất ba lô vải xuất khẩu sang Singapore theo điều kiện CIF Singapore 90.000 USD. Cước vận tải là 400 USD, phí bảo hiểm là 200 USD. Nguyên liệu có xuất xứ ASEAN gồm vải từ Campuchia trị giá 18.000 USD và khóa kéo từ Thái Lan trị giá 6.000 USD. Ngoài ra, công ty sử dụng phụ kiện nhập từ Trung Quốc trị giá 7.000 USD. Chi phí nhân công tại Việt Nam là 3.500 USD, chi phí phân bổ trực tiếp là 2.000 USD và chi phí khác là 1.000 USD. Theo công thức trực tiếp, RVC của lô hàng là bao nhiêu và lô hàng có đạt tiêu chí xuất xứ để cấp C/O Form D không?",
    "options": [
      {
        "key": "A",
        "text": "41,95%, đạt tiêu chí xuất xứ"
      },
      {
        "key": "B",
        "text": "34,12%, không đạt tiêu chí xuất xứ"
      },
      {
        "key": "C",
        "text": "26,85%, không đạt tiêu chí xuất xứ"
      },
      {
        "key": "D",
        "text": "33,89%, đạt tiêu chí xuất xứ"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD003_0070",
    "stt": 108,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Công thức phổ biến nhất để tính RVC theo phương pháp trực tiếp là:",
    "options": [
      {
        "key": "A",
        "text": "(Trị giá FOB - Trị giá nguyên liệu không có xuất xứ) / Trị giá FOB"
      },
      {
        "key": "B",
        "text": "(Chi phí nguyên liệu có xuất xứ + Chi phí vận tải quốc tế) / Trị giá CIF"
      },
      {
        "key": "C",
        "text": "(Chi phí nguyên liệu có xuất xứ + Chi phí nhân công trực tiếp + Chi phí phân bổ trực tiếp + Chi phí khác + Lợi nhuận) / Trị giá FOB"
      },
      {
        "key": "D",
        "text": "(Trị giá CIF - Trị giá nguyên liệu có xuất xứ) / Trị giá FOB"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD003_0071",
    "stt": 109,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Nếu trị giá FOB không thay đổi, cách nào sau đây giúp tăng RVC theo phương pháp gián tiếp?",
    "options": [
      {
        "key": "A",
        "text": "Giảm trị giá nguyên liệu không có xuất xứ"
      },
      {
        "key": "B",
        "text": "Tăng trị giá nguyên liệu không có xuất xứ"
      },
      {
        "key": "C",
        "text": "Tăng chi phí vận chuyển quốc tế"
      },
      {
        "key": "D",
        "text": "Tăng tỷ giá quy đổi"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD003_0072",
    "stt": 110,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "C/O là chứng từ dùng để xác nhận nội dung nào?",
    "options": [
      {
        "key": "A",
        "text": "Trị giá hải quan của hàng hóa xuất khẩu, nhập khẩu"
      },
      {
        "key": "B",
        "text": "Xuất xứ của hàng hóa trong thương mại quốc tế"
      },
      {
        "key": "C",
        "text": "Số thuế xuất khẩu, thuế nhập khẩu phải nộp"
      },
      {
        "key": "D",
        "text": "Kết quả kiểm tra thực tế hàng hóa của cơ quan hải quan"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD003_0073",
    "stt": 111,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "C/O mẫu AJ được sử dụng để chứng nhận xuất xứ hàng hóa trong khuôn khổ hiệp định nào?",
    "options": [
      {
        "key": "A",
        "text": "Hiệp định Thương mại hàng hóa ASEAN"
      },
      {
        "key": "B",
        "text": "Hiệp định Đối tác kinh tế toàn diện ASEAN - Nhật Bản"
      },
      {
        "key": "C",
        "text": "Hiệp định Thương mại tự do ASEAN - Hàn Quốc"
      },
      {
        "key": "D",
        "text": "Hiệp định Thương mại tự do ASEAN - Trung Quốc"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD003_0074",
    "stt": 112,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Trong các chủ thể sau, chủ thể nào thuộc hệ thống cơ quan quản lý nhà nước trực tiếp cấp Giấy chứng nhận xuất xứ hàng hóa ở Việt Nam?",
    "options": [
      {
        "key": "A",
        "text": "Phòng Quản lý xuất nhập khẩu khu vực thuộc Bộ Công Thương"
      },
      {
        "key": "B",
        "text": "Phòng Thương mại và Công nghiệp Việt Nam"
      },
      {
        "key": "C",
        "text": "Doanh nghiệp được ủy quyền tự chứng nhận xuất xứ"
      },
      {
        "key": "D",
        "text": "Hiệp hội ngành hàng của doanh nghiệp xuất khẩu"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD003_0075",
    "stt": 113,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Trong quy tắc xuất xứ theo ATIGA, nhận định nào đúng đối với hàng hóa có xuất xứ không thuần túy?",
    "options": [
      {
        "key": "A",
        "text": "Hàng hóa có thể đáp ứng tiêu chí RVC hoặc tiêu chí chuyển đổi mã số hàng hóa theo quy định mặt hàng"
      },
      {
        "key": "B",
        "text": "Hàng hóa bắt buộc phải đáp ứng tiêu chí xuất xứ thuần túy"
      },
      {
        "key": "C",
        "text": "Hàng hóa chỉ được xác định xuất xứ bằng công thức tính trực tiếp RVC"
      },
      {
        "key": "D",
        "text": "Hàng hóa được hưởng ưu đãi ATIGA khi có C/O mẫu A do nước ASEAN cấp"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD003_0076",
    "stt": 114,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Phần Lan cho Việt Nam hưởng quy tắc bảo trợ. Nhận định nào sau đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "Nguyên liệu nhập từ Phần Lan về Việt Nam sẽ được miễn thuế nhập khẩu trong mọi trường hợp"
      },
      {
        "key": "B",
        "text": "Hàng hóa có xuất xứ tại bất kỳ nước ASEAN nào đều được coi là có xuất xứ Phần Lan"
      },
      {
        "key": "C",
        "text": "Nguyên phụ liệu từ ASEAN dùng để sản xuất hàng xuất khẩu sang Phần Lan được coi là có xuất xứ Việt Nam"
      },
      {
        "key": "D",
        "text": "Nguyên phụ liệu nhập từ Phần Lan để sản xuất thành phẩm tại Việt Nam xuất trở lại Phần Lan được coi là có xuất xứ Việt Nam"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD003_0077",
    "stt": 115,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Công ty Việt Ánh xuất khẩu lô hàng giày da sang Singapore. Công ty sử dụng vải giả da từ Thái Lan trị giá 50 USD, lót giày từ Nhật Bản trị giá 30 USD, chi phí nhân công trực tiếp tại Việt Nam 15 USD, chi phí quản lý tại Việt Nam 10 USD, nguyên vật liệu khác từ Lào trị giá 20 USD, lợi nhuận 5 USD. Chi phí vận tải quốc tế là 20 USD và phí bảo hiểm quốc tế là 15 USD. Hàm lượng giá trị khu vực ASEAN của lô hàng là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "76,92%"
      },
      {
        "key": "B",
        "text": "81,82%"
      },
      {
        "key": "C",
        "text": "76,00%"
      },
      {
        "key": "D",
        "text": "66,67%"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD003_0078",
    "stt": 116,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Công ty P tại Campuchia xuất khẩu lô hàng giày trẻ em sang Singapore. Hàm lượng giá trị khu vực ASEAN của lô hàng là 40%. Lô hàng được cấp C/O mẫu D và được vận chuyển bằng đường bộ qua Thái Lan, sau đó đưa xuống tàu đi Singapore. Nhận định nào sau đây phù hợp?",
    "options": [
      {
        "key": "A",
        "text": "Lô hàng luôn đáp ứng quy tắc xuất xứ theo ATIGA"
      },
      {
        "key": "B",
        "text": "Lô hàng không đáp ứng vì đi qua lãnh thổ nước thứ ba"
      },
      {
        "key": "C",
        "text": "Lô hàng đáp ứng nếu việc quá cảnh phù hợp điều kiện vận chuyển trực tiếp"
      },
      {
        "key": "D",
        "text": "Lô hàng không được xét ưu đãi vì vận chuyển bằng nhiều phương thức"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD003_0079",
    "stt": 117,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Công ty A xuất khẩu lô hàng túi da sang Thái Lan. Lô hàng sử dụng da thuộc Việt Nam trị giá 80 USD, khóa kéo từ Trung Quốc trị giá 25 USD, vải lót từ Campuchia trị giá 20 USD, chi phí nhân công trực tiếp tại Việt Nam 30 USD, chi phí quản lý tại Việt Nam 15 USD, lợi nhuận 10 USD. Chi phí vận tải quốc tế là 12 USD và phí bảo hiểm quốc tế là 3 USD. Hàm lượng giá trị khu vực ASEAN của lô hàng là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "86,11%"
      },
      {
        "key": "B",
        "text": "79,49%"
      },
      {
        "key": "C",
        "text": "80,56%"
      },
      {
        "key": "D",
        "text": "100,00%"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD003_0080",
    "stt": 118,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Công ty B xuất khẩu lô hàng bàn gỗ sang Malaysia. Lô hàng sử dụng gỗ từ Lào trị giá 60 USD, ốc vít từ Hàn Quốc trị giá 15 USD, sơn phủ từ Thái Lan trị giá 10 USD, chi phí nhân công trực tiếp tại Việt Nam 25 USD, chi phí quản lý tại Việt Nam 20 USD, lợi nhuận 15 USD. Chi phí vận tải quốc tế là 20 USD và phí bảo hiểm quốc tế là 5 USD. Hàm lượng giá trị khu vực ASEAN của lô hàng là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "76,47%"
      },
      {
        "key": "B",
        "text": "89,66%"
      },
      {
        "key": "C",
        "text": "79,31%"
      },
      {
        "key": "D",
        "text": "100,00%"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD003_0081",
    "stt": 119,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Công ty C xuất khẩu lô hàng áo khoác sang Philippines. Lô hàng sử dụng vải chính từ Trung Quốc trị giá 70 USD, cúc áo từ Thái Lan trị giá 8 USD, chỉ may từ Việt Nam trị giá 5 USD, nhãn mác từ Malaysia trị giá 7 USD, chi phí nhân công trực tiếp tại Việt Nam 35 USD, chi phí quản lý tại Việt Nam 15 USD, lợi nhuận 10 USD. Chi phí vận tải quốc tế là 10 USD và phí bảo hiểm quốc tế là 5 USD. Hàm lượng giá trị khu vực ASEAN của lô hàng là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "48,48%"
      },
      {
        "key": "B",
        "text": "46,67%"
      },
      {
        "key": "C",
        "text": "53,33%"
      },
      {
        "key": "D",
        "text": "43,33%"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD003_0082",
    "stt": 120,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Công ty D xuất khẩu lô hàng thiết bị điện tử sang Singapore. Lô hàng sử dụng chip xử lý từ Hàn Quốc trị giá 120 USD, vỏ nhựa từ Thái Lan trị giá 30 USD, pin từ Indonesia trị giá 40 USD, chi phí nhân công trực tiếp tại Việt Nam 50 USD, chi phí quản lý tại Việt Nam 20 USD, lợi nhuận 30 USD. Chi phí vận tải quốc tế là 25 USD và phí bảo hiểm quốc tế là 5 USD. Hàm lượng giá trị khu vực ASEAN của lô hàng là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "53,13%"
      },
      {
        "key": "B",
        "text": "58,62%"
      },
      {
        "key": "C",
        "text": "48,28%"
      },
      {
        "key": "D",
        "text": "62,50%"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD003_0083",
    "stt": 121,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Công ty E xuất khẩu lô hàng thực phẩm chế biến sang Campuchia. Lô hàng sử dụng gạo từ Việt Nam trị giá 40 USD, gia vị từ Thái Lan trị giá 15 USD, bao bì từ Trung Quốc trị giá 12 USD, phụ gia từ Nhật Bản trị giá 8 USD, chi phí nhân công trực tiếp tại Việt Nam 20 USD, chi phí quản lý tại Việt Nam 10 USD, lợi nhuận 5 USD. Chi phí vận tải quốc tế là 7 USD và phí bảo hiểm quốc tế là 3 USD. Hàm lượng giá trị khu vực ASEAN của lô hàng là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "75,00%"
      },
      {
        "key": "B",
        "text": "77,27%"
      },
      {
        "key": "C",
        "text": "81,82%"
      },
      {
        "key": "D",
        "text": "68,18%"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD003_0084",
    "stt": 122,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Công ty A xuất khẩu lô hàng giày thể thao sang Malaysia. Lô hàng sử dụng da thuộc từ Việt Nam trị giá 60 USD, đế giày từ Thái Lan trị giá 25 USD, dây giày từ Indonesia trị giá 5 USD, khóa trang trí từ Trung Quốc trị giá 20 USD, keo dán từ Hàn Quốc trị giá 10 USD. Chi phí nhân công trực tiếp tại Việt Nam là 30 USD, chi phí quản lý tại Việt Nam là 12 USD, chi phí vận tải nội địa từ xưởng ra cảng Hải Phòng là 8 USD, lợi nhuận là 10 USD. Chi phí vận tải quốc tế từ Việt Nam sang Malaysia là 15 USD, phí bảo hiểm quốc tế là 5 USD. Hàm lượng giá trị khu vực ASEAN của lô hàng là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "83,33%"
      },
      {
        "key": "B",
        "text": "75,00%"
      },
      {
        "key": "C",
        "text": "73,33%"
      },
      {
        "key": "D",
        "text": "100,00%"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD003_0085",
    "stt": 123,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Công ty B xuất khẩu lô hàng khung xe đạp sang Thái Lan. Lô hàng sử dụng ống nhôm từ Malaysia trị giá 70 USD, bộ truyền động từ Nhật Bản trị giá 45 USD, phanh xe từ Trung Quốc trị giá 25 USD, sơn phủ từ Việt Nam trị giá 8 USD, bao bì từ Singapore trị giá 6 USD. Chi phí nhân công trực tiếp tại Việt Nam là 40 USD, chi phí quản lý tại Việt Nam là 20 USD, chi phí bốc xếp tại cảng xuất của Việt Nam là 4 USD, lợi nhuận là 12 USD. Chi phí vận tải quốc tế là 30 USD và phí bảo hiểm quốc tế là 10 USD. Hàm lượng giá trị khu vực ASEAN của lô hàng là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "59,26%"
      },
      {
        "key": "B",
        "text": "69,57%"
      },
      {
        "key": "C",
        "text": "89,13%"
      },
      {
        "key": "D",
        "text": "36,52%"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD003_0086",
    "stt": 124,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Công ty C xuất khẩu lô hàng cà phê hòa tan sang Philippines. Lô hàng sử dụng cà phê nhân từ Lào trị giá 80 USD, đường từ Thái Lan trị giá 12 USD, sữa bột từ New Zealand trị giá 28 USD, hương liệu từ Nhật Bản trị giá 10 USD. Chi phí nhân công trực tiếp tại Việt Nam là 25 USD, chi phí quản lý tại Việt Nam là 15 USD, chi phí vận chuyển nội địa đến cảng xuất là 5 USD, lợi nhuận là 20 USD. Chi phí vận tải quốc tế là 18 USD, phí bảo hiểm quốc tế là 7 USD. Hàm lượng giá trị khu vực ASEAN của lô hàng là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "71,36%"
      },
      {
        "key": "B",
        "text": "67,69%"
      },
      {
        "key": "C",
        "text": "80,51%"
      },
      {
        "key": "D",
        "text": "100,00%"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD003_0087",
    "stt": 125,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Công ty D xuất khẩu lô hàng bàn ghế nội thất sang Singapore. Lô hàng sử dụng gỗ từ Indonesia trị giá 90 USD, ốc vít từ Trung Quốc trị giá 12 USD, sơn phủ từ Malaysia trị giá 18 USD, vải bọc từ Việt Nam trị giá 25 USD. Công ty còn trả phí thiết kế mẫu cho đối tác Hàn Quốc 15 USD và khoản phí này được tính vào giá FOB. Chi phí nhân công trực tiếp tại Việt Nam là 35 USD, chi phí quản lý tại Việt Nam là 22 USD, chi phí vận tải nội địa ra cảng là 6 USD, lợi nhuận là 17 USD. Chi phí vận tải quốc tế là 20 USD, phí bảo hiểm quốc tế là 8 USD. Hàm lượng giá trị khu vực ASEAN của lô hàng là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "94,67%"
      },
      {
        "key": "B",
        "text": "100,00%"
      },
      {
        "key": "C",
        "text": "88,75%"
      },
      {
        "key": "D",
        "text": "79,48%"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD003_0088",
    "stt": 126,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.2 Hệ thống pháp quy về xuất xứ hàng hóa",
    "cauHoi": "Công ty E xuất khẩu lô hàng đồ chơi điện tử sang Campuchia. Lô hàng sử dụng vỏ nhựa từ Thái Lan trị giá 30 USD, loa nhỏ từ Việt Nam trị giá 12 USD, bảng mạch từ Đài Loan trị giá 65 USD, pin từ Trung Quốc trị giá 20 USD, sách hướng dẫn và hộp giấy từ Indonesia trị giá 8 USD. Chi phí nhân công trực tiếp tại Việt Nam là 28 USD, chi phí quản lý tại Việt Nam là 14 USD, phí kiểm nghiệm tại Việt Nam trước khi xuất khẩu là 6 USD, lợi nhuận là 12 USD. Chi phí vận tải quốc tế là 9 USD, phí bảo hiểm quốc tế là 4 USD. Hàm lượng giá trị khu vực ASEAN của lô hàng là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "52,88%"
      },
      {
        "key": "B",
        "text": "89,74%"
      },
      {
        "key": "C",
        "text": "47,18%"
      },
      {
        "key": "D",
        "text": "56,41%"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD004_0001",
    "stt": 127,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.3 Cơ sở pháp quy về thuế xuất nhập khẩu",
    "cauHoi": "Lô hàng X gồm 2.000 sản phẩm, nhập khẩu vào Việt Nam từ Hàn Quốc. Giá ghi trên hóa đơn thương mại là 120 USD/sản phẩm, theo điều kiện FOB cảng Busan, Incoterms 2020. Bên mua thuê vận chuyển quốc tế và trả cước vận tải 4.000 USD cho cả lô hàng; phí bảo hiểm quốc tế là 1.000 USD cho cả lô hàng. Hoa hồng mua hàng là 1 USD/sản phẩm, chưa được tính vào hóa đơn thương mại. Chi phí bao bì gắn liền với hàng hóa là 0,5 USD/sản phẩm, do người mua chịu và chưa được tính vào hóa đơn. Lô hàng đáp ứng điều kiện xác định trị giá tính thuế theo phương pháp trị giá giao dịch. Xác định trị giá tính thuế trên một đơn vị sản phẩm của lô hàng X?",
    "options": [
      {
        "key": "A",
        "text": "120 USD"
      },
      {
        "key": "B",
        "text": "122,5 USD"
      },
      {
        "key": "C",
        "text": "123 USD"
      },
      {
        "key": "D",
        "text": "124 USD"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD004_0002",
    "stt": 128,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.3 Cơ sở pháp quy về thuế xuất nhập khẩu",
    "cauHoi": "Lô hàng M gồm 500 sản phẩm, nhập khẩu vào Việt Nam từ Nhật Bản. Giá ghi trên hóa đơn thương mại là 300 USD/sản phẩm, theo điều kiện CIF cảng Hải Phòng, Incoterms 2020. Trong giá hóa đơn đã bao gồm cước vận tải quốc tế và bảo hiểm quốc tế. Sau khi hàng nhập khẩu về Việt Nam, bên mua trả thêm chi phí vận chuyển nội địa từ cảng Hải Phòng về kho là 2.000 USD cho cả lô hàng. Hoa hồng bán hàng là 3 USD/sản phẩm, chưa được tính vào hóa đơn thương mại. Khoản giảm giá 5 USD/sản phẩm được thỏa thuận trước khi xếp hàng lên tàu và văn bản giảm giá được nộp cùng hồ sơ hải quan khi làm thủ tục nhập khẩu. Lô hàng đáp ứng điều kiện xác định trị giá tính thuế theo phương pháp trị giá giao dịch. Xác định trị giá tính thuế trên một đơn vị sản phẩm của lô hàng M?",
    "options": [
      {
        "key": "A",
        "text": "295 USD"
      },
      {
        "key": "B",
        "text": "298 USD"
      },
      {
        "key": "C",
        "text": "302 USD"
      },
      {
        "key": "D",
        "text": "306 USD"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD004_0003",
    "stt": 129,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.3 Cơ sở pháp quy về thuế xuất nhập khẩu",
    "cauHoi": "Lô hàng N gồm 1.000 sản phẩm, nhập khẩu vào Việt Nam từ Thái Lan. Giá ghi trên hóa đơn thương mại là 80 USD/sản phẩm, theo điều kiện CIP cảng Nam Đình Vũ, Hải Phòng, Incoterms 2020. Trong giá hóa đơn đã bao gồm cước vận tải quốc tế và bảo hiểm quốc tế đến cảng nhập. Người mua phải trả thêm tiền bản quyền 1,5 USD/sản phẩm cho bên bán như một điều kiện để được mua lô hàng, khoản này chưa được tính vào hóa đơn thương mại. Sau khi hàng được xếp lên tàu, bên bán đồng ý giảm giá 2 USD/sản phẩm và văn bản giảm giá được nộp cùng hồ sơ hải quan. Bên bán đã trả phí vệ sinh container 500 USD cho cả lô hàng. Lô hàng đáp ứng điều kiện xác định trị giá tính thuế theo phương pháp trị giá giao dịch. Xác định trị giá tính thuế trên một đơn vị sản phẩm của lô hàng N?",
    "options": [
      {
        "key": "A",
        "text": "79,5 USD"
      },
      {
        "key": "B",
        "text": "80 USD"
      },
      {
        "key": "C",
        "text": "81,5 USD"
      },
      {
        "key": "D",
        "text": "82 USD"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD004_0004",
    "stt": 130,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.3 Cơ sở pháp quy về thuế xuất nhập khẩu",
    "cauHoi": "Doanh nghiệp xuất khẩu một lô hàng giày Bitis Hunter sang Trung Quốc. Đối với các loại thuế nêu dưới đây, doanh nghiệp phải nộp:",
    "options": [
      {
        "key": "A",
        "text": "Thuế xuất khẩu"
      },
      {
        "key": "B",
        "text": "Thuế giá trị gia tăng"
      },
      {
        "key": "C",
        "text": "Thuế tiêu thụ đặc biệt"
      },
      {
        "key": "D",
        "text": "Không phải nộp các loại thuế nêu trên"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD004_0005",
    "stt": 131,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.3 Cơ sở pháp quy về thuế xuất nhập khẩu",
    "cauHoi": "Hoạt động nào sau đây là hoạt động bán hàng để xuất khẩu đến Việt Nam?",
    "options": [
      {
        "key": "A",
        "text": "Doanh nghiệp Nhật Bản trong khu công nghiệp Nomura bán hàng cho doanh nghiệp thuộc khu công nghệ cao Láng Hòa Lạc"
      },
      {
        "key": "B",
        "text": "Doanh nghiệp trong khu chế xuất Tân Thuận bán hàng cho doanh nghiệp thuộc khu công nghiệp Sóng Thần"
      },
      {
        "key": "C",
        "text": "Doanh nghiệp Thái Lan chuyển hàng mẫu cho doanh nghiệp Việt Nam, hàng không phải thanh toán"
      },
      {
        "key": "D",
        "text": "Người bán Thái Lan gửi hàng sang Việt Nam nhờ một doanh nghiệp Việt Nam bán hộ; sau khi bán được hàng, doanh nghiệp Việt Nam chuyển tiền cho người bán Thái Lan và hưởng hoa hồng phí"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD004_0006",
    "stt": 132,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.3 Cơ sở pháp quy về thuế xuất nhập khẩu",
    "cauHoi": "Hàng hóa nào sau đây thuộc đối tượng không chịu thuế?",
    "options": [
      {
        "key": "A",
        "text": "Hàng vận chuyển quá cảnh qua cửa khẩu của Việt Nam sang một nước khác."
      },
      {
        "key": "B",
        "text": "Hàng đưa từ khu bảo thuế vào thị trường trong nước."
      },
      {
        "key": "C",
        "text": "Hàng đưa từ khu công nghiệp Nomura vào khu chế xuất Tân Thuận."
      },
      {
        "key": "D",
        "text": "Hàng xuất khẩu của Việt Nam xuất khẩu sang thị trường các nước thuộc liên minh châu Âu EU."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD004_0007",
    "stt": 133,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.3 Cơ sở pháp quy về thuế xuất nhập khẩu",
    "cauHoi": "Hàng hóa nào sau đây là đối tượng chịu thuế?",
    "options": [
      {
        "key": "A",
        "text": "Hàng đưa từ Thái Lan vào khu chế xuất Linh Trung"
      },
      {
        "key": "B",
        "text": "Hàng đưa từ khu chế xuất Tân Thuận sang Nhật Bản"
      },
      {
        "key": "C",
        "text": "Hàng đưa từ khu chế xuất Tân Thuận sang khu chế xuất Linh Trung"
      },
      {
        "key": "D",
        "text": "Hàng đưa từ khu chế xuất Tân Thuận vào khu công nghiệp Nomura."
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD004_0008",
    "stt": 134,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.3 Cơ sở pháp quy về thuế xuất nhập khẩu",
    "cauHoi": "Căn cứ tính thuế đối với thuế tuyệt đối (TĐ) là:",
    "options": [
      {
        "key": "A",
        "text": "Số lượng hàng hóa thực tế và thuế suất theo tỷ lệ"
      },
      {
        "key": "B",
        "text": "Trị giá hải quan và mức thuế tuyệt đối"
      },
      {
        "key": "C",
        "text": "Số lượng hàng hóa thực tế và mức thuế tuyệt đối"
      },
      {
        "key": "D",
        "text": "Trị giá tính thuế và thuế suất"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD004_0009",
    "stt": 135,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.3 Cơ sở pháp quy về thuế xuất nhập khẩu",
    "cauHoi": "Mặt hàng nào sau đây không chịu thuế TTĐB",
    "options": [
      {
        "key": "A",
        "text": "Xì gà"
      },
      {
        "key": "B",
        "text": "Dầu diezel"
      },
      {
        "key": "C",
        "text": "Bia"
      },
      {
        "key": "D",
        "text": "Bài lá"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD004_0010",
    "stt": 136,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.3 Cơ sở pháp quy về thuế xuất nhập khẩu",
    "cauHoi": "Mặt hàng nào sau đây không chịu thuế TTĐB",
    "options": [
      {
        "key": "A",
        "text": "Điều hòa nhiệt độ có công suất 100.000 BTU"
      },
      {
        "key": "B",
        "text": "Điều hòa nhiệt độ có công suất 90.000 BTU"
      },
      {
        "key": "C",
        "text": "Điều hòa nhiệt độ có công suất 80.000 BTU"
      },
      {
        "key": "D",
        "text": "Điều hòa nhiệt độ có công suất 70.000 BTU"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD004_0011",
    "stt": 137,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.3 Cơ sở pháp quy về thuế xuất nhập khẩu",
    "cauHoi": "Mặt hàng nào sau đây không chịu thuế TTĐB",
    "options": [
      {
        "key": "A",
        "text": "Du thuyền"
      },
      {
        "key": "B",
        "text": "Xe cứu thương"
      },
      {
        "key": "C",
        "text": "Xì gà"
      },
      {
        "key": "D",
        "text": "Bài lá"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD004_0012",
    "stt": 138,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.3 Cơ sở pháp quy về thuế xuất nhập khẩu",
    "cauHoi": "Mặt hàng nào sau đây không chịu thuế TTĐB",
    "options": [
      {
        "key": "A",
        "text": "Xe mô tô có dung tích xi lanh 100 cm³"
      },
      {
        "key": "B",
        "text": "Xe mô tô có dung tích xi lanh 150 cm³"
      },
      {
        "key": "C",
        "text": "Xe mô tô có dung tích xi lanh 175 cm³"
      },
      {
        "key": "D",
        "text": "Xe mô tô có dung tích xi lanh 225 cm³"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD004_0013",
    "stt": 139,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.3 Cơ sở pháp quy về thuế xuất nhập khẩu",
    "cauHoi": "Mặt hàng nào sau đây không chịu thuế bảo vệ môi trường",
    "options": [
      {
        "key": "A",
        "text": "Dầu hỏa"
      },
      {
        "key": "B",
        "text": "Dầu ăn"
      },
      {
        "key": "C",
        "text": "Dầu diezel"
      },
      {
        "key": "D",
        "text": "Mỡ nhờn"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD004_0014",
    "stt": 140,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.3 Cơ sở pháp quy về thuế xuất nhập khẩu",
    "cauHoi": "Mặt hàng nào sau đây không chịu thuế bảo vệ môi trường",
    "options": [
      {
        "key": "A",
        "text": "Than nâu dùng làm nhiên liệu"
      },
      {
        "key": "B",
        "text": "Than hoạt tính dùng trong lọc nước"
      },
      {
        "key": "C",
        "text": "Than mỡ dùng trong luyện kim"
      },
      {
        "key": "D",
        "text": "Than antraxit dùng làm nhiên liệu"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD004_0015",
    "stt": 141,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.3 Cơ sở pháp quy về thuế xuất nhập khẩu",
    "cauHoi": "Trường hợp nào sau đây hàng hóa thuộc đối tượng không chịu thuế xuất khẩu, thuế nhập khẩu?",
    "options": [
      {
        "key": "A",
        "text": "Hàng hóa từ khu chế xuất Nomura bán vào thị trường tại thành phố Hà Nội"
      },
      {
        "key": "B",
        "text": "Hàng hóa từ khu chế xuất tại Hải Phòng bán cho doanh nghiệp tại Quảng Ninh"
      },
      {
        "key": "C",
        "text": "Hàng hóa từ Hàn Quốc nhập khẩu trực tiếp vào doanh nghiệp tại tỉnh Bắc Ninh"
      },
      {
        "key": "D",
        "text": "Hàng hóa từ khu chế xuất Nomura chuyển sang khu chế xuất tại tỉnh Hải Dương"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD004_0016",
    "stt": 142,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.3 Cơ sở pháp quy về thuế xuất nhập khẩu",
    "cauHoi": "Biểu thuế ban hành theo các hiệp định thương mại tự do (FTA) là:",
    "options": [
      {
        "key": "A",
        "text": "Biểu thuế thông thường áp dụng ngoài diện ưu đãi"
      },
      {
        "key": "B",
        "text": "Biểu thuế ưu đãi áp dụng theo quy chế tối huệ quốc"
      },
      {
        "key": "C",
        "text": "Biểu thuế ưu đãi đặc biệt theo từng hiệp định FTA"
      },
      {
        "key": "D",
        "text": "Biểu thuế tự vệ áp dụng theo biện pháp phòng vệ"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD004_0017",
    "stt": 143,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.3 Cơ sở pháp quy về thuế xuất nhập khẩu",
    "cauHoi": "Cách nào sau đây giúp tăng hàm lượng giá trị khu vực (RVC) của lô hàng khi xác định tiêu chuẩn xuất xứ nếu trị giá FOB của lô hàng không thay đổi?",
    "options": [
      {
        "key": "A",
        "text": "Giảm giá trị nguyên liệu, vật liệu không có xuất xứ"
      },
      {
        "key": "B",
        "text": "Tăng giá trị nguyên liệu, vật liệu không có xuất xứ"
      },
      {
        "key": "C",
        "text": "Tăng chi phí vận chuyển quốc tế"
      },
      {
        "key": "D",
        "text": "Điều chỉnh tăng tỷ giá hối đoái"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD004_0018",
    "stt": 144,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.3 Cơ sở pháp quy về thuế xuất nhập khẩu",
    "cauHoi": "Nhận định nào đúng về trách nhiệm xác định số tiền thuế đối với hàng hóa xuất khẩu, nhập khẩu?",
    "options": [
      {
        "key": "A",
        "text": "Cơ quan hải quan luôn xác định trước số tiền thuế để người nộp thuế ghi lại trên hồ sơ"
      },
      {
        "key": "B",
        "text": "Người nộp thuế chỉ xác định số tiền thuế sau khi hàng hóa đã tiêu thụ trong nội địa"
      },
      {
        "key": "C",
        "text": "Người nộp thuế tự xác định và chịu trách nhiệm trước pháp luật về số tiền thuế phải nộp"
      },
      {
        "key": "D",
        "text": "Doanh nghiệp được tự lựa chọn mức thuế suất nếu hàng hóa đã được phân luồng xanh"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD004_0019",
    "stt": 145,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.3 Cơ sở pháp quy về thuế xuất nhập khẩu",
    "cauHoi": "Hàng hóa nào sau đây là đối tượng chịu thuế xuất khẩu, thuế nhập khẩu?",
    "options": [
      {
        "key": "A",
        "text": "Hàng từ Thái Lan quá cảnh qua Việt Nam để vận chuyển sang nước thứ ba"
      },
      {
        "key": "B",
        "text": "Hàng từ khu chế xuất Tân Thuận xuất khẩu sang Hàn Quốc"
      },
      {
        "key": "C",
        "text": "Hàng từ Trung Quốc đưa vào kho ngoại quan tại Việt Nam để chờ tái xuất sang nước thứ ba"
      },
      {
        "key": "D",
        "text": "Hàng đưa từ khu chế xuất Linh Trung vào khu công nghiệp Cát Lái II"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD004_0020",
    "stt": 146,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.3 Cơ sở pháp quy về thuế xuất nhập khẩu",
    "cauHoi": "Hoạt động nào sau đây được coi là bán hàng để xuất khẩu đến Việt Nam?",
    "options": [
      {
        "key": "A",
        "text": "Công ty A tại TP. Hồ Chí Minh bán linh kiện cho Công ty B tại Thái Nguyên"
      },
      {
        "key": "B",
        "text": "Doanh nghiệp trong khu chế xuất Linh Trung bán hàng cho doanh nghiệp thuộc Khu công nghiệp VSIP Hải Phòng"
      },
      {
        "key": "C",
        "text": "Doanh nghiệp trong khu công nghiệp Tràng Duệ bán hàng cho doanh nghiệp thuộc khu công nghệ cao Láng - Hòa Lạc"
      },
      {
        "key": "D",
        "text": "Công ty A tại Hải Phòng bán hàng cho Công ty B tại Hà Nội"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD004_0021",
    "stt": 147,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.3 Cơ sở pháp quy về thuế xuất nhập khẩu",
    "cauHoi": "Thuế suất thông thường đối với hàng hóa nhập khẩu được áp dụng trong trường hợp nào?",
    "options": [
      {
        "key": "A",
        "text": "Hàng hóa có xuất xứ từ nước có quan hệ tối huệ quốc với Việt Nam"
      },
      {
        "key": "B",
        "text": "Hàng hóa được hưởng ưu đãi theo hiệp định thương mại tự do"
      },
      {
        "key": "C",
        "text": "Hàng hóa không thuộc diện áp dụng thuế suất ưu đãi hoặc ưu đãi đặc biệt"
      },
      {
        "key": "D",
        "text": "Hàng hóa từ khu phi thuế quan đưa vào thị trường nội địa"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD004_0022",
    "stt": 148,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.3 Cơ sở pháp quy về thuế xuất nhập khẩu",
    "cauHoi": "Thời hạn nộp thuế đối với hàng tiêu dùng nhập khẩu được xác định như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Tối đa 275 ngày kể từ ngày đăng ký tờ khai hải quan"
      },
      {
        "key": "B",
        "text": "Tối đa 15 ngày kể từ ngày đăng ký tờ khai hải quan"
      },
      {
        "key": "C",
        "text": "Tối đa 30 ngày kể từ ngày đăng ký tờ khai hải quan"
      },
      {
        "key": "D",
        "text": "Phải nộp thuế trước khi thông quan hoặc giải phóng hàng hóa"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD004_0023",
    "stt": 149,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.3 Cơ sở pháp quy về thuế xuất nhập khẩu",
    "cauHoi": "Lô hàng N gồm 2.000 đồng hồ thông minh, nhập khẩu vào Việt Nam từ Trung Quốc. Giá ghi trên hóa đơn thương mại là 45 USD/sản phẩm, theo điều kiện FOB Thượng Hải, Incoterms 2020. Người mua phải trả cước vận tải quốc tế 4 USD/sản phẩm và bảo hiểm quốc tế 0,5 USD/sản phẩm để đưa hàng đến cảng Hải Phòng. Ngoài ra, người mua phải trả tiền bản quyền 1 USD/sản phẩm cho bên bán như một điều kiện để được mua hàng, khoản này chưa tính vào hóa đơn. Trước khi hàng được xếp lên tàu, bên bán giảm giá 2 USD/sản phẩm và văn bản giảm giá được nộp cùng hồ sơ hải quan. Lô hàng đáp ứng điều kiện xác định trị giá tính thuế theo phương pháp trị giá giao dịch. Xác định trị giá tính thuế trên một đơn vị sản phẩm của lô hàng N?",
    "options": [
      {
        "key": "A",
        "text": "47,5 USD"
      },
      {
        "key": "B",
        "text": "48,5 USD"
      },
      {
        "key": "C",
        "text": "50,5 USD"
      },
      {
        "key": "D",
        "text": "43 USD"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD004_0024",
    "stt": 150,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.3 Cơ sở pháp quy về thuế xuất nhập khẩu",
    "cauHoi": "Lô hàng N gồm 800 máy pha cà phê, nhập khẩu vào Việt Nam từ Ý. Giá ghi trên hóa đơn thương mại là 180 USD/sản phẩm, theo điều kiện CIF cảng Cát Lái, Incoterms 2020. Trong giá hóa đơn đã bao gồm cước vận tải quốc tế và bảo hiểm quốc tế đến cảng nhập. Người mua phải trả thêm hoa hồng bán hàng 5 USD/sản phẩm cho đại lý của bên bán, khoản này chưa tính vào hóa đơn. Sau khi hàng đã được xếp lên tàu, bên bán đồng ý giảm giá 10 USD/sản phẩm. Người mua còn trả chi phí quảng bá sản phẩm tại Việt Nam 2 USD/sản phẩm cho một đơn vị quảng cáo trong nước. Lô hàng đáp ứng điều kiện xác định trị giá tính thuế theo phương pháp trị giá giao dịch. Xác định trị giá tính thuế trên một đơn vị sản phẩm của lô hàng N?",
    "options": [
      {
        "key": "A",
        "text": "175 USD"
      },
      {
        "key": "B",
        "text": "180 USD"
      },
      {
        "key": "C",
        "text": "185 USD"
      },
      {
        "key": "D",
        "text": "187 USD"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD004_0025",
    "stt": 151,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.3 Cơ sở pháp quy về thuế xuất nhập khẩu",
    "cauHoi": "Lô hàng N gồm 1.200 cuộn vải, nhập khẩu vào Việt Nam từ Hàn Quốc. Giá ghi trên hóa đơn thương mại là 30 USD/cuộn, theo điều kiện CFR cảng Đình Vũ, Hải Phòng, Incoterms 2020. Trong giá hóa đơn đã bao gồm cước vận tải quốc tế nhưng chưa bao gồm bảo hiểm quốc tế. Người mua phải trả bảo hiểm quốc tế 0,3 USD/cuộn và chi phí bao bì đóng gói 0,7 USD/cuộn cho bên bán, các khoản này chưa tính vào hóa đơn. Người mua trả hoa hồng mua hàng 0,5 USD/cuộn cho đại lý đại diện cho mình. Trước khi hàng được xếp lên tàu, bên bán giảm giá 1 USD/cuộn và văn bản giảm giá được nộp cùng hồ sơ hải quan. Lô hàng đáp ứng điều kiện xác định trị giá tính thuế theo phương pháp trị giá giao dịch. Xác định trị giá tính thuế trên một đơn vị sản phẩm của lô hàng N?",
    "options": [
      {
        "key": "A",
        "text": "29,5 USD"
      },
      {
        "key": "B",
        "text": "30 USD"
      },
      {
        "key": "C",
        "text": "30,5 USD"
      },
      {
        "key": "D",
        "text": "31 USD"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD004_0026",
    "stt": 152,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.3 Cơ sở pháp quy về thuế xuất nhập khẩu",
    "cauHoi": "Lô hàng N gồm 600 máy tính bảng, nhập khẩu vào Việt Nam từ Hoa Kỳ. Giá ghi trên hóa đơn thương mại là 250 USD/sản phẩm, theo điều kiện FCA Los Angeles, Incoterms 2020. Người mua phải trả cước vận tải quốc tế 12 USD/sản phẩm và bảo hiểm quốc tế 1 USD/sản phẩm để đưa hàng đến cửa khẩu nhập đầu tiên. Người mua phải trả tiền bản quyền 4 USD/sản phẩm cho bên bán như một điều kiện để được mua lô hàng, khoản này chưa tính vào hóa đơn. Trước khi hàng được xếp lên phương tiện vận tải quốc tế, bên bán giảm giá 3 USD/sản phẩm và văn bản giảm giá được nộp cùng hồ sơ hải quan. Sau khi hàng đã xếp lên phương tiện vận tải, bên bán tiếp tục giảm thêm 5 USD/sản phẩm. Lô hàng đáp ứng điều kiện xác định trị giá tính thuế theo phương pháp trị giá giao dịch. Xác định trị giá tính thuế trên một đơn vị sản phẩm của lô hàng N?",
    "options": [
      {
        "key": "A",
        "text": "259 USD"
      },
      {
        "key": "B",
        "text": "260 USD"
      },
      {
        "key": "C",
        "text": "264 USD"
      },
      {
        "key": "D",
        "text": "267 USD"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD004_0027",
    "stt": 153,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.3 Cơ sở pháp quy về thuế xuất nhập khẩu",
    "cauHoi": "Lô hàng N gồm 1.000 can hóa chất, nhập khẩu vào Việt Nam từ Malaysia. Giá ghi trên hóa đơn thương mại là 95 USD/can, theo điều kiện CIP cảng Cái Mép, Incoterms 2020. Trong giá hóa đơn đã bao gồm cước vận tải quốc tế và bảo hiểm quốc tế đến cảng nhập. Người mua phải trả phí cấp quyền sử dụng công thức sản xuất 2,5 USD/can cho bên bán như điều kiện để được mua hàng, khoản này chưa tính vào hóa đơn. Người mua cũng phải trả chi phí bao bì đặc biệt 1,5 USD/can cho bên bán, khoản này chưa tính vào hóa đơn. Sau khi hàng đã được xếp lên tàu, bên bán đồng ý giảm giá 3 USD/can. Lô hàng đáp ứng điều kiện xác định trị giá tính thuế theo phương pháp trị giá giao dịch. Xác định trị giá tính thuế trên một đơn vị sản phẩm của lô hàng N?",
    "options": [
      {
        "key": "A",
        "text": "95 USD"
      },
      {
        "key": "B",
        "text": "96 USD"
      },
      {
        "key": "C",
        "text": "97,5 USD"
      },
      {
        "key": "D",
        "text": "99 USD"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD004_0028",
    "stt": 154,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.3 Cơ sở pháp quy về thuế xuất nhập khẩu",
    "cauHoi": "Lô hàng N gồm 1.500 loa bluetooth, nhập khẩu vào Việt Nam từ Nhật Bản. Giá ghi trên hóa đơn thương mại là 120 USD/sản phẩm, theo điều kiện FCA Osaka, Incoterms 2020. Người mua phải trả chi phí vận chuyển nội địa tại Nhật Bản đến điểm giao hàng xuất khẩu 2 USD/sản phẩm, cước vận tải quốc tế 6 USD/sản phẩm và bảo hiểm quốc tế 1 USD/sản phẩm để đưa hàng đến cảng Hải Phòng. Người mua phải trả hoa hồng bán hàng 3 USD/sản phẩm cho đại lý của bên bán và tiền bản quyền 2 USD/sản phẩm cho bên bán như điều kiện để được mua hàng, các khoản này chưa tính vào hóa đơn. Người mua trả hoa hồng mua hàng 1 USD/sản phẩm cho đại lý đại diện cho mình. Trước khi hàng được xếp lên phương tiện vận tải quốc tế, bên bán giảm giá 4 USD/sản phẩm và văn bản giảm giá được nộp cùng hồ sơ hải quan. Sau khi hàng đã xếp lên phương tiện vận tải, bên bán giảm tiếp 3 USD/sản phẩm. Lô hàng đáp ứng điều kiện xác định trị giá tính thuế theo phương pháp trị giá giao dịch. Xác định trị giá tính thuế trên một đơn vị sản phẩm của lô hàng N?",
    "options": [
      {
        "key": "A",
        "text": "128 USD"
      },
      {
        "key": "B",
        "text": "129 USD"
      },
      {
        "key": "C",
        "text": "130 USD"
      },
      {
        "key": "D",
        "text": "131 USD"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD004_0029",
    "stt": 155,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.3 Cơ sở pháp quy về thuế xuất nhập khẩu",
    "cauHoi": "Lô hàng N gồm 300 máy phân tích mẫu, nhập khẩu vào Việt Nam từ Đức. Giá ghi trên hóa đơn thương mại là 2.000 USD/máy, theo điều kiện CIF cảng Cát Lái, Incoterms 2020. Trong giá hóa đơn đã bao gồm cước vận tải quốc tế và bảo hiểm quốc tế đến cảng nhập. Người mua phải trả tiền bản quyền 80 USD/máy cho bên bán như điều kiện để được mua hàng và hoa hồng bán hàng 50 USD/máy cho đại lý của bên bán, các khoản này chưa tính vào hóa đơn. Người mua cung cấp miễn phí cho bên bán một bộ khuôn chuyên dụng trị giá 18.000 USD, được phân bổ đều cho 300 máy. Sau khi hàng đã được xếp lên tàu, bên bán giảm giá 150 USD/máy. Chi phí lắp đặt sau nhập khẩu là 120 USD/máy và được ghi tách riêng. Lô hàng đáp ứng điều kiện xác định trị giá tính thuế theo phương pháp trị giá giao dịch. Xác định trị giá tính thuế trên một đơn vị sản phẩm của lô hàng N?",
    "options": [
      {
        "key": "A",
        "text": "2.040 USD"
      },
      {
        "key": "B",
        "text": "2.110 USD"
      },
      {
        "key": "C",
        "text": "2.130 USD"
      },
      {
        "key": "D",
        "text": "2.190 USD"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD004_0030",
    "stt": 156,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.3 Cơ sở pháp quy về thuế xuất nhập khẩu",
    "cauHoi": "Lô hàng N gồm 2.000 kg cà phê đặc sản, nhập khẩu vào Việt Nam từ Colombia. Giá ghi trên hóa đơn thương mại là 7,5 USD/kg, theo điều kiện CFR cảng Hải Phòng, Incoterms 2020. Trong giá hóa đơn đã bao gồm cước vận tải quốc tế nhưng chưa bao gồm bảo hiểm quốc tế. Người mua phải trả bảo hiểm quốc tế 0,2 USD/kg và chi phí bao bì đóng gói 0,3 USD/kg cho bên bán, các khoản này chưa tính vào hóa đơn. Người mua trả tiền bản quyền 0,4 USD/kg cho bên bán như điều kiện để được mua hàng. Người mua trả hoa hồng mua hàng 0,25 USD/kg cho đại lý đại diện cho mình và chi phí quảng bá tại Việt Nam 0,35 USD/kg. Trước khi hàng được xếp lên tàu, bên bán giảm giá 0,5 USD/kg và văn bản giảm giá được nộp cùng hồ sơ hải quan. Lô hàng đáp ứng điều kiện xác định trị giá tính thuế theo phương pháp trị giá giao dịch. Xác định trị giá tính thuế trên một đơn vị hàng hóa của lô hàng N?",
    "options": [
      {
        "key": "A",
        "text": "7,50 USD"
      },
      {
        "key": "B",
        "text": "8,15 USD"
      },
      {
        "key": "C",
        "text": "7,90 USD"
      },
      {
        "key": "D",
        "text": "8,40 USD"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD004_0031",
    "stt": 157,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.3 Cơ sở pháp quy về thuế xuất nhập khẩu",
    "cauHoi": "Lô hàng N gồm 500 máy in công nghiệp, nhập khẩu vào Việt Nam từ Singapore. Giá ghi trên hóa đơn thương mại là 350 USD/máy, theo điều kiện DAP kho người mua tại Hải Phòng, Incoterms 2020. Trong giá hóa đơn có 12 USD/máy là chi phí vận chuyển nội địa tại Việt Nam sau khi hàng đến cảng nhập và khoản này được ghi tách riêng. Người mua cung cấp miễn phí cho bên bán bản thiết kế kỹ thuật được thực hiện ở nước ngoài, trị giá 10.000 USD và được phân bổ đều cho 500 máy. Người mua phải trả tiền bản quyền 5 USD/máy cho bên bán như điều kiện để được mua hàng. Trước khi hàng được xếp lên phương tiện vận tải quốc tế, bên bán giảm giá 8 USD/máy và văn bản giảm giá được nộp cùng hồ sơ hải quan. Lô hàng đáp ứng điều kiện xác định trị giá tính thuế theo phương pháp trị giá giao dịch. Xác định trị giá tính thuế trên một đơn vị sản phẩm của lô hàng N?",
    "options": [
      {
        "key": "A",
        "text": "330 USD"
      },
      {
        "key": "B",
        "text": "350 USD"
      },
      {
        "key": "C",
        "text": "355 USD"
      },
      {
        "key": "D",
        "text": "375 USD"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD004_0032",
    "stt": 158,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.3 Cơ sở pháp quy về thuế xuất nhập khẩu",
    "cauHoi": "Lô hàng N gồm 10.000 áo khoác, nhập khẩu vào Việt Nam từ Bangladesh. Giá ghi trên hóa đơn thương mại là 12 USD/áo, theo điều kiện FOB Chittagong, Incoterms 2020. Người mua phải trả cước vận tải quốc tế 15.000 USD, bảo hiểm quốc tế 3.000 USD và phụ phí tắc nghẽn cảng trong quá trình vận tải quốc tế 1.000 USD cho cả lô hàng. Người mua cung cấp miễn phí cho bên bán nhãn mác và bao bì chuyên dùng trị giá 5.000 USD, được sử dụng cho toàn bộ lô hàng. Người mua phải trả tiền bản quyền 0,4 USD/áo cho bên bán như điều kiện để được mua hàng, khoản này chưa tính vào hóa đơn. Sau khi hàng đã được xếp lên tàu, bên bán giảm giá 0,6 USD/áo. Người mua trả chi phí kiểm tra chất lượng tại Việt Nam sau nhập khẩu 0,2 USD/áo. Lô hàng đáp ứng điều kiện xác định trị giá tính thuế theo phương pháp trị giá giao dịch. Xác định trị giá tính thuế trên một đơn vị sản phẩm của lô hàng N?",
    "options": [
      {
        "key": "A",
        "text": "14,2 USD"
      },
      {
        "key": "B",
        "text": "14,3 USD"
      },
      {
        "key": "C",
        "text": "14,8 USD"
      },
      {
        "key": "D",
        "text": "15,0 USD"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD005_0001",
    "stt": 159,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Công ty M nhập khẩu của công ty N một lô hàng X gồm 500 sản phẩm, bán trong giao dịch bán buôn, giá hóa đơn là 25 USD/sản phẩm. Lô hàng X không đủ điều kiện xác định trị giá tính thuế theo phương pháp 1. Trong dữ liệu của cơ quan hải quan có 2 lô hàng Y và Z giống hệt với X, đã được xác định trị giá tính thuế theo phương pháp 1. Lô hàng Y được xuất khẩu đến Việt Nam trước 40 ngày kể từ ngày xuất khẩu lô hàng X; lô hàng Z được xuất khẩu đến Việt Nam sau 55 ngày kể từ ngày xuất khẩu lô hàng X. Biết lô hàng Y và Z có cùng cấp độ thương mại và cùng số lượng với lô hàng X. Trị giá tính thuế của lô hàng Y là 23 USD/sản phẩm, trị giá tính thuế của lô hàng Z là 21 USD/sản phẩm. Đơn giá tính thuế của lô hàng X là:",
    "options": [
      {
        "key": "A",
        "text": "25 USD"
      },
      {
        "key": "B",
        "text": "23 USD"
      },
      {
        "key": "C",
        "text": "21 USD"
      },
      {
        "key": "D",
        "text": "Không xác định được trị giá tính thuế theo phương pháp 2"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD005_0002",
    "stt": 160,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Công ty A nhập khẩu của công ty B một lô hàng P gồm 200 sản phẩm, bán trong giao dịch bán lẻ, giá hóa đơn là 15 USD/sản phẩm. Lô hàng P không đủ điều kiện xác định trị giá tính thuế theo phương pháp 1. Trong dữ liệu của cơ quan hải quan có 3 lô hàng Q, R và S giống hệt với P, đã được xác định trị giá tính thuế theo phương pháp 1. Lô hàng Q được xuất khẩu đến Việt Nam sau 20 ngày kể từ ngày xuất khẩu lô hàng P; lô hàng R được xuất khẩu đến Việt Nam trước 58 ngày kể từ ngày xuất khẩu lô hàng P; lô hàng S được xuất khẩu đến Việt Nam sau 70 ngày kể từ ngày xuất khẩu lô hàng P. Biết Q và R có cùng số lượng, cùng cấp độ thương mại với P. Trị giá tính thuế của Q là 14 USD/sản phẩm, R là 13 USD/sản phẩm, S là 12 USD/sản phẩm. Đơn giá tính thuế của lô hàng P là:",
    "options": [
      {
        "key": "A",
        "text": "14 USD"
      },
      {
        "key": "B",
        "text": "13 USD"
      },
      {
        "key": "C",
        "text": "12 USD"
      },
      {
        "key": "D",
        "text": "Không xác định được trị giá tính thuế theo phương pháp 2"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0003",
    "stt": 161,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Công ty H nhập khẩu của công ty T một lô hàng K gồm 1.000 sản phẩm, bán trong giao dịch bán buôn, giá hóa đơn là 30 USD/sản phẩm. Lô hàng K không đủ điều kiện xác định trị giá tính thuế theo phương pháp 1. Trong dữ liệu của cơ quan hải quan có 2 lô hàng L và M giống hệt với K, đã được xác định trị giá tính thuế theo phương pháp 1. Lô hàng L được xuất khẩu đến Việt Nam trước 65 ngày kể từ ngày xuất khẩu lô hàng K; lô hàng M được xuất khẩu đến Việt Nam sau 75 ngày kể từ ngày xuất khẩu lô hàng K. Biết lô hàng L và M có cùng số lượng, cùng cấp độ thương mại với K. Trị giá tính thuế của L là 28 USD/sản phẩm, trị giá tính thuế của M là 26 USD/sản phẩm. Đơn giá tính thuế của lô hàng K là:",
    "options": [
      {
        "key": "A",
        "text": "Không xác định được trị giá tính thuế theo phương pháp 2"
      },
      {
        "key": "B",
        "text": "26 USD"
      },
      {
        "key": "C",
        "text": "28 USD"
      },
      {
        "key": "D",
        "text": "30 USD"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD005_0004",
    "stt": 162,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Công ty E nhập khẩu của công ty K một lô hàng A có 300 sản phẩm, bán trong giao dịch bán lẻ, lô hàng được hưởng chiết khấu số lượng với giá hóa đơn 20 USD/chiếc. Lô hàng A không đủ điều kiện xác định trị giá tính thuế theo phương pháp 1. Trong dữ liệu của cơ quan hải quan có 2 lô hàng B và C giống hệt với A, đã được xác định trị giá tính thuế theo phương pháp 1. Lô hàng B được xuất khẩu đến Việt Nam sau 50 ngày kể từ ngày xuất khẩu lô hàng A, lô hàng C được xuất khẩu đến Việt Nam sau 59 ngày kể từ ngày xuất khẩu lô hàng A. Biết lô hàng B và C có cùng số lượng với lô hàng A và được bán trong giao dịch bán lẻ. Trị giá tính thuế của lô hàng B là 18 USD/sản phẩm, trị giá tính thuế của lô hàng C là 16 USD/sản phẩm. Đơn giá tính thuế của lô hàng A là:",
    "options": [
      {
        "key": "A",
        "text": "Không xác định được trị giá tính thuế theo phương pháp 2"
      },
      {
        "key": "B",
        "text": "Không đủ dữ liệu để xác định trị giá tính thuế"
      },
      {
        "key": "C",
        "text": "16 USD"
      },
      {
        "key": "D",
        "text": "18 USD"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD005_0005",
    "stt": 163,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Khoản nào sau đây không được trừ ra khỏi trị giá tính thuế hàng nhập khẩu?",
    "options": [
      {
        "key": "A",
        "text": "Chi phí vận chuyển nội địa phát sinh sau khi nhập khẩu khi đáp ứng các điều kiện về khoản điều chỉnh trừ"
      },
      {
        "key": "B",
        "text": "Khoản giảm giá được thực hiện trước khi xếp hàng lên tàu tại cảng xếp hàng, văn bản giảm giá được nộp cùng với hồ sơ hải quan khi làm thủ tục nhập khẩu"
      },
      {
        "key": "C",
        "text": "Chi phí vận chuyển hàng hóa nhập khẩu đến cửa khẩu nhập đã nằm trong giá mua hàng nhập khẩu"
      },
      {
        "key": "D",
        "text": "Các khoản thuế phải nộp ngân sách đã tính trong giá mua hàng nhập khẩu khi đáp ứng các điều kiện về khoản điều chỉnh trừ"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD005_0006",
    "stt": 164,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Trường hợp nào sau đây thỏa mãn điều kiện về thời gian xuất khẩu khi lựa chọn lô hàng nhập khẩu giống hệt?",
    "options": [
      {
        "key": "A",
        "text": "Lô hàng giống hệt có ngày đăng ký tờ khai hải quan cùng với ngày đăng ký tờ khai hải quan của lô hàng đang cần xác định trị giá tính thuế"
      },
      {
        "key": "B",
        "text": "Lô hàng giống hệt có ngày đăng ký tờ khai hải quan trước 60 ngày so với ngày đăng ký tờ khai hải quan của lô hàng đang cần xác định trị giá tính thuế"
      },
      {
        "key": "C",
        "text": "Lô hàng giống hệt được xuất khẩu cùng ngày hoặc trong vòng 60 ngày trước hoặc sau ngày xuất khẩu của lô hàng đang cần xác định trị giá tính thuế"
      },
      {
        "key": "D",
        "text": "Lô hàng giống hệt có ngày ghi trên vận đơn cùng ngày hoặc trong vòng 60 ngày trước hoặc sau ngày xuất khẩu của lô hàng đang cần xác định trị giá tính thuế"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD005_0007",
    "stt": 165,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Nguyên tắc liên quan đến các khoản điều chỉnh là:",
    "options": [
      {
        "key": "A",
        "text": "Các khoản điều chỉnh cộng chỉ điều chỉnh khi đã nằm trong giá hóa đơn"
      },
      {
        "key": "B",
        "text": "Các khoản điều chỉnh phải có đầy đủ chứng từ chứng minh."
      },
      {
        "key": "C",
        "text": "Các khoản điều chỉnh trừ chỉ điều chỉnh khi chưa nằm trong giá hóa đơn"
      },
      {
        "key": "D",
        "text": "Các khoản điều chỉnh phải được các bên thỏa thuận trong hợp đồng"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0008",
    "stt": 166,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Trường hợp có đủ cơ sở bác bỏ trị giá khai báo, cơ quan hải quan ban hành thông báo trị giá nhưng người khai hải quan không đồng ý với cơ sở bác bỏ trị giá khai báo (không khai bổ sung sau 05 ngày làm việc) thì cơ quan hải quan sẽ xử lý thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Cơ quan hải quan ban hành quyết định ấn định thuế và cho thông quan sau khi doanh nghiệp đã nộp thuế bổ sung"
      },
      {
        "key": "B",
        "text": "Cơ quan hải quan thông quan theo trị giá khai báo và chuyển các cơ sở bác bỏ trị giá khai báo để thực hiện kiểm tra sau thông quan"
      },
      {
        "key": "C",
        "text": "Cơ quan hải quan cho phép đưa hàng về bảo quản và chuyển các cơ sở bác bỏ trị giá khai báo để thực hiện tham vấn giá"
      },
      {
        "key": "D",
        "text": "Cơ quan hải quan ban hành quyết định ấn định thuế và cho phép đưa hàng về bảo quản"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD005_0009",
    "stt": 167,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Trị giá hải quan đối với hàng hóa xuất khẩu có bao gồm chi phí nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Chi phí vận tải nội địa"
      },
      {
        "key": "B",
        "text": "Chi phí vận tải quốc tế"
      },
      {
        "key": "C",
        "text": "Chi phí bảo hiểm nội địa"
      },
      {
        "key": "D",
        "text": "Chi phí bảo hiểm quốc tế"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD005_0010",
    "stt": 168,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Doanh nghiệp ký hợp đồng xuất khẩu giao hàng theo điều kiện CIF Nagoya, đơn giá 100 USD/tấn, trong đó I quốc tế: 5 USD/tấn, F quốc tế: 20 USD/tấn. Trị giá hải quan được xác định theo phương pháp nào dưới đây?",
    "options": [
      {
        "key": "A",
        "text": "Phương pháp giá bán của hàng hóa tính đến cửa khẩu xuất"
      },
      {
        "key": "B",
        "text": "Phương pháp giá bán của hàng hóa xuất khẩu giống hệt, tương tự tại thị trường Việt Nam"
      },
      {
        "key": "C",
        "text": "Phương pháp giá bán của hàng hóa xuất khẩu do cơ quan hải quan thu thập, tổng hợp, phân loại theo quy định"
      },
      {
        "key": "D",
        "text": "Phương pháp giá bán của hàng hóa xuất khẩu giống hệt, tương tự tại cơ sở dữ liệu trị giá hải quan"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD005_0011",
    "stt": 169,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Khi xác định trị giá hải quan đối với hàng nhập khẩu, có thể đảo ngược trình tự áp dụng phương pháp nào trong các phương pháp sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Phương pháp trị giá giao dịch và Phương pháp trị giá giao dịch của hàng hóa nhập khẩu giống hệt"
      },
      {
        "key": "B",
        "text": "Phương pháp trị giá giao dịch của hàng hóa nhập khẩu giống hệt và Phương pháp trị giá giao dịch của hàng hóa nhập khẩu tương tự"
      },
      {
        "key": "C",
        "text": "Phương pháp trị giá giao dịch của hàng hóa nhập khẩu tương tự và Phương pháp trị giá khấu trừ"
      },
      {
        "key": "D",
        "text": "Phương pháp trị giá khấu trừ và Phương pháp trị giá tính toán"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD005_0012",
    "stt": 170,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Điều kiện không được áp dụng trị giá giao dịch đối với hàng hóa nhập khẩu là gì?",
    "options": [
      {
        "key": "A",
        "text": "Người mua không bị hạn chế quyền định đoạt hoặc sử dụng hàng hoá sau khi nhập khẩu, trừ các hạn chế: hạn chế do pháp luật Việt Nam quy định, hạn chế về nơi tiêu thụ hàng hoá, hạn chế khác không ảnh hưởng đến trị giá của hàng hoá"
      },
      {
        "key": "B",
        "text": "Giá cả hoặc việc bán hàng không phụ thuộc vào những điều kiện hay các khoản thanh toán mà vì chúng không xác định được trị giá của hàng hoá cần xác định trị giá hải quan"
      },
      {
        "key": "C",
        "text": "Sau khi bán lại, chuyển nhượng hoặc sử dụng hàng hoá nhập khẩu, trừ khoản phải cộng theo quy định, người mua không phải trả thêm bất kỳ khoản tiền nào từ số tiền thu được do việc định đoạt hàng hoá nhập khẩu mang lại"
      },
      {
        "key": "D",
        "text": "Người mua và người bán có mối quan hệ đặc biệt và mối quan hệ đó làm ảnh hưởng đến trị giá giao dịch"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD005_0013",
    "stt": 171,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Doanh nghiệp nhập khẩu mặt hàng Bột thịt xương làm thức ăn gia súc theo điều kiện CNF Hải Phòng, giá hóa đơn 300 USD/tấn, phí bảo hiểm nước ngoài 5 USD/tấn. Trị giá hải quan đối với mặt hàng này là bao nhiêu USD/tấn?",
    "options": [
      {
        "key": "A",
        "text": "300"
      },
      {
        "key": "B",
        "text": "305"
      },
      {
        "key": "C",
        "text": "295"
      },
      {
        "key": "D",
        "text": "310"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0014",
    "stt": 172,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Trị giá giao dịch là gì?",
    "options": [
      {
        "key": "A",
        "text": "Trị giá giao dịch là giá thực tế đã thanh toán hay sẽ phải thanh toán cho hàng hoá nhập khẩu"
      },
      {
        "key": "B",
        "text": "Trị giá giao dịch là giá thực tế đã thanh toán hay sẽ phải thanh toán cho hàng hoá nhập khẩu sau khi đã được điều chỉnh các khoản điều chỉnh cộng và các khoản điều chỉnh trừ theo quy định"
      },
      {
        "key": "C",
        "text": "Trị giá giao dịch là giá thực tế đã thanh toán hay sẽ phải thanh toán cho hàng hoá nhập khẩu sau khi đã được điều chỉnh các khoản điều chỉnh cộng theo quy định"
      },
      {
        "key": "D",
        "text": "Trị giá giao dịch là giá thực tế đã thanh toán hay sẽ phải thanh toán cho hàng hoá nhập khẩu sau khi đã được điều chỉnh các khoản điều chỉnh trừ theo quy định"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0015",
    "stt": 173,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Trị giá hải quan hàng nhập khẩu được xác định theo nguyên tắc nào?",
    "options": [
      {
        "key": "A",
        "text": "Trị giá hải quan hàng nhập khẩu là giá do người khai hải quan khai báo"
      },
      {
        "key": "B",
        "text": "Trị giá hải quan hàng nhập khẩu là giá thực tế phải trả tính đến cửa khẩu nhập đầu tiên trên cơ sở áp dụng Hiệp định chung về thuế quan và thương mại hoặc theo các cam kết quốc tế mà Việt Nam đã ký kết"
      },
      {
        "key": "C",
        "text": "Trị giá hải quan hàng nhập khẩu là giá do cơ quan hải quan xác định"
      },
      {
        "key": "D",
        "text": "Trị giá hải quan hàng nhập khẩu là trị giá trên trang mạng Internet"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0016",
    "stt": 174,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Giá mua bán hàng hóa nhập khẩu trên hợp đồng là CIF Vũng Tàu 1000 USD/tấn, người mua phải trả các chi phí sau tại Việt Nam: chi phí bốc dỡ hàng hóa từ phương tiện xuống cảng là 10 USD/tấn, thuế nhập khẩu phải nộp 10 USD/tấn. Trị giá hải quan được xác định theo phương pháp nào?",
    "options": [
      {
        "key": "A",
        "text": "Phương pháp trị giá giao dịch"
      },
      {
        "key": "B",
        "text": "Phương pháp trị giá giao dịch của hàng hóa nhập khẩu giống hệt và Phương pháp trị giá giao dịch của hàng hóa nhập khẩu tương tự"
      },
      {
        "key": "C",
        "text": "Phương pháp trị giá giao dịch của hàng hóa nhập khẩu tương tự và phương pháp khấu trừ"
      },
      {
        "key": "D",
        "text": "Phương pháp khấu trừ và phương pháp tính toán"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD005_0017",
    "stt": 175,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Nguyên tắc xác định trị giá hải quan đối với hàng hoá nhập khẩu là?",
    "options": [
      {
        "key": "A",
        "text": "Giá thực tế phải trả tính đến cửa khẩu nhập đầu tiên trên cơ sở áp dụng Hiệp định chung về thuế quan và thương mại"
      },
      {
        "key": "B",
        "text": "Giá do cơ quan hải quan xác định tuần tự theo 06 phương pháp"
      },
      {
        "key": "C",
        "text": "Giá theo Danh mục quản lý rủi ro"
      },
      {
        "key": "D",
        "text": "Giá thực tế phải trả tính đến cửa khẩu nhập đầu tiên"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD005_0018",
    "stt": 176,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Khi xác định trị giá tính thuế hàng nhập khẩu theo phương pháp trị giá giao dịch thì khoản chi phí nào dưới đây không phải là khoản phải cộng?",
    "options": [
      {
        "key": "A",
        "text": "Chi phí hoa hồng, phí môi giới"
      },
      {
        "key": "B",
        "text": "Chi phí bao bì và đóng gói"
      },
      {
        "key": "C",
        "text": "Chi phí quảng cáo nhãn hiệu, thương hiệu hàng nhập khẩu"
      },
      {
        "key": "D",
        "text": "Chi phí bao bì, môi giới, hoa hồng, quảng cáo"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD005_0019",
    "stt": 177,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Tỷ giá áp dụng để xác định số thuế xuất khẩu, nhập khẩu phải nộp là tỷ giá nào?",
    "options": [
      {
        "key": "A",
        "text": "Tỷ giá tại thời điểm thông quan"
      },
      {
        "key": "B",
        "text": "Tỷ giá tại thời điểm đăng ký tờ khai hải quan"
      },
      {
        "key": "C",
        "text": "Tỷ giá ngày hàng đến cảng"
      },
      {
        "key": "D",
        "text": "Tỷ giá sau thông quan"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0020",
    "stt": 178,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Trường hợp cơ quan hải quan có nghi ngờ về trị giá khai báo, doanh nghiệp tuân thủ nhưng không đề nghị tham vấn thì xử lý thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Cơ quan hải quan thông báo cơ sở nghi vấn, mức giá, phương pháp do cơ quan hải quan dự kiến xác định và thời gian tham vấn, giải phóng hàng hóa"
      },
      {
        "key": "B",
        "text": "Thông quan hàng hóa và chuyển nghi vấn cho lực lượng chống buôn lậu"
      },
      {
        "key": "C",
        "text": "Xác định lại trị giá và ấn định thuế"
      },
      {
        "key": "D",
        "text": "Cơ quan hải quan xác định lại trị giá, ấn định thuế và thông quan hàng hóa"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD005_0021",
    "stt": 179,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Hàng hóa nhập khẩu có nghi vấn về trị giá nếu thuộc trường hợp nào?",
    "options": [
      {
        "key": "A",
        "text": "Trị giá khai báo thấp hơn mức giá tham chiếu của hàng hóa nhập khẩu giống hệt, tương tự do Tổng cục Hải quan ban hành"
      },
      {
        "key": "B",
        "text": "Trị giá khai báo thấp hơn trị giá của mặt hàng giống hệt bán tại thị trường nội địa"
      },
      {
        "key": "C",
        "text": "Trị giá khai báo cao hơn trị giá của mặt hàng giống hệt trong danh mục dữ liệu giá"
      },
      {
        "key": "D",
        "text": "Trị giá khai báo cao hơn mức giá tham chiếu của hàng hóa nhập khẩu giống hệt, tương tự do Tổng cục Hải quan ban hành"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD005_0022",
    "stt": 180,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Công ty A nhập khẩu mặt hàng C từ Công ty B. Giữa A và B có thỏa thuận tại hợp đồng như sau: Công ty B bán mặt hàng C cho Công ty A với giá 1000 usd nếu Công ty A đồng ý mua thêm số lượng là 100 mặt hàng D. Công ty A không có tài liệu khách quan để xác định trị giá của mặt hàng C. Trường hợp này, Công ty A có thỏa mãn điều kiện để được áp dụng trị giá giao dịch không?",
    "options": [
      {
        "key": "A",
        "text": "Không thỏa mãn"
      },
      {
        "key": "B",
        "text": "Có thỏa mãn"
      },
      {
        "key": "C",
        "text": "Có thỏa mãn nếu A và B có mối quan hệ đặc biệt"
      },
      {
        "key": "D",
        "text": "Không thỏa mãn nếu A và B có mối quan hệ đặc biệt ảnh hưởng đến trị giá"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD005_0023",
    "stt": 181,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Nguyên tắc xác định trị giá hải quan đối với hàng hoá nhập khẩu là:",
    "options": [
      {
        "key": "A",
        "text": "Giá thực tế phải trả tính đến cửa khẩu nhập đầu tiên trên cơ sở áp dụng Hiệp định chung về thuế quan và thương mại"
      },
      {
        "key": "B",
        "text": "Giá do cơ quan hải quan xác định tuần tự theo 6 phương pháp của xác định trị giá hải quan"
      },
      {
        "key": "C",
        "text": "Giá theo Danh mục quản lý rủi ro do Tổng cục Hải quan quy định"
      },
      {
        "key": "D",
        "text": "Giá tối thiểu do Nhà nước quy định"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD005_0024",
    "stt": 182,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Phương pháp xác định trị giá hải quan theo trị giá giao dịch của hàng hoá nhập khẩu sẽ chỉ được áp dụng khi đáp ứng mấy điều kiện?",
    "options": [
      {
        "key": "A",
        "text": "4"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
      },
      {
        "key": "D",
        "text": "5"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD005_0025",
    "stt": 183,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Đối với hàng hóa nhập khẩu, giá mua bán theo điều kiện giao hàng nào sau đây đảm bảo nguyên tắc xác định trị giá hải quan:",
    "options": [
      {
        "key": "A",
        "text": "CIF"
      },
      {
        "key": "B",
        "text": "FCA"
      },
      {
        "key": "C",
        "text": "FAS"
      },
      {
        "key": "D",
        "text": "EXW"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD005_0026",
    "stt": 184,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Khoản chi phí nào sau đây không phải là khoản điều chỉnh trừ đối với hàng NK?",
    "options": [
      {
        "key": "A",
        "text": "Phí môi giới mua hàng"
      },
      {
        "key": "B",
        "text": "Chi phí xây dựng nhà xưởng ở Việt Nam"
      },
      {
        "key": "C",
        "text": "Chi phí vận tải nội địa"
      },
      {
        "key": "D",
        "text": "Các khoản thuế phải nộp ở Việt Nam"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD005_0027",
    "stt": 185,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Trường hợp nào sau đây hàng hóa NK không đủ điều kiện áp dụng trị giá giao dịch?",
    "options": [
      {
        "key": "A",
        "text": "Người mua và người bán cùng là thành viên góp vốn vào doanh nghiệp nhập khẩu. Người mua không chứng minh được mối quan hệ này không ảnh hưởng đến trị giá giao dịch"
      },
      {
        "key": "B",
        "text": "Người mua nhập khẩu hàng với số lượng nhỏ"
      },
      {
        "key": "C",
        "text": "Người mua NK hàng hóa theo chủng loại đã được người mua trong nước đặt hàng trước"
      },
      {
        "key": "D",
        "text": "Hàng hóa NK là hàng Việt Nam chưa sản xuất được"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD005_0028",
    "stt": 186,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Nguyên tắc xác định trị giá hải quan hàng hoá nhập khẩu là gì?",
    "options": [
      {
        "key": "A",
        "text": "Là giá thực tế phải trả tính đến cửa khẩu nhập đầu tiên"
      },
      {
        "key": "B",
        "text": "Là giá thực tế phải trả tính đến địa điểm giao hàng tại hợp đồng"
      },
      {
        "key": "C",
        "text": "Là giá thực tế phải trả tính đến địa điểm người mua chỉ định"
      },
      {
        "key": "D",
        "text": "Là giá thực tế phải trả tính đến kho của người mua trong nội địa"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD005_0029",
    "stt": 187,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Theo quy định về trị giá hải quan thì cửa khẩu nhập đầu tiên đối với phương thức vận tải đường biển là địa điểm nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Cảng dỡ hàng ghi trên vận tải đơn"
      },
      {
        "key": "B",
        "text": "Cảng đích ghi trên hợp đồng"
      },
      {
        "key": "C",
        "text": "Cảng biển nơi phương tiện chuyển cảng"
      },
      {
        "key": "D",
        "text": "Cảng đầu tiên mà phương tiện đến Việt Nam"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD005_0030",
    "stt": 188,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Trường hợp nào sau đây hàng hóa NK không đủ điều kiện áp dụng trị giá giao dịch?",
    "options": [
      {
        "key": "A",
        "text": "Người mua và người bán cùng bị bên thứ 3 kiểm soát và khống chế giá mua bán"
      },
      {
        "key": "B",
        "text": "Nước xuất khẩu đang có chiến tranh"
      },
      {
        "key": "C",
        "text": "Nước xuất khẩu đang có dịch bệnh"
      },
      {
        "key": "D",
        "text": "Thị trường trong nước đang khan hiếm hàng"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD005_0031",
    "stt": 189,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Trường hợp nào sau đây hàng hóa NK không đủ điều kiện áp dụng trị giá giao dịch?",
    "options": [
      {
        "key": "A",
        "text": "Người mua và người bán cùng bị bên thứ 3 kiểm soát và khống chế giá mua bán"
      },
      {
        "key": "B",
        "text": "Nước xuất khẩu đang có chiến tranh"
      },
      {
        "key": "C",
        "text": "Nước xuất khẩu đang có dịch bệnh"
      },
      {
        "key": "D",
        "text": "Thị trường trong nước đang khan hiếm hàng"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD005_0032",
    "stt": 190,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Lô hàng nhập khẩu theo điều kiện giao hàng nào sau đây khi xác định trị giá tính thuế không phải cộng cước vận tải quốc tế vào trị giá tính thuế?",
    "options": [
      {
        "key": "A",
        "text": "FOB"
      },
      {
        "key": "B",
        "text": "FCA"
      },
      {
        "key": "C",
        "text": "FAS"
      },
      {
        "key": "D",
        "text": "CFR"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD005_0033",
    "stt": 191,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Khi lô hàng A đang cần xác định trị giá tính thuế mà người mua không có đầy đủ quyền định đoạt và sử dụng hàng hoá sau khi NK thì dùng phương pháp nào để xác định trị giá tính thuế?",
    "options": [
      {
        "key": "A",
        "text": "Phương pháp xác định trị giá tính thuế theo trị giá giao dịch của hàng nhập khẩu tương tự nếu có hàng tương tự đã xác định TGTT theo phương pháp 1 trong dữ liệu của cơ quan hải quan"
      },
      {
        "key": "B",
        "text": "Không thể xác định được TGTT"
      },
      {
        "key": "C",
        "text": "Phương pháp xác định trị giá tính thuế theo trị giá giao dịch của hàng nhập khẩu giống hệt nếu có hàng giống hệt đã xác định TGTT theo phương pháp 1 trong dữ liệu của cơ quan hải quan"
      },
      {
        "key": "D",
        "text": "Phương pháp xác định trị giá tính thuế theo trị giá giao dịch của hàng nhập khẩu"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD005_0034",
    "stt": 192,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Lô hàng NK từ Hàn Quốc theo điều kiện giao hàng FAS, cảng Busan, Incoterms 2020. Phí bảo hiểm là khoản phải cộng khi xác định trị giá tính thuế trong trường hợp nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Người bán mua bảo hiểm và đã tính vào giá hàng hóa"
      },
      {
        "key": "B",
        "text": "Người vận tải mua bảo hiểm theo hợp đồng vận chuyển"
      },
      {
        "key": "C",
        "text": "Người mua không mua bảo hiểm và tự chịu rủi ro"
      },
      {
        "key": "D",
        "text": "Người mua mua bảo hiểm cho lô hàng nhập khẩu"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD005_0035",
    "stt": 193,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Lô hàng NK X không đủ điều kiện xác định trị giá tính thuế (TGTT) theo phương pháp 1 và 2, trong dữ liệu của CQHQ có 3 lô hàng NK tương tự với lô hàng X, đã được CQHQ xác định TGTT theo phương pháp 1; 3 lô hàng tương tự đều thoả mãn về thời gian xuất khẩu và có cùng cấp độ thương mại và số lượng với lô hàng X. TGTT lô hàng X được xác định là:",
    "options": [
      {
        "key": "A",
        "text": "Trị giá tính thuế trung bình cộng của 3 trị giá tính thuế xác định được"
      },
      {
        "key": "B",
        "text": "Trị giá tính thuế lớn nhất trong 3 trị giá tính thuế xác định được"
      },
      {
        "key": "C",
        "text": "Trị giá tính thuế của lô hàng tương tự có thời gian xuất khẩu gần với thời gian XK của lô hàng đang xác định TGTT nhất"
      },
      {
        "key": "D",
        "text": "Trị giá tính thuế nhỏ nhất trong 3 trị giá tính thuế xác định được"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD005_0036",
    "stt": 194,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Lô hàng M gồm 1.000 sản phẩm, nhập khẩu từ Hàn Quốc về Việt Nam. Giá hóa đơn là 50 USD/sản phẩm theo điều kiện FOB cảng Busan, Incoterms 2020. Hợp đồng quy định người mua được trả chậm trong 6 tháng với lãi suất 2%/năm, khoản lãi là 1.000 USD cho toàn bộ lô hàng và được tách riêng trong hóa đơn thương mại. Người nhập khẩu đã đặt cọc cho người xuất khẩu 1.000 USD, khoản này chưa thể hiện trên hóa đơn. Chi phí lưu kho sau khi nhập khẩu là 500 USD. Người nhập khẩu phải trả cho đại lý bán hàng của người bán 500 USD, khoản này chưa thể hiện trên hóa đơn. Người nhập khẩu thuê tàu với chi phí 800 USD và không mua bảo hiểm cho lô hàng. Biết lô hàng đủ điều kiện xác định trị giá tính thuế theo phương pháp trị giá giao dịch. Xác định trị giá tính thuế trên một đơn vị sản phẩm của lô hàng trên?",
    "options": [
      {
        "key": "A",
        "text": "53,8 USD"
      },
      {
        "key": "B",
        "text": "53,3 USD"
      },
      {
        "key": "C",
        "text": "52,3 USD"
      },
      {
        "key": "D",
        "text": "51,8 USD"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD005_0037",
    "stt": 195,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Lô hàng K do công ty Z nhập khẩu về Việt Nam gồm 1.000 sản phẩm, bán buôn, đơn giá 40 USD/sản phẩm. Lô này được hưởng chiết khấu thương mại. Bên bán và bên mua có quan hệ đặc biệt nên giá thấp hơn giá bán cho những người mua khác. Lô X và Y giống hệt với K và được hải quan xác định trị giá tính thuế theo phương pháp 1. Lô X và Y đáp ứng điều kiện về thời gian xuất khẩu với lô hàng K. Lô hàng X có cùng cấp độ thương mại với lô hàng K, gồm 500 sản phẩm, được hưởng chiết khấu thương mại, đơn giá 47,5 USD/sản phẩm. Mức chiết khấu như sau: từ 1 đến 100 sản phẩm áp dụng 100% giá niêm yết 50 USD/sản phẩm; từ 101 đến 500 sản phẩm giảm 5%; trên 500 sản phẩm giảm 10%. Lô hàng Y khác cấp độ thương mại, gồm 600 sản phẩm, được hải quan xác định trị giá tính thuế theo phương pháp 1 là 42 USD/sản phẩm. Lô hàng P giống hệt với K, gồm 600 sản phẩm, bán buôn, không thỏa mãn điều kiện về thời gian xuất khẩu, được hải quan xác định trị giá tính thuế theo phương pháp 1 là 48 USD/sản phẩm. Trị giá tính thuế của lô hàng K là:",
    "options": [
      {
        "key": "A",
        "text": "47,5 USD"
      },
      {
        "key": "B",
        "text": "42 USD"
      },
      {
        "key": "C",
        "text": "45 USD"
      },
      {
        "key": "D",
        "text": "50 USD"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD005_0038",
    "stt": 196,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Công ty Thái Sơn ở Hà Nội nhập khẩu lô hàng quạt sưởi gồm 5.000 chiếc từ Thái Lan với giá hóa đơn 100 USD/chiếc, theo điều kiện CIF cảng Hateco, Hải Phòng, Incoterms 2020. Trong đó giá hàng là 70 USD, phí vận chuyển quốc tế là 25 USD và phí bảo hiểm là 5 USD. Tiền môi giới mà công ty phải trả là 0,5% trị giá hóa đơn, khoản này chưa thể hiện trên hóa đơn. Hoa hồng mua hàng là 200 USD cho cả lô hàng. Chi phí vận chuyển từ Hải Phòng về kho tại Hà Nội là 80 USD. Biết lô hàng đủ điều kiện xác định trị giá tính thuế theo phương pháp trị giá giao dịch. Xác định trị giá tính thuế trên một đơn vị sản phẩm của lô hàng trên?",
    "options": [
      {
        "key": "A",
        "text": "102,5 USD"
      },
      {
        "key": "B",
        "text": "107,04 USD"
      },
      {
        "key": "C",
        "text": "100,5 USD"
      },
      {
        "key": "D",
        "text": "125,5 USD"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD005_0039",
    "stt": 197,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Lô hàng Y gồm 1.000 sản phẩm, nhập khẩu vào Việt Nam từ Trung Quốc. Giá ghi trên hóa đơn thương mại là 500 EUR/sản phẩm, theo điều kiện CFR cảng HICT, Hải Phòng, Incoterms 2020. Bên mua mua bảo hiểm cho lô hàng và trả phí bảo hiểm 500 EUR cho cả lô hàng. Hoa hồng bán hàng là 2 EUR/sản phẩm, chưa được tính vào hóa đơn thương mại. Sau khi hàng được xếp lên tàu tại Thượng Hải, bên bán gửi công văn đồng ý giảm giá 10 EUR/sản phẩm và văn bản này được nộp cùng bộ hồ sơ hải quan khi làm thủ tục nhập khẩu. Bên bán đã trả phí vệ sinh container 50 EUR. Lô hàng đáp ứng điều kiện xác định trị giá tính thuế theo phương pháp trị giá giao dịch. Xác định trị giá tính thuế trên một đơn vị sản phẩm của lô hàng Y?",
    "options": [
      {
        "key": "A",
        "text": "502,55 EUR"
      },
      {
        "key": "B",
        "text": "492,5 EUR"
      },
      {
        "key": "C",
        "text": "492,55 EUR"
      },
      {
        "key": "D",
        "text": "502,5 EUR"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD005_0040",
    "stt": 198,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Lô hàng H nhập khẩu từ Singapore về Việt Nam. Trong dữ liệu của cơ quan hải quan có 3 lô hàng tương tự với H, đã được cơ quan hải quan xác định trị giá tính thuế theo phương pháp 1. Lô tương tự A có ngày xuất khẩu sau 62 ngày kể từ ngày xuất khẩu lô H, cùng cấp độ thương mại với lô H. Lô B có ngày xuất khẩu trước 20 ngày kể từ ngày xuất khẩu lô H, khác cấp độ thương mại. Lô C được xuất khẩu cùng ngày với lô H, khác cấp độ thương mại. Xác định trị giá tính thuế của lô hàng H?",
    "options": [
      {
        "key": "A",
        "text": "Trị giá tính thuế của H được xác định theo lô A"
      },
      {
        "key": "B",
        "text": "Trị giá tính thuế của H là trị giá nhỏ nhất của A, B và C"
      },
      {
        "key": "C",
        "text": "Trị giá tính thuế của H là trị giá nhỏ nhất của B và C"
      },
      {
        "key": "D",
        "text": "Chưa đủ dữ liệu để xác định trị giá tính thuế"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD005_0041",
    "stt": 199,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Theo quy định hiện hành, trị giá hải quan của hàng hóa xuất khẩu, nhập khẩu được hiểu là gì?",
    "options": [
      {
        "key": "A",
        "text": "Giá bán thực tế của hàng hóa đó tại thị trường nội địa của quốc gia nhập khẩu"
      },
      {
        "key": "B",
        "text": "Trị giá của hàng hóa xuất khẩu, nhập khẩu dùng để tính thuế và thống kê hải quan"
      },
      {
        "key": "C",
        "text": "Tổng các chi phí được ghi trên hợp đồng thương mại giữa người mua và người bán"
      },
      {
        "key": "D",
        "text": "Giá niêm yết bán lẻ của hàng hóa cùng loại đang được lưu thông tại Việt Nam"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0042",
    "stt": 200,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Vai trò cơ bản quan trọng nhất của trị giá hải quan là gì?",
    "options": [
      {
        "key": "A",
        "text": "Căn cứ xác định tiêu chuẩn kỹ thuật"
      },
      {
        "key": "B",
        "text": "Là cơ sở tính thuế xuất nhập khẩu"
      },
      {
        "key": "C",
        "text": "Là công cụ kiểm tra chất lượng hàng hóa"
      },
      {
        "key": "D",
        "text": "Là tiêu chuẩn xếp hạng doanh nghiệp"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0043",
    "stt": 201,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Phương pháp xác định trị giá hải quan ưu tiên áp dụng đầu tiên tại Việt Nam là phương pháp nào?",
    "options": [
      {
        "key": "A",
        "text": "Trị giá khấu trừ"
      },
      {
        "key": "B",
        "text": "Trị giá tính toán"
      },
      {
        "key": "C",
        "text": "Trị giá giao dịch"
      },
      {
        "key": "D",
        "text": "Trị giá suy luận"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD005_0044",
    "stt": 202,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Điều kiện nào sau đây không thuộc các điều kiện áp dụng phương pháp trị giá giao dịch?",
    "options": [
      {
        "key": "A",
        "text": "Có giao dịch mua bán hàng hóa"
      },
      {
        "key": "B",
        "text": "Người mua không bị hạn chế quyền định đoạt hàng hóa"
      },
      {
        "key": "C",
        "text": "Giá cả không phụ thuộc điều kiện không xác định được trị giá"
      },
      {
        "key": "D",
        "text": "Hợp đồng phải được công chứng"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD005_0045",
    "stt": 203,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Trị giá hải quan của hàng hóa xuất khẩu, nhập khẩu được hiểu là gì?",
    "options": [
      {
        "key": "A",
        "text": "Giá trị hàng hóa do người xuất khẩu và nhập khẩu tự xác định"
      },
      {
        "key": "B",
        "text": "Trị giá của hàng hóa xuất khẩu, nhập khẩu dùng để tính thuế và thống kê hải quan"
      },
      {
        "key": "C",
        "text": "Giá trị hàng hóa được tính theo giá thị trường quốc tế"
      },
      {
        "key": "D",
        "text": "Giá trị hàng hóa được xác định dựa trên quyết định của Chính phủ"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0046",
    "stt": 204,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Một trong những vai trò của trị giá hải quan là gì?",
    "options": [
      {
        "key": "A",
        "text": "Là cơ sở để xác định tỷ lệ xuất nhập khẩu trong dân số"
      },
      {
        "key": "B",
        "text": "Là cơ sở để xác định kim ngạch xuất nhập khẩu của nền kinh tế"
      },
      {
        "key": "C",
        "text": "Là cơ sở để xác định chi phí vận chuyển hàng hóa quốc tế"
      },
      {
        "key": "D",
        "text": "Là tiêu chí để phân loại hàng hóa trong xuất nhập khẩu"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0047",
    "stt": 205,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Trị giá hải quan phục vụ mục tiêu nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Xây dựng chiến lược phát triển thương mại nội địa"
      },
      {
        "key": "B",
        "text": "Hạn chế sự phụ thuộc vào thương mại quốc tế"
      },
      {
        "key": "C",
        "text": "Thực thi chính sách quản lý hàng hóa xuất nhập khẩu và thu thuế"
      },
      {
        "key": "D",
        "text": "Phát triển các ngành công nghiệp sản xuất trong nước"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD005_0048",
    "stt": 206,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Giá tính thuế đối với hàng nhập khẩu là:",
    "options": [
      {
        "key": "A",
        "text": "Giá thực tế phải trả tính tới cửa khẩu nhập cuối cùng"
      },
      {
        "key": "B",
        "text": "Giá bán tại cửa khẩu xuất"
      },
      {
        "key": "C",
        "text": "Giá bán tại cửa khẩu xuất cộng chi phí vận tải"
      },
      {
        "key": "D",
        "text": "Giá thực tế phải trả tính tới cửa khẩu nhập đầu tiên"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD005_0049",
    "stt": 207,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Trị giá tính thuế của hàng hóa xuất khẩu tại Việt Nam được xác định dựa trên nguyên tắc nào?",
    "options": [
      {
        "key": "A",
        "text": "Giá bán tại cửa khẩu xuất, bao gồm phí bảo hiểm quốc tế và phí vận tải quốc tế"
      },
      {
        "key": "B",
        "text": "Giá bán tại cửa khẩu xuất, không bao gồm phí bảo hiểm quốc tế và phí vận tải quốc tế"
      },
      {
        "key": "C",
        "text": "Trị giá khai báo của người mua quốc tế tại cửa khẩu xuất"
      },
      {
        "key": "D",
        "text": "Giá bán tại thị trường quốc tế và giá bảo hiểm quốc tế"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0050",
    "stt": 208,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Giá thực tế đã thanh toán hay sẽ phải thanh toán là:",
    "options": [
      {
        "key": "A",
        "text": "Thuộc các khoản điều chỉnh cộng khi xác định trị giá tính thuế."
      },
      {
        "key": "B",
        "text": "Là tổng số tiền mà người bán đã và sẽ phải thanh toán trực tiếp hoặc gián tiếp cho người mua để bán hàng XK."
      },
      {
        "key": "C",
        "text": "Là tổng số tiền mà người mua đã và sẽ phải thanh toán trực tiếp hoặc gián tiếp cho người bán để mua hàng NK."
      },
      {
        "key": "D",
        "text": "Là khoản được trừ ra khỏi trị giá tính thuế khi đáp ứng các điều kiện cần thiết."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD005_0051",
    "stt": 209,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Khi lô hàng nhập khẩu không đủ điều kiện xác định trị giá tính thuế theo phương pháp trị giá giao dịch, trong dữ liệu của cơ quan hải quan có 3 lô hàng nhập khẩu giống hệt được lựa chọn để xác định trị giá tính thuế cho lô hàng cần tìm. Trị giá tính thuế của lô hàng cần tìm là:",
    "options": [
      {
        "key": "A",
        "text": "Trị giá tính thuế trung bình cộng của 3 trị giá tính thuế xác định được"
      },
      {
        "key": "B",
        "text": "Trị giá tính thuế lớn nhất trong 3 trị giá tính thuế xác định được"
      },
      {
        "key": "C",
        "text": "Trị giá tính thuế của lô hàng giống hệt có thời gian xuất khẩu gần nhất với thời gian xuất khẩu của lô hàng đang xác định trị giá tính thuế"
      },
      {
        "key": "D",
        "text": "Trị giá tính thuế nhỏ nhất trong 3 trị giá tính thuế xác định được"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD005_0052",
    "stt": 210,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Đâu là khoản phải cộng khi xác định trị giá hải quan theo phương pháp trị giá giao dịch của hàng nhập khẩu?",
    "options": [
      {
        "key": "A",
        "text": "Chi phí bao bì gắn liền với hàng hóa"
      },
      {
        "key": "B",
        "text": "Hoa hồng mua hàng"
      },
      {
        "key": "C",
        "text": "Chi phí vận chuyển phát sinh sau khi nhập khẩu"
      },
      {
        "key": "D",
        "text": "Các khoản phí, lệ phí nộp ngân sách Nhà nước đã tính trong giá mua hàng nhập khẩu"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD005_0053",
    "stt": 211,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Trị giá tính thuế của hàng hóa nhập khẩu được xác định theo phương pháp nào?",
    "options": [
      {
        "key": "A",
        "text": "Dựa trên giá bán lẻ tại thị trường trong nước"
      },
      {
        "key": "B",
        "text": "Theo trình tự áp dụng sáu phương pháp và dừng ở phương pháp xác định được trị giá tính thuế"
      },
      {
        "key": "C",
        "text": "Theo giá trị trung bình của các giao dịch nhập khẩu tương tự"
      },
      {
        "key": "D",
        "text": "Theo trị giá khai báo của người xuất khẩu"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0054",
    "stt": 212,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Trị giá giao dịch của hàng hóa nhập khẩu được xác định dựa trên điều kiện nào?",
    "options": [
      {
        "key": "A",
        "text": "Hoạt động trao đổi phi thương mại giữa các quốc gia"
      },
      {
        "key": "B",
        "text": "Giao dịch mua bán hàng hóa có trước khi hàng hóa nhập khẩu"
      },
      {
        "key": "C",
        "text": "Giá trị ước tính của hàng hóa nhập khẩu"
      },
      {
        "key": "D",
        "text": "Mức giá trung bình trên thị trường quốc tế"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0055",
    "stt": 213,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Theo trình tự xác định trị giá giao dịch, bước đầu tiên cần thực hiện là gì?",
    "options": [
      {
        "key": "A",
        "text": "Xác định giá trị khoản điều chỉnh của hàng hóa"
      },
      {
        "key": "B",
        "text": "Kiểm tra điều kiện áp dụng phương pháp trị giá giao dịch"
      },
      {
        "key": "C",
        "text": "Kiểm tra hoạt động giao dịch mua bán hàng hóa"
      },
      {
        "key": "D",
        "text": "Tính toán trị giá thực tế đã thanh toán hoặc sẽ phải thanh toán"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD005_0056",
    "stt": 214,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Một lô hàng nhập khẩu có đơn giá ghi theo điều kiện CIF Cát Lái. Khi xác định trị giá hải quan, cách xử lý nào phù hợp nếu không có khoản điều chỉnh khác?",
    "options": [
      {
        "key": "A",
        "text": "Trừ phần cước vận tải quốc tế khỏi trị giá hóa đơn"
      },
      {
        "key": "B",
        "text": "Cộng thêm chi phí bảo hiểm quốc tế vào trị giá hóa đơn"
      },
      {
        "key": "C",
        "text": "Lấy trị giá CIF trên hóa đơn làm trị giá hải quan"
      },
      {
        "key": "D",
        "text": "Chỉ lấy đơn giá hàng hóa làm trị giá hải quan"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD005_0057",
    "stt": 215,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Công ty A nhập khẩu 2.000 cuộn phim, đơn giá 20 USD/cuộn theo điều kiện CIF. Theo hợp đồng, người nhập khẩu phải trả thêm 2% trị giá hóa đơn trực tiếp cho đại lý bán hàng độc quyền của người bán tại Việt Nam. Ngoài ra, người nhập khẩu trả riêng thêm 1,5% trị giá hóa đơn cho đại lý này để thực hiện chiến dịch quảng cáo sản phẩm tại Việt Nam. Nếu không có khoản điều chỉnh khác, trị giá hải quan của lô hàng là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "40.000 USD"
      },
      {
        "key": "B",
        "text": "40.800 USD"
      },
      {
        "key": "C",
        "text": "40.600 USD"
      },
      {
        "key": "D",
        "text": "41.400 USD"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0058",
    "stt": 216,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Công ty A nhập khẩu 3.000 máy ảnh kỹ thuật số, đơn giá 45 USD/chiếc theo điều kiện CIF. Theo hợp đồng, người nhập khẩu phải trả thêm 3% trị giá hóa đơn trực tiếp cho đại lý bán hàng độc quyền của người bán tại Việt Nam. Ngoài ra, người nhập khẩu trả riêng thêm 1% trị giá hóa đơn cho đại lý này để thực hiện chiến dịch quảng cáo sản phẩm tại Việt Nam. Nếu không có khoản điều chỉnh khác, trị giá hải quan của lô hàng là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "135.000 USD"
      },
      {
        "key": "B",
        "text": "139.050 USD"
      },
      {
        "key": "C",
        "text": "136.350 USD"
      },
      {
        "key": "D",
        "text": "140.400 USD"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0059",
    "stt": 217,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Công ty B nhập khẩu 800 máy đo nhiệt độ công nghiệp, đơn giá 120 USD/chiếc theo điều kiện CIF. Theo hợp đồng, người nhập khẩu phải trả thêm 2,5% trị giá hóa đơn trực tiếp cho đại lý bán hàng độc quyền của người bán tại Việt Nam. Ngoài ra, người nhập khẩu trả riêng thêm 1,5% trị giá hóa đơn cho đại lý này để quảng cáo sản phẩm sau khi nhập khẩu. Nếu không có khoản điều chỉnh khác, trị giá hải quan của lô hàng là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "96.000 USD"
      },
      {
        "key": "B",
        "text": "98.400 USD"
      },
      {
        "key": "C",
        "text": "97.440 USD"
      },
      {
        "key": "D",
        "text": "99.840 USD"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0060",
    "stt": 218,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Công ty C nhập khẩu 5.000 hộp mỹ phẩm dưỡng da, đơn giá 8 USD/hộp theo điều kiện CIF. Theo hợp đồng, người nhập khẩu phải trả thêm 4% trị giá hóa đơn trực tiếp cho đại lý bán hàng độc quyền của người bán tại Việt Nam. Ngoài ra, người nhập khẩu trả riêng thêm 2% trị giá hóa đơn cho đại lý này để thực hiện hoạt động tiếp thị tại Việt Nam. Nếu không có khoản điều chỉnh khác, trị giá hải quan của lô hàng là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "40.000 USD"
      },
      {
        "key": "B",
        "text": "41.600 USD"
      },
      {
        "key": "C",
        "text": "40.800 USD"
      },
      {
        "key": "D",
        "text": "42.400 USD"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0061",
    "stt": 219,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Công ty D nhập khẩu 1.200 bộ linh kiện điện tử, đơn giá 75 USD/bộ theo điều kiện CIF. Theo hợp đồng, người nhập khẩu phải trả thêm 1,5% trị giá hóa đơn trực tiếp cho đại lý bán hàng độc quyền của người bán tại Việt Nam. Ngoài ra, người nhập khẩu trả riêng thêm 2,5% trị giá hóa đơn cho đại lý này để triển khai quảng cáo sản phẩm tại Việt Nam. Nếu không có khoản điều chỉnh khác, trị giá hải quan của lô hàng là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "90.000 USD"
      },
      {
        "key": "B",
        "text": "91.350 USD"
      },
      {
        "key": "C",
        "text": "92.250 USD"
      },
      {
        "key": "D",
        "text": "93.600 USD"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0062",
    "stt": 220,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Công ty E nhập khẩu 2.500 đôi giày thể thao, đơn giá 28 USD/đôi theo điều kiện CIF. Theo hợp đồng, người nhập khẩu phải trả thêm 2% trị giá hóa đơn trực tiếp cho đại lý bán hàng độc quyền của người bán tại Việt Nam. Ngoài ra, người nhập khẩu trả riêng thêm 3% trị giá hóa đơn cho đại lý này để thực hiện chương trình quảng bá sản phẩm tại Việt Nam. Nếu không có khoản điều chỉnh khác, trị giá hải quan của lô hàng là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "70.000 USD"
      },
      {
        "key": "B",
        "text": "71.400 USD"
      },
      {
        "key": "C",
        "text": "72.100 USD"
      },
      {
        "key": "D",
        "text": "73.500 USD"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0063",
    "stt": 221,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Công ty A nhập khẩu 1.200 máy đo độ ẩm, đơn giá 80 USD/chiếc theo điều kiện CIF. Theo hợp đồng, Công ty A phải trả thêm 2% trị giá hóa đơn cho đại lý bán hàng của người bán tại Việt Nam. Ngoài ra, để được nhập khẩu và bán hàng hóa này, Công ty A phải trả tiền bản quyền bằng 3% trị giá hóa đơn cho một bên thứ ba theo yêu cầu của người bán. Sau khi nhập khẩu, Công ty A còn trả 1,5% trị giá hóa đơn để quảng cáo sản phẩm tại Việt Nam và trả 1% trị giá hóa đơn cho đơn vị tư vấn mua hàng của mình. Nếu không có khoản điều chỉnh khác, trị giá hải quan của lô hàng là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "96.000 USD"
      },
      {
        "key": "B",
        "text": "98.880 USD"
      },
      {
        "key": "C",
        "text": "100.800 USD"
      },
      {
        "key": "D",
        "text": "103.200 USD"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD005_0064",
    "stt": 222,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Công ty B nhập khẩu 2.500 bộ tai nghe, đơn giá 18 USD/bộ theo điều kiện CIF. Trước khi giao hàng, người bán giảm giá thương mại 5% ngay trên hóa đơn. Theo điều kiện bán hàng, Công ty B phải trả thêm 4% trị giá hóa đơn sau giảm giá cho đại lý bán hàng của người bán tại Việt Nam. Công ty B cũng trả riêng 2% trị giá hóa đơn sau giảm giá cho hoạt động quảng cáo sau nhập khẩu và 1% cho đại lý mua hàng do Công ty B thuê. Nếu không có khoản điều chỉnh khác, trị giá hải quan của lô hàng là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "45.000 USD"
      },
      {
        "key": "B",
        "text": "42.750 USD"
      },
      {
        "key": "C",
        "text": "44.460 USD"
      },
      {
        "key": "D",
        "text": "45.742,5 USD"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD005_0065",
    "stt": 223,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Công ty A nhập khẩu 1.000 bộ cảm biến, đơn giá 50 USD/bộ theo điều kiện FOB cảng Thượng Hải. Người mua trả thêm cước vận tải quốc tế 3.000 USD và bảo hiểm quốc tế 500 USD để đưa hàng về cảng Cát Lái. Ngoài ra, sau khi hàng đến cảng nhập khẩu, Công ty A trả thêm 700 USD chi phí vận chuyển nội địa từ cảng về kho. Nếu không có khoản điều chỉnh khác, trị giá hải quan của lô hàng là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "50.000 USD"
      },
      {
        "key": "B",
        "text": "53.000 USD"
      },
      {
        "key": "C",
        "text": "53.500 USD"
      },
      {
        "key": "D",
        "text": "54.200 USD"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD005_0066",
    "stt": 224,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Công ty B nhập khẩu 2.000 hộp linh kiện, đơn giá 12 USD/hộp theo điều kiện CFR cảng Hải Phòng. Người mua trả riêng phí bảo hiểm quốc tế là 600 USD. Sau khi hàng được dỡ tại cảng nhập khẩu, Công ty B trả thêm 400 USD chi phí lưu kho tại Việt Nam. Nếu không có khoản điều chỉnh khác, trị giá hải quan của lô hàng là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "24.000 USD"
      },
      {
        "key": "B",
        "text": "24.600 USD"
      },
      {
        "key": "C",
        "text": "25.000 USD"
      },
      {
        "key": "D",
        "text": "25.400 USD"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0067",
    "stt": 225,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Công ty C nhập khẩu 500 máy bơm nước, đơn giá 90 USD/chiếc theo điều kiện EXW tại xưởng người bán. Để đưa hàng đến cảng xuất khẩu, người mua trả 1.200 USD vận chuyển nội địa nước xuất khẩu và 300 USD chi phí xếp hàng tại cảng xuất khẩu. Cước vận tải quốc tế là 2.500 USD, bảo hiểm quốc tế là 400 USD. Chi phí lắp đặt sau nhập khẩu tại Việt Nam là 1.000 USD, được ghi riêng. Nếu không có khoản điều chỉnh khác, trị giá hải quan của lô hàng là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "45.000 USD"
      },
      {
        "key": "B",
        "text": "47.900 USD"
      },
      {
        "key": "C",
        "text": "49.400 USD"
      },
      {
        "key": "D",
        "text": "50.400 USD"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD005_0068",
    "stt": 226,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Công ty D nhập khẩu 1.500 bộ phụ kiện điện thoại, đơn giá 30 USD/bộ theo điều kiện FCA kho người bán. Người mua trả 800 USD vận chuyển từ kho người bán đến cảng xuất khẩu, 200 USD phí làm hàng tại cảng xuất khẩu, 2.000 USD cước vận tải quốc tế và 300 USD bảo hiểm quốc tế. Chi phí quảng cáo sản phẩm tại Việt Nam sau nhập khẩu là 900 USD. Nếu không có khoản điều chỉnh khác, trị giá hải quan của lô hàng là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "45.000 USD"
      },
      {
        "key": "B",
        "text": "47.300 USD"
      },
      {
        "key": "C",
        "text": "48.300 USD"
      },
      {
        "key": "D",
        "text": "49.200 USD"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD005_0069",
    "stt": 227,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Công ty E nhập khẩu 1.000 thiết bị đo áp suất, giá hóa đơn là 75 USD/thiết bị theo điều kiện DDP kho người mua tại Việt Nam. Theo bảng chi tiết kèm hóa đơn, trong giá DDP có 2.000 USD chi phí vận chuyển nội địa tại Việt Nam sau khi hàng đến cảng nhập khẩu và 3.000 USD thuế nhập khẩu do người bán nộp thay. Nếu không có khoản điều chỉnh khác, trị giá hải quan của lô hàng là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "75.000 USD"
      },
      {
        "key": "B",
        "text": "70.000 USD"
      },
      {
        "key": "C",
        "text": "72.000 USD"
      },
      {
        "key": "D",
        "text": "73.000 USD"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0070",
    "stt": 228,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Công ty A nhập khẩu hóa chất từ Công ty B, hai bên không có quan hệ đặc biệt. Giá hóa chất ghi theo điều kiện CIF là 100.000 USD. Theo thỏa thuận, Công ty A được thanh toán chậm 120 ngày và phải trả thêm 2.000 USD tiền lãi chậm trả. Khoản lãi này được ghi riêng trên hóa đơn, tính theo mức 6%/năm, không cao hơn mức lãi suất tín dụng thông thường tại nước xuất khẩu và không vượt mức lãi suất trần do Ngân hàng Nhà nước Việt Nam công bố. Nếu không có khoản điều chỉnh khác, trị giá hải quan của lô hàng là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "98.000 USD"
      },
      {
        "key": "B",
        "text": "100.000 USD"
      },
      {
        "key": "C",
        "text": "102.000 USD"
      },
      {
        "key": "D",
        "text": "106.000 USD"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0071",
    "stt": 229,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Công ty A nhập khẩu 5.000 kg phụ gia thực phẩm từ Công ty B, hai bên không có quan hệ đặc biệt. Giá hàng ghi theo điều kiện CIF là 8 USD/kg. Theo thỏa thuận, Công ty A được thanh toán chậm 120 ngày và phải trả thêm 800 USD tiền lãi chậm trả, được ghi riêng trên hóa đơn. Mức lãi suất 6%/năm không cao hơn mức lãi suất tín dụng thông thường tại nước xuất khẩu và không vượt mức lãi suất trần do Ngân hàng Nhà nước Việt Nam công bố. Nếu không có khoản điều chỉnh khác, trị giá hải quan của lô hàng là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "39.200 USD"
      },
      {
        "key": "B",
        "text": "40.000 USD"
      },
      {
        "key": "C",
        "text": "40.800 USD"
      },
      {
        "key": "D",
        "text": "42.400 USD"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0072",
    "stt": 230,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Công ty C nhập khẩu 200 máy kiểm tra chất lượng từ Công ty D, hai bên không có quan hệ đặc biệt. Giá hàng ghi theo điều kiện CIF là 250 USD/máy. Theo hợp đồng, Công ty C được thanh toán chậm 90 ngày và phải trả thêm 600 USD tiền lãi chậm trả, được ghi riêng trên chứng từ. Mức lãi suất 4,8%/năm phù hợp với lãi suất tín dụng thông thường tại nước xuất khẩu và không vượt mức lãi suất trần do Ngân hàng Nhà nước Việt Nam công bố. Nếu không có khoản điều chỉnh khác, trị giá hải quan của lô hàng là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "49.400 USD"
      },
      {
        "key": "B",
        "text": "50.000 USD"
      },
      {
        "key": "C",
        "text": "50.600 USD"
      },
      {
        "key": "D",
        "text": "52.400 USD"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0073",
    "stt": 231,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Công ty E nhập khẩu 3.000 lít dung môi công nghiệp từ Công ty F, hai bên không có quan hệ đặc biệt. Giá hàng ghi theo điều kiện CIF là 15 USD/lít. Theo thỏa thuận thanh toán, Công ty E được trả chậm 180 ngày và phải trả thêm 1.125 USD tiền lãi chậm trả, khoản này được tách riêng trên hóa đơn. Mức lãi suất 5%/năm không cao hơn mức lãi suất tín dụng thông thường tại nước xuất khẩu và không vượt mức lãi suất trần do Ngân hàng Nhà nước Việt Nam công bố. Nếu không có khoản điều chỉnh khác, trị giá hải quan của lô hàng là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "43.875 USD"
      },
      {
        "key": "B",
        "text": "45.000 USD"
      },
      {
        "key": "C",
        "text": "46.125 USD"
      },
      {
        "key": "D",
        "text": "47.250 USD"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0074",
    "stt": 232,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Công ty G nhập khẩu 12.000 linh kiện nhựa từ Công ty H, hai bên không có quan hệ đặc biệt. Giá hàng ghi theo điều kiện CIF là 3,5 USD/linh kiện. Theo hợp đồng, Công ty G được thanh toán chậm 150 ngày và phải trả thêm 1.260 USD tiền lãi chậm trả, được ghi riêng trên hóa đơn. Mức lãi suất 7,2%/năm phù hợp với lãi suất tín dụng thông thường tại nước xuất khẩu và không vượt mức lãi suất trần do Ngân hàng Nhà nước Việt Nam công bố. Nếu không có khoản điều chỉnh khác, trị giá hải quan của lô hàng là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "40.740 USD"
      },
      {
        "key": "B",
        "text": "42.000 USD"
      },
      {
        "key": "C",
        "text": "43.260 USD"
      },
      {
        "key": "D",
        "text": "45.024 USD"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0075",
    "stt": 233,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Công ty I nhập khẩu 800 thiết bị đo áp suất từ Công ty K, hai bên không có quan hệ đặc biệt. Giá hàng ghi theo điều kiện CIF là 55 USD/thiết bị. Theo thỏa thuận, Công ty I được thanh toán chậm 60 ngày và phải trả thêm 440 USD tiền lãi chậm trả, khoản này được ghi riêng trên chứng từ thanh toán. Mức lãi suất 6%/năm không cao hơn mức lãi suất tín dụng thông thường tại nước xuất khẩu và không vượt mức lãi suất trần do Ngân hàng Nhà nước Việt Nam công bố. Nếu không có khoản điều chỉnh khác, trị giá hải quan của lô hàng là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "43.560 USD"
      },
      {
        "key": "B",
        "text": "44.000 USD"
      },
      {
        "key": "C",
        "text": "44.440 USD"
      },
      {
        "key": "D",
        "text": "46.640 USD"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0076",
    "stt": 234,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Công ty A nhập khẩu 1.500 thiết bị định vị, đơn giá 60 USD/thiết bị theo điều kiện FOB cảng xuất khẩu. Công ty A trả thêm 4.800 USD cước vận tải quốc tế và 900 USD bảo hiểm quốc tế để đưa hàng về cảng Hải Phòng. Theo hợp đồng, Công ty A phải trả thêm 2% trị giá hóa đơn FOB cho đại lý bán hàng của người bán tại Việt Nam. Ngoài ra, Công ty A trả 1.200 USD lãi chậm trả được ghi riêng trên chứng từ, mức lãi phù hợp với thông lệ tín dụng, và trả 1.000 USD chi phí quảng cáo sản phẩm sau nhập khẩu. Nếu không có khoản điều chỉnh khác, trị giá hải quan của lô hàng là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "95.700 USD"
      },
      {
        "key": "B",
        "text": "96.900 USD"
      },
      {
        "key": "C",
        "text": "97.500 USD"
      },
      {
        "key": "D",
        "text": "99.700 USD"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD005_0077",
    "stt": 235,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Công ty B nhập khẩu 2.400 bộ đèn chuyên dụng, đơn giá niêm yết 25 USD/bộ theo điều kiện CFR cảng Cát Lái. Người bán giảm giá thương mại 5% ngay trên hóa đơn trước khi giao hàng. Công ty B trả riêng 750 USD bảo hiểm quốc tế. Theo điều kiện bán hàng, Công ty B phải trả thêm tiền bản quyền bằng 3% trị giá hóa đơn sau giảm giá để được nhập khẩu và bán hàng hóa này. Khoản lãi chậm trả 900 USD được ghi riêng, mức lãi phù hợp với thông lệ tín dụng. Chi phí lắp đặt sau nhập khẩu tại Việt Nam là 1.200 USD, ghi riêng. Nếu không có khoản điều chỉnh khác, trị giá hải quan của lô hàng là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "57.750 USD"
      },
      {
        "key": "B",
        "text": "59.460 USD"
      },
      {
        "key": "C",
        "text": "60.360 USD"
      },
      {
        "key": "D",
        "text": "62.550 USD"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0078",
    "stt": 236,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Công ty C nhập khẩu 600 máy in công nghiệp, đơn giá 110 USD/máy theo điều kiện EXW tại xưởng người bán. Để đưa hàng đến cảng xuất khẩu, Công ty C trả 1.600 USD vận chuyển nội địa nước xuất khẩu, 700 USD chi phí bao bì chuyên dùng cho xuất khẩu và 400 USD phí xếp hàng tại cảng xuất khẩu. Cước vận tải quốc tế là 3.200 USD, bảo hiểm quốc tế là 600 USD. Công ty C trả thêm 1.320 USD hoa hồng cho đại lý mua hàng do mình thuê và 660 USD lãi chậm trả được ghi riêng, mức lãi phù hợp với thông lệ tín dụng. Nếu không có khoản điều chỉnh khác, trị giá hải quan của lô hàng là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "69.800 USD"
      },
      {
        "key": "B",
        "text": "72.500 USD"
      },
      {
        "key": "C",
        "text": "73.820 USD"
      },
      {
        "key": "D",
        "text": "74.480 USD"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0079",
    "stt": 237,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Công ty D nhập khẩu 1.000 thiết bị chẩn đoán, giá hóa đơn là 120 USD/thiết bị theo điều kiện DAP kho người mua tại Việt Nam. Theo bảng chi tiết kèm hóa đơn, giá DAP đã bao gồm 2.800 USD chi phí vận chuyển nội địa tại Việt Nam sau khi hàng đến cảng nhập khẩu, 700 USD bảo hiểm nội địa tại Việt Nam và 1.500 USD lãi chậm trả được ghi riêng, mức lãi phù hợp với thông lệ tín dụng. Ngoài ra, theo điều kiện bán hàng, Công ty D phải trả thêm 2.000 USD phí bản quyền cho người bán để được nhập khẩu và phân phối hàng hóa này. Chi phí lắp đặt sau nhập khẩu là 1.000 USD, được ghi riêng. Nếu không có khoản điều chỉnh khác, trị giá hải quan của lô hàng là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "120.000 USD"
      },
      {
        "key": "B",
        "text": "118.500 USD"
      },
      {
        "key": "C",
        "text": "117.000 USD"
      },
      {
        "key": "D",
        "text": "115.000 USD"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD005_0080",
    "stt": 238,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Công ty A nhập khẩu của công ty B một lô hàng máy xay cầm tay gồm 800 sản phẩm, bán trong giao dịch bán buôn, giá hóa đơn là 45 USD/sản phẩm. Lô hàng này không đủ điều kiện xác định trị giá tính thuế theo phương pháp 1. Trong dữ liệu của cơ quan hải quan có 2 lô hàng giống hệt đã được xác định trị giá tính thuế theo phương pháp 1. Lô hàng P được xuất khẩu đến Việt Nam trước 50 ngày, có trị giá tính thuế 42 USD/sản phẩm. Lô hàng Q được xuất khẩu đến Việt Nam sau 40 ngày, có trị giá tính thuế 39 USD/sản phẩm. Biết P và Q có cùng số lượng, cùng cấp độ thương mại với lô hàng đang xác định trị giá. Đơn giá tính thuế của lô hàng nhập khẩu theo phương pháp trị giá giao dịch của hàng hóa nhập khẩu giống hệt là:",
    "options": [
      {
        "key": "A",
        "text": "42 USD"
      },
      {
        "key": "B",
        "text": "39 USD"
      },
      {
        "key": "C",
        "text": "45 USD"
      },
      {
        "key": "D",
        "text": "Không xác định được trị giá tính thuế theo phương pháp 2"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0081",
    "stt": 239,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Công ty C nhập khẩu của công ty D một lô hàng bộ sạc điện thoại gồm 1.500 sản phẩm, bán trong giao dịch bán buôn, giá hóa đơn là 20 USD/sản phẩm. Lô hàng này không đủ điều kiện xác định trị giá tính thuế theo phương pháp 1. Trong dữ liệu của cơ quan hải quan có 2 lô hàng giống hệt đã được xác định trị giá tính thuế theo phương pháp 1. Lô hàng P được xuất khẩu đến Việt Nam trước 30 ngày, có trị giá tính thuế 18 USD/sản phẩm. Lô hàng Q được xuất khẩu đến Việt Nam sau 62 ngày, có trị giá tính thuế 17 USD/sản phẩm. Biết P và Q có cùng số lượng, cùng cấp độ thương mại với lô hàng đang xác định trị giá. Đơn giá tính thuế của lô hàng nhập khẩu theo phương pháp trị giá giao dịch của hàng hóa nhập khẩu giống hệt là:",
    "options": [
      {
        "key": "A",
        "text": "17 USD"
      },
      {
        "key": "B",
        "text": "18 USD"
      },
      {
        "key": "C",
        "text": "20 USD"
      },
      {
        "key": "D",
        "text": "Không xác định được trị giá tính thuế theo phương pháp 2"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0082",
    "stt": 240,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Công ty E nhập khẩu của công ty F một lô hàng bình giữ nhiệt gồm 2.000 sản phẩm, bán trong giao dịch bán buôn, giá hóa đơn là 13 USD/sản phẩm. Lô hàng này không đủ điều kiện xác định trị giá tính thuế theo phương pháp 1. Trong dữ liệu của cơ quan hải quan có 3 lô hàng đã được xác định trị giá tính thuế theo phương pháp 1. Lô hàng P là hàng hóa giống hệt, được xuất khẩu đến Việt Nam trước 55 ngày, có trị giá tính thuế 12 USD/sản phẩm. Lô hàng Q là hàng hóa giống hệt, được xuất khẩu đến Việt Nam sau 35 ngày, có trị giá tính thuế 11,5 USD/sản phẩm. Lô hàng R là hàng hóa giống hệt, được xuất khẩu cùng ngày nhưng là giao dịch bán lẻ, chưa có căn cứ điều chỉnh về cùng cấp độ thương mại, có trị giá tính thuế 10,5 USD/sản phẩm. Biết P và Q có cùng số lượng, cùng cấp độ thương mại với lô hàng đang xác định trị giá. Đơn giá tính thuế của lô hàng nhập khẩu theo phương pháp trị giá giao dịch của hàng hóa nhập khẩu giống hệt là:",
    "options": [
      {
        "key": "A",
        "text": "10,5 USD"
      },
      {
        "key": "B",
        "text": "11,5 USD"
      },
      {
        "key": "C",
        "text": "12 USD"
      },
      {
        "key": "D",
        "text": "13 USD"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0083",
    "stt": 241,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Công ty G nhập khẩu của công ty H một lô hàng đèn bàn LED gồm 1.200 sản phẩm, bán trong giao dịch bán buôn, giá hóa đơn là 8,5 USD/sản phẩm. Lô hàng này không đủ điều kiện xác định trị giá tính thuế theo phương pháp 1. Trong dữ liệu của cơ quan hải quan có 2 lô hàng giống hệt đã được xác định trị giá tính thuế theo phương pháp 1. Lô hàng P được xuất khẩu đến Việt Nam trước 45 ngày, có trị giá tính thuế 7,8 USD/sản phẩm. Lô hàng Q được xuất khẩu đến Việt Nam sau 58 ngày, có trị giá tính thuế 8,1 USD/sản phẩm. Biết P và Q có cùng số lượng, cùng cấp độ thương mại với lô hàng đang xác định trị giá. Đơn giá tính thuế của lô hàng nhập khẩu theo phương pháp trị giá giao dịch của hàng hóa nhập khẩu giống hệt là:",
    "options": [
      {
        "key": "A",
        "text": "7,8 USD"
      },
      {
        "key": "B",
        "text": "8,1 USD"
      },
      {
        "key": "C",
        "text": "8,5 USD"
      },
      {
        "key": "D",
        "text": "Không xác định được trị giá tính thuế theo phương pháp 2"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD005_0084",
    "stt": 242,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Công ty I nhập khẩu của công ty K một lô hàng tai nghe không dây gồm 1.000 sản phẩm, bán trong giao dịch bán buôn, giá hóa đơn là 16 USD/sản phẩm. Lô hàng này không đủ điều kiện xác định trị giá tính thuế theo phương pháp 1. Trong dữ liệu của cơ quan hải quan có 2 lô hàng đã được xác định trị giá tính thuế theo phương pháp 1. Lô hàng P là hàng hóa tương tự, được xuất khẩu đến Việt Nam trước 75 ngày, có trị giá tính thuế 14 USD/sản phẩm. Lô hàng Q là hàng hóa giống hệt, được xuất khẩu đến Việt Nam sau 70 ngày, có trị giá tính thuế 15 USD/sản phẩm. Biết P và Q có cùng số lượng, cùng cấp độ thương mại với lô hàng đang xác định trị giá. Đơn giá tính thuế của lô hàng nhập khẩu theo phương pháp trị giá giao dịch của hàng hóa nhập khẩu giống hệt là:",
    "options": [
      {
        "key": "A",
        "text": "14 USD"
      },
      {
        "key": "B",
        "text": "15 USD"
      },
      {
        "key": "C",
        "text": "16 USD"
      },
      {
        "key": "D",
        "text": "Không xác định được trị giá tính thuế theo phương pháp 2"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD005_0085",
    "stt": 243,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Khi lô hàng nhập khẩu không đủ điều kiện xác định trị giá hải quan theo phương pháp trị giá giao dịch, phương pháp nào được xem xét áp dụng ngay sau đó?",
    "options": [
      {
        "key": "A",
        "text": "Phương pháp trị giá giao dịch của hàng nhập khẩu tương tự"
      },
      {
        "key": "B",
        "text": "Phương pháp trị giá giao dịch của hàng nhập khẩu giống hệt"
      },
      {
        "key": "C",
        "text": "Phương pháp trị giá khấu trừ"
      },
      {
        "key": "D",
        "text": "Phương pháp trị giá tính toán"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0086",
    "stt": 244,
    "mucDo": "NB",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Trị giá giao dịch của hàng hóa nhập khẩu được xác định trên cơ sở nào?",
    "options": [
      {
        "key": "A",
        "text": "Giá thực tế đã thanh toán hoặc sẽ phải thanh toán, có xét các khoản điều chỉnh theo quy định"
      },
      {
        "key": "B",
        "text": "Giá ghi trên hóa đơn thương mại, không xét thêm các khoản điều chỉnh"
      },
      {
        "key": "C",
        "text": "Các khoản người mua thanh toán gián tiếp cho bên thứ ba theo yêu cầu của người bán"
      },
      {
        "key": "D",
        "text": "Giá bán của hàng hóa nhập khẩu trên thị trường nội địa sau khi thông quan"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD005_0087",
    "stt": 245,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Hai lô hàng nhập khẩu nào sau đây có thể được coi là hai lô hàng nhập khẩu tương tự khi xác định trị giá hải quan?",
    "options": [
      {
        "key": "A",
        "text": "Hai lô bột gạo cùng nhà sản xuất nhưng một lô dùng làm mặt nạ, một lô dùng làm nguyên liệu làm bánh"
      },
      {
        "key": "B",
        "text": "Hai lô xe đạp cùng nhà sản xuất, một lô là xe đã qua sử dụng, một lô là xe mới"
      },
      {
        "key": "C",
        "text": "Hai lô áo sơ mi cùng chất liệu, cùng công dụng, cùng nhãn hiệu, chỉ khác một số chi tiết kiểu dáng nhỏ"
      },
      {
        "key": "D",
        "text": "Hai lô xe máy cùng nhãn hiệu, một lô nhập nguyên chiếc, một lô nhập ở dạng chưa lắp ráp hoàn chỉnh"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD005_0088",
    "stt": 246,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Lô hàng X có 250 sản phẩm, bán ở cấp độ bán lẻ, không đủ điều kiện áp dụng phương pháp trị giá giao dịch. Theo điều kiện cấp độ thương mại và số lượng, lô hàng giống hệt nào sau đây phù hợp nhất để lựa chọn?",
    "options": [
      {
        "key": "A",
        "text": "Lô hàng 250 sản phẩm, bán ở cấp độ bán buôn"
      },
      {
        "key": "B",
        "text": "Lô hàng 100 sản phẩm, bán ở cấp độ bán lẻ"
      },
      {
        "key": "C",
        "text": "Lô hàng 250 sản phẩm, bán ở cấp độ bán lẻ"
      },
      {
        "key": "D",
        "text": "Lô hàng 300 sản phẩm, bán ở cấp độ bán buôn"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD005_0089",
    "stt": 247,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Lô hàng Y không đủ điều kiện xác định trị giá tính thuế theo phương pháp trị giá giao dịch. Lô hàng X và Y là hàng nhập khẩu giống hệt, có cùng cấp độ thương mại nhưng khác về số lượng. Lô hàng X được xuất khẩu đến Việt Nam cùng ngày với lô hàng Y và đã được xác định trị giá theo phương pháp trị giá giao dịch là 60 USD. Trị giá tính thuế của lô hàng Y được xác định như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Lấy nguyên trị giá 60 USD của lô hàng X"
      },
      {
        "key": "B",
        "text": "Điều chỉnh lô hàng X về cùng cấp độ thương mại"
      },
      {
        "key": "C",
        "text": "Điều chỉnh lô hàng X về cùng số lượng"
      },
      {
        "key": "D",
        "text": "Chuyển ngay sang phương pháp trị giá khấu trừ"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD005_0090",
    "stt": 248,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Lô hàng X gồm 150 sản phẩm nhập khẩu từ Hàn Quốc, đủ điều kiện xác định trị giá tính thuế theo phương pháp trị giá giao dịch. Giá hóa đơn là 1.000 USD/sản phẩm, điều kiện FOB Incheon, Incoterms 2020. Khi hàng đang được xếp lên tàu tại cảng xếp hàng, bên bán có văn bản giảm giá 100 USD/sản phẩm và văn bản này được nộp cùng hồ sơ hải quan khi làm thủ tục nhập khẩu. Chi phí vận tải quốc tế là 20 USD/sản phẩm, phí bảo hiểm quốc tế là 20 USD/sản phẩm. Đơn giá tính thuế của lô hàng X là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "1.000 USD"
      },
      {
        "key": "B",
        "text": "1.040 USD"
      },
      {
        "key": "C",
        "text": "900 USD"
      },
      {
        "key": "D",
        "text": "940 USD"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD005_0091",
    "stt": 249,
    "mucDo": "VD",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Lô hàng A có 500 sản phẩm, bán ở cấp độ bán lẻ, không đủ điều kiện xác định trị giá theo phương pháp trị giá giao dịch. Có hai lô hàng giống hệt A. Lô hàng B có 500 sản phẩm, bán ở cấp độ bán buôn, đơn giá 60 USD/sản phẩm; tài liệu giá cho thấy giá bán buôn bằng 90% giá bán lẻ cùng số lượng. Lô hàng C có 500 sản phẩm, bán ở cấp độ bán lẻ, đã được xác định trị giá theo phương pháp trị giá giao dịch là 70 USD/sản phẩm. Hai lô hàng B và C đều nằm trong thời hạn được lựa chọn. Đơn giá tính thuế của lô hàng A là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "70 USD"
      },
      {
        "key": "B",
        "text": "60 USD"
      },
      {
        "key": "C",
        "text": "66,67 USD"
      },
      {
        "key": "D",
        "text": "50 USD"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD005_0092",
    "stt": 250,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Hai lô hàng giống nhau về mọi phương diện, được sản xuất tại Nhật Bản bởi cùng một nhà sản xuất. Công ty H và Công ty K cùng nhập khẩu hai lô hàng này vào Việt Nam. Do mua với số lượng lớn, Công ty H được chiết khấu 10%, còn Công ty K mua theo giá niêm yết. Hai lô hàng này có được coi là hàng nhập khẩu giống hệt không?",
    "options": [
      {
        "key": "A",
        "text": "Có"
      },
      {
        "key": "B",
        "text": "Không"
      },
      {
        "key": "C",
        "text": "Chỉ có nếu hai công ty cùng cấp độ thương mại"
      },
      {
        "key": "D",
        "text": "Chỉ có nếu Công ty K cũng được chiết khấu 10%"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD005_0093",
    "stt": 251,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Hai lô hàng máy ảnh kỹ thuật số cùng model, cùng cấu hình, cùng nhãn hiệu, được sản xuất tại Nhật Bản bởi cùng một nhà sản xuất. Công ty A nhập khẩu 100 chiếc và được giảm giá 5% do thanh toán sớm, Công ty B nhập khẩu 100 chiếc theo giá niêm yết. Hai lô hàng này có được coi là hàng nhập khẩu giống hệt không?",
    "options": [
      {
        "key": "A",
        "text": "Có"
      },
      {
        "key": "B",
        "text": "Không"
      },
      {
        "key": "C",
        "text": "Chỉ có nếu hai công ty cùng được giảm giá"
      },
      {
        "key": "D",
        "text": "Chỉ có nếu hai lô hàng có cùng trị giá khai báo"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD005_0094",
    "stt": 252,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Hai lô hàng đồng hồ đeo tay cùng mã sản phẩm, cùng chất liệu, cùng chức năng, cùng nhãn hiệu, được sản xuất tại Thụy Sĩ bởi cùng một nhà sản xuất. Lô hàng A được nhập khẩu theo hợp đồng phân phối độc quyền, lô hàng B được nhập khẩu theo hợp đồng mua bán thông thường. Hai lô hàng này có được coi là hàng nhập khẩu giống hệt không?",
    "options": [
      {
        "key": "A",
        "text": "Có"
      },
      {
        "key": "B",
        "text": "Không"
      },
      {
        "key": "C",
        "text": "Chỉ có nếu hai hợp đồng có cùng điều kiện thanh toán"
      },
      {
        "key": "D",
        "text": "Chỉ có nếu hai doanh nghiệp nhập khẩu có cùng cấp độ thương mại"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD005_0095",
    "stt": 253,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Hai lô hàng giày thể thao cùng nhãn hiệu, cùng mẫu, cùng màu sắc nhưng khác chất liệu đế và được sản xuất tại Hàn Quốc bởi cùng một nhà sản xuất. Lô hàng A dùng đế cao su tự nhiên, lô hàng B dùng đế tổng hợp. Hai lô hàng này có được coi là hàng nhập khẩu giống hệt không?",
    "options": [
      {
        "key": "A",
        "text": "Có"
      },
      {
        "key": "B",
        "text": "Không"
      },
      {
        "key": "C",
        "text": "Chỉ có nếu hai lô hàng có cùng đơn giá nhập khẩu"
      },
      {
        "key": "D",
        "text": "Chỉ có nếu hai lô hàng được nhập khẩu cùng số lượng"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0096",
    "stt": 254,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Hai lô hàng máy xay sinh tố cùng nhãn hiệu, cùng model, cùng công suất, cùng phụ kiện đi kèm, được sản xuất tại Thái Lan bởi cùng một nhà sản xuất. Lô hàng A được xuất khẩu đến Việt Nam trong tháng 3, lô hàng B được xuất khẩu đến Việt Nam trong tháng 4 và có giá bán cao hơn do biến động thị trường. Hai lô hàng này có được coi là hàng nhập khẩu giống hệt không?",
    "options": [
      {
        "key": "A",
        "text": "Có"
      },
      {
        "key": "B",
        "text": "Không"
      },
      {
        "key": "C",
        "text": "Chỉ có nếu hai lô hàng được xuất khẩu cùng ngày"
      },
      {
        "key": "D",
        "text": "Chỉ có nếu hai lô hàng có cùng đơn giá mua bán"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD005_0097",
    "stt": 255,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Hai lô hàng bình giữ nhiệt cùng nhãn hiệu, cùng dung tích và cùng kiểu dáng. Lô hàng A được sản xuất tại Trung Quốc, lô hàng B được sản xuất tại Thái Lan bởi cùng tập đoàn. Hai lô hàng này có được coi là hàng nhập khẩu giống hệt không?",
    "options": [
      {
        "key": "A",
        "text": "Có"
      },
      {
        "key": "B",
        "text": "Không"
      },
      {
        "key": "C",
        "text": "Chỉ có nếu hai lô hàng có cùng trị giá khai báo"
      },
      {
        "key": "D",
        "text": "Chỉ có nếu hai lô hàng được nhập khẩu cùng thời điểm"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0098",
    "stt": 256,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Hai lô hàng tai nghe không dây cùng nhãn hiệu, cùng model, cùng thông số kỹ thuật, cùng màu sắc, được sản xuất tại Việt Nam bởi cùng một nhà sản xuất. Lô hàng A được đóng gói theo bộ 1 sản phẩm/hộp để bán lẻ, lô hàng B được đóng gói theo thùng 20 sản phẩm để bán cho nhà phân phối, nhưng từng sản phẩm bên trong hoàn toàn giống nhau. Hai lô hàng này có được coi là hàng nhập khẩu giống hệt không?",
    "options": [
      {
        "key": "A",
        "text": "Có"
      },
      {
        "key": "B",
        "text": "Không"
      },
      {
        "key": "C",
        "text": "Chỉ có nếu hai lô hàng có cùng cách đóng gói thương mại"
      },
      {
        "key": "D",
        "text": "Chỉ có nếu hai lô hàng có cùng cấp độ thương mại"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD005_0099",
    "stt": 257,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Hai lô hàng máy khoan cầm tay cùng nhãn hiệu, cùng công suất, cùng nước sản xuất và cùng nhà sản xuất. Lô hàng A là phiên bản dùng pin dung lượng 2.0Ah, lô hàng B là phiên bản dùng pin dung lượng 4.0Ah; thân máy giống nhau nhưng bộ pin đi kèm khác nhau. Hai lô hàng này có được coi là hàng nhập khẩu giống hệt không?",
    "options": [
      {
        "key": "A",
        "text": "Có"
      },
      {
        "key": "B",
        "text": "Không"
      },
      {
        "key": "C",
        "text": "Chỉ có nếu hai lô hàng có cùng đơn giá nhập khẩu"
      },
      {
        "key": "D",
        "text": "Chỉ có nếu hai lô hàng được nhập khẩu cùng thời điểm"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0100",
    "stt": 258,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Hai lô hàng nước hoa cùng nhãn hiệu, cùng dung tích 100 ml, cùng mùi hương, cùng mã sản phẩm, được sản xuất tại Pháp bởi cùng một nhà sản xuất. Lô hàng A là bao bì tiêu chuẩn, lô hàng B là bao bì phiên bản quà tặng dịp lễ nhưng chai nước hoa bên trong giống hệt về thành phần, dung tích và công dụng. Hai lô hàng này có được coi là hàng nhập khẩu giống hệt không?",
    "options": [
      {
        "key": "A",
        "text": "Có"
      },
      {
        "key": "B",
        "text": "Không"
      },
      {
        "key": "C",
        "text": "Chỉ có nếu hai lô hàng có cùng bao bì bên ngoài"
      },
      {
        "key": "D",
        "text": "Chỉ có nếu hai lô hàng được bán theo cùng chương trình khuyến mại"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD005_0101",
    "stt": 259,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Hai lô hàng máy tính bảng cùng nhãn hiệu, cùng kích thước màn hình, cùng dung lượng bộ nhớ, cùng màu sắc và cùng cấu hình kỹ thuật. Lô hàng A được sản xuất tại Trung Quốc, lô hàng B được sản xuất tại Việt Nam bởi cùng một tập đoàn. Hai lô hàng này có được coi là hàng nhập khẩu giống hệt không?",
    "options": [
      {
        "key": "A",
        "text": "Có"
      },
      {
        "key": "B",
        "text": "Không"
      },
      {
        "key": "C",
        "text": "Chỉ có nếu hai lô hàng có cùng trị giá khai báo"
      },
      {
        "key": "D",
        "text": "Chỉ có nếu hai lô hàng có cùng thời hạn bảo hành"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0102",
    "stt": 260,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Hai lô hàng áo khoác cùng nhãn hiệu, cùng chất liệu vải, cùng kiểu dáng, cùng màu sắc, cùng nước sản xuất và cùng nhà sản xuất. Lô hàng A là size M, lô hàng B là size L; các thông số còn lại không khác nhau. Hai lô hàng này có được coi là hàng nhập khẩu giống hệt không?",
    "options": [
      {
        "key": "A",
        "text": "Có"
      },
      {
        "key": "B",
        "text": "Không"
      },
      {
        "key": "C",
        "text": "Chỉ có nếu hai lô hàng có cùng giá bán trên hóa đơn"
      },
      {
        "key": "D",
        "text": "Chỉ có nếu hai lô hàng cùng được nhập khẩu bởi một doanh nghiệp"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0103",
    "stt": 261,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Hai lô hàng đèn LED cùng nhãn hiệu, cùng công suất 12W, cùng kiểu dáng, cùng màu ánh sáng, cùng nước sản xuất. Hồ sơ lô hàng A thể hiện nhà sản xuất là Công ty M, hồ sơ lô hàng B chỉ thể hiện tên thương hiệu và nước sản xuất, không có thông tin về nhà sản xuất. Hai lô hàng này có được coi là hàng nhập khẩu giống hệt không?",
    "options": [
      {
        "key": "A",
        "text": "Có"
      },
      {
        "key": "B",
        "text": "Không"
      },
      {
        "key": "C",
        "text": "Chưa đủ cơ sở kết luận"
      },
      {
        "key": "D",
        "text": "Chỉ có nếu hai lô hàng có cùng số lượng nhập khẩu"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD005_0104",
    "stt": 262,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Hai lô hàng máy lọc không khí cùng nhãn hiệu, cùng model, cùng công suất, cùng nước sản xuất. Hồ sơ lô hàng A thể hiện nhà sản xuất là Công ty K, hồ sơ lô hàng B chỉ thể hiện tên thương hiệu và mã sản phẩm, không có thông tin về nhà sản xuất. Hai lô hàng này có được coi là hàng nhập khẩu giống hệt không?",
    "options": [
      {
        "key": "A",
        "text": "Có"
      },
      {
        "key": "B",
        "text": "Không"
      },
      {
        "key": "C",
        "text": "Chưa đủ cơ sở kết luận"
      },
      {
        "key": "D",
        "text": "Chỉ có nếu hai lô hàng có cùng đơn giá nhập khẩu"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD005_0105",
    "stt": 263,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Hai lô hàng loa bluetooth cùng nhãn hiệu, cùng model, cùng công suất, cùng màu sắc, cùng nước sản xuất và cùng nhà sản xuất. Lô hàng A nhập khẩu 500 chiếc nên được chiết khấu số lượng 7%, lô hàng B nhập khẩu 100 chiếc theo giá niêm yết. Hai lô hàng này có được coi là hàng nhập khẩu giống hệt không?",
    "options": [
      {
        "key": "A",
        "text": "Có"
      },
      {
        "key": "B",
        "text": "Không"
      },
      {
        "key": "C",
        "text": "Chưa đủ cơ sở kết luận"
      },
      {
        "key": "D",
        "text": "Chỉ có nếu hai lô hàng có cùng số lượng nhập khẩu"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD005_0106",
    "stt": 264,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Hai lô hàng balo du lịch cùng nhãn hiệu, cùng dung tích và cùng kiểu dáng bên ngoài. Lô hàng A được sản xuất tại Việt Nam bằng vải polyester chống nước; lô hàng B được sản xuất tại Việt Nam bằng vải nylon thông thường. Hai lô hàng này có được coi là hàng nhập khẩu giống hệt không?",
    "options": [
      {
        "key": "A",
        "text": "Có"
      },
      {
        "key": "B",
        "text": "Không"
      },
      {
        "key": "C",
        "text": "Chưa đủ cơ sở kết luận"
      },
      {
        "key": "D",
        "text": "Chỉ có nếu hai lô hàng có cùng trị giá khai báo"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0107",
    "stt": 265,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Hai lô hàng máy sấy tóc cùng nhãn hiệu, cùng model, cùng công suất, cùng phụ kiện đi kèm, cùng nước sản xuất và cùng nhà sản xuất. Lô hàng A có bao bì tiêu chuẩn, lô hàng B có bao bì phiên bản khuyến mại nhưng sản phẩm bên trong giống nhau về mọi phương diện. Hai lô hàng này có được coi là hàng nhập khẩu giống hệt không?",
    "options": [
      {
        "key": "A",
        "text": "Có"
      },
      {
        "key": "B",
        "text": "Không"
      },
      {
        "key": "C",
        "text": "Chưa đủ cơ sở kết luận"
      },
      {
        "key": "D",
        "text": "Chỉ có nếu hai lô hàng có cùng bao bì bên ngoài"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD005_0108",
    "stt": 266,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Hai lô hàng kính râm cùng nhãn hiệu, cùng kiểu dáng và cùng màu sắc. Lô hàng A được sản xuất tại Ý, lô hàng B được sản xuất tại Trung Quốc bởi cùng một tập đoàn. Hai lô hàng này có được coi là hàng nhập khẩu giống hệt không?",
    "options": [
      {
        "key": "A",
        "text": "Có"
      },
      {
        "key": "B",
        "text": "Không"
      },
      {
        "key": "C",
        "text": "Chưa đủ cơ sở kết luận"
      },
      {
        "key": "D",
        "text": "Chỉ có nếu hai lô hàng có cùng giá niêm yết"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0109",
    "stt": 267,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Hai lô hàng máy pha cà phê cùng nhãn hiệu, cùng model thương mại, cùng công suất, cùng nước sản xuất và cùng nhà sản xuất. Lô hàng A được bán kèm bộ 10 viên vệ sinh máy, lô hàng B không kèm bộ viên vệ sinh; thân máy, chức năng pha, dung tích bình nước và phụ kiện chính đều giống nhau. Hai lô hàng này có được coi là hàng nhập khẩu giống hệt không?",
    "options": [
      {
        "key": "A",
        "text": "Có"
      },
      {
        "key": "B",
        "text": "Không"
      },
      {
        "key": "C",
        "text": "Chưa đủ cơ sở kết luận"
      },
      {
        "key": "D",
        "text": "Chỉ có nếu hai lô hàng có cùng đơn giá nhập khẩu"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0110",
    "stt": 268,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Hai lô hàng máy chiếu cùng nhãn hiệu, cùng model, cùng độ phân giải, cùng độ sáng, cùng nước sản xuất và cùng nhà sản xuất. Lô hàng A nhập khẩu theo cấp độ bán buôn nên có đơn giá thấp hơn; lô hàng B nhập khẩu theo cấp độ bán lẻ nên có đơn giá cao hơn. Hàng hóa trong hai lô đều giống nhau về thông số kỹ thuật, chất lượng và phụ kiện đi kèm. Hai lô hàng này có được coi là hàng nhập khẩu giống hệt không?",
    "options": [
      {
        "key": "A",
        "text": "Có"
      },
      {
        "key": "B",
        "text": "Không"
      },
      {
        "key": "C",
        "text": "Chưa đủ cơ sở kết luận"
      },
      {
        "key": "D",
        "text": "Chỉ có nếu hai lô hàng cùng cấp độ thương mại"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD005_0111",
    "stt": 269,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Hai lô hàng kem dưỡng da cùng nhãn hiệu, cùng dung tích, cùng công dụng và cùng nước sản xuất. Lô hàng A có công thức dành cho thị trường châu Á, lô hàng B có công thức dành cho thị trường châu Âu; hồ sơ thể hiện thành phần hoạt chất và tỷ lệ thành phần chính khác nhau. Hai lô hàng này có được coi là hàng nhập khẩu giống hệt không?",
    "options": [
      {
        "key": "A",
        "text": "Có"
      },
      {
        "key": "B",
        "text": "Không"
      },
      {
        "key": "C",
        "text": "Chưa đủ cơ sở kết luận"
      },
      {
        "key": "D",
        "text": "Chỉ có nếu hai lô hàng có cùng bao bì bán lẻ"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD005_0112",
    "stt": 270,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Hai lô hàng máy hút bụi cùng nhãn hiệu, cùng tên thương mại và cùng nước sản xuất. Lô hàng A ghi model V8-220V, lô hàng B ghi model V8-110V; hồ sơ chưa thể hiện rõ hai model có khác nhau về cấu tạo, công suất, tiêu chuẩn điện áp hay chỉ là ký hiệu thị trường. Hai lô hàng này có được coi là hàng nhập khẩu giống hệt không?",
    "options": [
      {
        "key": "A",
        "text": "Có"
      },
      {
        "key": "B",
        "text": "Không"
      },
      {
        "key": "C",
        "text": "Chưa đủ cơ sở kết luận"
      },
      {
        "key": "D",
        "text": "Chỉ có nếu hai lô hàng có cùng trị giá khai báo"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD005_0113",
    "stt": 271,
    "mucDo": "TH",
    "tenChuDe": "Chương 2.4 Xác định trị giá hải quan đối với hàng hóa xuất nhập khẩu",
    "cauHoi": "Hai lô hàng đàn guitar acoustic cùng nhãn hiệu, cùng model, cùng kích thước, cùng loại gỗ mặt đàn, cùng nước sản xuất và cùng nhà sản xuất. Lô hàng A được nhập khẩu tháng 4 với bảo hành quốc tế 12 tháng; lô hàng B được nhập khẩu tháng 6 với bảo hành quốc tế 24 tháng theo chương trình bán hàng mới của hãng. Bản thân hàng hóa không khác về cấu tạo, vật liệu, chất lượng và công dụng. Hai lô hàng này có được coi là hàng nhập khẩu giống hệt không?",
    "options": [
      {
        "key": "A",
        "text": "Có"
      },
      {
        "key": "B",
        "text": "Không"
      },
      {
        "key": "C",
        "text": "Chưa đủ cơ sở kết luận"
      },
      {
        "key": "D",
        "text": "Chỉ có nếu hai lô hàng có cùng thời hạn bảo hành"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD006_0001",
    "stt": 272,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Công ty có lô hàng gồm 1000m vải thuộc cùng một vận đơn. Công ty muốn làm thủ tục 500m theo loại hình nhập gia công và 500m theo loại hình nhập sản xuất xuất khẩu. Công ty phải thực hiện như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Khai trên các tờ khai hải quan khác nhau theo từng loại hình tương ứng"
      },
      {
        "key": "B",
        "text": "Mở chung tờ khai cho toàn bộ lô hàng"
      },
      {
        "key": "C",
        "text": "Có văn bản đề nghị làm thủ tục cho từng loại hình"
      },
      {
        "key": "D",
        "text": "Được lựa chọn khai gộp hoặc khai tách theo nhu cầu làm thủ tục"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD006_0002",
    "stt": 273,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Công ty C nhập khẩu một lô hàng có nhãn gốc bằng tiếng nước ngoài. Công ty phải bổ sung nhãn phụ bằng tiếng Việt tại thời điểm nào?",
    "options": [
      {
        "key": "A",
        "text": "Trước khi hàng về đến cửa khẩu nhập đầu tiên"
      },
      {
        "key": "B",
        "text": "Trước khi hoàn thành thủ tục thông quan cho lô hàng"
      },
      {
        "key": "C",
        "text": "Trên đường vận chuyển từ cửa khẩu nhập về kho"
      },
      {
        "key": "D",
        "text": "Trước khi đưa hàng hóa vào lưu thông"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD006_0003",
    "stt": 274,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Ngày 1/1/2018, Công ty A đăng ký tờ khai nhập khẩu và khai báo nợ C/O mẫu D trên tờ khai hải quan. Ngày 20/1/2018, Công ty A nộp bổ sung C/O mẫu D và khai bổ sung sau thông quan AMA để đề nghị áp dụng thuế suất ưu đãi đặc biệt. Trường hợp này, cơ quan hải quan sẽ xử lý như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Không chấp nhận C/O vì đã quá thời hạn nộp bổ sung"
      },
      {
        "key": "B",
        "text": "Không chấp nhận C/O vì C/O thiếu khai báo mã HS"
      },
      {
        "key": "C",
        "text": "Tiếp nhận, kiểm tra C/O và áp dụng thuế suất ưu đãi đặc biệt nếu C/O hợp lệ"
      },
      {
        "key": "D",
        "text": "Áp dụng thuế suất ưu đãi đặc biệt chỉ vì doanh nghiệp đã khai nợ C/O trên tờ khai"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD006_0004",
    "stt": 275,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Ngày 1/1/2018, Công ty A đăng ký tờ khai nhập khẩu và khai báo nợ C/O mẫu D trên tờ khai hải quan. Ngày 1/3/2018, Công ty A mới nộp bổ sung C/O mẫu D để đề nghị áp dụng thuế suất ưu đãi đặc biệt. Trường hợp này, cơ quan hải quan sẽ xử lý như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Không chấp nhận C/O vì đã quá thời hạn nộp bổ sung theo quy định"
      },
      {
        "key": "B",
        "text": "Không chấp nhận C/O vì C/O thiếu khai báo mã HS"
      },
      {
        "key": "C",
        "text": "Tiếp nhận và kiểm tra C/O, áp dụng thuế suất ưu đãi đặc biệt nếu C/O hợp lệ"
      },
      {
        "key": "D",
        "text": "Áp dụng thuế suất ưu đãi đặc biệt vì doanh nghiệp đã khai nợ C/O trên tờ khai"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD006_0005",
    "stt": 276,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Kể từ thời điểm người khai hải quan xuất trình đầy đủ hàng hóa nhập khẩu cho cơ quan hải quan, thời hạn hoàn thành kiểm tra thực tế hàng hóa chậm nhất là:",
    "options": [
      {
        "key": "A",
        "text": "24 giờ làm việc"
      },
      {
        "key": "B",
        "text": "8 giờ làm việc"
      },
      {
        "key": "C",
        "text": "12 giờ làm việc"
      },
      {
        "key": "D",
        "text": "4 giờ làm việc"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD006_0006",
    "stt": 277,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Địa điểm nào không phải là địa điểm đăng ký tờ khai hải quan đối với hàng hóa xuất khẩu?",
    "options": [
      {
        "key": "A",
        "text": "Chi cục Hải quan nơi người mua hàng có trụ sở"
      },
      {
        "key": "B",
        "text": "Chi cục Hải quan cửa khẩu xuất hàng"
      },
      {
        "key": "C",
        "text": "Chi cục Hải quan nơi doanh nghiệp có cơ sở sản xuất"
      },
      {
        "key": "D",
        "text": "Chi cục Hải quan quản lý địa điểm tập kết hàng xuất khẩu"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD006_0007",
    "stt": 278,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Phí hải quan đối với hàng hóa nhập khẩu theo quy định hiện hành là:",
    "options": [
      {
        "key": "A",
        "text": "40.000 VND"
      },
      {
        "key": "B",
        "text": "20.000 VND"
      },
      {
        "key": "C",
        "text": "60.000 VND"
      },
      {
        "key": "D",
        "text": "80.000 VND"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD006_0008",
    "stt": 279,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Hàng hóa vận chuyển theo phương thức nào thì người khai hải quan không phải nộp vận tải đơn?",
    "options": [
      {
        "key": "A",
        "text": "Đường bộ"
      },
      {
        "key": "B",
        "text": "Đường biển"
      },
      {
        "key": "C",
        "text": "Đường hàng không"
      },
      {
        "key": "D",
        "text": "Đường sắt"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD006_0009",
    "stt": 280,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Đối với tờ khai luồng xanh của lô hàng nhập khẩu từ Dubai vào khu chế xuất Tân Thuận, doanh nghiệp phải thực hiện:",
    "options": [
      {
        "key": "A",
        "text": "Khai hải quan điện tử"
      },
      {
        "key": "B",
        "text": "Nộp hồ sơ cho cơ quan hải quan"
      },
      {
        "key": "C",
        "text": "Phối hợp kiểm hóa hàng hóa"
      },
      {
        "key": "D",
        "text": "Nộp thuế cho cơ quan có thẩm quyền"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD006_0010",
    "stt": 281,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Thủ tục hải quan là:",
    "options": [
      {
        "key": "A",
        "text": "Toàn bộ công việc mà người khai hải quan và công chức hải quan phải thực hiện để thông quan hàng hóa"
      },
      {
        "key": "B",
        "text": "Toàn bộ công việc mà người khai hải quan, công chức hải quan và các bên liên quan phải thực hiện để thông quan hàng hóa"
      },
      {
        "key": "C",
        "text": "Toàn bộ công việc mà công chức hải quan và các cơ quan nhà nước phải thực hiện để thông quan hàng hóa"
      },
      {
        "key": "D",
        "text": "Các công việc mà người khai hải quan và công chức hải quan phải thực hiện theo quy định của Luật Hải quan đối với hàng hóa, phương tiện vận tải"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD006_0011",
    "stt": 282,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Khi làm thủ tục hải quan, cơ quan hải quan có trách nhiệm:",
    "options": [
      {
        "key": "A",
        "text": "Tiếp nhận hồ sơ và thu thuế, không kiểm tra hàng hóa"
      },
      {
        "key": "B",
        "text": "Kiểm tra hàng hóa nhưng không quyết định thông quan"
      },
      {
        "key": "C",
        "text": "Tiếp nhận hồ sơ, kiểm tra, thu thuế và quyết định thông quan"
      },
      {
        "key": "D",
        "text": "Chỉ xác nhận hoàn thành thủ tục cho phương tiện vận tải"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD006_0012",
    "stt": 283,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Đối tượng phải làm thủ tục hải quan bao gồm:",
    "options": [
      {
        "key": "A",
        "text": "Chỉ hàng hóa xuất khẩu, nhập khẩu"
      },
      {
        "key": "B",
        "text": "Chỉ phương tiện vận tải xuất cảnh, nhập cảnh"
      },
      {
        "key": "C",
        "text": "Hàng hóa, hành lý, vật phẩm và phương tiện vận tải theo quy định"
      },
      {
        "key": "D",
        "text": "Chỉ bưu phẩm và bưu kiện xuất khẩu, nhập khẩu"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD006_0013",
    "stt": 284,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Người khai hải quan có nghĩa vụ:",
    "options": [
      {
        "key": "A",
        "text": "Lưu giữ hồ sơ trong thời hạn 01 năm theo quy định"
      },
      {
        "key": "B",
        "text": "Chỉ bố trí kiểm tra khi hàng hóa thuộc luồng đỏ"
      },
      {
        "key": "C",
        "text": "Lưu giữ hồ sơ, bố trí kiểm tra và thực hiện nghĩa vụ tài chính"
      },
      {
        "key": "D",
        "text": "Chỉ nộp thuế khi có yêu cầu của cơ quan hải quan"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD006_0014",
    "stt": 285,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Người khai hải quan đăng ký nhiều tờ khai với nhiều loại hình khác nhau có thể sử dụng chung một chứng từ chứng nhận xuất xứ hàng hóa cấp cho 01 lô hàng tổng với điều kiện:",
    "options": [
      {
        "key": "A",
        "text": "C/O được cấp chỉ cho 01 dòng hàng"
      },
      {
        "key": "B",
        "text": "Người khai hải quan đăng ký tờ khai tại cùng một thời điểm"
      },
      {
        "key": "C",
        "text": "Người khai hải quan đăng ký tờ khai tại cùng một thời điểm tại cùng 01 Chi cục"
      },
      {
        "key": "D",
        "text": "Chỉ cho hưởng ưu đãi cho hàng hóa thuộc tờ khai đầu tiên"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD006_0015",
    "stt": 286,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Ngày 1/1/2018, Công ty A đăng ký tờ khai nhập khẩu khai báo nợ C/O mẫu D trên tờ khai hải quan. Ngày 1/3/2018, Công ty A nộp bổ sung C/O mẫu D và đăng ký tờ khai bổ sung sau thông quan AMA để được áp dụng thuế suất ưu đãi đặc biệt. Cơ quan hải quan sẽ xử lý C/O như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Không chấp nhận nộp bổ sung C/O vì C/O thiếu khai báo mã HS"
      },
      {
        "key": "B",
        "text": "Tiếp nhận và kiểm tra C/O, áp dụng thuế suất ưu đãi đặc biệt nếu C/O được cấp hợp lệ"
      },
      {
        "key": "C",
        "text": "Không chấp nhận nộp bổ sung C/O vì đã quá thời hạn nộp"
      },
      {
        "key": "D",
        "text": "Áp dụng thuế ưu đãi đặc biệt cho lô hàng vì trước đó doanh nghiệp đã nộp bảo lãnh thuế để nợ C/O"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD006_0016",
    "stt": 287,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Tờ khai hải quan điện tử phân luồng vàng tức là",
    "options": [
      {
        "key": "A",
        "text": "Miễn kiểm tra chi tiết hồ sơ và kiểm tra thực tế hàng hóa."
      },
      {
        "key": "B",
        "text": "Kiểm tra chi tiết hồ sơ và kiểm tra thực tế hàng hóa"
      },
      {
        "key": "C",
        "text": "Kiểm tra chi tiết hồ sơ nhưng không phải kiểm tra thực tế hàng hóa"
      },
      {
        "key": "D",
        "text": "Doanh nghiệp cần đợi 1 ngày theo quy định mới được thông quan."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD006_0017",
    "stt": 288,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Tờ khai hải quan điện tử phân luồng xanh tức là",
    "options": [
      {
        "key": "A",
        "text": "Miễn kiểm tra chi tiết hồ sơ và kiểm tra thực tế hàng hóa"
      },
      {
        "key": "B",
        "text": "Kiểm tra chi tiết hồ sơ và kiểm tra thực tế hàng hóa"
      },
      {
        "key": "C",
        "text": "Kiểm tra chi tiết hồ sơ nhưng không phải kiểm tra thực tế hàng hóa"
      },
      {
        "key": "D",
        "text": "Doanh nghiệp cần đợi 1 ngày theo quy định mới được thông quan."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD006_0018",
    "stt": 289,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Tờ khai hải quan điện tử phân luồng đỏ tức là",
    "options": [
      {
        "key": "A",
        "text": "Miễn kiểm tra chi tiết hồ sơ và kiểm tra thực tế hàng hóa"
      },
      {
        "key": "B",
        "text": "Kiểm tra chi tiết hồ sơ và kiểm tra thực tế hàng hóa"
      },
      {
        "key": "C",
        "text": "Kiểm tra chi tiết hồ sơ nhưng không phải kiểm tra thực tế hàng hóa"
      },
      {
        "key": "D",
        "text": "Doanh nghiệp cần đợi 1 ngày theo quy định mới được thông quan."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD006_0019",
    "stt": 290,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Khi lô hàng được phân vào luồng gì cơ quan hải quan sẽ thực hiện kiểm tra các chứng từ liên quan thuộc hồ sơ hải quan do người khai hải quan nộp, xuất trình hoặc các chứng từ có liên quan trên Cổng thông tin một cửa quốc gia?",
    "options": [
      {
        "key": "A",
        "text": "Xanh và vàng"
      },
      {
        "key": "B",
        "text": "Vàng và đỏ"
      },
      {
        "key": "C",
        "text": "Xanh và đỏ"
      },
      {
        "key": "D",
        "text": "Đỏ và cam"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD006_0020",
    "stt": 291,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Hệ thống cho phép người khai hải quan thực hiện việc khai hải quan điện tử, tiếp nhận thông tin, kết quả phản hồi của cơ quan hải quan trong quá trình thực hiện thủ tục hải quan điện tử gọi là:",
    "options": [
      {
        "key": "A",
        "text": "Hệ thống khai hải quan điện tử"
      },
      {
        "key": "B",
        "text": "Hệ thống hải quan điện tử"
      },
      {
        "key": "C",
        "text": "Hệ thống xử lý dữ liệu điện tử"
      },
      {
        "key": "D",
        "text": "Hệ thống khai và xử lý dữ liệu điện tử"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD006_0021",
    "stt": 292,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Tờ khai hải quan điện tử có giá trị làm thủ tục hải quan:",
    "options": [
      {
        "key": "A",
        "text": "Trong thời hạn 15 ngày kể từ ngày đăng ký tờ khai hải quan"
      },
      {
        "key": "B",
        "text": "Trong thời hạn 15 ngày kể từ ngày cơ quan hải quan tiếp nhận hồ sơ hải quan"
      },
      {
        "key": "C",
        "text": "Trong thời hạn 30 ngày kể từ ngày làm thủ tục hải quan"
      },
      {
        "key": "D",
        "text": "Trong thời hạn 15 ngày kể từ ngày nộp hồ sơ làm thủ tục hải quan"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD006_0022",
    "stt": 293,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Đối với hàng nhập khẩu, không được đăng ký tờ khai hải quan tại địa điểm nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Chi cục HQ cửa khẩu nơi quản lý cảng đích ghi trên vận đơn"
      },
      {
        "key": "B",
        "text": "Chi cục HQ cửa khẩu nơi quản lý địa điểm lưu giữ hàng hóa"
      },
      {
        "key": "C",
        "text": "Chi cục HQ ngoài cửa khẩu nơi doanh nghiệp có cơ sở sản xuất"
      },
      {
        "key": "D",
        "text": "Chi cục HQ ngoài cửa khẩu nơi quản lý cảng đích ghi trên hợp đồng"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD006_0023",
    "stt": 294,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Trường hợp nào sau đây trong hồ sơ hải quan hàng nhập khẩu không phải nộp hoá đơn thương mại?",
    "options": [
      {
        "key": "A",
        "text": "Lô hàng nhập khẩu kinh doanh có khoản giảm giá do mua với số lượng lớn"
      },
      {
        "key": "B",
        "text": "Lô hàng nhập khẩu là hàng mẫu và người mua không phải thanh toán cho người bán"
      },
      {
        "key": "C",
        "text": "Lô hàng nhập khẩu được nhập khẩu từ nước có quan hệ tối huệ quốc với Việt Nam"
      },
      {
        "key": "D",
        "text": "Lô hàng nhập khẩu có các khoản điều chỉnh cộng hoặc trừ khi xác định trị giá tính thuế"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD006_0024",
    "stt": 295,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Theo Luật Hải quan, \"thủ tục hải quan\" được định nghĩa là gì?",
    "options": [
      {
        "key": "A",
        "text": "Hệ thống các quy định về chính sách thuế và quản lý thuế đối với hàng hóa xuất nhập khẩu"
      },
      {
        "key": "B",
        "text": "Các công việc mà người khai hải quan và công chức hải quan phải thực hiện theo quy định của Luật này"
      },
      {
        "key": "C",
        "text": "Các biện pháp nghiệp vụ của cơ quan hải quan nhằm bảo đảm quản lý nhà nước về hải quan"
      },
      {
        "key": "D",
        "text": "Toàn bộ các văn bản quy phạm pháp luật điều chỉnh các hoạt động liên quan đến lĩnh vực hải quan"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD006_0025",
    "stt": 296,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Theo Công ước Kyoto về đơn giản hóa và hài hòa thủ tục hải quan, \"thủ tục hải quan\" được định nghĩa là gì?",
    "options": [
      {
        "key": "A",
        "text": "Toàn bộ các công việc do cơ quan hải quan thực hiện nhằm quản lý hàng hóa tại cửa khẩu"
      },
      {
        "key": "B",
        "text": "Các hoạt động do người có liên quan và cơ quan hải quan thực hiện nhằm đảm bảo tuân thủ pháp luật hải quan"
      },
      {
        "key": "C",
        "text": "Quy trình kiểm tra thực tế hàng hóa và thu thuế đối với các lô hàng xuất khẩu, nhập khẩu"
      },
      {
        "key": "D",
        "text": "Việc các cơ quan quản lý nhà nước cấp phép cho hàng hóa được phép lưu thông qua biên giới"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD006_0026",
    "stt": 297,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Tính hành chính bắt buộc của thủ tục hải quan thể hiện ở điểm nào?",
    "options": [
      {
        "key": "A",
        "text": "Có thể bỏ qua quy trình nếu hàng hóa nhỏ lẻ"
      },
      {
        "key": "B",
        "text": "Mọi tổ chức, cá nhân đều phải tuân thủ đúng quy định"
      },
      {
        "key": "C",
        "text": "Chỉ áp dụng cho doanh nghiệp xuất khẩu lớn"
      },
      {
        "key": "D",
        "text": "Doanh nghiệp được tùy chọn cách làm thủ tục"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD006_0027",
    "stt": 298,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Theo Cục Hải quan, thời gian tối đa để tiếp nhận và đăng ký tờ khai là bao lâu?",
    "options": [
      {
        "key": "A",
        "text": "15 phút"
      },
      {
        "key": "B",
        "text": "30 phút"
      },
      {
        "key": "C",
        "text": "1 giờ"
      },
      {
        "key": "D",
        "text": "24 giờ"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD006_0028",
    "stt": 299,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Một trong các tính chất của thủ tục hải quan là gì?",
    "options": [
      {
        "key": "A",
        "text": "Tính tùy nghi"
      },
      {
        "key": "B",
        "text": "Tính liên tục và trình tự"
      },
      {
        "key": "C",
        "text": "Tính riêng biệt"
      },
      {
        "key": "D",
        "text": "Tính ngẫu nhiên"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD006_0029",
    "stt": 300,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Tính thống nhất trong thủ tục hải quan nhằm mục đích chính là gì?",
    "options": [
      {
        "key": "A",
        "text": "Đảm bảo mỗi địa phương có thể chủ động ban hành các quy định riêng để phù hợp với đặc thù vùng miền"
      },
      {
        "key": "B",
        "text": "Đảm bảo hệ thống văn bản pháp luật và quy trình thực thi được áp dụng đồng bộ từ trung ương đến địa phương"
      },
      {
        "key": "C",
        "text": "Giảm thiểu quyền hạn của chính quyền địa phương trong việc quản lý các hoạt động thương mại biên giới"
      },
      {
        "key": "D",
        "text": "Tạo sự linh hoạt tối đa cho công chức hải quan trong việc ra quyết định đối với từng lô hàng cụ thể"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD006_0030",
    "stt": 301,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Công ty A nhập khẩu mặt hàng giấy in theo loại hình A12, sau khi hàng hóa được thông quan, công ty chuyển vào kinh doanh thương mại, không đưa vào sản xuất. Theo quy định, công ty phải thực hiện như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Khai thay đổi mục đích sử dụng"
      },
      {
        "key": "B",
        "text": "Không phải thay đổi mục đích sử dụng"
      },
      {
        "key": "C",
        "text": "Không được thay đổi mục đích sử dụng"
      },
      {
        "key": "D",
        "text": "Được lựa chọn khai hoặc không khai"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD006_0031",
    "stt": 302,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Nhận định nào đúng về trách nhiệm khai hải quan của người khai hải quan?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ cần khai theo thông tin trên hóa đơn thương mại do người bán cung cấp"
      },
      {
        "key": "B",
        "text": "Chỉ chịu trách nhiệm về tên hàng và số lượng, không chịu trách nhiệm về yếu tố tính thuế"
      },
      {
        "key": "C",
        "text": "Phải khai đầy đủ, chính xác, trung thực và chịu trách nhiệm về nội dung đã khai"
      },
      {
        "key": "D",
        "text": "Được tự điều chỉnh nội dung đã khai sau thông quan mà không cần thực hiện thủ tục khai bổ sung"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD006_0032",
    "stt": 303,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Công ty A làm thủ tục hải quan điện tử cho một lô hàng nhập khẩu. Giấy phép nhập khẩu đã được cấp trên Cổng thông tin một cửa quốc gia. Đối với hóa đơn thương mại và vận đơn thuộc hồ sơ hải quan, Hệ thống chưa tiếp nhận được chỉ tiêu thông tin tương ứng. Cách xử lý nào phù hợp nhất?",
    "options": [
      {
        "key": "A",
        "text": "Không gửi thêm chứng từ nào vì giấy phép đã có trên Cổng một cửa"
      },
      {
        "key": "B",
        "text": "Nộp toàn bộ hồ sơ giấy trực tiếp để thay cho hồ sơ điện tử"
      },
      {
        "key": "C",
        "text": "Khai hồ sơ qua Hệ thống và gửi bản scan có chữ ký số đối với chứng từ còn lại"
      },
      {
        "key": "D",
        "text": "Chỉ khai tờ khai trước, chứng từ kèm theo nộp sau khi hàng thông quan"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD006_0033",
    "stt": 304,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Doanh nghiệp phát hiện sai sót trong khai hải quan sau khi hàng hóa đã được thông quan quá 60 ngày. Cách hiểu nào đúng về việc khai bổ sung?",
    "options": [
      {
        "key": "A",
        "text": "Không được khai bổ sung vì đã quá thời hạn 60 ngày"
      },
      {
        "key": "B",
        "text": "Chỉ được khai bổ sung nếu hàng hóa chưa ra khỏi khu vực giám sát"
      },
      {
        "key": "C",
        "text": "Vẫn thực hiện khai bổ sung và bị xử lý theo quy định nếu có"
      },
      {
        "key": "D",
        "text": "Chỉ được sửa thông tin nếu tờ khai chưa có kết quả phân luồng"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD006_0034",
    "stt": 305,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Trường hợp nào sau đây thuộc khai bổ sung trong thông quan sau khi tờ khai đã có kết quả phân luồng?",
    "options": [
      {
        "key": "A",
        "text": "Khai bổ sung khi phát hiện sai sót sau ngày thông quan"
      },
      {
        "key": "B",
        "text": "Khai bổ sung sau khi có kết quả phân luồng nhưng trước khi thông quan"
      },
      {
        "key": "C",
        "text": "Khai bổ sung sau khi cơ quan hải quan quyết định kiểm tra sau thông quan"
      },
      {
        "key": "D",
        "text": "Khai bổ sung khi đã hoàn thành kiểm tra sau thông quan tại doanh nghiệp"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD006_0035",
    "stt": 306,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Hàng hóa xuất khẩu, nhập khẩu đã được thông quan nhưng vẫn còn trong địa bàn hoạt động hải quan. Nếu phát hiện dấu hiệu vi phạm pháp luật hải quan, chủ thể nào có thẩm quyền quyết định kiểm tra hồ sơ hải quan, kiểm tra thực tế hàng hóa?",
    "options": [
      {
        "key": "A",
        "text": "Công chức hải quan đang giám sát tại khu vực cửa khẩu"
      },
      {
        "key": "B",
        "text": "Chi cục trưởng Chi cục Hải quan khu vực"
      },
      {
        "key": "C",
        "text": "Doanh nghiệp kinh doanh cảng, kho, bãi nơi lưu giữ hàng hóa"
      },
      {
        "key": "D",
        "text": "Người khai hải quan hoặc người vận chuyển hàng hóa"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD006_0036",
    "stt": 307,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Tạm dừng làm thủ tục hải quan đối với hàng hóa xuất khẩu, nhập khẩu được áp dụng trong trường hợp nào?",
    "options": [
      {
        "key": "A",
        "text": "Hàng hóa đủ điều kiện xuất khẩu, nhập khẩu nhưng chưa nộp thuế"
      },
      {
        "key": "B",
        "text": "Có nhầm lẫn về số lượng hàng hóa trong khai báo hải quan"
      },
      {
        "key": "C",
        "text": "Có yêu cầu của chủ thể quyền để bảo vệ quyền sở hữu trí tuệ"
      },
      {
        "key": "D",
        "text": "Doanh nghiệp đề nghị đưa hàng về bảo quản tại kho riêng"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD006_0037",
    "stt": 308,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Trong quá trình làm thủ tục hải quan, kiểm tra hải quan bao gồm những nội dung nào?",
    "options": [
      {
        "key": "A",
        "text": "Kiểm tra hồ sơ hải quan và kiểm tra sau thông quan"
      },
      {
        "key": "B",
        "text": "Kiểm tra hồ sơ hải quan và kiểm tra thực tế hàng hóa"
      },
      {
        "key": "C",
        "text": "Kiểm tra thực tế hàng hóa và kiểm tra trị giá sau thông quan"
      },
      {
        "key": "D",
        "text": "Kiểm tra hồ sơ thuế và kiểm tra tại trụ sở doanh nghiệp"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD006_0038",
    "stt": 309,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Vì sao một số lô hàng xuất khẩu, nhập khẩu có thể không bị kiểm tra thực tế hàng hóa trong quá trình làm thủ tục hải quan?",
    "options": [
      {
        "key": "A",
        "text": "Vì người khai hải quan được tự lựa chọn hình thức kiểm tra"
      },
      {
        "key": "B",
        "text": "Vì kiểm tra thực tế chỉ áp dụng sau khi hàng đã thông quan"
      },
      {
        "key": "C",
        "text": "Vì việc kiểm tra được xác định theo thông tin quản lý rủi ro"
      },
      {
        "key": "D",
        "text": "Vì kiểm tra hồ sơ luôn thay thế hoàn toàn kiểm tra thực tế hàng hóa"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD006_0039",
    "stt": 310,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Trong quy trình xử lý một lô hàng thuộc diện kiểm tra thực tế, trình tự nào sau đây phù hợp trước khi xem xét thông quan?",
    "options": [
      {
        "key": "A",
        "text": "Kiểm tra thực tế hàng hóa → đăng ký hồ sơ → kiểm tra hồ sơ → xử lý kết quả kiểm tra"
      },
      {
        "key": "B",
        "text": "Tiếp nhận, đăng ký hồ sơ → kiểm tra hồ sơ → kiểm tra thực tế hàng hóa → xử lý kết quả kiểm tra"
      },
      {
        "key": "C",
        "text": "Kiểm tra hồ sơ → xử lý kết quả kiểm tra → tiếp nhận hồ sơ → kiểm tra thực tế hàng hóa"
      },
      {
        "key": "D",
        "text": "Xử lý kết quả kiểm tra → kiểm tra thực tế hàng hóa → đăng ký hồ sơ → kiểm tra hồ sơ"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD006_0040",
    "stt": 311,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Sau khi kiểm tra thực tế hàng hóa, thao tác nào cần được thực hiện trước khi quyết định thông quan, giải phóng hàng hoặc đưa hàng về bảo quản?",
    "options": [
      {
        "key": "A",
        "text": "Chuyển hồ sơ sang kiểm tra sau thông quan ngay"
      },
      {
        "key": "B",
        "text": "Cho doanh nghiệp đưa hàng ra khỏi khu vực giám sát trước"
      },
      {
        "key": "C",
        "text": "Ghi kết quả kiểm tra và cập nhật vào Hệ thống"
      },
      {
        "key": "D",
        "text": "Hủy tờ khai nếu hàng hóa chưa được thông quan"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD006_0041",
    "stt": 312,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Hồ sơ hải quan điện tử đối với hàng hóa xuất khẩu theo quy định chung không bao gồm chứng từ nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Tờ khai hàng hóa xuất khẩu"
      },
      {
        "key": "B",
        "text": "Giấy phép xuất khẩu đối với hàng hóa phải có giấy phép xuất khẩu"
      },
      {
        "key": "C",
        "text": "Giấy chứng nhận xuất xứ hàng hóa"
      },
      {
        "key": "D",
        "text": "Chứng từ kiểm tra chuyên ngành đối với hàng hóa thuộc diện kiểm tra chuyên ngành"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD006_0042",
    "stt": 313,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Thời hạn nộp tờ khai hải quan đối với hàng hóa xuất khẩu được xác định như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Sau khi hàng hóa đã tập kết tại địa điểm người khai hải quan thông báo và chậm nhất 04 giờ trước khi phương tiện vận tải xuất cảnh"
      },
      {
        "key": "B",
        "text": "Chậm nhất 30 ngày kể từ ngày hàng hóa đến cửa khẩu xuất"
      },
      {
        "key": "C",
        "text": "Chậm nhất 04 giờ trước khi phương tiện vận tải xuất cảnh đối với hàng hóa xuất khẩu gửi bằng dịch vụ chuyển phát nhanh"
      },
      {
        "key": "D",
        "text": "Chậm nhất 30 giờ trước khi phương tiện vận tải xuất cảnh"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD006_0043",
    "stt": 314,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.1 Thủ tục hải quan",
    "cauHoi": "Theo kết quả phân luồng thông thường, lô hàng nào phải kiểm tra chi tiết hồ sơ hải quan trước khi thông quan nhưng chưa thuộc diện kiểm tra thực tế hàng hóa?",
    "options": [
      {
        "key": "A",
        "text": "Lô hàng được phân vào luồng xanh"
      },
      {
        "key": "B",
        "text": "Lô hàng được phân vào luồng vàng"
      },
      {
        "key": "C",
        "text": "Lô hàng được phân vào luồng đỏ"
      },
      {
        "key": "D",
        "text": "Lô hàng đã được hệ thống tự động thông quan"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD007_0001",
    "stt": 315,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Khi khai bổ sung sau thông quan bằng nghiệp vụ AMA trên tờ khai nhập khẩu, chỉ tiêu nào sau đây KHÔNG được khai bổ sung?",
    "options": [
      {
        "key": "A",
        "text": "Đơn giá hóa đơn"
      },
      {
        "key": "B",
        "text": "Cơ quan hải quan"
      },
      {
        "key": "C",
        "text": "Mô tả hàng hóa"
      },
      {
        "key": "D",
        "text": "Phương thức thanh toán"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD007_0002",
    "stt": 316,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Chỉ tiêu nào sau đây KHÔNG thuộc nhóm chỉ tiêu được khai bổ sung bằng nghiệp vụ AMA trên tờ khai nhập khẩu?",
    "options": [
      {
        "key": "A",
        "text": "Số lượng hàng hóa"
      },
      {
        "key": "B",
        "text": "Trị giá hóa đơn"
      },
      {
        "key": "C",
        "text": "Mã loại hình"
      },
      {
        "key": "D",
        "text": "Nước xuất xứ"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0003",
    "stt": 317,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Trong hệ thống VNACCS, EDC là mã nghiệp vụ:",
    "options": [
      {
        "key": "A",
        "text": "Sửa thông tin tờ khai nhập khẩu"
      },
      {
        "key": "B",
        "text": "Đăng ký hủy thông tin tờ khai"
      },
      {
        "key": "C",
        "text": "Đăng ký mới tờ khai xuất khẩu"
      },
      {
        "key": "D",
        "text": "Sửa thông tin tờ khai xuất khẩu"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0004",
    "stt": 318,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Theo ECUS5/VNACCS, mã loại hình A12 là:",
    "options": [
      {
        "key": "A",
        "text": "Nhập kinh doanh tiêu dùng"
      },
      {
        "key": "B",
        "text": "Nhập kinh doanh sản xuất"
      },
      {
        "key": "C",
        "text": "Xuất kinh doanh"
      },
      {
        "key": "D",
        "text": "Nhập sau khi tạm xuất"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD007_0005",
    "stt": 319,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Theo ECUS5/VNACCS, mã loại hình nào được sử dụng cho xuất kinh doanh?",
    "options": [
      {
        "key": "A",
        "text": "A11"
      },
      {
        "key": "B",
        "text": "A12"
      },
      {
        "key": "C",
        "text": "B11"
      },
      {
        "key": "D",
        "text": "G11"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0006",
    "stt": 320,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Theo ECUS5/VNACCS, mã loại hình E31 là:",
    "options": [
      {
        "key": "A",
        "text": "Xuất sản phẩm sản xuất xuất khẩu"
      },
      {
        "key": "B",
        "text": "Nhập kinh doanh tiêu dùng"
      },
      {
        "key": "C",
        "text": "Nhập nguyên liệu sản xuất xuất khẩu"
      },
      {
        "key": "D",
        "text": "Tái xuất hàng kinh doanh tạm nhập tái xuất"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0007",
    "stt": 321,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Theo ECUS5/VNACCS, mã loại hình nào được sử dụng cho tạm nhập hàng kinh doanh tạm nhập tái xuất?",
    "options": [
      {
        "key": "A",
        "text": "A11"
      },
      {
        "key": "B",
        "text": "B11"
      },
      {
        "key": "C",
        "text": "G11"
      },
      {
        "key": "D",
        "text": "G21"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0008",
    "stt": 322,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Theo ECUS5/VNACCS, mã loại hình G21 là:",
    "options": [
      {
        "key": "A",
        "text": "Tạm nhập hàng kinh doanh tạm nhập tái xuất"
      },
      {
        "key": "B",
        "text": "Tái xuất hàng kinh doanh tạm nhập tái xuất"
      },
      {
        "key": "C",
        "text": "Nhập kinh doanh sản xuất"
      },
      {
        "key": "D",
        "text": "Xuất sản phẩm sản xuất xuất khẩu"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD007_0009",
    "stt": 323,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Theo ECUS5/VNACCS, mã loại hình E42 là:",
    "options": [
      {
        "key": "A",
        "text": "Nhập nguyên liệu sản xuất xuất khẩu"
      },
      {
        "key": "B",
        "text": "Xuất kinh doanh"
      },
      {
        "key": "C",
        "text": "Nhập nguyên liệu của doanh nghiệp chế xuất"
      },
      {
        "key": "D",
        "text": "Xuất khẩu sản phẩm của doanh nghiệp chế xuất"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD007_0010",
    "stt": 324,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Theo ECUS5/VNACCS, mã loại hình A11 là:",
    "options": [
      {
        "key": "A",
        "text": "Nhập sau khi tái xuất"
      },
      {
        "key": "B",
        "text": "Nhập kinh doanh tiêu dùng"
      },
      {
        "key": "C",
        "text": "Xuất sau khi tạm nhập"
      },
      {
        "key": "D",
        "text": "Xuất kinh doanh tiêu dùng"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD007_0011",
    "stt": 325,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Khi doanh nghiệp muốn sửa đổi thông tin tờ khai đã khai báo chính thức nhưng chưa được chấp nhận thông quan trên ECUS5/VNACCS, đâu là nhận định không đúng?",
    "options": [
      {
        "key": "A",
        "text": "Sử dụng nghiệp vụ 5.1 đối với tờ khai luồng Vàng"
      },
      {
        "key": "B",
        "text": "Sử dụng nghiệp vụ 5.2 đối với tờ khai luồng Đỏ"
      },
      {
        "key": "C",
        "text": "Sử dụng nghiệp vụ 5.3 đối với tờ khai luồng Đỏ"
      },
      {
        "key": "D",
        "text": "Sử dụng nghiệp vụ 5.4 đối với tờ khai luồng Xanh"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD007_0012",
    "stt": 326,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Tờ khai hải quan điện tử được khai tối đa … dòng hàng.",
    "options": [
      {
        "key": "A",
        "text": "Không giới hạn"
      },
      {
        "key": "B",
        "text": "52"
      },
      {
        "key": "C",
        "text": "48"
      },
      {
        "key": "D",
        "text": "50"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD007_0013",
    "stt": 327,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Tờ khai hải quan được phân luồng vàng thì mã phân loại kiểm tra là:",
    "options": [
      {
        "key": "A",
        "text": "V"
      },
      {
        "key": "B",
        "text": "3"
      },
      {
        "key": "C",
        "text": "1"
      },
      {
        "key": "D",
        "text": "2"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD007_0014",
    "stt": 328,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Tờ khai hải quan được phân luồng đỏ thì mã phân loại kiểm tra là:",
    "options": [
      {
        "key": "A",
        "text": "R"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "1"
      },
      {
        "key": "D",
        "text": "3"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD007_0015",
    "stt": 329,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Tờ khai hải quan có mã phân loại kiểm tra là 1 tức là phân luồng",
    "options": [
      {
        "key": "A",
        "text": "vàng"
      },
      {
        "key": "B",
        "text": "đỏ"
      },
      {
        "key": "C",
        "text": "1"
      },
      {
        "key": "D",
        "text": "xanh"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD007_0016",
    "stt": 330,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Trước khi cơ quan Hải quan hoàn thành kiểm tra hồ sơ hoặc kiểm tra thực tế hàng hóa, tờ khai hải quan điện tử được sửa đổi, bổ sung trên Hệ thống tối đa … lần.",
    "options": [
      {
        "key": "A",
        "text": "không hạn chế"
      },
      {
        "key": "B",
        "text": "3"
      },
      {
        "key": "C",
        "text": "6"
      },
      {
        "key": "D",
        "text": "9"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD007_0017",
    "stt": 331,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Tờ khai hải quan có số tờ khai là 107949872110 đã được chỉnh sửa, bổ sung … lần.",
    "options": [
      {
        "key": "A",
        "text": "không đủ dữ kiện trả lời"
      },
      {
        "key": "B",
        "text": "1"
      },
      {
        "key": "C",
        "text": "10"
      },
      {
        "key": "D",
        "text": "0"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD007_0018",
    "stt": 332,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Tờ khai hải quan điện tử nào sau đây có số lần sửa đổi, bổ sung là 3?",
    "options": [
      {
        "key": "A",
        "text": "107949872110"
      },
      {
        "key": "B",
        "text": "307949872110"
      },
      {
        "key": "C",
        "text": "107949872113"
      },
      {
        "key": "D",
        "text": "Chưa đủ dữ liệu xác định"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0019",
    "stt": 333,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Tờ khai hải quan điện tử xuất khẩu nào sau đây có số lần sửa đổi, bổ sung là 3?",
    "options": [
      {
        "key": "A",
        "text": "107949872113"
      },
      {
        "key": "B",
        "text": "307949872110"
      },
      {
        "key": "C",
        "text": "307949872113"
      },
      {
        "key": "D",
        "text": "Chưa đủ dữ liệu xác định"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0020",
    "stt": 334,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Tờ khai hải quan điện tử nhập khẩu nào sau đây có số lần sửa đổi, bổ sung là 1?",
    "options": [
      {
        "key": "A",
        "text": "307949872111"
      },
      {
        "key": "B",
        "text": "107949872110"
      },
      {
        "key": "C",
        "text": "107949872111"
      },
      {
        "key": "D",
        "text": "Chưa đủ dữ liệu xác định"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0021",
    "stt": 335,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Tờ khai hải quan điện tử nhập khẩu có thông tin mã loại hình ghi là \"E31 1 [3]\" thì E31 nghĩa là:",
    "options": [
      {
        "key": "A",
        "text": "Nhập nguyên liệu của DNCX từ nội địa"
      },
      {
        "key": "B",
        "text": "Nhập nguyên liệu của DNCX từ nước ngoài"
      },
      {
        "key": "C",
        "text": "Nhập nguyên liệu sản xuất xuất khẩu"
      },
      {
        "key": "D",
        "text": "Nhập nguyên liệu vào kho bảo thuế"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0022",
    "stt": 336,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Tờ khai hải quan điện tử nhập khẩu có thông tin mã loại hình ghi là \"E31 1 [3]\" thì 1 nghĩa là:",
    "options": [
      {
        "key": "A",
        "text": "Đường biển (container)"
      },
      {
        "key": "B",
        "text": "Đường biển (hàng rời, lỏng…)"
      },
      {
        "key": "C",
        "text": "Đường không"
      },
      {
        "key": "D",
        "text": "Đường bộ (xe tải)"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0023",
    "stt": 337,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Tờ khai hải quan điện tử nhập khẩu có thông tin mã loại hình ghi là \"E31 1 [3]\" thì [3] nghĩa là:",
    "options": [
      {
        "key": "A",
        "text": "Tổ chức gửi cho tổ chức"
      },
      {
        "key": "B",
        "text": "Tổ chức gửi cho cá nhân"
      },
      {
        "key": "C",
        "text": "Cá nhân gửi cho tổ chức"
      },
      {
        "key": "D",
        "text": "Cá nhân gửi cho cá nhân"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0024",
    "stt": 338,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Tờ khai hải quan điện tử nhập khẩu có thông tin mã loại hình ghi như thế nào biết hàng hóa vận chuyển bằng đường sắt, nhập kinh doanh tiêu dùng từ tổ chức gửi cho cá nhân.",
    "options": [
      {
        "key": "A",
        "text": "E31 2 [5]"
      },
      {
        "key": "B",
        "text": "B12 3 [1]"
      },
      {
        "key": "C",
        "text": "A11 5 [2]"
      },
      {
        "key": "D",
        "text": "E25 6 [4]"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0025",
    "stt": 339,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Tờ khai hải quan điện tử nhập khẩu có thông tin mã loại hình ghi như thế nào biết hàng hóa vận chuyển bằng đường sông, nhập nguyên liệu để gia công cho thương nhân nước ngoài từ cá nhân gửi cho cá nhân.",
    "options": [
      {
        "key": "A",
        "text": "E31 2 [5]"
      },
      {
        "key": "B",
        "text": "B12 3 [1]"
      },
      {
        "key": "C",
        "text": "A11 5 [2]"
      },
      {
        "key": "D",
        "text": "E21 6 [1]"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD007_0026",
    "stt": 340,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Trong quy trình khai báo trên hệ thống VNACCS/VCIS, khẳng định nào sau đây là đúng về mặt nghiệp vụ?",
    "options": [
      {
        "key": "A",
        "text": "Người khai hải quan chỉ sử dụng chữ ký số khi thực hiện truyền tờ khai chính thức"
      },
      {
        "key": "B",
        "text": "Tên hàng và mã số HS phải được khai báo tại giao diện thông tin chung của tờ khai"
      },
      {
        "key": "C",
        "text": "Hệ thống VNACCS/VCIS chỉ tiếp nhận dữ liệu khai báo trong giờ hành chính của hải quan"
      },
      {
        "key": "D",
        "text": "Tên hàng và mã số HS phải được khai báo chi tiết tại tab danh sách hàng hóa"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD007_0027",
    "stt": 341,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Mệnh đề nào sau đây là sai?",
    "options": [
      {
        "key": "A",
        "text": "Hệ thống VNACCS không cho phép doanh nghiệp đăng ký trước tờ khai hải quan trước khi đăng ký chính thức"
      },
      {
        "key": "B",
        "text": "Người khai hải quan khi khai sai mã loại hình kinh doanh phải huỷ tờ khai hải quan để đăng ký lại tờ khai mới"
      },
      {
        "key": "C",
        "text": "Tờ khai hải quan nhập khẩu có giá trị làm thủ tục trong thời hạn 15 ngày kể từ ngày đăng ký"
      },
      {
        "key": "D",
        "text": "Có thể gọi lại nội dung thông tin tờ khai nhập khẩu IDA để chỉnh sửa trước khi đăng ký chính thức IDC"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD007_0028",
    "stt": 342,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Chọn câu đúng",
    "options": [
      {
        "key": "A",
        "text": "Một tờ khai hải quan được khai tối đa 50 dòng hàng, nếu quá 50 dòng hàng thì người khai hải quan khai trên nhiều tờ khai hải quan"
      },
      {
        "key": "B",
        "text": "Một tờ khai hải quan được khai tối đa 30 dòng hàng, nếu quá 30 dòng hàng thì người khai hải quan khai trên nhiều tờ khai hải quan"
      },
      {
        "key": "C",
        "text": "Một tờ khai hải quan không giới hạn số dòng hàng"
      },
      {
        "key": "D",
        "text": "Một tờ khai hải quan chỉ giới hạn số dòng hàng khi loại hình kinh doanh là loại hình gia công cho thương nhân nước ngoài"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD007_0029",
    "stt": 343,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Lô hàng X do doanh nghiệp nhập khẩu về để bán lại trên thị trường trong nước, khi khai hải quan trên phần mềm khai vào mã loại hình gì?",
    "options": [
      {
        "key": "A",
        "text": "A11"
      },
      {
        "key": "B",
        "text": "A12"
      },
      {
        "key": "C",
        "text": "E41"
      },
      {
        "key": "D",
        "text": "A31"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD007_0030",
    "stt": 344,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Trên phần mềm khai hải quan điện tử ECUS 5-VNACCS, EDC là mã nghiệp vụ gì?",
    "options": [
      {
        "key": "A",
        "text": "Sửa thông tin tờ khai nhập khẩu"
      },
      {
        "key": "B",
        "text": "Đăng ký hủy thông tin tờ khai"
      },
      {
        "key": "C",
        "text": "Đăng ký mới tờ khai xuất khẩu"
      },
      {
        "key": "D",
        "text": "Sửa thông tin tờ khai xuất khẩu"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0031",
    "stt": 345,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Chỉ tiêu nào sau đây không thuộc nhóm chỉ tiêu được khai bổ sung bằng nghiệp vụ AMA trên tờ khai nhập khẩu?",
    "options": [
      {
        "key": "A",
        "text": "Mã số HS"
      },
      {
        "key": "B",
        "text": "Tên người xuất khẩu"
      },
      {
        "key": "C",
        "text": "Tên phương tiện vận chuyển"
      },
      {
        "key": "D",
        "text": "Mã hiệu phương thức vận chuyển"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD007_0032",
    "stt": 346,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Doanh nghiệp nhập khẩu lô hàng gồm mặt hàng A, mặt hàng B và mặt hàng C. Doanh nghiệp xác định hàng hóa nhập khẩu không thuộc diện phải có giấy phép nhập khẩu. Qua kiểm tra thực tế, cơ quan hải quan xác định mặt hàng B thuộc diện phải có giấy phép nhập khẩu. Trong trường hợp này, doanh nghiệp phải thực hiện như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Khai sửa đổi, bổ sung tờ khai hải quan"
      },
      {
        "key": "B",
        "text": "Hủy tờ khai và đăng ký tờ khai mới"
      },
      {
        "key": "C",
        "text": "Bổ sung giấy phép nhập khẩu trước khi thông quan"
      },
      {
        "key": "D",
        "text": "Đề nghị đưa hàng hóa về bảo quản và nộp bổ sung giấy phép"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD007_0033",
    "stt": 347,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Khi doanh nghiệp muốn khai sửa đổi, bổ sung thông tin tờ khai đã khai báo chính thức nhưng chưa được chấp nhận thông quan trên ECUS5/VNACCS thì số lần được phép khai sửa tối đa là:",
    "options": [
      {
        "key": "A",
        "text": "3"
      },
      {
        "key": "B",
        "text": "6"
      },
      {
        "key": "C",
        "text": "9"
      },
      {
        "key": "D",
        "text": "Không giới hạn"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0034",
    "stt": 348,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Khi doanh nghiệp muốn sửa đổi, bổ sung thông tin tờ khai đăng ký trước trên ECUS5/VNACCS, trước khi thực hiện đăng ký tờ khai chính thức, thì số lần được phép khai sửa là:",
    "options": [
      {
        "key": "A",
        "text": "3"
      },
      {
        "key": "B",
        "text": "6"
      },
      {
        "key": "C",
        "text": "9"
      },
      {
        "key": "D",
        "text": "Không giới hạn"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD007_0035",
    "stt": 349,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Mệnh đề nào sau đây đúng về hệ thống VNACCS/VCIS?",
    "options": [
      {
        "key": "A",
        "text": "Các bộ, ngành cấp giấy phép thông qua hệ thống VNACCS"
      },
      {
        "key": "B",
        "text": "VNACCS là hệ thống thông quan hàng hóa tự động của Việt Nam"
      },
      {
        "key": "C",
        "text": "VNACCS là hệ thống cơ sở dữ liệu điện tử phục vụ nghiệp vụ hải quan"
      },
      {
        "key": "D",
        "text": "VCIS là hệ thống tiếp nhận thông tin khai báo trước của doanh nghiệp"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD007_0036",
    "stt": 350,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Mã nghiệp vụ EDC trong hệ thống VNACCS/VCIS dùng để thực hiện nội dung nào?",
    "options": [
      {
        "key": "A",
        "text": "Khai trước thông tin tờ khai hàng nhập khẩu"
      },
      {
        "key": "B",
        "text": "Khai báo chính thức thông tin tờ khai hàng xuất khẩu"
      },
      {
        "key": "C",
        "text": "Khai trước thông tin tờ khai hàng xuất khẩu"
      },
      {
        "key": "D",
        "text": "Khai báo chính thức thông tin tờ khai hàng nhập khẩu"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD007_0037",
    "stt": 351,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Theo ECUS5/VNACCS, mã loại hình A31 là:",
    "options": [
      {
        "key": "A",
        "text": "Nhập kinh doanh tiêu dùng"
      },
      {
        "key": "B",
        "text": "Nhập nguyên liệu sản xuất xuất khẩu"
      },
      {
        "key": "C",
        "text": "Nhập khẩu hàng xuất khẩu bị trả lại"
      },
      {
        "key": "D",
        "text": "Xuất trả hàng nhập khẩu"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0038",
    "stt": 352,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Theo ECUS5/VNACCS, mã loại hình nào được sử dụng cho xuất trả hàng nhập khẩu?",
    "options": [
      {
        "key": "A",
        "text": "B11"
      },
      {
        "key": "B",
        "text": "B13"
      },
      {
        "key": "C",
        "text": "E42"
      },
      {
        "key": "D",
        "text": "G21"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD007_0039",
    "stt": 353,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Theo ECUS5/VNACCS, mã loại hình E11 là:",
    "options": [
      {
        "key": "A",
        "text": "Nhập nguyên liệu của doanh nghiệp chế xuất từ nước ngoài"
      },
      {
        "key": "B",
        "text": "Nhập nguyên liệu sản xuất xuất khẩu"
      },
      {
        "key": "C",
        "text": "Nhập nguyên liệu để gia công cho thương nhân nước ngoài"
      },
      {
        "key": "D",
        "text": "Nhập kinh doanh sản xuất"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD007_0040",
    "stt": 354,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A tạm nhập máy móc, thiết bị để phục vụ dự án có thời hạn, sau đó tái xuất. Khi khai tạm nhập trên ECUS5/VNACCS, mã loại hình phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "G11"
      },
      {
        "key": "B",
        "text": "G21"
      },
      {
        "key": "C",
        "text": "G12"
      },
      {
        "key": "D",
        "text": "A12"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0041",
    "stt": 355,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Theo ECUS5/VNACCS, mã loại hình E52 là:",
    "options": [
      {
        "key": "A",
        "text": "Xuất sản phẩm của doanh nghiệp chế xuất"
      },
      {
        "key": "B",
        "text": "Xuất sản phẩm sản xuất xuất khẩu"
      },
      {
        "key": "C",
        "text": "Xuất sản phẩm gia công cho thương nhân nước ngoài"
      },
      {
        "key": "D",
        "text": "Xuất kinh doanh"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0042",
    "stt": 356,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A vừa nhập xong thông tin tờ khai nhập khẩu trên ECUS5/VNACCS và muốn gửi trước thông tin để hệ thống hải quan cấp số, phản hồi thông tin còn thiếu và tính thuế, nhưng chưa đưa tờ khai vào xử lý thông quan. Công ty A cần thực hiện nghiệp vụ nào?",
    "options": [
      {
        "key": "A",
        "text": "IDB"
      },
      {
        "key": "B",
        "text": "IDA"
      },
      {
        "key": "C",
        "text": "IDC"
      },
      {
        "key": "D",
        "text": "IID"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD007_0043",
    "stt": 357,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A đã khai trước tờ khai nhập khẩu và được hệ thống cấp số. Doanh nghiệp chưa đăng ký chính thức ngay, sau đó quay lại hệ thống để hoàn tất việc đăng ký tờ khai bằng số tờ khai đã được cấp. Mã nghiệp vụ phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "IDA"
      },
      {
        "key": "B",
        "text": "IDB"
      },
      {
        "key": "C",
        "text": "IDC"
      },
      {
        "key": "D",
        "text": "IID"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0044",
    "stt": 358,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A thực hiện loại hình gia công trên ECUS5/VNACCS. Nhận định nào đúng về cách khai báo đối với loại hình này?",
    "options": [
      {
        "key": "A",
        "text": "Các nghiệp vụ gia công đều thực hiện tại menu e-Manifest"
      },
      {
        "key": "B",
        "text": "Chỉ khai tờ khai nhập khẩu, không cần khai tờ khai xuất khẩu"
      },
      {
        "key": "C",
        "text": "Tờ khai xuất nhập khẩu và nghiệp vụ gia công đều thực hiện tại menu Tờ khai vận chuyển"
      },
      {
        "key": "D",
        "text": "Tờ khai xuất nhập khẩu khai theo VNACCS, các nghiệp vụ quản lý gia công thực hiện tại menu Loại hình"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD007_0045",
    "stt": 359,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A đã khai trước tờ khai nhập khẩu. Sau khi kiểm tra thông tin hệ thống trả về, doanh nghiệp thấy số thuế do hệ thống tính chưa phù hợp và muốn chỉnh sửa trước khi đăng ký chính thức. Mã nghiệp vụ phù hợp trên ECUS5/VNACCS là:",
    "options": [
      {
        "key": "A",
        "text": "IDA"
      },
      {
        "key": "B",
        "text": "IDB"
      },
      {
        "key": "C",
        "text": "IDC"
      },
      {
        "key": "D",
        "text": "IID"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD007_0046",
    "stt": 360,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A đã khai trước tờ khai xuất khẩu. Sau khi kiểm tra thông tin hệ thống trả về, doanh nghiệp phát hiện sai một số chỉ tiêu và muốn chỉnh sửa trước khi đăng ký chính thức. Mã nghiệp vụ phù hợp trên ECUS5/VNACCS là:",
    "options": [
      {
        "key": "A",
        "text": "EDA"
      },
      {
        "key": "B",
        "text": "EDB"
      },
      {
        "key": "C",
        "text": "EDC"
      },
      {
        "key": "D",
        "text": "EDD"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD007_0047",
    "stt": 361,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A đã đăng ký tờ khai nhập khẩu nhưng hàng hóa chưa được thông quan. Doanh nghiệp phát hiện một số thông tin cần sửa đổi, bổ sung trong giai đoạn thông quan. Mã nghiệp vụ phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "IDA"
      },
      {
        "key": "B",
        "text": "IDB"
      },
      {
        "key": "C",
        "text": "IDC"
      },
      {
        "key": "D",
        "text": "IDD"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD007_0048",
    "stt": 362,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A đã nhập thông tin tờ khai xuất khẩu trên ECUS5/VNACCS và muốn khai trước thông tin tờ khai trước khi đăng ký chính thức. Mã nghiệp vụ phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "EDB"
      },
      {
        "key": "B",
        "text": "EDA"
      },
      {
        "key": "C",
        "text": "EDC"
      },
      {
        "key": "D",
        "text": "EDD"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD007_0049",
    "stt": 363,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A đã khai báo tờ khai nhập khẩu trên hệ thống. Doanh nghiệp chỉ muốn xem lại thông tin tờ khai đã lưu trên hệ thống Hải quan, không sửa đổi và không đăng ký lại. Mã nghiệp vụ phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "IDA"
      },
      {
        "key": "B",
        "text": "IDB"
      },
      {
        "key": "C",
        "text": "IDC"
      },
      {
        "key": "D",
        "text": "IID"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD007_0050",
    "stt": 364,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Khi lập tờ khai xuất khẩu trên ECUS5/VNACCS, Công ty A cần nhập các thông tin về chứng từ đính kèm, vận đơn, hóa đơn, thuế và bảo lãnh. Theo bố cục tờ khai xuất khẩu, các thông tin này được nhập chủ yếu tại tab nào?",
    "options": [
      {
        "key": "A",
        "text": "Thông tin chung"
      },
      {
        "key": "B",
        "text": "Danh sách hàng"
      },
      {
        "key": "C",
        "text": "Chỉ thị của Hải quan"
      },
      {
        "key": "D",
        "text": "Kết quả xử lý tờ khai"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD007_0051",
    "stt": 365,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A đã kiểm tra thông tin tờ khai xuất khẩu sau bước khai trước và xác nhận dữ liệu chính xác. Để đăng ký chính thức tờ khai xuất khẩu trên hệ thống, mã nghiệp vụ phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "EDA"
      },
      {
        "key": "B",
        "text": "EDB"
      },
      {
        "key": "C",
        "text": "EDC"
      },
      {
        "key": "D",
        "text": "IED"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0052",
    "stt": 366,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Khi lập tờ khai nhập khẩu trên ECUS5/VNACCS, Công ty A muốn nhập thông tin về vận đơn, hóa đơn, giấy phép và tờ khai trị giá. Cách hiểu nào phù hợp với bố cục tờ khai VNACCS?",
    "options": [
      {
        "key": "A",
        "text": "Các chứng từ này phải nhập tại menu e-Manifest"
      },
      {
        "key": "B",
        "text": "Các chứng từ này phải nhập tại menu Tờ khai vận chuyển"
      },
      {
        "key": "C",
        "text": "Các thông tin này được thể hiện rút gọn trên phần thông tin của tờ khai"
      },
      {
        "key": "D",
        "text": "Các thông tin này chỉ được nhập sau khi tờ khai đã thông quan"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0053",
    "stt": 367,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Khi lập tờ khai nhập khẩu trên ECUS5/VNACCS, Công ty A thấy một số chỉ tiêu trên màn hình có màu xám. Doanh nghiệp nên hiểu các chỉ tiêu này như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Là chỉ tiêu bắt buộc phải nhập trước khi ghi tờ khai"
      },
      {
        "key": "B",
        "text": "Là chỉ tiêu chỉ sử dụng riêng cho tờ khai xuất khẩu"
      },
      {
        "key": "C",
        "text": "Là chỉ tiêu do hệ thống trả về hoặc chương trình tự tính"
      },
      {
        "key": "D",
        "text": "Là chỉ tiêu phải khai bổ sung sau khi thông quan"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0054",
    "stt": 368,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A lập tờ khai nhập khẩu và đã nhập mã đơn vị xuất nhập khẩu. Một số thông tin như tên đơn vị, địa chỉ được hệ thống tự trả về. Nhận định nào đúng với đặc điểm của tờ khai VNACCS?",
    "options": [
      {
        "key": "A",
        "text": "Người khai phải xóa thông tin tự trả về và nhập lại thủ công"
      },
      {
        "key": "B",
        "text": "Hệ thống có thể tự trả về một số thông tin còn thiếu từ mã đã khai"
      },
      {
        "key": "C",
        "text": "Các thông tin này chỉ xuất hiện sau khi hàng hóa được thông quan"
      },
      {
        "key": "D",
        "text": "Người khai phải chuyển sang tờ khai giấy để bổ sung thông tin"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD007_0055",
    "stt": 369,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Khi lập tờ khai nhập khẩu trên ECUS5/VNACCS, Công ty A chưa nhập trị giá tính thuế, thuế suất và tiền thuế trên từng dòng hàng. Nhận định nào phù hợp với cơ chế xử lý của hệ thống?",
    "options": [
      {
        "key": "A",
        "text": "Tờ khai chắc chắn bị hủy vì thiếu các chỉ tiêu thuế"
      },
      {
        "key": "B",
        "text": "Người khai phải tự tính và nhập đủ tiền thuế trước khi khai trước"
      },
      {
        "key": "C",
        "text": "Hệ thống có thể trả về trị giá tính thuế, thuế suất và tiền thuế khi khai"
      },
      {
        "key": "D",
        "text": "Doanh nghiệp chỉ được bổ sung các thông tin này sau khi thông quan"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0056",
    "stt": 370,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A lập tờ khai xuất khẩu có 120 dòng hàng trên ECUS5/VNACCS. Theo đặc điểm của tờ khai VNACCS, phần mềm sẽ xử lý phù hợp theo hướng nào?",
    "options": [
      {
        "key": "A",
        "text": "Từ chối khai vì tờ khai xuất khẩu không được có nhiều dòng hàng"
      },
      {
        "key": "B",
        "text": "Chỉ cho khai 50 dòng đầu tiên và bỏ các dòng còn lại"
      },
      {
        "key": "C",
        "text": "Tách thành các tờ khai nhánh phù hợp khi khai"
      },
      {
        "key": "D",
        "text": "Chuyển toàn bộ dòng hàng sang tờ khai nhập khẩu để xử lý"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0057",
    "stt": 371,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A đã đăng ký chính thức tờ khai nhập khẩu nhưng hàng hóa chưa được thông quan. Sau đó, doanh nghiệp phát hiện mã loại hình đã khai không đúng với nghiệp vụ thực tế của lô hàng và đây không phải trường hợp thay đổi mục đích sử dụng. Cách xử lý phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "Gọi lại tờ khai để sửa trực tiếp mã loại hình"
      },
      {
        "key": "B",
        "text": "Khai sửa đổi mã loại hình trong thông quan"
      },
      {
        "key": "C",
        "text": "Đề nghị hủy tờ khai và đăng ký tờ khai mới"
      },
      {
        "key": "D",
        "text": "Chờ sau thông quan rồi khai bổ sung mã loại hình"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0058",
    "stt": 372,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A mới khai trước tờ khai nhập khẩu, chưa đăng ký chính thức. Khi hệ thống trả về thông tin, doanh nghiệp phát hiện sai dữ liệu hóa đơn và cần chỉnh lại trước khi đưa tờ khai vào xử lý thông quan. Cách xử lý phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "Đề nghị hủy tờ khai vì tờ khai đã có số"
      },
      {
        "key": "B",
        "text": "Gọi lại thông tin đã khai để sửa và khai trước lại"
      },
      {
        "key": "C",
        "text": "Khai sửa đổi, bổ sung trong thông quan"
      },
      {
        "key": "D",
        "text": "Chờ hệ thống phân luồng rồi mới được sửa"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD007_0059",
    "stt": 373,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A đã đăng ký tờ khai xuất khẩu, hàng đã đưa vào khu vực giám sát hải quan tại cửa khẩu nhưng sau đó toàn bộ lô hàng thực tế không xuất khẩu. Cách xử lý phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "Khai bổ sung để chuyển tờ khai xuất khẩu thành tờ khai nhập khẩu"
      },
      {
        "key": "B",
        "text": "Giữ nguyên tờ khai và đưa hàng trở lại nội địa"
      },
      {
        "key": "C",
        "text": "Đề nghị hủy tờ khai xuất khẩu theo quy định"
      },
      {
        "key": "D",
        "text": "Sửa mã loại hình để chuyển sang tiêu thụ nội địa"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0060",
    "stt": 374,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A khai trùng thông tin cho cùng một lô hàng nhập khẩu và đã có hai tờ khai được đăng ký trên hệ thống. Cách xử lý phù hợp đối với tờ khai khai trùng là:",
    "options": [
      {
        "key": "A",
        "text": "Gọi lại thông tin để xóa tờ khai đã đăng ký chính thức"
      },
      {
        "key": "B",
        "text": "Khai sửa đổi số tờ khai thành số khác"
      },
      {
        "key": "C",
        "text": "Chờ quá thời hạn lưu bản khai trước để hệ thống tự xóa"
      },
      {
        "key": "D",
        "text": "Đề nghị hủy tờ khai hải quan khai trùng"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD007_0061",
    "stt": 375,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Tờ khai nhập khẩu của Công ty A thuộc diện phải xuất trình hồ sơ để cơ quan hải quan kiểm tra trực tiếp. Quá 15 ngày kể từ ngày đăng ký tờ khai, doanh nghiệp vẫn không xuất trình hồ sơ. Nhận định nào phù hợp nhất?",
    "options": [
      {
        "key": "A",
        "text": "Tờ khai được tự động chuyển sang luồng xanh"
      },
      {
        "key": "B",
        "text": "Doanh nghiệp chỉ cần khai bổ sung sau thông quan"
      },
      {
        "key": "C",
        "text": "Tờ khai thuộc trường hợp hủy theo quy định"
      },
      {
        "key": "D",
        "text": "Hệ thống tự chuyển tờ khai sang khai trước lại"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0062",
    "stt": 376,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A đã đăng ký chính thức tờ khai nhập khẩu, tờ khai được phân luồng vàng và chưa hoàn thành kiểm tra hồ sơ. Doanh nghiệp phát hiện khai sai số lượng hàng hóa, làm thay đổi số tiền thuế phải nộp. Cách xử lý phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "Hủy tờ khai vì mọi sai sót về thuế đều phải khai lại từ đầu"
      },
      {
        "key": "B",
        "text": "Khai sửa đổi, bổ sung trong thông quan trước khi hàng hóa được thông quan"
      },
      {
        "key": "C",
        "text": "Chờ hàng hóa thông quan rồi mới được khai bổ sung sau thông quan"
      },
      {
        "key": "D",
        "text": "Giữ nguyên tờ khai vì số lượng không phải chỉ tiêu nghiệp vụ quan trọng"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD007_0063",
    "stt": 377,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A đã được thông quan lô hàng nhập khẩu. Sau đó, doanh nghiệp phát hiện trị giá hóa đơn đã khai thấp hơn trị giá thực tế phải thanh toán. Cách xử lý phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "Đề nghị hủy tờ khai đã thông quan và đăng ký tờ khai mới"
      },
      {
        "key": "B",
        "text": "Gọi lại thông tin tờ khai để sửa trước đăng ký chính thức"
      },
      {
        "key": "C",
        "text": "Khai sửa đổi trong thông quan vì hàng đã thông quan"
      },
      {
        "key": "D",
        "text": "Khai bổ sung sau thông quan và thực hiện nghĩa vụ thuế phát sinh nếu có"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD007_0064",
    "stt": 378,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A đã đăng ký chính thức tờ khai nhập khẩu. Trước khi hàng hóa được thông quan, doanh nghiệp phát hiện khai sai mã hiệu phương thức vận chuyển, thuộc nhóm chỉ tiêu không được khai sửa đổi trên tờ khai đã đăng ký. Cách xử lý phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "Gọi lại tờ khai để sửa trực tiếp mã hiệu phương thức vận chuyển"
      },
      {
        "key": "B",
        "text": "Khai bổ sung sau thông quan để điều chỉnh mã hiệu phương thức vận chuyển"
      },
      {
        "key": "C",
        "text": "Đề nghị hủy tờ khai và đăng ký tờ khai mới"
      },
      {
        "key": "D",
        "text": "Giữ nguyên tờ khai vì phương thức vận chuyển không ảnh hưởng đến thuế"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0065",
    "stt": 379,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A đã đăng ký chính thức tờ khai xuất khẩu nhưng hàng hóa chưa được thông quan. Khi rà soát hồ sơ, doanh nghiệp phát hiện khai sai đơn giá hóa đơn của một dòng hàng và cần điều chỉnh trước khi cơ quan hải quan hoàn thành kiểm tra. Cách xử lý phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "Hủy tờ khai vì sai đơn giá hóa đơn không được sửa"
      },
      {
        "key": "B",
        "text": "Khai sửa đổi, bổ sung trong thông quan"
      },
      {
        "key": "C",
        "text": "Chờ hàng đã thông quan rồi mới được khai bổ sung"
      },
      {
        "key": "D",
        "text": "Đăng ký tờ khai nhập khẩu mới để thay thế"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD007_0066",
    "stt": 380,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A đã đăng ký tờ khai nhập khẩu và được phân luồng đỏ. Trước khi cơ quan hải quan hoàn thành kiểm tra thực tế hàng hóa, doanh nghiệp phát hiện khai nhầm số lượng trên một dòng hàng nhưng không làm thay đổi mã loại hình, cơ quan hải quan hoặc phương thức vận chuyển. Cách xử lý phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "Hủy tờ khai vì tờ khai luồng đỏ không được sửa"
      },
      {
        "key": "B",
        "text": "Chờ thông quan rồi mới được khai bổ sung"
      },
      {
        "key": "C",
        "text": "Khai sửa đổi, bổ sung trong thông quan"
      },
      {
        "key": "D",
        "text": "Đăng ký thêm một tờ khai mới cho phần chênh lệch"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0067",
    "stt": 381,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A nhập khẩu lô hàng linh kiện điện tử bằng đường hàng không qua sân bay quốc tế Nội Bài. Khi khai tờ khai nhập khẩu trên ECUS5/VNACCS, mã phương thức vận chuyển phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "5"
      },
      {
        "key": "D",
        "text": "6"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD007_0068",
    "stt": 382,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A nhập khẩu một container nguyên chiếc bằng tàu biển qua cảng Hải Phòng. Khi khai tờ khai nhập khẩu trên ECUS5/VNACCS, mã phương thức vận chuyển phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
      },
      {
        "key": "D",
        "text": "5"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD007_0069",
    "stt": 383,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A xuất khẩu lô hàng than rời bằng tàu biển, hàng không đóng trong container. Khi khai tờ khai xuất khẩu trên ECUS5/VNACCS, mã phương thức vận chuyển phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
      },
      {
        "key": "D",
        "text": "6"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0070",
    "stt": 384,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A xuất khẩu hàng qua tuyến đường sắt liên vận quốc tế. Khi khai tờ khai xuất khẩu trên ECUS5/VNACCS, mã phương thức vận chuyển phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "5"
      },
      {
        "key": "D",
        "text": "6"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0071",
    "stt": 385,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A nhập khẩu hàng qua cửa khẩu đường thủy nội địa, hàng được vận chuyển bằng sà lan trên tuyến đường sông. Khi khai tờ khai nhập khẩu trên ECUS5/VNACCS, mã phương thức vận chuyển phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "3"
      },
      {
        "key": "C",
        "text": "5"
      },
      {
        "key": "D",
        "text": "6"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD007_0072",
    "stt": 386,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A nhập khẩu một container lạnh chở thủy sản đông lạnh bằng tàu biển qua cảng Cát Lái. Trên chứng từ có số container và số niêm phong. Khi khai tờ khai nhập khẩu trên ECUS5/VNACCS, mã phương thức vận chuyển phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
      },
      {
        "key": "D",
        "text": "6"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD007_0073",
    "stt": 387,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A xuất khẩu hàng mẫu gấp cho khách hàng tại Nhật Bản bằng đường hàng không qua sân bay quốc tế Tân Sơn Nhất. Khi khai tờ khai xuất khẩu, mã phương thức vận chuyển phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "5"
      },
      {
        "key": "D",
        "text": "6"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD007_0074",
    "stt": 388,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A nhập khẩu lô phân bón dạng rời bằng tàu biển, hàng được dỡ trực tiếp xuống kho cảng, không có số container. Khi khai tờ khai nhập khẩu, mã phương thức vận chuyển phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
      },
      {
        "key": "D",
        "text": "5"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0075",
    "stt": 389,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A khai tờ khai xuất khẩu với mã phương thức vận chuyển là 5. Tình huống nào sau đây phù hợp nhất với mã đã khai?",
    "options": [
      {
        "key": "A",
        "text": "Hàng xuất khẩu bằng máy bay qua sân bay quốc tế"
      },
      {
        "key": "B",
        "text": "Hàng xuất khẩu nguyên container bằng tàu biển"
      },
      {
        "key": "C",
        "text": "Hàng xuất khẩu bằng đường sắt liên vận quốc tế"
      },
      {
        "key": "D",
        "text": "Hàng xuất khẩu bằng sà lan trên tuyến đường sông"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0076",
    "stt": 390,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A nhập khẩu hàng bằng sà lan qua tuyến đường thủy nội địa nhưng lại khai mã phương thức vận chuyển là 2. Cách xử lý phù hợp trước khi đăng ký chính thức là:",
    "options": [
      {
        "key": "A",
        "text": "Giữ nguyên mã 2 vì mọi hình thức vận chuyển đường thủy đều dùng chung một mã"
      },
      {
        "key": "B",
        "text": "Chuyển sang mã 1 vì hàng nhập khẩu không đi bằng đường bộ"
      },
      {
        "key": "C",
        "text": "Chuyển sang mã 3 vì hàng không đi bằng container"
      },
      {
        "key": "D",
        "text": "Chỉnh lại mã 6 cho phù hợp với hình thức vận chuyển thực tế"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD007_0077",
    "stt": 391,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A khai tờ khai nhập khẩu với mã phương thức vận chuyển là 2. Tình huống nào sau đây phù hợp nhất với mã đã khai?",
    "options": [
      {
        "key": "A",
        "text": "Hàng nhập khẩu bằng máy bay qua sân bay quốc tế Nội Bài"
      },
      {
        "key": "B",
        "text": "Hàng nhập khẩu nguyên container bằng tàu biển qua cảng Hải Phòng"
      },
      {
        "key": "C",
        "text": "Hàng nhập khẩu dạng rời bằng tàu biển, không có số container"
      },
      {
        "key": "D",
        "text": "Hàng nhập khẩu bằng sà lan qua tuyến đường sông"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD007_0078",
    "stt": 392,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A khai tờ khai xuất khẩu với mã phương thức vận chuyển là 3. Tình huống nào sau đây phù hợp nhất với mã đã khai?",
    "options": [
      {
        "key": "A",
        "text": "Hàng xuất khẩu bằng máy bay, có số chuyến bay trên chứng từ vận tải"
      },
      {
        "key": "B",
        "text": "Hàng xuất khẩu nguyên container bằng tàu biển, có số container và số seal"
      },
      {
        "key": "C",
        "text": "Hàng xuất khẩu dạng rời bằng tàu biển, không đóng trong container"
      },
      {
        "key": "D",
        "text": "Hàng xuất khẩu bằng đường sắt liên vận quốc tế"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0079",
    "stt": 393,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A nhập khẩu hàng bằng máy bay qua sân bay quốc tế Tân Sơn Nhất nhưng khi lập tờ khai nhập khẩu lại chọn mã phương thức vận chuyển là 2. Cách xử lý phù hợp trước khi đăng ký chính thức là:",
    "options": [
      {
        "key": "A",
        "text": "Giữ mã 2 vì hàng có chứng từ vận tải quốc tế"
      },
      {
        "key": "B",
        "text": "Chỉnh về mã 1 cho phù hợp với hình thức vận chuyển thực tế"
      },
      {
        "key": "C",
        "text": "Chỉnh về mã 3 vì lô hàng không có số container"
      },
      {
        "key": "D",
        "text": "Chỉnh về mã 6 vì hàng không vận chuyển qua cảng biển"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD007_0080",
    "stt": 394,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A xuất khẩu một lô gạo rời bằng tàu biển, hàng được xếp trực tiếp xuống hầm tàu, không đóng container. Doanh nghiệp lại khai mã phương thức vận chuyển là 2. Cách xử lý phù hợp trước khi đăng ký chính thức là:",
    "options": [
      {
        "key": "A",
        "text": "Giữ mã 2 vì hàng vẫn vận chuyển bằng tàu biển"
      },
      {
        "key": "B",
        "text": "Chỉnh về mã 1 vì hàng không có số container"
      },
      {
        "key": "C",
        "text": "Chỉnh về mã 3 cho phù hợp với hàng biển không container"
      },
      {
        "key": "D",
        "text": "Chỉnh về mã 5 vì hàng được xếp trực tiếp lên phương tiện vận tải"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0081",
    "stt": 395,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A nhập khẩu hàng bằng đường sắt liên vận quốc tế. Khi rà soát tờ khai, doanh nghiệp thấy đang khai mã phương thức vận chuyển là 6. Cách xử lý phù hợp trước khi đăng ký chính thức là:",
    "options": [
      {
        "key": "A",
        "text": "Giữ mã 6 vì hàng không vận chuyển bằng đường biển"
      },
      {
        "key": "B",
        "text": "Chỉnh về mã 1 vì hàng nhập khẩu qua cửa khẩu quốc tế"
      },
      {
        "key": "C",
        "text": "Chỉnh về mã 3 vì hàng không đóng trong container"
      },
      {
        "key": "D",
        "text": "Chỉnh về mã 5 cho phù hợp với vận chuyển đường sắt"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD007_0082",
    "stt": 396,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A nhập khẩu hàng bằng sà lan qua cửa khẩu đường thủy nội địa. Trên tờ khai nhập khẩu, doanh nghiệp cần chọn mã phương thức vận chuyển phù hợp với tuyến đường sông. Mã phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "5"
      },
      {
        "key": "D",
        "text": "6"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD007_0083",
    "stt": 397,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A khai tờ khai xuất khẩu với mã phương thức vận chuyển là 1. Tình huống nào sau đây phù hợp nhất với mã đã khai?",
    "options": [
      {
        "key": "A",
        "text": "Hàng xuất khẩu bằng máy bay, chứng từ vận tải có số chuyến bay"
      },
      {
        "key": "B",
        "text": "Hàng xuất khẩu nguyên container bằng tàu biển"
      },
      {
        "key": "C",
        "text": "Hàng xuất khẩu dạng rời bằng tàu biển"
      },
      {
        "key": "D",
        "text": "Hàng xuất khẩu bằng sà lan trên tuyến đường sông"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD007_0084",
    "stt": 398,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A xuất khẩu hàng bằng container lạnh qua cảng biển. Trên chứng từ có số container, số niêm phong và tên tàu. Doanh nghiệp lại khai mã phương thức vận chuyển là 3. Cách xử lý phù hợp trước khi đăng ký chính thức là:",
    "options": [
      {
        "key": "A",
        "text": "Giữ mã 3 vì hàng được vận chuyển bằng tàu biển"
      },
      {
        "key": "B",
        "text": "Chỉnh về mã 1 vì hàng có yêu cầu bảo quản lạnh"
      },
      {
        "key": "C",
        "text": "Chỉnh về mã 2 vì hàng vận chuyển bằng đường biển container"
      },
      {
        "key": "D",
        "text": "Chỉnh về mã 6 vì hàng có số niêm phong"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0085",
    "stt": 399,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A nhập khẩu lô hàng dạng lỏng bằng tàu biển, hàng được bơm trực tiếp từ tàu vào bồn chứa tại cảng, không có số container. Khi lập tờ khai nhập khẩu, mã phương thức vận chuyển phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
      },
      {
        "key": "D",
        "text": "5"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0086",
    "stt": 400,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A nhập khẩu một lô hàng có nhiều hóa đơn cùng chung một vận đơn. Hồ sơ có hóa đơn tổng cho toàn bộ các hóa đơn chi tiết. Khi khai tờ khai nhập khẩu, cách khai nào phù hợp?",
    "options": [
      {
        "key": "A",
        "text": "Khai riêng từng hóa đơn trên nhiều tờ khai"
      },
      {
        "key": "B",
        "text": "Khai một hóa đơn và ghi chú các hóa đơn còn lại"
      },
      {
        "key": "C",
        "text": "Khai theo hóa đơn tổng và khai chi tiết danh sách hóa đơn"
      },
      {
        "key": "D",
        "text": "Bỏ trống tổng trị giá và chỉ khai từng dòng hàng"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0087",
    "stt": 401,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A nhập khẩu hàng theo điều kiện CIF. Hóa đơn tách riêng trị giá hàng theo FOB, phí vận chuyển và phí đóng gói; từng dòng hàng chỉ ghi trị giá theo FOB. Nếu phân bổ phí theo tỷ lệ trị giá, cách khai nào phù hợp?",
    "options": [
      {
        "key": "A",
        "text": "Khai điều kiện CIF và tổng trị giá hóa đơn theo CIF"
      },
      {
        "key": "B",
        "text": "Khai điều kiện FOB và đưa các khoản phí vào ô điều chỉnh"
      },
      {
        "key": "C",
        "text": "Khai điều kiện DDP và cộng phí vào từng dòng hàng"
      },
      {
        "key": "D",
        "text": "Khai điều kiện CFR và chỉ khai riêng phí vận chuyển"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD007_0088",
    "stt": 402,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A nhập khẩu một lô hàng có hóa đơn gồm cả hàng phải trả tiền và hàng FOC. Khi khai phần Detail đối với dòng hàng FOC, cách khai nào phù hợp?",
    "options": [
      {
        "key": "A",
        "text": "Khai trị giá hóa đơn như hàng phải trả tiền"
      },
      {
        "key": "B",
        "text": "Để trống trị giá tính thuế vì không thanh toán"
      },
      {
        "key": "C",
        "text": "Để trống trị giá hóa đơn và nhập trị giá tính thuế"
      },
      {
        "key": "D",
        "text": "Tách dòng hàng FOC sang một tờ khai khác"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0089",
    "stt": 403,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Toàn bộ lô hàng nhập khẩu của Công ty A là hàng khuyến mại, không có hóa đơn thương mại. Lô hàng có phát sinh phí vận tải và bảo hiểm. Cách khai nào phù hợp?",
    "options": [
      {
        "key": "A",
        "text": "Để trống toàn bộ thông tin trị giá của lô hàng"
      },
      {
        "key": "B",
        "text": "Khai tổng phí vận tải, bảo hiểm tại tổng trị giá hóa đơn"
      },
      {
        "key": "C",
        "text": "Khai trị giá tính thuế vào ô trị giá hóa đơn"
      },
      {
        "key": "D",
        "text": "Khai đơn giá tính thuế vào ô đơn giá hóa đơn"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD007_0090",
    "stt": 404,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A khai hóa đơn nhập khẩu bằng USD, trị giá có phần thập phân. Một tờ khai khác khai hóa đơn bằng VND. Nhận định nào đúng về cách nhập trị giá hóa đơn?",
    "options": [
      {
        "key": "A",
        "text": "USD và VND đều được nhập tối đa 04 chữ số thập phân"
      },
      {
        "key": "B",
        "text": "USD và VND đều không được nhập chữ số thập phân"
      },
      {
        "key": "C",
        "text": "USD được nhập thập phân, còn VND không nhập sau dấu phẩy"
      },
      {
        "key": "D",
        "text": "VND được nhập thập phân, còn USD chỉ được nhập số nguyên"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0091",
    "stt": 405,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A nhập khẩu lô hàng có nhiều hóa đơn cùng chung một vận đơn. Hồ sơ có chứng từ thay thế hóa đơn tổng hợp cho toàn bộ lô hàng. Trước khi đăng ký tờ khai, doanh nghiệp cần khai chi tiết danh sách hóa đơn bằng nghiệp vụ nào?",
    "options": [
      {
        "key": "A",
        "text": "AMA"
      },
      {
        "key": "B",
        "text": "IDD"
      },
      {
        "key": "C",
        "text": "HYS"
      },
      {
        "key": "D",
        "text": "IID"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0092",
    "stt": 406,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A nhập khẩu hàng theo điều kiện DAP. Hóa đơn tách riêng trị giá hàng theo EXW, phí vận chuyển và phí đóng gói; từng dòng hàng chỉ ghi trị giá theo EXW. Nếu phân bổ phí theo tỷ lệ trị giá, ô \"Điều kiện giao hàng\" nên khai là:",
    "options": [
      {
        "key": "A",
        "text": "EXW"
      },
      {
        "key": "B",
        "text": "DAP"
      },
      {
        "key": "C",
        "text": "CIF"
      },
      {
        "key": "D",
        "text": "DDP"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD007_0093",
    "stt": 407,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A nhập khẩu hàng từ kho ngoại quan vào nội địa. Điều kiện giao hàng thuộc nhóm F. Khi khai tờ khai nhập khẩu, ô \"Điều kiện giao hàng\" cần khai là:",
    "options": [
      {
        "key": "A",
        "text": "FOB"
      },
      {
        "key": "B",
        "text": "FCA"
      },
      {
        "key": "C",
        "text": "CIF"
      },
      {
        "key": "D",
        "text": "EXW"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0094",
    "stt": 408,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A nhập khẩu lô hàng có hóa đơn gồm hàng phải trả tiền và hàng khuyến mại. Đối với dòng hàng khuyến mại, chỉ tiêu nào vẫn phải nhập để phục vụ tính thuế?",
    "options": [
      {
        "key": "A",
        "text": "Đơn giá hóa đơn"
      },
      {
        "key": "B",
        "text": "Trị giá hóa đơn"
      },
      {
        "key": "C",
        "text": "Trị giá tính thuế"
      },
      {
        "key": "D",
        "text": "Tổng hệ số phân bổ trị giá"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0095",
    "stt": 409,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A nhập khẩu toàn bộ lô hàng là hàng FOC, không có hóa đơn thương mại. Nếu hàng thuộc đối tượng không chịu thuế nhập khẩu, cách khai thuế nào phù hợp?",
    "options": [
      {
        "key": "A",
        "text": "Chọn B30, để trống thuế suất và mã thuế"
      },
      {
        "key": "B",
        "text": "Chọn B30, nhập 0% và mã không chịu thuế"
      },
      {
        "key": "C",
        "text": "Không chọn mã biểu thuế vì không phải trả tiền"
      },
      {
        "key": "D",
        "text": "Nhập trị giá hóa đơn rồi chọn mã miễn thuế"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD007_0096",
    "stt": 410,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A nhập khẩu lô hàng có hóa đơn thương mại do người bán phát hành kèm theo hồ sơ hải quan. Khi khai chỉ tiêu \"Phân loại hình thức hóa đơn\", mã phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "A"
      },
      {
        "key": "B",
        "text": "B"
      },
      {
        "key": "C",
        "text": "D"
      },
      {
        "key": "D",
        "text": "Không khai chỉ tiêu này"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD007_0097",
    "stt": 411,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A nhập khẩu lô hàng không có hóa đơn thương mại, hồ sơ sử dụng chứng từ thay thế hóa đơn theo quy định. Khi khai chỉ tiêu \"Phân loại hình thức hóa đơn\", mã phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "A"
      },
      {
        "key": "B",
        "text": "B"
      },
      {
        "key": "C",
        "text": "D"
      },
      {
        "key": "D",
        "text": "Không khai chỉ tiêu này"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD007_0098",
    "stt": 412,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A sử dụng hóa đơn điện tử và đã đăng ký hóa đơn điện tử trên VNACCS. Khi khai chỉ tiêu \"Phân loại hình thức hóa đơn\", mã phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "A"
      },
      {
        "key": "B",
        "text": "B"
      },
      {
        "key": "C",
        "text": "D"
      },
      {
        "key": "D",
        "text": "Không khai chỉ tiêu này"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0099",
    "stt": 413,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A lập bảng kê hóa đơn theo mẫu số 02/BKHĐ/GSQL Phụ lục V cho lô hàng nhập khẩu. Khi khai chỉ tiêu \"Phân loại hình thức hóa đơn\", mã phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "A"
      },
      {
        "key": "B",
        "text": "B"
      },
      {
        "key": "C",
        "text": "D"
      },
      {
        "key": "D",
        "text": "Không khai chỉ tiêu này"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD007_0100",
    "stt": 414,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A có chứng từ thay thế hóa đơn thương mại cho lô hàng nhập khẩu. Nhận định nào đúng về mã phân loại hình thức hóa đơn?",
    "options": [
      {
        "key": "A",
        "text": "Khai mã A như hóa đơn thương mại"
      },
      {
        "key": "B",
        "text": "Khai mã B như chứng từ thay thế hóa đơn"
      },
      {
        "key": "C",
        "text": "Khai mã D như hóa đơn điện tử VNACCS"
      },
      {
        "key": "D",
        "text": "Không khai vì không có hóa đơn thương mại"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD007_0101",
    "stt": 415,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A nhập khẩu lô hàng có hóa đơn ghi toàn bộ hàng hóa phải trả tiền cho người bán. Khi khai \"Mã phân loại giá hóa đơn\", mã phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "A"
      },
      {
        "key": "B",
        "text": "B"
      },
      {
        "key": "C",
        "text": "C"
      },
      {
        "key": "D",
        "text": "D"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD007_0102",
    "stt": 416,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A nhập khẩu lô hàng mẫu không phải trả tiền, hóa đơn thể hiện hàng FOC. Khi khai \"Mã phân loại giá hóa đơn\", mã phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "A"
      },
      {
        "key": "B",
        "text": "B"
      },
      {
        "key": "C",
        "text": "C"
      },
      {
        "key": "D",
        "text": "D"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD007_0103",
    "stt": 417,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A nhập khẩu một lô hàng trên cùng hóa đơn, trong đó có hàng phải trả tiền và hàng FOC. Khi khai \"Mã phân loại giá hóa đơn\", mã phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "A"
      },
      {
        "key": "B",
        "text": "B"
      },
      {
        "key": "C",
        "text": "C"
      },
      {
        "key": "D",
        "text": "D"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD007_0104",
    "stt": 418,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A nhập khẩu lô hàng không có hóa đơn thương mại và thuộc trường hợp phải dùng chứng từ thay thế. Khi khai \"Mã phân loại giá hóa đơn\", mã phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "A"
      },
      {
        "key": "B",
        "text": "B"
      },
      {
        "key": "C",
        "text": "C"
      },
      {
        "key": "D",
        "text": "D"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD007_0105",
    "stt": 419,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.2 ECUS",
    "cauHoi": "Công ty A nhập khẩu lô hàng gồm một số dòng hàng phải trả tiền và một số dòng hàng khuyến mại không phải trả tiền trên cùng hóa đơn. Cách chọn \"Mã phân loại giá hóa đơn\" nào phù hợp?",
    "options": [
      {
        "key": "A",
        "text": "Chọn A vì hóa đơn có hàng phải trả tiền"
      },
      {
        "key": "B",
        "text": "Chọn B vì hóa đơn có hàng khuyến mại"
      },
      {
        "key": "C",
        "text": "Chọn C vì hóa đơn gồm cả hai loại hàng"
      },
      {
        "key": "D",
        "text": "Chọn D vì hóa đơn có nhiều dòng hàng"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD008_0001",
    "stt": 420,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Xác định trọng điểm trong quản lý hoạt động xuất nhập khẩu?",
    "options": [
      {
        "key": "A",
        "text": "Là việc tổng hợp, đối chiếu kết quả xác định rủi ro"
      },
      {
        "key": "B",
        "text": "Là việc đối chiếu kết quả phân tích rủi ro với các chỉ số tiêu chí đánh giá tuân thủ để phân loại mức độ tuân thủ pháp luật"
      },
      {
        "key": "C",
        "text": "Là việc đối chiếu, tổng hợp kết quả phân tích rủi ro với các chỉ số đánh giá rủi ro để phân loại mức độ rủi ro"
      },
      {
        "key": "D",
        "text": "Là việc sử dụng kết quả đánh giá tuân thủ, đánh giá rủi ro để quyết định áp dụng các biện pháp kiểm soát rủi ro"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD008_0002",
    "stt": 421,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Cơ quan hải quan thực hiện đánh giá tuân thủ đối với đối tượng nào dưới đây?",
    "options": [
      {
        "key": "A",
        "text": "Cá nhân là đối tác kinh doanh góp vốn nước ngoài"
      },
      {
        "key": "B",
        "text": "Doanh nghiệp kinh doanh dịch vụ giám định"
      },
      {
        "key": "C",
        "text": "Tổ chức là đối tác kinh doanh góp vốn nước ngoài"
      },
      {
        "key": "D",
        "text": "Doanh nghiệp kinh doanh cảng, kho, bãi"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD008_0003",
    "stt": 422,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Cơ quan nào ban hành chỉ số tiêu chí quản lý rủi ro trong hoạt động nghiệp vụ hải quan?",
    "options": [
      {
        "key": "A",
        "text": "Bộ Tài chính"
      },
      {
        "key": "B",
        "text": "Cục Quản lý rủi ro"
      },
      {
        "key": "C",
        "text": "Cục Hải quan tỉnh, thành phố"
      },
      {
        "key": "D",
        "text": "Tổng cục Hải quan"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD008_0004",
    "stt": 423,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Cơ quan hải quan quyết định kiểm tra, giám sát hải quan đối với hàng hóa, phương tiện vận tải dựa trên …",
    "options": [
      {
        "key": "A",
        "text": "Xác suất ngẫu nhiên"
      },
      {
        "key": "B",
        "text": "Thông tin vi phạm"
      },
      {
        "key": "C",
        "text": "Dấu hiệu rủi ro"
      },
      {
        "key": "D",
        "text": "Áp dụng quản lý rủi ro"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD008_0005",
    "stt": 424,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Dấu hiệu vi phạm trong quản lý hoạt động xuất nhập khẩu?",
    "options": [
      {
        "key": "A",
        "text": "Là dấu hiệu rủi ro trong quản lý hoạt động xuất nhập khẩu"
      },
      {
        "key": "B",
        "text": "Là đối tượng rủi ro trong quản lý hoạt động xuất nhập khẩu"
      },
      {
        "key": "C",
        "text": "Là thông tin về phương thức, thủ đoạn vi phạm trong quản lý hoạt động xuất nhập khẩu"
      },
      {
        "key": "D",
        "text": "Là thông tin có giá trị nhận định sự diễn ra hành vi vi phạm trong quản lý hoạt động xuất nhập khẩu"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD008_0006",
    "stt": 425,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Xác định trọng điểm trong quản lý hoạt động xuất nhập khẩu?",
    "options": [
      {
        "key": "A",
        "text": "Là việc tổng hợp, đối chiếu kết quả xác định rủi ro"
      },
      {
        "key": "B",
        "text": "Là việc đối chiếu kết quả phân tích rủi ro với các chỉ số tiêu chí đánh giá tuân thủ để phân loại mức độ tuân thủ pháp luật"
      },
      {
        "key": "C",
        "text": "Là việc đối chiếu, tổng hợp kết quả phân tích rủi ro với các chỉ số đánh giá rủi ro để phân loại mức độ rủi ro"
      },
      {
        "key": "D",
        "text": "Là việc sử dụng kết quả đánh giá tuân thủ, đánh giá rủi ro để quyết định áp dụng các biện pháp kiểm soát rủi ro"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD008_0007",
    "stt": 426,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Cục Hải quan nhận được phản ánh của Chi Cục Hải quan A về việc doanh nghiệp X đã hoàn thành thủ tục đối với tờ khai đầu tiên của doanh nghiệp lúc 9h sáng. Tuy vậy, đến 17h cùng ngày trên Hệ thống chưa có thông tin đánh giá tuân thủ của doanh nghiệp này. Anh (chị) trả lời như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Do Hệ thống bị lỗi"
      },
      {
        "key": "B",
        "text": "Tiếp tục theo dõi"
      },
      {
        "key": "C",
        "text": "Do doanh nghiệp chưa thông báo với cơ quan hải quan"
      },
      {
        "key": "D",
        "text": "Do chưa đến thời điểm Hệ thống đánh giá tuân thủ"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD008_0008",
    "stt": 427,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Việc xác định kết quả đánh giá tuân thủ đối với người khai hải quan trong trường hợp hệ thống gặp sự cố?",
    "options": [
      {
        "key": "A",
        "text": "Theo kết quả đánh giá thủ công của ngày hệ thống gặp sự cố"
      },
      {
        "key": "B",
        "text": "Doanh nghiệp được phân loại Mức 4"
      },
      {
        "key": "C",
        "text": "Doanh nghiệp được phân loại Mức 3"
      },
      {
        "key": "D",
        "text": "Theo kết quả ngày hôm trước liền kề với ngày xảy ra sự cố"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD008_0009",
    "stt": 428,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Quản lý rủi ro là việc cơ quan hải quan áp dụng các biện pháp, quy trình nghiệp vụ nhằm mục đích gì?",
    "options": [
      {
        "key": "A",
        "text": "Xác định, đánh giá và phân loại mức độ rủi ro đối với người khai hải quan"
      },
      {
        "key": "B",
        "text": "Làm cơ sở bố trí nguồn lực hợp lý để thực hiện kiểm tra và giám sát hải quan"
      },
      {
        "key": "C",
        "text": "Xác định các nguy cơ vi phạm pháp luật hải quan để thực hiện xử phạt hành chính"
      },
      {
        "key": "D",
        "text": "Xác định, đánh giá rủi ro để áp dụng biện pháp kiểm tra, giám sát phù hợp"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD008_0010",
    "stt": 429,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Người khai hải quan rủi ro cao được xếp vào hạng nào trong phân loại mức độ rủi ro?",
    "options": [
      {
        "key": "A",
        "text": "Hạng 3"
      },
      {
        "key": "B",
        "text": "Hạng 4"
      },
      {
        "key": "C",
        "text": "Hạng 5"
      },
      {
        "key": "D",
        "text": "Hạng 6"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD008_0011",
    "stt": 430,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Nhận định nào đúng về Hạng 1 trong phân loại mức độ rủi ro của người khai hải quan?",
    "options": [
      {
        "key": "A",
        "text": "Hạng 1 áp dụng đối với doanh nghiệp ưu tiên theo quy định"
      },
      {
        "key": "B",
        "text": "Hạng 1 áp dụng đối với người khai hải quan rủi ro rất thấp"
      },
      {
        "key": "C",
        "text": "Hạng 1 áp dụng đối với người khai hải quan rủi ro thấp"
      },
      {
        "key": "D",
        "text": "Hạng 1 áp dụng đối với người khai hải quan rủi ro trung bình"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD008_0012",
    "stt": 431,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Điểm khác nhau cơ bản giữa Hạng 7 và Hạng 8 là gì?",
    "options": [
      {
        "key": "A",
        "text": "Hạng 7 có hoạt động xuất nhập khẩu, còn Hạng 8 không có hoạt động xuất nhập khẩu"
      },
      {
        "key": "B",
        "text": "Hạng 7 là người khai hải quan rủi ro thấp, còn Hạng 8 là rủi ro cao"
      },
      {
        "key": "C",
        "text": "Hạng 7 chưa từng bị xử lý vi phạm, còn Hạng 8 đã từng bị xử lý vi phạm nhưng không thuộc nhóm Hạng 9"
      },
      {
        "key": "D",
        "text": "Hạng 7 áp dụng cho doanh nghiệp ưu tiên, còn Hạng 8 áp dụng cho người khai hải quan rủi ro rất cao"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD008_0013",
    "stt": 432,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Công ty A không có hoạt động xuất khẩu, nhập khẩu hàng hóa trong 365 ngày trở về trước tính từ ngày đánh giá. Công ty A cũng chưa từng bị cơ quan hải quan xử phạt về hành vi vi phạm trong lĩnh vực hải quan hoặc lĩnh vực khác. Công ty A được xếp vào hạng nào?",
    "options": [
      {
        "key": "A",
        "text": "Hạng 4"
      },
      {
        "key": "B",
        "text": "Hạng 6"
      },
      {
        "key": "C",
        "text": "Hạng 7"
      },
      {
        "key": "D",
        "text": "Hạng 8"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD008_0014",
    "stt": 433,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Công ty B không có hoạt động xuất khẩu, nhập khẩu hàng hóa trong 365 ngày trở về trước tính từ ngày đánh giá. Trước đó, Công ty B đã từng bị cơ quan hải quan xử phạt vi phạm, nhưng hành vi này không thuộc nhóm hành vi quy định đối với Hạng 9. Công ty B được xếp vào hạng nào?",
    "options": [
      {
        "key": "A",
        "text": "Hạng 6"
      },
      {
        "key": "B",
        "text": "Hạng 7"
      },
      {
        "key": "C",
        "text": "Hạng 8"
      },
      {
        "key": "D",
        "text": "Hạng 9"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD008_0015",
    "stt": 434,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Công ty C không có hoạt động xuất khẩu, nhập khẩu hàng hóa trong 365 ngày trở về trước tính từ ngày đánh giá. Công ty C đã từng bị xử lý vi phạm thuộc một trong các hành vi quy định tại Mục I, Mục II Phụ lục VI ban hành kèm theo Thông tư 06/2024/TT-BTC. Công ty C được xếp vào hạng nào?",
    "options": [
      {
        "key": "A",
        "text": "Hạng 6"
      },
      {
        "key": "B",
        "text": "Hạng 7"
      },
      {
        "key": "C",
        "text": "Hạng 8"
      },
      {
        "key": "D",
        "text": "Hạng 9"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD008_0016",
    "stt": 435,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Vì sao một người khai hải quan không có hoạt động xuất khẩu, nhập khẩu trong 365 ngày trở về trước tính từ ngày đánh giá chưa thể tự động xếp vào Hạng 7?",
    "options": [
      {
        "key": "A",
        "text": "Vì Hạng 7 chỉ áp dụng cho doanh nghiệp ưu tiên"
      },
      {
        "key": "B",
        "text": "Vì Hạng 7 chỉ áp dụng cho người khai hải quan rủi ro rất thấp"
      },
      {
        "key": "C",
        "text": "Vì còn phải xem người khai hải quan đã từng bị xử lý vi phạm hay chưa"
      },
      {
        "key": "D",
        "text": "Vì người không có hoạt động xuất nhập khẩu luôn được xếp vào Hạng 9"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD008_0017",
    "stt": 436,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Công ty D không có hoạt động xuất khẩu, nhập khẩu hàng hóa trong 365 ngày trở về trước tính từ ngày đánh giá. Công ty D đã từng bị cơ quan hải quan xử phạt vi phạm trong lĩnh vực hải quan, nhưng hành vi vi phạm không thuộc Mục I, Mục II Phụ lục VI ban hành kèm theo Thông tư 06/2024/TT-BTC. Công ty D được phân loại vào hạng nào?",
    "options": [
      {
        "key": "A",
        "text": "Hạng 5"
      },
      {
        "key": "B",
        "text": "Hạng 7"
      },
      {
        "key": "C",
        "text": "Hạng 8"
      },
      {
        "key": "D",
        "text": "Hạng 9"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD008_0018",
    "stt": 437,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Công ty E không có hoạt động xuất khẩu, nhập khẩu hàng hóa trong 365 ngày trở về trước tính từ ngày đánh giá. Trước đó, Công ty E từng bị xử lý vi phạm thuộc một hành vi quy định tại Mục I Phụ lục VI ban hành kèm theo Thông tư 06/2024/TT-BTC. Nhận định nào đúng về việc phân loại Công ty E?",
    "options": [
      {
        "key": "A",
        "text": "Công ty E thuộc Hạng 7 vì không phát sinh hoạt động trong 365 ngày"
      },
      {
        "key": "B",
        "text": "Công ty E thuộc Hạng 8 vì đã từng bị xử lý vi phạm"
      },
      {
        "key": "C",
        "text": "Công ty E thuộc Hạng 6 vì đây là người khai hải quan rủi ro rất cao"
      },
      {
        "key": "D",
        "text": "Công ty E thuộc Hạng 9 vì vi phạm thuộc nhóm hành vi được quy định riêng"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD008_0019",
    "stt": 438,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Công ty F không có hoạt động xuất khẩu, nhập khẩu hàng hóa trong 365 ngày trở về trước tính từ ngày đánh giá. Công ty F đã từng bị cơ quan hải quan xử phạt một hành vi vi phạm thông thường. Công ty F không thuộc trường hợp vi phạm quy định tại Mục I, Mục II Phụ lục VI ban hành kèm theo Thông tư 06/2024/TT-BTC. Cách phân loại nào phù hợp nhất?",
    "options": [
      {
        "key": "A",
        "text": "Xếp Hạng 7 vì không có hoạt động xuất nhập khẩu trong 365 ngày"
      },
      {
        "key": "B",
        "text": "Xếp Hạng 9 vì đã từng bị cơ quan hải quan xử phạt"
      },
      {
        "key": "C",
        "text": "Xếp Hạng 8 vì có vi phạm nhưng không thuộc nhóm hành vi của Hạng 9"
      },
      {
        "key": "D",
        "text": "Xếp Hạng 6 vì mọi trường hợp đã từng vi phạm đều là rủi ro rất cao"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD008_0020",
    "stt": 439,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Công ty A khai, nộp hồ sơ hải quan quá thời hạn quy định đối với lô hàng nhập khẩu, nhưng chưa thuộc các trường hợp bị xử phạt ở mức cao hơn tại Điều 8. Mức phạt tiền phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "Từ 500.000 đồng đến 1.000.000 đồng"
      },
      {
        "key": "B",
        "text": "Từ 1.000.000 đồng đến 2.000.000 đồng"
      },
      {
        "key": "C",
        "text": "Từ 2.000.000 đồng đến 5.000.000 đồng"
      },
      {
        "key": "D",
        "text": "Từ 5.000.000 đồng đến 10.000.000 đồng"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD008_0021",
    "stt": 440,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Công ty A khai sửa đổi, bổ sung thông tin số hiệu container của lô hàng xuất khẩu quá thời hạn quy định. Mức phạt tiền phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "Từ 1.000.000 đồng đến 2.000.000 đồng"
      },
      {
        "key": "B",
        "text": "Từ 500.000 đồng đến 1.000.000 đồng"
      },
      {
        "key": "C",
        "text": "Từ 2.000.000 đồng đến 5.000.000 đồng"
      },
      {
        "key": "D",
        "text": "Từ 5.000.000 đồng đến 10.000.000 đồng"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD008_0022",
    "stt": 441,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Công ty A khai bổ sung trị giá hải quan quá thời hạn quy định đối với trường hợp hàng hóa chưa có giá chính thức tại thời điểm đăng ký tờ khai. Mức phạt tiền phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "Từ 2.000.000 đồng đến 5.000.000 đồng"
      },
      {
        "key": "B",
        "text": "Từ 1.000.000 đồng đến 2.000.000 đồng"
      },
      {
        "key": "C",
        "text": "Từ 500.000 đồng đến 1.000.000 đồng"
      },
      {
        "key": "D",
        "text": "Từ 5.000.000 đồng đến 10.000.000 đồng"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD008_0023",
    "stt": 442,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Công ty A đã đăng ký thời hạn tái xuất, tái nhập đối với lô hàng nhưng không thực hiện đúng thời hạn đã đăng ký với cơ quan hải quan. Trường hợp này chưa thuộc nhóm kinh doanh tạm nhập tái xuất. Mức phạt tiền phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "Từ 500.000 đồng đến 1.000.000 đồng"
      },
      {
        "key": "B",
        "text": "Từ 1.000.000 đồng đến 2.000.000 đồng"
      },
      {
        "key": "C",
        "text": "Từ 2.000.000 đồng đến 5.000.000 đồng"
      },
      {
        "key": "D",
        "text": "Từ 5.000.000 đồng đến 10.000.000 đồng"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD008_0024",
    "stt": 443,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Công ty A kinh doanh tạm nhập tái xuất nhưng không tái xuất hàng hóa đúng thời hạn quy định. Mức phạt tiền phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "Từ 1.000.000 đồng đến 2.000.000 đồng"
      },
      {
        "key": "B",
        "text": "Từ 2.000.000 đồng đến 5.000.000 đồng"
      },
      {
        "key": "C",
        "text": "Từ 5.000.000 đồng đến 10.000.000 đồng"
      },
      {
        "key": "D",
        "text": "Từ 10.000.000 đồng đến 20.000.000 đồng"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD008_0025",
    "stt": 444,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Trong các hành vi sau, hành vi nào thuộc cùng khung phạt với việc khai bổ sung trị giá hải quan quá thời hạn đối với hàng hóa chưa có giá chính thức?",
    "options": [
      {
        "key": "A",
        "text": "Không tái xuất hàng kinh doanh tạm nhập tái xuất đúng hạn"
      },
      {
        "key": "B",
        "text": "Nộp hồ sơ hải quan quá thời hạn quy định"
      },
      {
        "key": "C",
        "text": "Khai sửa đổi số hiệu container quá thời hạn"
      },
      {
        "key": "D",
        "text": "Không xử lý nguyên liệu dư thừa đúng thời hạn"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD008_0026",
    "stt": 445,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Công ty A thực hiện hai hành vi: nộp hồ sơ hải quan quá hạn và khai sửa đổi số hiệu container quá hạn. Nhận định nào đúng về khung phạt áp dụng theo Điều 8?",
    "options": [
      {
        "key": "A",
        "text": "Hai hành vi cùng thuộc khung 500.000-1.000.000 đồng"
      },
      {
        "key": "B",
        "text": "Hai hành vi cùng thuộc khung 1.000.000-2.000.000 đồng"
      },
      {
        "key": "C",
        "text": "Nộp hồ sơ quá hạn bị phạt cao hơn khai sửa container"
      },
      {
        "key": "D",
        "text": "Khai sửa container bị phạt cao hơn nộp hồ sơ quá hạn"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD008_0027",
    "stt": 446,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Công ty A có lô hàng nhập khẩu chưa có giá chính thức tại thời điểm đăng ký tờ khai. Doanh nghiệp khai bổ sung trị giá sau thời hạn quy định. Hành vi này được xếp cùng nhóm mức phạt với trường hợp nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Không tái xuất hàng hóa đúng thời hạn"
      },
      {
        "key": "B",
        "text": "Không xử lý hàng hóa miễn thuế đúng hạn"
      },
      {
        "key": "C",
        "text": "Khai, nộp hồ sơ hải quan quá thời hạn"
      },
      {
        "key": "D",
        "text": "Không nộp báo cáo quyết toán đúng hạn"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD008_0028",
    "stt": 447,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Khi rà soát các vi phạm tại Điều 8 đối với hàng hóa xuất khẩu, nhập khẩu thông thường, trường hợp nào thuộc nhóm mức phạt thấp nhất?",
    "options": [
      {
        "key": "A",
        "text": "Không tái xuất hàng tạm nhập đúng thời hạn"
      },
      {
        "key": "B",
        "text": "Khai sửa đổi số hiệu container quá thời hạn"
      },
      {
        "key": "C",
        "text": "Chuyển tiêu thụ nội địa nhưng làm thủ tục quá hạn"
      },
      {
        "key": "D",
        "text": "Không xử lý nguyên liệu gia công đúng thời hạn"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD008_0029",
    "stt": 448,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Công ty A muốn phân loại các vi phạm về thời hạn tại Điều 8. Hành vi nào sau đây KHÔNG cùng khung phạt với việc nộp hồ sơ hải quan quá thời hạn?",
    "options": [
      {
        "key": "A",
        "text": "Khai bổ sung trị giá hải quan quá thời hạn"
      },
      {
        "key": "B",
        "text": "Khai sửa đổi số hiệu container quá thời hạn"
      },
      {
        "key": "C",
        "text": "Không tái xuất hàng hóa đúng thời hạn"
      },
      {
        "key": "D",
        "text": "Khai, xuất trình hồ sơ hải quan quá thời hạn"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD008_0030",
    "stt": 449,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Công ty A nhập khẩu lô hàng viện trợ nhân đạo đã được cấp có thẩm quyền phê duyệt. Doanh nghiệp khai sai tên hàng so với thực tế. Mức phạt tiền phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "Từ 500.000 đồng đến 1.000.000 đồng"
      },
      {
        "key": "B",
        "text": "Từ 1.000.000 đồng đến 2.000.000 đồng"
      },
      {
        "key": "C",
        "text": "Từ 2.000.000 đồng đến 4.000.000 đồng"
      },
      {
        "key": "D",
        "text": "Từ 3.000.000 đồng đến 5.000.000 đồng"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD008_0031",
    "stt": 450,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Công ty A nhập khẩu hàng hóa có quan hệ đặc biệt giữa người mua và người bán, nhưng quan hệ này không ảnh hưởng đến trị giá hải quan. Doanh nghiệp không khai mối quan hệ đặc biệt trên tờ khai. Mức phạt tiền phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "Từ 500.000 đồng đến 1.000.000 đồng"
      },
      {
        "key": "B",
        "text": "Từ 1.000.000 đồng đến 2.000.000 đồng"
      },
      {
        "key": "C",
        "text": "Từ 2.000.000 đồng đến 4.000.000 đồng"
      },
      {
        "key": "D",
        "text": "Từ 3.000.000 đồng đến 5.000.000 đồng"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD008_0032",
    "stt": 451,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Công ty A nhập khẩu lô hàng đồ gia dụng và khai sai xuất xứ hàng hóa so với thực tế. Trường hợp này không thuộc nhóm viện trợ, quà biếu hoặc hàng miễn thuế. Mức phạt tiền phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "Từ 1.000.000 đồng đến 2.000.000 đồng"
      },
      {
        "key": "B",
        "text": "Từ 2.000.000 đồng đến 4.000.000 đồng"
      },
      {
        "key": "C",
        "text": "Từ 3.000.000 đồng đến 5.000.000 đồng"
      },
      {
        "key": "D",
        "text": "Từ 5.000.000 đồng đến 10.000.000 đồng"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD008_0033",
    "stt": 452,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Công ty A nhập khẩu lô hàng thiết bị y tế thuộc đối tượng không chịu thuế. Doanh nghiệp khai sai trị giá hải quan của lô hàng. Mức phạt tiền phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "Từ 1.000.000 đồng đến 2.000.000 đồng"
      },
      {
        "key": "B",
        "text": "Từ 2.000.000 đồng đến 4.000.000 đồng"
      },
      {
        "key": "C",
        "text": "Từ 3.000.000 đồng đến 5.000.000 đồng"
      },
      {
        "key": "D",
        "text": "Từ 5.000.000 đồng đến 10.000.000 đồng"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD008_0034",
    "stt": 453,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Công ty A đã làm thủ tục hải quan xuất khẩu cho lô hàng may mặc, nhưng thực tế không xuất khẩu hàng hóa so với khai hải quan. Mức phạt tiền phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "Từ 3.000.000 đồng đến 5.000.000 đồng"
      },
      {
        "key": "B",
        "text": "Từ 5.000.000 đồng đến 10.000.000 đồng"
      },
      {
        "key": "C",
        "text": "Từ 10.000.000 đồng đến 20.000.000 đồng"
      },
      {
        "key": "D",
        "text": "Từ 20.000.000 đồng đến 40.000.000 đồng"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD008_0035",
    "stt": 454,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Công ty A đã làm thủ tục hải quan xuất khẩu mặt hàng \"bàn gỗ\", nhưng thực tế xuất khẩu mặt hàng khác so với tên hàng đã khai. Mức phạt tiền phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "Từ 3.000.000 đồng đến 5.000.000 đồng"
      },
      {
        "key": "B",
        "text": "Từ 5.000.000 đồng đến 10.000.000 đồng"
      },
      {
        "key": "C",
        "text": "Từ 10.000.000 đồng đến 20.000.000 đồng"
      },
      {
        "key": "D",
        "text": "Từ 20.000.000 đồng đến 40.000.000 đồng"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD008_0036",
    "stt": 455,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Công ty A tự phát hiện đã khai sai xuất xứ lô hàng nhập khẩu linh kiện điện tử thuộc trường hợp khoản 3 Điều 9 và khai bổ sung quá thời hạn quy định. Mức phạt tiền phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "Từ 500.000 đồng đến 1.000.000 đồng"
      },
      {
        "key": "B",
        "text": "Từ 1.000.000 đồng đến 2.000.000 đồng"
      },
      {
        "key": "C",
        "text": "Từ 1.500.000 đồng đến 2.500.000 đồng"
      },
      {
        "key": "D",
        "text": "Từ 3.000.000 đồng đến 5.000.000 đồng"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD008_0037",
    "stt": 456,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Công ty A tự phát hiện không khai quan hệ đặc biệt giữa người mua và người bán, quan hệ này không ảnh hưởng đến trị giá hải quan. Doanh nghiệp khai bổ sung quá thời hạn quy định. Mức phạt tiền phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "Từ 500.000 đồng đến 1.000.000 đồng"
      },
      {
        "key": "B",
        "text": "Từ 1.000.000 đồng đến 2.000.000 đồng"
      },
      {
        "key": "C",
        "text": "Từ 1.500.000 đồng đến 2.500.000 đồng"
      },
      {
        "key": "D",
        "text": "Từ 2.500.000 đồng đến 5.000.000 đồng"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD008_0038",
    "stt": 457,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Hành vi nào sau đây thuộc cùng khung phạt với việc khai sai tên hàng đối với lô hàng viện trợ nhân đạo đã được phê duyệt?",
    "options": [
      {
        "key": "A",
        "text": "Khai sai xuất xứ hàng nhập khẩu thông thường"
      },
      {
        "key": "B",
        "text": "Không khai quan hệ đặc biệt không ảnh hưởng trị giá"
      },
      {
        "key": "C",
        "text": "Xuất khẩu sai tên hàng so với khai hải quan"
      },
      {
        "key": "D",
        "text": "Khai sai trị giá hàng không chịu thuế nhập khẩu"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD008_0039",
    "stt": 458,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Trường hợp nào sau đây KHÔNG thuộc khung phạt 20.000.000 đồng đến 40.000.000 đồng tại Điều 9?",
    "options": [
      {
        "key": "A",
        "text": "Đã làm thủ tục nhưng không xuất khẩu hàng hóa"
      },
      {
        "key": "B",
        "text": "Xuất khẩu thiếu về lượng so với khai hải quan"
      },
      {
        "key": "C",
        "text": "Xuất khẩu sai tên hàng so với khai hải quan"
      },
      {
        "key": "D",
        "text": "Khai sai xuất xứ hàng hóa nhập khẩu thông thường"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD008_0040",
    "stt": 459,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Công ty A khai sai mã số hàng hóa nhập khẩu làm thiếu số tiền thuế phải nộp. Sau khi cơ quan hải quan thông báo kiểm tra trực tiếp hồ sơ, doanh nghiệp tự phát hiện và khai bổ sung. Mức phạt phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "Phạt 20% số tiền thuế khai thiếu"
      },
      {
        "key": "B",
        "text": "Phạt 10% số tiền thuế khai thiếu"
      },
      {
        "key": "C",
        "text": "Phạt theo khung tiền cố định của Điều 9"
      },
      {
        "key": "D",
        "text": "Không xử phạt nếu đã khai bổ sung"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD008_0041",
    "stt": 460,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Công ty A khai sai trị giá hải quan của lô hàng nhập khẩu làm thiếu số tiền thuế phải nộp. Sai sót này do cơ quan hải quan phát hiện trong quá trình làm thủ tục. Mức phạt phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "Phạt 10% số tiền thuế khai thiếu"
      },
      {
        "key": "B",
        "text": "Không xử phạt nếu hàng chưa thông quan"
      },
      {
        "key": "C",
        "text": "Phạt 20% số tiền thuế khai thiếu"
      },
      {
        "key": "D",
        "text": "Chỉ phạt theo khung tiền cố định"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD008_0042",
    "stt": 461,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Công ty A đã thông quan lô hàng nhập khẩu. Sau hơn 60 ngày kể từ ngày thông quan, nhưng trước khi có quyết định kiểm tra sau thông quan, doanh nghiệp tự phát hiện khai sai thuế suất làm thiếu thuế và khai bổ sung. Mức phạt phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "Phạt 20% số tiền thuế khai thiếu"
      },
      {
        "key": "B",
        "text": "Phạt 10% số tiền thuế khai thiếu"
      },
      {
        "key": "C",
        "text": "Không xử phạt vì doanh nghiệp tự phát hiện"
      },
      {
        "key": "D",
        "text": "Chỉ nộp đủ số thuế thiếu, không bị phạt"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD008_0043",
    "stt": 462,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Công ty A khai sai xuất xứ hàng hóa nhập khẩu làm áp dụng sai thuế suất ưu đãi và thiếu số tiền thuế phải nộp. Hành vi được phát hiện khi kiểm tra sau thông quan. Mức phạt phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "Phạt 10% số tiền thuế khai thiếu"
      },
      {
        "key": "B",
        "text": "Không xử phạt nếu doanh nghiệp nộp đủ thuế"
      },
      {
        "key": "C",
        "text": "Phạt 20% số tiền thuế khai thiếu"
      },
      {
        "key": "D",
        "text": "Phạt theo mức cố định 3-5 triệu đồng"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD008_0044",
    "stt": 463,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Công ty A khai sai đối tượng không chịu thuế đối với lô hàng nhập khẩu, làm tăng số tiền thuế không thu so với quy định. Hành vi do cơ quan hải quan phát hiện khi kiểm tra hồ sơ. Mức phạt phù hợp là:",
    "options": [
      {
        "key": "A",
        "text": "Phạt 10% số tiền thuế không thu tăng"
      },
      {
        "key": "B",
        "text": "Chỉ truy thu số tiền thuế không thu tăng"
      },
      {
        "key": "C",
        "text": "Phạt 20% số tiền thuế không thu tăng"
      },
      {
        "key": "D",
        "text": "Phạt theo khung tiền của khai sai thông thường"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD008_0045",
    "stt": 464,
    "mucDo": "VD",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Công ty A nhập khẩu lô hàng có trị giá tính thuế 200.000 USD. Doanh nghiệp khai sai mã số làm áp dụng thuế suất 5%, trong khi thuế suất đúng là 12%. Sai sót do cơ quan hải quan phát hiện trong quá trình làm thủ tục. Tiền phạt theo Điều 10 là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "1.400 USD"
      },
      {
        "key": "B",
        "text": "2.800 USD"
      },
      {
        "key": "C",
        "text": "10.000 USD"
      },
      {
        "key": "D",
        "text": "14.000 USD"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD008_0046",
    "stt": 465,
    "mucDo": "VD",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Công ty A nhập khẩu lô hàng có trị giá tính thuế 1.500.000 USD. Doanh nghiệp khai sai xuất xứ nên áp dụng thuế suất 0%, trong khi thuế suất đúng là 15%. Sau hơn 60 ngày kể từ ngày thông quan, nhưng trước khi có quyết định kiểm tra sau thông quan, doanh nghiệp tự phát hiện và khai bổ sung. Tiền phạt theo Điều 10 là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "15.000 USD"
      },
      {
        "key": "B",
        "text": "22.500 USD"
      },
      {
        "key": "C",
        "text": "150.000 USD"
      },
      {
        "key": "D",
        "text": "225.000 USD"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD008_0047",
    "stt": 466,
    "mucDo": "VD",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Công ty A nhập khẩu lô hàng có trị giá tính thuế 600.000 USD. Doanh nghiệp khai thuế suất 3%, trong khi thuế suất đúng là 8%. Hành vi được phát hiện khi kiểm tra sau thông quan. Tiền phạt theo Điều 10 là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "3.000 USD"
      },
      {
        "key": "B",
        "text": "6.000 USD"
      },
      {
        "key": "C",
        "text": "18.000 USD"
      },
      {
        "key": "D",
        "text": "30.000 USD"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD008_0048",
    "stt": 467,
    "mucDo": "VD",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Công ty A nhập khẩu lô hàng có trị giá tính thuế 2.000.000 USD. Doanh nghiệp khai hàng thuộc đối tượng không chịu thuế, nhưng thực tế phải chịu thuế nhập khẩu 10%. Cơ quan hải quan phát hiện khi kiểm tra hồ sơ. Tiền phạt theo Điều 10 là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "20.000 USD"
      },
      {
        "key": "B",
        "text": "40.000 USD"
      },
      {
        "key": "C",
        "text": "200.000 USD"
      },
      {
        "key": "D",
        "text": "400.000 USD"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD008_0049",
    "stt": 468,
    "mucDo": "VD",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Công ty A xuất khẩu lô hàng có trị giá tính thuế 900.000 USD. Doanh nghiệp khai thuế suất xuất khẩu 0%, trong khi thuế suất đúng là 5%. Sai sót do cơ quan hải quan phát hiện trong quá trình làm thủ tục. Tiền phạt theo Điều 10 là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "4.500 USD"
      },
      {
        "key": "B",
        "text": "9.000 USD"
      },
      {
        "key": "C",
        "text": "45.000 USD"
      },
      {
        "key": "D",
        "text": "180.000 USD"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD008_0050",
    "stt": 469,
    "mucDo": "VD",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Công ty A nhập khẩu lô hàng máy tính xách tay có trị giá tính thuế 750.000 USD. Doanh nghiệp khai thuế suất nhập khẩu 8%, trong khi thuế suất đúng là 12%. Sau hơn 60 ngày kể từ ngày thông quan, nhưng trước khi có quyết định kiểm tra sau thông quan, doanh nghiệp tự phát hiện và khai bổ sung. Tiền phạt theo Điều 10 là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "1.500 USD"
      },
      {
        "key": "B",
        "text": "3.000 USD"
      },
      {
        "key": "C",
        "text": "6.000 USD"
      },
      {
        "key": "D",
        "text": "30.000 USD"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD008_0051",
    "stt": 470,
    "mucDo": "VD",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Công ty A xuất khẩu lô hàng đá ốp lát có trị giá tính thuế 1.200.000 USD. Doanh nghiệp khai thuế suất xuất khẩu 2%, trong khi thuế suất đúng là 7%. Sai sót do cơ quan hải quan phát hiện trong quá trình làm thủ tục. Tiền phạt theo Điều 10 là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "6.000 USD"
      },
      {
        "key": "B",
        "text": "12.000 USD"
      },
      {
        "key": "C",
        "text": "60.000 USD"
      },
      {
        "key": "D",
        "text": "84.000 USD"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD008_0052",
    "stt": 471,
    "mucDo": "VD",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Công ty A nhập khẩu lô hàng mỹ phẩm có trị giá tính thuế 480.000 USD. Doanh nghiệp khai hàng thuộc đối tượng không chịu thuế, nhưng thực tế phải chịu thuế nhập khẩu 20%. Hành vi do cơ quan hải quan phát hiện khi kiểm tra sau thông quan. Tiền phạt theo Điều 10 là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "9.600 USD"
      },
      {
        "key": "B",
        "text": "19.200 USD"
      },
      {
        "key": "C",
        "text": "96.000 USD"
      },
      {
        "key": "D",
        "text": "480.000 USD"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD008_0053",
    "stt": 472,
    "mucDo": "VD",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Công ty A nhập khẩu lô hàng máy móc có trị giá tính thuế 2.400.000 USD. Doanh nghiệp khai thuế suất nhập khẩu 0%, trong khi thuế suất đúng là 5%. Sau hơn 60 ngày kể từ ngày thông quan, nhưng trước khi có quyết định kiểm tra sau thông quan, doanh nghiệp tự phát hiện và khai bổ sung. Tiền phạt theo Điều 10 là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "6.000 USD"
      },
      {
        "key": "B",
        "text": "12.000 USD"
      },
      {
        "key": "C",
        "text": "24.000 USD"
      },
      {
        "key": "D",
        "text": "120.000 USD"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD008_0054",
    "stt": 473,
    "mucDo": "VD",
    "tenChuDe": "Chương 3.3 Quản lý rủi ro trong hoạt động hải quan",
    "cauHoi": "Công ty A xuất khẩu lô hàng cao su có trị giá tính thuế 650.000 USD. Doanh nghiệp khai thuế suất xuất khẩu 0%, trong khi thuế suất đúng là 3%. Hành vi do cơ quan hải quan phát hiện khi kiểm tra sau thông quan. Tiền phạt theo Điều 10 là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "1.950 USD"
      },
      {
        "key": "B",
        "text": "3.900 USD"
      },
      {
        "key": "C",
        "text": "19.500 USD"
      },
      {
        "key": "D",
        "text": "130.000 USD"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD009_0001",
    "stt": 474,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.4 Mã HS",
    "cauHoi": "Tiêu đề của Nhóm 02.03 là \"Thịt lợn, tươi, ướp lạnh hoặc đông lạnh\". Theo cách diễn đạt này, Nhóm 02.03 bao gồm sản phẩm nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Thịt lợn ở dạng tươi, ướp lạnh hoặc đông lạnh"
      },
      {
        "key": "B",
        "text": "Các loại thịt ở dạng tươi, ướp lạnh hoặc đông lạnh"
      },
      {
        "key": "C",
        "text": "Thịt lợn ở dạng tươi, ướp lạnh, đông lạnh, ướp muối hoặc bảo quản khác"
      },
      {
        "key": "D",
        "text": "Thịt của lợn ở dạng tươi, ướp lạnh hoặc các dạng bảo quản khác"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD009_0002",
    "stt": 475,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.4 Mã HS",
    "cauHoi": "Chú giải 3 Chương 27 quy định: Theo mục đích của Nhóm 27.10, dầu thải có nghĩa là các chất thải chứa chủ yếu là dầu có nguồn gốc từ dầu mỏ... Đây là loại chú giải nào?",
    "options": [
      {
        "key": "A",
        "text": "Chú giải định nghĩa"
      },
      {
        "key": "B",
        "text": "Chú giải loại trừ"
      },
      {
        "key": "C",
        "text": "Chú giải định hướng"
      },
      {
        "key": "D",
        "text": "Chú giải bao gồm"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD009_0003",
    "stt": 476,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.4 Mã HS",
    "cauHoi": "Khi phân loại hàng hóa theo mã HS, quy tắc nào phải được xem xét trước các quy tắc từ 2 đến 4?",
    "options": [
      {
        "key": "A",
        "text": "Quy tắc 1"
      },
      {
        "key": "B",
        "text": "Quy tắc 2"
      },
      {
        "key": "C",
        "text": "Quy tắc 3"
      },
      {
        "key": "D",
        "text": "Quy tắc 4"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD009_0004",
    "stt": 477,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.4 Mã HS",
    "cauHoi": "Quy tắc 2(a) thường được áp dụng đối với trường hợp nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Hàng hóa là bao bì dùng lặp lại nhiều lần"
      },
      {
        "key": "B",
        "text": "Hàng hóa chưa hoàn chỉnh, chưa lắp ráp hoặc tháo rời"
      },
      {
        "key": "C",
        "text": "Hàng hóa không thể phân loại theo quy tắc 1 đến 3"
      },
      {
        "key": "D",
        "text": "Hàng hóa cần phân loại ở cấp độ phân nhóm"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD009_0005",
    "stt": 478,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.4 Mã HS",
    "cauHoi": "Theo Quy tắc 3(c), khi không áp dụng được Quy tắc 3(a) và 3(b), hàng hóa được phân loại theo:",
    "options": [
      {
        "key": "A",
        "text": "Nhóm có mức thuế suất cao nhất"
      },
      {
        "key": "B",
        "text": "Nhóm có mô tả chung nhất"
      },
      {
        "key": "C",
        "text": "Nhóm có trị giá thương mại lớn nhất"
      },
      {
        "key": "D",
        "text": "Nhóm có thứ tự sau cùng trong các nhóm được xem xét"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD009_0006",
    "stt": 479,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.4 Mã HS",
    "cauHoi": "Quy tắc 5 trong phân loại mã HS chủ yếu liên quan đến:",
    "options": [
      {
        "key": "A",
        "text": "Hàng hóa ở dạng hỗn hợp hoặc hợp chất"
      },
      {
        "key": "B",
        "text": "Hàng hóa chưa hoàn chỉnh hoặc tháo rời"
      },
      {
        "key": "C",
        "text": "Bao bì, vật chứa hoặc hộp đi cùng hàng hóa"
      },
      {
        "key": "D",
        "text": "Phân nhóm một gạch và phân nhóm hai gạch"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD009_0007",
    "stt": 480,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.4 Mã HS",
    "cauHoi": "Quy tắc nào được áp dụng riêng cho việc phân loại hàng hóa ở cấp độ phân nhóm?",
    "options": [
      {
        "key": "A",
        "text": "Quy tắc 3"
      },
      {
        "key": "B",
        "text": "Quy tắc 4"
      },
      {
        "key": "C",
        "text": "Quy tắc 5"
      },
      {
        "key": "D",
        "text": "Quy tắc 6"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD009_0008",
    "stt": 481,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.4 Mã HS",
    "cauHoi": "Trong cấu trúc HS, cấp chương hàng được thể hiện bằng:",
    "options": [
      {
        "key": "A",
        "text": "1 chữ số"
      },
      {
        "key": "B",
        "text": "2 chữ số"
      },
      {
        "key": "C",
        "text": "4 chữ số"
      },
      {
        "key": "D",
        "text": "6 chữ số"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD009_0009",
    "stt": 482,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.4 Mã HS",
    "cauHoi": "Trong cấu trúc HS, cấp phân nhóm hàng được thể hiện bằng:",
    "options": [
      {
        "key": "A",
        "text": "2 chữ số"
      },
      {
        "key": "B",
        "text": "4 chữ số"
      },
      {
        "key": "C",
        "text": "6 chữ số"
      },
      {
        "key": "D",
        "text": "8 chữ số"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD009_0010",
    "stt": 483,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.4 Mã HS",
    "cauHoi": "Theo Danh mục hàng hóa xuất khẩu, nhập khẩu Việt Nam, mã HS được chi tiết đến cấp:",
    "options": [
      {
        "key": "A",
        "text": "4 chữ số"
      },
      {
        "key": "B",
        "text": "6 chữ số"
      },
      {
        "key": "C",
        "text": "8 chữ số"
      },
      {
        "key": "D",
        "text": "10 chữ số"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD009_0011",
    "stt": 484,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.4 Mã HS",
    "cauHoi": "Trong mã nhóm hàng 28.02, hai chữ số đầu \"28\" thể hiện:",
    "options": [
      {
        "key": "A",
        "text": "Số thứ tự của phần hàng"
      },
      {
        "key": "B",
        "text": "Số chương của nhóm hàng"
      },
      {
        "key": "C",
        "text": "Số phân nhóm của hàng hóa"
      },
      {
        "key": "D",
        "text": "Số chi tiết của hàng hóa"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD009_0012",
    "stt": 485,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.4 Mã HS",
    "cauHoi": "Trường hợp một nhóm hàng không được chia thành các phân nhóm, hai chữ số bổ sung ở cấp phân nhóm được thể hiện là:",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "10"
      },
      {
        "key": "C",
        "text": "99"
      },
      {
        "key": "D",
        "text": "0"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD009_0013",
    "stt": 486,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.4 Mã HS",
    "cauHoi": "Hệ thống HS Code do tổ chức nào phát triển?",
    "options": [
      {
        "key": "A",
        "text": "Tổ chức Thương mại Thế giới"
      },
      {
        "key": "B",
        "text": "Phòng Thương mại Quốc tế"
      },
      {
        "key": "C",
        "text": "Tổ chức Hải quan Thế giới"
      },
      {
        "key": "D",
        "text": "Hiệp hội các quốc gia Đông Nam Á"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD009_0014",
    "stt": 487,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.4 Mã HS",
    "cauHoi": "Trong cấu trúc HS, cấp nhóm hàng được thể hiện bằng:",
    "options": [
      {
        "key": "A",
        "text": "2 chữ số"
      },
      {
        "key": "B",
        "text": "4 chữ số"
      },
      {
        "key": "C",
        "text": "6 chữ số"
      },
      {
        "key": "D",
        "text": "8 chữ số"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD009_0015",
    "stt": 488,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.4 Mã HS",
    "cauHoi": "Mục tiêu chính của Hệ thống hài hòa mô tả và mã hóa hàng hóa (HS) là gì?",
    "options": [
      {
        "key": "A",
        "text": "Quy định mức thuế nhập khẩu thống nhất cho mọi quốc gia"
      },
      {
        "key": "B",
        "text": "Hài hòa cách mô tả và mã hóa hàng hóa trong thương mại quốc tế"
      },
      {
        "key": "C",
        "text": "Xây dựng danh mục hàng hóa riêng cho từng doanh nghiệp xuất nhập khẩu"
      },
      {
        "key": "D",
        "text": "Thay thế toàn bộ quy định phân loại hàng hóa của từng quốc gia"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD009_0016",
    "stt": 489,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.4 Mã HS",
    "cauHoi": "Hệ thống HS là gì?",
    "options": [
      {
        "key": "A",
        "text": "Hệ thống phân loại hàng hóa do từng quốc gia tự xây dựng"
      },
      {
        "key": "B",
        "text": "Hệ thống hài hòa mô tả và mã hóa hàng hóa"
      },
      {
        "key": "C",
        "text": "Hệ thống xác định trị giá hải quan cho hàng hóa xuất nhập khẩu"
      },
      {
        "key": "D",
        "text": "Hệ thống tính số thuế phải nộp cho từng lô hàng"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD009_0017",
    "stt": 490,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.4 Mã HS",
    "cauHoi": "Danh mục HS bao gồm những phần chính nào?",
    "options": [
      {
        "key": "A",
        "text": "Các quy tắc tổng quát, chú giải pháp lý, danh sách hàng hóa"
      },
      {
        "key": "B",
        "text": "Danh sách hàng hóa, các định nghĩa, danh mục quốc gia"
      },
      {
        "key": "C",
        "text": "Các quy tắc tổng quát, danh sách mặt hàng, bảng mã quốc tế"
      },
      {
        "key": "D",
        "text": "Các chú giải pháp lý, danh sách sản phẩm, bảng điều chỉnh thuế"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD009_0018",
    "stt": 491,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.4 Mã HS",
    "cauHoi": "Công ước HS được Tổ chức Hải quan thế giới thông qua tại Brussel vào năm nào?",
    "options": [
      {
        "key": "A",
        "text": "1950"
      },
      {
        "key": "B",
        "text": "1974"
      },
      {
        "key": "C",
        "text": "1983"
      },
      {
        "key": "D",
        "text": "1988"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD009_0019",
    "stt": 492,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.4 Mã HS",
    "cauHoi": "Mục tiêu chính của Hệ thống HS là gì?",
    "options": [
      {
        "key": "A",
        "text": "Kiểm soát thuế giá trị gia tăng đối với hàng nhập khẩu"
      },
      {
        "key": "B",
        "text": "Mô tả và mã hóa hàng hóa theo một danh mục thống nhất"
      },
      {
        "key": "C",
        "text": "Xác định trị giá hải quan của hàng hóa xuất khẩu, nhập khẩu"
      },
      {
        "key": "D",
        "text": "Quản lý hồ sơ của doanh nghiệp xuất nhập khẩu"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD009_0020",
    "stt": 493,
    "mucDo": "TH",
    "tenChuDe": "Chương 3.4 Mã HS",
    "cauHoi": "Các hình ảnh, sơ đồ và đồ thị được đưa ra trong chú giải SEN mang tính chất nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Minh họa"
      },
      {
        "key": "B",
        "text": "Bao gồm"
      },
      {
        "key": "C",
        "text": "Định hướng"
      },
      {
        "key": "D",
        "text": "Bắt buộc áp dụng"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD009_0021",
    "stt": 494,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.4 Mã HS",
    "cauHoi": "Mô tả hàng hóa tại văn bản nào sau đây được ưu tiên nhất trong trường hợp có sự chưa thống nhất về nội dung?",
    "options": [
      {
        "key": "A",
        "text": "Danh mục AHTN (phần tiếng Anh)"
      },
      {
        "key": "B",
        "text": "Danh mục AHTN (phần tiếng Việt)"
      },
      {
        "key": "C",
        "text": "Biểu thuế nhập khẩu ưu đãi"
      },
      {
        "key": "D",
        "text": "Biểu thuế nhập khẩu ưu đãi đặc biệt"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD009_0022",
    "stt": 495,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.4 Mã HS",
    "cauHoi": "Chú giải nào đưa ra giải thích cụ thể cho nội dung của các mô tả hàng hóa trong từng Nhóm hàng, Phân nhóm hàng cụ thể?",
    "options": [
      {
        "key": "A",
        "text": "Chú giải định nghĩa"
      },
      {
        "key": "B",
        "text": "Chú giải loại trừ"
      },
      {
        "key": "C",
        "text": "Chú giải định hướng"
      },
      {
        "key": "D",
        "text": "Chú giải bao gồm"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD009_0023",
    "stt": 496,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.4 Mã HS",
    "cauHoi": "Danh mục hàng hóa xuất khẩu, nhập khẩu Việt Nam hiện nay được xây dựng dựa trên cơ sở nào?",
    "options": [
      {
        "key": "A",
        "text": "Hệ thống phân loại thương mại quốc tế chuẩn (SITC) của Liên hợp quốc"
      },
      {
        "key": "B",
        "text": "Chỉ dựa trên 4 chữ số đầu tiên của Hệ thống hài hòa mô tả và mã hóa hàng hóa (HS)"
      },
      {
        "key": "C",
        "text": "Dựa trên toàn bộ Hệ thống HS, Danh mục AHTN của ASEAN và chi tiết ở cấp 8 số"
      },
      {
        "key": "D",
        "text": "Danh mục hàng hóa của các quốc gia đối tác trong các hiệp định thương mại tự do"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD009_0024",
    "stt": 497,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.4 Mã HS",
    "cauHoi": "Phụ lục của Công ước HS không bao gồm nội dung nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Sáu quy tắc tổng quát"
      },
      {
        "key": "B",
        "text": "Chú giải Phần và Chương"
      },
      {
        "key": "C",
        "text": "Mã số Nhóm và Phân nhóm"
      },
      {
        "key": "D",
        "text": "Thuế suất ưu đãi"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD009_0025",
    "stt": 498,
    "mucDo": "NB",
    "tenChuDe": "Chương 3.4 Mã HS",
    "cauHoi": "Cơ quan nào có nhiệm vụ thông qua chú giải chi tiết và ý kiến phân loại do Ủy ban HS đệ trình?",
    "options": [
      {
        "key": "A",
        "text": "Hội đồng Hợp tác Hải quan"
      },
      {
        "key": "B",
        "text": "Tổ chức Thương mại Thế giới"
      },
      {
        "key": "C",
        "text": "Ủy ban HS"
      },
      {
        "key": "D",
        "text": "Liên Hợp Quốc"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD010_0001",
    "stt": 499,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Nội dung kiểm tra hải quan trong quá trình thông quan hàng hóa không bao gồm:",
    "options": [
      {
        "key": "A",
        "text": "Kiểm tra về lượng hàng, chất lượng hàng hóa"
      },
      {
        "key": "B",
        "text": "Kiểm tra về điều kiện kinh doanh xuất nhập khẩu"
      },
      {
        "key": "C",
        "text": "Kiểm tra tên hàng, mã số hàng hóa"
      },
      {
        "key": "D",
        "text": "Kiểm tra về xuất xứ hàng hóa và thuế"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD010_0002",
    "stt": 500,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Căn cứ quyết định mức độ kiểm tra thực tế hàng hóa không bao gồm:",
    "options": [
      {
        "key": "A",
        "text": "Quá trình đối chiếu giữa khai báo của người khai hải quan với thực tế hàng hóa"
      },
      {
        "key": "B",
        "text": "Chính sách mặt hàng của Nhà nước trong từng thời kỳ"
      },
      {
        "key": "C",
        "text": "Quá trình phân tích các thông tin liên quan đến người khai hải quan và lô hàng đang được làm thủ tục hải quan"
      },
      {
        "key": "D",
        "text": "Quá trình chấp hành pháp luật hải quan của chủ hàng"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD010_0003",
    "stt": 501,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Khẳng định nào sau đây là đúng khi nói về nghiệp vụ kiểm tra xuất xứ hàng hoá trong thủ tục hải quan?",
    "options": [
      {
        "key": "A",
        "text": "Kiểm tra xuất xứ hàng hóa là một nội dung bắt buộc của kiểm tra chuyên ngành"
      },
      {
        "key": "B",
        "text": "Kiểm tra xuất xứ hàng hóa chỉ được thực hiện đối với các lô hàng thuộc luồng đỏ"
      },
      {
        "key": "C",
        "text": "Kiểm tra xuất xứ hàng hóa là nội dung tách biệt hoàn toàn với kiểm tra hải quan"
      },
      {
        "key": "D",
        "text": "Kiểm tra xuất xứ hàng hóa là một nội dung nằm trong quy trình kiểm tra hải quan"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD010_0004",
    "stt": 502,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Quyết định hình thức kiểm tra hải quan không dựa trên nội dung nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Kết quả phân tích thông tin về lô hàng"
      },
      {
        "key": "B",
        "text": "Mức độ rủi ro về vi phạm pháp luật hải quan"
      },
      {
        "key": "C",
        "text": "Kết quả kiểm tra sự phù hợp giữa hàng hóa với các chứng từ trong hồ sơ hải quan"
      },
      {
        "key": "D",
        "text": "Doanh nghiệp thuộc nhóm doanh nghiệp ưu tiên, doanh nghiệp tuân thủ hay không tuân thủ"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD010_0005",
    "stt": 503,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Đâu không phải là phương tiện được sử dụng để thực hiện việc kiểm tra hải quan trong quá trình thông quan hàng hóa?",
    "options": [
      {
        "key": "A",
        "text": "Hệ thống camera giám sát lắp đặt tại các khu vực cửa khẩu"
      },
      {
        "key": "B",
        "text": "Máy soi container di động hoặc cố định tại các cảng biển"
      },
      {
        "key": "C",
        "text": "Các thiết bị đầu đọc chì điện tử và niêm phong hải quan"
      },
      {
        "key": "D",
        "text": "Hệ thống định vị toàn cầu GPS trên phương tiện cá nhân"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD010_0006",
    "stt": 504,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Theo quy định của Luật Hải quan, việc kiểm tra hải quan được thực hiện trong những trường hợp nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ thực hiện trong thời gian người khai đang làm thủ tục thông quan hàng hóa"
      },
      {
        "key": "B",
        "text": "Chỉ thực hiện sau khi hàng hóa đã được thông quan và đưa vào lưu thông nội địa"
      },
      {
        "key": "C",
        "text": "Chỉ thực hiện khi có dấu hiệu vi phạm pháp luật trong quá trình giám sát hải quan"
      },
      {
        "key": "D",
        "text": "Thực hiện trong quá trình làm thủ tục hải quan và cả bước kiểm tra sau thông quan"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD010_0007",
    "stt": 505,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Trong các hình thức dưới đây, hình thức kiểm tra thực tế hàng hóa nào được Hải quan Việt Nam áp dụng hiện nay?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ thực hiện kiểm tra thủ công bằng mắt thường đối với mọi lô hàng luồng đỏ"
      },
      {
        "key": "B",
        "text": "Chỉ sử dụng máy soi container và các thiết bị kỹ thuật để kiểm tra hàng hóa"
      },
      {
        "key": "C",
        "text": "Chỉ căn cứ vào kết quả phân tích, giám định của các cơ quan chuyên môn độc lập"
      },
      {
        "key": "D",
        "text": "Kết hợp linh hoạt giữa kiểm tra thủ công, thiết bị kỹ thuật và kết quả giám định"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD010_0008",
    "stt": 506,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Kiểm tra hải quan là việc kiểm tra hồ sơ hải quan, gồm tờ khai và các chứng từ liên quan, kiểm tra thực tế hàng hóa, phương tiện vận tải do chủ thể nào thực hiện?",
    "options": [
      {
        "key": "A",
        "text": "Người khai hải quan"
      },
      {
        "key": "B",
        "text": "Cơ quan hải quan"
      },
      {
        "key": "C",
        "text": "Cơ quan kiểm tra chuyên ngành"
      },
      {
        "key": "D",
        "text": "Doanh nghiệp kinh doanh cảng, kho, bãi"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD010_0009",
    "stt": 507,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Một trong những nội dung chính của nghiệp vụ kiểm tra hồ sơ hải quan là kiểm tra tính chất nào của bộ hồ sơ hải quan?",
    "options": [
      {
        "key": "A",
        "text": "Hợp lý, thống nhất, liên quan"
      },
      {
        "key": "B",
        "text": "Đầy đủ, hợp pháp, hợp lệ"
      },
      {
        "key": "C",
        "text": "Đồng nhất, minh bạch, khách quan"
      },
      {
        "key": "D",
        "text": "Chính xác, thuận tiện, kịp thời"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD010_0010",
    "stt": 508,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Trong quá trình kiểm tra hải quan, công chức chưa đủ cơ sở xác định bản chất và công dụng của một mặt hàng nhập khẩu qua hồ sơ, chứng từ và kiểm tra thực tế. Biện pháp nghiệp vụ nào phù hợp để làm rõ nội dung này?",
    "options": [
      {
        "key": "A",
        "text": "Chuyển hồ sơ sang kiểm tra sau thông quan để xử lý sau"
      },
      {
        "key": "B",
        "text": "Lấy mẫu phục vụ phân tích, giám định hàng hóa"
      },
      {
        "key": "C",
        "text": "Căn cứ mô tả hàng hóa do doanh nghiệp tự khai"
      },
      {
        "key": "D",
        "text": "Tạm dừng thông quan cho đến khi doanh nghiệp bổ sung hợp đồng"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD010_0011",
    "stt": 509,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Khi phát hiện dấu hiệu vi phạm pháp luật trong hoạt động xuất khẩu, nhập khẩu, các cấp hải quan và cơ quan quản lý chuyên ngành cần phối hợp theo hướng nào?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ xử lý sau khi hàng hóa đã được thông quan"
      },
      {
        "key": "B",
        "text": "Chuyển toàn bộ trách nhiệm xử lý cho doanh nghiệp"
      },
      {
        "key": "C",
        "text": "Trao đổi thông tin, phối hợp ngăn chặn và xử lý kịp thời"
      },
      {
        "key": "D",
        "text": "Chỉ phối hợp với cơ quan cùng cấp trong địa bàn cửa khẩu"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD010_0012",
    "stt": 510,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Công ty A nhập khẩu một lô hàng có cùng tên hàng, thành phần, cấu tạo, tính chất lý hóa, tính năng, công dụng, nhà sản xuất và tiêu chí phân loại với lô hàng đã được chính Công ty A phân tích, phân loại và thông quan trong vòng 03 năm. Cách hiểu nào phù hợp khi doanh nghiệp sử dụng kết quả phân tích, phân loại trước đó để khai báo?",
    "options": [
      {
        "key": "A",
        "text": "Không được sử dụng kết quả cũ vì mỗi lô hàng đều phải phân tích lại"
      },
      {
        "key": "B",
        "text": "Có thể sử dụng kết quả cũ nếu căn cứ phân loại chưa thay đổi"
      },
      {
        "key": "C",
        "text": "Chỉ được sử dụng kết quả cũ nếu hàng hóa đã ra khỏi khu vực giám sát"
      },
      {
        "key": "D",
        "text": "Phải chuyển hồ sơ sang kiểm tra sau thông quan trước khi khai báo"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD010_0013",
    "stt": 511,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Một lô hàng nhập khẩu thuộc diện kiểm tra chuyên ngành chưa có kết luận đáp ứng yêu cầu nhập khẩu. Doanh nghiệp đề nghị được thông quan để đưa hàng ra lưu thông và cam kết bổ sung kết quả sau. Cách xử lý nào phù hợp nhất?",
    "options": [
      {
        "key": "A",
        "text": "Cho đưa hàng về bảo quản tại kho riêng nếu đáp ứng điều kiện kiểm tra chuyên ngành"
      },
      {
        "key": "B",
        "text": "Cho đưa hàng ra lưu thông và kiểm tra lại trong kiểm tra sau thông quan"
      },
      {
        "key": "C",
        "text": "Chưa thông quan để đưa hàng ra lưu thông khi chưa có kết luận đáp ứng yêu cầu nhập khẩu"
      },
      {
        "key": "D",
        "text": "Chỉ yêu cầu doanh nghiệp nộp bổ sung hợp đồng mua bán hàng hóa"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD010_0014",
    "stt": 512,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Trong quá trình kiểm tra chi tiết hồ sơ, công chức hải quan phát hiện nội dung khai không phù hợp với chứng từ thuộc hồ sơ hải quan và có dấu hiệu không tuân thủ chính sách quản lý hàng hóa, chính sách thuế. Biện pháp nào sau đây phù hợp?",
    "options": [
      {
        "key": "A",
        "text": "Yêu cầu doanh nghiệp lưu giữ hồ sơ để kiểm tra sau"
      },
      {
        "key": "B",
        "text": "Cho thông quan nếu doanh nghiệp cam kết chịu trách nhiệm"
      },
      {
        "key": "C",
        "text": "Chuyển sang kiểm tra thực tế hàng hóa theo quyết định kiểm tra"
      },
      {
        "key": "D",
        "text": "Chỉ điều chỉnh thông tin khai báo trên hệ thống"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD010_0015",
    "stt": 513,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Khi kiểm tra thực tế hàng hóa, nội dung nào sau đây phản ánh đúng trọng tâm nghiệp vụ của công chức hải quan?",
    "options": [
      {
        "key": "A",
        "text": "Đối chiếu các chứng từ trong hồ sơ để xác định tính đầy đủ của bộ hồ sơ"
      },
      {
        "key": "B",
        "text": "Đối chiếu tình trạng thực tế của hàng hóa với tờ khai và chứng từ hồ sơ"
      },
      {
        "key": "C",
        "text": "Xác định điều kiện đưa hàng hóa ra khỏi khu vực giám sát hải quan"
      },
      {
        "key": "D",
        "text": "Kiểm tra sổ kế toán và dữ liệu kho tại trụ sở người khai hải quan"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD010_0016",
    "stt": 514,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Công ty A khai nhập khẩu 1.000 bộ linh kiện, nhưng khi kiểm tra thực tế, công chức hải quan phát hiện số lượng thực tế và ký mã hiệu trên kiện hàng không phù hợp với chứng từ trong hồ sơ. Nội dung kiểm tra nào đang được đặt ra trực tiếp?",
    "options": [
      {
        "key": "A",
        "text": "Kiểm tra việc áp dụng chính sách thuế theo mã số và xuất xứ hàng hóa"
      },
      {
        "key": "B",
        "text": "Kiểm tra lượng hàng và sự phù hợp giữa thực tế với hồ sơ hải quan"
      },
      {
        "key": "C",
        "text": "Kiểm tra điều kiện lưu giữ hàng hóa tại địa điểm kiểm tra tập trung"
      },
      {
        "key": "D",
        "text": "Kiểm tra thời hạn nộp thuế và bảo lãnh thuế của người khai hải quan"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD010_0017",
    "stt": 515,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Trong quá trình kiểm tra thực tế, công chức hải quan chưa đủ cơ sở xác định chính xác tên hàng, mô tả hàng hóa hoặc mã số hàng hóa bằng phương tiện hiện có. Cách xử lý nào phù hợp?",
    "options": [
      {
        "key": "A",
        "text": "Xác định mã số hàng hóa theo hóa đơn thương mại do doanh nghiệp nộp"
      },
      {
        "key": "B",
        "text": "Cho thông quan theo nội dung khai nếu hàng hóa không thuộc danh mục cấm"
      },
      {
        "key": "C",
        "text": "Yêu cầu phân tích phân loại, kiểm tra kỹ thuật, giám định hoặc thử nghiệm"
      },
      {
        "key": "D",
        "text": "Chuyển sang kiểm tra sau thông quan và giữ nguyên thông tin khai báo"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD010_0018",
    "stt": 516,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Khi kiểm tra qua máy soi container, hình ảnh soi chiếu cho thấy dấu hiệu bất thường so với thông tin trên tờ khai và chứng từ hồ sơ. Cách xử lý nào phù hợp trong kiểm tra thực tế hàng hóa?",
    "options": [
      {
        "key": "A",
        "text": "Chấp nhận nội dung khai báo nếu container còn nguyên niêm phong"
      },
      {
        "key": "B",
        "text": "Lưu hình ảnh soi chiếu và cho hàng qua khu vực giám sát"
      },
      {
        "key": "C",
        "text": "Kiểm tra trực tiếp hàng hóa để làm rõ dấu hiệu nghi vấn"
      },
      {
        "key": "D",
        "text": "Yêu cầu người khai bổ sung hợp đồng trước khi kiểm tra tiếp"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD010_0019",
    "stt": 517,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Khi kiểm tra thực tế hàng hóa bằng máy soi, căn cứ nào được sử dụng để phân tích, đánh giá và kết luận về kết quả kiểm tra?",
    "options": [
      {
        "key": "A",
        "text": "Chứng từ vận tải, hóa đơn thương mại và cam kết của doanh nghiệp"
      },
      {
        "key": "B",
        "text": "Hình ảnh kiểm tra, thông tin tờ khai và thông tin tại thời điểm kiểm tra"
      },
      {
        "key": "C",
        "text": "Giấy phép chuyên ngành, trị giá khai báo và thời hạn nộp thuế"
      },
      {
        "key": "D",
        "text": "Tình trạng niêm phong, địa điểm lưu giữ và đề nghị của người khai"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD010_0020",
    "stt": 518,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Trường hợp người khai hải quan nộp hồ sơ giấy, hình ảnh kiểm tra qua máy soi được xử lý như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ ghi nhận kết quả kiểm tra, không cần lưu hình ảnh kèm hồ sơ"
      },
      {
        "key": "B",
        "text": "Chỉ giao cho doanh nghiệp lưu giữ để xuất trình khi có yêu cầu"
      },
      {
        "key": "C",
        "text": "Lưu trong hệ thống máy soi và in để lưu kèm hồ sơ hải quan"
      },
      {
        "key": "D",
        "text": "Chỉ cập nhật vào tờ khai, không lưu riêng trong hệ thống máy soi"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD010_0021",
    "stt": 519,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Một lô hàng đã được kiểm tra qua máy soi trong quá trình xếp dỡ tại khu vực cửa khẩu nhập và không phát hiện dấu hiệu vi phạm. Kết quả kiểm tra này được sử dụng theo hướng nào?",
    "options": [
      {
        "key": "A",
        "text": "Thay thế toàn bộ việc kiểm tra hồ sơ hải quan"
      },
      {
        "key": "B",
        "text": "Là căn cứ để miễn mọi hình thức kiểm tra về sau"
      },
      {
        "key": "C",
        "text": "Sử dụng để làm thủ tục hải quan và quyết định thông quan"
      },
      {
        "key": "D",
        "text": "Chỉ dùng để giám sát kho, bãi sau khi hàng hóa thông quan"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD010_0022",
    "stt": 520,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Đối với lô hàng phải kiểm tra thực tế tại nơi chưa được trang bị máy soi container, Đội trưởng Hải quan có trách nhiệm nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Trực tiếp kiểm tra toàn bộ hàng hóa thay cho công chức được phân công"
      },
      {
        "key": "B",
        "text": "Quyết định hình thức, mức độ kiểm tra và giao công chức thực hiện"
      },
      {
        "key": "C",
        "text": "Chỉ tiếp nhận kết quả kiểm tra do doanh nghiệp kinh doanh cảng cung cấp"
      },
      {
        "key": "D",
        "text": "Chuyển toàn bộ lô hàng sang kiểm tra sau thông quan tại doanh nghiệp"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD010_0023",
    "stt": 521,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Khi nhiều công chức hải quan cùng kiểm tra thực tế một lô hàng, việc cập nhật kết quả kiểm tra vào Hệ thống được thực hiện như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Mỗi công chức tự cập nhật riêng phần hàng hóa do mình kiểm tra"
      },
      {
        "key": "B",
        "text": "Người khai hải quan cập nhật kết quả sau khi chứng kiến kiểm tra"
      },
      {
        "key": "C",
        "text": "Công chức được giao trách nhiệm chung cập nhật kết quả kiểm tra"
      },
      {
        "key": "D",
        "text": "Doanh nghiệp kinh doanh kho, bãi cập nhật theo biên bản kiểm tra"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD010_0024",
    "stt": 522,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Tham vấn trị giá là gì?",
    "options": [
      {
        "key": "A",
        "text": "Việc khai, tiếp nhận, xử lý thông tin khai hải quan và trao đổi thông tin giữa các bên thông qua Hệ thống xử lý dữ liệu điện tử hải quan"
      },
      {
        "key": "B",
        "text": "Việc cơ quan hải quan kết nối, trao đổi thông tin về hoạt động xuất khẩu, nhập khẩu với các Bộ, ngành có liên quan"
      },
      {
        "key": "C",
        "text": "Việc người khai hải quan thực hiện khai hải quan điện tử và tiếp nhận phản hồi của cơ quan hải quan trong quá trình làm thủ tục"
      },
      {
        "key": "D",
        "text": "Việc cơ quan hải quan và người khai hải quan trao đổi, cung cấp thông tin liên quan đến trị giá hải quan đã kê khai"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD010_0025",
    "stt": 523,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Cơ sở nào được sử dụng để quyết định hình thức kiểm tra hải quan đối với hàng hóa xuất khẩu, nhập khẩu?",
    "options": [
      {
        "key": "A",
        "text": "Trị giá khai báo của lô hàng và thời điểm doanh nghiệp mở tờ khai"
      },
      {
        "key": "B",
        "text": "Loại hình vận chuyển, số lượng container và thời gian hàng lưu tại cảng"
      },
      {
        "key": "C",
        "text": "Thông tin về lô hàng, mức độ chấp hành pháp luật của chủ hàng và mức độ rủi ro"
      },
      {
        "key": "D",
        "text": "Đề nghị của doanh nghiệp và khả năng bố trí nhân lực kiểm tra tại cửa khẩu"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD010_0026",
    "stt": 524,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Mẫu hàng hóa không được lưu tại đâu?",
    "options": [
      {
        "key": "A",
        "text": "Trung tâm phân tích, phân loại hàng hóa"
      },
      {
        "key": "B",
        "text": "Chi cục hải quan"
      },
      {
        "key": "C",
        "text": "Doanh nghiệp"
      },
      {
        "key": "D",
        "text": "Phòng Thương mại và Công nghiệp Việt Nam"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD010_0027",
    "stt": 525,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Loại niêm phong nào thường dùng để niêm phong hàng lẻ như kiện, thùng carton?",
    "options": [
      {
        "key": "A",
        "text": "Niêm phong bằng giấy"
      },
      {
        "key": "B",
        "text": "Niêm phong bằng chì hải quan"
      },
      {
        "key": "C",
        "text": "Niêm phong điện tử"
      },
      {
        "key": "D",
        "text": "Niêm phong bằng thiết bị định vị"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD010_0028",
    "stt": 526,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Trường hợp nào sau đây không phải là mục đích lấy mẫu hàng hóa nhập khẩu trong nghiệp vụ hải quan?",
    "options": [
      {
        "key": "A",
        "text": "Lấy mẫu để phục vụ việc khai hải quan theo yêu cầu của người khai hải quan"
      },
      {
        "key": "B",
        "text": "Lấy mẫu nguyên vật liệu nhập khẩu để gia công, sản xuất hàng xuất khẩu"
      },
      {
        "key": "C",
        "text": "Lấy mẫu để phục vụ phân tích, phân loại hoặc giám định theo yêu cầu nghiệp vụ"
      },
      {
        "key": "D",
        "text": "Lấy mẫu để làm chứng từ thanh toán tiền hàng với đối tác nước ngoài"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD010_0029",
    "stt": 527,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Lô hàng A là thịt bò đông lạnh, lô hàng B là thiết bị văn phòng, lô hàng C là linh kiện điện tử. Nếu cả ba lô hàng cùng rơi vào luồng đỏ, lô hàng nào được ưu tiên kiểm tra thực tế trước?",
    "options": [
      {
        "key": "A",
        "text": "Lô hàng A"
      },
      {
        "key": "B",
        "text": "Lô hàng B"
      },
      {
        "key": "C",
        "text": "Lô hàng C"
      },
      {
        "key": "D",
        "text": "Lô hàng có mã HS nhỏ hơn"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD010_0030",
    "stt": 528,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Lô hàng A là cá hồi tươi bảo quản lạnh, nhập khẩu bằng đường hàng không, thời hạn bảo quản còn 48 giờ; lô hàng B là máy in văn phòng nhập khẩu bằng đường biển, có đầy đủ chứng từ; lô hàng C là linh kiện máy tính đóng trong container nguyên niêm phong. Nếu cả ba lô hàng cùng rơi vào luồng đỏ và cùng đến khu vực kiểm tra trong một buổi sáng, lô hàng nào được ưu tiên kiểm tra thực tế trước?",
    "options": [
      {
        "key": "A",
        "text": "Lô hàng A"
      },
      {
        "key": "B",
        "text": "Lô hàng B"
      },
      {
        "key": "C",
        "text": "Lô hàng C"
      },
      {
        "key": "D",
        "text": "Lô hàng có trị giá khai báo cao hơn"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD010_0031",
    "stt": 529,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Lô hàng A là bàn ghế gỗ văn phòng, đóng trong container khô; lô hàng B là hoa lan tươi nhập khẩu, cần duy trì điều kiện bảo quản phù hợp; lô hàng C là phụ tùng xe máy, có vận đơn và hóa đơn thương mại đầy đủ. Nếu cả ba lô hàng cùng bị phân luồng đỏ, lô hàng nào được ưu tiên kiểm tra thực tế trước?",
    "options": [
      {
        "key": "A",
        "text": "Lô hàng A"
      },
      {
        "key": "B",
        "text": "Lô hàng B"
      },
      {
        "key": "C",
        "text": "Lô hàng C"
      },
      {
        "key": "D",
        "text": "Lô hàng có số lượng kiện ít hơn"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD010_0032",
    "stt": 530,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Lô hàng A là thịt gà đông lạnh đang lưu tại container lạnh, có yêu cầu duy trì nhiệt độ bảo quản; lô hàng B là máy photocopy đã qua sử dụng, đóng kiện gỗ; lô hàng C là vải cuộn nhập khẩu để sản xuất hàng xuất khẩu, đã có chứng từ vận tải đầy đủ. Nếu cả ba lô hàng cùng rơi vào luồng đỏ, lô hàng nào được ưu tiên kiểm tra thực tế trước?",
    "options": [
      {
        "key": "A",
        "text": "Lô hàng A"
      },
      {
        "key": "B",
        "text": "Lô hàng B"
      },
      {
        "key": "C",
        "text": "Lô hàng C"
      },
      {
        "key": "D",
        "text": "Lô hàng có số tờ khai đăng ký sớm hơn"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD010_0033",
    "stt": 531,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Lô hàng A là linh kiện điện thoại, trị giá khai báo cao, đóng trong 2 container; lô hàng B là tôm đông lạnh xuất khẩu, phải duy trì nhiệt độ bảo quản trong quá trình chờ kiểm tra; lô hàng C là máy may công nghiệp, đóng trong kiện thép. Nếu cả ba lô hàng cùng rơi vào luồng đỏ tại cùng một địa điểm kiểm tra, lô hàng nào được ưu tiên kiểm tra thực tế trước?",
    "options": [
      {
        "key": "A",
        "text": "Lô hàng A"
      },
      {
        "key": "B",
        "text": "Lô hàng B"
      },
      {
        "key": "C",
        "text": "Lô hàng C"
      },
      {
        "key": "D",
        "text": "Lô hàng có trị giá khai báo cao nhất"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD010_0034",
    "stt": 532,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Lô hàng A là máy phát điện nhập khẩu theo dự án đầu tư, có trọng lượng lớn; lô hàng B là điện thoại di động nguyên hộp, số lượng nhiều; lô hàng C là trái cây tươi nhập khẩu, đang bảo quản lạnh và có thời hạn sử dụng ngắn. Nếu cả ba lô hàng cùng rơi vào luồng đỏ, lô hàng nào được ưu tiên kiểm tra thực tế trước?",
    "options": [
      {
        "key": "A",
        "text": "Lô hàng A"
      },
      {
        "key": "B",
        "text": "Lô hàng B"
      },
      {
        "key": "C",
        "text": "Lô hàng C"
      },
      {
        "key": "D",
        "text": "Lô hàng có số lượng hàng hóa lớn nhất"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD010_0035",
    "stt": 533,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Lô hàng A là tôm hùm sống nhập khẩu bằng đường hàng không, đang được sục oxy trong thùng chuyên dụng; lô hàng B là gạch ốp lát nhập khẩu bằng container, có trị giá khai báo cao; lô hàng C là quần áo may sẵn, có C/O ưu đãi và đủ hóa đơn thương mại. Nếu cả ba lô hàng cùng rơi vào luồng đỏ và cùng chờ kiểm tra thực tế, lô hàng nào được ưu tiên kiểm tra trước?",
    "options": [
      {
        "key": "A",
        "text": "Lô hàng A"
      },
      {
        "key": "B",
        "text": "Lô hàng B"
      },
      {
        "key": "C",
        "text": "Lô hàng C"
      },
      {
        "key": "D",
        "text": "Lô hàng có trị giá khai báo cao hơn"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD010_0036",
    "stt": 534,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Lô hàng A là sữa tươi thanh trùng nhập khẩu, phải duy trì nhiệt độ lạnh ổn định; lô hàng B là thép cuộn nhập khẩu, có trọng lượng lớn và cần cẩu chuyên dụng; lô hàng C là đồ chơi trẻ em, thuộc diện kiểm tra chất lượng. Nếu cả ba lô hàng cùng bị phân luồng đỏ tại cùng một địa điểm kiểm tra, lô hàng nào được ưu tiên kiểm tra thực tế trước?",
    "options": [
      {
        "key": "A",
        "text": "Lô hàng A"
      },
      {
        "key": "B",
        "text": "Lô hàng B"
      },
      {
        "key": "C",
        "text": "Lô hàng C"
      },
      {
        "key": "D",
        "text": "Lô hàng có trọng lượng lớn hơn"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD010_0037",
    "stt": 535,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Lô hàng A là cây giống nuôi cấy mô nhập khẩu, cần giữ trong điều kiện nhiệt độ và ánh sáng phù hợp; lô hàng B là lốp ô tô nhập khẩu, có số lượng lớn; lô hàng C là mỹ phẩm đóng hộp, có đầy đủ hồ sơ công bố sản phẩm. Nếu cả ba lô hàng cùng rơi vào luồng đỏ, lô hàng nào được ưu tiên kiểm tra thực tế trước?",
    "options": [
      {
        "key": "A",
        "text": "Lô hàng A"
      },
      {
        "key": "B",
        "text": "Lô hàng B"
      },
      {
        "key": "C",
        "text": "Lô hàng C"
      },
      {
        "key": "D",
        "text": "Lô hàng có số lượng lớn hơn"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD010_0038",
    "stt": 536,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Lô hàng A là men vi sinh dùng trong sản xuất thực phẩm, phải bảo quản lạnh trong suốt quá trình vận chuyển; lô hàng B là đồng hồ đeo tay nhập khẩu, trị giá khai báo cao; lô hàng C là phụ kiện nội thất, đóng trong container nguyên niêm phong. Nếu cả ba lô hàng cùng rơi vào luồng đỏ, căn cứ nào phù hợp nhất để ưu tiên kiểm tra lô hàng A trước?",
    "options": [
      {
        "key": "A",
        "text": "Hàng hóa có yêu cầu bảo quản đặc biệt"
      },
      {
        "key": "B",
        "text": "Hàng hóa có trị giá khai báo cao"
      },
      {
        "key": "C",
        "text": "Hàng hóa được đóng trong container nguyên niêm phong"
      },
      {
        "key": "D",
        "text": "Hàng hóa có nhiều chủng loại trong cùng lô hàng"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD010_0039",
    "stt": 537,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Lô hàng A là trứng giống gia cầm nhập khẩu, cần kiểm soát nhiệt độ trong quá trình lưu giữ; lô hàng B là đá granite dạng tấm, có khối lượng lớn; lô hàng C là giày thể thao thành phẩm, doanh nghiệp nhập khẩu lần đầu. Nếu cả ba lô hàng cùng rơi vào luồng đỏ và cùng chờ kiểm tra thực tế, lô hàng nào được ưu tiên kiểm tra trước?",
    "options": [
      {
        "key": "A",
        "text": "Lô hàng A"
      },
      {
        "key": "B",
        "text": "Lô hàng B"
      },
      {
        "key": "C",
        "text": "Lô hàng C"
      },
      {
        "key": "D",
        "text": "Lô hàng của doanh nghiệp nhập khẩu lần đầu"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD010_0040",
    "stt": 538,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Tại cùng một địa điểm kiểm tra, ba lô hàng cùng bị phân luồng đỏ: lô hàng A là ngựa giống sống nhập khẩu, cần chăm sóc và theo dõi liên tục; lô hàng B là thiết bị âm thanh sân khấu có trị giá khai báo cao; lô hàng C là kính xây dựng dạng tấm, dễ vỡ khi bốc dỡ. Căn cứ nào phù hợp nhất để ưu tiên kiểm tra lô hàng A trước?",
    "options": [
      {
        "key": "A",
        "text": "Hàng hóa là động vật sống, cần xử lý kiểm tra kịp thời"
      },
      {
        "key": "B",
        "text": "Hàng hóa có trị giá khai báo cao hơn các lô còn lại"
      },
      {
        "key": "C",
        "text": "Hàng hóa có nguy cơ vỡ trong quá trình bốc dỡ"
      },
      {
        "key": "D",
        "text": "Hàng hóa có kích thước lớn, khó bố trí mặt bằng kiểm tra"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD010_0041",
    "stt": 539,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Ba lô hàng nhập khẩu cùng rơi vào luồng đỏ: lô hàng A là hóa chất thông thường dùng trong sản xuất sơn, đóng phuy kín; lô hàng B là mô cấy sinh học dùng trong nghiên cứu, phải duy trì nhiệt độ âm sâu; lô hàng C là máy nén khí đã qua sử dụng, cần kiểm tra chính sách quản lý chuyên ngành. Lô hàng nào nên được ưu tiên kiểm tra thực tế trước?",
    "options": [
      {
        "key": "A",
        "text": "Lô hàng A"
      },
      {
        "key": "B",
        "text": "Lô hàng B"
      },
      {
        "key": "C",
        "text": "Lô hàng C"
      },
      {
        "key": "D",
        "text": "Lô hàng có hồ sơ chuyên ngành phức tạp hơn"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD010_0042",
    "stt": 540,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Trong cùng ca kiểm tra, lô hàng A là cá cảnh sống nhập khẩu, đang chứa trong túi oxy chuyên dụng; lô hàng B là điện thoại di động nguyên hộp, số lượng lớn; lô hàng C là tranh nghệ thuật, có yêu cầu tránh va đập khi mở kiện. Nhận định nào phù hợp nhất về thứ tự ưu tiên kiểm tra?",
    "options": [
      {
        "key": "A",
        "text": "Ưu tiên lô hàng A vì hàng sống cần điều kiện bảo quản và xử lý nhanh"
      },
      {
        "key": "B",
        "text": "Ưu tiên lô hàng B vì có số lượng lớn và trị giá cao"
      },
      {
        "key": "C",
        "text": "Ưu tiên lô hàng C vì hàng dễ bị ảnh hưởng khi mở kiện"
      },
      {
        "key": "D",
        "text": "Ưu tiên lô hàng có chứng từ nộp sớm hơn"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD010_0043",
    "stt": 541,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Lô hàng A là giống nấm dùng trong sản xuất thực phẩm, phải bảo quản trong dải nhiệt độ ổn định; lô hàng B là nhôm thanh định hình, có dấu hiệu nghi vấn về mã số HS; lô hàng C là vali du lịch thành phẩm, doanh nghiệp nhập khẩu lần đầu. Nếu cả ba lô hàng cùng rơi vào luồng đỏ, nhận định nào sau đây không phù hợp khi xác định lô hàng cần kiểm tra trước?",
    "options": [
      {
        "key": "A",
        "text": "Có thể ưu tiên lô hàng cần điều kiện bảo quản đặc biệt"
      },
      {
        "key": "B",
        "text": "Không nên chỉ căn cứ vào việc doanh nghiệp nhập khẩu lần đầu"
      },
      {
        "key": "C",
        "text": "Không nên chỉ căn cứ vào dấu hiệu nghi vấn mã số HS nếu lô khác có yêu cầu bảo quản cấp thiết"
      },
      {
        "key": "D",
        "text": "Phải ưu tiên lô hàng của doanh nghiệp nhập khẩu lần đầu trong mọi trường hợp"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD010_0044",
    "stt": 542,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Hai lô hàng cùng rơi vào luồng đỏ tại cửa khẩu: lô hàng A là sầu riêng tươi nhập khẩu, đang bảo quản lạnh; lô hàng B là đàn ong giống sống nhập khẩu, cần duy trì điều kiện nuôi giữ và tránh kéo dài thời gian lưu tại khu vực kiểm tra. Nếu chỉ có thể bố trí kiểm tra ngay một lô hàng, lựa chọn nào phù hợp nhất?",
    "options": [
      {
        "key": "A",
        "text": "Ưu tiên lô hàng A vì là thực phẩm tươi"
      },
      {
        "key": "B",
        "text": "Ưu tiên lô hàng B vì là động vật sống cần xử lý kịp thời"
      },
      {
        "key": "C",
        "text": "Ưu tiên lô hàng có trị giá khai báo cao hơn"
      },
      {
        "key": "D",
        "text": "Ưu tiên lô hàng có số lượng kiện ít hơn"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD010_0045",
    "stt": 543,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Trong cùng ca kiểm tra, bốn lô hàng cùng rơi vào luồng đỏ: lô hàng A là bò giống sống nhập khẩu, đang chờ tại khu vực kiểm tra có nhân viên thú y đi kèm; lô hàng B là máy quét công nghiệp có trị giá khai báo cao; lô hàng C là kính quang học dễ vỡ, đóng trong kiện gỗ; lô hàng D là hàng may mặc của doanh nghiệp lần đầu nhập khẩu. Nếu chỉ bố trí được một lô hàng kiểm tra ngay, lựa chọn nào phù hợp nhất?",
    "options": [
      {
        "key": "A",
        "text": "Ưu tiên lô hàng A vì là động vật sống cần xử lý kiểm tra kịp thời"
      },
      {
        "key": "B",
        "text": "Ưu tiên lô hàng B vì có trị giá khai báo cao nhất"
      },
      {
        "key": "C",
        "text": "Ưu tiên lô hàng C vì hàng dễ vỡ khi mở kiện"
      },
      {
        "key": "D",
        "text": "Ưu tiên lô hàng D vì doanh nghiệp nhập khẩu lần đầu"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD010_0046",
    "stt": 544,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Ba lô hàng cùng bị phân luồng đỏ tại cửa khẩu: lô hàng A là insulin nhập khẩu, phải duy trì nhiệt độ bảo quản ổn định; lô hàng B là rượu vang nhập khẩu, có dấu hiệu nghi vấn về mã số HS; lô hàng C là thiết bị điện gia dụng, có giấy chứng nhận kiểm tra chất lượng nộp kèm hồ sơ. Nhận định nào phù hợp nhất về việc ưu tiên kiểm tra thực tế?",
    "options": [
      {
        "key": "A",
        "text": "Ưu tiên lô hàng B vì có nghi vấn mã số HS"
      },
      {
        "key": "B",
        "text": "Ưu tiên lô hàng A vì có yêu cầu bảo quản đặc biệt"
      },
      {
        "key": "C",
        "text": "Ưu tiên lô hàng C vì đã có chứng từ kiểm tra chất lượng"
      },
      {
        "key": "D",
        "text": "Ưu tiên lô hàng có số tờ khai đăng ký sớm hơn"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD010_0047",
    "stt": 545,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Lô hàng A là hàu sống nhập khẩu, đang được duy trì trong hệ thống nước biển tuần hoàn; lô hàng B là đá thạch anh dạng khối, có trọng lượng lớn; lô hàng C là mỹ phẩm cao cấp, trị giá khai báo cao; lô hàng D là phụ tùng ô tô, có nhiều dòng hàng trên cùng tờ khai. Nếu các lô hàng cùng rơi vào luồng đỏ và cùng sẵn sàng kiểm tra, căn cứ nào hợp lý nhất để ưu tiên lô hàng A?",
    "options": [
      {
        "key": "A",
        "text": "Hàng hóa sống, khó bảo quản nếu kéo dài thời gian chờ"
      },
      {
        "key": "B",
        "text": "Hàng hóa có trọng lượng lớn, cần nhiều nhân lực bốc dỡ"
      },
      {
        "key": "C",
        "text": "Hàng hóa có trị giá khai báo cao, dễ phát sinh nghi vấn trị giá"
      },
      {
        "key": "D",
        "text": "Hàng hóa có nhiều dòng hàng, cần kiểm tra phân loại chi tiết"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD010_0048",
    "stt": 546,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Tại một địa điểm kiểm tra, lô hàng A là hoa cắt cành nhập khẩu, đang bảo quản lạnh và còn khả năng duy trì chất lượng trong 24 giờ; lô hàng B là chế phẩm sinh học phục vụ xét nghiệm, phải duy trì nhiệt độ âm sâu và thiết bị bảo quản dự phòng chỉ còn hoạt động trong 3 giờ; lô hàng C là laptop nguyên hộp, số lượng lớn; lô hàng D là máy bơm công nghiệp đã qua sử dụng, thuộc diện kiểm tra chính sách quản lý. Lô hàng nào nên được ưu tiên kiểm tra trước?",
    "options": [
      {
        "key": "A",
        "text": "Lô hàng A"
      },
      {
        "key": "B",
        "text": "Lô hàng B"
      },
      {
        "key": "C",
        "text": "Lô hàng C"
      },
      {
        "key": "D",
        "text": "Lô hàng D"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD010_0049",
    "stt": 547,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Các lô hàng cùng rơi vào luồng đỏ và cùng chờ kiểm tra thực tế. Lô hàng A là chim cảnh sống, cần duy trì điều kiện chăm sóc trong thời gian lưu giữ; lô hàng B là gốm sứ mỹ nghệ dễ vỡ; lô hàng C là đồng hồ thông minh, trị giá khai báo cao; lô hàng D là vải nguyên liệu nhập khẩu để sản xuất xuất khẩu, có C/O ưu đãi. Dữ kiện nào sau đây không phải là căn cứ phù hợp để ưu tiên kiểm tra trước?",
    "options": [
      {
        "key": "A",
        "text": "Hàng hóa là động vật sống"
      },
      {
        "key": "B",
        "text": "Hàng hóa có yêu cầu bảo quản, chăm sóc đặc biệt"
      },
      {
        "key": "C",
        "text": "Hàng hóa khó bảo quản nếu kéo dài thời gian chờ"
      },
      {
        "key": "D",
        "text": "Hàng hóa có C/O ưu đãi kèm theo hồ sơ"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD010_0050",
    "stt": 548,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.1 Kiểm tra hải quan",
    "cauHoi": "Lô hàng A là phôi giống bò bảo quản trong bình nitơ lỏng, cần kiểm soát điều kiện bảo quản liên tục; lô hàng B là thép tấm nhập khẩu, có nghi vấn về khai báo mã số; lô hàng C là xe nâng đã qua sử dụng, cần kiểm tra chính sách mặt hàng; lô hàng D là hàng gia dụng, doanh nghiệp đề nghị kiểm tra sớm để kịp giao hàng. Nếu bốn lô hàng cùng rơi vào luồng đỏ, cách xử lý nào phù hợp nhất?",
    "options": [
      {
        "key": "A",
        "text": "Ưu tiên kiểm tra lô hàng A do có yêu cầu bảo quản đặc biệt"
      },
      {
        "key": "B",
        "text": "Ưu tiên kiểm tra lô hàng B do có nghi vấn về mã số HS"
      },
      {
        "key": "C",
        "text": "Ưu tiên kiểm tra lô hàng C do thuộc diện kiểm tra chính sách mặt hàng"
      },
      {
        "key": "D",
        "text": "Ưu tiên kiểm tra lô hàng D do doanh nghiệp có đề nghị giao hàng gấp"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD011_0001",
    "stt": 549,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.2 Giám sát hải quan",
    "cauHoi": "Trong các đối tượng sau, đối tượng nào thuộc diện chịu sự giám sát hải quan?",
    "options": [
      {
        "key": "A",
        "text": "Lô hàng gạo ST25 sản xuất tại Sóc Trăng, bán cho siêu thị tại Hà Nội"
      },
      {
        "key": "B",
        "text": "Lô hàng mỹ phẩm Hàn Quốc đã thông quan tại Cát Lái, đưa về kho quận 7"
      },
      {
        "key": "C",
        "text": "Xe tải chở hàng linh kiện điện tử quá cảnh qua cửa khẩu Hữu Nghị"
      },
      {
        "key": "D",
        "text": "Nhân viên hãng tàu Maersk làm việc tại văn phòng cảng Hải Phòng"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD011_0002",
    "stt": 550,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.2 Giám sát hải quan",
    "cauHoi": "Nguyên tắc quản lý rủi ro trong giám sát hải quan có ý nghĩa như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Làm căn cứ lựa chọn mức độ và phương thức giám sát phù hợp"
      },
      {
        "key": "B",
        "text": "Loại bỏ vai trò của công chức hải quan trong quá trình giám sát"
      },
      {
        "key": "C",
        "text": "Yêu cầu giám sát 100% lô hàng xuất khẩu, nhập khẩu như nhau"
      },
      {
        "key": "D",
        "text": "Chỉ áp dụng giám sát với hàng hóa có thuế suất trên 20%"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD011_0003",
    "stt": 551,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.2 Giám sát hải quan",
    "cauHoi": "Phương thức giám sát hải quan bằng thiết bị kỹ thuật bao gồm những công cụ nào?",
    "options": [
      {
        "key": "A",
        "text": "Camera giám sát, cân điện tử và thiết bị định vị GPS"
      },
      {
        "key": "B",
        "text": "Máy soi container và thiết bị kiểm định hóa chất tại chỗ"
      },
      {
        "key": "C",
        "text": "Hệ thống VNACCS/VCIS"
      },
      {
        "key": "D",
        "text": "Sổ kế toán và phần mềm báo cáo tài chính của doanh nghiệp"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD011_0004",
    "stt": 552,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.2 Giám sát hải quan",
    "cauHoi": "Hình thức giám sát trực tiếp của công chức hải quan thường được ưu tiên áp dụng trong bối cảnh nào?",
    "options": [
      {
        "key": "A",
        "text": "Tại cảng biển có hệ thống camera giám sát đầy đủ"
      },
      {
        "key": "B",
        "text": "Tại khu vực biên giới còn hạn chế về thiết bị kỹ thuật"
      },
      {
        "key": "C",
        "text": "Khi doanh nghiệp trả phí để công chức áp tải hàng hóa"
      },
      {
        "key": "D",
        "text": "Với mọi tờ khai luồng xanh để bảo đảm an toàn tuyệt đối"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD011_0005",
    "stt": 553,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.2 Giám sát hải quan",
    "cauHoi": "Hoạt động giám sát hải quan đối với hàng hóa quá cảnh kéo dài trong bao lâu?",
    "options": [
      {
        "key": "A",
        "text": "Tối đa 30 ngày kể từ ngày đăng ký tờ khai quá cảnh"
      },
      {
        "key": "B",
        "text": "Từ cửa khẩu nhập đầu tiên đến cửa khẩu xuất cuối cùng"
      },
      {
        "key": "C",
        "text": "Trong suốt thời gian hàng lưu tại khu phi thuế quan"
      },
      {
        "key": "D",
        "text": "Từ khi hàng được bốc dỡ đến khi nộp thuế quá cảnh"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD011_0006",
    "stt": 554,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.2 Giám sát hải quan",
    "cauHoi": "Trường hợp nào sau đây bắt buộc phải thực hiện niêm phong hải quan?",
    "options": [
      {
        "key": "A",
        "text": "Lô hàng giày thể thao xuất khẩu qua cảng Hải Phòng, tờ khai luồng xanh đã thông quan"
      },
      {
        "key": "B",
        "text": "Lô hàng mỹ phẩm nhập khẩu qua cảng Cát Lái, làm thủ tục ngay tại cửa khẩu nhập"
      },
      {
        "key": "C",
        "text": "Lô hàng linh kiện điện tử nhập khẩu qua cảng Hải Phòng, chuyển cửa khẩu về Bắc Ninh"
      },
      {
        "key": "D",
        "text": "Lô hàng quần áo viện trợ nhập khẩu qua sân bay Nội Bài, thuộc diện miễn thuế nhập khẩu"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD011_0007",
    "stt": 555,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.2 Giám sát hải quan",
    "cauHoi": "Thời gian giám sát hải quan đối với hàng hóa nhập khẩu được xác định như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Từ khi hàng hóa được xếp lên phương tiện vận tải tại nước xuất khẩu"
      },
      {
        "key": "B",
        "text": "Trong vòng 5 năm kể từ ngày hàng hóa được thông quan tại cửa khẩu"
      },
      {
        "key": "C",
        "text": "Từ khi đăng ký tờ khai đến khi hàng hóa được nộp đủ thuế"
      },
      {
        "key": "D",
        "text": "Từ khi hàng hóa tới địa bàn hoạt động hải quan đến khi được thông quan và đưa ra khỏi địa bàn đó"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD011_0008",
    "stt": 556,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.2 Giám sát hải quan",
    "cauHoi": "Ưu điểm nổi bật nhất của niêm phong điện tử e-seal so với kẹp chì truyền thống là gì?",
    "options": [
      {
        "key": "A",
        "text": "Theo dõi hành trình và tình trạng hàng hóa qua GPS"
      },
      {
        "key": "B",
        "text": "Có giá thành rẻ hơn và dễ sản xuất hàng loạt"
      },
      {
        "key": "C",
        "text": "Dùng được cho mọi loại hàng rời không bao kiện"
      },
      {
        "key": "D",
        "text": "Không cần công chức hải quan tham gia thủ tục"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD011_0009",
    "stt": 557,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.2 Giám sát hải quan",
    "cauHoi": "Chọn câu sai về niêm phong hải quan:",
    "options": [
      {
        "key": "A",
        "text": "Niêm phong bằng chì của hãng tàu là biện pháp phổ biến duy nhất hiện nay để niêm phong container tại Hải quan Việt Nam"
      },
      {
        "key": "B",
        "text": "Niêm phong giấy thường sử dụng để niêm phong các loại hàng lẻ như kiện, thùng carton"
      },
      {
        "key": "C",
        "text": "Niêm phong điện tử e-seal vừa thực hiện chức năng niêm phong vừa có thể theo dõi hàng hóa vận chuyển"
      },
      {
        "key": "D",
        "text": "Là việc sử dụng các công cụ kỹ thuật hoặc dấu hiệu để nhận biết và bảo đảm tính nguyên trạng của hàng hóa"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD011_0010",
    "stt": 558,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.2 Giám sát hải quan",
    "cauHoi": "Hình thức nào sau đây không sử dụng để giám sát hải quan?",
    "options": [
      {
        "key": "A",
        "text": "Sử dụng trực tiếp công chức hải quan"
      },
      {
        "key": "B",
        "text": "Dùng chì hải quan"
      },
      {
        "key": "C",
        "text": "Sử dụng thiết bị định vị GPS"
      },
      {
        "key": "D",
        "text": "Sử dụng máy soi container cố định hoặc di động"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD011_0011",
    "stt": 559,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.2 Giám sát hải quan",
    "cauHoi": "Đâu không phải là căn cứ trực tiếp để áp dụng biện pháp giám sát hải quan đối với hàng hóa xuất khẩu, nhập khẩu?",
    "options": [
      {
        "key": "A",
        "text": "Thời điểm lô hàng được đăng ký tờ khai hải quan"
      },
      {
        "key": "B",
        "text": "Tuyến đường vận chuyển đối với hàng hóa xuất khẩu, nhập khẩu"
      },
      {
        "key": "C",
        "text": "Loại hình xuất khẩu, nhập khẩu"
      },
      {
        "key": "D",
        "text": "Chính sách thuế đối với hàng hóa xuất khẩu, nhập khẩu"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD011_0012",
    "stt": 560,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.2 Giám sát hải quan",
    "cauHoi": "Đâu không phải tiêu chí lựa chọn phương thức giám sát hải quan đối với hàng hóa xuất nhập khẩu?",
    "options": [
      {
        "key": "A",
        "text": "Chính sách thuế đối với hàng hóa xuất nhập khẩu"
      },
      {
        "key": "B",
        "text": "Tuyến đường vận chuyển đối với hàng hoá XNK"
      },
      {
        "key": "C",
        "text": "Loại hình xuất khẩu, nhập khẩu"
      },
      {
        "key": "D",
        "text": "Tổng trị giá giao dịch của lô hàng xuất nhập khẩu"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD011_0013",
    "stt": 561,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.2 Giám sát hải quan",
    "cauHoi": "Cơ quan hải quan sử dụng phương tiện nào sau đây để thực hiện việc niêm phong hàng hóa, container?",
    "options": [
      {
        "key": "A",
        "text": "Các loại khóa niêm phong thương mại do doanh nghiệp vận tải tự trang bị"
      },
      {
        "key": "B",
        "text": "Các loại tem nhãn nhận diện hàng hóa đặc thù của người xuất khẩu sản phẩm"
      },
      {
        "key": "C",
        "text": "Các loại dây buộc hoặc vật liệu đóng gói chuyên dụng của hãng tàu vận chuyển"
      },
      {
        "key": "D",
        "text": "Các loại chì cối hoặc chì điện tử chuyên dụng do cơ quan hải quan cung cấp"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD011_0014",
    "stt": 562,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.2 Giám sát hải quan",
    "cauHoi": "Đâu KHÔNG phải phương thức giám sát hải quan tại cảng Lạch Huyện?",
    "options": [
      {
        "key": "A",
        "text": "E-seal"
      },
      {
        "key": "B",
        "text": "Hệ thống camera tại cảng Lạch Huyện"
      },
      {
        "key": "C",
        "text": "Thẻ điện tử (RFID)"
      },
      {
        "key": "D",
        "text": "Nhân viên giám sát của cảng Lạch Huyện"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD011_0015",
    "stt": 563,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.2 Giám sát hải quan",
    "cauHoi": "Hàng hóa nào sau đây thuộc đối tượng chịu sự giám sát hải quan?",
    "options": [
      {
        "key": "A",
        "text": "Hàng nhập khẩu đã thông quan và đưa ra khỏi khu vực cảng"
      },
      {
        "key": "B",
        "text": "Hàng xuất khẩu đã làm thủ tục nhưng chưa thực xuất"
      },
      {
        "key": "C",
        "text": "Hàng nội địa vận chuyển giữa hai kho trong nước"
      },
      {
        "key": "D",
        "text": "Hàng nhập khẩu đã bán cho đại lý sau khi thông quan"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD011_0016",
    "stt": 564,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.2 Giám sát hải quan",
    "cauHoi": "Trường hợp nào thể hiện giám sát trực tiếp của công chức hải quan?",
    "options": [
      {
        "key": "A",
        "text": "Theo dõi container bằng thiết bị định vị trên tuyến vận chuyển"
      },
      {
        "key": "B",
        "text": "Theo dõi tình trạng hàng hóa qua dữ liệu do doanh nghiệp cập nhật"
      },
      {
        "key": "C",
        "text": "Áp tải hàng hóa để theo dõi việc vận chuyển theo tuyến quy định"
      },
      {
        "key": "D",
        "text": "Đối chiếu dữ liệu hàng hóa trên hệ thống giám sát điện tử"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD011_0017",
    "stt": 565,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.2 Giám sát hải quan",
    "cauHoi": "Vì sao hàng xuất khẩu đã thông quan nhưng chưa thực xuất vẫn chịu sự giám sát hải quan?",
    "options": [
      {
        "key": "A",
        "text": "Vì hàng chưa hoàn tất việc thanh toán theo hợp đồng xuất khẩu"
      },
      {
        "key": "B",
        "text": "Vì hàng chưa được kiểm tra sau thông quan tại doanh nghiệp"
      },
      {
        "key": "C",
        "text": "Vì thời gian chịu sự giám sát hải quan của hàng hóa chưa kết thúc"
      },
      {
        "key": "D",
        "text": "Vì hàng chưa được xác định lại trị giá trên tờ khai xuất khẩu"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD011_0018",
    "stt": 566,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.2 Giám sát hải quan",
    "cauHoi": "Nhận định nào đúng về việc áp dụng niêm phong hải quan trong giám sát hàng hóa?",
    "options": [
      {
        "key": "A",
        "text": "Niêm phong hải quan được dùng để thay cho việc kiểm tra hồ sơ"
      },
      {
        "key": "B",
        "text": "Niêm phong hải quan chỉ áp dụng đối với lô hàng thuộc luồng Đỏ"
      },
      {
        "key": "C",
        "text": "Niêm phong hải quan nhằm bảo đảm nguyên trạng hàng hóa khi giám sát"
      },
      {
        "key": "D",
        "text": "Niêm phong hải quan chỉ dùng khi doanh nghiệp đề nghị kiểm tra thực tế"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD011_0019",
    "stt": 567,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.2 Giám sát hải quan",
    "cauHoi": "Một lô hàng tạm nhập tái xuất được tạm nhập tại một cửa khẩu nhưng tái xuất tại cửa khẩu khác. Cách xử lý nào phù hợp?",
    "options": [
      {
        "key": "A",
        "text": "Vận chuyển theo hồ sơ nội bộ vì hàng không tiêu thụ tại Việt Nam"
      },
      {
        "key": "B",
        "text": "Chỉ kiểm tra hồ sơ sau khi hàng đã rời khỏi lãnh thổ Việt Nam"
      },
      {
        "key": "C",
        "text": "Khai báo vận chuyển, niêm phong và giám sát đến cửa khẩu tái xuất"
      },
      {
        "key": "D",
        "text": "Chuyển sang tiêu thụ nội địa nếu thay đổi cửa khẩu tái xuất"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD011_0020",
    "stt": 568,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.2 Giám sát hải quan",
    "cauHoi": "Hàng hóa nhập khẩu đã được thông quan hoặc giải phóng hàng vẫn chịu sự giám sát hải quan đến thời điểm nào?",
    "options": [
      {
        "key": "A",
        "text": "Khi doanh nghiệp hoàn tất thanh toán tiền hàng"
      },
      {
        "key": "B",
        "text": "Khi hàng được đưa ra khỏi khu vực giám sát"
      },
      {
        "key": "C",
        "text": "Khi doanh nghiệp nhận đủ chứng từ nhập khẩu"
      },
      {
        "key": "D",
        "text": "Khi hàng được vận chuyển về kho riêng"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD011_0021",
    "stt": 569,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.2 Giám sát hải quan",
    "cauHoi": "Lô hàng nhập khẩu đã được giải phóng hàng nhưng vẫn còn nằm trong khu vực giám sát hải quan tại cảng. Nhận định nào đúng về tình trạng giám sát của lô hàng này?",
    "options": [
      {
        "key": "A",
        "text": "Hàng đã kết thúc giám sát vì đã được giải phóng hàng"
      },
      {
        "key": "B",
        "text": "Hàng chỉ còn thuộc trách nhiệm theo dõi của doanh nghiệp cảng"
      },
      {
        "key": "C",
        "text": "Hàng vẫn chịu giám sát cho đến khi được đưa ra khỏi khu vực giám sát"
      },
      {
        "key": "D",
        "text": "Hàng chuyển sang diện kiểm tra sau thông quan tại doanh nghiệp"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD011_0022",
    "stt": 570,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.2 Giám sát hải quan",
    "cauHoi": "Nhận định nào đúng về việc lựa chọn biện pháp giám sát hải quan đối với từng lô hàng?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ căn cứ vào trị giá khai báo của hàng hóa trên tờ khai"
      },
      {
        "key": "B",
        "text": "Chỉ căn cứ vào địa điểm lưu giữ hàng hóa trong khu vực cảng"
      },
      {
        "key": "C",
        "text": "Căn cứ vào loại hàng, cách đóng gói, vận chuyển và mức độ rủi ro"
      },
      {
        "key": "D",
        "text": "Căn cứ vào thời điểm doanh nghiệp hoàn thành nghĩa vụ thuế"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD011_0023",
    "stt": 571,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.2 Giám sát hải quan",
    "cauHoi": "Một container hàng nhập khẩu chuyển cửa khẩu được dỡ tại cảng nhập rồi vận chuyển đến địa điểm làm thủ tục hải quan khác. Biện pháp nào phù hợp trong quá trình vận chuyển?",
    "options": [
      {
        "key": "A",
        "text": "Cho vận chuyển tự do nếu doanh nghiệp đã có vận đơn"
      },
      {
        "key": "B",
        "text": "Chỉ đối chiếu hồ sơ sau khi hàng đưa về kho của doanh nghiệp"
      },
      {
        "key": "C",
        "text": "Niêm phong container và giám sát trong quá trình vận chuyển"
      },
      {
        "key": "D",
        "text": "Chuyển sang kiểm tra sau thông quan thay cho giám sát vận chuyển"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD011_0024",
    "stt": 572,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.2 Giám sát hải quan",
    "cauHoi": "Một lô hàng quá cảnh đi qua Việt Nam từ cửa khẩu nhập đầu tiên đến cửa khẩu xuất cuối cùng. Thời gian giám sát hải quan được xác định như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Từ khi ký hợp đồng vận tải đến khi hàng đến cửa khẩu xuất"
      },
      {
        "key": "B",
        "text": "Từ khi hàng vào kho vận chuyển đến khi lập xong chứng từ vận tải"
      },
      {
        "key": "C",
        "text": "Từ khi hàng tới cửa khẩu nhập đầu tiên đến khi ra khỏi cửa khẩu xuất cuối cùng"
      },
      {
        "key": "D",
        "text": "Từ khi mở tờ khai nhập khẩu đến khi hàng được tiêu thụ tại Việt Nam"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD011_0025",
    "stt": 573,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.2 Giám sát hải quan",
    "cauHoi": "Một xe tải chở hàng rời đang chịu sự giám sát hải quan nhưng thùng xe không kín như container. Cách bảo đảm nguyên trạng nào phù hợp hơn?",
    "options": [
      {
        "key": "A",
        "text": "Ghi nhận biển số xe và theo dõi thời gian vận chuyển"
      },
      {
        "key": "B",
        "text": "Chụp ảnh hiện trạng hàng hóa trước khi xe rời điểm đi"
      },
      {
        "key": "C",
        "text": "Che phủ, cố định bạt và niêm phong để bảo đảm nguyên trạng"
      },
      {
        "key": "D",
        "text": "Lập cam kết trách nhiệm của người vận chuyển hàng"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD011_0026",
    "stt": 574,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.2 Giám sát hải quan",
    "cauHoi": "Một container đang vận chuyển hàng chịu giám sát hải quan bị phát hiện số niêm phong thực tế khác với thông tin đã đăng ký. Cách xử lý nào phù hợp?",
    "options": [
      {
        "key": "A",
        "text": "Đối chiếu vận đơn và tiếp tục cho container di chuyển"
      },
      {
        "key": "B",
        "text": "Ghi nhận sai lệch để cập nhật khi container đến nơi"
      },
      {
        "key": "C",
        "text": "Kiểm tra, đối chiếu trước khi cho tiếp tục vận chuyển"
      },
      {
        "key": "D",
        "text": "Yêu cầu doanh nghiệp giải trình sau khi hoàn tất giao hàng"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD011_0027",
    "stt": 575,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.2 Giám sát hải quan",
    "cauHoi": "Trường hợp nào phù hợp với giám sát bằng phương tiện, thiết bị kỹ thuật?",
    "options": [
      {
        "key": "A",
        "text": "Công chức hải quan đi cùng phương tiện vận chuyển hàng"
      },
      {
        "key": "B",
        "text": "Công chức hải quan kiểm tra trực tiếp tình trạng kiện hàng"
      },
      {
        "key": "C",
        "text": "Gắn thiết bị định vị để theo dõi phương tiện vận chuyển"
      },
      {
        "key": "D",
        "text": "Doanh nghiệp gửi ảnh hiện trạng hàng trên hệ thống khai báo"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD011_0028",
    "stt": 576,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.2 Giám sát hải quan",
    "cauHoi": "Tại cổng cảng, container nhập khẩu đã có thông tin đủ điều kiện qua khu vực giám sát nhưng số container thực tế không khớp với thông tin trên hệ thống. Cách xử lý nào phù hợp?",
    "options": [
      {
        "key": "A",
        "text": "Đối chiếu lệnh giao hàng và cho container ra cổng"
      },
      {
        "key": "B",
        "text": "Ghi nhận sai lệch để doanh nghiệp cập nhật sau"
      },
      {
        "key": "C",
        "text": "Tạm dừng cho ra cổng để kiểm tra, đối chiếu thông tin"
      },
      {
        "key": "D",
        "text": "Xác nhận qua khu vực giám sát nếu doanh nghiệp đã nộp thuế"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD011_0029",
    "stt": 577,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.2 Giám sát hải quan",
    "cauHoi": "Một container hàng đang chịu giám sát hải quan được gắn niêm phong điện tử để vận chuyển đến địa điểm đích. Trên đường đi, hệ thống ghi nhận phương tiện rời khỏi tuyến đã đăng ký. Cách xử lý nào phù hợp?",
    "options": [
      {
        "key": "A",
        "text": "Đối chiếu thời gian đến địa điểm đích trước khi xử lý"
      },
      {
        "key": "B",
        "text": "Ghi nhận cảnh báo và chờ doanh nghiệp giải trình sau"
      },
      {
        "key": "C",
        "text": "Kiểm tra tín hiệu, tuyến đi và tình trạng niêm phong, hàng hóa"
      },
      {
        "key": "D",
        "text": "Chuyển hồ sơ sang kiểm tra sau thông quan tại doanh nghiệp"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD011_0030",
    "stt": 578,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.2 Giám sát hải quan",
    "cauHoi": "Một container hàng nhập khẩu đang lưu tại kho bãi trong khu vực giám sát hải quan. Trong thời gian lưu giữ, vỏ container bị hư hỏng, doanh nghiệp kinh doanh kho bãi đề nghị mở container để chuyển hàng sang container khác. Cách xử lý nào phù hợp nhất?",
    "options": [
      {
        "key": "A",
        "text": "Cho chuyển hàng nếu doanh nghiệp kho bãi cam kết giữ nguyên số lượng"
      },
      {
        "key": "B",
        "text": "Cho chuyển hàng rồi cập nhật thông tin sau khi hoàn thành việc sang container"
      },
      {
        "key": "C",
        "text": "Chuyển hàng dưới sự giám sát hải quan và cập nhật thông tin liên quan"
      },
      {
        "key": "D",
        "text": "Từ chối mọi trường hợp chuyển hàng vì container đang chịu sự giám sát hải quan"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD011_0031",
    "stt": 579,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.2 Giám sát hải quan",
    "cauHoi": "Một doanh nghiệp kinh doanh kho ngoại quan phát hiện hệ thống camera tại khu vực cửa kho bị mất kết nối trong thời gian đang lưu giữ hàng chịu sự giám sát hải quan. Cách xử lý nào phù hợp nhất?",
    "options": [
      {
        "key": "A",
        "text": "Tiếp tục xuất, nhập hàng bình thường nếu kho vẫn có bảo vệ trực tiếp"
      },
      {
        "key": "B",
        "text": "Chỉ lưu lại biên bản nội bộ và khắc phục camera vào cuối ngày"
      },
      {
        "key": "C",
        "text": "Thông báo cho hải quan, khắc phục kết nối và tăng cường giám sát thay thế"
      },
      {
        "key": "D",
        "text": "Tạm dừng toàn bộ hoạt động của kho cho đến khi có quyết định xử phạt"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD011_0032",
    "stt": 580,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.2 Giám sát hải quan",
    "cauHoi": "Một lô hàng tái xuất đã đăng ký cửa khẩu xuất cụ thể, nhưng doanh nghiệp đề nghị chia nhỏ lô hàng để đưa qua nhiều lối mở gần biên giới cho kịp tiến độ giao hàng. Cách xử lý nào phù hợp nhất?",
    "options": [
      {
        "key": "A",
        "text": "Cho phép chia nhỏ nếu doanh nghiệp vẫn tái xuất đủ số lượng hàng"
      },
      {
        "key": "B",
        "text": "Cho phép nếu người vận chuyển cam kết đưa hàng ra khỏi Việt Nam"
      },
      {
        "key": "C",
        "text": "Không thực hiện nếu chưa được hải quan chấp thuận điều chỉnh địa điểm tái xuất"
      },
      {
        "key": "D",
        "text": "Chuyển sang kiểm tra sau thông quan sau khi doanh nghiệp hoàn tất tái xuất"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD011_0033",
    "stt": 581,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.2 Giám sát hải quan",
    "cauHoi": "Một container hàng tạm nhập tái xuất đang vận chuyển đến cửa khẩu xuất bằng phương tiện có gắn seal định vị điện tử. Trên hệ thống, phương tiện vẫn đi đúng tuyến nhưng tín hiệu seal bị mất trong một khoảng thời gian bất thường. Cách xử lý nào phù hợp nhất?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua vì phương tiện vẫn đi đúng tuyến đường đã đăng ký"
      },
      {
        "key": "B",
        "text": "Chỉ yêu cầu doanh nghiệp giải trình sau khi hàng đã tái xuất"
      },
      {
        "key": "C",
        "text": "Kiểm tra nguyên nhân mất tín hiệu và xác minh tình trạng niêm phong, hàng hóa"
      },
      {
        "key": "D",
        "text": "Hủy thủ tục vận chuyển và yêu cầu doanh nghiệp mở tờ khai mới"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD011_0034",
    "stt": 582,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.2 Giám sát hải quan",
    "cauHoi": "Một lô hàng nhập khẩu đang lưu tại khu vực giám sát của cảng. Doanh nghiệp đề nghị rút một phần hàng khỏi container để kiểm đếm nội bộ trước khi đưa hàng ra khỏi cảng. Cách xử lý nào phù hợp nhất?",
    "options": [
      {
        "key": "A",
        "text": "Cho rút hàng nếu doanh nghiệp cảng xác nhận còn nguyên số container"
      },
      {
        "key": "B",
        "text": "Cho rút hàng nếu chủ hàng cam kết không thay đổi chủng loại hàng hóa"
      },
      {
        "key": "C",
        "text": "Chỉ thực hiện khi được hải quan chấp thuận và có giám sát việc rút hàng"
      },
      {
        "key": "D",
        "text": "Từ chối mọi trường hợp rút hàng vì container đã nằm trong khu vực cảng"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD011_0035",
    "stt": 583,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.2 Giám sát hải quan",
    "cauHoi": "Một phương tiện vận chuyển hàng chịu sự giám sát hải quan đến địa điểm đích đúng thời gian, nhưng khi kiểm tra thấy dấu hiệu can thiệp vào vị trí gắn niêm phong. Cách xử lý nào phù hợp nhất?",
    "options": [
      {
        "key": "A",
        "text": "Xác nhận hoàn thành vận chuyển vì phương tiện đến đúng thời gian"
      },
      {
        "key": "B",
        "text": "Cho dỡ hàng nếu doanh nghiệp vận tải giải trình bằng văn bản"
      },
      {
        "key": "C",
        "text": "Kiểm tra niêm phong, hàng hóa và lập hồ sơ xử lý theo quy định"
      },
      {
        "key": "D",
        "text": "Chuyển trách nhiệm kiểm tra cho doanh nghiệp nhận hàng tại địa điểm đích"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD011_0036",
    "stt": 584,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.2 Giám sát hải quan",
    "cauHoi": "Niêm phong hải quan là gì?",
    "options": [
      {
        "key": "A",
        "text": "Một phương thức giám sát của hải quan"
      },
      {
        "key": "B",
        "text": "Một phương thức kiểm tra thực tế hàng hóa của hải quan"
      },
      {
        "key": "C",
        "text": "Một hình thức giám sát trực tiếp do công chức hải quan thực hiện"
      },
      {
        "key": "D",
        "text": "Một biện pháp thay thế toàn bộ việc giám sát hải quan"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "maCauHoi": "CD011_0037",
    "stt": 585,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.2 Giám sát hải quan",
    "cauHoi": "Nhận định nào đúng về thời gian giám sát hải quan đối với hàng hóa quá cảnh?",
    "options": [
      {
        "key": "A",
        "text": "Hàng hóa quá cảnh chịu sự giám sát từ khi tới địa bàn hoạt động của cơ quan hải quan đến khi được thông quan, giải phóng hàng hóa"
      },
      {
        "key": "B",
        "text": "Hàng hóa quá cảnh chịu sự giám sát từ khi tới cửa khẩu nhập đầu tiên đến khi ra khỏi cửa khẩu xuất cuối cùng"
      },
      {
        "key": "C",
        "text": "Hàng hóa quá cảnh chỉ chịu sự giám sát sau khi đã hoàn thành thủ tục hải quan tại cửa khẩu nhập"
      },
      {
        "key": "D",
        "text": "Hàng hóa quá cảnh chỉ chịu sự giám sát trong thời gian kiểm tra thực tế hàng hóa"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD012_0001",
    "stt": 586,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.3 Kiểm tra sau thông quan",
    "cauHoi": "Thời hạn được kiểm tra sau thông quan đối với hàng hóa xuất khẩu, nhập khẩu được quy định như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "03 năm kể từ ngày thông quan hàng hóa"
      },
      {
        "key": "B",
        "text": "05 năm kể từ ngày thông quan hàng hóa"
      },
      {
        "key": "C",
        "text": "05 năm kể từ ngày đăng ký tờ khai hải quan"
      },
      {
        "key": "D",
        "text": "10 năm kể từ ngày đăng ký tờ khai hải quan"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD012_0002",
    "stt": 587,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.3 Kiểm tra sau thông quan",
    "cauHoi": "Địa điểm thực hiện kiểm tra sau thông quan là ở đâu?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ tại trụ sở cơ quan hải quan"
      },
      {
        "key": "B",
        "text": "Chỉ tại trụ sở người khai hải quan"
      },
      {
        "key": "C",
        "text": "Tại cửa khẩu xuất khẩu hoặc nhập khẩu hàng hóa"
      },
      {
        "key": "D",
        "text": "Tại trụ sở cơ quan hải quan và trụ sở người khai hải quan"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD012_0003",
    "stt": 588,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.3 Kiểm tra sau thông quan",
    "cauHoi": "Cơ quan hải quan tiến hành kiểm tra sau thông quan trong trường hợp nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Khi người khai hải quan đã hoàn thành việc nộp thuế nhập khẩu"
      },
      {
        "key": "B",
        "text": "Khi hàng hóa đã được đưa ra khỏi địa bàn hoạt động hải quan"
      },
      {
        "key": "C",
        "text": "Khi có dấu hiệu vi phạm hoặc theo kế hoạch đánh giá tuân thủ"
      },
      {
        "key": "D",
        "text": "Khi doanh nghiệp đề nghị kiểm tra lại hồ sơ hải quan"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD012_0004",
    "stt": 589,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.3 Kiểm tra sau thông quan",
    "cauHoi": "Trong kiểm tra sau thông quan, cơ quan hải quan có được kiểm tra thực tế hàng hóa hay không?",
    "options": [
      {
        "key": "A",
        "text": "Không, chỉ được kiểm tra hồ sơ và chứng từ kế toán"
      },
      {
        "key": "B",
        "text": "Có, bắt buộc kiểm tra thực tế đối với mọi lô hàng"
      },
      {
        "key": "C",
        "text": "Có, trong trường hợp cần thiết và còn điều kiện"
      },
      {
        "key": "D",
        "text": "Có, nhưng chỉ khi người khai hải quan đồng ý"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD012_0005",
    "stt": 590,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.3 Kiểm tra sau thông quan",
    "cauHoi": "Trường hợp người khai hải quan tự kiểm tra lô hàng đã thông quan, phát hiện sai sót, tự giác thông báo và tự nguyện khắc phục hậu quả trong thời hạn quy định thì được xử lý như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Vẫn bị xử phạt vi phạm hành chính như bình thường"
      },
      {
        "key": "B",
        "text": "Được miễn xử phạt theo quy định của pháp luật"
      },
      {
        "key": "C",
        "text": "Bị đình chỉ hoạt động xuất khẩu, nhập khẩu"
      },
      {
        "key": "D",
        "text": "Bị từ chối tiếp nhận thông báo khai bổ sung"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "maCauHoi": "CD012_0006",
    "stt": 591,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.3 Kiểm tra sau thông quan",
    "cauHoi": "Kiểm tra sau thông quan: Mệnh đề nào không đúng?",
    "options": [
      {
        "key": "A",
        "text": "Được thực hiện sau khi hàng hóa xuất khẩu, nhập khẩu đã được thông quan"
      },
      {
        "key": "B",
        "text": "Nhằm mục đích đánh giá việc tuân thủ pháp luật hải quan của người khai hải quan"
      },
      {
        "key": "C",
        "text": "Được kiểm tra khi có dấu hiệu vi phạm pháp luật hải quan"
      },
      {
        "key": "D",
        "text": "Trong mọi trường hợp bao gồm kiểm tra hồ sơ hải quan và kiểm tra thực tế hàng hóa"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "maCauHoi": "CD012_0007",
    "stt": 592,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.3 Kiểm tra sau thông quan",
    "cauHoi": "Nội dung nào sau đây thuộc phạm vi kiểm tra hồ sơ trong kiểm tra sau thông quan?",
    "options": [
      {
        "key": "A",
        "text": "Kiểm tra số container thực tế tại cổng cảng"
      },
      {
        "key": "B",
        "text": "Kiểm tra tình trạng niêm phong trong quá trình vận chuyển"
      },
      {
        "key": "C",
        "text": "Kiểm tra tính chính xác của chứng từ thuộc hồ sơ hải quan"
      },
      {
        "key": "D",
        "text": "Kiểm tra tuyến đường đi của hàng quá cảnh qua Việt Nam"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD012_0008",
    "stt": 593,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.3 Kiểm tra sau thông quan",
    "cauHoi": "Vì sao sổ kế toán, chứng từ kế toán và dữ liệu lưu tại doanh nghiệp có thể được kiểm tra sau thông quan?",
    "options": [
      {
        "key": "A",
        "text": "Vì các tài liệu này thay thế cho hồ sơ hải quan đã khai báo"
      },
      {
        "key": "B",
        "text": "Vì các tài liệu này chỉ dùng để xác định tuyến vận chuyển hàng hóa"
      },
      {
        "key": "C",
        "text": "Vì các tài liệu này giúp đối chiếu khai báo với giao dịch thực tế"
      },
      {
        "key": "D",
        "text": "Vì các tài liệu này chỉ được kiểm tra khi hàng còn trong khu vực cảng"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD012_0009",
    "stt": 594,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.3 Kiểm tra sau thông quan",
    "cauHoi": "Khi kiểm tra sau thông quan tại trụ sở cơ quan hải quan, người khai hải quan cần thực hiện yêu cầu nào?",
    "options": [
      {
        "key": "A",
        "text": "Đưa hàng đã thông quan đến cơ quan hải quan để kiểm tra"
      },
      {
        "key": "B",
        "text": "Tự lập kết luận kiểm tra nếu hồ sơ lưu giữ đầy đủ"
      },
      {
        "key": "C",
        "text": "Xuất trình hồ sơ, chứng từ và giải trình nội dung liên quan"
      },
      {
        "key": "D",
        "text": "Chỉ nộp lại tờ khai hải quan đã đăng ký trên Hệ thống"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD012_0010",
    "stt": 595,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.3 Kiểm tra sau thông quan",
    "cauHoi": "Sau khi thông quan, cơ quan hải quan phát hiện hóa đơn thương mại, chứng từ thanh toán và trị giá khai báo của một lô hàng có dấu hiệu không thống nhất. Cách xử lý nào phù hợp nhất?",
    "options": [
      {
        "key": "A",
        "text": "Bỏ qua vì trị giá đã được chấp nhận khi thông quan"
      },
      {
        "key": "B",
        "text": "Chỉ yêu cầu doanh nghiệp điều chỉnh sổ kế toán nội bộ"
      },
      {
        "key": "C",
        "text": "Yêu cầu cung cấp chứng từ để đối chiếu, xác minh trị giá"
      },
      {
        "key": "D",
        "text": "Chuyển việc xác minh trị giá cho doanh nghiệp kinh doanh cảng"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD012_0011",
    "stt": 596,
    "mucDo": "TH",
    "tenChuDe": "Chương 4.3 Kiểm tra sau thông quan",
    "cauHoi": "Một doanh nghiệp nhập khẩu nguyên liệu để sản xuất xuất khẩu đã thông quan nhiều lô hàng. Khi kiểm tra sau thông quan, số liệu nhập kho, xuất kho và hồ sơ hải quan có dấu hiệu không khớp. Cách xử lý nào phù hợp nhất?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ căn cứ vào tờ khai hải quan vì hàng đã được thông quan"
      },
      {
        "key": "B",
        "text": "Chỉ căn cứ vào báo cáo do doanh nghiệp tự lập sau khi xuất khẩu"
      },
      {
        "key": "C",
        "text": "Đối chiếu hồ sơ hải quan với sổ sách, chứng từ và dữ liệu kho"
      },
      {
        "key": "D",
        "text": "Chuyển toàn bộ nội dung sang giám sát hải quan tại cửa khẩu xuất"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD012_0012",
    "stt": 597,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.3 Kiểm tra sau thông quan",
    "cauHoi": "Cách hiểu nào đúng về kiểm tra sau thông quan?",
    "options": [
      {
        "key": "A",
        "text": "Kiểm tra hồ sơ trước khi hệ thống phân luồng tờ khai"
      },
      {
        "key": "B",
        "text": "Kiểm tra hàng hóa trước khi đưa ra khỏi khu vực giám sát"
      },
      {
        "key": "C",
        "text": "Kiểm tra hồ sơ, chứng từ sau khi hàng hóa đã thông quan"
      },
      {
        "key": "D",
        "text": "Kiểm tra niêm phong trong quá trình vận chuyển hàng hóa"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD012_0013",
    "stt": 598,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.3 Kiểm tra sau thông quan",
    "cauHoi": "Trụ sở người khai hải quan trong kiểm tra sau thông quan có thể là địa điểm nào?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ nơi người khai đăng ký tờ khai hải quan"
      },
      {
        "key": "B",
        "text": "Chỉ địa điểm hàng hóa được thông quan trước đó"
      },
      {
        "key": "C",
        "text": "Trụ sở chính, chi nhánh hoặc nơi lưu giữ hồ sơ"
      },
      {
        "key": "D",
        "text": "Chỉ kho bãi tại cửa khẩu nơi hàng được đưa ra khỏi giám sát"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD012_0014",
    "stt": 599,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.3 Kiểm tra sau thông quan",
    "cauHoi": "Nội dung nào sau đây thuộc phạm vi kiểm tra sau thông quan?",
    "options": [
      {
        "key": "A",
        "text": "Thông tin phân luồng tờ khai khi làm thủ tục"
      },
      {
        "key": "B",
        "text": "Lịch sử vận chuyển hàng hóa trong khu vực giám sát"
      },
      {
        "key": "C",
        "text": "Căn cứ tính thuế và số thuế phải nộp"
      },
      {
        "key": "D",
        "text": "Vị trí lưu giữ hàng hóa trước khi thông quan"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "maCauHoi": "CD012_0015",
    "stt": 600,
    "mucDo": "NB",
    "tenChuDe": "Chương 4.3 Kiểm tra sau thông quan",
    "cauHoi": "Phương pháp nào sau đây có thể được sử dụng trong kiểm tra sau thông quan?",
    "options": [
      {
        "key": "A",
        "text": "Áp tải hàng hóa trong quá trình vận chuyển"
      },
      {
        "key": "B",
        "text": "Niêm phong container trước khi hàng rời cảng"
      },
      {
        "key": "C",
        "text": "Xác minh chứng từ tại tổ chức, cá nhân liên quan"
      },
      {
        "key": "D",
        "text": "Theo dõi phương tiện bằng thiết bị định vị điện tử"
      }
    ],
    "correctAnswer": "C"
  }
];
if (typeof window !== "undefined") { window.NVHQ_FALLBACK_QUESTIONS = NVHQ_FALLBACK_QUESTIONS; }
