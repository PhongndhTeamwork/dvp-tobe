import "./admin-company.css";

import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

import Notification from "../../../components/notification/notification";

import RamenImage from "../../../assets/images/others/ramen.png";
import OfficeBackground from "../../../assets/images/others/office-bg.jpg";

import { AdminContext } from "../adminContext";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminCompany = () => {
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
            <div className="vh-100 content-wrapper px-2 px-lg-4">
               <h1 className="p-3 ps-lg-0 fs-4 text-light fw-semibold">
                  Chỉnh sửa thông tin của công ty
               </h1>

               <div className="content-body px-0 py-4 px-md-4">
                  <div className="row">
                     <div className="col-12 col-lg-10 col-xl-8 col-xxl-6">
                        <label htmlFor="">Logo công ty</label>
                        <br />
                        <Image
                           className="w-25 my-4"
                           src={RamenImage}
                           alt=""
                           srcset=""
                        />
                        <br />
                        <input type="file" />
                        <br />
                        <label htmlFor="">Tên công ty</label>
                        <br />
                        <input
                           type="text"
                           className="w-100"
                           placeholder="The story of DVP"
                           value=""
                        />
                        <br />
                        <label htmlFor="">Giới thiệu ngắn</label>
                        <br />
                        <textarea className="w-100 p-2" name="" id="" rows="5">
                           Đoạn văn chữ thường
                        </textarea>
                        <br />
                        <label htmlFor="">Ảnh công ty</label>
                        <br />
                        <Image
                           className="w-75 my-4"
                           src={OfficeBackground}
                           alt=""
                           srcset=""
                        />
                        <br />
                        <input type="file" name="" id="" />
                        <br />

                        <label htmlFor="">Số đăng ký</label>
                        <br />
                        <input
                           type="text"
                           className="w-100"
                           placeholder="The story of DVP"
                           value=""
                        />
                        <br />
                        <label htmlFor="">Ngày cấp phép</label>
                        <br />
                        <input
                           type="text"
                           className="w-100"
                           placeholder="The story of DVP"
                           value=""
                        />
                        <br />
                        <label htmlFor="">Nơi cấp phép</label>
                        <br />
                        <input
                           type="text"
                           className="w-100"
                           placeholder="The story of DVP"
                           value=""
                        />
                        <br />

                        <label htmlFor="">Địa chỉ công ty</label>
                        <br />
                        <input
                           type="text"
                           className="w-100"
                           placeholder="The story of DVP"
                           value=""
                        />
                        <br />
                        <label htmlFor="">Số điện thoại</label>
                        <br />
                        <input
                           type="text"
                           className="w-100"
                           placeholder="The story of DVP"
                           value=""
                        />
                        <br />
                        <label htmlFor="">Email liên hệ</label>
                        <br />
                        <input
                           type="text"
                           className="w-100"
                           placeholder="The story of DVP"
                           value=""
                        />
                        <br />
                        <label htmlFor="">Website</label>
                        <br />
                        <input
                           type="text"
                           className="w-100"
                           placeholder="Câu chuyện về DVP"
                           value=""
                        />
                        <br />
                        <label htmlFor="">Đường link google map</label>
                        <br />
                        <textarea
                           className="w-100 p-2"
                           name=""
                           id=""
                           rows="5"
                        ></textarea>
                        <br />

                        <label htmlFor="">Link facbook</label>
                        <br />
                        <input
                           type="text"
                           className="w-100"
                           placeholder="Câu chuyện về DVP"
                           value=""
                        />
                        <br />
                        <label htmlFor="">Link instagram</label>
                        <br />
                        <input
                           type="text"
                           className="w-100"
                           placeholder="Câu chuyện về DVP"
                           value=""
                        />
                        <br />
                        <label htmlFor="">Link youtube</label>
                        <br />
                        <input
                           type="text"
                           className="w-100"
                           placeholder="Câu chuyện về DVP"
                           value=""
                        />
                        <br />
                        <label htmlFor="">Link zalo</label>
                        <br />
                        <input
                           type="text"
                           className="w-100"
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
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- End Body --></br> */}
      </Fragment>
   );
};

export default AdminCompany;
