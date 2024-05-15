import { Link } from "react-router-dom";
import "./admin-work.css";
import { Fragment } from "react";

const AdminWork = () => {
   return (
      <Fragment>
         <div id="notify">
            <div class="d-flex align-items-center">
               <div class="notify-status d-flex justify-content-center align-items-center px-3 px-md-4 fs-1">
                  <i class="fa-solid fa-circle-check"></i>
                  <i class="fa-solid fa-bug"></i>
                  <i class="fa-solid fa-triangle-exclamation"></i>
                  <i class="fa-regular fa-comment-dots"></i>
               </div>

               <div class="notify-content">
                  <div id="notify-title">This is title</div>
                  <div id="notify-message">This is a example message.</div>
               </div>

               <div
                  id="notify-close-button"
                  class="justify-content-center align-items-center px-2 px-md-3 fs-3"
               >
                  <i class="w-75 p-3 text-secondary fa-solid fa-xmark"></i>
               </div>
            </div>

            <div
               class="w-100 py-3 pe-4 justify-content-end notify-response"
               id="notify-response"
            >
               <button class="ok me-2 fw-bold" id="ok">
                  Ok
               </button>
               <button class="cancell fw-bold" id="cancell">
                  Hủy
               </button>
            </div>
         </div>

         {/* <!-- Loading animation --> */}
         <div id="popup-loader">
            <div class="circle"></div>
         </div>

         {/* <!-- Body --> */}
         <nav class="navbar navbar-expand fixed-top navbar-dark bg-dark">
            {/* <!-- Navbar Brand--> */}
            <Link class="navbar-brand ps-3" href="dashboard.html">
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
                     href="#"
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
                        <Link class="dropdown-item" href="#!">
                           Cài đặt
                        </Link>
                     </li>
                     <li>
                        <Link class="dropdown-item" href="#!">
                           Tài khoản
                        </Link>
                     </li>
                     <li>
                        <hr class="dropdown-divider" />
                     </li>
                     <li>
                        <Link class="dropdown-item" href="#!">
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
                           class="accordion-collapse collapse "
                           data-bs-parent="#accordionNav"
                        >
                           <div class="accordion-body px-0 pt-0">
                              <div class="">
                                 <Link
                                    href="edit-home.html"
                                    class="text-decoration-none"
                                 >
                                    <div class="navbtn">Banner</div>
                                 </Link>
                                 <Link
                                    href="edit-home.html"
                                    class="text-decoration-none"
                                 >
                                    <div class="navbtn">Video</div>
                                 </Link>
                                 <Link
                                    href="edit-home.html"
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
                           class="accordion-collapse collapse "
                           data-bs-parent="#accordionNav"
                        >
                           <div class="accordion-body px-0 pt-0">
                              <div class="text-light fs-6 fw-normal">
                                 <Link
                                    href="edit-about.html"
                                    class="text-decoration-none"
                                 >
                                    <div class="navbtn">Banner</div>
                                 </Link>
                                 <Link
                                    href="edit-about.html"
                                    class="text-decoration-none"
                                 >
                                    <div class="navbtn">Story</div>
                                 </Link>
                                 <Link
                                    href="edit-about.html"
                                    class="text-decoration-none"
                                 >
                                    <div class="navbtn">Phương châm</div>
                                 </Link>
                                 <Link
                                    href="edit-about.html"
                                    class="text-decoration-none"
                                 >
                                    <div class="navbtn">Văn hóa</div>
                                 </Link>
                                 <Link
                                    href="edit-about.html"
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
                           class="accordion-collapse collapse show"
                           data-bs-parent="#accordionNav"
                        >
                           <div class="accordion-body px-0 pt-0">
                              <div class="text-light fs-6 fw-normal">
                                 <Link
                                    href="edit-work.html"
                                    class="text-decoration-none"
                                 >
                                    <div class="navbtn">Story</div>
                                 </Link>
                                 <Link
                                    href="edit-work.html"
                                    class="text-decoration-none"
                                 >
                                    <div class="navbtn">Dự án</div>
                                 </Link>
                                 <Link
                                    href="edit-work.html"
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
                                    href="edit-hiring.html"
                                    class="text-decoration-none"
                                 >
                                    <div class="navbtn">Banner</div>
                                 </Link>
                                 <Link
                                    href="edit-hiring.html"
                                    class="text-decoration-none"
                                 >
                                    <div class="navbtn">Story</div>
                                 </Link>
                                 <Link
                                    href="edit-hiring.html"
                                    class="text-decoration-none"
                                 >
                                    <div class="navbtn">Vị trí tuyển dụng</div>
                                 </Link>
                                 <Link
                                    href="edit-hiring.html"
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
                                    href="edit-contact.html"
                                    class="text-decoration-none"
                                 >
                                    <div class="navbtn">Story</div>
                                 </Link>
                                 <Link
                                    href="edit-contact.html"
                                    class="text-decoration-none"
                                 >
                                    <div class="navbtn">Ảnh location</div>
                                 </Link>
                                 <Link
                                    href="edit-contact.html"
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
                                    href="edit-company.html"
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
                           class="accordion-collapse collapse"
                           data-bs-parent="#accordionNav"
                        >
                           <div class="accordion-body px-0 pt-0">
                              <div class="text-light fs-6 fw-normal">
                                 <Link
                                    href="dashboard.html"
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
               <h4 class="p-3 ps-lg-0 fs-4 text-light fw-semibold">
                  Chỉnh sửa trang công việc
               </h4>

               <div class="content-body px-0 py-4 px-md-4">
                  <div class="row">
                     <div class="col-12 col-lg-10 col-xl-8 col-xxl-6">
                        {/* <!-- Story --> */}
                        <div class="story">
                           <h4 class="mt-4">
                              Chỉnh sửa câu chuyện trang công việc
                           </h4>

                           <label for="">Sub title</label>
                           <br />
                           <input
                              type="text"
                              class="w-100"
                              placeholder="The story of DVP"
                              value=""
                           />
                           <br />
                           <label for="">Title</label>
                           <br />
                           <input
                              type="text"
                              class="w-100"
                              placeholder="Câu chuyện về DVP"
                              value=""
                           />
                           <br />
                           <label for="">Đoạn văn 1</label>
                           <br />
                           <textarea class="w-100 p-2" name="" id="" rows="3">
                              Đoạn văn chữ thường
                           </textarea>
                           <br />
                           <label for="">Đoạn văn 2</label>
                           <br />
                           <textarea class="w-100 p-2" name="" id="" rows="3">
                              Đoạn văn chữ thường
                           </textarea>
                           <br />
                           <label for="">Đoạn văn 3</label>
                           <br />
                           <textarea class="w-100 p-2" name="" id="" rows="3">
                              Đoạn văn chữ in đậm
                           </textarea>
                           <br />

                           <button
                              class="btn btn-primary px-4 fs-4 mt-5"
                              type="button"
                           >
                              Submit
                           </button>
                           <button
                              class="btn btn-danger px-4 fs-4 mt-5"
                              type="button"
                           >
                              Hủy
                           </button>
                        </div>
                        {/* <!-- End: Story --> */}

                        <div class="category">
                           <h4 class="mt-5">Chỉnh sửa các danh mục dự án</h4>
                           <button
                              type="button"
                              class="btn btn-primary mt-4 mb-3"
                           >
                              Thêm mới
                           </button>

                           <div class="motto__list border">
                              <div class="row w-100 align-items-center border-bottom py-3 ps-4">
                                 <div class="col-10">
                                    <p class="mb-0">Mô tả</p>
                                 </div>
                                 <div class="col-1">
                                    <Link href="" class="">
                                       Sửa
                                    </Link>
                                 </div>
                                 <div class="col-1">
                                    <Link href="" class="text-danger">
                                       Xóa
                                    </Link>
                                 </div>
                              </div>

                              <div class="row w-100 align-items-center border-bottom py-3 ps-4">
                                 <div class="col-10">
                                    <p class="mb-0">
                                       Lorem ipsum dolor sit amet consectetur,
                                       adipisicing elit.
                                    </p>
                                 </div>
                                 <div class="col-1">
                                    <Link href="" class="">
                                       Sửa
                                    </Link>
                                 </div>
                                 <div class="col-1">
                                    <Link href="" class="text-danger">
                                       Xóa
                                    </Link>
                                 </div>
                              </div>

                              <div class="row w-100 align-items-center border-bottom py-3 ps-4">
                                 <div class="col-10">
                                    <p class="mb-0">Mô tả</p>
                                 </div>
                                 <div class="col-1">
                                    <Link href="" class="">
                                       Sửa
                                    </Link>
                                 </div>
                                 <div class="col-1">
                                    <Link href="" class="text-danger">
                                       Xóa
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div class="projects">
                           <h4 class="mt-5">Chỉnh sửa danh sách dự án</h4>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default AdminWork;
