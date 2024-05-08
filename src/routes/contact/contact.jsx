import "./contact.css";
import { Fragment } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContactImage1 from "../../assets/images/contact/contact1.png";
import ContactImage2 from "../../assets/images/contact/contact2.png";
import OfficeBackground from "../../assets/images/others/office-bg.jpg";
import ContactIcon1 from "../../assets/images/contact/contact_icon1.png";
import ContactIcon2 from "../../assets/images/contact/contact_icon2.png";
import FacebookSVG from "../../assets/images/svg/social/facebook.svg";
import FacebookGraySVG from "../../assets/images/svg/social/facebook-gray.svg";
import InstagramSVG from "../../assets/images/svg/social/instagram.svg";
import InstagramGraySVG from "../../assets/images/svg/social/instagram-gray.svg";
import YoutubeSVG from "../../assets/images/svg/social/youtube.svg";
import YoutubeGraySVG from "../../assets/images/svg/social/youtube-gray.svg";
import ZaloSVG from "../../assets/images/svg/social/zalo.svg";
import ZaloGraySVG from "../../assets/images/svg/social/zalo-gray.svg";

const Contact = () => {
   return (
      <Fragment>
         {/* <!-- Inspiration --> */}
         <div class="wrapper wrapper-top wrapper-bottom inspiration">
            <div class="wrapper__header">
               <h4 class="wrapper__header-sub--heading text-uppercase">
                  Get in touch
               </h4>
               <h1 class="wrapper__header-heading">Kết nối - Lấy cảm hứng</h1>
               <h4 class="inspiration__sub-heading">
                  Liên hệ <span class="line"></span> Hợp tác
               </h4>
            </div>

            <div class="wrapper-flex">
               <div class="rectangle-100 inspiration__img">
                  <Image src={ContactImage1} />
               </div>

               <div class="rectangle-0 rectangle-pc-50 inspiration__img-2">
                  <Image class="w-100" src={ContactImage2} />
               </div>

               <div class="rectangle-100 rectangle-pc-50 inspiration__info">
                  <h2 class="heading">Công ty TNHH DVP...</h2>
                  <h4 class="sub-heading">
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
         <div class="wrapper wrapper-top wrapper-bottom location">
            <div class="location__header">
               <div class="location__header-heading">DVP Location</div>
            </div>

            <div class="content">
               <div class="location__img">
                  <Image
                     class="location__img-bg"
                     src={OfficeBackground}
                     alt="office"
                  />
                  <iframe
                     class="location__img-map"
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.7824199424376!2d105.8175071671402!3d21.01192097903609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9d54df9633%3A0xc6669ca3a3fd9129!2zS8OtbmggTeG6r3QgSMOgIFRow6BuaA!5e0!3m2!1svi!2sus!4v1714187539680!5m2!1svi!2sus"
                     allowfullscreen=""
                     loading="lazy"
                     referrerpolicy="no-referrer-when-downgrade"
                     title="Location Map"
                  ></iframe>
               </div>

               <div class="location__address">
                  <div class="location__address-noise"></div>
                  <div class="location__address-text">
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

               <div class="location__carousel">
                  <div
                     class="carousel slide touch"
                     data-bs-ride="carousel"
                     data-bs-interval="1800"
                  >
                     <div class="carousel-inner">
                        <div class="carousel-item active">
                           <h1 class="text-uppercase heading">DVP HA NOI</h1>
                        </div>
                        <div class="carousel-item">
                           <h1 class="text-uppercase heading text-stroke">
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
            <div class="quote__heading-tab">Để lại thông tin của bạn</div>

            <div class="d-flex justify-content-between align-items-start">
               <div class="quote">
                  <div class="quote__heading">Để lại thông tin của bạn</div>

                  <div class="quote__text d-flex justify-content-between align-items-start">
                     <Image src={ContactIcon1} alt="icon 1" />
                     <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                     </p>
                  </div>
                  <div class="quote__text d-flex justify-content-between align-items-start">
                     <Image src={ContactIcon2} alt="icon 2" />
                     <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                     </p>
                  </div>
               </div>

               <form action="#" class="contact__form">
                  <label for="fullname">Họ và tên</label>
                  <input
                     type="text"
                     id="fullname"
                     name="fullname"
                     placeholder="VD: Trần Ngọc Minh"
                  />

                  <label for="name">Danh xưng</label>
                  <input
                     type="text"
                     id="name"
                     name="name"
                     placeholder="VD: Ông, bà,.."
                  />

                  <label for="email">Email</label>
                  <input
                     type="email"
                     id="email"
                     name="email"
                     placeholder="Email"
                  />

                  <label for="phone">Số điện thoại</label>
                  <input
                     type="number"
                     id="phone"
                     name="phone"
                     placeholder="+84"
                  />

                  <div class="category">
                     <button
                        type="button"
                        class="category-service"
                        id="category-service-button"
                     >
                        <h5
                           class="category-service__name"
                           id="service-selected"
                           value="none"
                        >
                           Danh mục dịch vụ
                        </h5>

                        <div class="plus-rotate-icon">
                           <i class="left"></i>
                           <i class="right"></i>
                        </div>
                     </button>

                     <div class="category__services" id="category-service">
                        <div class="services">
                           <div class="services__item">
                              Nhận diện thương hiệu
                           </div>
                           <div class="services__item">
                              Fanpage - Digital maketing
                           </div>
                           <div class="services__item">
                              Xây dựng - Thiết kế website
                           </div>
                           <div class="services__item">POD Design</div>
                           <div class="services__item">
                              In ấn - Ấn phẩm văn phòng
                           </div>
                           <div class="services__item">
                              TVC - Video marketing
                           </div>
                           <div class="services__item">None</div>
                           <div class="services__item">None</div>
                           <div class="services__item">None</div>
                        </div>
                     </div>
                  </div>

                  <div class="contact__form-submit w-100 d-flex align-items-center justify-content-center">
                     <button id="contact__form-submit">
                        <div class="arrow-right-link">
                           <div class="arrow-right-link__text">
                              Button demo 1
                           </div>
                           <i class="arrow-right-link__icon fa-solid fa-arrow-right-long"></i>
                        </div>
                     </button>
                  </div>

                  <div class="social w-100 d-flex justify-content-center align-items-center">
                     <link href="" class="social__link">
                        <span class="social__link-icon icon-gray">
                           <Image
                              src={InstagramGraySVG}
                              alt="social icon gray"
                           />
                        </span>
                        <span class="social__link-icon">
                           <Image src={InstagramSVG} alt="social icon" />
                        </span>
                     </link>
                     <Link to="" class="social__link">
                        <span class="social__link-icon icon-gray">
                           <Image
                              src={FacebookGraySVG}
                              alt="social icon gray"
                           />
                        </span>
                        <span class="social__link-icon">
                           <Image src={FacebookSVG} alt="social icon" />
                        </span>
                     </Link>
                     <Link to="" class="social__link">
                        <span class="social__link-icon icon-gray">
                           <Image src={YoutubeGraySVG} alt="social icon gray" />
                        </span>
                        <span class="social__link-icon">
                           <Image src={YoutubeSVG} alt="social icon" />
                        </span>
                     </Link>
                     <Link to="" class="social__link">
                        <span class="social__link-icon icon-gray">
                           <Image src={ZaloGraySVG} alt="social icon gray" />
                        </span>
                        <span class="social__link-icon">
                           <Image src={ZaloSVG} alt="social icon" />
                        </span>
                     </Link>
                  </div>
               </form>
            </div>
         </div>
         {/* <!-- End: Contact form --> */}
      </Fragment>
   );
};

export default Contact;
