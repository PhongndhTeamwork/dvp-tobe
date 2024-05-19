import "./admin-work.css";

import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import Notification from "../../../components/notification/notification";

import CatalogeImage1 from "../../../assets/images/cateloge/cataloge1.png";
import CatalogeImage2 from "../../../assets/images/cateloge/cataloge2.png";
import CatalogeImage3 from "../../../assets/images/cateloge/cataloge3.png";
import CatalogeImage4 from "../../../assets/images/cateloge/cataloge4.png";
import CatalogeImage5 from "../../../assets/images/cateloge/cataloge5.png";
import CatalogeImage6 from "../../../assets/images/cateloge/cataloge6.png";
import ProjectImage1 from "../../../assets/images/cateloge/project-1.png";
import ProjectImage2 from "../../../assets/images/cateloge/project-2.jpg";
import ProjectImage3 from "../../../assets/images/cateloge/project-3.jpg";
import ProjectImage4 from "../../../assets/images/cateloge/project-4.jpg";
import ProjectImage5 from "../../../assets/images/cateloge/project-5.jpg";
import CarouselImage1 from "../../../assets/images/carousel/carousel-1.png";
import CarouselImage2 from "../../../assets/images/carousel/carousel-2.png";
import CarouselImage3 from "../../../assets/images/carousel/carousel-3.png";
import RamenImage from "../../../assets/images/others/ramen.png";

