import { Link } from "react-router-dom";
import { Image, Carousel } from "react-bootstrap";

import CarouselImage1 from "../../../assets/images/carousel/carousel-1.png";
import CarouselImage2 from "../../../assets/images/carousel/carousel-2.png";
import CarouselImage3 from "../../../assets/images/carousel/carousel-3.png";
import Video from "../../../assets/images/others/video-auto.mp4";
import { AdminContext } from "../adminContext";
import axios from "axios";
import { useSelector } from "react-redux";
import { Fragment, useContext, useEffect, useRef, useState } from "react";

const AdminHomeBanner = () => {
   const { fullView } = useContext(AdminContext);

   const { userInfo } = useSelector((state) => state.userLogin);

   const [bannerImage, setBannerImage] = useState();

   const [banner, setBanner] = useState({});
   const [video, setVideo] = useState("");
   const [story, setStory] = useState({});
   const [project, setProject] = useState({});
   const [services, setServices] = useState({});

   const bannerImageInputRef = useRef(null);
   useEffect(() => {
      axios.get("/api/home").then(({ data }) => {
         setBanner(data.banner);
         setVideo(data.video);
         setStory(data.story);
         setProject(data.projects);

         setBannerImage(data.banner.image);
      });
   }, []);

   useEffect(() => {
      axios.get("/api/info/services").then(({ data }) => {
         setServices(data.services);
      });
   });

   // useEffect(() => {
   //    console.log(banner);
   // }, [banner]);

   const handleChangeBannerImage = (e) => {
      const file = e.target.files[0];
      if (file) {
         setBanner({
            ...banner,
            image: e.target.files[0],
         });

         const reader = new FileReader();
         reader.onloadend = () => {
            // Update the state with the newly selected image
            setBannerImage(reader.result);
         };
         reader.readAsDataURL(file);
      }
   };

   const handleDeSelectBannerImage = () => {
      setBannerImage(null);
      setBanner({
         ...banner,
         image: null,
      });
      bannerImageInputRef.current.value = null;
   };

   const handleSubmitBanner = () => {
      const config = {
         headers: {
            Authorization: userInfo,
            // "Content-Type": "application/x-www-form-urlencoded",
         },
      };

      const data = { ...banner, position: "home" };

      const formData = new FormData();
      Object.keys(data).forEach((key) => {
         formData.append(key, data[key]);
      });

      console.log(formData);

      axios
         .post(
            "http://localhost:8000/api/admin/home/banner/save",
            formData,
            config
         )
         .then((response) => {
            console.log(response);
         })
         .catch((error) => {
            console.log(error);
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
         <button
            className="btn btn-danger px-4 fs-4 mt-5"
            type="button"
            // onClick={onSubmitBanner}
         >
            Hủy
         </button>
      </div>
   );
};

export default AdminHomeBanner;
