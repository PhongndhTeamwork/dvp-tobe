import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminHiringGmail = () => {
   return (
      <div>
         <h4 className="mt-5">Thay đổi link gmail tuyển dụng</h4>
         <label htmlFor="">Link gmail</label>
         <br />
         <input
            type="text"
            className="w-100"
            placeholder="The story of DVP"
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

export default AdminHiringGmail;
