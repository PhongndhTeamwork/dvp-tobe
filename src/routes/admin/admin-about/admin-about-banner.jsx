import { useEffect, useRef, useState } from "react";

import { Image } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";

const AdminAboutBanner = () => {
   const { userInfo } = useSelector((state) => state.userLogin);

   const [bannerImage, setBannerImage] = useState();


   const [banner, setBanner] = useState({});

   const bannerImageInputRef = useRef(null);
   useEffect(() => {
      axios.get("/api/about").then(({ data }) => {
         setBanner(data.banner);

         setBannerImage(
            process.env.REACT_APP_BASE_IMAGE_URL + "/" + data.banner.image
         )
      });
   }, []);

   const handleChangeBannerImage = (e) => {
      const file = e.target.files[0];
      if (file) {
         setBanner({
            ...banner,
            image: e.target.files[0],
         });

         const reader = new FileReader();
         reader.onloadend = () => {
            setBannerImage(reader.result);
         };
         reader.readAsDataURL(file);
      }
   };

   const handleDeSelectBannerImage = () => {
      setBannerImage(null);
      setBanner({
         ...banner,
         deleteImage: true,
      });
      bannerImageInputRef.current.value = null;
   };

   const handleSubmitBanner = () => {
      const config = {
         headers: {
            Authorization: userInfo,
         },
      };

      let data = { ...banner };

      if (typeof data.image !== "object") {
         delete banner.image;
         data = { ...banner, deleteImage: false };
      }else {
         data = { ...banner, deleteImage: false };
      }

      if(bannerImage === null) {
         delete banner.image;
         data = { ...banner, deleteImage: true };
      }



      const formData = new FormData();

      Object.keys(data).forEach((key) => {
         formData.append(key, data[key]);
      });

      axios
         .post("/api/admin/about/banner/save", formData, config)
         .then(({ data }) => {
            if (data.success)
               alert("Lưu thành công");
            else 
               alert("Lưu thất bại", data.message);
         })
         .catch((error) => {
            alert("Lưu thất bại", error.message);
            console.log(error.message);
         });
   };
   return (
      <div className="banner">
         <h4 className="">Chỉnh sửa Banner trang chủ</h4>
         <label htmlFor="">Text stroke 1</label>
         <br />
         <input
            type="text"
            className="w-100"
            defaultValue={banner?.textstroke1}
            onChange={(e) => {
               setBanner({
                  ...banner,
                  textstroke1: e.target.value,
               });
            }}
         />
         <br />
         <label htmlFor="">Text stroke 2</label>
         <br />
         <input
            type="text"
            className="w-100"
            defaultValue={banner?.textstroke2}
            onChange={(e) => {
               setBanner({
                  ...banner,
                  textstroke2: e.target.value,
               });
            }}
         />
         <br />
         <label htmlFor=""> Text uppercase 1</label>
         <br />
         <input
            type="text"
            className="w-100"
            defaultValue={banner?.textuppercase1}
            onChange={(e) => {
               setBanner({
                  ...banner,
                  textuppercase1: e.target.value,
               });
            }}
         />
         <br />
         <label htmlFor="">Text uppercase 2</label>
         <br />
         <input
            type="text"
            className="w-100"
            defaultValue={banner?.textuppercase2}
            onChange={(e) => {
               setBanner({
                  ...banner,
                  textuppercase2: e.target.value,
               });
            }}
         />
         <br />
         <label htmlFor="">Banner image</label>
         <br />

         <div
            className="banner__img w-50 my-4 border"
            style={{ display: "block" }}
         >
            <i
               className="fa-solid fa-xmark"
               onClick={handleDeSelectBannerImage}
            ></i>
            <Image className="w-100" src={bannerImage} alt="" />
         </div>

         <input
            type="file"
            name=""
            id=""
            onChange={(e) => {
               handleChangeBannerImage(e);
            }}
            ref={bannerImageInputRef}
         />
         <br />

         <button
            className="btn btn-primary px-4 fs-4 mt-5"
            type="button"
            onClick={handleSubmitBanner}
         >
            Submit
         </button>
         {/* <button
            className="btn btn-danger px-4 fs-4 mt-5"
            type="button"
         >
            Hủy
         </button> */}
      </div>
   );
};

export default AdminAboutBanner;
