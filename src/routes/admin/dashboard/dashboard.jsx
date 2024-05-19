import "./dashboard.css";

import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import Notification from "../../../components/notification/notification";

const Dashboard = () => {
   return (
      <Fragment>
         <Notification />

         {/* <!-- Loading animation --> */}
         <div id="popup-loader">
            <div class="circle"></div>
         </div>

         {/* <!-- Body --> */}
         <nav class="navbar navbar-expand fixed-top navbar-dark bg-dark">
            {/* <!-- Navbar Brand--> */}
            <Link class="navbar-brand ps-3" to="/admin/dashboard">
               Quản trị viên
            </Link>
            {/* <!-- Sidebar Toggle--> */}
            <button
               class="btn btn-dark btn-sm order-1 order-lg-0 ms-md-5 me-3 me-lg-0"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#sideBarNav"
            >
               <i class="fas fa-bars"></i>
            </button>

            {/* <!-- Navbar--> */}
            <ul class="navbar-nav ms-auto me-3 me-lg-4">
               <li class="nav-item dropdown">
                  <Link
                     class="nav-link dropdown-toggle"
                     id="navbarDropdown"
                     to="#"
                     role="button"
                     data-bs-toggle="dropdown"
                     aria-expanded="false"
                  >
                     <i class="fas fa-user fa-fw"></i>
                  </Link>
                  <ul
                     class="dropdown-menu dropdown-menu-end"
                     aria-labelledby="navbarDropdown"
                  >
                     <li>
                        <Link class="dropdown-item" to="#!">
                           Cài đặt
                        </Link>
                     </li>
                     <li>
                        <Link class="dropdown-item" to="#!">
                           Tài khoản
                        </Link>
                     </li>
                     <li>
                        <hr class="dropdown-divider" />
                     </li>
                     <li>
                        <Link class="dropdown-item" to="#!">
                           Đăng xuất
                        </Link>
                     </li>
                  </ul>
               </li>
            </ul>
         </nav>

         <div class="content d-flex vw-100">
            <div
               class="collapse collapse-horizontal show vh-100"
               id="sideBarNav"
            >
               <div class="h-100 navbar-left">
                  {/* <!-- Sidebar controls --> */}
                  <div class="accordion pt-3" id="accordionNav">
                     <div class="accordion-item border-0">
                        <h2 class="accordion-header">
                           <button
                              class="accordion-button px-4 py-3"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse-1"
                           >
                              <h4 class="m-0 text-light fs-6 fw-medium opacity-50">
                                 Trang chủ
                              </h4>
                           </button>
                        </h2>
                        <div
                           id="collapse-1"
                           class="accordion-collapse collapse"
                           data-bs-parent="#accordionNav"
                        >
                           <div class="accordion-body px-0 pt-0">
                              <div class="">
                                 <Link
                                    to="edit-home.html"
                                    class="text-decoration-none"
                                 >
                                    <div class="navbtn">Banner</div>
                                 </Link>
                                 <Link
                                    to="edit-home.html"
                                    class="text-decoration-none"
                                 >
                                    <div class="navbtn">Video</div>
                                 </Link>
                                 <Link
                                    to="edit-home.html"
                                    class="text-decoration-none"
                                 >
                                    <div class="navbtn">Dịch vụ</div>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div class="accordion-item border-0">
                        <h2 class="accordion-header">
                           <button
                              class="accordion-button collapsed px-4 py-3"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse-2"
                           >
                              <h4 class="m-0 text-light fs-6 fw-medium opacity-50">
                                 Giới thiệu
                              </h4>
                           </button>
                        </h2>
                        <div
                           id="collapse-2"
                           class="accordion-collapse collapse"
                           data-bs-parent="#accordionNav"
                        >
                           <div class="accordion-body px-0 pt-0">
                              <div class="text-light fs-6 fw-normal">
                                 <Link
                                    to="edit-about.html"
                                    class="text-decoration-none"
                                 >
                                    <div class="navbtn">Banner</div>
                                 </Link>
                                 <Link
                                    to="edit-about.html"
                                    class="text-decoration-none"
                                 >
                                    <div class="navbtn">Story</div>
                                 </Link>
                                 <Link
                                    to="edit-about.html"
                                    class="text-decoration-none"
                                 >
                                    <div class="navbtn">Phương châm</div>
                                 </Link>
                                 <Link
                                    to="edit-about.html"
                                    class="text-decoration-none"
                                 >
                                    <div class="navbtn">Văn hóa</div>
                                 </Link>
                                 <Link
                                    to="edit-about.html"
                                    class="text-decoration-none"
                                 >
                                    <div class="navbtn">Nhân sự</div>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div class="accordion-item border-0">
                        <h2 class="accordion-header">
                           <button
                              class="accordion-button collapsed px-4 py-3"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse-3"
                           >
                              <h4 class="m-0 text-light fs-6 fw-medium opacity-50">
                                 Công việc
                              </h4>
                           </button>
                        </h2>
                        <div
                           id="collapse-3"
                           class="accordion-collapse collapse"
                           data-bs-parent="#accordionNav"
                        >
                           <div class="accordion-body px-0 pt-0">
                              <div class="text-light fs-6 fw-normal">
                                 <Link
                                    to="edit-work.html"
                                    class="text-decoration-none"
                                 >
                                    <div class="navbtn">Story</div>
                                 </Link>
                                 <Link
                                    to="edit-work.html"
                                    class="text-decoration-none"
                                 >
                                    <div class="navbtn">Dự án</div>
                                 </Link>
                                 <Link
                                    to="edit-work.html"
                                    class="text-decoration-none"
                                 >
                                    <div class="navbtn">Danh mục dự án</div>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div class="accordion-item border-0">
                        <h2 class="accordion-header">
                           <button
                              class="accordion-button collapsed px-4 py-3"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse-4"
                           >
                              <h4 class="m-0 text-light fs-6 fw-medium opacity-50">
                                 Tuyển dụng
                              </h4>
                           </button>
                        </h2>
                        <div
                           id="collapse-4"
                           class="accordion-collapse collapse"
                           data-bs-parent="#accordionNav"
                        >
                           <div class="accordion-body px-0 pt-0">
                              <div class="text-light fs-6 fw-normal">
                                 <Link
                                    to="edit-hiring.html"
                                    class="text-decoration-none"
                                 >
                                    <div class="navbtn">Banner</div>
                                 </Link>
                                 <Link
                                    to="edit-hiring.html"
                                    class="text-decoration-none"
                                 >
                                    <div class="navbtn">Story</div>
                                 </Link>
                                 <Link
                                    to="edit-hiring.html"
                                    class="text-decoration-none"
                                 >
                                    <div class="navbtn">Vị trí tuyển dụng</div>
                                 </Link>
                                 <Link
                                    to="edit-hiring.html"
                                    class="text-decoration-none"
                                 >
                                    <div class="navbtn">Link gmail</div>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div class="accordion-item border-0">
                        <h2 class="accordion-header">
                           <button
                              class="accordion-button collapsed px-4 py-3"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse-5"
                           >
                              <h4 class="m-0 text-light fs-6 fw-medium opacity-50">
                                 Liên hệ
                              </h4>
                           </button>
                        </h2>
                        <div
                           id="collapse-5"
                           class="accordion-collapse collapse"
                           data-bs-parent="#accordionNav"
                        >
                           <div class="accordion-body px-0 pt-0">
                              <div class="text-light fs-6 fw-normal">
                                 <Link
                                    to="edit-contact.html"
                                    class="text-decoration-none"
                                 >
                                    <div class="navbtn">Story</div>
                                 </Link>
                                 <Link
                                    to="edit-contact.html"
                                    class="text-decoration-none"
                                 >
                                    <div class="navbtn">Ảnh location</div>
                                 </Link>
                                 <Link
                                    to="edit-contact.html"
                                    class="text-decoration-none"
                                 >
                                    <div class="navbtn">Đoạn văn tiêu đề</div>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div class="accordion-item border-0">
                        <h2 class="accordion-header">
                           <button
                              class="accordion-button collapsed px-4 py-3"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse-6"
                           >
                              <h4 class="m-0 text-light fs-6 fw-medium opacity-50">
                                 Thông tin công ty
                              </h4>
                           </button>
                        </h2>

                        <div
                           id="collapse-6"
                           class="accordion-collapse collapse"
                           data-bs-parent="#accordionNav"
                        >
                           <div class="accordion-body px-0 pt-0">
                              <div class="text-light fs-6 fw-normal">
                                 <Link
                                    to="edit-company.html"
                                    class="text-decoration-none"
                                 >
                                    <div class="navbtn">Chung</div>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div class="accordion-item border-0">
                        <h2 class="accordion-header">
                           <button
                              class="accordion-button collapsed px-4 py-3"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse-7"
                           >
                              <h4 class="m-0 text-light fs-6 fw-medium opacity-50">
                                 Tư vấn khách hàng
                              </h4>
                           </button>
                        </h2>

                        <div
                           id="collapse-7"
                           class="accordion-collapse collapse show"
                           data-bs-parent="#accordionNav"
                        >
                           <div class="accordion-body px-0 pt-0">
                              <div class="text-light fs-6 fw-normal">
                                 <Link
                                    to="dashboard.html"
                                    class="text-decoration-none"
                                 >
                                    <div class="navbtn">Thông tin</div>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div class="vh-100 content-wrapper px-2 px-lg-4">
               <h1 class="p-3 ps-lg-0 fs-4 text-light fw-semibold">
                  Các khách hàng mới
               </h1>

               <div class="content-body px-0 py-4 px-md-4">
                  <div class="row">
                     <div class="col-12">
                        <div class="customer">
                           <h4 class="">
                              Danh sách các khách hàng đã để lại thông tin liên
                              hệ
                           </h4>
                           <br />

                           <div class="list-customer">
                              <Link
                                 to=""
                                 class="customer-item mt-3 pb-2 border-bottom d-flex align-items-center"
                              >
                                 <input
                                    class="ms3 me-4"
                                    style="width: 20px; height: 20px; cursor: pointer;"
                                    type="checkbox"
                                    name=""
                                    id=""
                                 />
                                 <div class="">
                                    <h5>Ngyễn Văn A</h5>
                                    <p class="mb-0">
                                       Dịch vụ quan tâm: <span>Branding</span>
                                    </p>
                                 </div>
                                 <span class="ms-auto me-4">
                                    14:30 12/05/2024
                                 </span>
                              </Link>

                              <Link
                                 to=""
                                 class="customer-item mt-3 pb-2 border-bottom d-flex align-items-center"
                              >
                                 <input
                                    class="ms3 me-4"
                                    style="width: 20px; height: 20px; cursor: pointer;"
                                    type="checkbox"
                                    name=""
                                    id=""
                                 />
                                 <div class="">
                                    <h5>Ngyễn Văn A</h5>
                                    <p class="mb-0">
                                       Dịch vụ quan tâm: <span>Branding</span>
                                    </p>
                                 </div>
                                 <span class="ms-auto me-4">
                                    14:30 12/05/2024
                                 </span>
                              </Link>

                              <Link
                                 to=""
                                 class="customer-item mt-3 pb-2 border-bottom d-flex align-items-center"
                              >
                                 <input
                                    class="ms3 me-4"
                                    style="width: 20px; height: 20px; cursor: pointer;"
                                    type="checkbox"
                                    name=""
                                    id=""
                                 />
                                 <div class="">
                                    <h5>Ngyễn Văn A</h5>
                                    <p class="mb-0">
                                       Dịch vụ quan tâm: <span>Branding</span>
                                    </p>
                                 </div>
                                 <span class="ms-auto me-4">
                                    14:30 12/05/2024
                                 </span>
                              </Link>

                              <Link
                                 to=""
                                 class="customer-item mt-3 pb-2 border-bottom d-flex align-items-center"
                              >
                                 <input
                                    class="ms3 me-4"
                                    style="width: 20px; height: 20px; cursor: pointer;"
                                    type="checkbox"
                                    name=""
                                    id=""
                                 />
                                 <div class="">
                                    <h5>Ngyễn Văn A</h5>
                                    <p class="mb-0">
                                       Dịch vụ quan tâm: <span>Branding</span>
                                    </p>
                                 </div>
                                 <span class="ms-auto me-4">
                                    14:30 12/05/2024
                                 </span>
                              </Link>

                              <Link
                                 to=""
                                 class="customer-item mt-3 pb-2 border-bottom d-flex align-items-center"
                              >
                                 <input
                                    class="ms3 me-4"
                                    style="width: 20px; height: 20px; cursor: pointer;"
                                    type="checkbox"
                                    name=""
                                    id=""
                                 />
                                 <div class="">
                                    <h5>Ngyễn Văn A</h5>
                                    <p class="mb-0">
                                       Dịch vụ quan tâm: <span>Branding</span>
                                    </p>
                                 </div>
                                 <span class="ms-auto me-4">
                                    14:30 12/05/2024
                                 </span>
                              </Link>

                              <Link
                                 to=""
                                 class="customer-item mt-3 pb-2 border-bottom d-flex align-items-center"
                              >
                                 <input
                                    class="ms3 me-4"
                                    style="width: 20px; height: 20px; cursor: pointer;"
                                    type="checkbox"
                                    name=""
                                    id=""
                                 />
                                 <div class="">
                                    <h5>Ngyễn Văn A</h5>
                                    <p class="mb-0">
                                       Dịch vụ quan tâm: <span>Branding</span>
                                    </p>
                                 </div>
                                 <span class="ms-auto me-4">
                                    14:30 12/05/2024
                                 </span>
                              </Link>
                           </div>

                           <div class="customer-info w-75 mt-5">
                              <h4 class="">Thông tin chi tiết khách hàng</h4>
                              <br />

                              <div class="row border p-3">
                                 <div class="col-6">Họ và tên</div>
                                 <div class="col-6">Nguyễn Văn An</div>

                                 <div class="col-6">Danh xưng</div>
                                 <div class="col-6">Ông</div>

                                 <div class="col-6">Email</div>
                                 <div class="col-6">an@gmail.com</div>

                                 <div class="col-6">Số điện thoại</div>
                                 <div class="col-6">0123656789</div>

                                 <div class="col-6">Dịch vụ quan tâm</div>
                                 <div class="col-6">Branding</div>
                              </div>

                              <button
                                 type="button"
                                 class="btn btn-primary mt-4 px-4"
                              >
                                 Ok
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- End Body --> */}
      </Fragment>
   );
};

export default Dashboard;
