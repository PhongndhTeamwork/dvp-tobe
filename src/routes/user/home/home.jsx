import "./home.css";
import { useState, useEffect, useRef, useMemo } from "react";
import { Fragment } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

import AccordionService from "../../../components/accordion-service/accordion-service";
import BrandScroll from "../../../components/brand-scroll/brand-scroll";

const Home = () => {
   //? Banner
   const [banner, setBanner] = useState({});

   //? Video
   const [video, setVideo] = useState("");

   //? Story
   const [story, setStory] = useState({});

   //? Service
   const [serviceItems, setServiceItems] = useState([]);

   //? Project
   const [projects, setProjects] = useState([]);

   const preApi = useMemo(() => {
      return process.env.NODE_ENV === "production"
         ? process.env.REACT_APP_BASE_IMAGE_URL
         : "";
   }, []);

   useEffect(() => {
      axios
         .get(preApi + "/api/home")
         .then(({ data }) => {
            setBanner(data.banner);
            setVideo(data.video);
            setStory(data.story);

            setProjects(data.projects);
         })
         .catch((error) => {
            throw new Error(error);
         });
   }, [preApi]);

   useEffect(() => {
      axios
         .get(preApi + "/api/info/services")
         .then(({ data }) => {
            setServiceItems(data.services);
         })
         .catch((error) => {
            throw new Error(error);
         });
   }, [preApi]);

   //?Effect
   const videoRef = useRef(null);
   const bannerRef = useRef(null);
   const [isMuted, setIsMuted] = useState(true);

   useEffect(() => {
      window.scrollTo(0, 0);
      if (videoRef.current instanceof HTMLVideoElement)
         videoRef?.current?.pause();
   }, [videoRef]);

   useEffect(() => {
      const handleScroll = () => {
         const scrollY = window.scrollY;
         const bannerHeight = bannerRef?.current?.offsetHeight || 0;
         const videoHeight = videoRef?.current?.offsetHeight || 0;

         if (videoRef?.current?.readyState >= 2) {
            if (scrollY > 0.5 * bannerHeight && videoRef?.current?.paused) {
               videoRef?.current?.play();
            } else if (
               scrollY > bannerHeight + videoHeight ||
               scrollY <= 0.5 * bannerHeight
            ) {
               videoRef?.current?.pause();
            }
         }
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
   });

   const handleVideoClick = () => {
      setIsMuted(!isMuted);
   };

   return (
      <Fragment>
         {/* <!-- Banner --> */}
         <div
            className={`banner ${banner.image ? "banner-image-active" : ""}`}
            ref={bannerRef}
         >
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
                     {" "}
                     {banner.textuppercase2}
                  </div>
                  <div className="text-stroke text-center">
                     {banner.textstroke2}
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- End: Banner --> */}

         {/* <!-- Reels --> */}
         <div className="reels">
            <video
               id="video-auto-play"
               src={`${process.env.REACT_APP_BASE_IMAGE_URL}/${video}`}
               // src={HomeVideo}
               ref={videoRef}
               muted={isMuted}
               onClick={handleVideoClick}
            ></video>
         </div>
         {/* <!-- End: Reels --> */}

         {/* <!-- Story --> */}
         <div className="wrapper wrapper-top wrapper-bottom story">
            <div className="wrapper__header">
               <h4 className="wrapper__header-sub--heading text-uppercase cursor-default">
                  {story?.subtitle}
               </h4>
               <h1 className="wrapper__header-heading text-capitalize cursor-default">
                  {story?.title}
               </h1>
            </div>

            <div className="story__content rectangle-100 wrapper-flex align-items-end m-0 p-0">
               <div className="rectangle-100 rectangle-pc-25 d-flex align-items-center label">
                  <div className="label__text cursor-default">About</div>
                  <div className="label__icon"></div>
               </div>

               <div className="rectangle-100 rectangle-pc-50 p-0 content">
                  <div className="wrapper-flex">
                     <div className="rectangle-100 content__text cursor-default">
                        <p>{story?.text1}</p>
                        <p>{story?.text2}</p>
                        <p>{story?.text3}</p>
                     </div>

                     <div className="rectangle-100 content__link pt-0">
                        <Link className="arrow-right-link" to="/about">
                           <div className="arrow-right-link__text">
                              Go to About
                           </div>
                           <i className="arrow-right-link__icon fa-solid fa-arrow-right-long"></i>
                        </Link>
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
               {serviceItems?.map((service, index) => {
                  return (
                     <AccordionService
                        key={index}
                        title={service?.serviceName}
                        hasCarousel={true}
                        images={service?.carouselImages}
                        contents={service?.serviceInfos}
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
                  PROJECT
               </h4>
               <h1 className="wrapper__header-heading text-capitalize">
                  Dự án
               </h1>
            </div>

            <div className="work__content wrapper-flex">
               {projects?.map((project, index) => {
                  return (
                     <div
                        key={index}
                        className="rectangle-100 rectangle-tab-50 rectangle-pc-25"
                     >
                        <Link
                           className="mb-0 project img-grayscale-hover arrow-right-translate-hover d-block"
                           to={`/cataloge/${project?.id}`}
                        >
                           <Fragment>
                              <div className="img-grayscale">
                                 <Image
                                    src={`${process.env.REACT_APP_BASE_IMAGE_URL}/${project?.thumbnailSquare}`}
                                    alt="black and white image"
                                 />
                              </div>

                              <div className="project__des mb-0">
                                 <div className="project__des-text">
                                    {project?.title}
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
