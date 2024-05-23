import "./admin-about.css";

import { Fragment, useContext, useEffect, useState } from "react";
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

import { AdminContext } from "../adminContext";
import axios from "axios";

const AdminAbout = () => {
   const { fullView } = useContext(AdminContext);

   const [bannerImage, setBannerImage] = useState();

   const [banner, setBanner] = useState({});
   const [firstStory, setFirstStory] = useState({});
   const [secondStory, setSecondStory] = useState({});
   const [expertise, setExpertise] = useState({});

   useEffect(() => {
      axios.get("/api/about").then(({ data }) => {
         setBanner(data.banner);

         setBannerImage(data.banner.image);
      });
   }, []);

   return (
      <Fragment>
         {/* <!-- Pop up to show notifications --> */}
         {/* <Notification /> */}

         {/* <!-- Loading animation --> */}
         <div id="popup-loader">
            <div className="circle"></div>
         </div>

         <div
            className="content d-flex"
            style={{ width: fullView ? "100vw" : "82.5vw" }}
         >
            <div className="vh-100 content-wrapper px-2 px-lg-4">
               <h4 className="p-3 ps-lg-0 fs-4 text-light fw-semibold">
                  Chỉnh sửa trang giới thiệu
               </h4>

               <div className="content-body px-0 py-4 px-md-4">
                  <div className="row">
                     <div className="col-12 col-lg-10 col-xl-8 col-xxl-6">
                        {/* <!-- Banner --> */}
                        <div className="banner">
                           <h4 className="">
                              Chỉnh sửa Banner trang giới thiệu
                           </h4>
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
                           <textarea
                              className="w-100 p-2"
                              name=""
                              id=""
                              rows="3"
                           >
                              Đoạn văn chữ thường
                           </textarea>
                           <br />
                           <label htmlFor="">Đoạn văn 2</label>
                           <br />
                           <textarea
                              className="w-100 p-2"
                              name=""
                              id=""
                              rows="3"
                           >
                              Đoạn văn chữ thường
                           </textarea>
                           <br />
                           <label htmlFor="">Đoạn văn 3</label>
                           <br />
                           <textarea
                              className="w-100 p-2"
                              name=""
                              id=""
                              rows="3"
                           >
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
                           <textarea
                              className="w-100 p-2"
                              name=""
                              id=""
                              rows="3"
                           >
                              Đoạn văn chữ thường
                           </textarea>
                           <br />

                           <label className="mt-4" htmlFor="">
                              Thêm ảnh
                           </label>
                           <div className="row justify-content-between mt-4 p-2 border">
                              <div className="col-3 row flex-column justify-content-between">
                                 <div className="col-12">
                                    <Image
                                       className="w-100"
                                       src={CultureImage1}
                                    />
                                 </div>
                                 <div className="col-12">
                                    <Image
                                       className="w-100"
                                       src={CultureImage2}
                                    />
                                 </div>
                              </div>
                              <div className="col-6 row">
                                 <Image className="w-100" src={CultureImage3} />
                              </div>
                              <div className="col-3 row flex-column justify-content-between">
                                 <div className="col-12">
                                    <Image
                                       className="w-100"
                                       src={CultureImage4}
                                    />
                                 </div>
                                 <div className="col-12">
                                    <Image
                                       className="w-100"
                                       src={CultureImage5}
                                    />
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
                                    <Image
                                       className="w-100"
                                       src={Avatar1}
                                       alt=""
                                    />
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
                                    <Image
                                       className="w-100"
                                       src={Avatar1}
                                       alt=""
                                    />
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
