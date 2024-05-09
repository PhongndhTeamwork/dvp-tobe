import "./hiring.css";
import { Fragment, useEffect } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import HiringIluImage from "../../assets/images/others/hiring_ilu.png";

const Hiring = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   return (
      <Fragment>
         {/* <!-- Banner --> */}
         <div class="banner">
            <div class="banner__bg">
               <div class="banner__bg-eclipse1"></div>
               <div class="banner__bg-eclipse2"></div>
               <div class="banner__bg-eclipse3"></div>
            </div>

            <div class="banner__text">
               <div class="d-flex justify-content-center align-items-center">
                  <div class="text-stroke text-capitalize">We Are</div>
                  <div class="text-uppercase">Hiring</div>
               </div>
            </div>
         </div>
         {/* <!-- End: Banner --> */}

         {/* <!-- Story --> */}
         <div class="wrapper wrapper-top wrapper-bottom story">
            <div class="wrapper__header">
               <h4 class="wrapper__header-sub--heading text-uppercase">
                  The story of DVP
               </h4>
               <h1 class="wrapper__header-heading text-capitalize">
                  DVP - Nơi Lý Tưởng Để phát triển
               </h1>
            </div>

            <div class="wrapper-flex">
               <div class="rectangle-100 rectangle-pc-50">
                  <div class="story__content-text">
                     <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. Lorem Ipsum
                        has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book.
                     </p>
                     <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                     </p>
                     <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                     </p>
                  </div>
               </div>

               <div class="rectangle-100 rectangle-pc-50 story__content-img">
                  <Image src={HiringIluImage} alt="" />
               </div>
            </div>
         </div>
         {/* <!-- End: Story --> */}

         {/* <!-- Expertise --> */}
         <div class="wrapper wrapper-top wrapper-bottom expertise">
            <div class="wrapper__header">
               <h4 class="wrapper__header-sub--heading text-uppercase">
                  The mottos
               </h4>
               <h1 class="wrapper__header-heading">Vị trí ứng tuyển</h1>
            </div>

            <div class="expertise__content">
               <div class="service">
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
               </div>
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
