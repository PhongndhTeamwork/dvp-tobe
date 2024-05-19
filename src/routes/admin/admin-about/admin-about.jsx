import "./admin-about.css";

import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

import Notification from "../../../components/notification/notification";

import CarouselImage2 from "../../../assets/images/carousel/carousel-2.png";

import CultureImage1 from "../../../assets/images/culture/culture1.png";
import CultureImage2 from "../../../assets/images/culture/culture2.png";
import CultureImage3 from "../../../assets/images/culture/culture3.png";
import CultureImage4 from "../../../assets/images/culture/culture4.png";
import CultureImage5 from "../../../assets/images/culture/culture5.png";

import Avatar1 from "../../../assets/images/avatar/1.png";

const AdminAbout = () => {
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
                           className="accordion-collapse collapse"
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
                           className="accordion-collapse collapse show"
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

            <div className="vh-100 content-wrapper px-2 px-lg-4">
               <h4 className="p-3 ps-lg-0 fs-4 text-light fw-semibold">
                  Chỉnh sửa trang giới thiệu
               </h4>

               <div className="content-body px-0 py-4 px-md-4">
                  <div className="row">
                     <div className="col-12 col-lg-10 col-xl-8 col-xxl-6">
                        {/* <!-- Banner --> */}
                        <div className="banner">
                           <h4 className="">Chỉnh sửa Banner trang giới thiệu</h4>
                           <br />

                           <label htmlFor="">Text stroke 1</label>
                           <br />
                           <input
                              type="text"
                              className="w-100"
                              placeholder="Professional"
                              value=""
                           />
                           <br />
                           <label htmlFor="">Text stroke 2</label>
                           <br />
                           <input
                              type="text"
                              className="w-100"
                              placeholder="Creative"
                              value=""
                           />
                           <br />
                           <label htmlFor=""> Text uppercase 1</label>
                           <br />
                           <input
                              type="text"
                              className="w-100"
                              placeholder="STYLE"
                              value=""
                           />
                           <br />
                           <label htmlFor="">Text uppercase 2</label>
                           <br />
                           <input
                              type="text"
                              className="w-100"
                              placeholder="DESIGN"
                              value=""
                           />
                           <br />
                           <label htmlFor="">Banner image</label>
                           <br />

                           <div className="banner__img w-50 my-4 border">
                              <i className="fa-solid fa-xmark"></i>
                              <Image
                                 className="w-100"
                                 src={CarouselImage2}
                                 alt=""
                              />
                           </div>
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
                        {/* <!-- End: Banner --> */}

                        {/* <!-- Story --> */}
                        <div className="story">
                           <h4 className="mt-5">
                              Chỉnh sửa câu chuyện trang giới thiệu
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

                        {/* <!-- Motto --> */}
                        <div className="motto">
                           <h4 className="mt-5 mb-4">
                              Chỉnh sửa danh sách phương châm
                           </h4>
                           <button
                              className="btn btn-primary px-4 fs-5 mb-4"
                              type="button"
                           >
                              Thêm mới
                           </button>
                           <br />

                           <div className="motto__list border">
                              <div className="motto-item row w-100 align-items-center border-bottom py-3 ps-4">
                                 <div className="col-10">
                                    <h6>Tiêu đề</h6>
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

                              <div className="motto-item row w-100 align-items-center border-bottom py-3 ps-4">
                                 <div className="col-10">
                                    <h6>Tiêu đề</h6>
                                    <p className="mb-0">
                                       Lorem ipsum dolor sit amet consectetur,
                                       adipisicing elit. Quos aspernatur
                                       incidunt veniam animi officiis,
                                       voluptatibus aut placeat reprehenderit
                                       similique dolorem corrupti, laborum ab
                                       eius! Eaque, sequi? Eius nostrum dolorem
                                       similique.
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

                              <div className="motto-item row w-100 align-items-center border-bottom py-3 ps-4">
                                 <div className="col-10">
                                    <h6>Tiêu đề</h6>
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

                           <h4 className="mt-5">Thêm phương châm mới</h4>

                           <label htmlFor="">Tiêu đề</label>
                           <br />
                           <input
                              type="text"
                              className="w-100"
                              placeholder="Branding"
                              value=""
                           />
                           <br />
                           <label htmlFor="">Mô tả</label>
                           <br />
                           <textarea
                              className="w-100 p-3"
                              name=""
                              id=""
                              rows="4"
                           ></textarea>

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
                        {/* <!-- End: Motto --> */}

                        {/* <!-- Culture --> */}
                        <div className="culture">
                           <h4 className="mt-5">
                              Chỉnh sửa văn hóa trang giới thiệu
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
                           <label htmlFor="">Đoạn văn</label>
                           <br />
                           <textarea className="w-100 p-2" name="" id="" rows="3">
                              Đoạn văn chữ thường
                           </textarea>
                           <br />

                           <label className="mt-4" htmlFor="">
                              Thêm ảnh
                           </label>
                           <div className="row justify-content-between mt-4 p-2 border">
                              <div className="col-3 row flex-column justify-content-between">
                                 <div className="col-12">
                                    <Image className="w-100" src={CultureImage1} />
                                 </div>
                                 <div className="col-12">
                                    <Image className="w-100" src={CultureImage2} />
                                 </div>
                              </div>
                              <div className="col-6 row">
                                 <Image className="w-100" src={CultureImage3} />
                              </div>
                              <div className="col-3 row flex-column justify-content-between">
                                 <div className="col-12">
                                    <Image className="w-100" src={CultureImage4} />
                                 </div>
                                 <div className="col-12">
                                    <Image className="w-100" src={CultureImage5} />
                                 </div>
                              </div>
                           </div>

                           <input className="mt-4" type="file" name="" id="" />
                           <br />
                           <input className="mt-3" type="file" name="" id="" />
                           <br />
                           <input className="mt-3" type="file" name="" id="" />
                           <br />
                           <input className="mt-3" type="file" name="" id="" />
                           <br />
                           <input className="mt-3" type="file" name="" id="" />
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
                        {/* <!-- End: Culture --> */}

                        {/* <!-- Staff --> */}
                        <div className="staff">
                           <h4 className="mt-5">
                              Chỉnh sửa nhân viên trang giới thiệu
                           </h4>
                           <button
                              className="btn btn-primary px-4 fs-5 mt-4 mb-2"
                              type="button"
                           >
                              Thêm mới
                           </button>
                           <br />

                           <div className="list-staff my-4 border p-3">
                              <div className="staff-item d-flex align-items-center row">
                                 <div className="col-2">
                                    <Image className="w-100" src={Avatar1} alt="" />
                                 </div>
                                 <div className="col-8">
                                    <h6 className="fw-bold fs-5">Giám đốc</h6>
                                    <h6 className="fw-medium fs-5">
                                       Trần Ngọc Minh
                                    </h6>
                                    <div className="des">
                                       <p className="mb-1 fs-6">
                                          30 tuổi - độc thân
                                       </p>
                                       <p className="mb-1 fs-6">
                                          CEO - Art Director
                                       </p>
                                       <p className="mb-1 fs-6">
                                          "Không làm thì thôi, đã làm là phải
                                          giỏi nhất"
                                       </p>
                                    </div>
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

                              <div className="staff-item d-flex align-items-center mt-3 row">
                                 <div className="col-2">
                                    <Image className="w-100" src={Avatar1} alt="" />
                                 </div>
                                 <div className="col-8">
                                    <h6 className="fw-bold fs-5">Giám đốc</h6>
                                    <h6 className="fw-medium fs-5">
                                       Trần Ngọc Minh
                                    </h6>
                                    <div className="des">
                                       <p className="mb-1 fs-6">
                                          30 tuổi - độc thân
                                       </p>
                                       <p className="mb-1 fs-6">
                                          CEO - Art Director
                                       </p>
                                       <p className="mb-1 fs-6">
                                          "Không làm thì thôi, đã làm là phải
                                          giỏi nhất"
                                       </p>
                                    </div>
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

                           <label htmlFor="">Chức vụ</label>
                           <br />
                           <input
                              type="text"
                              className="w-100"
                              placeholder="The story of DVP"
                              value=""
                           />
                           <br />
                           <label htmlFor="">Họ tên</label>
                           <br />
                           <input
                              type="text"
                              className="w-100"
                              placeholder="Câu chuyện về DVP"
                              value=""
                           />
                           <br />
                           <label htmlFor="">Giới thiệu</label>
                           <br />
                           <input
                              type="text"
                              className="w-100 mt-3"
                              placeholder="Câu chuyện về DVP"
                              value=""
                           />
                           <br />
                           <input
                              type="text"
                              className="w-100 mt-3"
                              placeholder="Câu chuyện về DVP"
                              value=""
                           />
                           <br />
                           <input
                              type="text"
                              className="w-100 mt-3"
                              placeholder="Câu chuyện về DVP"
                              value=""
                           />
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
                        {/* <!-- End: Staff --> */}
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- End Body --> */}
      </Fragment>
   );
};

export default AdminAbout;
