import "./admin-home.css";

import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
// import { Image, Carousel } from "react-bootstrap";

// import CarouselImage1 from "../../../assets/images/carousel/carousel-1.png";
// import CarouselImage2 from "../../../assets/images/carousel/carousel-2.png";
// import CarouselImage3 from "../../../assets/images/carousel/carousel-3.png";
// import Video from "../../../assets/images/others/video-auto.mp4";
// import Notification from "../../../components/notification/notification";

import { AdminContext } from "../adminContext";
import axios from "axios";
import { useSelector } from "react-redux";

const AdminHome = () => {
   const { fullView } = useContext(AdminContext);

   const { userInfo } = useSelector((state) => state.userLogin);


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
                        <Outlet />
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
