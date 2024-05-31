import { Link } from "react-router-dom";
import { Button, Col, Image, Row } from "react-bootstrap";

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

import CarouselImage2 from "../../../assets/images/carousel/carousel-2.png";
import CarouselImage3 from "../../../assets/images/carousel/carousel-3.png";

const AdminWorkProjects = () => {
   const { userInfo } = useSelector((state) => state.userLogin);
   const [projects, setProject] = useState([]);
   const [slideQuantity, setSlideQuantity] = useState(0);

   const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);

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
         .get("/api/home")
         .then(({ data }) => {
            setProject(data.projects);
            console.log(data.projects);
         })
         .catch((error) => {
            throw new Error(error);
         });
   }, []);
   return (
      <Fragment>
         <h4 className="mt-0">Các dự án</h4>

         <div className="admin-projects">
            <CatalogeProject
               activeIndex={activeCarouselIndex}
               projects={projects}
            />
         </div>
         <div className="d-flex justify-content-center">
            <Button variant="dark" onClick={handlePrev} className="mx-2"><i class="fa-solid fa-left-long"></i></Button>
            <Button variant="dark" onClick={handleNext} className="mx-2"><i class="fa-solid fa-right-long"></i></Button>

         </div>
         {/* <div className="add-project">
            <h4 className="mt-5">Thêm dự án mới</h4>

            <label htmlFor="">Thumbnail</label>
            <div className="banner__img w-50 my-4 border">
               <i className="fa-solid fa-xmark"></i>
               <Image className="w-100" src={CarouselImage2} alt="" />
            </div>
            <input type="file" className="w-100" name="" id="" />
            <br />

            <label htmlFor="">Danh mục sản phẩm</label>
            <br />
            <div className="list-category">
               <div className="category-item d-flex align-items-center p-2">
                  <input type="checkbox" name="" id="" />
                  <h6 className="m-0 ms-3">Branding</h6>
               </div>

               <div className="category-item d-flex align-items-center p-2">
                  <input type="checkbox" name="" id="" />
                  <h6 className="m-0 ms-3">Branding</h6>
               </div>

               <div className="category-item d-flex align-items-center p-2">
                  <input type="checkbox" name="" id="" />
                  <h6 className="m-0 ms-3">Branding</h6>
               </div>
            </div>

            <label htmlFor="">Sub title</label>
            <br />
            <input
               type="text"
               className="w-100"
               placeholder="The story of DVP"
               value=""
            />
            <br />
            <label htmlFor="">Title</label>
            <br />
            <input
               type="text"
               className="w-100"
               placeholder="Câu chuyện về DVP"
               value=""
            />
            <br />

            <label htmlFor="">Heading </label>
            <br />
            <input
               type="text"
               className="w-100"
               placeholder="The story of DVP"
               value=""
            />
            <br />
            <label htmlFor="">Đoạn văn 1</label>
            <br />
            <textarea className="w-100 p-2" name="" id="" rows="3">
               Đoạn văn chữ thường
            </textarea>
            <br />
            <label htmlFor="">Đoạn văn 2</label>
            <br />
            <textarea className="w-100 p-2" name="" id="" rows="3">
               Đoạn văn chữ thường
            </textarea>
            <br />

            <label htmlFor="">Tên khách hàng</label>
            <br />
            <input
               type="text"
               className="w-100"
               placeholder="The story of DVP"
               value=""
            />
            <br />
            <label htmlFor="">Ngày hoàn thành</label>
            <br />
            <input type="date" className="w-100" />
            <br />

            <label htmlFor="">Link demo sản phẩm</label>
            <br />
            <input
               type="text"
               className="w-100"
               placeholder="The story of DVP"
               value=""
            />
            <br />

            <label htmlFor="">Hình ảnh dự án</label>
            <br />
            <div className="row mt-5">
               <div className="col-12 py-2">
                  <Image className="w-100" src={CatalogeImage1} alt="" />
               </div>
               <div className="col-12 py-2">
                  <Image
                     className="w-100"
                     src={CatalogeImage2}
                     alt=""
                     srcset=""
                  />
               </div>
               <div className="col-6 py-2">
                  <Image className="w-100" src={CatalogeImage3} alt="" />
               </div>
               <div className="col-6 py-2">
                  <Image className="w-100" src={CatalogeImage4} alt="" />
               </div>
               <div className="col-12 py-2">
                  <Image className="w-100" src={CatalogeImage5} alt="" />
               </div>
               <div className="col-6 py-2">
                  <Image
                     className="w-100"
                     src={CatalogeImage6}
                     alt=""
                     srcset=""
                  />
               </div>
               <div className="col-6">
                  <div className="row">
                     <div className="col-12 py-2">
                        <Image
                           className="w-100"
                           src={CarouselImage3}
                           alt=""
                           srcset=""
                        />
                     </div>
                     <div className="col-12 py-2">
                        <Image
                           className="w-100"
                           src={CatalogeImage4}
                           alt=""
                           srcset=""
                        />
                     </div>
                  </div>
               </div>
            </div>

            <input className="my-2 mt-5" type="file" name="" id="" />
            <br />
            <input className="my-2" type="file" name="" id="" />
            <br />
            <input className="my-2" type="file" name="" id="" />
            <br />
            <input className="my-2" type="file" name="" id="" />
            <br />
            <input className="my-2" type="file" name="" id="" />
            <br />
            <input className="my-2" type="file" name="" id="" />
            <br />
            <input className="my-2" type="file" name="" id="" />
            <br />
            <input className="my-2" type="file" name="" id="" />
            <br />

            <button className="btn btn-primary px-4 fs-5 mt-4" type="button">
               Submit
            </button>
            <button className="btn btn-danger px-4 fs-5 mt-4" type="button">
               Hủy
            </button>
         </div> */}
      </Fragment>
   );
};

export default AdminWorkProjects;
