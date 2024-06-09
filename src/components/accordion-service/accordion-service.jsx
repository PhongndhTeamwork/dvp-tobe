import "./accordion-service.css";
import { useState, useRef } from "react";
import { Accordion, Carousel } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const AccordionService = ({
   title,
   description,
   index,
   hasCarousel,
   hasJob,
   job,
   images,
   contents,
}) => {
   const navigate = useNavigate();
   const [isButtonActive, setIsButtonActive] = useState(false);
   // const [carouselWidth, setCarouselWidth] = useState(0);

   const carouselRef = useRef(null);

   // useEffect(() => {
   //    const timer = setTimeout(() => {
   //       if (carouselRef.current) {
   //          const carouselItem = carouselRef.current.querySelector(
   //             ".active.carousel-item"
   //          );
   //          if (carouselItem) {
   //             setCarouselWidth(carouselItem.offsetWidth);
   //          }
   //       }
   //    }, 100); // 100 milliseconds = 0.1 seconds

   //    return () => clearTimeout(timer); // Clear the timeout on component unmount
   // }, [isButtonActive]);

   const toggleAccordionButton = () => {
      setIsButtonActive(!isButtonActive);
   };

   return (
      <div className="service">
         <Accordion
            className="accordion"
            // id="accordion-service-1"
            defaultActiveKey="0"
         >
            <Accordion.Item
               className="accordion-item border-0"
               eventKey={index}
            >
               <Accordion.Header
                  className={`accordion-button ${
                     isButtonActive
                        ? "plus-rotate-icon-active circle-rotate-icon-active"
                        : ""
                  }`}
                  type="button"
                  onClick={toggleAccordionButton}
               >
                  <div
                     className="d-flex align-items-center justify-content-between w-100 h-100"
                     style={{ cursor: "pointer" }}
                  >
                     <div className="accordion-item__icon-left accordion-button__left">
                        <div className="circle-rotate-icon">
                           <div className="circle-icon"></div>
                        </div>
                     </div>

                     <div className="accordion-item__content accordion-button__title">
                        <h4>{title}</h4>
                     </div>

                     <div className="accordion-item__icon-right accordion-button__right">
                        <div className="plus-rotate-icon">
                           <i className="left"></i>
                           <i className="right"></i>
                        </div>
                     </div>
                  </div>
               </Accordion.Header>

               <Accordion.Body
                  className="accordion-collapse"
                  // style={{width : "30%"}}
                  // id="collapse-service-1"
                  // data-bs-parent="#accordion-service-1"
               >
                  {hasCarousel ? (
                     <div
                        className="accordion-body rectangle-100 rectangle-pc-50 wrapper-flex service__content max-width-none"
                        style={{ paddingBottom: "2rem" }}
                     >
                        <div
                           className="rectangle-100 rectangle-tab-50 py-0"
                           ref={carouselRef}
                        >
                           <Carousel interval={1000}>
                              {images?.map((image, index) => {
                                 return (
                                    <Carousel.Item key={index}>
                                       <Image
                                          className="d-block w-100"
                                          src={`${process.env.REACT_APP_BASE_IMAGE_URL}/${image}`}
                                          alt="Slide"
                                       />
                                    </Carousel.Item>
                                 );
                              })}
                           </Carousel>
                        </div>
                        <div className="rectangle-100 rectangle-tab-50 py-0 service__content-text cursor-default">
                           {/* {contents?.map((content, index) => {
                              return <h6 key={index}>{content}</h6>;
                           })} */}
                           {Array(6)
                              .fill(0)
                              .map((_, index) => (
                                 <h6 key={index}>
                                    {contents[index]
                                       ? contents[index]
                                       : "\u00A0"}
                                 </h6>
                              ))}
                           {/* <h6
                              className="mt-0 service__button"
                              onClick={() => {
                                 navigate("/quote");
                              }}
                           ></h6> */}
                           <div className="arrow-right-link">
                              <h6 className="arrow-right-link__text service__button mb-0">
                                 Xem Chi Tiết
                              </h6>
                              <i className="arrow-right-link__icon fa-solid fa-arrow-right-long"></i>
                           </div>
                        </div>
                     </div>
                  ) : hasJob ? (
                     <div
                        className="accordion-collapse"
                        style={{ width: "100%" }}
                     >
                        <div className="accordion-body rectangle-100 wrapper-flex m-0 p-0">
                           <div className="rectangle-100 rectangle-tab-50 service__content">
                              <h4 className="service__content-heading text-uppercase">
                                 Mô tả công việc
                              </h4>
                              <p className="service__content-text">
                                 {job.description}
                              </p>
                           </div>

                           <div className="rectangle-100 rectangle-tab-50 service__content">
                              <h4 className="service__content-heading text-uppercase">
                                 Hướng dẫn ứng tuyển
                              </h4>
                              <p className="service__content-text">
                                 Hãy gửi mail cho chúng tôi, nội dung bắt buộc
                                 (Tiêu đề mail - Vị trí ứng tuyển - Họ và tên -
                                 Cách thức liên lạc, gửi CV và portfolio của bản
                                 thân).
                              </p>
                              <p className="service__content-text">
                                 Tất cả gửi về địa chỉ mail:{" "}
                                 <Link
                                    to=""
                                    className="gmail-link"
                                    style={{ color: "black" }}
                                 >
                                    {job.gmail}
                                 </Link>
                              </p>
                           </div>
                        </div>
                     </div>
                  ) : (
                     <div className="accordion-body rectangle-100 wrapper-flex m-0 p-0 justify-content-end">
                        <div className="rectangle-100 rectangle-pc-50 service__content">
                           <p className="service__content-text text-end">
                              {description}
                           </p>
                        </div>
                     </div>
                  )}
               </Accordion.Body>
            </Accordion.Item>
         </Accordion>
      </div>
   );
};

export default AccordionService;
