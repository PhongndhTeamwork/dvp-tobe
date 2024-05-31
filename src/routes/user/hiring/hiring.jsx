import "./hiring.css";
import { Fragment, useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

import AccordionService from "../../../components/accordion-service/accordion-service";

const Hiring = () => {

   const [banner, setBanner] = useState("");
   const [story, setStory] = useState("");
   const [jobs, setJobs] = useState([]);

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   useEffect(() => {
      axios
         .get("/api/hiring")
         .then(({ data }) => {
            setBanner(data.banner);
            setStory(data.story);
            setJobs(data.jobs);
         })
         .catch((error) => {
            throw new Error(error);
         });
   }, []);

   return (
      <Fragment>
         {/* <!-- Banner --> */}
         <div className={`banner ${banner.image ? "banner-image-active" : ""}`}>
            <div className="banner__bg">
               <div className="banner__bg-eclipse1"></div>
               <div className="banner__bg-eclipse2"></div>
               <div className="banner__bg-eclipse3"></div>
            </div>
            {banner.image ? (
               <Image className="banner__img" src={banner?.image} />
            ) : (
               ""
            )}

            <div className="banner__text">
               <div className="banner__text-top pe-0">
                  <div className="text-stroke text-center">{banner.textstroke1}</div>
                  <div className="text-uppercase text-center">{banner.textuppercase1}</div>
               </div>

               <div className="banner__text-bot">
                  <div className="text-uppercase text-center">{banner.textstroke2}</div>
                  <div className="text-stroke text-center">{banner.textuppercase2}</div>
               </div>
            </div>
         </div>
         {/* <!-- End: Banner --> */}

         {/* <!-- Story --> */}
         <div class="wrapper wrapper-top wrapper-bottom story">
            <div class="wrapper__header">
               <h4 class="wrapper__header-sub--heading text-uppercase">
                  {story.subtitle}
               </h4>
               <h1 class="wrapper__header-heading text-capitalize">
                  {story.title}
               </h1>
            </div>

            <div class="wrapper-flex">
               <div class="rectangle-100 rectangle-pc-50">
                  <div class="story__content-text">
                     <p>{story.text1}</p>
                     <p>{story.text2}</p>
                     <p>{story.text3}</p>
                  </div>
               </div>

               <div class="rectangle-100 rectangle-pc-50 story__content-img">
                  <Image
                     src={`${
                        process.env.REACT_APP_BASE_IMAGE_URL
                     }/${story?.images?.slice(0, 1)}`}
                     alt=""
                  />
               </div>
            </div>
         </div>
         {/* <!-- End: Story --> */}

         {/* <!-- Expertise --> */}
         <div class="hiring__expertise wrapper wrapper-top wrapper-bottom ">
            <div class="wrapper__header">
               <h4 class="wrapper__header-sub--heading text-uppercase">
                  The mottos
               </h4>
               <h1 class="wrapper__header-heading">Vị trí ứng tuyển</h1>
            </div>

            <div class="expertise__content">
               {jobs?.map((job, index) => {
                  return (
                     <AccordionService
                        hasJob={true}
                        title={job.jobName}
                        job={{
                           description: job.description,
                           gmail: job.contactMail,
                        }}
                        key={index}
                     />
                  );
               })}
               {/* <div class="service">
                  <div class="accordion" id="accordion-service-1">
                     <div class="accordion-item border-0">
                        <button
                           class="accordion-button"
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target="#collapse-service-1"
                        >
                           <div
                              class="d-flex align-items-center justify-content-between w-100 h-100"
                              style={{ cursor: "pointer" }}
                           >
                              <div class="accordion-item__icon-left">
                                 <div class="circle-rotate-icon">
                                    <div class="circle-icon"></div>
                                 </div>
                              </div>

                              <div class="accordion-item__content">
                                 <h4>Branding</h4>
                              </div>

                              <div class="accordion-item__icon-right">
                                 <div class="plus-rotate-icon">
                                    <i class="left"></i>
                                    <i class="right"></i>
                                 </div>
                              </div>
                           </div>
                        </button>

                        <div
                           class="accordion-collapse collapse"
                           id="collapse-service-1"
                           data-bs-parent="#accordion-service-1"
                        >
                           <div class="accordion-body d-flex justify-content-between">
                              <div class="service__content">
                                 <h4 class="service__content-heading text-uppercase">
                                    Mô tả công việc
                                 </h4>
                                 <p class="service__content-text">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                 </p>
                              </div>
                              <div class="service__content">
                                 <h4 class="service__content-heading text-uppercase">
                                    Hướng dẫn ứng tuyển
                                 </h4>
                                 <p class="service__content-text">
                                    Hãy gửi mail cho chúng tôi, nội dung bắt
                                    buộc (Tiêu đề mail - Vị trí ứng tuyển - Họ
                                    và tên - Cách thức liên lạc, gửi CV và
                                    portfolio của bản thân).
                                 </p>
                                 <p class="service__content-text">
                                    Tất cả gửi về địa chỉ mail:{" "}
                                    <Link to="" class="gmail-link">
                                       Minhlinkin@gmail.com
                                    </Link>
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div class="service">
                  <div class="accordion" id="accordion-service-2">
                     <div class="accordion-item border-0">
                        <button
                           class="accordion-button"
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target="#collapse-service-2"
                        >
                           <div
                              class="d-flex align-items-center justify-content-between w-100 h-100"
                              style={{ cursor: "pointer" }}
                           >
                              <div class="accordion-item__icon-left">
                                 <div class="circle-rotate-icon">
                                    <div class="circle-icon"></div>
                                 </div>
                              </div>

                              <div class="accordion-item__content">
                                 <h4>POD Designer</h4>
                              </div>

                              <div class="accordion-item__icon-right">
                                 <div class="plus-rotate-icon">
                                    <i class="left"></i>
                                    <i class="right"></i>
                                 </div>
                              </div>
                           </div>
                        </button>

                        <div
                           class="accordion-collapse collapse"
                           id="collapse-service-2"
                           data-bs-parent="#accordion-service-2"
                        >
                           <div class="accordion-body d-flex justify-content-between">
                              <div class="service__content">
                                 <h4 class="service__content-heading text-uppercase">
                                    Mô tả công việc
                                 </h4>
                                 <p class="service__content-text">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                 </p>
                              </div>
                              <div class="service__content">
                                 <h4 class="service__content-heading text-uppercase">
                                    Hướng dẫn ứng tuyển
                                 </h4>
                                 <p class="service__content-text">
                                    Hãy gửi mail cho chúng tôi, nội dung bắt
                                    buộc (Tiêu đề mail - Vị trí ứng tuyển - Họ
                                    và tên - Cách thức liên lạc, gửi CV và
                                    portfolio của bản thân).
                                 </p>
                                 <p class="service__content-text">
                                    Tất cả gửi về địa chỉ mail:{" "}
                                    <Link to="/" class="gmail-link">
                                       Minhlinkin@gmail.com
                                    </Link>
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div class="service">
                  <div class="accordion" id="accordion-service-3">
                     <div class="accordion-item border-0">
                        <button
                           class="accordion-button"
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target="#collapse-service-3"
                        >
                           <div
                              class="d-flex align-items-center justify-content-between w-100 h-100"
                              style={{ cursor: "pointer" }}
                           >
                              <div class="accordion-item__icon-left">
                                 <div class="circle-rotate-icon">
                                    <div class="circle-icon"></div>
                                 </div>
                              </div>

                              <div class="accordion-item__content">
                                 <h4>Digital marketor</h4>
                              </div>

                              <div class="accordion-item__icon-right">
                                 <div class="plus-rotate-icon">
                                    <i class="left"></i>
                                    <i class="right"></i>
                                 </div>
                              </div>
                           </div>
                        </button>

                        <div
                           class="accordion-collapse collapse"
                           id="collapse-service-3"
                           data-bs-parent="#accordion-service-3"
                        >
                           <div class="accordion-body d-flex justify-content-between">
                              <div class="service__content">
                                 <h4 class="service__content-heading text-uppercase">
                                    Mô tả công việc
                                 </h4>
                                 <p class="service__content-text">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                 </p>
                              </div>
                              <div class="service__content">
                                 <h4 class="service__content-heading text-uppercase">
                                    Hướng dẫn ứng tuyển
                                 </h4>
                                 <p class="service__content-text">
                                    Hãy gửi mail cho chúng tôi, nội dung bắt
                                    buộc (Tiêu đề mail - Vị trí ứng tuyển - Họ
                                    và tên - Cách thức liên lạc, gửi CV và
                                    portfolio của bản thân).
                                 </p>
                                 <p class="service__content-text">
                                    Tất cả gửi về địa chỉ mail:{" "}
                                    <Link to="" class="gmail-link">
                                       Minhlinkin@gmail.com
                                    </Link>
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div class="service">
                  <div class="accordion" id="accordion-service-4">
                     <div class="accordion-item border-0">
                        <button
                           class="accordion-button"
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target="#collapse-service-4"
                        >
                           <div
                              class="d-flex align-items-center justify-content-between w-100 h-100"
                              style={{ cursor: "pointer" }}
                           >
                              <div class="accordion-item__icon-left">
                                 <div class="circle-rotate-icon">
                                    <div class="circle-icon"></div>
                                 </div>
                              </div>

                              <div class="accordion-item__content">
                                 <h4>DEV Fullstack</h4>
                              </div>

                              <div class="accordion-item__icon-right">
                                 <div class="plus-rotate-icon">
                                    <i class="left"></i>
                                    <i class="right"></i>
                                 </div>
                              </div>
                           </div>
                        </button>

                        <div
                           class="accordion-collapse collapse"
                           id="collapse-service-4"
                           data-bs-parent="#accordion-service-4"
                        >
                           <div class="accordion-body d-flex justify-content-between">
                              <div class="service__content">
                                 <h4 class="service__content-heading text-uppercase">
                                    Mô tả công việc
                                 </h4>
                                 <p class="service__content-text">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                 </p>
                              </div>
                              <div class="service__content">
                                 <h4 class="service__content-heading text-uppercase">
                                    Hướng dẫn ứng tuyển
                                 </h4>
                                 <p class="service__content-text">
                                    Hãy gửi mail cho chúng tôi, nội dung bắt
                                    buộc (Tiêu đề mail - Vị trí ứng tuyển - Họ
                                    và tên - Cách thức liên lạc, gửi CV và
                                    portfolio của bản thân).
                                 </p>
                                 <p class="service__content-text">
                                    Tất cả gửi về địa chỉ mail:{" "}
                                    <Link to="" class="gmail-link">
                                       Minhlinkin@gmail.com
                                    </Link>
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div class="service">
                  <div class="accordion" id="accordion-service-5">
                     <div class="accordion-item border-0">
                        <button
                           class="accordion-button"
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target="#collapse-service-5"
                        >
                           <div
                              class="d-flex align-items-center justify-content-between w-100 h-100"
                              style={{ cursor: "pointer" }}
                           >
                              <div class="accordion-item__icon-left">
                                 <div class="circle-rotate-icon">
                                    <div class="circle-icon"></div>
                                 </div>
                              </div>

                              <div class="accordion-item__content">
                                 <h4>Content Writer</h4>
                              </div>

                              <div class="accordion-item__icon-right">
                                 <div class="plus-rotate-icon">
                                    <i class="left"></i>
                                    <i class="right"></i>
                                 </div>
                              </div>
                           </div>
                        </button>

                        <div
                           class="accordion-collapse collapse"
                           id="collapse-service-5"
                           data-bs-parent="#accordion-service-5"
                        >
                           <div class="accordion-body d-flex justify-content-between">
                              <div class="service__content">
                                 <h4 class="service__content-heading text-uppercase">
                                    Mô tả công việc
                                 </h4>
                                 <p class="service__content-text">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                 </p>
                              </div>
                              <div class="service__content">
                                 <h4 class="service__content-heading text-uppercase">
                                    Hướng dẫn ứng tuyển
                                 </h4>
                                 <p class="service__content-text">
                                    Hãy gửi mail cho chúng tôi, nội dung bắt
                                    buộc (Tiêu đề mail - Vị trí ứng tuyển - Họ
                                    và tên - Cách thức liên lạc, gửi CV và
                                    portfolio của bản thân).
                                 </p>
                                 <p class="service__content-text">
                                    Tất cả gửi về địa chỉ mail:{" "}
                                    <Link to="" class="gmail-link">
                                       Minhlinkin@gmail.com
                                    </Link>
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div> */}
            </div>

            <div class="d-flex justify-content-center align-items-center">
               <Link class="arrow-right-link" to="">
                  <div class="arrow-right-link__text">Đi đến Gmail</div>
                  <i class="arrow-right-link__icon fa-solid fa-arrow-right-long"></i>
               </Link>
            </div>
         </div>
         {/* <!-- End: Expertise --> */}
      </Fragment>
   );
};

export default Hiring;
