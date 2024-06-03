import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Image } from "react-bootstrap";

const AdminAboutStory = () => {
   const { userInfo } = useSelector((state) => state.userLogin);

   const [story, setStory] = useState({});

   useEffect(() => {
      axios.get("/api/about").then(({ data }) => {
         setStory(data.story1);
      });
   }, []);

   const handleSubmitStory = () => {
      const config = {
         headers: {
            Authorization: userInfo,
         },
      };

      const data = { ...story };
      const formData = new FormData();

      Object.keys(data).forEach((key) => {
         if (key === "images") {
            formData.append("images", data.images[0]);
         } else {
            formData.append(key, data[key]);
         }
      });

      formData.append("position", "about1");

      axios
         .post("/api/admin/about/story/save", formData, config)
         .then(({ data }) => {
            if (data.success)
               alert("Lưu thành công");
            else
               alert("Lỗi ", data.message);
         })
         .catch((error) => {
            console.log(error);
            alert(error.message);
         });
   };
   return (
      <div className="story">
         <h4 className="mt-0">Chỉnh sửa câu chuyện trang giới thiệu</h4>

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
            className="w-100 p-2 mb-5"
            name=""
            id=""
            rows="3"
            onChange={(e) => {
               setStory({ ...story, text3: e.target.value });
            }}
            defaultValue={story?.text3}
         ></textarea>
         <br />

         {story.images && story.images.length > 0 && story.images[0] instanceof File && (
            <Image className="w-25 my-4" src={URL.createObjectURL(story.images[0])}/>
         )}
         <br/>
         <input type="file" onChange={(e) => {setStory({...story, images: [e.target.files[0]]})}}/><br/>

         <button
            onClick={() => {
               handleSubmitStory();
            }}
            className="btn btn-primary px-4 fs-4 mt-5"
            type="button"
         >
            Submit
         </button>
      </div>
   );
};

export default AdminAboutStory;
