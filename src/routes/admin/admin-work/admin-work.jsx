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

import CarouselImage2 from "../../../assets/images/carousel/carousel-2.png";
import CarouselImage3 from "../../../assets/images/carousel/carousel-3.png";

const AdminWork = () => {
   return (
      <Fragment>
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
                           className="accordion-collapse collapse "
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
                           className="accordion-collapse collapse show"
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
                           className="accordion-collapse collapse"
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

            <div className="vh-100 content-wrapper px-0 px-lg-4">
               <h4 className="p-3 ps-lg-0 fs-4 text-light fw-semibold">
                  Chỉnh sửa trang công việc
               </h4>

               <div className="content-body px-3 py-4 px-md-4">
                  <div className="row">
                     <div className="col-12 col-lg-10 col-xl-8 col-xxl-6">
                        {/* <!-- Story --> */}
                        <div className="story">
                           <h4 className="mt-4">
                              Chỉnh sửa câu chuyện trang công việc
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
                           <label htmlFor="">Đoạn văn 1</label>
                           <br />
                           <textarea className="w-100 p-2" name="" id="" rows="3">
                              Đoạn văn chữ thường
                           </textarea>
                           <br />
                           <label htmlFor="">Đoạn văn 2</label>
                           <br />
                           <textarea className="w-100 p-2" name="" id="" rows="3">
                              Đoạn văn chữ thường
                           </textarea>
                           <br />
                           <label htmlFor="">Đoạn văn 3</label>
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
                        {/* <!-- End: Story --> */}

                        <div className="category">
                           <h4 className="mt-5">Chỉnh sửa các danh mục dự án</h4>
                           <button
                              type="button"
                              className="btn btn-primary mt-4 mb-3"
                           >
                              Thêm mới
                           </button>

                           <div className="motto__list border">
                              <div className="row w-100 align-items-center border-bottom py-3 ps-4">
                                 <div className="col-10">
                                    <p className="mb-0">Mô tả</p>
                                 </div>
                                 <div className="col-1">
                                    <Link to="" className="">
                                       Sửa
                                    </Link>
                                 </div>
                                 <div className="col-1">
                                    <Link to="" className="text-danger">
                                       Xóa
                                    </Link>
                                 </div>
                              </div>

                              <div className="row w-100 align-items-center border-bottom py-3 ps-4">
                                 <div className="col-10">
                                    <p className="mb-0">
                                       Lorem ipsum dolor sit amet consectetur,
                                       adipisicing elit.
                                    </p>
                                 </div>
                                 <div className="col-1">
                                    <Link to="" className="">
                                       Sửa
                                    </Link>
                                 </div>
                                 <div className="col-1">
                                    <Link to="" className="text-danger">
                                       Xóa
                                    </Link>
                                 </div>
                              </div>

                              <div className="row w-100 align-items-center border-bottom py-3 ps-4">
                                 <div className="col-10">
                                    <p className="mb-0">Mô tả</p>
                                 </div>
                                 <div className="col-1">
                                    <Link to="" className="">
                                       Sửa
                                    </Link>
                                 </div>
                                 <div className="col-1">
                                    <Link to="" className="text-danger">
                                       Xóa
                                    </Link>
                                 </div>
                              </div>
                           </div>

                           <h4 className="mt-4">Thêm danh mục dự án mới</h4>
                           <label htmlFor="">Tên danh mục</label>
                           <br />
                           <input type="text" placeholder="Branding" />
                           <br />
                           <button
                              className="btn btn-primary px-4 fs-5 mt-4"
                              type="button"
                           >
                              Submit
                           </button>
                           <button
                              className="btn btn-danger px-4 fs-5 mt-4"
                              type="button"
                           >
                              Hủy
                           </button>
                        </div>

                        <div className="projects">
                           <h4 className="mt-5">Chỉnh sửa danh sách dự án</h4>
                           <button type="button" className="btn btn-primary mt-4">
                              Thêm mới
                           </button>

                           <div className="list-project mt-4 border pe-3">
                              <div className="w-100 p-3 border-bottom">
                                 <div className="row align-items-center">
                                    <div className="col-2">
                                       <Image
                                          src={ProjectImage1}
                                          alt=""
                                          className="w-75"
                                       />
                                    </div>
                                    <div className="col-8">
                                       Dự án xây dựng website Bumindo
                                    </div>
                                    <div className="col-1">
                                       <Link to="">Sửa</Link>
                                    </div>
                                    <div className="col-1">
                                       <Link to="" className="text-danger">
                                          Xóa
                                       </Link>
                                    </div>
                                 </div>
                              </div>

                              <div className="w-100 p-3 border-bottom">
                                 <div className="row align-items-center">
                                    <div className="col-2">
                                       <Image
                                          src="../assets/img/projects/project-1.png"
                                          alt=""
                                          className="w-75"
                                       />
                                    </div>
                                    <div className="col-8">
                                       Dự án xây dựng website Bumindo
                                    </div>
                                    <div className="col-1">
                                       <Link to="">Sửa</Link>
                                    </div>
                                    <div className="col-1">
                                       <Link to="" className="text-danger">
                                          Xóa
                                       </Link>
                                    </div>
                                 </div>
                              </div>

                              <div className="w-100 p-3 border-bottom">
                                 <div className="row align-items-center">
                                    <div className="col-2">
                                       <Image
                                          src={ProjectImage1}
                                          alt=""
                                          className="w-75"
                                       />
                                    </div>
                                    <div className="col-8">
                                       Dự án xây dựng website Bumindo
                                    </div>
                                    <div className="col-1">
                                       <Link to="">Sửa</Link>
                                    </div>
                                    <div className="col-1">
                                       <Link to="" className="text-danger">
                                          Xóa
                                       </Link>
                                    </div>
                                 </div>
                              </div>

                              <div className="w-100 p-3 border-bottom">
                                 <div className="row align-items-center">
                                    <div className="col-2">
                                       <Image
                                          src={ProjectImage1}
                                          alt=""
                                          className="w-75"
                                       />
                                    </div>
                                    <div className="col-8">
                                       Dự án xây dựng website Bumindo
                                    </div>
                                    <div className="col-1">
                                       <Link to="">Sửa</Link>
                                    </div>
                                    <div className="col-1">
                                       <Link to="" className="text-danger">
                                          Xóa
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="add-project">
                           <h4 className="mt-5">Thêm dự án mới</h4>

                           <label htmlFor="">Thumbnail</label>
                           <div className="banner__img w-50 my-4 border">
                              <i className="fa-solid fa-xmark"></i>
                              <Image
                                 className="w-100"
                                 src={CarouselImage2}
                                 alt=""
                              />
                           </div>
                           <input type="file" className="w-100" name="" id="" />
                           <br />

                           <label htmlFor="">Danh mục sản phẩm</label>
                           <br />
                           <div className="list-category">
                              <div className="category-item d-flex align-items-center p-2">
                                 <input type="checkbox" name="" id="" />
                                 <h6 className="m-0 ms-3">Branding</h6>
                              </div>

                              <div className="category-item d-flex align-items-center p-2">
                                 <input type="checkbox" name="" id="" />
                                 <h6 className="m-0 ms-3">Branding</h6>
                              </div>

                              <div className="category-item d-flex align-items-center p-2">
                                 <input type="checkbox" name="" id="" />
                                 <h6 className="m-0 ms-3">Branding</h6>
                              </div>
                           </div>

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

                           <label htmlFor="">Heading </label>
                           <br />
                           <input
                              type="text"
                              className="w-100"
                              placeholder="The story of DVP"
                              value=""
                           />
                           <br />
                           <label htmlFor="">Đoạn văn 1</label>
                           <br />
                           <textarea className="w-100 p-2" name="" id="" rows="3">
                              Đoạn văn chữ thường
                           </textarea>
                           <br />
                           <label htmlFor="">Đoạn văn 2</label>
                           <br />
                           <textarea className="w-100 p-2" name="" id="" rows="3">
                              Đoạn văn chữ thường
                           </textarea>
                           <br />

                           <label htmlFor="">Tên khách hàng</label>
                           <br />
                           <input
                              type="text"
                              className="w-100"
                              placeholder="The story of DVP"
                              value=""
                           />
                           <br />
                           <label htmlFor="">Ngày hoàn thành</label>
                           <br />
                           <input type="date" className="w-100" />
                           <br />

                           <label htmlFor="">Link demo sản phẩm</label>
                           <br />
                           <input
                              type="text"
                              className="w-100"
                              placeholder="The story of DVP"
                              value=""
                           />
                           <br />

                           <label htmlFor="">Hình ảnh dự án</label>
                           <br />
                           <div className="row mt-5">
                              <div className="col-12 py-2">
                                 <Image
                                    className="w-100"
                                    src={CatalogeImage1}
                                    alt=""
                                 />
                              </div>
                              <div className="col-12 py-2">
                                 <Image
                                    className="w-100"
                                    src={CatalogeImage2}
                                    alt=""
                                    srcset=""
                                 />
                              </div>
                              <div className="col-6 py-2">
                                 <Image
                                    className="w-100"
                                    src={CatalogeImage3}
                                    alt=""
                                 />
                              </div>
                              <div className="col-6 py-2">
                                 <Image
                                    className="w-100"
                                    src={CatalogeImage4}
                                    alt=""
                                 />
                              </div>
                              <div className="col-12 py-2">
                                 <Image
                                    className="w-100"
                                    src={CatalogeImage5}
                                    alt=""
                                 />
                              </div>
                              <div className="col-6 py-2">
                                 <Image
                                    className="w-100"
                                    src={CatalogeImage6}
                                    alt=""
                                    srcset=""
                                 />
                              </div>
                              <div className="col-6">
                                 <div className="row">
                                    <div className="col-12 py-2">
                                       <Image
                                          className="w-100"
                                          src={CarouselImage3}
                                          alt=""
                                          srcset=""
                                       />
                                    </div>
                                    <div className="col-12 py-2">
                                       <Image
                                          className="w-100"
                                          src={CatalogeImage4}
                                          alt=""
                                          srcset=""
                                       />
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <input className="my-2 mt-5" type="file" name="" id="" />
                           <br />
                           <input className="my-2" type="file" name="" id="" />
                           <br />
                           <input className="my-2" type="file" name="" id="" />
                           <br />
                           <input className="my-2" type="file" name="" id="" />
                           <br />
                           <input className="my-2" type="file" name="" id="" />
                           <br />
                           <input className="my-2" type="file" name="" id="" />
                           <br />
                           <input className="my-2" type="file" name="" id="" />
                           <br />
                           <input className="my-2" type="file" name="" id="" />
                           <br />

                           <button
                              className="btn btn-primary px-4 fs-5 mt-4"
                              type="button"
                           >
                              Submit
                           </button>
                           <button
                              className="btn btn-danger px-4 fs-5 mt-4"
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
