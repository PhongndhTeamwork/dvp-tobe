import "./home.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { login } from "../../app/features/userLoginSlice";
import { Fragment } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeVideo from "../../assets/images/others/video-auto.mp4";
import Carousel1 from "../../assets/images/carousel/carousel-1.png";
import Carousel2 from "../../assets/images/carousel/carousel-2.png";
import Carousel3 from "../../assets/images/carousel/carousel-3.png";
import Ramen from "../../assets/images/others/ramen.png";
import PartnerSVG1 from "../../assets/images/svg/partner/Untitled-1-01.svg";
import PartnerSVG2 from "../../assets/images/svg/partner/Untitled-1-02.svg";
import PartnerSVG3 from "../../assets/images/svg/partner/Untitled-1-03.svg";
import PartnerSVG4 from "../../assets/images/svg/partner/Untitled-1-04.svg";
import PartnerSVG5 from "../../assets/images/svg/partner/Untitled-1-05.svg";
import PartnerSVG6 from "../../assets/images/svg/partner/Untitled-1-06.svg";
import PartnerSVG7 from "../../assets/images/svg/partner/Untitled-1-07.svg";
import PartnerSVG8 from "../../assets/images/svg/partner/Untitled-1-08.svg";
import PartnerSVG9 from "../../assets/images/svg/partner/Untitled-1-09.svg";
import PartnerSVG10 from "../../assets/images/svg/partner/Untitled-1-10.svg";
import PartnerSVG11 from "../../assets/images/svg/partner/Untitled-1-11.svg";
import PartnerSVG12 from "../../assets/images/svg/partner/Untitled-1-12.svg";
import PartnerSVG14 from "../../assets/images/svg/partner/Untitled-1-14.svg";
// import PartnerSVG8 from "../../assets/images/svg/partner/Untitled-1-08.svg";

import AccordionService from "../../components/accordion-service/accordion-service";
import BrandScroll from "../../components/brand-scroll/brand-scroll";

