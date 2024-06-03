import { AdminContext } from "../adminContext";
import { Image } from "react-bootstrap";

import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

const AdminContactStory = () => {
   const { userInfo } = useSelector((state) => state.userLogin);

   const preApi = useMemo(() => {
      return process.env.NODE_ENV === "production"
         ? process.env.REACT_APP_BASE_IMAGE_URL
         : "";
   }, []);

   const [story, setStory] = useState({});
   const [storyImage, setStoryImage] = useState([]);
   const [initialStoryImage, setInitialStoryImage] = useState();

   useEffect(() => {
      axios.get(preApi + "/api/contact").then(({ data }) => {
         setStory(data.story);
         console.log(data.story)
         setStoryImage(
            process.env.REACT_APP_BASE_IMAGE_URL + "/" + data.story.images[0]
         );
         setInitialStoryImage(
            process.env.REACT_APP_BASE_IMAGE_URL + "/" + data.story.images[0]
         );
      });
   }, []);

   const handleChangeImage = (e) => {
      const file = e.target.files[0];
      if (file) {
         let imagesArray = [];
         imagesArray[0] = file
         setStory({
            ...story,
            images: imagesArray
         });

         const reader = new FileReader();
         reader.onloadend = () => {
            // Update the state with the newly selected image
            setStoryImage(reader.result);
         };
         reader.readAsDataURL(file);
      }
   };

   const handleSubmitBanner = () => {
      const config = {
         headers: {
            Authorization: userInfo,
         },
      };

      const { images, ...remainingData } = story;
      let data;
      if (storyImage !== initialStoryImage) data = { ...story };
      else data = { ...remainingData };

      const formData = new FormData();

      Object.keys(data).forEach((key) => {
         formData.append(key, data[key]);
      });

      // axios
      //    .post("/api/admin/contact/story/save", formData, config)
      //    .then((response) => {
      //       console.log("Success");
      //    })
      //    .catch((error) => {
      //       console.log(error.message);
      //    });
   };

   return (
      <div className="story">
         <h4 className="mt-5">Chỉnh sửa câu chuyện trang liên hệ</h4>

         <label htmlFor="">Sub title</label>
         <br />
         <input
            type="text"
            className="w-100"
            defaultValue={story?.subtitle}
         />
         <br />
         <label htmlFor="">Title</label>
         <br />
         <input
            type="text"
            className="w-100"
            defaultValue={story?.title}
         />
         <br />
         {/* <label htmlFor="">Subtitle2</label>
         <br />
         <input type="text" className="w-50 mb-2" value="" />
         <input
            type="text"
            className="w-50"
            placeholder="Câu chuyện về DVP"
            value=""
         /> */}
         <br />
         <label htmlFor="">Ảnh tiêu đề</label>
         <br />
         <Image className="w-50 my-3" src={storyImage} />
         <br />
         <input
            type="file"
            name=""
            id=""
            onChange={(e) => {
               handleChangeImage(e);
            }}
         />
         <br />

         <button
            className="btn btn-primary px-4 fs-4 mt-5"
            type="button"
            onClick={handleSubmitBanner}
         >
            Submit
         </button>
         {/* <button className="btn btn-danger px-4 fs-4 mt-5" type="button">
            Hủy
         </button> */}
      </div>
   );
};

export default AdminContactStory;
