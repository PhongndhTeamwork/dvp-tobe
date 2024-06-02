import { Button, Form, Image } from "react-bootstrap";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { Fragment } from "react";
import CatalogeProject from "../../../components/cataloge-project/cataloge-project";

// import DatePicker from "react-datepicker";

// const AdminWorkProjects = () => {
//    const { userInfo } = useSelector((state) => state.userLogin);
//    const [projects, setProjects] = useState([]);
//    const [categories, setCategories] = useState([]);
//    const [slideQuantity, setSlideQuantity] = useState(0);

//    const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);

//    const [newProjectInfo, setNewProjectInfo] = useState({
//       subTitle: "",
//       title: "",
//       categoryName: "",
//       desTitle: "",
//       desText1: "",
//       desText2: "",
//       customerName: "",
//       linkDemo: "",
//       linkDemoName: "",
//       thumbnailSquare: "",
//       thumbnailRect: "",
//       finishDate: "",
//       categoryIds: [],
//       images: [],
//    });
//    const [newProjectImages, setNewProjectImages] = useState([]);
//    const [newThumbnailImages, setNewThumbnailImages] = useState({});
//    const [categoriesId, setCategoriesId] = useState([]);

//    useEffect(() => {
//       const handleResize = () => {
//          const width = window.innerWidth;
//          if (width < 768) {
//             setSlideQuantity(projects.length);
//          } else if (width >= 768 && width < 1200) {
//             setSlideQuantity(Math.ceil(projects.length / 2));
//          } else {
//             setSlideQuantity(Math.ceil(projects.length / 4));
//          }
//          setActiveCarouselIndex(0);
//       };
//       handleResize();

//       window.addEventListener("resize", handleResize);

//       return () => {
//          window.removeEventListener("resize", handleResize);
//       };
//    }, [projects]);

//    const handleNext = () => {
//       setActiveCarouselIndex(
//          activeCarouselIndex === slideQuantity - 1 ? 0 : activeCarouselIndex + 1
//       );
//    };

//    const handlePrev = () => {
//       setActiveCarouselIndex(
//          activeCarouselIndex === 0 ? slideQuantity - 1 : activeCarouselIndex - 1
//       );
//    };

//    useEffect(() => {
//       axios
//          .get("/api/work")
//          .then(({ data }) => {
//             setProjects(data.projects);
//             setCategories(data.categories);
//          })
//          .catch((error) => {
//             throw new Error(error);
//          });
//    }, []);

//    const checkHasValidated = () => {
//       if (
//          newProjectInfo.subTitle === "" ||
//          newProjectInfo.title === "" ||
//          newProjectInfo.categoryName === "" ||
//          newProjectInfo.desTitle === "" ||
//          newProjectInfo.desText1 === "" ||
//          newProjectInfo.desText2 === "" ||
//          newProjectInfo.customerName === "" ||
//          newProjectInfo.linkDemo === "" ||
//          newProjectInfo.linkDemoName === ""
//       ) {
//          console.log(1);
//          return false;
//       } else if (
//          typeof newProjectInfo.thumbnailRect !== "object" ||
//          typeof newProjectInfo.thumbnailSquare !== "object"
//       ) {
//          console.log(2);
//          return false;
//       }
//       if (categoriesId.length < 1) {
//          console.log(4);
//          return false;
//       }

//       if (newProjectInfo.images.length !== 8) {
//          console.log(5);
//          return false;
//       }
//       return !newProjectInfo.images.some((element) => {
//          return typeof element !== "object";
//       });
//    };

//    const handleSelectThumbnail = (e, type) => {
//       const file = e.target.files[0];
//       const reader = new FileReader();
//       if (file) {
//          if (type === "s") {
//             setNewProjectInfo({ ...newProjectInfo, thumbnailSquare: file });
//             reader.onloadend = () => {
//                setNewThumbnailImages({
//                   ...newThumbnailImages,
//                   square: reader.result,
//                });
//             };
//          } else {
//             setNewProjectInfo({ ...newProjectInfo, thumbnailRect: file });
//             reader.onloadend = () => {
//                setNewThumbnailImages({
//                   ...newThumbnailImages,
//                   rectangle: reader.result,
//                });
//             };
//          }
//          reader.readAsDataURL(file);
//       }
//    };

