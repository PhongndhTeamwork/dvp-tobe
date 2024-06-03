import { Image } from "react-bootstrap";

import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Fragment } from "react";

const AdminWorkProjects = () => {
   const { userInfo } = useSelector((state) => state.userLogin);

   const preApi = useMemo(() => {
      return process.env.NODE_ENV === "production"
         ? process.env.REACT_APP_BASE_IMAGE_URL
         : "";
   }, []);
   const config = {
      headers: {
         Authorization: userInfo,
      },
   };
   const [categories, setCategories] = useState([]);

   useEffect(() => {
      axios.get(preApi +`/api/work`).then(({ data }) => {
         setCategories(data.categories);
      });
   }, [preApi]);

   const [formData, setFormData] = useState({
      subTitle: '',
      title: '',
      categoryName: '',
      desTitle: '',
      desText1: '',
      desText2: '',
      customerName: '',
      linkDemo: '',
      linkDemoName: '',
      finishDate: '',
      categoryIds: [],
      thumbnailSquare: null,
      thumbnailRect: null,
      images: []
   });

   const handleChange = (e, index) => {
      const { name, value, files } = e.target;

      if (files) {
         setFormData((prevData) => ({
            ...prevData,
            [name]: files.length === 1 ? files[0] : null
         }));
      } else {
         setFormData((prevData) => ({
            ...prevData,
            [name]: value
         }));
      }
   };

   const handleChangeImages = (e, index) => {
      const { files } = e.target;
      const newImages = [...formData.images];
      newImages[index] = files[0];

      setFormData((prevData) => ({
         ...prevData,
         images: newImages
      }));
   }

   const handleCategoryChange = (categoryId) => {
      setFormData((prevData) => {
         const newCategoryIds = prevData.categoryIds.includes(categoryId)
            ? prevData.categoryIds.filter((id) => id !== categoryId)
            : [...prevData.categoryIds, categoryId];
         return {
            ...prevData,
            categoryIds: newCategoryIds
         };
      });
   };

   const handleSubmit = () => {
      const data = new FormData();

      for (const key in formData) {
         if (key === 'images') {
            formData[key].forEach((file) => data.append('images', file));
         } else {
            data.append(key, formData[key]);
         }
      }

      axios
         .post(preApi+`/api/admin/work/project/save`, data, config)
         .then(({ data }) => {
            if (data.success)
               alert("Thêm dự án mới thành công");
            else
               alert("Lỗi ", data.message);
         })
         .catch((error) => {
            if (error.response && error.response.data && error.response.data.message) {
               alert(error.response.data.message);
            } else {
               alert("Hãy nhập tất cả các trường và thử lại");
            }
            console.log(error);
         });
   };

   return (
      <Fragment>
         <h4 className="mt-5">Thêm dự án mới</h4>
         <label>Danh mục sản phẩm</label><br />

         <div className="border">
            {categories?.map((category, index) => (
               <div key={category.id} className="d-flex align-items-center p-2">
                  <input
                     type="checkbox"
                     id={`category-${category.id}`}
                     checked={formData.categoryIds.includes(category.id)}
                     onChange={() => handleCategoryChange(category.id)}
                  />
                  <h6 className="m-0 ms-3">{category?.name}</h6>
               </div>
            ))}
         </div>

         <label htmlFor="subTitle">Sub title</label><br/>
         <input type="text" id="subTitle" name="subTitle" className="w-100" value={formData.subTitle} onChange={handleChange}/><br/>
            
         <label htmlFor="title">Title</label><br/>
         <input type="text" id="title" name="title" className="w-100" value={formData.title} onChange={handleChange}/><br/>

         <label htmlFor="categoryName">Loại dự án</label><br/>
         <input type="text" id="categoryName" name="categoryName" className="w-100" value={formData.categoryName} onChange={handleChange}/><br/>

         <label htmlFor="desTitle" >Tiêu đề mô tả dự án </label><br/>
         <input type="text" id="desTitle" name="desTitle" className="w-100" value={formData.desTitle} onChange={handleChange}/><br/>
         
         <label htmlFor="desText1">Mô tả dự án - đọạn văn 1</label><br/>
         <textarea className="w-100 p-2" name="desText1" id="desText1" rows="3" onChange={handleChange} value={formData.desText1}></textarea><br/>
         
         <label htmlFor="desText2" >Mô tả dự án - đoạn văn 2</label><br/>
         <textarea className="w-100 p-2" name="desText2" id="desText2" rows="3" onChange={handleChange} value={formData.desText2}></textarea><br/>

         <label htmlFor="customerName" >Tên khách hàng</label><br/>
         <input type="text" id="customerName" name="customerName" className="w-100" value={formData.customerName} onChange={handleChange}/><br/>
        
         <label htmlFor="finishDate" >Ngày hoàn thành</label><br/>
         <input type="date" id="finishDate" name="finishDate" className="w-100" onChange={handleChange}/><br/>

         <label htmlFor="linkDemo" >Link demo sản phẩm</label><br/>
         <input type="text" id="linkDemo" name="linkDemo" className="w-100" value={formData.linkDemo} onChange={handleChange}/><br/>

         <label htmlFor="linkDemoName" >Tên hiển thị link demo sản phẩm</label><br/>
         <input type="text" id="linkDemoName" name="linkDemoName" className="w-100" value={formData.linkDemoName} onChange={handleChange}/><br/>

         <label htmlFor="thumbnailSquare">Thumbnail hình vuông:</label><br />
         <div className="row">
            <div className="col-8 col-md-5 col-lg-3 col-xxl-2">
               {formData.thumbnailSquare && <Image className="w-100 py-3" src={URL.createObjectURL(formData.thumbnailSquare)} />}
            </div>
         </div>
         <input type="file" id="thumbnailSquare" name="thumbnailSquare" onChange={handleChange} /><br />

         <label htmlFor="thumbnailRect">Thumbnail hình chữ nhật:</label><br />
         <div className="row">
            <div className="col-8 col-md-5 col-lg-3 col-xxl-2">
               {formData.thumbnailRect && <Image className="w-100 py-3" src={URL.createObjectURL(formData.thumbnailRect)} />}
            </div>
         </div>
         <input type="file" id="thumbnailRect" name="thumbnailRect" onChange={handleChange} /><br />

         <label htmlFor="images" >Hình ảnh dự án</label><br />

         <div className="col-12 col-md-8 col-lg-4 py-2">
            {formData.images[0] && <Image className="w-100" src={URL.createObjectURL(formData.images[0])} />}
         </div>
         <div className="col-12 col-md-8 col-lg-4 py-2">
            {formData.images[1] && <Image className="w-100" src={URL.createObjectURL(formData.images[1])} />}
         </div>
         <div className="col-12 col-md-8 col-lg-4">
            <div className="row">
               <div className="col-6 py-2 pe-2">
                  {formData.images[2] && <Image className="w-100" src={URL.createObjectURL(formData.images[2])} />}
               </div>
               <div className="col-6 py-2 ps-2">
                  {formData.images[3] && <Image className="w-100" src={URL.createObjectURL(formData.images[3])} />}
               </div>
            </div>
         </div>
         <div className="col-12 col-md-8 col-lg-4 py-2">
            {formData.images[4] && <Image className="w-100" src={URL.createObjectURL(formData.images[4])} />}
         </div>

         <div className="col-12 col-md-8 col-lg-4 py-2">
            <div className="row">
               <div className="col-6 py-2">
                  {formData.images[5] && <Image className="w-100 h-100" src={URL.createObjectURL(formData.images[5])} />}
               </div>
               <div className="col-6 py-2">
                  <div className="w-100 pb-2">
                     {formData.images[6] && <Image className="w-100" src={URL.createObjectURL(formData.images[6])} />}
                  </div>
                  <div className="w-100 pt-2">
                     {formData.images[7] && <Image className="w-100" src={URL.createObjectURL(formData.images[7])} />}
                  </div>
               </div>
            </div>
         </div>

         {Array.from({ length: 8 }).map((_, index) => (
            <div key={index}>
               <label className="pe-4" htmlFor={`image${index + 1}`}>Ảnh dự án {index + 1}</label>
               <input
                  type="file"
                  id={`image${index + 1}`}
                  name={`image${index + 1}`}
                  onChange={(e) => handleChangeImages(e, index)}
               /><br/>
            </div>
         ))}

         <button className="btn btn-primary px-4 fs-5 mt-4" type="button" onClick={handleSubmit}>Submit</button>
         <button className="btn btn-danger px-4 fs-5 mt-4 ms-3" type="button">Hủy</button>
      </Fragment>
   );
}

export default AdminWorkProjects;