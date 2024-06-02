import "./admin-nav.css";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminNav = () => {
   const categories = [
      {
         title: "Trang chủ",
         contents: ["Banner", "Video", "Story"],
         link: "/admin/dashboard/home",
         subLinks: [
            "/admin/dashboard/home/banner",
            "/admin/dashboard/home/video",
            "/admin/dashboard/home/story"
         ],
      },
      {
         title: "Giới thiệu",
         contents: ["Banner", "Story", "Phương châm", "Văn hóa", "Nhân sự"],
         link: "/admin/dashboard/about",
         subLinks: [
            "/admin/dashboard/about/banner",
            "/admin/dashboard/about/story",
            "/admin/dashboard/about/motto",
            "/admin/dashboard/about/culture",
            "/admin/dashboard/about/staff",
         ],
      },
      {
         title: "Công việc",
         contents: ["Story", "Dự án", "Danh mục dự án"],
         subLinks: [
            "/admin/dashboard/work/story",
            "/admin/dashboard/work/projects",
            "/admin/dashboard/work/project-category",
         ],
         link: "/admin/dashboard/work",
      },
      {
         title: "Tuyển dụng",
         contents: ["Banner", "Story", "Vị trí tuyển dụng"],
         link: "/admin/dashboard/hiring",
         subLinks: [
            "/admin/dashboard/hiring/banner",
            "/admin/dashboard/hiring/story",
            "/admin/dashboard/hiring/job"
         ],
      },
      {
         title: "Liên hệ",
         contents: ["Story", "Đoạn văn tiêu đề"],
         link: "/admin/contact",
         subLinks: [
            "/admin/dashboard/contact/story",
            "/admin/dashboard/contact/paragraph",
         ],
      },
      {
         title: "Thông tin công ty",
         contents: ["Chung","Đối tác","Dịch vụ"],
         link: "/admin/dashboard/company",
         subLinks: [
            "/admin/dashboard/company/info",
            "/admin/dashboard/company/partner",
            "/admin/dashboard/company/service",
         ],
      },
      {
         title: "Tư vấn khách hàng",
         contents: ["Thông tin"],
         link: "/admin/dashboard/customer",
         subLinks: ["/admin/dashboard/customer/info"],
      },
   ];

   return (
      <div className="admin-header">
         <div className="accordion pt-3" id="accordionNav">
            <Accordion>
               {categories.map((category, categoryIndex) => (
                  <Accordion.Item eventKey={categoryIndex} key={categoryIndex}>
                     <Accordion.Header>
                        <div
                           className="accordion-button px-4 py-3"
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target="#collapse-1"
                        >
                           <h4 className="m-0 text-light fs-6 fw-medium opacity-50">
                              {category.title}
                           </h4>
                        </div>
                     </Accordion.Header>
                     <Accordion.Body>
                        {category.contents.map((content, contentIndex) => (
                           <Link
                              to={category.subLinks[contentIndex]}
                              className="text-decoration-none"
                              key={contentIndex}
                           >
                              <div className="navbtn">{content}</div>
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
