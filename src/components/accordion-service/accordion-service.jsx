import "./accordion-service.css";
import { useState } from "react";
import { Accordion, Carousel } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

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
   const [isButtonActive, setIsButtonActive] = useState(false);

   const toggleAccordionButton = () => {
      setIsButtonActive(!isButtonActive);
   };

   return (
      <div class="service">
         <Accordion
            class="accordion"
            // id="accordion-service-1"
            defaultActiveKey="0"
         >
            <Accordion.Item class="accordion-item border-0" eventKey={index}>
               <Accordion.Header
                  class={`accordion-button ${
                     isButtonActive
                        ? "plus-rotate-icon-active circle-rotate-icon-active"
                        : ""
                  }`}
                  type="button"
                  onClick={toggleAccordionButton}
               >
                  <div
                     class="d-flex align-items-center justify-content-between w-100 h-100"
                     style={{ cursor: "pointer" }}
                  >
                     <div class="accordion-item__icon-left accordion-button__left">
                        <div class="circle-rotate-icon">
                           <div class="circle-icon"></div>
                        </div>
                     </div>

                     <div class="accordion-item__content accordion-button__title">
                        <h4>{title}</h4>
                     </div>

                     <div class="accordion-item__icon-right accordion-button__right">
                        <div class="plus-rotate-icon">
                           <i class="left"></i>
                           <i class="right"></i>
                        </div>
                     </div>
                  </div>
               </Accordion.Header>

               <Accordion.Body
                  class="accordion-collapse collapse"
                  // id="collapse-service-1"
                  // data-bs-parent="#accordion-service-1"
               >
                  {hasCarousel ? (
                     <div
                        className="accordion-body"
                        style={{ paddingBottom: "2rem" }}
                     >
                        {/* <div
                        // id="carousel-2"
                        className="carousel slide touch"
                        data-bs-ride="carousel"
                        data-bs-interval="1500"
                        data-bs-touch="true"
                     > */}
                        <Carousel data-bs-theme="dark">
                           {images.map((image, index) => {
                              return (
                                 <Carousel.Item key={index}>
                                    <Image
                                       className="d-block w-100"
                                       src={image}
                                       alt="First slide"
                                    />
                                    {/* <Carousel.Caption>
                                       <h5>First slide label</h5>
                                       <p>
                                          Nulla vitae elit libero, a pharetra
                                          augue mollis interdum.
                                       </p>
                                    </Carousel.Caption> */}
                                 </Carousel.Item>
                              );
                           })}
                        </Carousel>
                        {/* </div> */}

                        <div className="service__content">
                           {contents.map((content, index) => {
                              return <h6 key={index}>{content}</h6>;
                           })}
                        </div>
                     </div>
                  ) : hasJob ? (
                     <div class="accordion-collapse" id="collapse-service-3">
                        <div class="accordion-body rectangle-100 w-100 wrapper-flex m-0 p-0">
                           <div class="rectangle-100 rectangle-tab-50 service__content">
                              <h4 class="service__content-heading text-uppercase">
                                 Mô tả công việc
                              </h4>
                              <p class="service__content-text">
                                 {job.description}
                              </p>
                           </div>

                           <div class="rectangle-100 rectangle-tab-50 service__content">
                              <h4 class="service__content-heading text-uppercase">
                                 Hướng dẫn ứng tuyển
                              </h4>
                              <p class="service__content-text">
                                 {job.instruction}
                              </p>
                              <p class="service__content-text">
                                 Tất cả gửi về địa chỉ mail:{" "}
                                 <Link
                                    to=""
                                    class="gmail-link"
                                    style={{ color: "black" }}
                                 >
                                    {job.gmail}
                                 </Link>
                              </p>
                           </div>
                        </div>
                     </div>
                  ) : (
                     <div class="accordion-body d-flex justify-content-end">
                        <div class="service__content">
                           <p class="service__content-text text-end">
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
