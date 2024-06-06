import "./quote.css";
import { useEffect, useMemo, useRef, useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import ContactForm from "../../../components/contact-form/contact-form";
import UncheckSVG from "../../../assets/svg/element-in-web/un-check-icon-svg.svg";
import CheckSVG from "../../../assets/svg/element-in-web/check-icon-svg.svg";
import ContactIcon1 from "../../../assets/svg/element-in-web/form-icon-1-svg.svg";
import ContactIcon2 from "../../../assets/svg/element-in-web/form-icon-2-svg.svg";

const Quote = () => {
   const preApi = useMemo(() => {
      return process.env.NODE_ENV === "production"
         ? process.env.REACT_APP_BASE_IMAGE_URL
         : "";
   }, []);
   const [banner, setBanner] = useState({});
   const [services, setServices] = useState([]);
   const [contactForm, setContactForm] = useState({});
   const [currentService, setCurrentService] = useState(0);
   const [currentServiceCategory, setCurrentServiceCategory] = useState(0);

   const [projects, setProjects] = useState([]);
   const [story, setStory] = useState([]);
   const [isMouseDown, setIsMouseDown] = useState(false);
   const [mouseMoveX, setMouseMoveX] = useState(0);

   const tableMobileRef = useRef(null);
   const detailTextRef = useRef(null);
   const scrollWrapperRef = useRef(null);
   const scrollWrapperContentRef = useRef(null);

   useEffect(() => {
      axios.get(preApi + "/api/info/services").then(({ data }) => {
         setServices(data.services);
      });
   }, [preApi]);

   useEffect(() => {
      axios
         .get(preApi + "/api/quote")
         .then(({ data }) => {
            setProjects(data.projects);
            setBanner(data.banner);
            setStory(data.story);
            setContactForm(data.contactForm);
         })
         .catch((error) => {
            throw new Error(error);
         });
   }, [preApi]);

   useEffect(() => {
      const tableContent = document.querySelector(
         ".quote .quote__detail-table .table-mobile .table-wrap"
      );
      const tableContentWidth = tableContent?.offsetWidth;

      tableMobileRef.current.style.transform = `translateX(-${
         currentServiceCategory * tableContentWidth
      }px)`;
   }, [currentServiceCategory]);

   const scrollToView = () => {
      detailTextRef.current.scrollIntoView({
         behavior: "smooth",
         block: "center",
      });
   };

   //
   const getCurrentTranslateX = (scrollWrapperContent) => {
      const style = window.getComputedStyle(scrollWrapperContent);
      const transform = style.getPropertyValue("transform");
      if (transform && transform !== "none") {
         // Extracting the translateX value from the transform property
         const matrix = new DOMMatrixReadOnly(transform);
         return matrix.m41; // m41 is the translation in X direction
      }
   };

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

   return (
      <div className="quote">
         {/* <!-- Banner --> */}
         <div
            className={`quote-banner banner ${
               banner?.image ? "banner-image-active" : ""
            }`}
         >
            <div className="banner__bg">
               <div className="banner__bg-eclipse1"></div>
               <div className="banner__bg-eclipse2"></div>
               <div className="banner__bg-eclipse3"></div>
            </div>

            <Image
               className="banner__img"
               src={`${process.env.REACT_APP_BASE_IMAGE_URL}/${banner?.image}`}
            />

            <div className="banner__text">
               <div className="banner__text-top">
                  <div className="text-stroke text-center"></div>
                  <div className="text-uppercase text-center">
                     {banner?.textuppercase1}
                  </div>
               </div>

               <div className="banner__text-bot">
                  <div className="text-uppercase text-center">
                     {banner?.textuppercase2}
                  </div>
                  <div className="text-stroke text-center"></div>
               </div>
            </div>
         </div>
         {/* <!-- End: Banner --> */}

         {/* <!-- Story --> */}
         <div className="wrapper wrapper-top wrapper-bottom story">
            <div className="wrapper__header">
               <h4 className="wrapper__header-sub--heading text-uppercase">
                  {story?.subtitle}
               </h4>
               <h1 className="wrapper__header-heading text-capitalize">
                  {story?.title}
               </h1>
            </div>

            <div className="wrapper-flex">
               <div className="rectangle-100 rectangle-pc-50 story__content-text">
                  <p>{story?.text1}</p>
                  <p>{story?.text2}</p>
                  <p>{story?.text3}</p>
               </div>

               {story.images && story.images.length > 0 ? (
                  <div className="rectangle-100 rectangle-pc-50 story__content-img">
                     <Image
                        src={`${
                           process.env.REACT_APP_BASE_IMAGE_URL
                        }/${story?.images?.slice(0, 1)}`}
                     />
                  </div>
               ) : (
                  ""
               )}
            </div>
         </div>
         {/* <!-- End: Story --> */}

         {/* <!-- Quote --> */}
         <div className="wrapper wrapper-top wrapper-bottom quote">
            <div
               className="quote__nav"
               ref={scrollWrapperRef}
               onMouseDown={(e) => handleMouseDown(e)}
               onMouseUp={(e) => handleMouseUp(e)}
               onMouseLeave={(e) => handleMouseLeave(e)}
               onMouseMove={(e) => handleMouseMove(e)}
            >
               <div
                  className="d-flex flex-nowrap quote__nav-wrap"
                  ref={scrollWrapperContentRef}
                  style={{
                     transform: "translateX(0px)",
                  }}
               >
                  {services.map((service, index) => (
                     <div
                        key={index}
                        className={`quote__nav-item ${
                           index === currentService ? "active" : ""
                        }`}
                        onClick={() => {
                           setCurrentService(index);
                           setCurrentServiceCategory(0);
                        }}
                     >
                        {service.serviceName}
                     </div>
                  ))}
               </div>
            </div>

            <div className="quote__content">
               <div className="wrapper-flex justify-content-center">
                  {services[currentService]?.serviceQuotes?.map(
                     (serviceQuote, index) => (
                        <div
                           key={index}
                           className={`rectangle-100 rectangle-tab-50 ${
                              index === 0 ? "order-1" : ""
                           } order-xxl-${
                              index === 1 ? "2" : index === 2 ? "3" : ""
                           } order-md-${
                              index === 1 ? "3" : index === 2 ? "2" : ""
                           } rectangle-pc-25 quote__content-item`}
                        >
                           <div className="pack">
                              <div className="pack__header d-flex justify-content-center flex-wrap">
                                 <Image
                                    src={`${process.env.REACT_APP_BASE_IMAGE_URL}/${serviceQuote?.icon}`}
                                    alt="icon pack"
                                 />
                                 <div className="pack__header-info">
                                    <h4>{serviceQuote?.name}</h4>
                                    <span className="d-flex price">
                                       <p className="mb-0">Từ</p>
                                       <p className="mb-0">
                                          {serviceQuote?.price
                                             ?.toString()
                                             .replace(
                                                /\B(?=(\d{3})+(?!\d))/g,
                                                "."
                                             )}
                                       </p>
                                       <label>vnd</label>
                                    </span>
                                 </div>
                                 <div className="pack__header-text">
                                    {serviceQuote?.title}
                                 </div>
                              </div>
                              <div className="pack__content">
                                 <ul>
                                    {serviceQuote?.descriptions?.map(
                                       (description, index) => (
                                          <li key={index}>
                                             <div className="icon"></div>
                                             {description}
                                          </li>
                                       )
                                    )}
                                    {index !== 1 &&
                                       serviceQuote?.descriptions?.length < 8 &&
                                       Array.from(
                                          {
                                             length:
                                                8 -
                                                serviceQuote?.descriptions
                                                   ?.length,
                                          },
                                          (_, index) => (
                                             <li key={index}>
                                                <span className="line"></span>
                                             </li>
                                          )
                                       )}
                                    {index === 1 &&
                                       serviceQuote?.descriptions?.length < 9 &&
                                       Array.from(
                                          {
                                             length:
                                                9 -
                                                serviceQuote?.descriptions
                                                   ?.length,
                                          },
                                          (_, index) => (
                                             <li key={index}>
                                                <span className="line"></span>
                                             </li>
                                          )
                                       )}
                                 </ul>
                              </div>
                              <div className="pack__btn">
                                 <Link onClick={scrollToView}>Xem thêm</Link>
                              </div>
                           </div>
                        </div>
                     )
                  )}
               </div>
            </div>

            <div id="quote-details" className="w-100"></div>

            <div className="quote__detail">
               <div className="quote__detail-heading" ref={detailTextRef}>
                  Chi tiết cụ thể từng gói
               </div>
               <div className="quote__detail-des">
                  {services[currentService]?.description}
               </div>

               {/* <!-- Table on pc --> */}
               <div className="quote__detail-table d-none d-xl-block">
                  <div className="wrapper-flex table__header">
                     <div className="rectangle-25 py-0">
                        <div className="table__header-item h-100">Danh mục</div>
                     </div>
                     {services[currentService]?.serviceQuotes?.map(
                        (serviceQuote, index) => (
                           <div className="rectangle-25 py-0 " key={index}>
                              <div className="table__header-item h-100 ">
                                 <Image
                                    src={`${process.env.REACT_APP_BASE_IMAGE_URL}/${serviceQuote?.icon}`}
                                    alt=""
                                 />
                                 {serviceQuote?.name}
                              </div>
                           </div>
                        )
                     )}
                  </div>
                  {services[currentService]?.serviceCategories?.map(
                     (currentService, index) => {
                        return (
                           <div key={index} className="wrapper-flex table__row">
                              <div className="rectangle-25 py-0">
                                 <div className="table__row-item h-100">
                                    {currentService?.name}
                                 </div>
                              </div>
                              <div className="rectangle-25 py-0">
                                 <div className="table__row-item h-100 d-flex justify-content-center">
                                    {currentService?.quote1 === "1" ? (
                                       <Image src={CheckSVG} alt="check" />
                                    ) : currentService?.quote1 === "0" ? (
                                       <Image src={UncheckSVG} alt="uncheck" />
                                    ) : (
                                       currentService?.quote1
                                    )}
                                 </div>
                              </div>
                              <div className="rectangle-25 py-0">
                                 <div className="table__row-item h-100 item-check">
                                    {currentService?.quote2 === "1" ? (
                                       <Image src={CheckSVG} alt="check" />
                                    ) : currentService?.quote2 === "0" ? (
                                       <Image src={UncheckSVG} alt="uncheck" />
                                    ) : (
                                       currentService?.quote2
                                    )}
                                 </div>
                              </div>
                              <div className="rectangle-25 py-0">
                                 <div className="table__row-item h-100 item-check">
                                    {currentService?.quote3 === "1" ? (
                                       <Image src={CheckSVG} alt="check" />
                                    ) : currentService?.quote3 === "0" ? (
                                       <Image src={UncheckSVG} alt="uncheck" />
                                    ) : (
                                       currentService?.quote3
                                    )}
                                 </div>
                              </div>
                           </div>
                        );
                     }
                  )}
               </div>
               {/* <!-- End: Table on pc --> */}

               {/* <!-- Table on mobile and tablet --> */}
               <div className="quote__detail-table mobile d-xl-none">
                  <div className="wrapper-flex table__header">
                     {services[currentService]?.serviceQuotes.map(
                        (serviceQuote, index) => (
                           <div
                              key={index}
                              className="rectangle-33 py-0"
                              onClick={() => {
                                 setCurrentServiceCategory(index);
                              }}
                           >
                              <div
                                 className={`table__header-item h-100 ${
                                    currentServiceCategory === index
                                       ? "active"
                                       : ""
                                 }`}
                              >
                                 {serviceQuote.name}
                              </div>
                           </div>
                        )
                     )}
                  </div>

                  <div className="table-mobile" ref={tableMobileRef}>
                     {Array(services[currentService]?.serviceCategories?.length ?? 4)
                        .fill(0)
                        .map((_, index) => (
                           <div className="table-wrap" key={index}>
                              <div className="wrapper-flex table__row">
                                 <div className="rectangle-50 py-0">
                                    <div className="table__row-item h-100">
                                       {
                                          services[currentService]
                                             ?.serviceCategories[0]?.name
                                       }
                                    </div>
                                 </div>
                                 <div className="rectangle-50 py-0">
                                    <div className="table__row-item h-100 item-check">
                                       {index === 0 ? (
                                          services[currentService]
                                             ?.serviceCategories[0]?.quote1 ===
                                          "1" ? (
                                             <Image
                                                src={CheckSVG}
                                                alt="check"
                                             />
                                          ) : services[currentService]
                                               ?.serviceCategories[0]
                                               ?.quote1 === "0" ? (
                                             <Image
                                                src={UncheckSVG}
                                                alt="uncheck"
                                             />
                                          ) : (
                                             services[currentService]
                                                ?.serviceCategories[0]?.quote1
                                          )
                                       ) : index === 1 ? (
                                          services[currentService]
                                             ?.serviceCategories[0]?.quote2 ===
                                          "1" ? (
                                             <Image
                                                src={CheckSVG}
                                                alt="check"
                                             />
                                          ) : services[currentService]
                                               ?.serviceCategories[0]
                                               ?.quote2 === "0" ? (
                                             <Image
                                                src={UncheckSVG}
                                                alt="uncheck"
                                             />
                                          ) : (
                                             services[currentService]
                                                ?.serviceCategories[0]?.quote2
                                          )
                                       ) : services[currentService]
                                            ?.serviceCategories[0]?.quote3 ===
                                         "1" ? (
                                          <Image src={CheckSVG} alt="check" />
                                       ) : services[currentService]
                                            ?.serviceCategories[0]?.quote3 ===
                                         "0" ? (
                                          <Image
                                             src={UncheckSVG}
                                             alt="uncheck"
                                          />
                                       ) : (
                                          services[currentService]
                                             ?.serviceCategories[0]?.quote3
                                       )}
                                    </div>
                                 </div>
                              </div>

                              <div className="wrapper-flex table__row">
                                 <div className="rectangle-50 py-0">
                                    <div className="table__row-item h-100">
                                       {
                                          services[currentService]
                                             ?.serviceCategories[1]?.name
                                       }
                                    </div>
                                 </div>
                                 <div className="rectangle-50 py-0">
                                    <div className="table__row-item h-100 d-flex justify-content-center">
                                       {index === 0 ? (
                                          services[currentService]
                                             ?.serviceCategories[1]?.quote1 ===
                                          "1" ? (
                                             <Image
                                                src={CheckSVG}
                                                alt="check"
                                             />
                                          ) : services[currentService]
                                               ?.serviceCategories[1]
                                               ?.quote1 === "0" ? (
                                             <Image
                                                src={UncheckSVG}
                                                alt="uncheck"
                                             />
                                          ) : (
                                             services[currentService]
                                                ?.serviceCategories[1]?.quote1
                                          )
                                       ) : index === 1 ? (
                                          services[currentService]
                                             ?.serviceCategories[1]?.quote2 ===
                                          "1" ? (
                                             <Image
                                                src={CheckSVG}
                                                alt="check"
                                             />
                                          ) : services[currentService]
                                               ?.serviceCategories[1]
                                               ?.quote2 === "0" ? (
                                             <Image
                                                src={UncheckSVG}
                                                alt="uncheck"
                                             />
                                          ) : (
                                             services[currentService]
                                                ?.serviceCategories[1]?.quote2
                                          )
                                       ) : services[currentService]
                                            ?.serviceCategories[1]?.quote3 ===
                                         "1" ? (
                                          <Image src={CheckSVG} alt="check" />
                                       ) : services[currentService]
                                            ?.serviceCategories[1]?.quote3 ===
                                         "0" ? (
                                          <Image
                                             src={UncheckSVG}
                                             alt="uncheck"
                                          />
                                       ) : (
                                          services[currentService]
                                             ?.serviceCategories[1]?.quote3
                                       )}
                                    </div>
                                 </div>
                              </div>

                              <div className="wrapper-flex table__row">
                                 <div className="rectangle-50 py-0">
                                    <div className="table__row-item h-100">
                                       {
                                          services[currentService]
                                             ?.serviceCategories[2]?.name
                                       }
                                    </div>
                                 </div>
                                 <div className="rectangle-50 py-0">
                                    <div className="table__row-item h-100 item-check">
                                       {index === 0 ? (
                                          services[currentService]
                                             ?.serviceCategories[2]?.quote1 ===
                                          "1" ? (
                                             <Image
                                                src={CheckSVG}
                                                alt="check"
                                             />
                                          ) : services[currentService]
                                               ?.serviceCategories[2]
                                               ?.quote1 === "0" ? (
                                             <Image
                                                src={UncheckSVG}
                                                alt="uncheck"
                                             />
                                          ) : (
                                             services[currentService]
                                                ?.serviceCategories[2]?.quote1
                                          )
                                       ) : index === 1 ? (
                                          services[currentService]
                                             ?.serviceCategories[2]?.quote2 ===
                                          "1" ? (
                                             <Image
                                                src={CheckSVG}
                                                alt="check"
                                             />
                                          ) : services[currentService]
                                               ?.serviceCategories[2]
                                               ?.quote2 === "0" ? (
                                             <Image
                                                src={UncheckSVG}
                                                alt="uncheck"
                                             />
                                          ) : (
                                             services[currentService]
                                                ?.serviceCategories[2]?.quote2
                                          )
                                       ) : services[currentService]
                                            ?.serviceCategories[2]?.quote3 ===
                                         "1" ? (
                                          <Image src={CheckSVG} alt="check" />
                                       ) : services[currentService]
                                            ?.serviceCategories[2]?.quote3 ===
                                         "0" ? (
                                          <Image
                                             src={UncheckSVG}
                                             alt="uncheck"
                                          />
                                       ) : (
                                          services[currentService]
                                             ?.serviceCategories[2]?.quote3
                                       )}
                                    </div>
                                 </div>
                              </div>
                           </div>
                        ))}
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- End: Quote --> */}

         {/* <!-- Contact form --> */}
         <div className="wrapper wrapper-top wrapper-bottom contact">
            <div className="rectangle-100 d-none d-md-block d-xl-none text-center quote__heading-top">
               {contactForm?.title}
            </div>

            <div className="rectangle-100 py-0">
               <div className="wrapper-flex">
                  <div className="wrapper-flex-item d-none d-md-block rectangle-tab-50 p-0">
                     <div className="quote">
                        <div className="quote__heading d-none d-xl-block">
                           {contactForm?.title}
                        </div>

                        <div className="quote__text d-flex justify-content-between align-items-start">
                           <Image src={ContactIcon1} alt="icon 1" />
                           <p>{contactForm?.text1}</p>
                        </div>
                        <div className="quote__text d-flex justify-content-between align-items-start">
                           <Image src={ContactIcon2} alt="icon 2" />
                           <p>{contactForm?.text2}</p>
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

         {/* <!-- Work --> */}
         <div className="wrapper wrapper-top wrapper-bottom work">
            <div className="wrapper__header cursor-default">
               <h4 className="wrapper__header-sub--heading text-uppercase">
                  Work
               </h4>
               <h1 className="wrapper__header-heading text-capitalize">
                  Dự án
               </h1>
            </div>

            <div className="work__content wrapper-flex">
               {projects?.map((project, index) => (
                  <div
                     key={index}
                     className="rectangle-100 rectangle-tab-50 rectangle-pc-25"
                  >
                     <Link
                        className="project img-grayscale-hover arrow-right-translate-hover d-block"
                        to={`/cataloge/${project?.id}`}
                     >
                        <div className="img-grayscale">
                           <Image
                              src={`${process.env.REACT_APP_BASE_IMAGE_URL}/${project?.thumbnailSquare}`}
                              alt="black and white image"
                           />
                        </div>

                        <div className="project__des">
                           <div className="project__des-text">
                              {project.title}
                           </div>

                           <div className="project__des-icon">
                              <div className="arrow-right-translate">
                                 <div className="arrow-right-translate__line"></div>
                                 <div className="arrow-right-translate__right fa-solid fa-angle-right"></div>
                              </div>
                           </div>
                        </div>
                     </Link>
                  </div>
               ))}
            </div>

            <div className="work__link d-flex justify-content-center align-items-center">
               <Link className="arrow-right-link" to="/work">
                  <div className="arrow-right-link__text">Go to work</div>
                  <i className="arrow-right-link__icon fa-solid fa-arrow-right-long"></i>
               </Link>
            </div>
         </div>
         {/* <!-- End: Work --></div> */}
      </div>
   );
};

export default Quote;
