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

import { Outlet } from "react-router-dom";

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
                        <Outlet/>
                        
                        {/* <!-- End: Banner --> */}

                        {/* <!-- Story --> */}
                        
                        {/* <!-- End: Story --> */}

                        {/* <!-- Motto --> */}
                        
                        {/* <!-- End: Motto --> */}

                        {/* <!-- Culture --> */}
                        
                        {/* <!-- End: Culture --> */}

                        {/* <!-- Staff --> */}
                        
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
