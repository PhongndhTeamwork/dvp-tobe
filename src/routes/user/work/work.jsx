import "./work.css";
import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { Image } from "react-bootstrap";
// import { Link } from "react-router-dom";

import axios from "axios";

import ContactIcon1 from "../../../assets/svg/element-in-web/form-icon-1-svg.svg";
import ContactIcon2 from "../../../assets/svg/element-in-web/form-icon-2-svg.svg";

import ContactForm from "../../../components/contact-form/contact-form";
import BrandScroll from "../../../components/brand-scroll/brand-scroll";
import WorkProject from "../../../components/work-project/work-project";
import { Link } from "react-router-dom";

const Work = () => {
   const preApi = useMemo(() => {
      return process.env.NODE_ENV === "production"
         ? process.env.REACT_APP_BASE_IMAGE_URL
         : "";
   }, []);

   const [activeCategory, setActiveCategory] = useState("all");
   const [activeFilter, setActiveFilter] = useState(0);

   const [story, setStory] = useState({});
   const [categories, setCategories] = useState([]);
   const [categoryIndex, setCategoryIndex] = useState(-1);
   const [projects, setProjects] = useState([]);
   const [contactForm, setContactForm] = useState({});

   const [isMouseDown, setIsMouseDown] = useState(false);
   const [mouseMoveX, setMouseMoveX] = useState(0);

   const scrollWrapperRef = useRef(null);
   const scrollWrapperContentRef = useRef(null);

   useEffect(() => {
      axios
         .get(preApi + "/api/work")
         .then(({ data }) => {
            setStory(data.story);
            setCategories(data.categories);
            setProjects(data.projects);
            setContactForm(data.contactForm);
            setCategoryIndex(-1);
            setActiveFilter(-1);
         })
         .catch((error) => {
            throw new Error(error);
         });
   }, [preApi]);

   const handleAllCategoriesClick = () => {
      setActiveCategory("all");
      setCategoryIndex(-1);
      setActiveFilter(-1);
   };

   const handleCategoryClick = (category) => {
      setActiveCategory(category);
   };

   const handleFilterClick = (index) => {
      setActiveFilter(index);
   };

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   useEffect(() => {
      if (categoryIndex === -1) {
         axios
            .get(preApi + "/api/work")
            .then(({ data }) => {
               setProjects(data.projects);
            })
            .catch((error) => {
               throw new Error(error);
            });
      } else {
         axios
            .get(preApi + `/api/work/search?category=${categoryIndex}`)
            .then(({ data }) => {
               setProjects(data.projects);
            })
            .catch((error) => {
               throw new Error(error);
            });
      }
   }, [categoryIndex, preApi]);

   //
   const handleMouseDown = (e) => {
      setIsMouseDown(true);
      setMouseMoveX(e.clientX);
   };

   const handleMouseUp = (e) => {
      setIsMouseDown(false);
   };

   const handleMouseLeave = (e) => {
      setIsMouseDown(false);
   };

   const handleMouseMove = (e) => {
      if (isMouseDown) {
         scrollWrapperContentRef.current.style.transition = "none";
         let newMouseMoveX = e.clientX;
         let translateX =
            newMouseMoveX -
            mouseMoveX +
            getCurrentTranslateX(scrollWrapperContentRef.current);
         const minTranslateX =
            scrollWrapperRef.current.offsetWidth -
            scrollWrapperContentRef.current.offsetWidth;
         if (translateX >= minTranslateX && translateX <= 0) {
            scrollWrapperContentRef.current.style.transform = `translateX(${translateX}px)`;
         }
         setMouseMoveX(newMouseMoveX);
      }
   };

   const getCurrentTranslateX = (scrollWrapperContent) => {
      const style = window.getComputedStyle(scrollWrapperContent);
      const transform = style.getPropertyValue("transform");
      if (transform && transform !== "none") {
         // Extracting the translateX value from the transform property
         const matrix = new DOMMatrixReadOnly(transform);
         return matrix.m41; // m41 is the translation in X direction
      }
   };

   return (
      <Fragment>
         {/* <!-- Work --> */}
         <div className="wrapper wrapper-top wrapper-bottom work">
            <div className="wrapper__header cursor-default">
               <h4 className="wrapper__header-sub--heading text-uppercase">
                  {story.subtitle}
               </h4>
               <h1 className="wrapper__header-heading text-capitalize">
                  {story.title}
               </h1>
            </div>

            <div className="work__des rectangle-100 rectangle-pc-50 ms-0 p-0">
               <p className="work__des-text m-0">{story.text1}</p>
            </div>

            <nav className="work__nav">
               <div className="nav-category">
                  <button
                     id="all-categories"
                     className={`nav-category__btn ${
                        activeCategory === "all" ? "active" : ""
                     }`}
                     onClick={handleAllCategoriesClick}
                  >
                     Tất cả
                  </button>
                  <button
                     id="categories"
                     className={`nav-category__btn ${
                        activeCategory !== "all" ? "active" : ""
                     }`}
                     onClick={() => {
                        handleCategoryClick("categories");
                     }}
                  >
                     Thể loại
                  </button>
               </div>

               <div
                  className="w-100 nav-filter-wrapper"
                  ref={scrollWrapperRef}
                  onMouseDown={(e) => handleMouseDown(e)}
                  onMouseUp={(e) => handleMouseUp(e)}
                  onMouseLeave={(e) => handleMouseLeave(e)}
                  onMouseMove={(e) => handleMouseMove(e)}
               >
                  <div
                     className="nav-filter"
                     id="filter"
                     ref={scrollWrapperContentRef}
                     style={{
                        visibility:
                           activeCategory !== "all" ? "visible" : "hidden",
                           transform: "translateX(0px)"
                     }}
                  >
                     {categories?.map((filterItem, index) => {
                        return (
                           <div
                              key={index}
                              className={`nav-filter__item ${
                                 activeFilter === index + 1 ? "active" : ""
                              }`}
                              onClick={() => {
                                 handleFilterClick(index + 1);
                                 setCategoryIndex(filterItem.id);
                              }}
                              style={{ whiteSpace: "nowrap" }}
                           >
                              {filterItem.name}
                           </div>
                        );
                     })}
                  </div>
               </div>
            </nav>
            {activeFilter === -1 ? (
               <WorkProject projects={projects} />
            ) : (
               <div className="work__content">
                  <div className="wrapper-flex">
                     {projects.map((project, index) => {
                        return (
                           <div
                              key={index}
                              className="rectangle-100 rectangle-tab-50 rectangle-pc-25"
                           >
                              <Link
                                 className="project img-grayscale-hover arrow-right-translate-hover d-block"
                                 to={`/cataloge/${project?.id ?? 1}`}
                              >
                                 <Fragment>
                                    <div className="img-grayscale">
                                       <Image
                                          src={`${process.env.REACT_APP_BASE_IMAGE_URL}/${project?.thumbnailSquare}`}
                                          alt="project image"
                                       />
                                    </div>

                                    <div className="project__des">
                                       <div className="project__des-text">
                                          {project?.title}
                                       </div>

                                       <div className="project__des-icon">
                                          <div className="arrow-right-translate">
                                             <div className="arrow-right-translate__line"></div>
                                             <div className="arrow-right-translate__right fa-solid fa-angle-right"></div>
                                          </div>
                                       </div>
                                    </div>
                                 </Fragment>
                              </Link>
                           </div>
                        );
                     })}
                  </div>
               </div>
            )}
         </div>

         {/* <!-- End: Work --> */}

         {/* <!-- Contact form --> */}
         <div className="wrapper wrapper-top wrapper-bottom contact">
            <div className="rectangle-100 d-none d-md-block d-xl-none text-center quote__heading-top">
               {contactForm.title}
            </div>

            <div className="rectangle-100 py-0">
               <div className="wrapper-flex">
                  <div className="wrapper-flex-item d-none d-md-block rectangle-tab-50 p-0">
                     <div className="quote">
                        <div className="quote__heading d-none d-xl-block">
                           {contactForm.title}
                        </div>

                        <div className="quote__text d-flex justify-content-between align-items-start">
                           <Image src={ContactIcon1} alt="icon 1" />
                           <p>{contactForm.text1}</p>
                        </div>
                        <div className="quote__text d-flex justify-content-between align-items-start">
                           <Image src={ContactIcon2} alt="icon 2" />
                           <p>{contactForm.text2}</p>
                        </div>
                     </div>
                  </div>
                  <div className="wrapper-flex-item rectangle-100 rectangle-tab-50 p-0">
                     <ContactForm />
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- End: Contact form --> */}

         {/* <!-- Partners --> */}
         <div className="partners">
            <div className="wrapper">
               <BrandScroll homePage={true} />
            </div>
         </div>
         {/* <!-- End: Partners --> */}
      </Fragment>
   );
};

export default Work;
