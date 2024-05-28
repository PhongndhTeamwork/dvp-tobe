import { Image } from "react-bootstrap";

import CultureImage1 from "../../../assets/images/culture/culture1.png";
import CultureImage2 from "../../../assets/images/culture/culture2.png";
import CultureImage3 from "../../../assets/images/culture/culture3.png";
import CultureImage4 from "../../../assets/images/culture/culture4.png";
import CultureImage5 from "../../../assets/images/culture/culture5.png";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminAboutCulture = () => {
   // story2
   const { userInfo } = useSelector((state) => state.userLogin);

   const [culture, setCulture] = useState({});
   const [images, setImages] = useState(["", "", "", "", ""]);
   const [initialImages, setInitialImages] = useState([]);

   const handleChangeFile = (e, index) => {
      const file = e.target.files[0];
      if (file) {
         let updatedImages = [...culture.images];
         updatedImages[index] = file;
         setCulture({ ...culture, images: updatedImages });

         const reader = new FileReader();
         reader.onloadend = () => {
            updatedImages = [...images];
            updatedImages[index] = reader.result;
            setImages(updatedImages);
         };
         reader.readAsDataURL(file);
      }
   };

   useEffect(() => {
      axios.get("/api/about").then(({ data }) => {
         const images = data.story2.images.map(
            (image) => `${process.env.REACT_APP_BASE_IMAGE_URL}/${image}`
         );
         setCulture({
            ...data.story2,
            images: images,
         });
         setInitialImages(images);
      });
   }, []);
   return (
      <div className="culture">
         <h4 className="mt-5">Chỉnh sửa văn hóa trang giới thiệu</h4>

         <label htmlFor="">Sub title</label>
         <br />
         <input
            type="text"
            className="w-100"
            defaultValue={culture?.subTitle}
         />
         <br />
         <label htmlFor="">Title</label>
         <br />
         <input type="text" className="w-100" defaultValue={culture?.title} />
         <br />
         <label htmlFor="">Đoạn văn</label>
         <br />
         <textarea
            defaultValue={culture?.text1}
            className="w-100 p-2"
            name=""
            id=""
            rows="3"
         >
            Đoạn văn chữ thường
         </textarea>
         <br />

         <label className="mt-4" htmlFor="">
            Thêm ảnh
         </label>
         <div className="row justify-content-between mt-4 p-2 border">
            <div className="col-3 row flex-column justify-content-between">
               <div className="col-12">
                  <Image className="w-100" src={culture?.images?.slice(0, 1)} />
               </div>
               <div className="col-12">
                  <Image className="w-100" src={culture?.images?.slice(1, 2)} />
               </div>
            </div>
            <div className="col-6 row">
               <Image className="w-100" src={culture?.images?.slice(2, 3)} />
            </div>
            <div className="col-3 row flex-column justify-content-between">
               <div className="col-12">
                  <Image className="w-100" src={culture?.images?.slice(3, 4)} />
               </div>
               <div className="col-12">
                  <Image className="w-100" src={culture?.images?.slice(4, 5)} />
               </div>
            </div>
         </div>

         <input
            className="mt-4"
            type="file"
            name=""
            id=""
            onChange={(e) => {
               handleChangeFile(e, 0);
            }}
         />
         <br />
         <input className="mt-3" type="file" name="" id="" />
         <br />
         <input className="mt-3" type="file" name="" id="" />
         <br />
         <input className="mt-3" type="file" name="" id="" />
         <br />
         <input className="mt-3" type="file" name="" id="" />
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

export default AdminAboutCulture;
