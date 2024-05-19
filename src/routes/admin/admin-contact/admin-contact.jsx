import "./admin-contact.css";

import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

import Notification from "../../../components/notification/notification";

import OfficeBackground from "../../../assets/images/others/office-bg.jpg";

const AdminContact = () => {
   return (
      <Fragment>
         {/* <!-- Pop up to show notifications --> */}
         <Notification />

         {/* <!-- Loading animation --> */}
         <div id="popup-loader">
            <div className="circle"></div>
         </div>

         {/* <!-- Body --> */}
         <nav className="navbar navbar-expand fixed-top navbar-dark bg-dark">
            {/* <!-- Navbar Brand--> */}
            <Link className="navbar-brand ps-3" to="/admin/dashboard">
               Quản trị viên
            </Link>
            {/* <!-- Sidebar Toggle--> */}
            <button
               className="btn btn-dark btn-sm order-1 order-lg-0 ms-md-5 me-3 me-lg-0"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#sideBarNav"
            >
               <i className="fas fa-bars"></i>
            </button>

            {/* <!-- Navbar--> */}
            <ul className="navbar-nav ms-auto me-3 me-lg-4">
               <li className="nav-item dropdown">
                  <Link
                     className="nav-link dropdown-toggle"
                     id="navbarDropdown"
                     to="#"
                     role="button"
                     data-bs-toggle="dropdown"
                     aria-expanded="false"
                  >
                     <i className="fas fa-user fa-fw"></i>
                  </Link>
                  <ul
                     className="dropdown-menu dropdown-menu-end"
                     aria-labelledby="navbarDropdown"
                  >
                     <li>
                        <Link className="dropdown-item" to="#!">
                           Cài đặt
                        </Link>
                     </li>
                     <li>
                        <Link className="dropdown-item" to="#!">
                           Tài khoản
                        </Link>
                     </li>
                     <li>
                        <hr className="dropdown-divider" />
                     </li>
                     <li>
                        <Link className="dropdown-item" to="#!">
                           Đăng xuất
                        </Link>
                     </li>
                  </ul>
               </li>
            </ul>
         </nav>

         <div className="content d-flex vw-100">
            <div
               className="collapse collapse-horizontal show vh-100"
               id="sideBarNav"
            >
               <div className="h-100 navbar-left">
                  {/* <!-- Sidebar controls --> */}
                  <div className="accordion pt-3" id="accordionNav">
                     <div className="accordion-item border-0">
                        <h2 className="accordion-header">
                           <button
                              className="accordion-button px-4 py-3"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse-1"
                           >
                              <h4 className="m-0 text-light fs-6 fw-medium opacity-50">
                                 Trang chủ
                              </h4>
                           </button>
                        </h2>
                        <div
                           id="collapse-1"
                           className="accordion-collapse collapse "
                           data-bs-parent="#accordionNav"
                        >
                           <div className="accordion-body px-0 pt-0">
                              <div className="">
                                 <Link
                                    to="edit-home.html"
                                    className="text-decoration-none"
                                 >
                                    <div className="navbtn">Banner</div>
                                 </Link>
                                 <Link
                                    to="edit-home.html"
                                    className="text-decoration-none"
                                 >
                                    <div className="navbtn">Video</div>
                                 </Link>
                                 <Link
                                    to="edit-home.html"
                                    className="text-decoration-none"
                                 >
                                    <div className="navbtn">Dịch vụ</div>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="accordion-item border-0">
                        <h2 className="accordion-header">
                           <button
                              className="accordion-button collapsed px-4 py-3"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse-2"
                           >
                              <h4 className="m-0 text-light fs-6 fw-medium opacity-50">
                                 Giới thiệu
                              </h4>
                           </button>
                        </h2>
                        <div
                           id="collapse-2"
                           className="accordion-collapse collapse"
                           data-bs-parent="#accordionNav"
                        >
                           <div className="accordion-body px-0 pt-0">
                              <div className="text-light fs-6 fw-normal">
                                 <Link
                                    to="edit-about.html"
                                    className="text-decoration-none"
                                 >
                                    <div className="navbtn">Banner</div>
                                 </Link>
                                 <Link
                                    to="edit-about.html"
                                    className="text-decoration-none"
                                 >
                                    <div className="navbtn">Story</div>
                                 </Link>
                                 <Link
                                    to="edit-about.html"
                                    className="text-decoration-none"
                                 >
                                    <div className="navbtn">Phương châm</div>
                                 </Link>
                                 <Link
                                    to="edit-about.html"
                                    className="text-decoration-none"
                                 >
                                    <div className="navbtn">Văn hóa</div>
                                 </Link>
                                 <Link
                                    to="edit-about.html"
                                    className="text-decoration-none"
                                 >
                                    <div className="navbtn">Nhân sự</div>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="accordion-item border-0">
                        <h2 className="accordion-header">
                           <button
                              className="accordion-button collapsed px-4 py-3"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse-3"
                           >
                              <h4 className="m-0 text-light fs-6 fw-medium opacity-50">
                                 Công việc
                              </h4>
                           </button>
                        </h2>
                        <div
                           id="collapse-3"
                           className="accordion-collapse collapse"
                           data-bs-parent="#accordionNav"
                        >
                           <div className="accordion-body px-0 pt-0">
                              <div className="text-light fs-6 fw-normal">
                                 <Link
                                    to="edit-work.html"
                                    className="text-decoration-none"
                                 >
                                    <div className="navbtn">Story</div>
                                 </Link>
                                 <Link
                                    to="edit-work.html"
                                    className="text-decoration-none"
                                 >
                                    <div className="navbtn">Dự án</div>
                                 </Link>
                                 <Link
                                    to="edit-work.html"
                                    className="text-decoration-none"
                                 >
                                    <div className="navbtn">Danh mục dự án</div>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="accordion-item border-0">
                        <h2 className="accordion-header">
                           <button
                              className="accordion-button collapsed px-4 py-3"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse-4"
                           >
                              <h4 className="m-0 text-light fs-6 fw-medium opacity-50">
                                 Tuyển dụng
                              </h4>
                           </button>
                        </h2>
                        <div
                           id="collapse-4"
                           className="accordion-collapse collapse"
                           data-bs-parent="#accordionNav"
                        >
                           <div className="accordion-body px-0 pt-0">
                              <div className="text-light fs-6 fw-normal">
                                 <Link
                                    to="edit-hiring.html"
                                    className="text-decoration-none"
                                 >
                                    <div className="navbtn">Banner</div>
                                 </Link>
                                 <Link
                                    to="edit-hiring.html"
                                    className="text-decoration-none"
                                 >
                                    <div className="navbtn">Story</div>
                                 </Link>
                                 <Link
                                    to="edit-hiring.html"
                                    className="text-decoration-none"
                                 >
                                    <div className="navbtn">Vị trí tuyển dụng</div>
                                 </Link>
                                 <Link
                                    to="edit-hiring.html"
                                    className="text-decoration-none"
                                 >
                                    <div className="navbtn">Link gmail</div>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="accordion-item border-0">
                        <h2 className="accordion-header">
                           <button
                              className="accordion-button collapsed px-4 py-3"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse-5"
                           >
                              <h4 className="m-0 text-light fs-6 fw-medium opacity-50">
                                 Liên hệ
                              </h4>
                           </button>
                        </h2>
                        <div
                           id="collapse-5"
                           className="accordion-collapse collapse show"
                           data-bs-parent="#accordionNav"
                        >
                           <div className="accordion-body px-0 pt-0">
                              <div className="text-light fs-6 fw-normal">
                                 <Link
                                    to="edit-contact.html"
                                    className="text-decoration-none"
                                 >
                                    <div className="navbtn">Story</div>
                                 </Link>
                                 <Link
                                    to="edit-contact.html"
                                    className="text-decoration-none"
                                 >
                                    <div className="navbtn">Ảnh location</div>
                                 </Link>
                                 <Link
                                    to="edit-contact.html"
                                    className="text-decoration-none"
                                 >
                                    <div className="navbtn">Đoạn văn tiêu đề</div>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="accordion-item border-0">
                        <h2 className="accordion-header">
                           <button
                              className="accordion-button collapsed px-4 py-3"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse-6"
                           >
                              <h4 className="m-0 text-light fs-6 fw-medium opacity-50">
                                 Thông tin công ty
                              </h4>
                           </button>
                        </h2>

                        <div
                           id="collapse-6"
                           className="accordion-collapse collapse"
                           data-bs-parent="#accordionNav"
                        >
                           <div className="accordion-body px-0 pt-0">
                              <div className="text-light fs-6 fw-normal">
                                 <Link
                                    to="edit-company.html"
                                    className="text-decoration-none"
                                 >
                                    <div className="navbtn">Chung</div>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="accordion-item border-0">
                        <h2 className="accordion-header">
                           <button
                              className="accordion-button collapsed px-4 py-3"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse-7"
                           >
                              <h4 className="m-0 text-light fs-6 fw-medium opacity-50">
                                 Tư vấn khách hàng
                              </h4>
                           </button>
                        </h2>

                        <div
                           id="collapse-7"
                           className="accordion-collapse collapse"
                           data-bs-parent="#accordionNav"
                        >
                           <div className="accordion-body px-0 pt-0">
                              <div className="text-light fs-6 fw-normal">
                                 <Link
                                    to="/admin/dashboard"
                                    className="text-decoration-none"
                                 >
                                    <div className="navbtn">Thông tin</div>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="vh-100 content-wrapper px-2 px-lg-4">
               <h4 className="p-3 ps-lg-0 fs-4 text-light fw-semibold">
                  Chỉnh sửa trang liên hệ
               </h4>

               <div className="content-body px-0 py-4 px-md-4">
                  <div className="row">
                     <div className="col-12 col-lg-10 col-xl-8 col-xxl-6">
                        {/* <!-- Story --> */}
                        <div className="story">
                           <h4 className="mt-5">
                              Chỉnh sửa câu chuyện trang liên hệ
                           </h4>

                           <label htmlFor="">Sub title</label>
                           <br />
                           <input
                              type="text"
                              className="w-100"
                              placeholder="The story of DVP"
                              value=""
                           />
                           <br />
                           <label htmlFor="">Title</label>
                           <br />
                           <input
                              type="text"
                              className="w-100"
                              placeholder="Câu chuyện về DVP"
                              value=""
                           />
                           <br />
                           <label htmlFor="">Subtitle2</label>
                           <br />
                           <input
                              type="text"
                              className="w-50 mb-2"
                              placeholder="Câu chuyện về DVP"
                              value=""
                           />
                           <input
                              type="text"
                              className="w-50"
                              placeholder="Câu chuyện về DVP"
                              value=""
                           />
                           <br />
                           <label htmlFor="">Ảnh tiêu đề</label>
                           <br />
                           <Image className="w-50 my-3" src={OfficeBackground} />
                           <br />
                           <input type="file" name="" id="" />
                           <br />

                           <button
                              className="btn btn-primary px-4 fs-4 mt-5"
                              type="button"
                           >
                              Submit
                           </button>
                           <button
                              className="btn btn-danger px-4 fs-4 mt-5"
                              type="button"
                           >
                              Hủy
                           </button>
                        </div>
                        {/* <!-- End: Story --> */}

                        {/* <!-- Image location --> */}
                        <div className="img-location">
                           <h4 className="mt-5">
                              Chỉnh sửa ảnh location trang liên hệ
                           </h4>

                           <label htmlFor="">Ảnh</label>
                           <br />
                           <Image className="w-50 my-3" src={OfficeBackground} />
                           <br />
                           <input type="file" />
                           <br />

                           <button
                              className="btn btn-primary px-4 fs-4 mt-5"
                              type="button"
                           >
                              Submit
                           </button>
                           <button
                              className="btn btn-danger px-4 fs-4 mt-5"
                              type="button"
                           >
                              Hủy
                           </button>
                        </div>
                        {/* <!-- End: Image location --> */}

                        {/* <!-- Contact text --> */}
                        <div className="contact-text">
                           <h4 className="mt-5">Chỉnh sửa text form liên hệ</h4>
                           <label htmlFor="">Đoạn văn 1</label>
                           <br />
                           <textarea className="w-100 p-2" name="" id="" rows="3">
                              Đoạn văn chữ thường
                           </textarea>
                           <br />
                           <label htmlFor="">Đoạn văn 2</label>
                           <br />
                           <textarea className="w-100 p-2" name="" id="" rows="3">
                              Đoạn văn chữ in đậm
                           </textarea>
                           <br />

                           <button
                              className="btn btn-primary px-4 fs-4 mt-5"
                              type="button"
                           >
                              Submit
                           </button>
                           <button
                              className="btn btn-danger px-4 fs-4 mt-5"
                              type="button"
                           >
                              Hủy
                           </button>
                        </div>
                        {/* <!-- End: Contact text --> */}
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- End Body --></img> */}
      </Fragment>
   );
};

export default AdminContact;