const AdminWork = () => {
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
                           class="accordion-collapse collapse "
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
                           class="accordion-collapse collapse "
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
                           class="accordion-collapse collapse show"
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
                           class="accordion-collapse collapse"
                           data-bs-parent="#accordionNav"
                        >
                           <div class="accordion-body px-0 pt-0">
                              <div class="text-light fs-6 fw-normal">
                                 <Link
                                    to="/admin/dashboard"
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

            <div class="vh-100 content-wrapper px-0 px-lg-4">
               <h4 class="p-3 ps-lg-0 fs-4 text-light fw-semibold">
                  Chỉnh sửa trang công việc
               </h4>

               <div class="content-body px-3 py-4 px-md-4">
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
                                    <Link to="" class="">
                                       Sửa
                                    </Link>
                                 </div>
                                 <div class="col-1">
                                    <Link to="" class="text-danger">
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
                                    <Link to="" class="">
                                       Sửa
                                    </Link>
                                 </div>
                                 <div class="col-1">
                                    <Link to="" class="text-danger">
                                       Xóa
                                    </Link>
                                 </div>
                              </div>

                              <div class="row w-100 align-items-center border-bottom py-3 ps-4">
                                 <div class="col-10">
                                    <p class="mb-0">Mô tả</p>
                                 </div>
                                 <div class="col-1">
                                    <Link to="" class="">
                                       Sửa
                                    </Link>
                                 </div>
                                 <div class="col-1">
                                    <Link to="" class="text-danger">
                                       Xóa
                                    </Link>
                                 </div>
                              </div>
                           </div>

                           <h4 class="mt-4">Thêm danh mục dự án mới</h4>
                           <label for="">Tên danh mục</label>
                           <br />
                           <input type="text" placeholder="Branding" />
                           <br />
                           <button
                              class="btn btn-primary px-4 fs-5 mt-4"
                              type="button"
                           >
                              Submit
                           </button>
                           <button
                              class="btn btn-danger px-4 fs-5 mt-4"
                              type="button"
                           >
                              Hủy
                           </button>
                        </div>

                        <div class="projects">
                           <h4 class="mt-5">Chỉnh sửa danh sách dự án</h4>
                           <button type="button" class="btn btn-primary mt-4">
                              Thêm mới
                           </button>

                           <div class="list-project mt-4 border pe-3">
                              <div class="w-100 p-3 border-bottom">
                                 <div class="row align-items-center">
                                    <div class="col-2">
                                       <Image
                                          src={ProjectImage1}
                                          alt=""
                                          class="w-75"
                                       />
                                    </div>
                                    <div class="col-8">
                                       Dự án xây dựng website Bumindo
                                    </div>
                                    <div class="col-1">
                                       <Link to="">Sửa</Link>
                                    </div>
                                    <div class="col-1">
                                       <Link to="" class="text-danger">
                                          Xóa
                                       </Link>
                                    </div>
                                 </div>
                              </div>

                              <div class="w-100 p-3 border-bottom">
                                 <div class="row align-items-center">
                                    <div class="col-2">
                                       <Image
                                          src="../assets/img/projects/project-1.png"
                                          alt=""
                                          class="w-75"
                                       />
                                    </div>
                                    <div class="col-8">
                                       Dự án xây dựng website Bumindo
                                    </div>
                                    <div class="col-1">
                                       <Link to="">Sửa</Link>
                                    </div>
                                    <div class="col-1">
                                       <Link to="" class="text-danger">
                                          Xóa
                                       </Link>
                                    </div>
                                 </div>
                              </div>

                              <div class="w-100 p-3 border-bottom">
                                 <div class="row align-items-center">
                                    <div class="col-2">
                                       <Image
                                          src={ProjectImage1}
                                          alt=""
                                          class="w-75"
                                       />
                                    </div>
                                    <div class="col-8">
                                       Dự án xây dựng website Bumindo
                                    </div>
                                    <div class="col-1">
                                       <Link to="">Sửa</Link>
                                    </div>
                                    <div class="col-1">
                                       <Link to="" class="text-danger">
                                          Xóa
                                       </Link>
                                    </div>
                                 </div>
                              </div>

                              <div class="w-100 p-3 border-bottom">
                                 <div class="row align-items-center">
                                    <div class="col-2">
                                       <Image
                                          src={ProjectImage1}
                                          alt=""
                                          class="w-75"
                                       />
                                    </div>
                                    <div class="col-8">
                                       Dự án xây dựng website Bumindo
                                    </div>
                                    <div class="col-1">
                                       <Link to="">Sửa</Link>
                                    </div>
                                    <div class="col-1">
                                       <Link to="" class="text-danger">
                                          Xóa
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div class="add-project">
                           <h4 class="mt-5">Thêm dự án mới</h4>

                           <label for="">Thumbnail</label>
                           <div class="banner__img w-50 my-4 border">
                              <i class="fa-solid fa-xmark"></i>
                              <Image
                                 class="w-100"
                                 src={CarouselImage2}
                                 alt=""
                              />
                           </div>
                           <input type="file" class="w-100" name="" id="" />
                           <br />

                           <label for="">Danh mục sản phẩm</label>
                           <br />
                           <div class="list-category">
                              <div class="category-item d-flex align-items-center p-2">
                                 <input type="checkbox" name="" id="" />
                                 <h6 class="m-0 ms-3">Branding</h6>
                              </div>

                              <div class="category-item d-flex align-items-center p-2">
                                 <input type="checkbox" name="" id="" />
                                 <h6 class="m-0 ms-3">Branding</h6>
                              </div>

                              <div class="category-item d-flex align-items-center p-2">
                                 <input type="checkbox" name="" id="" />
                                 <h6 class="m-0 ms-3">Branding</h6>
                              </div>
                           </div>

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

                           <label for="">Heading </label>
                           <br />
                           <input
                              type="text"
                              class="w-100"
                              placeholder="The story of DVP"
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

                           <label for="">Tên khách hàng</label>
                           <br />
                           <input
                              type="text"
                              class="w-100"
                              placeholder="The story of DVP"
                              value=""
                           />
                           <br />
                           <label for="">Ngày hoàn thành</label>
                           <br />
                           <input type="date" class="w-100" />
                           <br />

                           <label for="">Link demo sản phẩm</label>
                           <br />
                           <input
                              type="text"
                              class="w-100"
                              placeholder="The story of DVP"
                              value=""
                           />
                           <br />

                           <label for="">Hình ảnh dự án</label>
                           <br />
                           <div class="row mt-5">
                              <div class="col-12 py-2">
                                 <Image
                                    class="w-100"
                                    src={CatalogeImage1}
                                    alt=""
                                 />
                              </div>
                              <div class="col-12 py-2">
                                 <Image
                                    class="w-100"
                                    src={CatalogeImage2}
                                    alt=""
                                    srcset=""
                                 />
                              </div>
                              <div class="col-6 py-2">
                                 <Image
                                    class="w-100"
                                    src={CatalogeImage3}
                                    alt=""
                                 />
                              </div>
                              <div class="col-6 py-2">
                                 <Image
                                    class="w-100"
                                    src={CatalogeImage4}
                                    alt=""
                                 />
                              </div>
                              <div class="col-12 py-2">
                                 <Image
                                    class="w-100"
                                    src={CatalogeImage5}
                                    alt=""
                                 />
                              </div>
                              <div class="col-6 py-2">
                                 <Image
                                    class="w-100"
                                    src={CatalogeImage6}
                                    alt=""
                                    srcset=""
                                 />
                              </div>
                              <div class="col-6">
                                 <div class="row">
                                    <div class="col-12 py-2">
                                       <Image
                                          class="w-100"
                                          src={CarouselImage3}
                                          alt=""
                                          srcset=""
                                       />
                                    </div>
                                    <div class="col-12 py-2">
                                       <Image
                                          class="w-100"
                                          src={CatalogeImage4}
                                          alt=""
                                          srcset=""
                                       />
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <input class="my-2 mt-5" type="file" name="" id="" />
                           <br />
                           <input class="my-2" type="file" name="" id="" />
                           <br />
                           <input class="my-2" type="file" name="" id="" />
                           <br />
                           <input class="my-2" type="file" name="" id="" />
                           <br />
                           <input class="my-2" type="file" name="" id="" />
                           <br />
                           <input class="my-2" type="file" name="" id="" />
                           <br />
                           <input class="my-2" type="file" name="" id="" />
                           <br />
                           <input class="my-2" type="file" name="" id="" />
                           <br />

                           <button
                              class="btn btn-primary px-4 fs-5 mt-4"
                              type="button"
                           >
                              Submit
                           </button>
                           <button
                              class="btn btn-danger px-4 fs-5 mt-4"
                              type="button"
                           >
                              Hủy
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- End Body --></br> */}
      </Fragment>
   );
};

export default AdminWork;
