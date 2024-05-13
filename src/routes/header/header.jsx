import { Fragment, useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

import HomeIcon from "../../assets/images/others/home-icon.png";
import MessageIcon from "../../assets/images/others/message-icon.png";
import LinkIcon from "../../assets/images/others/link-icon.png";
import PhoneIcon from "../../assets/images/others/phone-icon.png";

import FacebookSVG from "../../assets/images/svg/social/facebook.svg";
import FacebookGraySVG from "../../assets/images/svg/social/facebook-gray.svg";
import InstagramSVG from "../../assets/images/svg/social/instagram.svg";
import InstagramGraySVG from "../../assets/images/svg/social/instagram-gray.svg";
import YoutubeSVG from "../../assets/images/svg/social/youtube.svg";
import YoutubeGraySVG from "../../assets/images/svg/social/youtube-gray.svg";
import ZaloSVG from "../../assets/images/svg/social/zalo.svg";
import ZaloGraySVG from "../../assets/images/svg/social/zalo-gray.svg";

const Header = () => {
   const [isHeaderActive, setIsHeaderActive] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         const banner = document.querySelector(".banner");
         const bannerH = banner ? banner.offsetHeight : 0;
         const scrollY = window.scrollY;

         if (scrollY >= bannerH) {
            setIsHeaderActive(true);
         } else {
            setIsHeaderActive(false);
         }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []); 

   return (
      <Fragment>
         <header className={isHeaderActive ? 'active' : ''}>
            <div className="wrapper d-flex justify-content-between align-items-center">
               <Link to="/" className="header__logo">
                  Logo
               </Link>

               <ul className="header__nav d-flex justify-content-between align-items-center">
                  <li className="header__nav-link">
                     <Link to="/about">Giới Thiệu</Link>
                  </li>
                  <li className="header__nav-link">
                     <Link to="/work">Công Việc</Link>
                  </li>
                  <li className="header__nav-link">
                     <Link to="/hiring">Tuyển Dụng</Link>
                  </li>
                  <li className="header__nav-link">
                     <Link to="/contact">Liên Hệ</Link>
                  </li>
               </ul>
            </div>
         </header>

         {/* <!-- Navbar mobile --> */}
         <nav class="mobile-nav d-md-none">
            <div class="navbar d-flex align-items-center justify-content-around">
               <Link
                  class="navbar__item active d-flex flex-column justify-content-between align-items-center"
                  id="home-icon"
                  to="/"
               >
                  <Fragment>
                     <Image src={HomeIcon} alt="home-icon" />
                     <div class="navbar__item-text">Home</div>
                  </Fragment>
               </Link>
               <div class="navbar__item d-flex flex-column justify-content-between align-items-center">
                  <Image src={PhoneIcon} alt="phone-icon" />
                  <div class="navbar__item-text">Call</div>
               </div>
               <div class="navbar__item nav-menu d-flex justify-content-center align-items-center">
                  <div class="navbar__item-btn d-flex justify-content-center align-items-center">
                     <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <rect x="7.27271" width="1.45455" height="16" />
                        <rect
                           x="16"
                           y="7.27274"
                           width="1.45455"
                           height="16"
                           transform="rotate(90 16 7.27274)"
                        />
                     </svg>
                  </div>
                  <div class="navbar__item-text more">More</div>
               </div>
               <div class="navbar__item d-flex flex-column justify-content-between align-items-center">
                  <Image src={MessageIcon} alt="message-icon" />
                  <div class="navbar__item-text">Form</div>
               </div>
               <div class="navbar__item d-flex flex-column justify-content-between align-items-center">
                  <Image src={LinkIcon} alt="link-icon" />
                  <div class="navbar__item-text">Social</div>
               </div>

               <div class="call navbar__form">
                  <Link to="" class="phone d-flex flex-column">
                     <Fragment>
                        <div class="label">
                           <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <mask
                                 id="mask0_1713_8282"
                                 style={{ maskType: "alpha" }}
                                 maskUnits="userSpaceOnUse"
                                 x="0"
                                 y="0"
                                 width="16"
                                 height="16"
                              >
                                 <rect width="16" height="16" fill="#D9D9D9" />
                              </mask>
                              <g mask="url(#mask0_1713_8282)">
                                 <path
                                    d="M11.0011 6.71256V4.9989H9.28744V3.71366H11.0011V2H12.2863V3.71366H14V4.9989H12.2863V6.71256H11.0011ZM13.0539 13.9778C11.614 13.8707 10.2484 13.5166 8.9572 12.9157C7.66601 12.3147 6.50869 11.5025 5.48525 10.479C4.46182 9.45561 3.65557 8.30127 3.0665 7.01602C2.47743 5.73078 2.12339 4.36818 2.00438 2.92823C1.98058 2.67832 2.05369 2.46114 2.2237 2.27668C2.39369 2.09223 2.6062 2 2.86121 2H5.2889C5.4912 2 5.66674 2.06248 5.81549 2.18743C5.96425 2.31239 6.06242 2.47007 6.11003 2.66047L6.53844 4.55264C6.56224 4.70734 6.55332 4.8561 6.51167 4.9989C6.47001 5.14171 6.40159 5.26071 6.30638 5.35592L4.57487 7.10528C4.81288 7.55749 5.08659 7.99186 5.396 8.40837C5.70541 8.82489 6.05034 9.21751 6.43078 9.58623C6.78817 9.94343 7.16916 10.2738 7.57378 10.5772C7.97839 10.8807 8.40681 11.1514 8.85902 11.3894L10.6262 9.67577C10.7214 9.58056 10.8404 9.51214 10.9832 9.47048C11.126 9.42883 11.2748 9.41991 11.4295 9.44371L13.3395 9.85427C13.5418 9.91377 13.7025 10.0179 13.8215 10.1667C13.9405 10.3154 14 10.4909 14 10.6933V13.1209C14 13.3759 13.9048 13.5885 13.7144 13.7585C13.524 13.9285 13.3038 14.0016 13.0539 13.9778ZM3.9858 5.85573L5.23535 4.60619L4.92903 3.28524H3.32533C3.38483 3.73746 3.46813 4.1748 3.57524 4.59727C3.68234 5.01973 3.8192 5.43922 3.9858 5.85573ZM10.1264 11.9963C10.5441 12.1658 10.9699 12.3004 11.4036 12.4002C11.8374 12.4999 12.2744 12.5795 12.7148 12.639V11.0324L11.376 10.7468L10.1264 11.9963Z"
                                    fill="#F8F9FA"
                                 />
                              </g>
                           </svg>
                           Gọi ngay
                        </div>
                        <div class="text">+84 988 081 135</div>
                     </Fragment>
                  </Link>

                  <Link to="" class="zalo d-flex flex-column">
                     <Fragment>
                        <div class="label">
                           <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M12.22 13.9533H3.80671C2.81338 13.9533 2.00671 13.1067 2.00671 12.06V3.89333C2.00671 2.84667 2.81338 2 3.80671 2H12.2267C13.22 2 14.0267 2.84667 14.0267 3.89333V12.06C14.0267 13.1067 13.2134 13.9533 12.2267 13.9533H12.22ZM3.80671 2.28C2.96005 2.28 2.27338 3.00667 2.27338 3.89333V12.06C2.27338 12.9467 2.96005 13.6733 3.80671 13.6733H12.2267C13.0734 13.6733 13.76 12.9467 13.76 12.06V3.89333C13.76 3.00667 13.0734 2.28 12.2267 2.28H3.80671Z"
                                 fill="#F8F9FA"
                              />
                              <path
                                 d="M5.63339 14.02C4.91339 14.02 4.19339 14.0467 3.47339 14.02C2.62672 13.9867 1.97339 13.24 1.97339 12.34C1.97339 9.46001 1.97339 6.57334 1.97339 3.69334C1.97339 2.70001 2.70006 2.01334 3.54672 2.00001C4.43339 1.97334 5.32006 2.00001 6.20006 2.00001C6.22006 2.00001 6.23339 2.00001 6.24672 2.02001C6.24672 2.06668 6.19339 2.07334 6.16005 2.09334C5.64672 2.42001 5.17339 2.80668 4.77339 3.28001C4.11339 4.06001 3.65339 4.96668 3.50006 6.01334C3.22672 7.86668 3.77339 9.43334 5.02006 10.74C5.24006 10.9733 5.26672 11.1533 5.09339 11.4733C4.88005 11.8533 4.56006 12.1067 4.21339 12.3467C4.17339 12.3733 4.14006 12.3933 4.10672 12.4267C4.05339 12.4733 4.08672 12.5067 4.13339 12.52C4.14672 12.5467 4.15339 12.5733 4.17339 12.5933C4.47339 12.88 4.76006 13.1733 5.06006 13.4667C5.20006 13.6 5.33339 13.74 5.47339 13.88C5.52672 13.9267 5.61339 13.9467 5.63339 14.04V14.02Z"
                                 fill="#F8F9FA"
                              />
                              <path
                                 d="M5.6333 14.0133C5.61997 13.92 5.52663 13.9 5.4733 13.84C5.33997 13.7 5.19997 13.56 5.05997 13.4267C4.75997 13.14 4.47997 12.84 4.1733 12.5533C4.1533 12.5333 4.14663 12.5067 4.1333 12.48C4.80663 12.6133 5.45997 12.52 6.10663 12.3133C6.32663 12.24 6.53997 12.18 6.75997 12.12C6.9133 12.08 7.05997 12.0867 7.2133 12.14C8.87997 12.7467 10.5266 12.6933 12.1466 11.94C12.8133 11.6333 13.4066 11.2067 13.92 10.6667C13.9466 10.64 13.9666 10.6 14.0133 10.5933C14.0333 10.6333 14.0266 10.6733 14.0266 10.7133V12.3267C14.0266 13.26 13.3266 14.0067 12.4333 14.0133C11.4866 14.0133 10.54 14.0133 9.5933 14.0133H5.7933C5.73997 14.0267 5.68663 14.0133 5.6333 14.0133Z"
                                 fill="#F8F9FA"
                              />
                              <path
                                 d="M6.04003 7.83334H7.18003C7.3867 7.83334 7.50003 7.92667 7.52003 8.1C7.54003 8.32 7.4267 8.46 7.20003 8.46667C6.77337 8.46667 6.3467 8.46667 5.9267 8.46667C5.80003 8.46667 5.68003 8.46667 5.56003 8.46667C5.4067 8.45334 5.26003 8.42667 5.1867 8.26C5.11337 8.09334 5.1667 7.94667 5.2667 7.80667C5.67337 7.26 6.08003 6.72 6.4867 6.18C6.5067 6.15334 6.53337 6.11334 6.56003 6.08667C6.54003 6.04 6.50003 6.06 6.4667 6.06H5.61337C5.5467 6.06 5.4867 6.06 5.42003 6.03334C5.29337 6 5.2067 5.88667 5.2067 5.75334C5.2067 5.62 5.2867 5.51334 5.41337 5.46667C5.47337 5.44667 5.54003 5.44 5.6067 5.44H7.01337C7.10003 5.44 7.18003 5.44 7.26003 5.46667C7.43337 5.53334 7.51337 5.70667 7.4467 5.88667C7.3867 6.04667 7.28003 6.18 7.18003 6.31334C6.83337 6.77334 6.49337 7.23334 6.1467 7.68667C6.11337 7.71334 6.09337 7.75334 6.0467 7.81334L6.04003 7.83334Z"
                                 fill="#F8F9FA"
                              />
                              <path
                                 d="M9.08672 6.38C9.14672 6.3 9.21339 6.21334 9.32672 6.19334C9.53339 6.15334 9.72672 6.28667 9.73339 6.51334C9.73339 7.06667 9.73339 7.62 9.73339 8.16667C9.73339 8.31334 9.64006 8.43334 9.51339 8.48C9.38006 8.52667 9.24006 8.49334 9.14672 8.37334C9.10006 8.31334 9.08672 8.3 9.02006 8.35334C8.78006 8.55334 8.51339 8.59334 8.22006 8.49334C7.75339 8.33334 7.56006 7.94667 7.50672 7.48C7.45339 6.97334 7.61339 6.54 8.04006 6.27334C8.39339 6.05334 8.76006 6.07334 9.08672 6.37334V6.38ZM8.16006 7.38667C8.16006 7.48 8.19339 7.61334 8.27339 7.72C8.44006 7.96 8.79339 7.96 8.96006 7.72C9.10672 7.51334 9.10672 7.16 8.96006 6.95334C8.88006 6.84 8.78006 6.78667 8.64672 6.77334C8.35339 6.76 8.14672 6.99334 8.15339 7.38667H8.16006Z"
                                 fill="#F8F9FA"
                              />
                              <path
                                 d="M10.9134 7.40666C10.8934 6.69332 11.34 6.16666 11.9667 6.14666C12.64 6.11999 13.1267 6.59999 13.1467 7.28666C13.1667 7.98666 12.76 8.47999 12.1334 8.54666C11.4534 8.61999 10.9 8.09332 10.9134 7.40666ZM11.5734 7.33332C11.5734 7.47332 11.6 7.60666 11.6867 7.71999C11.8534 7.95999 12.2 7.95999 12.3667 7.71999C12.52 7.51332 12.52 7.15332 12.3667 6.93999C12.2867 6.82666 12.1867 6.77332 12.0534 6.76666C11.7734 6.75332 11.5667 6.97999 11.5667 7.32666L11.5734 7.33332Z"
                                 fill="#F8F9FA"
                              />
                              <path
                                 d="M10.68 6.86V8.14C10.68 8.38 10.4734 8.54666 10.2534 8.48666C10.12 8.45333 10.02 8.3 10.02 8.13333V5.55333C10.02 5.34 10.1467 5.20667 10.3467 5.20667C10.5467 5.20667 10.68 5.34 10.68 5.56C10.68 5.99333 10.68 6.42667 10.68 6.86Z"
                                 fill="#F8F9FA"
                              />
                           </svg>
                           Zalo
                        </div>
                        <div class="text">+84 988 081 135</div>
                     </Fragment>
                  </Link>
               </div>

               <div class="menu navbar__form d-flex justify-content-center align-items-center flex-column">
                  <Link to="/about" class="menu__link">
                     Giới thiệu
                  </Link>
                  <Link to="/work" class="menu__link">
                     Công việc
                  </Link>
                  <Link to="/hiring" class="menu__link">
                     Tuyển dụng
                  </Link>
                  <Link to="/contact" class="menu__link">
                     Liên hệ
                  </Link>
               </div>

               <div class="contact navbar__form">
                  <div class="rectangle-100 py-0">
                     <form action="#" class="contact__form">
                        <div class="contact__form-header d-md-none text-center">
                           <h3 class="heading">Hãy để lại thông tin của bạn</h3>
                           <p class="sub-heading">
                              Chúng tôi sẽ liên lạc và giải quyết vấn đề của bạn
                           </p>
                        </div>

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

                           <div
                              class="category__services"
                              id="category-service"
                           >
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
                           <Link to="" class="social__link">
                              <Fragment>
                                 <span class="social__link-icon icon-gray">
                                    <Image
                                       src={InstagramGraySVG}
                                       alt="social icon gray"
                                    />
                                 </span>
                                 <span class="social__link-icon">
                                    <Image
                                       src={InstagramSVG}
                                       alt="social icon"
                                    />
                                 </span>
                              </Fragment>
                           </Link>
                           <Link href="" class="social__link">
                              <Fragment>
                                 <span class="social__link-icon icon-gray">
                                    <Image
                                       src={FacebookGraySVG}
                                       alt="social icon gray"
                                    />
                                 </span>
                                 <span class="social__link-icon">
                                    <Image
                                       src={FacebookSVG}
                                       alt="social icon"
                                    />
                                 </span>
                              </Fragment>
                           </Link>
                           <Link to="" class="social__link">
                              <Fragment>
                                 <span class="social__link-icon icon-gray">
                                    <Image
                                       src={YoutubeGraySVG}
                                       alt="social icon gray"
                                    />
                                 </span>
                                 <span class="social__link-icon">
                                    <Image src={YoutubeSVG} alt="social icon" />
                                 </span>
                              </Fragment>
                           </Link>
                           <Link to="" class="social__link">
                              <Fragment>
                                 <span class="social__link-icon icon-gray">
                                    <Image
                                       src={ZaloGraySVG}
                                       alt="social icon gray"
                                    />
                                 </span>
                                 <span class="social__link-icon">
                                    <Image src={ZaloSVG} alt="social icon" />
                                 </span>
                              </Fragment>
                           </Link>
                        </div>
                     </form>
                  </div>
               </div>

               <div class="social navbar__form d-flex flex-column">
                  <Link
                     to=""
                     class="d-flex align-items-center justify-content-start"
                  >
                     <Fragment>
                        <svg
                           width="16"
                           height="17"
                           viewBox="0 0 16 17"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M11.1933 1.78334H4.80666C2.99999 1.78334 1.53333 3.25001 1.53333 5.05667V11.4433C1.53333 13.25 2.99999 14.7167 4.80666 14.7167H8.99999H11.1933C13 14.7167 14.4667 13.25 14.4667 11.4433V5.05667C14.4667 3.25001 13 1.78334 11.1933 1.78334ZM13.3733 11.4433C13.3733 12.6433 12.3933 13.6233 11.1933 13.6233H8.99999V10.0967H10.4867L10.7667 8.25001H8.99333V7.05001C8.99333 6.54334 9.23999 6.05001 10.0333 6.05001H10.84V4.47667C10.84 4.47667 10.1067 4.35001 9.40666 4.35001C7.94666 4.35001 6.99333 5.23667 6.99333 6.83667V8.24334H5.37333V10.09H6.99333V13.6167H4.79999C3.59999 13.6167 2.61999 12.6367 2.61999 11.4367V5.05667C2.61999 3.85667 3.59999 2.87667 4.79999 2.87667H11.1867C12.3867 2.87667 13.3667 3.85667 13.3667 5.05667V11.4433H13.3733Z"
                              fill="#F8F9FA"
                           />
                        </svg>
                        Facebook
                     </Fragment>
                  </Link>
                  <Link
                     to=""
                     class="d-flex align-items-center justify-content-start"
                  >
                     <Fragment>
                        <svg
                           width="16"
                           height="17"
                           viewBox="0 0 16 17"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M11.2666 4.78333C10.8666 4.78333 10.54 5.10999 10.54 5.50999C10.54 5.90999 10.8666 6.23666 11.2666 6.23666C11.6666 6.23666 11.9933 5.90999 11.9933 5.50999C11.9933 5.10999 11.6666 4.78333 11.2666 4.78333Z"
                              fill="#F8F9FA"
                           />
                           <path
                              d="M8.05331 5.70999C6.37997 5.70999 5.01331 7.06999 5.01331 8.74999C5.01331 10.43 6.37997 11.79 8.05331 11.79C9.72664 11.79 11.0933 10.4233 11.0933 8.74999C11.0933 7.07666 9.72664 5.70999 8.05331 5.70999ZM8.05331 10.6967C6.97997 10.6967 6.10664 9.82332 6.10664 8.74999C6.10664 7.67666 6.97997 6.80332 8.05331 6.80332C9.12664 6.80332 9.99997 7.67666 9.99997 8.74999C9.99997 9.82332 9.12664 10.6967 8.05331 10.6967Z"
                              fill="#F8F9FA"
                           />
                           <path
                              d="M10.4666 14.9233H5.53998C3.49331 14.9233 1.83331 13.2633 1.83331 11.2167V6.29001C1.83331 4.24334 3.49331 2.58334 5.53998 2.58334H10.4666C12.5133 2.58334 14.1733 4.24334 14.1733 6.29001V11.2167C14.1733 13.2633 12.5133 14.9233 10.4666 14.9233ZM5.53331 3.74334C4.12665 3.74334 2.98665 4.88334 2.98665 6.29001V11.2167C2.98665 12.6233 4.12665 13.7633 5.53331 13.7633H10.46C11.8666 13.7633 13.0066 12.6233 13.0066 11.2167V6.29001C13.0066 4.88334 11.8666 3.74334 10.46 3.74334H5.53331Z"
                              fill="#F8F9FA"
                           />
                        </svg>
                        Instagram
                     </Fragment>
                  </Link>
                  <Link
                     to=""
                     class="d-flex align-items-center justify-content-start"
                  >
                     <Fragment>
                        <svg
                           width="16"
                           height="17"
                           viewBox="0 0 16 17"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M11.2933 1.58334H4.70665C2.83998 1.58334 1.33331 3.09668 1.33331 4.95668V11.5367C1.33331 13.4033 2.84665 14.91 4.70665 14.91H11.2866C13.1533 14.91 14.66 13.3967 14.66 11.5367V4.95668C14.66 3.09001 13.1466 1.58334 11.2866 1.58334H11.2933ZM13.5733 11.5433C13.5733 12.7967 12.5533 13.8233 11.2933 13.8233H4.70665C3.45331 13.8233 2.42665 12.8033 2.42665 11.5433V4.95668C2.42665 3.70334 3.44665 2.67668 4.70665 2.67668H11.2866C12.54 2.67668 13.5666 3.69668 13.5666 4.95668V11.5367L13.5733 11.5433Z"
                              fill="#F8F9FA"
                           />
                           <path
                              d="M10.2733 5.86334H5.57334C4.88001 5.86334 4.32001 6.42334 4.32001 7.11668V9.65668C4.32001 10.35 4.88001 10.91 5.57334 10.91H10.2733C10.9667 10.91 11.5267 10.35 11.5267 9.65668V7.11668C11.5267 6.42334 10.9667 5.86334 10.2733 5.86334ZM9.14667 8.52334L7.33334 9.42334C7.26001 9.46334 7.02001 9.41001 7.02001 9.33001V7.49001C7.02001 7.41001 7.26667 7.35668 7.33334 7.39668L9.06667 8.34334C9.14001 8.38334 9.21334 8.49001 9.14001 8.53001L9.14667 8.52334Z"
                              fill="#F8F9FA"
                           />
                        </svg>
                        Youtube
                     </Fragment>
                  </Link>
                  <Link
                     to=""
                     class="d-flex align-items-center justify-content-start"
                  >
                     <Fragment>
                        <svg
                           width="16"
                           height="17"
                           viewBox="0 0 16 17"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M12.22 14.7033H3.80665C2.81332 14.7033 2.00665 13.8567 2.00665 12.81V4.64333C2.00665 3.59667 2.81332 2.75 3.80665 2.75H12.2267C13.22 2.75 14.0267 3.59667 14.0267 4.64333V12.81C14.0267 13.8567 13.2133 14.7033 12.2267 14.7033H12.22ZM3.80665 3.03C2.95999 3.03 2.27332 3.75667 2.27332 4.64333V12.81C2.27332 13.6967 2.95999 14.4233 3.80665 14.4233H12.2267C13.0733 14.4233 13.76 13.6967 13.76 12.81V4.64333C13.76 3.75667 13.0733 3.03 12.2267 3.03H3.80665Z"
                              fill="#F8F9FA"
                           />
                           <path
                              d="M5.63333 14.77C4.91333 14.77 4.19333 14.7967 3.47333 14.77C2.62666 14.7367 1.97333 13.99 1.97333 13.09C1.97333 10.21 1.97333 7.32334 1.97333 4.44334C1.97333 3.45001 2.69999 2.76334 3.54666 2.75001C4.43333 2.72334 5.31999 2.75001 6.19999 2.75001C6.21999 2.75001 6.23333 2.75001 6.24666 2.77001C6.24666 2.81668 6.19333 2.82334 6.15999 2.84334C5.64666 3.17001 5.17333 3.55668 4.77333 4.03001C4.11333 4.81001 3.65333 5.71668 3.49999 6.76334C3.22666 8.61668 3.77333 10.1833 5.01999 11.49C5.23999 11.7233 5.26666 11.9033 5.09333 12.2233C4.87999 12.6033 4.55999 12.8567 4.21333 13.0967C4.17333 13.1233 4.13999 13.1433 4.10666 13.1767C4.05333 13.2233 4.08666 13.2567 4.13333 13.27C4.14666 13.2967 4.15333 13.3233 4.17333 13.3433C4.47333 13.63 4.75999 13.9233 5.05999 14.2167C5.19999 14.35 5.33333 14.49 5.47333 14.63C5.52666 14.6767 5.61333 14.6967 5.63333 14.79V14.77Z"
                              fill="#F8F9FA"
                           />
                           <path
                              d="M5.63336 14.7633C5.62003 14.67 5.5267 14.65 5.47336 14.59C5.34003 14.45 5.20003 14.31 5.06003 14.1767C4.76003 13.89 4.48003 13.59 4.17336 13.3033C4.15336 13.2833 4.1467 13.2567 4.13336 13.23C4.8067 13.3633 5.46003 13.27 6.1067 13.0633C6.32669 12.99 6.54003 12.93 6.76003 12.87C6.91336 12.83 7.06003 12.8367 7.21336 12.89C8.88003 13.4967 10.5267 13.4433 12.1467 12.69C12.8134 12.3833 13.4067 11.9567 13.92 11.4167C13.9467 11.39 13.9667 11.35 14.0134 11.3433C14.0334 11.3833 14.0267 11.4233 14.0267 11.4633V13.0767C14.0267 14.01 13.3267 14.7567 12.4334 14.7633C11.4867 14.7633 10.54 14.7633 9.59336 14.7633H5.79336C5.74003 14.7767 5.6867 14.7633 5.63336 14.7633Z"
                              fill="#F8F9FA"
                           />
                           <path
                              d="M6.03997 8.58334H7.17997C7.38664 8.58334 7.49997 8.67667 7.51997 8.85C7.53997 9.07 7.42664 9.21 7.19997 9.21667C6.7733 9.21667 6.34664 9.21667 5.92664 9.21667C5.79997 9.21667 5.67997 9.21667 5.55997 9.21667C5.40664 9.20334 5.25997 9.17667 5.18664 9.01C5.1133 8.84334 5.16664 8.69667 5.26664 8.55667C5.6733 8.01 6.07997 7.47 6.48664 6.93C6.50664 6.90334 6.5333 6.86334 6.55997 6.83667C6.53997 6.79 6.49997 6.81 6.46664 6.81H5.6133C5.54664 6.81 5.48664 6.81 5.41997 6.78334C5.2933 6.75 5.20664 6.63667 5.20664 6.50334C5.20664 6.37 5.28664 6.26334 5.4133 6.21667C5.4733 6.19667 5.53997 6.19 5.60664 6.19H7.0133C7.09997 6.19 7.17997 6.19 7.25997 6.21667C7.4333 6.28334 7.5133 6.45667 7.44664 6.63667C7.38664 6.79667 7.27997 6.93 7.17997 7.06334C6.8333 7.52334 6.4933 7.98334 6.14664 8.43667C6.1133 8.46334 6.0933 8.50334 6.04664 8.56334L6.03997 8.58334Z"
                              fill="#F8F9FA"
                           />
                           <path
                              d="M9.08666 7.13C9.14666 7.05 9.21333 6.96334 9.32666 6.94334C9.53333 6.90334 9.72666 7.03667 9.73333 7.26334C9.73333 7.81667 9.73333 8.37 9.73333 8.91667C9.73333 9.06334 9.64 9.18334 9.51333 9.23C9.38 9.27667 9.24 9.24334 9.14666 9.12334C9.1 9.06334 9.08666 9.05 9.02 9.10334C8.78 9.30334 8.51333 9.34334 8.22 9.24334C7.75333 9.08334 7.56 8.69667 7.50666 8.23C7.45333 7.72334 7.61333 7.29 8.04 7.02334C8.39333 6.80334 8.76 6.82334 9.08666 7.12334V7.13ZM8.16 8.13667C8.16 8.23 8.19333 8.36334 8.27333 8.47C8.44 8.71 8.79333 8.71 8.96 8.47C9.10666 8.26334 9.10666 7.91 8.96 7.70334C8.88 7.59 8.78 7.53667 8.64666 7.52334C8.35333 7.51 8.14666 7.74334 8.15333 8.13667H8.16Z"
                              fill="#F8F9FA"
                           />
                           <path
                              d="M10.9133 8.15666C10.8933 7.44332 11.34 6.91666 11.9666 6.89666C12.64 6.86999 13.1266 7.34999 13.1466 8.03666C13.1666 8.73666 12.76 9.22999 12.1333 9.29666C11.4533 9.36999 10.9 8.84332 10.9133 8.15666ZM11.5733 8.08332C11.5733 8.22332 11.6 8.35666 11.6866 8.46999C11.8533 8.70999 12.2 8.70999 12.3666 8.46999C12.52 8.26332 12.52 7.90332 12.3666 7.68999C12.2866 7.57666 12.1866 7.52332 12.0533 7.51666C11.7733 7.50332 11.5666 7.72999 11.5666 8.07666L11.5733 8.08332Z"
                              fill="#F8F9FA"
                           />
                           <path
                              d="M10.68 7.61V8.89C10.68 9.13 10.4734 9.29666 10.2534 9.23666C10.12 9.20333 10.02 9.05 10.02 8.88333V6.30333C10.02 6.09 10.1467 5.95667 10.3467 5.95667C10.5467 5.95667 10.68 6.09 10.68 6.31C10.68 6.74333 10.68 7.17667 10.68 7.61Z"
                              fill="#F8F9FA"
                           />
                        </svg>
                        Zalo
                     </Fragment>
                  </Link>
               </div>
            </div>
         </nav>
         {/* <!-- End: Navbar mobile --> */}
      </Fragment>
   );
};

export default Header;