//    const handleChangeImages = (e, index) => {
//       const file = e.target.files[0];
//       const reader = new FileReader();
//       if (file) {
//          let projectImagesTemp = [...newProjectInfo.images];
//          projectImagesTemp[index] = file;
//          setNewProjectInfo({ ...newProjectInfo, images: projectImagesTemp });
//          reader.onloadend = () => {
//             let imagesTemp = [...newProjectImages];
//             imagesTemp[index] = reader.result;
//             setNewProjectImages(imagesTemp);
//          };
//          reader.readAsDataURL(file);
//       }
//    };

//    const handleSubmit = () => {
//       const config = {
//          headers: {
//             Authorization: userInfo,
//          },
//       };

//       let data = { ...newProjectInfo };

//       let date = data.finishDate ? new Date(data.finishDate) : new Date();

//       const year = date.getFullYear();
//       const month = String(date.getMonth() + 1).padStart(2, "0");
//       const day = String(date.getDate()).padStart(2, "0");

//       const formattedDate = `${year}-${month}-${day}`;

//       data.categoryIds = categoriesId;
//       data.finishDate = formattedDate;

//       console.log(data);

//       const formData = new FormData();

//       Object.keys(data).forEach((key) => {
//          if (key !== "images" && key !== "categoryId") {
//             formData.append(key, data[key]);
//          }
//       });

//       data.images.forEach((image, index) => {
//          formData.append("images", image);
//          // formData.append("images[" + index + "]", image);
//       });

//       data.categoryIds.forEach((categoryId, index) => {
//          formData.append("categoryIds", categoryId);
//          // formData.append("categoryIds[" + index + "]", categoryId);
//       });

//       for (const pair of formData.entries()) {
//          console.log(pair[0] + ", " + pair[1]);
//       }

//       axios
//          .post("/api/admin/work/project/save", formData, config)
//          .then(({ data }) => {
//             console.log(data.message);
//          })
//          .catch((error) => {
//             console.log(error.message);
//          });
//    };

//    return (
//       <Fragment>
//          <h4 className="mt-0">Các dự án</h4>
//          <div className="admin-projects">
//             <CatalogeProject
//                activeIndex={activeCarouselIndex}
//                projects={projects}
//                isAdmin={true}
//             />
//          </div>
//          <div className="d-flex justify-content-center">
//             <Button variant="dark" onClick={handlePrev} className="mx-2">
//                <i className="fa-solid fa-left-long"></i>
//             </Button>
//             <Button variant="dark" onClick={handleNext} className="mx-2">
//                <i className="fa-solid fa-right-long"></i>
//             </Button>
//          </div>
//          <div className="add-project">
//             <h4 className="mt-5">Thêm dự án mới</h4>

//             <label htmlFor="">Thumbnail vuông</label>
//             <div className="banner__img w-50 my-4 border">
//                <i className="fa-solid fa-xmark"></i>
//                <Image
//                   className="w-100"
//                   alt=""
//                   src={newThumbnailImages?.square}
//                />
//             </div>
//             <input
//                type="file"
//                className="w-100"
//                name=""
//                id=""
//                onChange={(e) => {
//                   handleSelectThumbnail(e, "s");
//                }}
//             />

//             <label htmlFor="">Thumbnail hình chữ nhật</label>
//             <div className="banner__img w-50 my-4 border">
//                <i className="fa-solid fa-xmark"></i>
//                <Image
//                   className="w-100"
//                   alt=""
//                   src={newThumbnailImages?.rectangle}
//                />
//             </div>
//             <input
//                type="file"
//                className="w-100"
//                onChange={(e) => {
//                   handleSelectThumbnail(e, "r");
//                }}
//             />
//             <br />

