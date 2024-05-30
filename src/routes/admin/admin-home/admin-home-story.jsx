// import CarouselImage1 from "../../../assets/images/carousel/carousel-1.png";
// import CarouselImage2 from "../../../assets/images/carousel/carousel-2.png";
// import CarouselImage3 from "../../../assets/images/carousel/carousel-3.png";
// import Video from "../../../assets/images/others/video-auto.mp4";

import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const AdminHomeStory = () => {
   const { userInfo } = useSelector((state) => state.userLogin);

   const [story, setStory] = useState({});

   useEffect(() => {
      axios.get("/api/home").then(({ data }) => {
         setStory(data.story);
      });
   }, []);

   const handleSubmitStory = () => {
      const config = {
         headers: {
            Authorization: userInfo,
         },
      };

      const { images, ...remainingData } = story;
      const data = { ...remainingData };

      // console.log(data);

      const formData = new FormData();
      Object.keys(data).forEach((key) => {
         formData.append(key, data[key]);
      });

      // console.log(formData);

      axios
         .post("/api/admin/home/story/save", formData, config)
         .then(({data}) => {
            console.log(data.message);
         })
         .catch((error) => {
            console.log(error.message);
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
            defaultValue={story?.subtitle}
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
            defaultValue={story?.title}
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
               setStory({ ...story, text1: e.target.value });
            }}
            defaultValue={story?.text1}
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
               setStory({ ...story, text2: e.target.value });
            }}
            defaultValue={story?.text2}
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
               setStory({ ...story, text3: e.target.value });
            }}
            defaultValue={story?.text3}
         ></textarea>
         <br />

         <button
            onClick={() => {
               handleSubmitStory();
            }}
            className="btn btn-primary px-4 fs-4 mt-5"
            type="button"
         >
            Submit
         </button>
         {/* <button className="btn btn-danger px-4 fs-4 mt-5" type="button">
            Hủy
         </button> */}
      </div>
   );
};

export default AdminHomeStory;