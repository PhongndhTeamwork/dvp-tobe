import "./admin-hiring.css";

import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { Image } from "react-bootstrap";

import CarouselImage2 from "../../../assets/images/carousel/carousel-2.png";

import Notification from "../../../components/notification/notification";

import { AdminContext } from "../adminContext";

const AdminHiring = () => {
   const { fullView } = useContext(AdminContext);

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
                  Chỉnh sửa trang tuyển dụng
               </h4>

               <div className="content-body px-0 py-4 px-md-4">
                  <div className="row">
                     <div className="col-12 col-lg-12 col-xl-12 col-xxl-12">
                        <Outlet/>
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
