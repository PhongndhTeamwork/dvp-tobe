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

const AdminHomeVideo= () => {
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
      <div className="video">
         <h4 className="mt-5">Chỉnh sửa video auto playing trang chủ</h4>
         <label htmlFor="">Video</label>
         <br />
         <video className="w-50 py-3" src={Video} controls></video>
         <br />
         <input
            type="file"
            onChange={(e) => {
               setVideo(e.target.files[0]);
            }}
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

export default AdminHomeVideo;
