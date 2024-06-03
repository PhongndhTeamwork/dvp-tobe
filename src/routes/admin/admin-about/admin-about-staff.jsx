import { Image } from "react-bootstrap";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

const AdminAboutStaff = () => {
   const preApi = useMemo(() => {
      return process.env.NODE_ENV === "production"
         ? process.env.REACT_APP_BASE_IMAGE_URL
         : "";
   }, []);
   return (
      <div className="staff">
         <h4 className="mt-5">Chỉnh sửa nhân viên trang giới thiệu</h4>
         <button className="btn btn-primary px-4 fs-5 mt-4 mb-2" type="button">
            Thêm mới
         </button>
         <br />

         <div className="list-staff my-4 border p-3">
            <div className="staff-item d-flex align-items-center row">
               <div className="col-2">
                  <Image className="w-100" src={""} alt="" />
               </div>
               <div className="col-8">
                  <h6 className="fw-bold fs-5">Giám đốc</h6>
                  <h6 className="fw-medium fs-5">Trần Ngọc Minh</h6>
                  <div className="des">
                     <p className="mb-1 fs-6">30 tuổi - độc thân</p>
                     <p className="mb-1 fs-6">CEO - Art Director</p>
                     <p className="mb-1 fs-6">
                        "Không làm thì thôi, đã làm là phải giỏi nhất"
                     </p>
                  </div>
               </div>
               <div className="col-1">
                  <Link to="" className="">
                     Sửa
                  </Link>
               </div>
               <div className="col-1">
                  <Link to="" className="text-danger">
                     Xóa
                  </Link>
               </div>
            </div>

            <div className="staff-item d-flex align-items-center mt-3 row">
               <div className="col-2">
                  <Image className="w-100" src={""} alt="" />
               </div>
               <div className="col-8">
                  <h6 className="fw-bold fs-5">Giám đốc</h6>
                  <h6 className="fw-medium fs-5">Trần Ngọc Minh</h6>
                  <div className="des">
                     <p className="mb-1 fs-6">30 tuổi - độc thân</p>
                     <p className="mb-1 fs-6">CEO - Art Director</p>
                     <p className="mb-1 fs-6">
                        "Không làm thì thôi, đã làm là phải giỏi nhất"
                     </p>
                  </div>
               </div>
               <div className="col-1">
                  <Link to="" className="">
                     Sửa
                  </Link>
               </div>
               <div className="col-1">
                  <Link to="" className="text-danger">
                     Xóa
                  </Link>
               </div>
            </div>
         </div>

         <label htmlFor="">Chức vụ</label>
         <br />
         <input
            type="text"
            className="w-100"
            placeholder="The story of DVP"
            value=""
         />
         <br />
         <label htmlFor="">Họ tên</label>
         <br />
         <input
            type="text"
            className="w-100"
            placeholder="Câu chuyện về DVP"
            value=""
         />
         <br />
         <label htmlFor="">Giới thiệu</label>
         <br />
         <input
            type="text"
            className="w-100 mt-3"
            placeholder="Câu chuyện về DVP"
            value=""
         />
         <br />
         <input
            type="text"
            className="w-100 mt-3"
            placeholder="Câu chuyện về DVP"
            value=""
         />
         <br />
         <input
            type="text"
            className="w-100 mt-3"
            placeholder="Câu chuyện về DVP"
            value=""
         />
         <br />

         <button className="btn btn-primary px-4 fs-4 mt-5" type="button">
            Submit
         </button>
         <button className="btn btn-danger px-4 fs-4 mt-5" type="button">
            Hủy
         </button>
      </div>
   );
};

export default AdminAboutStaff;
