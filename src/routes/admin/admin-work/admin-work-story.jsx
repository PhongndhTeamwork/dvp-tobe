import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

import CarouselImage2 from "../../../assets/images/carousel/carousel-2.png";

const AdminWorkStory = () => {
   return (
      <div className="story">
         <h4 className="mt-4">Chỉnh sửa câu chuyện trang công việc</h4>

         <label htmlFor="">Sub title</label>
         <br />
         <input
            type="text"
            className="w-100"
            placeholder="The story of DVP"
            value=""
         />
         <br />
         <label htmlFor="">Title</label>
         <br />
         <input
            type="text"
            className="w-100"
            placeholder="Câu chuyện về DVP"
            value=""
         />
         <br />
         <label htmlFor="">Đoạn văn 1</label>
         <br />
         <textarea className="w-100 p-2" name="" id="" rows="3">
            Đoạn văn chữ thường
         </textarea>
         <br />
         <label htmlFor="">Đoạn văn 2</label>
         <br />
         <textarea className="w-100 p-2" name="" id="" rows="3">
            Đoạn văn chữ thường
         </textarea>
         <br />
         <label htmlFor="">Đoạn văn 3</label>
         <br />
         <textarea className="w-100 p-2" name="" id="" rows="3">
            Đoạn văn chữ in đậm
         </textarea>
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

export default AdminWorkStory;
