import "./dashboard.css";

import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import Notification from "../../../components/notification/notification";
import AdminNav from "../../../components/admin-nav/admin-nav";

const Dashboard = () => {
   return (
      <Fragment>
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
                  <AdminNav />
               </div>
            </div>

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