//             <label htmlFor="">Danh mục sản phẩm</label>
//             <br />
//             <div className="list-category">
//                {categories?.map((category, index) => (
//                   <label
//                      key={index}
//                      className="category-item d-flex align-items-center p-2 mt-0 mb-0"
//                      htmlFor={`list-category-${index}`}
//                   >
//                      <input
//                         type="checkbox"
//                         name=""
//                         id={`list-category-${index}`}
//                         onChange={() => {
//                            if (categoriesId.includes(category.id)) {
//                               var categoryIdIndex = categoriesId.indexOf(
//                                  category.id
//                               );

//                               categoriesId.splice(categoryIdIndex, 1);
//                            } else {
//                               categoriesId.push(category.id);
//                            }
//                            setCategoriesId(categoriesId);
//                         }}
//                      />
//                      <h6 className="m-0 ms-3">{category.name}</h6>
//                   </label>
//                ))}
//             </div>

//             <label htmlFor="">Sub title</label>
//             <br />
//             <input
//                type="text"
//                className="w-100"
//                value={newProjectInfo.subTitle}
//                onChange={(e) => {
//                   setNewProjectInfo({
//                      ...newProjectInfo,
//                      subTitle: e.target.value,
//                   });
//                }}
//             />
//             <br />
//             <label htmlFor="">Title</label>
//             <br />
//             <input
//                type="text"
//                className="w-100"
//                value={newProjectInfo.title}
//                onChange={(e) => {
//                   setNewProjectInfo({
//                      ...newProjectInfo,
//                      title: e.target.value,
//                   });
//                }}
//             />
//             <br />

//             <label htmlFor="">Tiêu đề mô tả </label>
//             <br />
//             <input
//                type="text"
//                className="w-100"
//                value={newProjectInfo.desTitle}
//                onChange={(e) => {
//                   setNewProjectInfo({
//                      ...newProjectInfo,
//                      desTitle: e.target.value,
//                   });
//                }}
//             />
//             <br />
//             <label htmlFor="">Đoạn văn 1</label>
//             <br />
//             <textarea
//                className="w-100 p-2"
//                name=""
//                id=""
//                rows="3"
//                value={newProjectInfo.desText1}
//                onChange={(e) => {
//                   setNewProjectInfo({
//                      ...newProjectInfo,
//                      desText1: e.target.value,
//                   });
//                }}
//             ></textarea>
//             <br />
//             <label htmlFor="">Đoạn văn 2</label>
//             <br />
//             <textarea
//                className="w-100 p-2"
//                name=""
//                id=""
//                rows="3"
//                value={newProjectInfo.desText2}
//                onChange={(e) => {
//                   setNewProjectInfo({
//                      ...newProjectInfo,
//                      desText2: e.target.value,
//                   });
//                }}
//             ></textarea>
//             <br />

//             <label htmlFor="">Tên khách hàng</label>
//             <br />
//             <input
//                type="text"
//                className="w-100"
//                value={newProjectInfo.customerName}
//                onChange={(e) => {
//                   setNewProjectInfo({
//                      ...newProjectInfo,
//                      customerName: e.target.value,
//                   });
//                }}
//             />
//             <br />

//             <label htmlFor="">Tên Category</label>
//             <br />
//             <input
//                type="text"
//                className="w-100"
//                value={newProjectInfo.categoryName}
//                onChange={(e) => {
//                   setNewProjectInfo({
//                      ...newProjectInfo,
//                      categoryName: e.target.value,
//                   });
//                }}
//             />
//             <br />
//             <label htmlFor="">Ngày hoàn thành</label>
//             <br />
//             <Form.Group className="w-100">
//                <DatePicker
//                   selected={
//                      newProjectInfo.finishDate !== ""
//                         ? new Date(newProjectInfo.finishDate)
//                         : new Date()
//                   }
//                   onChange={(date) =>
//                      setNewProjectInfo({ ...newProjectInfo, finishDate: date })
//                   }
//                   dateFormat="dd/MM/yyyy"
//                />
//             </Form.Group>
//             <br />

//             <label htmlFor="">Link demo sản phẩm</label>
//             <br />
//             <input
//                type="text"
//                className="w-100"
//                value={newProjectInfo.linkDemo}
//                onChange={(e) => {
//                   setNewProjectInfo({
//                      ...newProjectInfo,
//                      linkDemo: e.target.value,
//                   });
//                }}
//             />
//             <br />

