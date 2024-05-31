import "./cataloge.css";
import { Fragment, useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

import axios from "axios";
import CatalogeProject from "../../../components/cataloge-project/cataloge-project";

const Cataloge = () => {
   const { id } = useParams();
   console.log(id);
   const [project, setProject] = useState([]);
   const [projectSuggestion, setProjectSuggestion] = useState([]);
   const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
   const [slideQuantity, setSlideQuantity] = useState(0);

   const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

   useEffect(() => {
      const handleResize = () => {
         const width = window.innerWidth;
         if (width < 768) {
            setSlideQuantity(projectSuggestion.length);
         } else if (width >= 768 && width < 1200) {
            setSlideQuantity(Math.ceil(projectSuggestion.length / 2));
         } else {
            setSlideQuantity(Math.ceil(projectSuggestion.length / 4));
         }
         setActiveCarouselIndex(0);
      };
      handleResize();

      window.addEventListener("resize", handleResize);

      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, [projectSuggestion]);

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
         .get("/api/catalog/" + id)
         .then(({ data }) => {
            setProject(data.project);
            setProjectSuggestion(data.projectSuggestion);
            console.log(data);
         })
         .catch((error) => {
            throw new Error(error);
         });
   }, [id]);

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   return (
      <Fragment>
         {/* <!-- Project --> */}
         <div className="wrapper wrapper-top wrapper-bottom project">
            <div className="wrapper__header">
               <h4 className="wrapper__header-sub--heading text-uppercase">
                  {project?.subTitle}
               </h4>
               <h1 className="wrapper__header-heading">
                  {project?.title} <br /> {project?.categoryName}
               </h1>
               <h4 className="project__sub-heading">
                  {project?.categoryName}
                  <span className="line"></span>
                  {new Date(project?.finishDate)
                     ? new Date(project?.finishDate).getFullYear()
                     : project?.categoryName}
               </h4>
            </div>

            <div className="wrapper-flex">
               <Image
                  className="img-1 rectangle-100"
                  src={`${
                     process.env.REACT_APP_BASE_IMAGE_URL
                  }/${project?.images?.slice(0, 1)}`}
                  alt=""
               />
            </div>

            <div className="wrapper-flex project__des">
               <div className="rectangle-100 project__des-title">
                  {project?.desTitle}
               </div>

               <div className="rectangle-100 rectangle-tab-50 project__des-text">
                  {project?.desText1}
               </div>

               <div className="rectangle-100 rectangle-tab-50 project__des-text">
                  {project?.dexText2}
               </div>
            </div>

            <div className="wrapper-flex">
               <div className="rectangle-100">
                  <Image
                     className="w-100 img-1"
                     src={`${
                        process.env.REACT_APP_BASE_IMAGE_URL
                     }/${project?.images?.slice(1, 2)}`}
                     alt=""
                  />
               </div>
               <div className="rectangle-100 rectangle-tab-50">
                  <Image
                     className="w-100 img-2"
                     src={`${
                        process.env.REACT_APP_BASE_IMAGE_URL
                     }/${project?.images?.slice(2, 3)}`}
                     alt=""
                  />
               </div>
               <div className="rectangle-100 rectangle-tab-50">
                  <Image
                     className="w-100 img-2"
                     src={`${
                        process.env.REACT_APP_BASE_IMAGE_URL
                     }/${project?.images?.slice(3, 4)}`}
                     alt=""
                  />
               </div>
               <div className="rectangle-100">
                  <Image
                     className="w-100 img-1"
                     src={`${
                        process.env.REACT_APP_BASE_IMAGE_URL
                     }/${project?.images?.slice(4, 5)}`}
                     alt=""
                  />
               </div>
               <div className="rectangle-100 rectangle-tab-50">
                  <Image
                     className="w-100 img-3"
                     src={`${
                        process.env.REACT_APP_BASE_IMAGE_URL
                     }/${project?.images?.slice(5, 1)}`}
                     alt=""
                  />
               </div>
               <div className="rectangle-100 rectangle-tab-50 wrapper-flex m-0 p-0">
                  <div className="rectangle-100">
                     <Image
                        className="w-100 img-2"
                        src={`${
                           process.env.REACT_APP_BASE_IMAGE_URL
                        }/${project?.images?.slice(6, 7)}`}
                        alt=""
                     />
                  </div>
                  <div className="rectangle-100">
                     <Image
                        className="w-100 img-2"
                        src={`${
                           process.env.REACT_APP_BASE_IMAGE_URL
                        }/${project?.images?.slice(7, 8)}`}
                        alt=""
                     />
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- End: Project --> */}

         {/* <!-- Project info --> */}
         <div className="wrapper wrapper-top wrapper-bottom project-info">
            <div className="wrapper-flex">
               <div className="rectangle-100 rectangle-pc-33">
                  <h2 className="project-info__heading">Thông tin dự án</h2>
               </div>

               <div className="rectangle-100 rectangle-tab-50 rectangle-pc-33">
                  <div className="project__info-customer">
                     <h6 className="title">Khách hàng</h6>
                     <h4 className="name text-uppercase">
                        {project?.customerName}
                     </h4>
                  </div>
                  <div className="project__info-category">
                     <h6 className="title">Thể loại</h6>
                     <h4 className="name text-uppercase">{project?.categoryName}</h4>
                  </div>
               </div>

               <div className="rectangle-100 rectangle-tab-50 rectangle-pc-33">
                  <div className="project__info-date">
                     <h6 className="title">Năm hoàn thành</h6>
                     <h4
                        className="name text-uppercase"
                        id="project-complete-date"
                     >
                        {new Date(project?.finishDate).toLocaleDateString(
                           "en-GB"
                        )}
                     </h4>
                  </div>
                  <div className="project__info-more">
                     <h6 className="title">Xem thêm tại</h6>
                     <Link
                        to={project?.linkDemo}
                        className="name text-uppercase project-link"
                     >
                        {project?.linkDemoName}
                        <i className="fa-solid fa-arrow-right-long"></i>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- End: Project info --> */}

         <div className="suggestion wrapper">
            <div className="suggestion__header">
               <div className="suggestion__header-heading">Các dự án khác</div>

               <div className="suggestion__header-control d-flex">
                  <button
                     className="button-pre"
                     type="button"
                     onClick={handlePrev}
                  >
                     <svg
                        width="28"
                        height="13"
                        viewBox="0 0 28 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d="M2.7999 6.5L7.3999 1.9L5.9999 0.5L-9.77516e-05 6.5L5.9999 12.5L7.3999 11.1L2.7999 6.5Z" />
                        <rect
                           width="27"
                           height="2"
                           transform="matrix(-1 0 0 1 28 5.5)"
                        />
                     </svg>
                  </button>
                  <button
                     className="button-next"
                     type="button"
                     onClick={handleNext}
                  >
                     <svg
                        width="28"
                        height="13"
                        viewBox="0 0 28 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d="M25.2001 6.5L20.6001 1.9L22.0001 0.5L28.0001 6.5L22.0001 12.5L20.6001 11.1L25.2001 6.5Z" />
                        <rect y="5.5" width="27" height="2" />
                     </svg>
                  </button>
               </div>
            </div>

            <div className="suggestion__content">
               <div id="suggestion-project" className="carousel slide">
                  <CatalogeProject
                     activeIndex={activeCarouselIndex}
                     projects={projectSuggestion}
                  />
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default Cataloge;
