import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

const AdminWorkCategory = () => {
   const { userInfo } = useSelector((state) => state.userLogin);
   const config = {
      headers: {
         Authorization: userInfo,
      },
   };
   const [categories, setCategories] = useState([]);
   const [newCategory, setNewCategory] = useState("");

   useEffect(() => {
      axios.get("/api/work").then(({ data }) => {
         setCategories(data.categories);
      });
   }, []);

   const handleUpdate = (index) => {
      let data = { ...categories[index] };
      console.log(data);

      const formData = new FormData();
      Object.keys(data).forEach((key) => {
         formData.append(key, data[key]);
      });

      axios
         .post("/api/admin/work/category/save", formData, config)
         .then(({ data }) => {
            console.log(data.message);
         })
         .catch((error) => {
            console.log(error.message);
         });
   };

   const handleAddCategory = () => {
      let data = { name: newCategory, quantity: 0 };

      const formData = new FormData();

      Object.keys(data).forEach((key) => {
         formData.append(key, data[key]);
      });

      axios
         .post("/api/admin/work/category/save", formData, config)
         .then(({ data }) => {
            console.log(data.message);
            setNewCategory("");
            axios.get("/api/work").then(({ data }) => {
               setCategories(data.categories);
            });
         })
         .catch((error) => {
            console.log(error.message);
         });
   };

   return (
      <div className="category">
         <h4 className="mt-0">Chỉnh sửa các danh mục dự án</h4>
         {/* <button type="button" className="btn btn-primary mt-4 mb-3">
            Thêm mới
         </button> */}

         <div className="motto__list border">
            {categories?.map((category, index) => (
               <div
                  key={index}
                  className="row w-100 align-items-center border-bottom py-3 ps-4"
               >
                  <div className="col-10">
                     <input
                        className="mb-0 w-100"
                        defaultValue={category.name}
                        onChange={(e) => {
                           let categoriesTemp = [...categories];
                           categoriesTemp[index].name = e.target.value;
                           setCategories(categoriesTemp);
                        }}
                     />
                  </div>
                  <div className="col-2">
                     <Button
                        className="mx-1 my-1"
                        variant="success"
                        onClick={() => {
                           handleUpdate(index);
                        }}
                     >
                        Sửa
                     </Button>
                     <Button variant="danger" className="mx-1 my-1">
                        Xóa
                     </Button>
                  </div>
               </div>
            ))}
         </div>

         <h4 className="mt-4">Thêm danh mục dự án mới</h4>
         <label htmlFor="">Tên danh mục</label>
         <br />
         <input
            type="text"
            value={newCategory}
            onChange={(e) => {
               setNewCategory(e.target.value);
            }}
         />
         <br />
         <button
            className="btn btn-primary px-4 fs-5 mt-4"
            type="button"
            onClick={() => {
               if (newCategory !== "") handleAddCategory();
            }}
         >
            Thêm
         </button>
         {/* <button className="btn btn-danger px-4 fs-5 mt-4" type="button">
            Hủy
         </button> */}
      </div>
   );
};

export default AdminWorkCategory;
