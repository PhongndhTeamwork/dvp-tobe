import "./admin-nav.css";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminNav = () => {
   const categories = [
      {
         title: "Trang chủ",
         contents: ["Banner", "Video", "Story", "Dịch vụ"],
      },
      {
         title: "Giới thiệu",
         contents: ["Banner", "Story", "Phương châm", "Văn hóa", "Nhân sự"],
      },
      {
         title: "Công việc",
         contents: ["Story", "Dự án", "Danh mục dự án"],
      },
      {
         title: "Tuyển dụng",
         contents: ["Banner", "Story", "Vị trí tuyển dụng", "Link gmail"],
      },
      {
         title: "Liên hệ",
         contents: ["Story", "Ảnh location", "Đoạn văn tiêu đề"],
      },
      {
         title: "Thông tin công ty",
         contents: ["Chung"],
      },
      {
         title: "Tư vấn khách hàng",
         contents: ["Thông tin"],
      },
   ];

   return (
      <div className="admin-header">
         <div className="accordion pt-3" id="accordionNav">
            <Accordion>
               {categories.map((category, categoryIndex) => (
                  <Accordion.Item eventKey={categoryIndex}>
                     <Accordion.Header>
                        <button
                           className="accordion-button px-4 py-3"
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target="#collapse-1"
                        >
                           <h4 className="m-0 text-light fs-6 fw-medium opacity-50">
                              {category.title}
                           </h4>
                        </button>
                     </Accordion.Header>
                     <Accordion.Body>
                        {category.contents.map((content, contentIndex) => (
                           <Link
                              to="edit-home.html"
                              className="text-decoration-none"
                           >
                              <div className="navbtn" key={contentIndex}>
                                 {content}
                              </div>
                           </Link>
                        ))}
                     </Accordion.Body>
                  </Accordion.Item>
               ))}
            </Accordion>
         </div>
      </div>
   );
};

export default AdminNav;