//             <label htmlFor="">Tên Link demo sản phẩm</label>
//             <br />
//             <input
//                type="text"
//                className="w-100"
//                value={newProjectInfo.linkDemoName}
//                onChange={(e) => {
//                   setNewProjectInfo({
//                      ...newProjectInfo,
//                      linkDemoName: e.target.value,
//                   });
//                }}
//             />
//             <br />

//             <label htmlFor="" className="mt-5">
//                Hình ảnh dự án
//             </label>
//             <br />
//             <div className="row mt-0">
//                <div className="col-12 py-2">
//                   <Image className="w-100" src={newProjectImages[0]} alt="" />
//                </div>
//                <div className="col-12 py-2">
//                   <Image
//                      className="w-100"
//                      src={newProjectImages[1]}
//                      alt=""
//                      srcset=""
//                   />
//                </div>
//                <div className="col-6 py-2">
//                   <Image className="w-100" src={newProjectImages[2]} alt="" />
//                </div>
//                <div className="col-6 py-2">
//                   <Image className="w-100" src={newProjectImages[3]} alt="" />
//                </div>
//                <div className="col-12 py-2">
//                   <Image className="w-100" src={newProjectImages[4]} alt="" />
//                </div>
//                <div className="col-6 py-2">
//                   <Image
//                      className="w-100"
//                      src={newProjectImages[5]}
//                      srcset=""
//                   />
//                </div>
//                <div className="col-6">
//                   <div className="row">
//                      <div className="col-12 py-2">
//                         <Image
//                            className="w-100"
//                            src={newProjectImages[6]}
//                            alt=""
//                            srcset=""
//                         />
//                      </div>
//                      <div className="col-12 py-2">
//                         <Image
//                            className="w-100"
//                            src={newProjectImages[7]}
//                            alt=""
//                            srcset=""
//                         />
//                      </div>
//                   </div>
//                </div>
//             </div>
//             <div className="d-flex align-items-center">
//                <div className="order-container">1</div>
//                <input
//                   className="mt-0"
//                   type="file"
//                   name=""
//                   id=""
//                   onChange={(e) => {
//                      handleChangeImages(e, 0);
//                   }}
//                />
//             </div>

//             <br />
//             <div className="d-flex align-items-center">
//                <div className="order-container">2</div>
//                <input
//                   className="my-0"
//                   type="file"
//                   name=""
//                   id=""
//                   onChange={(e) => {
//                      handleChangeImages(e, 1);
//                   }}
//                />
//             </div>
//             <br />
//             <div className="d-flex align-items-center">
//                <div className="order-container">3</div>
//                <input
//                   className="my-0"
//                   type="file"
//                   name=""
//                   id=""
//                   onChange={(e) => {
//                      handleChangeImages(e, 2);
//                   }}
//                />
//             </div>
//             <br />

//             <div className="d-flex align-items-center">
//                <div className="order-container">4</div>
//                <input
//                   className="my-0"
//                   type="file"
//                   name=""
//                   id=""
//                   onChange={(e) => {
//                      handleChangeImages(e, 3);
//                   }}
//                />
//             </div>
//             <br />
//             <div className="d-flex align-items-center">
//                <div className="order-container">5</div>
//                <input
//                   className="my-2"
//                   type="file"
//                   name=""
//                   id=""
//                   onChange={(e) => {
//                      handleChangeImages(e, 4);
//                   }}
//                />
//             </div>
//             <br />
//             <div className="d-flex align-items-center">
//                <div className="order-container">6</div>
//                <input
//                   className="my-0"
//                   type="file"
//                   name=""
//                   id=""
//                   onChange={(e) => {
//                      handleChangeImages(e, 5);
//                   }}
//                />
//             </div>
//             <br />
//             <div className="d-flex align-items-center">
//                <div className="order-container">7</div>
//                <input
//                   className="my-0"
//                   type="file"
//                   name=""
//                   id=""
//                   onChange={(e) => {
//                      handleChangeImages(e, 6);
//                   }}
//                />
//             </div>
//             <br />
//             <div className="d-flex align-items-center">
//                <div className="order-container">8</div>
//                <input
//                   className="my-0"
//                   type="file"
//                   name=""
//                   id=""
//                   onChange={(e) => {
//                      handleChangeImages(e, 7);
//                   }}
//                />
//             </div>

