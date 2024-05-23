import "./admin-home.css";

import { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Image, Carousel } from "react-bootstrap";

import CarouselImage1 from "../../../assets/images/carousel/carousel-1.png";
import CarouselImage2 from "../../../assets/images/carousel/carousel-2.png";
import CarouselImage3 from "../../../assets/images/carousel/carousel-3.png";
import Video from "../../../assets/images/others/video-auto.mp4";
import Notification from "../../../components/notification/notification";

import { AdminContext } from "../adminContext";
import axios from "axios";

const AdminHome = () => {
   const { fullView } = useContext(AdminContext);

   const [bannerImage, setBannerImage] = useState();

   const [banner, setBanner] = useState({});
   const [video, setVideo] = useState("");
   const [story, setStory] = useState({});
   const [project, setProject] = useState({});
   const [services, setServices] = useState({});

   useEffect(() => {
      axios.get("/api/home").then(({ data }) => {
         setBanner(data.banner);
         setVideo(data.video);
         setStory(data.story);
         setProject(data.projects);

         setBannerImage(data.banner.image);
      });
   }, []);

   useEffect(() => {
      axios.get("api/info/services").then(({ data }) => {
         setServices(data.services);
      });
   });

   useEffect(() => {
      console.log(banner);
   }, [banner]);

   const handleChangeBannerImage = (e) => {
      const file = e.target.files[0];
      if (file) {
         setBanner({
            ...banner,
            image: e.target.files[0],
         });

         const reader = new FileReader();
         reader.onloadend = () => {
            // Update the state with the newly selected image
            setBannerImage(reader.result);
         };
         reader.readAsDataURL(file);
      }
   };

   return (
      <Fragment>
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
                  Chỉnh sửa trang chủ
               </h4>

               <div className="content-body px-0 py-4 px-md-4">
                  <div className="row">
                     <div className="col-12 col-lg-10 col-xl-8 col-xxl-6">
                        {/* <!-- Banner --> */}
                        <div className="banner">
                           <h4 className="">Chỉnh sửa Banner trang chủ</h4>
                           <label htmlFor="">Text stroke 1</label>
                           <br />
                           <input
                              type="text"
                              className="w-100"
                              placeholder={banner?.textstroke1}
                              onChange={(e) => {
                                 setBanner({
                                    ...banner,
                                    textstroke1: e.target.value,
                                 });
                              }}
                           />
                           <br />
                           <label htmlFor="">Text stroke 2</label>
                           <br />
                           <input
                              type="text"
                              className="w-100"
                              placeholder={banner?.textstroke2}
                              onChange={(e) => {
                                 setBanner({
                                    ...banner,
                                    textstroke2: e.target.value,
                                 });
                              }}
                           />
                           <br />
                           <label htmlFor=""> Text uppercase 1</label>
                           <br />
                           <input
                              type="text"
                              className="w-100"
                              placeholder={banner?.textuppercase1}
                              onChange={(e) => {
                                 setBanner({
                                    ...banner,
                                    textuppercase1: e.target.value,
                                 });
                              }}
                           />
                           <br />
                           <label htmlFor="">Text uppercase 2</label>
                           <br />
                           <input
                              type="text"
                              className="w-100"
                              placeholder={banner?.textuppercase2}
                              onChange={(e) => {
                                 setBanner({
                                    ...banner,
                                    textuppercase2: e.target.value,
                                 });
                              }}
                           />
                           <br />
                           <label htmlFor="">Banner image</label>
                           <br />

                           <div
                              className="banner__img w-50 my-4 border"
                              style={{ display: "block" }}
                           >
                              <i className="fa-solid fa-xmark"></i>
                              <Image
                                 className="w-100"
                                 src={bannerImage}
                                 alt=""
                              />
                           </div>

                           <input
                              type="file"
                              name=""
                              id=""
                              onChange={(e) => {
                                 handleChangeBannerImage(e);
                              }}
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
                        {/* <!-- End: Banner --> */}

                        {/* <!-- Video --> */}
                        <div className="video">
                           <h4 className="mt-5">
                              Chỉnh sửa video auto playing trang chủ
                           </h4>
                           <label htmlFor="">Video</label>
                           <br />
                           <video
                              className="w-50 py-3"
                              src={Video}
                              controls
                           ></video>
                           <br />
                           <input
                              type="file"
                              onChange={(e) => {
                                 setVideo(e.target.files[0]);
                              }}
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
                        {/* <!-- End: Video --> */}

                        {/* <!-- Story --> */}
                        <div className="story">
                           <h4 className="mt-5">
                              Chỉnh sửa câu chuyện trang chủ
                           </h4>

                           <label htmlFor="">Sub title</label>
                           <br />
                           <input
                              type="text"
                              className="w-100"
                              placeholder="The story of DVP"
                              onChange={(e) => {
                                 setStory({
                                    ...story,
                                    subtitle: e.target.value,
                                 });
                              }}
                           />
                           <br />
                           <label htmlFor="">Title</label>
                           <br />
                           <input
                              type="text"
                              className="w-100"
                              placeholder="Câu chuyện về DVP"
                              onChange={(e) => {
                                 setStory({ ...story, title: e.target.value });
                              }}
                           />
                           <br />
                           <label htmlFor="">Đoạn văn 1</label>
                           <br />
                           <textarea
                              className="w-100 p-2"
                              name=""
                              id=""
                              rows="3"
                              onChange={(e) => {
                                 setStory({ ...story, tex1: e.target.value });
                              }}
                              defaultValue="Đoạn văn chữ thường"
                           ></textarea>
                           <br />
                           <label htmlFor="">Đoạn văn 2</label>
                           <br />
                           <textarea
                              className="w-100 p-2"
                              name=""
                              id=""
                              rows="3"
                              onChange={(e) => {
                                 setStory({ ...story, tex2: e.target.value });
                              }}
                              defaultValue="Đoạn văn chữ thường"
                           ></textarea>
                           <br />
                           <label htmlFor="">Đoạn văn 3</label>
                           <br />
                           <textarea
                              className="w-100 p-2"
                              name=""
                              id=""
                              rows="3"
                              onChange={(e) => {
                                 setStory({ ...story, tex3: e.target.value });
                              }}
                              defaultValue="Đoạn văn chữ in đậm"
                           ></textarea>
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

                        {/* <!-- Service --> */}
                        <div className="service">
                           <h4 className="mt-5 mb-4">
                              Chỉnh sửa danh sách dịch vụ
                           </h4>
                           <button
                              className="btn btn-primary px-4 fs-5 my-3"
                              type="button"
                           >
                              Thêm mới
                           </button>
                           <br />

                           <div className="service-list border px-3">
                              <div className="service__item row py-4 align-items-center">
                                 <div className="col-12 col-md-5">
                                    <Carousel interval={1000}>
                                       <Carousel.Item className="carousel-item">
                                          <Image
                                             src={CarouselImage1}
                                             className="w-100"
                                             alt="carousel-img-1"
                                          />
                                       </Carousel.Item>
                                       <Carousel.Item className="carousel-item">
                                          <Image
                                             src={CarouselImage2}
                                             className="w-100"
                                             alt="carousel-img-2"
                                          />
                                       </Carousel.Item>
                                       <Carousel.Item className="carousel-item">
                                          <Image
                                             src={CarouselImage3}
                                             className="w-100"
                                             alt="carousel-img-3"
                                          />
                                       </Carousel.Item>
                                    </Carousel>
                                 </div>

                                 <div className="col-12 col-md-5">
                                    <h6>Logo</h6>
                                    <h6>Ấn phẩm văn phòng</h6>
                                    <h6>Broucher, Cataloge</h6>
                                    <h6>Capacity profile - Company profile</h6>
                                 </div>

                                 <div className="col-1">
                                    <Link to="">Sửa</Link>
                                 </div>
                                 <div className="col-1">
                                    <Link className="text-danger" to="">
                                       Xóa
                                    </Link>
                                 </div>
                              </div>
                              <div className="service__item row py-4 align-items-center">
                                 <div className="col-12 col-md-5">
                                    <Carousel interval={1000}>
                                       <Carousel.Item className="carousel-item">
                                          <Image
                                             src={CarouselImage1}
                                             className="w-100"
                                             alt="carousel-img-1"
                                          />
                                       </Carousel.Item>
                                       <Carousel.Item className="carousel-item">
                                          <Image
                                             src={CarouselImage2}
                                             className="w-100"
                                             alt="carousel-img-2"
                                          />
                                       </Carousel.Item>
                                       <Carousel.Item className="carousel-item">
                                          <Image
                                             src={CarouselImage3}
                                             className="w-100"
                                             alt="carousel-img-3"
                                          />
                                       </Carousel.Item>
                                    </Carousel>
                                 </div>

                                 <div className="col-12 col-md-5">
                                    <h6>Logo</h6>
                                    <h6>Ấn phẩm văn phòng</h6>
                                    <h6>Broucher, Cataloge</h6>
                                    <h6>Capacity profile - Company profile</h6>
                                 </div>

                                 <div className="col-1">
                                    <Link to="">Sửa</Link>
                                 </div>
                                 <div className="col-1">
                                    <Link className="text-danger" to="">
                                       Xóa
                                    </Link>
                                 </div>
                              </div>
                           </div>

                           <h4 className="mt-5">Thêm dịch vụ mới</h4>

                           <label htmlFor="">Tên dịch vụ</label>
                           <br />
                           <input
                              type="text"
                              className="w-100"
                              placeholder="Branding"
                           />
                           <br />
                           <label htmlFor="">Carousel</label>
                           <br />
                           <div className="carousel__imgs my-4 py-2 border w-100">
                              <div className="img w-25 mx-2 border">
                                 <i className="fa-solid fa-xmark"></i>
                                 <Image
                                    className="w-100"
                                    src={CarouselImage1}
                                 />
                              </div>
                              <div className="img w-25 mx-2 border">
                                 <i className="fa-solid fa-xmark"></i>
                                 <Image
                                    className="w-100"
                                    src={CarouselImage2}
                                 />
                              </div>
                              <div className="img w-25 mx-2 border">
                                 <i className="fa-solid fa-xmark"></i>
                                 <Image
                                    className="w-100"
                                    src={CarouselImage3}
                                 />
                              </div>
                           </div>
                           <input type="file" multiple name="" id="" />
                           <br />
                           <label htmlFor="">Mô tả</label>
                           <br />
                           <textarea
                              className="w-100 p-3"
                              name=""
                              id=""
                              rows="7"
                              defaultValue="Mỗi dòng một mô tả"
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
                        {/* <!-- End: Service --> */}
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- End Body --></br> */}
      </Fragment>
   );
};

export default AdminHome;
