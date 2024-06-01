import { Link } from "react-router-dom";
import { Button, Col, Form, Image, Row } from "react-bootstrap";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { Fragment } from "react";
import CatalogeProject from "../../../components/cataloge-project/cataloge-project";

import CatalogeImage1 from "../../../assets/images/cataloge/cataloge1.png";
import CatalogeImage2 from "../../../assets/images/cataloge/cataloge2.png";
import CatalogeImage3 from "../../../assets/images/cataloge/cataloge3.png";
import CatalogeImage4 from "../../../assets/images/cataloge/cataloge4.png";
import CatalogeImage5 from "../../../assets/images/cataloge/cataloge5.png";
import CatalogeImage6 from "../../../assets/images/cataloge/cataloge6.png";
import ProjectImage1 from "../../../assets/images/cataloge/project-1.png";

import DatePicker from "react-datepicker";

// import CarouselImage2 from "../../../assets/images/carousel/carousel-2.png";
// import CarouselImage3 from "../../../assets/images/carousel/carousel-3.png";

const AdminWorkProjects = () => {
   const { userInfo } = useSelector((state) => state.userLogin);
   const [projects, setProjects] = useState([]);
   const [categories, setCategories] = useState([]);
   const [slideQuantity, setSlideQuantity] = useState(0);

   const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);

   const [newProjectInfo, setNewProjectInfo] = useState({
      subTitle: "",
      title: "",
      categoryName: "",
      desTitle: "",
      desText1: "",
      desText2: "",
      customerName: "",
      linkDemo: "",
      linkDemoName: "",
      thumbnailSquare: "",
      thumbnailRect: "",
      finishDate: "",
      categoryIds: [],
      images: [],
   });
   const [newProjectImages, setNewProjectImages] = useState([]);
   const [newThumbnailImages, setNewThumbnailImages] = useState({});
   const [categoriesId, setCategoriesId] = useState([]);

   useEffect(() => {
      const handleResize = () => {
         const width = window.innerWidth;
         if (width < 768) {
            setSlideQuantity(projects.length);
         } else if (width >= 768 && width < 1200) {
            setSlideQuantity(Math.ceil(projects.length / 2));
         } else {
            setSlideQuantity(Math.ceil(projects.length / 4));
         }
         setActiveCarouselIndex(0);
      };
      handleResize();

      window.addEventListener("resize", handleResize);

      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, [projects]);

   const handleNext = () => {
      setActiveCarouselIndex(
         activeCarouselIndex === slideQuantity - 1 ? 0 : activeCarouselIndex + 1
      );
   };

   const handlePrev = () => {
      setActiveCarouselIndex(
         activeCarouselIndex === 0 ? slideQuantity - 1 : activeCarouselIndex - 1
      );
   };

   useEffect(() => {
      axios
         .get("/api/work")
         .then(({ data }) => {
            setProjects(data.projects);
            setCategories(data.categories);
         })
         .catch((error) => {
            throw new Error(error);
         });
   }, []);

   const checkHasValidated = () => {
      console.log(newProjectInfo);
      if (
         newProjectInfo.subTitle === "" ||
         newProjectInfo.title === "" ||
         newProjectInfo.categoryName === "" ||
         newProjectInfo.desTitle === "" ||
         newProjectInfo.desText1 === "" ||
         newProjectInfo.desText2 === "" ||
         newProjectInfo.customerName === "" ||
         newProjectInfo.linkDemo === "" ||
         newProjectInfo.linkDemoName === ""
      ) {
         console.log(1);
         return false;
      } else if (
         typeof newProjectInfo.thumbnailRect !== "object" ||
         typeof newProjectInfo.thumbnailSquare !== "object"
      ) {
         console.log(2);
         return false;
      }
      if (categoriesId.length < 1) {
         console.log(3);
         return false;
      }

      if (newProjectInfo.images.length !== 8) {
         console.log(4);
         return false;
      }
      return !newProjectInfo.images.some((element) => {
         return typeof element !== "object";
      });
   };

   const handleSelectThumbnail = (e, type) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      if (file) {
         if (type === "s") {
            setNewProjectInfo({ ...newProjectInfo, thumbnailSquare: file });
            reader.onloadend = () => {
               setNewThumbnailImages({
                  ...newThumbnailImages,
                  square: reader.result,
               });
            };
         } else {
            setNewProjectInfo({ ...newProjectInfo, thumbnailRect: file });
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
         let projectImagesTemp = [...newProjectInfo.images];
         projectImagesTemp[index] = file;
         setNewProjectInfo({ ...newProjectInfo, images: projectImagesTemp });
         reader.onloadend = () => {
            let imagesTemp = [...newProjectImages];
            imagesTemp[index] = reader.result;
            setNewProjectImages(imagesTemp);
         };
         reader.readAsDataURL(file);
      }
   };

   const handleSubmit = () => {
      const config = {
         headers: {
            Authorization: userInfo,
         },
      };

      let data = { ...newProjectInfo };

      let date = new Date(data.finishDate);

      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");

      const formattedDate = `${year}-${month}-${day}`;

      data.categoryIds = categoriesId;
      data.finishDate = formattedDate;

      console.log(data);

      const formData = new FormData();

      Object.keys(data).forEach((key) => {
         formData.append(key, data[key]);
      });

      axios
         .post("/api/admin/work/project/save", formData, config)
         .then(({ data }) => {
            console.log(data.message);
         })
         .catch((error) => {
            console.log(error.message);
         });
   };

   return (
      <Fragment>
         <h4 className="mt-0">Các dự án</h4>
         <div className="admin-projects">
            <CatalogeProject
               activeIndex={activeCarouselIndex}
               projects={projects}
               isAdmin={true}
            />
         </div>
         <div className="d-flex justify-content-center">
            <Button variant="dark" onClick={handlePrev} className="mx-2">
               <i class="fa-solid fa-left-long"></i>
            </Button>
            <Button variant="dark" onClick={handleNext} className="mx-2">
               <i class="fa-solid fa-right-long"></i>
            </Button>
         </div>
         <div className="add-project">
            <h4 className="mt-5">Thêm dự án mới</h4>

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
               {categories?.map((category, index) => (
                  <label
                     key={index}
                     className="category-item d-flex align-items-center p-2 mt-0 mb-0"
                     htmlFor={`list-category-${index}`}
                  >
                     <input
                        type="checkbox"
                        name=""
                        id={`list-category-${index}`}
                        onChange={() => {
                           if (categoriesId.includes(index)) {
                              var categoryIdIndex = categoriesId.indexOf(index);

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
               value={newProjectInfo.subTitle}
               onChange={(e) => {
                  setNewProjectInfo({
                     ...newProjectInfo,
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
               value={newProjectInfo.title}
               onChange={(e) => {
                  setNewProjectInfo({
                     ...newProjectInfo,
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
               value={newProjectInfo.desTitle}
               onChange={(e) => {
                  setNewProjectInfo({
                     ...newProjectInfo,
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
               value={newProjectInfo.desText1}
               onChange={(e) => {
                  setNewProjectInfo({
                     ...newProjectInfo,
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
               value={newProjectInfo.desText2}
               onChange={(e) => {
                  setNewProjectInfo({
                     ...newProjectInfo,
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
               value={newProjectInfo.customerName}
               onChange={(e) => {
                  setNewProjectInfo({
                     ...newProjectInfo,
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
               value={newProjectInfo.categoryName}
               onChange={(e) => {
                  setNewProjectInfo({
                     ...newProjectInfo,
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
                     newProjectInfo.finishDate !== ""
                        ? new Date(newProjectInfo.finishDate)
                        : new Date()
                  }
                  onChange={(date) =>
                     setNewProjectInfo({ ...newProjectInfo, finishDate: date })
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
               value={newProjectInfo.linkDemo}
               onChange={(e) => {
                  setNewProjectInfo({
                     ...newProjectInfo,
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
               value={newProjectInfo.linkDemoName}
               onChange={(e) => {
                  setNewProjectInfo({
                     ...newProjectInfo,
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
                  <Image className="w-100" src={newProjectImages[0]} alt="" />
               </div>
               <div className="col-12 py-2">
                  <Image
                     className="w-100"
                     src={newProjectImages[1]}
                     alt=""
                     srcset=""
                  />
               </div>
               <div className="col-6 py-2">
                  <Image className="w-100" src={newProjectImages[2]} alt="" />
               </div>
               <div className="col-6 py-2">
                  <Image className="w-100" src={newProjectImages[3]} alt="" />
               </div>
               <div className="col-12 py-2">
                  <Image className="w-100" src={newProjectImages[4]} alt="" />
               </div>
               <div className="col-6 py-2">
                  <Image
                     className="w-100"
                     src={newProjectImages[5]}
                     srcset=""
                  />
               </div>
               <div className="col-6">
                  <div className="row">
                     <div className="col-12 py-2">
                        <Image
                           className="w-100"
                           src={newProjectImages[7]}
                           alt=""
                           srcset=""
                        />
                     </div>
                     <div className="col-12 py-2">
                        <Image
                           className="w-100"
                           src={newProjectImages[7]}
                           alt=""
                           srcset=""
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
                  if (checkHasValidated()) handleSubmit();
               }}
            >
               Submit
            </button>
            {/* <button className="btn btn-danger px-4 fs-5 mt-4" type="button">
               Hủy
            </button> */}
         </div>
      </Fragment>
   );
};

export default AdminWorkProjects;
