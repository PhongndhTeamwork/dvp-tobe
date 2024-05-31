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
                  {story?.subtitle}
               </h4>
               <h1 className="wrapper__header-heading text-capitalize">
                  {story?.title}
               </h1>
            </div>

            <div className="wrapper-flex">
               <div className="rectangle-100 rectangle-pc-50">
                  <div className="story__content-text">
                     <p>{story?.text1}</p>
                     <p>{story?.text2}</p>
                     <p>{story?.text3}</p>
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
                  Out jobs
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