const Home = () => {
   const services = [
      {
         name: "Branding",
         images: [Carousel1, Carousel2, Carousel3],
         contents: [
            "Logos",
            "Ấn phẩm văn phòng",
            "Broucher, Cataloge",
            "Capacity profile - Company profile",
         ],
      },
      {
         name: "Branding",
         images: [Carousel1, Carousel2, Carousel3],
         contents: [
            "Logos",
            "Ấn phẩm văn phòng",
            "Broucher, Cataloge",
            "Capacity profile - Company profile",
         ],
      },
      {
         name: "Branding",
         images: [Carousel1, Carousel2, Carousel3],
         contents: [
            "Logos",
            "Ấn phẩm văn phòng",
            "Broucher, Cataloge",
            "Capacity profile - Company profile",
         ],
      },
      {
         name: "Branding",
         images: [Carousel1, Carousel2, Carousel3],
         contents: [
            "Logos",
            "Ấn phẩm văn phòng",
            "Broucher, Cataloge",
            "Capacity profile - Company profile",
         ],
      },
      {
         name: "Branding",
         images: [Carousel1, Carousel2, Carousel3],
         contents: [
            "Logos",
            "Ấn phẩm văn phòng",
            "Broucher, Cataloge",
            "Capacity profile - Company profile",
         ],
      },
   ];

   const works = [
      { image: Ramen, description: "Lorem Ipsum dolor sit amet, text" },
      { image: Ramen, description: "Lorem Ipsum dolor sit amet, text" },
      { image: Ramen, description: "Lorem Ipsum dolor sit amet, text" },
      { image: Ramen, description: "Lorem Ipsum dolor sit amet, text" },
   ];

   const dispatch = useDispatch();
   const userLogin = useSelector((state) => state.userLogin);
   const { userInfo } = userLogin;

   //?Effect
   const videoRef = useRef(null);
   const bannerRef = useRef(null);
   const [isMuted, setIsMuted] = useState(true);

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   useEffect(() => {
      const handleScroll = () => {
         const scrollY = window.scrollY;
         const bannerHeight = bannerRef.current?.offsetHeight || 0;
         const videoHeight = videoRef.current?.offsetHeight || 0;

         if (scrollY > 0.5 * bannerHeight) {
            videoRef.current.play();
         } else if (
            scrollY > bannerHeight + videoHeight ||
            scrollY <= 0.5 * bannerHeight
         ) {
            videoRef.current.pause();
         }
      };

      window.addEventListener("scroll", handleScroll);

      // Cleanup function to remove event listener on unmount
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const handleVideoClick = () => {
      setIsMuted(!isMuted);
   };

   const handleLogin = () => {
      console.log("LOGIN");
      dispatch(login({}));
   };
   const handleGetUser = () => {
      console.log(userLogin);
   };

   return (
      <Fragment>
         <div className="banner" ref={bannerRef}>
            <div className="banner__bg">
               <div className="banner__bg-eclipse1"></div>
               <div className="banner__bg-eclipse2"></div>
               <div className="banner__bg-eclipse3"></div>
            </div>

            <div className="banner__text">
               <div className="banner__text-top d-flex justify-content-center">
                  <div className="text-stroke cursor-default">Professional</div>
                  <div className="text-uppercase cursor-default">Style</div>
               </div>

               <div
                  className="banner__text-bot banner__text-padding d-flex justify-content-center pe-0"
                  
               >
                  <div className="text-uppercase">Design</div>
                  <div className="text-stroke">Creative</div>
               </div>
            </div>
         </div>
         <div></div>
         {/* <!-- End: Banner --> */}

         {/* <!-- Reels --> */}
         <div className="reels">
            <video
               id="video-auto-play"
               src={HomeVideo}
               ref={videoRef}
               muted={isMuted}
               onClick={handleVideoClick}
            ></video>
         </div>
         {/* <!-- End: Reels --> */}

         {/* <!-- Story --> */}
         <div class="wrapper wrapper-top wrapper-bottom story">
            <div class="wrapper__header">
               <h4 class="wrapper__header-sub--heading text-uppercase cursor-default">
                  The story of DVP
               </h4>
               <h1 class="wrapper__header-heading text-capitalize cursor-default">
                  Câu chuyện về DVP
               </h1>
            </div>

            <div class="story__content rectangle-100 wrapper-flex align-items-end m-0 p-0">
               <div class="rectangle-100 rectangle-pc-25 d-flex align-items-center label">
                  <div class="label__text cursor-default">About</div>
                  <div class="label__icon"></div>
               </div>

               <div class="rectangle-100 rectangle-pc-50 p-0 content">
                  <div class="wrapper-flex">
                     <div class="rectangle-100 content__text cursor-default">
                        <p>
                           Lorem Ipsum is simply dummy text of the printing and
                           typesetting industry. Lorem Ipsum has been the
                           industry's standard dummy text ever since the 1500s,
                           when an unknown printer took a galley of type and
                           scrambled it to make a type specimen book. Lorem
                           Ipsum has been the industry's standard dummy text
                           ever since the 1500s, when an unknown printer took a
                           galley of type and scrambled it to make a type
                           specimen book.
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

                     <div class="rectangle-100 content__link pt-0">
                        <a class="arrow-right-link" href="./about.html">
                           <div class="arrow-right-link__text">Go to About</div>
                           <i class="arrow-right-link__icon fa-solid fa-arrow-right-long"></i>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- End: Story --> */}

         {/* <!-- Expertise --> */}
         <div className="wrapper wrapper-top wrapper-bottom expertise">
            <div className="wrapper__header">
               <h4 className="wrapper__header-sub--heading text-uppercase">
                  What will you find at DVP
               </h4>
               <h1 className="wrapper__header-heading text-capitalize">
                  Chuyên môn của chúng tôi
               </h1>
            </div>

            <div className="expertise__content">
               {services.map((service, index) => {
                  return (
                     <AccordionService
                        key={index}
                        title={service.name}
                        hasCarousel={true}
                        images={service.images}
                        contents={service.contents}
                     />
                  );
               })}
            </div>
         </div>
         {/* <!-- End: Expertise --> */}

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
               {works.map((work, index) => {
                  return (
                     <div
                        key={index}
                        className="rectangle-100 rectangle-tab-50 rectangle-pc-25"
                     >
                        <Link
                           className="mb-0 project img-grayscale-hover arrow-right-translate-hover d-block"
                           to="/cataloge"
                        >
                           <Fragment>
                              <div className="img-grayscale">
                                 <Image
                                    src={work.image}
                                    alt="black and white image"
                                 />
                              </div>

                              <div className="project__des mb-0">
                                 <div className="project__des-text">
                                    {work.description}
                                 </div>

                                 <div className="project__des-icon">
                                    <div className="arrow-right-translate">
                                       <div className="arrow-right-translate__line"></div>
                                       <div className="arrow-right-translate__right fa-solid fa-angle-right"></div>
                                    </div>
                                 </div>
                              </div>
                           </Fragment>
                        </Link>
                     </div>
                  );
               })}
            </div>

            <div className="work__link d-flex justify-content-center align-items-center">
               <Link className="arrow-right-link" to="/work">
                  <Fragment>
                     <div className="arrow-right-link__text">Go to work</div>
                     <i className="arrow-right-link__icon fa-solid fa-arrow-right-long"></i>
                  </Fragment>
               </Link>
            </div>
         </div>
         {/* <!-- End: Work --> */}

         {/* <!-- Partners --> */}
         <div className="partners">
            <div className="wrapper">
               <BrandScroll homePage={true} />
            </div>
         </div>
      </Fragment>
   );
};

export default Home;
