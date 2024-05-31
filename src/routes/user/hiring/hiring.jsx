import "./hiring.css";
import { Fragment, useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

// import HiringIluImage from "../../../assets/images/others/hiring_ilu.png";
import AccordionService from "../../../components/accordion-service/accordion-service";

const Hiring = () => {
   // const jobs = [
   //    {
   //       name: "Branding",
   //       description:
   //          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
   //       instruction:
   //          "Hãy gửi mail cho chúng tôi, nội dung bắt buộc (Tiêu đề mail - Vị trí ứng tuyển - Họ và tên - Cách thức liên lạc, gửi CV và portfolio của bản thân).",
   //       gmail: "Minhlinkin@gmail.com",
   //    },
   //    {
   //       name: "Branding",
   //       description:
   //          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
   //       instruction:
   //          "Hãy gửi mail cho chúng tôi, nội dung bắt buộc (Tiêu đề mail - Vị trí ứng tuyển - Họ và tên - Cách thức liên lạc, gửi CV và portfolio của bản thân).",
   //       gmail: "Minhlinkin@gmail.com",
   //    },
   //    {
   //       name: "Branding",
   //       description:
   //          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
   //       instruction:
   //          "Hãy gửi mail cho chúng tôi, nội dung bắt buộc (Tiêu đề mail - Vị trí ứng tuyển - Họ và tên - Cách thức liên lạc, gửi CV và portfolio của bản thân).",
   //       gmail: "Minhlinkin@gmail.com",
   //    },
   //    {
   //       name: "Branding",
   //       description:
   //          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
   //       instruction:
   //          "Hãy gửi mail cho chúng tôi, nội dung bắt buộc (Tiêu đề mail - Vị trí ứng tuyển - Họ và tên - Cách thức liên lạc, gửi CV và portfolio của bản thân).",
   //       gmail: "Minhlinkin@gmail.com",
   //    },
   //    {
   //       name: "Branding",
   //       description:
   //          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
   //       instruction:
   //          "Hãy gửi mail cho chúng tôi, nội dung bắt buộc (Tiêu đề mail - Vị trí ứng tuyển - Họ và tên - Cách thức liên lạc, gửi CV và portfolio của bản thân).",
   //       gmail: "Minhlinkin@gmail.com",
   //    },
   // ];

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
               <Image
                  className="banner__img"
                  src={`${process.env.REACT_APP_BASE_IMAGE_URL}/${banner?.image}`}
               />
            ) : (
               ""
            )}

            <div className="banner__text">
               <div className="banner__text-top pe-0">
                  <div className="text-stroke text-center">
                     {banner.textstroke1}
                  </div>
                  <div className="text-uppercase text-center">
                     {banner.textuppercase1}
                  </div>
               </div>

               <div className="banner__text-bot">
                  <div className="text-uppercase text-center">
                     {banner.textstroke2}
                  </div>
                  <div className="text-stroke text-center">
                     {banner.textuppercase2}
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- End: Banner --> */}

         {/* <!-- Story --> */}
         <div className="wrapper wrapper-top wrapper-bottom story">
            <div className="wrapper__header">
               <h4 className="wrapper__header-sub--heading text-uppercase">
                  {story.subtitle}
               </h4>
               <h1 className="wrapper__header-heading text-capitalize">
                  {story.title}
               </h1>
            </div>

            <div className="wrapper-flex">
               <div className="rectangle-100 rectangle-pc-50">
                  <div className="story__content-text">
                     <p>{story.text1}</p>
                     <p>{story.text2}</p>
                     <p>{story.text3}</p>
                  </div>
               </div>

               <div className="rectangle-100 rectangle-pc-50 story__content-img">
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
         <div className="hiring__expertise wrapper wrapper-top wrapper-bottom ">
            <div className="wrapper__header">
               <h4 className="wrapper__header-sub--heading text-uppercase">
                  The mottos
               </h4>
               <h1 className="wrapper__header-heading">Vị trí ứng tuyển</h1>
            </div>

            <div className="expertise__content">
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
               {/* <div className="service">
                  <div className="accordion" id="accordion-service-1">
                     <div className="accordion-item border-0">
                        <button
                           className="accordion-button"
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target="#collapse-service-1"
                        >
                           <div
                              className="d-flex align-items-center justify-content-between w-100 h-100"
                              style={{ cursor: "pointer" }}
                           >
                              <div className="accordion-item__icon-left">
                                 <div className="circle-rotate-icon">
                                    <div className="circle-icon"></div>
                                 </div>
                              </div>

                              <div className="accordion-item__content">
                                 <h4>Branding</h4>
                              </div>

                              <div className="accordion-item__icon-right">
                                 <div className="plus-rotate-icon">
                                    <i className="left"></i>
                                    <i className="right"></i>
                                 </div>
                              </div>
                           </div>
                        </button>

                        <div
                           className="accordion-collapse collapse"
                           id="collapse-service-1"
                           data-bs-parent="#accordion-service-1"
                        >
                           <div className="accordion-body d-flex justify-content-between">
                              <div className="service__content">
                                 <h4 className="service__content-heading text-uppercase">
                                    Mô tả công việc
                                 </h4>
                                 <p className="service__content-text">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                 </p>
                              </div>
                              <div className="service__content">
                                 <h4 className="service__content-heading text-uppercase">
                                    Hướng dẫn ứng tuyển
                                 </h4>
                                 <p className="service__content-text">
                                    Hãy gửi mail cho chúng tôi, nội dung bắt
                                    buộc (Tiêu đề mail - Vị trí ứng tuyển - Họ
                                    và tên - Cách thức liên lạc, gửi CV và
                                    portfolio của bản thân).
                                 </p>
                                 <p className="service__content-text">
                                    Tất cả gửi về địa chỉ mail:{" "}
                                    <Link to="" className="gmail-link">
                                       Minhlinkin@gmail.com
                                    </Link>
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="service">
                  <div className="accordion" id="accordion-service-2">
                     <div className="accordion-item border-0">
                        <button
                           className="accordion-button"
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target="#collapse-service-2"
                        >
                           <div
                              className="d-flex align-items-center justify-content-between w-100 h-100"
                              style={{ cursor: "pointer" }}
                           >
                              <div className="accordion-item__icon-left">
                                 <div className="circle-rotate-icon">
                                    <div className="circle-icon"></div>
                                 </div>
                              </div>

                              <div className="accordion-item__content">
                                 <h4>POD Designer</h4>
                              </div>

                              <div className="accordion-item__icon-right">
                                 <div className="plus-rotate-icon">
                                    <i className="left"></i>
                                    <i className="right"></i>
                                 </div>
                              </div>
                           </div>
                        </button>

                        <div
                           className="accordion-collapse collapse"
                           id="collapse-service-2"
                           data-bs-parent="#accordion-service-2"
                        >
                           <div className="accordion-body d-flex justify-content-between">
                              <div className="service__content">
                                 <h4 className="service__content-heading text-uppercase">
                                    Mô tả công việc
                                 </h4>
                                 <p className="service__content-text">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                 </p>
                              </div>
                              <div className="service__content">
                                 <h4 className="service__content-heading text-uppercase">
                                    Hướng dẫn ứng tuyển
                                 </h4>
                                 <p className="service__content-text">
                                    Hãy gửi mail cho chúng tôi, nội dung bắt
                                    buộc (Tiêu đề mail - Vị trí ứng tuyển - Họ
                                    và tên - Cách thức liên lạc, gửi CV và
                                    portfolio của bản thân).
                                 </p>
                                 <p className="service__content-text">
                                    Tất cả gửi về địa chỉ mail:{" "}
                                    <Link to="/" className="gmail-link">
                                       Minhlinkin@gmail.com
                                    </Link>
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="service">
                  <div className="accordion" id="accordion-service-3">
                     <div className="accordion-item border-0">
                        <button
                           className="accordion-button"
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target="#collapse-service-3"
                        >
                           <div
                              className="d-flex align-items-center justify-content-between w-100 h-100"
                              style={{ cursor: "pointer" }}
                           >
                              <div className="accordion-item__icon-left">
                                 <div className="circle-rotate-icon">
                                    <div className="circle-icon"></div>
                                 </div>
                              </div>

                              <div className="accordion-item__content">
                                 <h4>Digital marketor</h4>
                              </div>

                              <div className="accordion-item__icon-right">
                                 <div className="plus-rotate-icon">
                                    <i className="left"></i>
                                    <i className="right"></i>
                                 </div>
                              </div>
                           </div>
                        </button>

                        <div
                           className="accordion-collapse collapse"
                           id="collapse-service-3"
                           data-bs-parent="#accordion-service-3"
                        >
                           <div className="accordion-body d-flex justify-content-between">
                              <div className="service__content">
                                 <h4 className="service__content-heading text-uppercase">
                                    Mô tả công việc
                                 </h4>
                                 <p className="service__content-text">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                 </p>
                              </div>
                              <div className="service__content">
                                 <h4 className="service__content-heading text-uppercase">
                                    Hướng dẫn ứng tuyển
                                 </h4>
                                 <p className="service__content-text">
                                    Hãy gửi mail cho chúng tôi, nội dung bắt
                                    buộc (Tiêu đề mail - Vị trí ứng tuyển - Họ
                                    và tên - Cách thức liên lạc, gửi CV và
                                    portfolio của bản thân).
                                 </p>
                                 <p className="service__content-text">
                                    Tất cả gửi về địa chỉ mail:{" "}
                                    <Link to="" className="gmail-link">
                                       Minhlinkin@gmail.com
                                    </Link>
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="service">
                  <div className="accordion" id="accordion-service-4">
                     <div className="accordion-item border-0">
                        <button
                           className="accordion-button"
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target="#collapse-service-4"
                        >
                           <div
                              className="d-flex align-items-center justify-content-between w-100 h-100"
                              style={{ cursor: "pointer" }}
                           >
                              <div className="accordion-item__icon-left">
                                 <div className="circle-rotate-icon">
                                    <div className="circle-icon"></div>
                                 </div>
                              </div>

                              <div className="accordion-item__content">
                                 <h4>DEV Fullstack</h4>
                              </div>

                              <div className="accordion-item__icon-right">
                                 <div className="plus-rotate-icon">
                                    <i className="left"></i>
                                    <i className="right"></i>
                                 </div>
                              </div>
                           </div>
                        </button>

                        <div
                           className="accordion-collapse collapse"
                           id="collapse-service-4"
                           data-bs-parent="#accordion-service-4"
                        >
                           <div className="accordion-body d-flex justify-content-between">
                              <div className="service__content">
                                 <h4 className="service__content-heading text-uppercase">
                                    Mô tả công việc
                                 </h4>
                                 <p className="service__content-text">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                 </p>
                              </div>
                              <div className="service__content">
                                 <h4 className="service__content-heading text-uppercase">
                                    Hướng dẫn ứng tuyển
                                 </h4>
                                 <p className="service__content-text">
                                    Hãy gửi mail cho chúng tôi, nội dung bắt
                                    buộc (Tiêu đề mail - Vị trí ứng tuyển - Họ
                                    và tên - Cách thức liên lạc, gửi CV và
                                    portfolio của bản thân).
                                 </p>
                                 <p className="service__content-text">
                                    Tất cả gửi về địa chỉ mail:{" "}
                                    <Link to="" className="gmail-link">
                                       Minhlinkin@gmail.com
                                    </Link>
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="service">
                  <div className="accordion" id="accordion-service-5">
                     <div className="accordion-item border-0">
                        <button
                           className="accordion-button"
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target="#collapse-service-5"
                        >
                           <div
                              className="d-flex align-items-center justify-content-between w-100 h-100"
                              style={{ cursor: "pointer" }}
                           >
                              <div className="accordion-item__icon-left">
                                 <div className="circle-rotate-icon">
                                    <div className="circle-icon"></div>
                                 </div>
                              </div>

                              <div className="accordion-item__content">
                                 <h4>Content Writer</h4>
                              </div>

                              <div className="accordion-item__icon-right">
                                 <div className="plus-rotate-icon">
                                    <i className="left"></i>
                                    <i className="right"></i>
                                 </div>
                              </div>
                           </div>
                        </button>

                        <div
                           className="accordion-collapse collapse"
                           id="collapse-service-5"
                           data-bs-parent="#accordion-service-5"
                        >
                           <div className="accordion-body d-flex justify-content-between">
                              <div className="service__content">
                                 <h4 className="service__content-heading text-uppercase">
                                    Mô tả công việc
                                 </h4>
                                 <p className="service__content-text">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                 </p>
                              </div>
                              <div className="service__content">
                                 <h4 className="service__content-heading text-uppercase">
                                    Hướng dẫn ứng tuyển
                                 </h4>
                                 <p className="service__content-text">
                                    Hãy gửi mail cho chúng tôi, nội dung bắt
                                    buộc (Tiêu đề mail - Vị trí ứng tuyển - Họ
                                    và tên - Cách thức liên lạc, gửi CV và
                                    portfolio của bản thân).
                                 </p>
                                 <p className="service__content-text">
                                    Tất cả gửi về địa chỉ mail:{" "}
                                    <Link to="" className="gmail-link">
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

            <div className="d-flex justify-content-center align-items-center">
               <Link className="arrow-right-link" to="">
                  <div className="arrow-right-link__text">Đi đến Gmail</div>
                  <i className="arrow-right-link__icon fa-solid fa-arrow-right-long"></i>
               </Link>
            </div>
         </div>
         {/* <!-- End: Expertise --> */}
      </Fragment>
   );
};

export default Hiring;
