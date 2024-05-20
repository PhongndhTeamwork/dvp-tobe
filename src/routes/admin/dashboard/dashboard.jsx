import "./dashboard.css";

import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import Notification from "../../../components/notification/notification";

import { AdminContext } from "../adminContext";

const Dashboard = () => {
   const { fullView } = useContext(AdminContext);

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
            {/* <div
               className="collapse collapse-horizontal show vh-100"
               id="sideBarNav"
               style={{ display: fullView ? "none" : "block" }}
            >
               <div className="h-100 navbar-left"></div>
            </div> */}

            <div className="vh-100 content-wrapper px-2 px-lg-4">
               <h1 className="p-3 ps-lg-0 fs-4 text-light fw-semibold">
                  Các khách hàng mới
               </h1>

               <div className="content-body px-0 py-4 px-md-4">
                  <div className="row">
                     <div className="col-12">
                        <div className="customer">
                           <h4 className="">
                              Danh sách các khách hàng đã để lại thông tin liên
                              hệ
                           </h4>
                           <br />

                           <div className="list-customer">
                              <Link
                                 to=""
                                 className="customer-item mt-3 pb-2 border-bottom d-flex align-items-center"
                              >
                                 <input
                                    className="ms3 me-4"
                                    style={{
                                       width: "width: 20px; height: 20px; cursor: pointer;",
                                    }}
                                    type="checkbox"
                                    name=""
                                    id=""
                                 />
                                 <div className="">
                                    <h5>Ngyễn Văn A</h5>
                                    <p className="mb-0">
                                       Dịch vụ quan tâm: <span>Branding</span>
                                    </p>
                                 </div>
                                 <span className="ms-auto me-4">
                                    14:30 12/05/2024
                                 </span>
                              </Link>

                              <Link
                                 to=""
                                 className="customer-item mt-3 pb-2 border-bottom d-flex align-items-center"
                              >
                                 <input
                                    className="ms3 me-4"
                                    style={{
                                       width: "width: 20px; height: 20px; cursor: pointer;",
                                    }}
                                    type="checkbox"
                                    name=""
                                    id=""
                                 />
                                 <div className="">
                                    <h5>Ngyễn Văn A</h5>
                                    <p className="mb-0">
                                       Dịch vụ quan tâm: <span>Branding</span>
                                    </p>
                                 </div>
                                 <span className="ms-auto me-4">
                                    14:30 12/05/2024
                                 </span>
                              </Link>

                              <Link
                                 to=""
                                 className="customer-item mt-3 pb-2 border-bottom d-flex align-items-center"
                              >
                                 <input
                                    className="ms3 me-4"
                                    style={{
                                       width: "width: 20px; height: 20px; cursor: pointer;",
                                    }}
                                    type="checkbox"
                                    name=""
                                    id=""
                                 />
                                 <div className="">
                                    <h5>Ngyễn Văn A</h5>
                                    <p className="mb-0">
                                       Dịch vụ quan tâm: <span>Branding</span>
                                    </p>
                                 </div>
                                 <span className="ms-auto me-4">
                                    14:30 12/05/2024
                                 </span>
                              </Link>

                              <Link
                                 to=""
                                 className="customer-item mt-3 pb-2 border-bottom d-flex align-items-center"
                              >
                                 <input
                                    className="ms3 me-4"
                                    style={{
                                       width: "width: 20px; height: 20px; cursor: pointer;",
                                    }}
                                    type="checkbox"
                                    name=""
                                    id=""
                                 />
                                 <div className="">
                                    <h5>Ngyễn Văn A</h5>
                                    <p className="mb-0">
                                       Dịch vụ quan tâm: <span>Branding</span>
                                    </p>
                                 </div>
                                 <span className="ms-auto me-4">
                                    14:30 12/05/2024
                                 </span>
                              </Link>

                              <Link
                                 to=""
                                 className="customer-item mt-3 pb-2 border-bottom d-flex align-items-center"
                              >
                                 <input
                                    className="ms3 me-4"
                                    style={{
                                       width: "width: 20px; height: 20px; cursor: pointer;",
                                    }}
                                    type="checkbox"
                                    name=""
                                    id=""
                                 />
                                 <div className="">
                                    <h5>Ngyễn Văn A</h5>
                                    <p className="mb-0">
                                       Dịch vụ quan tâm: <span>Branding</span>
                                    </p>
                                 </div>
                                 <span className="ms-auto me-4">
                                    14:30 12/05/2024
                                 </span>
                              </Link>

                              <Link
                                 to=""
                                 className="customer-item mt-3 pb-2 border-bottom d-flex align-items-center"
                              >
                                 <input
                                    className="ms3 me-4"
                                    style={{
                                       width: "width: 20px; height: 20px; cursor: pointer;",
                                    }}
                                    type="checkbox"
                                    name=""
                                    id=""
                                 />
                                 <div className="">
                                    <h5>Ngyễn Văn A</h5>
                                    <p className="mb-0">
                                       Dịch vụ quan tâm: <span>Branding</span>
                                    </p>
                                 </div>
                                 <span className="ms-auto me-4">
                                    14:30 12/05/2024
                                 </span>
                              </Link>
                           </div>

                           <div className="customer-info w-75 mt-5">
                              <h4 className="">
                                 Thông tin chi tiết khách hàng
                              </h4>
                              <br />

                              <div className="row border p-3">
                                 <div className="col-6">Họ và tên</div>
                                 <div className="col-6">Nguyễn Văn An</div>

                                 <div className="col-6">Danh xưng</div>
                                 <div className="col-6">Ông</div>

                                 <div className="col-6">Email</div>
                                 <div className="col-6">an@gmail.com</div>

                                 <div className="col-6">Số điện thoại</div>
                                 <div className="col-6">0123656789</div>

                                 <div className="col-6">Dịch vụ quan tâm</div>
                                 <div className="col-6">Branding</div>
                              </div>

                              <button
                                 type="button"
                                 className="btn btn-primary mt-4 px-4"
                              >
                                 Ok
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- End Body --> */}
      </Fragment>
   );
};

export default Dashboard;
