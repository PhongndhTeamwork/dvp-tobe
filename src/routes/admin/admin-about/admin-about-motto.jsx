import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Fragment, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

const AdminAboutMotto = () => {
   const { userInfo } = useSelector((state) => state.userLogin);

   const [expertise, setExpertise] = useState([]);

   useEffect(() => {
      axios.get("/api/about").then(({ data }) => {
         setExpertise(data.expertises);
      });
   }, []);

   const handleUpdateMotto = (index) => {
      const config = {
         headers: {
            Authorization: userInfo,
         },
      };

      let data = {
         ...expertise[index],
         name: expertise[index]?.title,
         text: expertise[index]?.description,
      };

      // console.log(data);

      const formData = new FormData();
      Object.keys(data).forEach((key) => {
         formData.append(key, data[key]);
      });

      axios
         .post("/api/admin/about/expertise/save", formData, config)
         .then(({ data }) => {
            console.log(data.message);
         })
         .catch((error) => {
            console.log(error.message);
         });
   };

   return (
      <div className="motto">
         <h4 className="mt-5 mb-4">Chỉnh sửa danh sách phương châm</h4>
         <button className="btn btn-primary px-4 fs-5 mb-4" type="button">
            Thêm mới
         </button>
         <br />

         <div className="motto__list border">
            {expertise.map((ex, index) => (
               <div
                  key={index}
                  className="motto-item row w-100 align-items-center border-bottom py-3 ps-4"
               >
                  <div className="col-10">
                     <input
                        type="text"
                        className="w-100"
                        defaultValue={ex?.title}
                        onChange={(e) => {
                           let expertiseTemp = [...expertise];
                           expertiseTemp[index].title = e.target.value;
                           setExpertise(expertiseTemp);
                        }}
                     />
                     <textarea
                        type="text"
                        className="w-100 mt-3 p-2"
                        defaultValue={ex?.description}
                        rows="4"
                        onChange={(e) => {
                           let expertiseTemp = [...expertise];
                           expertiseTemp[index].description = e.target.value;
                           setExpertise(expertiseTemp);
                        }}
                     />
                  </div>
                  <div className="col-2 d-flex flex-column">
                     <Button
                        variant="success"
                        className="mb-2"
                        onClick={() => {
                           handleUpdateMotto(index);
                        }}
                     >
                        Sửa
                     </Button>
                     <Button variant="danger" className="mt-2">
                        Xóa
                     </Button>
                  </div>
               </div>
            ))}
         </div>

         <h4 className="mt-5">Thêm phương châm mới</h4>

         <label htmlFor="">Tiêu đề</label>
         <br />
         <input type="text" className="w-100" placeholder="Branding" value="" />
         <br />
         <label htmlFor="">Mô tả</label>
         <br />
         <textarea className="w-100 p-3" name="" id="" rows="4"></textarea>

         <button className="btn btn-primary px-4 fs-4 mt-5" type="button">
            Submit
         </button>
         {/* <button className="btn btn-danger px-4 fs-4 mt-5" type="button">
            Hủy
         </button> */}
      </div>
   );
};

export default AdminAboutMotto;
