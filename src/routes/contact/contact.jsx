import "./contact.css";
import { Fragment, useEffect, useRef, useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContactImage1 from "../../assets/images/contact/contact1.png";
import ContactImage2 from "../../assets/images/contact/contact2.png";
import OfficeBackground from "../../assets/images/others/office-bg.jpg";
import ContactIcon1 from "../../assets/images/contact/contact_icon1.png";
import ContactIcon2 from "../../assets/images/contact/contact_icon2.png";
import ContactForm from "../../components/contact-form/contact-form";

const Contact = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   return (
      <Fragment>
         {/* <!-- Inspiration --> */}
         <div className="wrapper wrapper-top wrapper-bottom inspiration">
            <div className="wrapper__header">
               <h4 className="wrapper__header-sub--heading text-uppercase">
                  Get in touch
               </h4>
               <h1 className="wrapper__header-heading">
                  Kết nối - Lấy cảm hứng
               </h1>
               <h4 className="inspiration__sub-heading">
                  Liên hệ <span className="line"></span> Hợp tác
               </h4>
            </div>

            <div className="wrapper-flex">
               <div className="rectangle-100 inspiration__img">
                  <Image src={ContactImage1} />
               </div>

               <div className="rectangle-0 rectangle-pc-50 inspiration__img-2">
                  <Image className="w-100" src={ContactImage2} />
               </div>

               <div className="rectangle-100 rectangle-pc-50 inspiration__info">
                  <h2 className="heading">Công ty TNHH DVP...</h2>
                  <h4 className="sub-heading">
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s, when an unknown
                     printer took a galley of type and scrambled it to make a
                     type specimen book.
                  </h4>

                  <p>Công ty TNHH 1 thành viên DVP Media</p>
                  <p>GCNĐKKD: 0108755817</p>
                  <p>Cấp ngày: 01/01/2024</p>
                  <p>Nơi cấp: Sở Kế Hoạch Và Đầu Tư Thành Phố Hà Nội</p>
               </div>
            </div>
         </div>
         {/* <!-- End: Inspiration --> */}

         {/* <!-- Location --> */}
         <div className="wrapper wrapper-top wrapper-bottom location">
            <div className="location__header">
               <div className="location__header-heading">DVP Location</div>
            </div>

            <div className="content">
               <div className="location__img">
                  <Image
                     className="location__img-bg"
                     src={OfficeBackground}
                     alt="office"
                  />
                  <iframe
                     className="location__img-map"
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.7824199424376!2d105.8175071671402!3d21.01192097903609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9d54df9633%3A0xc6669ca3a3fd9129!2zS8OtbmggTeG6r3QgSMOgIFRow6BuaA!5e0!3m2!1svi!2sus!4v1714187539680!5m2!1svi!2sus"
                     allowfullscreen=""
                     loading="lazy"
                     referrerpolicy="no-referrer-when-downgrade"
                     title="Location Map"
                  ></iframe>
               </div>

               <div className="location__address">
                  <div className="location__address-noise"></div>
                  <div className="location__address-text">
                     <h5>
                        Số 67 phố Láng Hạ, quận Đống Đa, <br />
                        Tp Hà Nội
                     </h5>
                     <h5>+84 988 123 456</h5>
                     <h5>dvp.media@gmail.com</h5>
                     <h5>
                        <Link to="">www.dvpmedia.com</Link>
                     </h5>
                  </div>
               </div>

               <div className="location__carousel">
                  <div
                     className="carousel slide touch"
                     data-bs-ride="carousel"
                     data-bs-interval="1800"
                  >
                     <div className="carousel-inner">
                        <div className="carousel-item active">
                           <h1 className="text-uppercase heading">
                              DVP HA NOI
                           </h1>
                        </div>
                        <div className="carousel-item">
                           <h1 className="text-uppercase heading text-stroke">
                              DVP HA NOI
                           </h1>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- End: Location --> */}

         {/* <!-- Contact form --> */}
         <div class="wrapper wrapper-top wrapper-bottom contact">
            <div class="rectangle-100 d-none d-md-block d-xl-none text-center quote__heading-top">
               Để lại thông tin của bạn
            </div>

            <div class="rectangle-100 py-0">
               <div class="wrapper-flex">
                  <div class="wrapper-flex-item d-none d-md-block rectangle-tab-50 p-0">
                     <div class="quote">
                        <div class="quote__heading d-none d-xl-block">
                           Để lại thông tin của bạn
                        </div>

                        <div class="quote__text d-flex justify-content-between align-items-start">
                           <Image src={ContactIcon1} alt="icon 1" />
                           <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book.
                           </p>
                        </div>
                        <div class="quote__text d-flex justify-content-between align-items-start">
                           <Image src={ContactIcon2} alt="icon 2" />
                           <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book.
                           </p>
                        </div>
                     </div>
                  </div>

                  <div class="wrapper-flex-item rectangle-100 rectangle-tab-50 p-0">
                     <ContactForm />
                  </div>
               </div>
            </div>
         </div>

         {/* <!-- End: Contact form --> */}
      </Fragment>
   );
};

export default Contact;
