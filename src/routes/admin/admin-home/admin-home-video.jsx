// import CarouselImage1 from "../../../assets/images/carousel/carousel-1.png";
// import CarouselImage2 from "../../../assets/images/carousel/carousel-2.png";
// import CarouselImage3 from "../../../assets/images/carousel/carousel-3.png";
// import Video from "../../../assets/images/others/video-auto.mp4";

import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

import CustomAlert from "../../../components/custom-alert/custom-alert";

const AdminHomeVideo = () => {
   const { userInfo } = useSelector((state) => state.userLogin);

   const [video, setVideo] = useState();
   const [initialVideo, setInitialVideo] = useState();

   const containerRef = useRef(null);

   const [message, setMessage] = useState({ message: "", type: "" });
   const [showAlert, setShowAlert] = useState(false);

   useEffect(() => {
      axios.get("/api/home").then(({ data }) => {
         setVideo(process.env.REACT_APP_BASE_IMAGE_URL + "/" + data.video);
         setInitialVideo(
            process.env.REACT_APP_BASE_IMAGE_URL + "/" + data.video
         );
      });
   }, []);

   const handleSubmitVideo = () => {
      const config = {
         headers: {
            Authorization: userInfo,
         },
      };

      const data = { video: video };
      const formData = new FormData();

      Object.keys(data).forEach((key) => {
         formData.append(key, data[key]);
      });

      axios
         .post("/api/admin/home/video/save", formData, config)
         .then(({data}) => {
            setMessage({
               message: data.message,
               type: "success",
            });
         })
         .catch((error) => {
            console.log(error.message);
         });
   };

   return (
      <div className="video" ref={containerRef}>
         <CustomAlert message={message.message} variant={message.type} />

         <h4 className="mt-5">Chỉnh sửa video auto playing trang chủ</h4>
         <label htmlFor="">Video</label>
         <br />
         <video className="w-50 py-3" src={video} controls></video>
         <br />
         <input
            type="file"
            onChange={(e) => {
               setVideo(e.target.files[0]);
            }}
         />
         <br />

         <button
            className="btn btn-primary px-4 fs-4 mt-5"
            type="button"
            onClick={() => {
               if (initialVideo === video) {
                  setMessage({
                     message: "Please enter a video",
                     type: "danger",
                  });
               }
               if (initialVideo !== video) handleSubmitVideo();
            }}
         >
            Submit
         </button>
         {/* <button className="btn btn-danger px-4 fs-4 mt-5" type="button">
            Hủy
         </button> */}
      </div>
   );
};

export default AdminHomeVideo;
