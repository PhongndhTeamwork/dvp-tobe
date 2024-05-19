import "./admin-hiring.css";

import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

import CarouselImage2 from "../../../assets/images/carousel/carousel-2.png";


import Notification from "../../../components/notification/notification"

const AdminHiring = () => {
   return (
      <Fragment>
         {/* <!-- Pop up to show notifications --> */}
         <Notification/>

         {/* <!-- Loading animation --> */}
         <div id="popup-loader">
            <div className="circle"></div>
         </div>

         {/* <!-- Body --> */}
         <nav className="navbar navbar-expand fixed-top navbar-dark bg-dark">
            {/* <!-- Navbar Brand--> */}
            <Link className="navbar-brand ps-3" to="dashboard.html">
               Quản trị viên
            </Link>
            {/* <!-- Sidebar Toggle--> */}
            <button
               className="btn btn-dark btn-sm order-1 order-lg-0 ms-md-5 me-3 me-lg-0"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="sideBarNav"
            >
               <i className="fas fa-bars"></i>
            </button>

            {/* <!-- Navbar--> */}
            <ul className="navbar-nav ms-auto me-3 me-lg-4">
               <li className="nav-item dropdown">
                  <Link
                     className="nav-link dropdown-toggle"
                     id="navbarDropdown"
                     to=""
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
                        <Link className="dropdown-item" to="">
                           Cài đặt
                        </Link>
                     </li>
                     <li>
                        <Link className="dropdown-item" to="">
                           Tài khoản
                        </Link>
                     </li>
                     <li>
                        <hr className="dropdown-divider" />
                     </li>
                     <li>
                        <Link className="dropdown-item" to="">
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
                              data-bs-target="collapse-1"
                           >
                              <h4 className="m-0 text-light fs-6 fw-medium opacity-50">
                                 Trang chủ
                              </h4>
                           </button>
                        </h2>
                        <div
                           id="collapse-1"
                           className="accordion-collapse collapse "
                           data-bs-parent="accordionNav"
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
                              data-bs-target="collapse-2"
                           >
                              <h4 className="m-0 text-light fs-6 fw-medium opacity-50">
                                 Giới thiệu
                              </h4>
                           </button>
                        </h2>
                        <div
                           id="collapse-2"
                           className="accordion-collapse collapse"
                           data-bs-parent="accordionNav"
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
                              data-bs-target="collapse-3"
                           >
                              <h4 className="m-0 text-light fs-6 fw-medium opacity-50">
                                 Công việc
                              </h4>
                           </button>
                        </h2>
                        <div
                           id="collapse-3"
                           className="accordion-collapse collapse"
                           data-bs-parent="accordionNav"
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
                              data-bs-target="collapse-4"
                           >
                              <h4 className="m-0 text-light fs-6 fw-medium opacity-50">
                                 Tuyển dụng
                              </h4>
                           </button>
                        </h2>
                        <div
                           id="collapse-4"
                           className="accordion-collapse collapse show"
                           data-bs-parent="accordionNav"
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
                              data-bs-target="collapse-5"
                           >
                              <h4 className="m-0 text-light fs-6 fw-medium opacity-50">
                                 Liên hệ
                              </h4>
                           </button>
                        </h2>
                        <div
                           id="collapse-5"
                           className="accordion-collapse collapse"
                           data-bs-parent="accordionNav"
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
                              data-bs-target="collapse-6"
                           >
                              <h4 className="m-0 text-light fs-6 fw-medium opacity-50">
                                 Thông tin công ty
                              </h4>
                           </button>
                        </h2>

                        <div
                           id="collapse-6"
                           className="accordion-collapse collapse"
                           data-bs-parent="accordionNav"
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
                              data-bs-target="collapse-7"
                           >
                              <h4 className="m-0 text-light fs-6 fw-medium opacity-50">
                                 Tư vấn khách hàng
                              </h4>
                           </button>
                        </h2>

                        <div
                           id="collapse-7"
                           className="accordion-collapse collapse"
                           data-bs-parent="accordionNav"
                        >
                           <div className="accordion-body px-0 pt-0">
                              <div className="text-light fs-6 fw-normal">
                                 <Link
                                    to="dashboard.html"
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
                  Chỉnh sửa trang tuyển dụng
               </h4>

               <div className="content-body px-0 py-4 px-md-4">
                  <div className="row">
                     <div className="col-12 col-lg-10 col-xl-8 col-xxl-6">
                        {/* <!-- Banner --> */}
                        <div className="banner">
                           <h4 className="">Chỉnh sửa Banner trang tuyển dụng</h4>
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
                              Chỉnh sửa câu chuyện trang tuyển dụng
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

                        {/* <!-- Job --> */}
                        <div className="job">
                           <h4 className="mt-5">
                              Chỉnh sửa danh sách công việc đang tuyển dụng
                           </h4>
                           <button
                              className="btn btn-primary px-4 fs-5 mt-4 mb-2"
                              type="button"
                           >
                              Thêm mới
                           </button>
                           <br />

                           <div className="list-job p-3 pt-1 my-4 border">
                              <div className="job-item row w-100 align-items-center mt-3 border-bottom pb-2">
                                 <div className="col-10">
                                    <h5 className="fw-medium">Designer</h5>
                                    <p className="mb-0 fs-6">
                                       Lorem ipsum dolor sit amet, consectetur
                                       adipisicing elit. Placeat consequatur
                                       neque
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

                              <div className="job-item row w-100 align-items-center mt-3 border-bottom pb-2">
                                 <div className="col-10">
                                    <h5 className="fw-medium">Designer</h5>
                                    <p className="mb-0 fs-6">
                                       Lorem ipsum dolor sit amet, consectetur
                                       adipisicing elit. Placeat consequatur
                                       neque
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

                              <div className="job-item row w-100 align-items-center mt-3 border-bottom pb-2">
                                 <div className="col-10">
                                    <h5 className="fw-medium">Designer</h5>
                                    <p className="mb-0 fs-6">
                                       Lorem ipsum dolor sit amet, consectetur
                                       adipisicing elit. Placeat consequatur
                                       neque
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
                           </div>

                           <h4 className="mt-5">Thêm vị trí tuyển dụng mới</h4>
                           <label htmlFor="">Vị trí tuyển dụng</label>
                           <br />
                           <input
                              type="text"
                              className="w-100"
                              placeholder="The story of DVP"
                              value=""
                           />
                           <br />

                           <label htmlFor="">Mô tả công việc</label>
                           <br />
                           <textarea className="w-100 p-2" name="" id="" rows="3">
                              Đoạn văn chữ thường
                           </textarea>
                           <br />
                           <label htmlFor="">Hướng dẫn ứng tuyển</label>
                           <br />
                           <textarea className="w-100 p-2" name="" id="" rows="3">
                              Đoạn văn chữ thường
                           </textarea>
                           <br />
                           <label htmlFor="">Email liên hệ</label>
                           <br />
                           <input
                              type="text"
                              className="w-100"
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

                           <h4 className="mt-5">Thay đổi link gmail tuyển dụng</h4>
                           <label htmlFor="">Link gmail</label>
                           <br />
                           <input
                              type="text"
                              className="w-100"
                              placeholder="The story of DVP"
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
                        {/* <!-- End: Job --> */}
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- End Body --></br> */}
      </Fragment>
   );
};

export default AdminHiring;
