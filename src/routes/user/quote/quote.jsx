import "./quote.css";
import { Fragment, useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import ContactForm from "../../../components/contact-form/contact-form";
import RamenImage from "../../../assets/images/others/ramen.png";
import OfficeBackground from "../../../assets/images/others/ex-office.jpg";
import BasicImage from "../../../assets/images/others/basic.png";
import BusinessImage from "../../../assets/images/others/business.png";
import OmiPlusImage from "../../../assets/images/others/omni-plus.png";
import UncheckSVG from "../../../assets/images/svg/unchecked.svg";
import CheckSVG from "../../../assets/images/svg/checked.svg";
import ContactIcon1 from "../../../assets/images/contact/contact_icon1.png";
import ContactIcon2 from "../../../assets/images/contact/contact_icon2.png";
import BannerQuoteImage from "../../../assets/images/others/banner-quote.png";

const Quote = () => {
   const [banner, setBanner] = useState({});
   const [services, setServices] = useState({});

   useEffect(() => {
      axios.get("/api/info/services").then(({ data }) => {
         setServices(data.services.serviceQuotes);
      });
   });

   return (
      <Fragment>
         {/* <!-- Banner --> */}
         <div className={`quote-banner banner banner-image-active`}>
            <div className="banner__bg">
               <div className="banner__bg-eclipse1"></div>
               <div className="banner__bg-eclipse2"></div>
               <div className="banner__bg-eclipse3"></div>
            </div>

            <Image className="banner__img" src={BannerQuoteImage} />

            <div class="banner__text">
               <div class="banner__text-top">
                  <div class="text-stroke text-center"></div>
                  <div class="text-uppercase text-center">
                     Chúng tôi làm thiết kế <br /> Sáng tạo không ngừng nghỉ
                  </div>
               </div>

               <div class="banner__text-bot">
                  <div class="text-uppercase text-center">
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum is simply dummy text of
                     the printing and typesetting industry.
                  </div>
                  <div class="text-stroke text-center"></div>
               </div>
            </div>
         </div>
         {/* <!-- End: Banner --> */}

         {/* <!-- Story --> */}
         <div className="wrapper wrapper-top wrapper-bottom story">
            <div className="wrapper__header">
               <h4 className="wrapper__header-sub--heading text-uppercase">
                  The story of DVP
               </h4>
               <h1 className="wrapper__header-heading text-capitalize">
                  Các gói dịch vụ
               </h1>
            </div>

            <div className="wrapper-flex">
               <div className="rectangle-100 rectangle-pc-50 story__content-text">
                  <p>
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s, when an unknown
                     printer took a galley of type and scrambled it to make a
                     type specimen book. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s, when an unknown
                     printer took a galley of type and scrambled it to make a
                     type specimen book.
                  </p>
                  <p>
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s, when an unknown
                     printer took a galley of type and scrambled it to make a
                     type specimen book.
                  </p>
                  <p>
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s, when an unknown
                     printer took a galley of type and scrambled it to make a
                     type specimen book.
                  </p>
               </div>

               <div className="rectangle-100 rectangle-pc-50 story__content-img">
                  <Image src={OfficeBackground} alt="office" />
               </div>
            </div>
         </div>
         {/* <!-- End: Story --> */}

         {/* <!-- Quote --> */}
         <div className="wrapper wrapper-top wrapper-bottom quote">
            <div className="quote__nav">
               <div className="d-flex flex-nowrap quote__nav-wrap">
                  <div className="quote__nav-item active">
                     Thiết kế logo nhận diện
                  </div>
                  <div className="quote__nav-item">
                     Tư vấn xây dựng branding
                  </div>
                  <div className="quote__nav-item">Văn phòng ĐT thiết ké</div>
                  <div className="quote__nav-item">
                     Thiết kế website chuẩn SEO
                  </div>
                  <div className="quote__nav-item">Media fullstack</div>
                  <div className="quote__nav-item">POD</div>
               </div>
            </div>

            <div className="quote__content">
               <div className="wrapper-flex justify-content-center">
                  <div className="rectangle-100 rectangle-tab-50 order-1 rectangle-pc-25 quote__content-item">
                     <div className="pack">
                        <div className="pack__header d-flex justify-content-center flex-wrap">
                           <Image src={BasicImage} alt="icon pack" />
                           <div className="pack__header-info">
                              <h4>Gói Basic</h4>
                              <span className="d-flex price">
                                 <p className="mb-0">Từ</p>
                                 <p className="mb-0">3.000.000</p>
                                 <label>vnd</label>
                              </span>
                           </div>
                           <div className="pack__header-text">
                              Lựa chọn thư viện có sẵn website giới thiệu doanh
                              nghiệp
                           </div>
                        </div>
                        <div className="pack__content">
                           <ul>
                              <li>
                                 <div className="icon"></div>Lorem ipsum dolor
                                 sit amet consectetur adipisicing elit.
                              </li>
                              <li>
                                 <div className="icon"></div>Lorem ipsum dolor
                                 sit amet
                              </li>
                              <li>
                                 <div className="icon"></div>Lorem ipsum dolor
                                 sit amet
                              </li>
                              <li>
                                 <div className="icon"></div>Lorem ipsum dolor
                                 sit amet
                              </li>
                              <li>
                                 <div className="icon"></div>Lorem ipsum dolor
                                 sit amet
                              </li>
                              <li>
                                 <span className="line"></span>
                              </li>
                              <li>
                                 <span className="line"></span>
                              </li>
                              <li>
                                 <span className="line"></span>
                              </li>
                           </ul>
                        </div>
                        <div className="pack__btn">
                           <Link to="#quote-details">Xem thêm</Link>
                        </div>
                     </div>
                  </div>

                  <div className="rectangle-100 rectangle-tab-50 order-2 order-md-3 order-xxl-2 rectangle-pc-25 quote__content-item">
                     <div className="pack">
                        <div className="pack__header d-flex justify-content-center flex-wrap">
                           <Image src={BusinessImage} alt="icon pack" />
                           <div className="pack__header-info">
                              <h4>Gói business</h4>
                              <span className="d-flex price">
                                 <p className="mb-0">Từ</p>
                                 <p className="mb-0">12.000.000</p>
                                 <label>vnd</label>
                              </span>
                           </div>
                           <div className="pack__header-text">
                              Lựa chọn thư viện có sẵn website giới thiệu doanh
                              nghiệp
                           </div>
                        </div>
                        <div className="pack__content">
                           <ul>
                              <li>
                                 <div className="icon"></div>Lorem ipsum dolor
                                 sit amet consectetur adipisicing elit.
                              </li>
                              <li>
                                 <div className="icon"></div>Lorem ipsum dolor
                                 sit amet
                              </li>
                              <li>
                                 <div className="icon"></div>Lorem ipsum dolor
                                 sit amet
                              </li>
                              <li>
                                 <div className="icon"></div>Lorem ipsum dolor
                                 sit amet
                              </li>
                              <li>
                                 <div className="icon"></div>Lorem ipsum dolor
                                 sit amet
                              </li>
                              <li>
                                 <div className="icon"></div>Lorem ipsum dolor
                                 sit amet
                              </li>
                              <li>
                                 <span className="line"></span>
                              </li>
                              <li>
                                 <span className="line"></span>
                              </li>
                              <li>
                                 <span className="line"></span>
                              </li>
                           </ul>
                        </div>
                        <div className="pack__btn">
                           <Link to="#quote-details">Xem thêm</Link>
                        </div>
                     </div>
                  </div>

                  <div className="rectangle-100 rectangle-tab-50 order-3 order-md-2 order-xxl-3 rectangle-pc-25 quote__content-item">
                     <div className="pack">
                        <div className="pack__header d-flex justify-content-center flex-wrap">
                           <Image src={OmiPlusImage} alt="icon pack" />
                           <div className="pack__header-info">
                              <h4>Gói Omni plus</h4>
                              <span className="d-flex price">
                                 <p className="mb-0">Từ</p>
                                 <p className="mb-0">20.000.000</p>
                                 <label>vnd</label>
                              </span>
                           </div>
                           <div className="pack__header-text">
                              Lựa chọn thư viện có sẵn website giới thiệu doanh
                              nghiệp
                           </div>
                        </div>
                        <div className="pack__content">
                           <ul>
                              <li>
                                 <div className="icon"></div>Lorem ipsum dolor
                                 sit amet consectetur adipisicing elit.
                              </li>
                              <li>
                                 <div className="icon"></div>Lorem ipsum dolor
                                 sit amet
                              </li>
                              <li>
                                 <div className="icon"></div>Lorem ipsum dolor
                                 sit amet
                              </li>
                              <li>
                                 <div className="icon"></div>Lorem ipsum dolor
                                 sit amet
                              </li>
                              <li>
                                 <div className="icon"></div>Lorem ipsum dolor
                                 sit amet
                              </li>
                              <li>
                                 <div className="icon"></div>Lorem ipsum dolor
                                 sit amet
                              </li>
                              <li>
                                 <div className="icon"></div>Lorem ipsum dolor
                                 sit amet
                              </li>
                              <li>
                                 <span className="line"></span>
                              </li>
                           </ul>
                        </div>
                        <div className="pack__btn">
                           <Link to="#quote-details">Xem thêm</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div id="quote-details" className="w-100"></div>

            <div className="quote__detail">
               <div className="quote__detail-heading">
                  Chi tiết cụ thể từng gói
               </div>
               <div className="quote__detail-des">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Praesentium, consequatur placeat perferendis consequuntur quos
                  ea voluptatibus repudiandae maxime, esse est, harum molestiae
                  enim atque consectetur eligendi. Praesentium dolorum quo
                  excepturi!
               </div>

               {/* <!-- Table on pc --> */}
               <div className="quote__detail-table d-none d-xl-block">
                  <div className="wrapper-flex table__header">
                     <div className="rectangle-25 py-0">
                        <div className="table__header-item h-100">Danh mục</div>
                     </div>
                     <div className="rectangle-25 py-0">
                        <div className="table__header-item h-100">
                           <Image src={BasicImage} alt="Basic" />
                           Gói Basic
                        </div>
                     </div>
                     <div className="rectangle-25 py-0">
                        <div className="table__header-item h-100">
                           <Image src={BusinessImage} alt="business" />
                           Gói Business
                        </div>
                     </div>
                     <div className="rectangle-25 py-0">
                        <div className="table__header-item h-100">
                           <Image src={OmiPlusImage} alt="omni-plus" />
                           Gói Omni Plus
                        </div>
                     </div>
                  </div>

                  <div className="wrapper-flex table__row">
                     <div className="rectangle-25 py-0">
                        <div className="table__row-item h-100">
                           Lorem ipsum dolor sit amet consectetur, adipisicing
                           elit.
                        </div>
                     </div>
                     <div className="rectangle-25 py-0">
                        <div className="table__row-item h-100">
                           Nội dung demo sẽ như này
                        </div>
                     </div>
                     <div className="rectangle-25 py-0">
                        <div className="table__row-item h-100 item-check">
                           <Image src={UncheckSVG} alt="unchecked" />
                        </div>
                     </div>
                     <div className="rectangle-25 py-0">
                        <div className="table__row-item h-100 item-check">
                           <Image src={CheckSVG} alt="checked" />
                        </div>
                     </div>
                  </div>

                  <div className="wrapper-flex table__row">
                     <div className="rectangle-25 py-0">
                        <div className="table__row-item h-100">
                           Lorem ipsum dolor sit amet consectetur, adipisicing
                           elit.
                        </div>
                     </div>
                     <div className="rectangle-25 py-0">
                        <div className="table__row-item h-100">
                           Lorem ipsum dolor sit amet consectetur, adipisicing
                           elit.
                        </div>
                     </div>
                     <div className="rectangle-25 py-0">
                        <div className="table__row-item h-100 item-check">
                           <Image src={CheckSVG} alt="checked" />
                        </div>
                     </div>
                     <div className="rectangle-25 py-0">
                        <div className="table__row-item h-100 item-check">
                           <Image src={UncheckSVG} alt="unchecked" />
                        </div>
                     </div>
                  </div>

                  <div className="wrapper-flex table__row">
                     <div className="rectangle-25 py-0">
                        <div className="table__row-item h-100">
                           Nội dung demo sẽ như này
                        </div>
                     </div>
                     <div className="rectangle-25 py-0">
                        <div className="table__row-item h-100 item-check">
                           <Image src={UncheckSVG} alt="unchecked" />
                        </div>
                     </div>
                     <div className="rectangle-25 py-0">
                        <div className="table__row-item h-100 item-check">
                           <Image src={CheckSVG} alt="checked" />
                        </div>
                     </div>
                     <div className="rectangle-25 py-0">
                        <div className="table__row-item h-100">
                           Nội dung demo sẽ như này
                        </div>
                     </div>
                  </div>

                  <div className="wrapper-flex table__row">
                     <div className="rectangle-25 py-0">
                        <div className="table__row-item h-100">
                           Lorem ipsum dolor sit amet consectetur, adipisicing
                           elit.
                        </div>
                     </div>
                     <div className="rectangle-25 py-0">
                        <div className="table__row-item h-100 item-check">
                           <Image src={UncheckSVG} alt="unchecked" />
                        </div>
                     </div>
                     <div className="rectangle-25 py-0">
                        <div className="table__row-item h-100 item-check">
                           <Image src={CheckSVG} alt="checked" />
                        </div>
                     </div>
                     <div className="rectangle-25 py-0">
                        <div className="table__row-item h-100">
                           Nội dung demo sẽ như này
                        </div>
                     </div>
                  </div>

                  <div className="wrapper-flex table__row">
                     <div className="rectangle-25 py-0">
                        <div className="table__row-item h-100">
                           Nội dung demo sẽ như này
                        </div>
                     </div>
                     <div className="rectangle-25 py-0">
                        <div className="table__row-item h-100 item-check">
                           <Image src={CheckSVG} alt="checked" />
                        </div>
                     </div>
                     <div className="rectangle-25 py-0">
                        <div className="table__row-item h-100 item-check">
                           <Image src={UncheckSVG} alt="unchecked" />
                        </div>
                     </div>
                     <div className="rectangle-25 py-0">
                        <div className="table__row-item h-100">
                           Lorem ipsum dolor sit amet consectetur, adipisicing
                           elit.
                        </div>
                     </div>
                  </div>

                  <div className="wrapper-flex table__row">
                     <div className="rectangle-25 py-0">
                        <div className="table__row-item h-100">
                           Nội dung demo sẽ như này
                        </div>
                     </div>
                     <div className="rectangle-25 py-0">
                        <div className="table__row-item h-100 item-check">
                           <Image src={CheckSVG} alt="checked" />
                        </div>
                     </div>
                     <div className="rectangle-25 py-0">
                        <div className="table__row-item h-100">
                           Lorem ipsum dolor sit amet consectetur, adipisicing
                           elit.
                        </div>
                     </div>
                     <div className="rectangle-25 py-0">
                        <div className="table__row-item h-100 item-check">
                           <Image src={UncheckSVG} alt="unchecked" />
                        </div>
                     </div>
                  </div>
               </div>
               {/* <!-- End: Table on pc --> */}

               {/* <!-- Table on mobile and tablet --> */}
               <div className="quote__detail-table mobile d-xl-none">
                  <div className="wrapper-flex table__header">
                     <div className="rectangle-33 py-0">
                        <div className="table__header-item active h-100">
                           Gói Basic
                        </div>
                     </div>
                     <div className="rectangle-33 p-0">
                        <div className="table__header-item h-100">
                           Gói Business
                        </div>
                     </div>
                     <div className="rectangle-33 py-0">
                        <div className="table__header-item h-100">
                           Gói Omni Plus
                        </div>
                     </div>
                  </div>

                  <div className="table-mobile">
                     <div className="table-wrap">
                        <div className="wrapper-flex table__row">
                           <div className="rectangle-50 py-0">
                              <div className="table__row-item h-100">
                                 Nội dung demo sẽ như này
                              </div>
                           </div>
                           <div className="rectangle-50 py-0">
                              <div className="table__row-item h-100 item-check">
                                 <Image src={CheckSVG} alt="checked" />
                              </div>
                           </div>
                        </div>

                        <div className="wrapper-flex table__row">
                           <div className="rectangle-50 py-0">
                              <div className="table__row-item h-100">
                                 Nội dung demo sẽ như này
                              </div>
                           </div>
                           <div className="rectangle-50 py-0">
                              <div className="table__row-item h-100">
                                 Nội dung demo sẽ như này
                              </div>
                           </div>
                        </div>

                        <div className="wrapper-flex table__row">
                           <div className="rectangle-50 py-0">
                              <div className="table__row-item h-100">
                                 Nội dung demo sẽ như này
                              </div>
                           </div>
                           <div className="rectangle-50 py-0">
                              <div className="table__row-item h-100 item-check">
                                 <Image src={UncheckSVG} alt="unchecked" />
                              </div>
                           </div>
                        </div>

                        <div className="wrapper-flex table__row">
                           <div className="rectangle-50 py-0">
                              <div className="table__row-item h-100">
                                 Nội dung demo sẽ như này
                              </div>
                           </div>
                           <div className="rectangle-50 py-0">
                              <div className="table__row-item h-100">
                                 Lorem ipsum dolor sit amet consectetur,
                                 adipisicing elit.
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="table-wrap">
                        <div className="wrapper-flex table__row">
                           <div className="rectangle-50 py-0">
                              <div className="table__row-item h-100">
                                 Nội dung demo sẽ như này
                              </div>
                           </div>
                           <div className="rectangle-50 py-0">
                              <div className="table__row-item h-100 item-check">
                                 <Image src={CheckSVG} alt="checked" />
                              </div>
                           </div>
                        </div>

                        <div className="wrapper-flex table__row">
                           <div className="rectangle-50 py-0">
                              <div className="table__row-item h-100">
                                 Nội dung demo sẽ như này
                              </div>
                           </div>
                           <div className="rectangle-50 py-0">
                              <div className="table__row-item h-100">
                                 Nội dung demo sẽ như này
                              </div>
                           </div>
                        </div>

                        <div className="wrapper-flex table__row">
                           <div className="rectangle-50 py-0">
                              <div className="table__row-item h-100">
                                 Nội dung demo sẽ như này
                              </div>
                           </div>
                           <div className="rectangle-50 py-0">
                              <div className="table__row-item h-100 item-check">
                                 <Image src={UncheckSVG} alt="unchecked" />
                              </div>
                           </div>
                        </div>

                        <div className="wrapper-flex table__row">
                           <div className="rectangle-50 py-0">
                              <div className="table__row-item h-100">
                                 Nội dung demo sẽ như này
                              </div>
                           </div>
                           <div className="rectangle-50 py-0">
                              <div className="table__row-item h-100">
                                 Lorem ipsum dolor sit amet consectetur,
                                 adipisicing elit.
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="table-wrap">
                        <div className="wrapper-flex table__row">
                           <div className="rectangle-50 py-0">
                              <div className="table__row-item h-100">
                                 Nội dung demo sẽ như này
                              </div>
                           </div>
                           <div className="rectangle-50 py-0">
                              <div className="table__row-item h-100 item-check">
                                 <Image src={CheckSVG} alt="checked" />
                              </div>
                           </div>
                        </div>

                        <div className="wrapper-flex table__row">
                           <div className="rectangle-50 py-0">
                              <div className="table__row-item h-100">
                                 Nội dung demo sẽ như này
                              </div>
                           </div>
                           <div className="rectangle-50 py-0">
                              <div className="table__row-item h-100">
                                 Nội dung demo sẽ như này
                              </div>
                           </div>
                        </div>

                        <div className="wrapper-flex table__row">
                           <div className="rectangle-50 py-0">
                              <div className="table__row-item h-100">
                                 Nội dung demo sẽ như này
                              </div>
                           </div>
                           <div className="rectangle-50 py-0">
                              <div className="table__row-item h-100 item-check">
                                 <Image src={UncheckSVG} alt="unchecked" />
                              </div>
                           </div>
                        </div>

                        <div className="wrapper-flex table__row">
                           <div className="rectangle-50 py-0">
                              <div className="table__row-item h-100">
                                 Nội dung demo sẽ như này
                              </div>
                           </div>
                           <div className="rectangle-50 py-0">
                              <div className="table__row-item h-100">
                                 Lorem ipsum dolor sit amet consectetur,
                                 adipisicing elit.
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- End: Quote --> */}

         {/* <!-- Contact form --> */}
         <div className="wrapper wrapper-top wrapper-bottom contact">
            <div className="rectangle-100 d-none d-md-block d-xl-none text-center quote__heading-top">
               Để lại thông tin của bạn
            </div>

            <div className="rectangle-100 py-0">
               <div className="wrapper-flex">
                  <div className="wrapper-flex-item d-none d-md-block rectangle-tab-50 p-0">
                     <div className="quote">
                        <div className="quote__heading d-none d-xl-block">
                           Để lại thông tin của bạn
                        </div>

                        <div className="quote__text d-flex justify-content-between align-items-start">
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
                        <div className="quote__text d-flex justify-content-between align-items-start">
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
               <div className="rectangle-100 rectangle-tab-50 rectangle-pc-25">
                  <Link
                     className="project img-grayscale-hover arrow-right-translate-hover d-block"
                     to="./cataloge.html"
                  >
                     <div className="img-grayscale">
                        <Image src={RamenImage} alt="black and white image" />
                     </div>

                     <div className="project__des">
                        <div className="project__des-text">
                           Lorem Ipsum dolor sit amet, textef
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

               <div className="rectangle-100 rectangle-tab-50 rectangle-pc-25">
                  <Link
                     className="project img-grayscale-hover arrow-right-translate-hover d-block"
                     to="./cataloge.html"
                  >
                     <div className="img-grayscale">
                        <Image src={RamenImage} alt="black and white image" />
                     </div>

                     <div className="project__des">
                        <div className="project__des-text">
                           Lorem Ipsum dolor sit amet, Lorem Ipsum dolor sit
                           amet, ipsum
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

               <div className="rectangle-100 rectangle-tab-50 rectangle-pc-25">
                  <Link
                     className="project img-grayscale-hover arrow-right-translate-hover d-block"
                     to="./cataloge.html"
                  >
                     <div className="img-grayscale">
                        <Image src={RamenImage} alt="black and white image" />
                     </div>

                     <div className="project__des">
                        <div className="project__des-text">
                           Lorem Ipsum dolor sit amet, text
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

               <div className="rectangle-100 rectangle-tab-50 rectangle-pc-25">
                  <Link
                     className="project img-grayscale-hover arrow-right-translate-hover d-block"
                     to="./cataloge.html"
                  >
                     <div className="img-grayscale">
                        <Image src={RamenImage} alt="black and white image" />
                     </div>

                     <div className="project__des">
                        <div className="project__des-text">
                           Lorem Ipsum dolor sit amet, text
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
            </div>

            <div className="work__link d-flex justify-content-center align-items-center">
               <Link className="arrow-right-link" to="/work">
                  <div className="arrow-right-link__text">Go to work</div>
                  <i className="arrow-right-link__icon fa-solid fa-arrow-right-long"></i>
               </Link>
            </div>
         </div>
         {/* <!-- End: Work --></div> */}
      </Fragment>
   );
};

export default Quote;
