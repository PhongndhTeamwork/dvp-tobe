import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

const AdminAboutMotto = () => {
   const { userInfo } = useSelector((state) => state.userLogin);

   const config = {
      headers: {
         Authorization: userInfo,
      },
   };

   const [expertise, setExpertise] = useState([]);

   const [newExpertise, setNewExpertise] = useState({
      name: "",
      text: "",
   });

   useEffect(() => {
      axios.get("/api/about").then(({ data }) => {
         setExpertise(data.expertises);
      });
   }, []);

   const handleUpdateMotto = (index) => {
      let data = {
         ...expertise[index],
         name: expertise[index]?.title,
         text: expertise[index]?.description,
      };

      const formData = new FormData();
      Object.keys(data).forEach((key) => {
         formData.append(key, data[key]);
      });

      axios
         .post("/api/admin/about/expertise/save", formData, config)
         .then(({ data }) => {
            alert("Lưu thành công");
            axios.get("/api/about").then(({ data }) => {
               setExpertise(data.expertises);
            });
         })
         .catch((error) => {
            alert("Lưu thất bại ", error.message);
            console.log(error.message);
         });
   };

   const handleDeleteMotto =(index) => {
      const result = window.confirm('Bạn có chắc chắn muốn xóa ?');
      if(!result) return;
      axios
         .delete(`/api/admin/about/expertise/delete?id=${expertise[index].id}`, config)
         .then(({data} ) => {
            alert("Lưu thành công");

            axios.get("/api/about").then(({ data }) => {
               setExpertise(data.expertises);
            });
         })
         .catch((error) => {
            alert("Lưu thất bại");
            console.log(error.message);
         });
   }

   const handleAddMotto = () => {
      if (newExpertise.name === "" || newExpertise.text === "") return;
      let data = {
         ...newExpertise,
      };
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
         formData.append(key, data[key]);
      });
      axios
         .post("/api/admin/about/expertise/save", formData, config)
         .then(({ data }) => {
            alert("Lưu thành công");
            
            setNewExpertise({
               name: "",
               text: "",
            });
            axios.get("/api/about").then(({ data }) => {
               setExpertise(data.expertises);
            });
         })
         .catch((error) => {
            alert("Lưu thất bại");
            console.log(error.message);
         });
   };

   return (
      <div className="motto">
         <h4 className="mt-5 mb-4">Chỉnh sửa danh sách phương châm</h4>
         {/* <button className="btn btn-primary px-4 fs-5 mb-4" type="button">
            Thêm mới
         </button> */}
         <br />

         <div className="motto__list border">
            {expertise?.map((ex, index) => (
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
                     <Button variant="danger" className="mt-2" onClick={() => {
                        handleDeleteMotto(index)
                     }}>
                        Xóa
                     </Button>
                  </div>
               </div>
            ))}
         </div>

         <h4 className="mt-5">Thêm phương châm mới</h4>

         <label htmlFor="">Tiêu đề</label>
         <br />
         <input
            type="text"
            className="w-100"
            // placeholder="Branding"
            value={newExpertise.name}
            onChange={(e) => {
               setNewExpertise({ ...newExpertise, name: e.target.value });
            }}
         />
         <br />
         <label htmlFor="">Mô tả</label>
         <br />
         <textarea
            className="w-100 p-3"
            name=""
            id=""
            rows="4"
            value={newExpertise.text}
            onChange={(e) => {
               setNewExpertise({ ...newExpertise, text: e.target.value });
            }}
         ></textarea>

         <button
            className="btn btn-primary px-4 fs-4 mt-3"
            type="button"
            onClick={() => {
               handleAddMotto();
            }}
         >
            Thêm
         </button>
         {/* <button className="btn btn-danger px-4 fs-4 mt-5" type="button">
            Hủy
         </button> */}
      </div>
   );
};

export default AdminAboutMotto;
