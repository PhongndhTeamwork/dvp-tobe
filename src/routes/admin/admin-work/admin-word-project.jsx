import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, Image } from "react-bootstrap";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

import DatePicker from "react-datepicker";

const AdminWorkProject = () => {
   const { userInfo } = useSelector((state) => state.userLogin);

   const { id } = useParams();
   const navigate = useNavigate();
   const [project, setProject] = useState([]);
   const [categoryList, setCategoryList] = useState([]);
   const [projectImages, setProjectImages] = useState([]);

   const [imageIndexes, setImageIndexes] = useState([]);
   const [newThumbnailImages, setNewThumbnailImages] = useState({});
   const [categoriesId, setCategoriesId] = useState([]);
   const [newProjectImages, setNewProjectImages] = useState([]);

   useEffect(() => {
      axios
         .get("/api/catalog/" + id)
         .then(({ data }) => {
            let projectsData = data.project;
            setProject({
               ...projectsData,
               thumbnailRect:
                  process.env.REACT_APP_BASE_IMAGE_URL +
                  "/" +
                  projectsData.thumbnailRect,
               thumbnailSquare:
                  process.env.REACT_APP_BASE_IMAGE_URL +
                  "/" +
                  projectsData.thumbnailSquare,
               images: projectsData.images.map(
                  (image) => process.env.REACT_APP_BASE_IMAGE_URL + "/" + image
               ),
            });
            setNewProjectImages(
               projectsData.images.map(
                  (image) => process.env.REACT_APP_BASE_IMAGE_URL + "/" + image
               )
            );
         })

         .catch((error) => {
            throw new Error(error);
         });
   }, [id,project]);

   useEffect(() => {
      axios
         .get("/api/work")
         .then(({ data }) => {
            setCategoryList(data.categories);
         })
         .catch((error) => {
            throw new Error(error);
         });
   });

   const handleSelectThumbnail = (e, type) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      if (file) {
         if (type === "s") {
            setProject({ ...project, thumbnailSquare: file });
            reader.onloadend = () => {
               setNewThumbnailImages({
                  ...newThumbnailImages,
                  square: reader.result,
               });
            };
         } else {
            setProject({ ...project, thumbnailRect: file });
            reader.onloadend = () => {
               setNewThumbnailImages({
                  ...newThumbnailImages,
                  rectangle: reader.result,
               });
            };
         }
         reader.readAsDataURL(file);
      }
   };

   const handleChangeImages = (e, index) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      if (file) {
         let projectImagesTemp = [...projectImages];
         projectImagesTemp[index] = file;
         setProjectImages(projectImagesTemp);
         reader.onloadend = () => {
            let imagesTemp = [...newProjectImages];
            imagesTemp[index] = reader.result;
            setNewProjectImages(imagesTemp);
         };
         reader.readAsDataURL(file);
      }
   };

   return (
      <div>
         <Button
            variant="dark"
            onClick={() => {
               navigate(-1);
            }}
         >
            Go back
         </Button>

         <div className="add-project">
            <div className="add-project">
               <h4 className="mt-5">Chỉnh sửa dự án</h4>

               <label htmlFor="">Thumbnail vuông</label>
               <div className="banner__img w-50 my-4 border">
                  <i className="fa-solid fa-xmark"></i>
                  <Image
                     className="w-100"
                     alt=""
                     src={newThumbnailImages?.square}
                  />
               </div>
               <input
                  type="file"
                  className="w-100"
                  name=""
                  id=""
                  onChange={(e) => {
                     handleSelectThumbnail(e, "s");
                  }}
               />

               <label htmlFor="">Thumbnail hình chữ nhật</label>
               <div className="banner__img w-50 my-4 border">
                  <i className="fa-solid fa-xmark"></i>
                  <Image
                     className="w-100"
                     alt=""
                     src={newThumbnailImages?.rectangle}
                  />
               </div>
               <input
                  type="file"
                  className="w-100"
                  onChange={(e) => {
                     handleSelectThumbnail(e, "r");
                  }}
               />
               <br />

               <label htmlFor="">Danh mục sản phẩm</label>
               <br />
               <div className="list-category">
                  {categoryList?.map((category, index) => (
                     <label
                        key={index}
                        className="category-item d-flex align-items-center p-2 mt-0 mb-0"
                        htmlFor={`list-category-${index}`}
                     >
                        <input
                           type="checkbox"
                           name=""
                           id={`list-category-${index}`}
                           checked={project.categories.includes(
                              (c) => c.id === category.id
                           )}
                           onChange={() => {
                              if (categoriesId.includes(index)) {
                                 var categoryIdIndex =
                                    categoriesId.indexOf(index);

                                 categoriesId.splice(categoryIdIndex, 1);
                              } else {
                                 categoriesId.push(index);
                              }
                              setCategoriesId(categoriesId);
                           }}
                        />
                        <h6 className="m-0 ms-3">{category.name}</h6>
                     </label>
                  ))}
               </div>

               <label htmlFor="">Sub title</label>
               <br />
               <input
                  type="text"
                  className="w-100"
                  value={project.subTitle}
                  onChange={(e) => {
                     setProject({
                        ...project,
                        subTitle: e.target.value,
                     });
                  }}
               />
               <br />
               <label htmlFor="">Title</label>
               <br />
               <input
                  type="text"
                  className="w-100"
                  value={project.title}
                  onChange={(e) => {
                     setProject({
                        ...project,
                        title: e.target.value,
                     });
                  }}
               />
               <br />

               <label htmlFor="">Tiêu đề mô tả </label>
               <br />
               <input
                  type="text"
                  className="w-100"
                  value={project.desTitle}
                  onChange={(e) => {
                     setProject({
                        ...project,
                        desTitle: e.target.value,
                     });
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
                  value={project.desText1}
                  onChange={(e) => {
                     setProject({
                        ...project,
                        desText1: e.target.value,
                     });
                  }}
               ></textarea>
               <br />
               <label htmlFor="">Đoạn văn 2</label>
               <br />
               <textarea
                  className="w-100 p-2"
                  name=""
                  id=""
                  rows="3"
                  value={project.desText2}
                  onChange={(e) => {
                     setProject({
                        ...project,
                        desText2: e.target.value,
                     });
                  }}
               ></textarea>
               <br />

               <label htmlFor="">Tên khách hàng</label>
               <br />
               <input
                  type="text"
                  className="w-100"
                  value={project.customerName}
                  onChange={(e) => {
                     setProject({
                        ...project,
                        customerName: e.target.value,
                     });
                  }}
               />
               <br />

               <label htmlFor="">Tên Category</label>
               <br />
               <input
                  type="text"
                  className="w-100"
                  value={project.categoryName}
                  onChange={(e) => {
                     setProject({
                        ...project,
                        categoryName: e.target.value,
                     });
                  }}
               />
               <br />
               <label htmlFor="">Ngày hoàn thành</label>
               <br />
               <Form.Group className="w-100">
                  <DatePicker
                     selected={
                        project.finishDate
                           ? new Date(project.finishDate)
                           : new Date()
                     }
                     onChange={(date) =>
                        setProject({
                           ...project,
                           finishDate: date,
                        })
                     }
                     dateFormat="dd/MM/yyyy"
                  />
               </Form.Group>
               <br />

               <label htmlFor="">Link demo sản phẩm</label>
               <br />
               <input
                  type="text"
                  className="w-100"
                  value={project.linkDemo}
                  onChange={(e) => {
                     setProject({
                        ...project,
                        linkDemo: e.target.value,
                     });
                  }}
               />
               <br />

               <label htmlFor="">Tên Link demo sản phẩm</label>
               <br />
               <input
                  type="text"
                  className="w-100"
                  value={project.linkDemoName}
                  onChange={(e) => {
                     setProject({
                        ...project,
                        linkDemoName: e.target.value,
                     });
                  }}
               />
               <br />

               <label htmlFor="" className="mt-5">
                  Hình ảnh dự án
               </label>
               <br />
               <div className="row mt-0">
                  <div className="col-12 py-2">
                     <Image
                        className="w-100"
                        src={newProjectImages[0]}
                        alt=""
                     />
                  </div>
                  <div className="col-12 py-2">
                     <Image
                        className="w-100"
                        src={newProjectImages[1]}
                        alt=""
                     />
                  </div>
                  <div className="col-6 py-2">
                     <Image
                        className="w-100"
                        src={newProjectImages[2]}
                        alt=""
                     />
                  </div>
                  <div className="col-6 py-2">
                     <Image
                        className="w-100"
                        src={newProjectImages[3]}
                        alt=""
                     />
                  </div>
                  <div className="col-12 py-2">
                     <Image
                        className="w-100"
                        src={newProjectImages[4]}
                        alt=""
                     />
                  </div>
                  <div className="col-6 py-2">
                     <Image className="w-100" src={newProjectImages[5]} />
                  </div>
                  <div className="col-6">
                     <div className="row">
                        <div className="col-12 py-2">
                           <Image
                              className="w-100"
                              src={newProjectImages[7]}
                              alt=""
                           />
                        </div>
                        <div className="col-12 py-2">
                           <Image
                              className="w-100"
                              src={newProjectImages[7]}
                              alt=""
                           />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="d-flex align-items-center">
                  <div className="order-container">1</div>
                  <input
                     className="mt-0"
                     type="file"
                     name=""
                     id=""
                     onChange={(e) => {
                        handleChangeImages(e, 0);
                     }}
                  />
               </div>

               <br />
               <div className="d-flex align-items-center">
                  <div className="order-container">2</div>
                  <input
                     className="my-0"
                     type="file"
                     name=""
                     id=""
                     onChange={(e) => {
                        handleChangeImages(e, 1);
                     }}
                  />
               </div>
               <br />
               <div className="d-flex align-items-center">
                  <div className="order-container">3</div>
                  <input
                     className="my-0"
                     type="file"
                     name=""
                     id=""
                     onChange={(e) => {
                        handleChangeImages(e, 2);
                     }}
                  />
               </div>
               <br />

               <div className="d-flex align-items-center">
                  <div className="order-container">4</div>
                  <input
                     className="my-0"
                     type="file"
                     name=""
                     id=""
                     onChange={(e) => {
                        handleChangeImages(e, 3);
                     }}
                  />
               </div>
               <br />
               <div className="d-flex align-items-center">
                  <div className="order-container">5</div>
                  <input
                     className="my-2"
                     type="file"
                     name=""
                     id=""
                     onChange={(e) => {
                        handleChangeImages(e, 4);
                     }}
                  />
               </div>
               <br />
               <div className="d-flex align-items-center">
                  <div className="order-container">6</div>
                  <input
                     className="my-0"
                     type="file"
                     name=""
                     id=""
                     onChange={(e) => {
                        handleChangeImages(e, 5);
                     }}
                  />
               </div>
               <br />
               <div className="d-flex align-items-center">
                  <div className="order-container">7</div>
                  <input
                     className="my-0"
                     type="file"
                     name=""
                     id=""
                     onChange={(e) => {
                        handleChangeImages(e, 6);
                     }}
                  />
               </div>
               <br />
               <div className="d-flex align-items-center">
                  <div className="order-container">8</div>
                  <input
                     className="my-0"
                     type="file"
                     name=""
                     id=""
                     onChange={(e) => {
                        handleChangeImages(e, 7);
                     }}
                  />
               </div>

               <br />

               <button
                  className="btn btn-primary px-4 fs-5 mt-4"
                  type="button"
                  onClick={() => {
                     // if (checkHasValidated()) handleSubmit();
                  }}
               >
                  Thêm
               </button>
            </div>
         </div>
      </div>
   );
};

export default AdminWorkProject;