import "./admin-about.css";

import { Fragment, useContext, useEffect, useState } from "react";
import { AdminContext } from "../adminContext";
import { Outlet } from "react-router-dom";

const AdminAbout = () => {
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
                  Chỉnh sửa trang giới thiệu
               </h4>

               <div className="content-body px-0 py-4 px-md-4">
                  <div className="row">
                     <div className="col-12 col-lg-12 col-xl-12 col-xxl-12">
                        {/* <!-- Banner --> */}
                        <Outlet />

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