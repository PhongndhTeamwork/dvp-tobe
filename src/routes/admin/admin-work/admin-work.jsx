import "./admin-work.css";

import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { AdminContext } from "../adminContext";

const AdminWork = () => {
   const { fullView } = useContext(AdminContext);

   return (
      <Fragment>
         <div id="popup-loader">
            <div className="circle"></div>
         </div>

         <div
            className="content d-flex"
            style={{ width: fullView ? "100vw" : "82.5vw" }}
         >
            <div className="vh-100 content-wrapper px-0 px-lg-4">
               <h4 className="p-3 ps-lg-0 fs-4 text-light fw-semibold">
                  Chỉnh sửa trang công việc
               </h4>

               <div className="content-body px-3 py-4 px-md-4">
                  <div className="row">
                     <div className="col-12 col-lg-12 col-xl-12 col-xxl-12">
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

export default AdminWork;