import "./work.css";
import { Fragment, useEffect, useState } from "react";
import { Image } from "react-bootstrap";
// import { Link } from "react-router-dom";

import axios from "axios";

// import RamenImage from "../../../assets/images/others/ramen.png";
// import ProjectImage1 from "../../../assets/images/projects/project-1.png";
// import ProjectImage2 from "../../../assets/images/projects/project-2.jpg";
// import ProjectImage3 from "../../../assets/images/projects/project-3.jpg";
// import ProjectImage4 from "../../../assets/images/projects/project-4.jpg";
// import ProjectImage5 from "../../../assets/images/projects/project-5.jpg";
// import ProjectImage6 from "../../../assets/images/projects/project-6.png";
import ContactIcon1 from "../../../assets/images/contact/contact_icon1.png";
import ContactIcon2 from "../../../assets/images/contact/contact_icon2.png";

import ContactForm from "../../../components/contact-form/contact-form";
import BrandScroll from "../../../components/brand-scroll/brand-scroll";
import WorkProject from "../../../components/work-project/work-project";

const Work = () => {
   // const filterItems = [
   //    "Nhận diện thương hiệu",
   //    "POD Design",
   //    "Quay dựng thiết kế video",
   // ];

   // const [showAllCategories, setShowAllCategories] = useState(true);

   const [activeCategory, setActiveCategory] = useState("all");
   const [activeFilter, setActiveFilter] = useState(0);

   const [story, setStory] = useState({});
   const [categories, setCategories] = useState([]);
   const [categoryIndex, setCategoryIndex] = useState(-1);
   const [projects, setProjects] = useState([]);
   const [contactForm, setContactForm] = useState({});

   useEffect(() => {
      axios
         .get("/api/work")
         .then(({ data }) => {
            setStory(data.story);
            setCategories(data.categories);
            setProjects(data.projects);
            setContactForm(data.contactForm);
         })
         .catch((error) => {
            throw new Error(error);
         });
   }, []);

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
            .get("/api/work")
            .then(({ data }) => {
               setProjects(data.projects);
            })
            .catch((error) => {
               throw new Error(error);
            });
      } else {
         axios
            .get(`/api/work/search?category=${categoryIndex}`)
            .then(({ data }) => {
               setProjects(data.projects);
            })
            .catch((error) => {
               throw new Error(error);
            });
      }
   }, [categoryIndex]);

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

               <div className="w-100 nav-filter-wrapper">
                  <div
                     className="nav-filter"
                     id="filter"
                     style={{
                        visibility:
                           activeCategory !== "all" ? "visible" : "hidden",
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
                           >
                              {filterItem.name}
                           </div>
                        );
                     })}
                  </div>
               </div>
            </nav>
            <WorkProject projects={projects} />
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
