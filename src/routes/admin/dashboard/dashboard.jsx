import "./dashboard.css";

import { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Notification from "../../../components/notification/notification";

import { AdminContext } from "../adminContext";
import axios from "axios";

const Dashboard = () => {
   const { fullView } = useContext(AdminContext);

   const [customers, setCustomers] = useState([]);
   const [currentCustomer, setCurrentCustomer] = useState(-1);

   useEffect(() => {
      axios
         .get("/api/admin/company/customer")
         .then(({ data }) => {
            setCustomers(data.customers);
         })
         .catch((error) => {
            throw new Error(error);
         });
   }, []);

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
                              {customers?.map((customer, index) => (
                                 <label
                                    htmlFor={`customer-${customer?.id}`}
                                    key={index}
                                    className="customer-item mt-3 pb-2 border-bottom d-flex align-items-center"
                                 >
                                    <input
                                       style={{
                                          backgroundColor: "transparent",
                                       }}
                                       type="radio"
                                       id={`customer-${customer?.id}`}
                                       name="customer"
                                       className="me-4"
                                       onChange={() => {
                                          console.log(index);
                                          setCurrentCustomer(index);
                                       }}
                                    ></input>
                                    <div className="">
                                       <h5>{customer?.fullname}</h5>
                                       <p className="mb-0">
                                          Dịch vụ quan tâm :
                                          <span>
                                             &nbsp;{customer?.serviceName}
                                          </span>
                                       </p>
                                    </div>
                                    <span className="ms-auto me-4">
                                       {customer?.phone}
                                    </span>
                                 </label>
                              ))}
                           </div>

                           <div className="customer-info w-75 mt-5">
                              <h4 className="">
                                 Thông tin chi tiết khách hàng
                              </h4>
                              <br />

                              {currentCustomer < 0 ? (
                                 ""
                              ) : (
                                 <div className="row border p-3">
                                    <div className="col-6">Họ và tên</div>
                                    <div className="col-6">
                                       {customers[currentCustomer]?.fullname}
                                    </div>

                                    <div className="col-6">Email</div>
                                    <div className="col-6">
                                       {customers[currentCustomer]?.email}
                                    </div>

                                    <div className="col-6">Số điện thoại</div>
                                    <div className="col-6">
                                       {customers[currentCustomer]?.phone}
                                    </div>

                                    <div className="col-6">Trạng thái</div>
                                    <div className="col-6">
                                       {customers[currentCustomer]?.status === 0
                                          ? "Chưa tư vấn"
                                          : "Đã tư vấn"}
                                    </div>

                                    <div className="col-6">
                                       Dịch vụ quan tâm
                                    </div>
                                    <div className="col-6">
                                       {customers[currentCustomer]?.serviceName}
                                    </div>
                                 </div>
                              )}

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
