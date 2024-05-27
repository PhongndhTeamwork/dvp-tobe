import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

import CarouselImage2 from "../../../assets/images/carousel/carousel-2.png";

const AdminHiringBanner = () => {
   return (
      <div className="banner">
         <h4 className="">Chỉnh sửa Banner trang tuyển dụng</h4>
         <br />

         <label htmlFor="">Text stroke 1</label>
         <br />
         <input
            type="text"
            className="w-100"
            placeholder="Professional"
            value=""
         />
         <br />
         <label htmlFor="">Text stroke 2</label>
         <br />
         <input type="text" className="w-100" placeholder="Creative" value="" />
         <br />
         <label htmlFor=""> Text uppercase 1</label>
         <br />
         <input type="text" className="w-100" placeholder="STYLE" value="" />
         <br />
         <label htmlFor="">Text uppercase 2</label>
         <br />
         <input type="text" className="w-100" placeholder="DESIGN" value="" />
         <br />
         <label htmlFor="">Banner image</label>
         <br />

         <div className="banner__img w-50 my-4 border">
            <i className="fa-solid fa-xmark"></i>
            <Image className="w-100" src={CarouselImage2} alt="" />
         </div>
         <input type="file" name="" id="" />
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

export default AdminHiringBanner;
