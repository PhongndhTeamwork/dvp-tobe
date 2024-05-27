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

const AdminHomeStory = () => {
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
      <div className="story">
         <h4 className="mt-5">Chỉnh sửa câu chuyện trang chủ</h4>

         <label htmlFor="">Sub title</label>
         <br />
         <input
            type="text"
            className="w-100"
            defaultValue="The story of DVP"
            onChange={(e) => {
               setStory({
                  ...story,
                  subtitle: e.target.value,
               });
            }}
         />
         <br />
         <label htmlFor="">Title</label>
         <br />
         <input
            type="text"
            className="w-100"
            defaultValue="Câu chuyện về DVP"
            onChange={(e) => {
               setStory({ ...story, title: e.target.value });
            }}
         />
         <br />
         <label htmlFor="">Đoạn văn 1</label>
         <br />
         <textarea
            className="w-100 p-2"
            name=""
            id=""
            rows="3"
            onChange={(e) => {
               setStory({ ...story, tex1: e.target.value });
            }}
            defaultValue="Đoạn văn chữ thường"
         ></textarea>
         <br />
         <label htmlFor="">Đoạn văn 2</label>
         <br />
         <textarea
            className="w-100 p-2"
            name=""
            id=""
            rows="3"
            onChange={(e) => {
               setStory({ ...story, tex2: e.target.value });
            }}
            defaultValue="Đoạn văn chữ thường"
         ></textarea>
         <br />
         <label htmlFor="">Đoạn văn 3</label>
         <br />
         <textarea
            className="w-100 p-2"
            name=""
            id=""
            rows="3"
            onChange={(e) => {
               setStory({ ...story, tex3: e.target.value });
            }}
            defaultValue="Đoạn văn chữ in đậm"
         ></textarea>
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

export default AdminHomeStory;