//             <br />

//             <button
//                className="btn btn-primary px-4 fs-5 mt-4"
//                type="button"
//                onClick={() => {
//                   if (checkHasValidated()) handleSubmit();
//                }}
//             >
//                Thêm
//             </button>
//             {/* <button className="btn btn-danger px-4 fs-5 mt-4" type="button">
//                Hủy
//             </button> */}
//          </div>
//       </Fragment>
//    );
// };

// export default AdminWorkProjects;

const AdminWorkProjects = () => {
   const { userInfo } = useSelector((state) => state.userLogin);
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
      thumbnailSquare: null,
      thumbnailRect: null,
      images: []
   });

   const handleChange = (e) => {
      const { name, value, files } = e.target;

      if (files) {
         setFormData((prevData) => ({
            ...prevData,
            [name]: files.length === 1 ? files[0] : Array.from(files)
         }));
      } else {
         setFormData((prevData) => ({
         ...prevData,
         [name]: value
         }));
      }
   };

   const handleSubmit = async () => {
      
      const config = {
         headers: {
            Authorization: userInfo,
         },
      };

      const data = new FormData();

      for (const key in formData) {
         if (key === 'images') {
            formData[key].forEach((file) => data.append('images', file));
         } else {
            data.append(key, formData[key]);
         }
      }

      axios
         .post("/api/admin/work/project/save", data, config)
         .then(({ data }) => {
            console.log(data.success);
            console.log(data.message);
         })
         .catch((error) => {
            console.log(error.message);
         });
   };

   return (
      <Fragment>
         <label htmlFor="subTitle">Sub Title:</label>
         <input type="text" id="subTitle" name="subTitle" value={formData.subTitle} onChange={handleChange} /><br /><br />

         <label htmlFor="title">Title:</label>
         <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} /><br /><br />

         <label htmlFor="categoryName">Category Name:</label>
         <input type="text" id="categoryName" name="categoryName" value={formData.categoryName} onChange={handleChange} /><br /><br />

         <label htmlFor="desTitle">Description Title:</label>
         <input type="text" id="desTitle" name="desTitle" value={formData.desTitle} onChange={handleChange} /><br /><br />

         <label htmlFor="desText1">Description Text 1:</label>
         <input type="text" id="desText1" name="desText1" value={formData.desText1} onChange={handleChange} /><br /><br />

         <label htmlFor="desText2">Description Text 2:</label>
         <input type="text" id="desText2" name="desText2" value={formData.desText2} onChange={handleChange} /><br /><br />

         <label htmlFor="customerName">Customer Name:</label>
         <input type="text" id="customerName" name="customerName" value={formData.customerName} onChange={handleChange} /><br /><br />

         <label htmlFor="linkDemo">Link Demo:</label>
         <input type="text" id="linkDemo" name="linkDemo" value={formData.linkDemo} onChange={handleChange} /><br /><br />

         <label htmlFor="linkDemoName">Link Demo Name:</label>
         <input type="text" id="linkDemoName" name="linkDemoName" value={formData.linkDemoName} onChange={handleChange} /><br /><br />

         <label htmlFor="finishDate">Finish Date:</label>
         <input type="date" id="finishDate" name="finishDate" value={formData.finishDate} onChange={handleChange} /><br /><br />

         <label htmlFor="thumbnailSquare">Thumbnail Square:</label>
         <input type="file" id="thumbnailSquare" name="thumbnailSquare" onChange={handleChange} /><br /><br />

         <label htmlFor="thumbnailRect">Thumbnail Rect:</label>
         <input type="file" id="thumbnailRect" name="thumbnailRect" onChange={handleChange} /><br /><br />

         <label htmlFor="images">Images:</label>
         <input type="file" id="images" name="images" multiple onChange={handleChange} /><br /><br />

         <button type="button" onClick={handleSubmit}>Submit</button>
      </Fragment>
   );
}

export default AdminWorkProjects;