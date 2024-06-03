import "./about.css";
import { Fragment, useEffect, useMemo } from "react";
import { Image } from "react-bootstrap";
import { useState } from "react";
import AccordionService from "../../../components/accordion-service/accordion-service";
import BrandScroll from "../../../components/brand-scroll/brand-scroll";
import axios from "axios";

const About = () => {
   const preApi = useMemo(() => {
      return process.env.NODE_ENV === "production"
         ? process.env.REACT_APP_BASE_IMAGE_URL
         : "";
   }, []);

   // const [isActive, setIsActive] = useState(false);
   // const [staffIndexes, setStaffIndexes] = useState([]);

   const [banner, setBanner] = useState({});
   const [firstStory, setFirstStory] = useState({});
   const [secondStory, setSecondStory] = useState({});

   const [expertise, setExpertise] = useState([]);

   useEffect(() => {
      window.scrollTo(0, 0);
      // console.log(process.env.REACT_APP_BASE_IMAGE_URL);
   }, []);

   useEffect(() => {
      axios
         .get(preApi+"/api/about")
         .then(({ data }) => {
            setBanner(data.banner);

            setFirstStory(data.story1);
            setSecondStory(data.story2);

            setExpertise(data.expertises);
         })
         .catch((error) => {
            throw new Error(error);
         });
   }, [preApi]);

   // const toggleActive = (index) => {
   //    if (staffIndexes.includes(index)) {
   //       var removalElementIndex = staffIndexes.indexOf(index);
   //       staffIndexes.splice(removalElementIndex, 1);
   //       setStaffIndexes([...staffIndexes]);
   //    } else {
   //       setStaffIndexes([...staffIndexes, index]);
   //    }
   // };

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
                  {firstStory.subtitle}
               </h4>
               <h1 className="wrapper__header-heading text-capitalize">
                  {firstStory.title}
               </h1>
            </div>

            <div className="wrapper-flex">
               <div className="rectangle-100 rectangle-pc-50 story__content-text">
                  <p>{firstStory.text1}</p>
                  <p>{firstStory.text2}</p>
                  <p>{firstStory.text3}</p>
               </div>
               
               {
                  firstStory.images && firstStory.images.length > 0 ? (
                     <div className="rectangle-100 rectangle-pc-50 story__content-img">
                        <Image src={`${process.env.REACT_APP_BASE_IMAGE_URL}/${firstStory?.images?.slice(0, 1)}`} />
                     </div>
                  ) : ("")
               }
               
            </div>
         </div>
         {/* <!-- End: Story --> */}

         {/* <!-- Expertise --> */}
         <div className="wrapper wrapper-top wrapper-bottom about__expertise">
            <div className="wrapper__header">
               <h4 className="wrapper__header-sub--heading text-uppercase">
                  The mottos
               </h4>
               <h1 className="wrapper__header-heading">Phương châm cốt lõi</h1>
            </div>

            <div className="expertise__content w-100">
               {expertise?.map((service, index) => {
                  return (
                     <AccordionService
                        key={index}
                        title={service.title}
                        description={service.description}
                        index={index + 1}
                     />
                  );
               })}
            </div>
         </div>
         {/* <!-- End: Expertise --> */}

         {/* <!-- Partners --> */}
         <div className="partners">
            <div className="partners__header w-100 d-flex flex-column align-items-center">
               <div className="partners__header-sub-heading text-uppercase">
                  Out value clients
               </div>
               <div className="partners__header-heading text-center">
                  Khách hàng của chúng tôi
               </div>
            </div>
            <BrandScroll homePage={false} />
         </div>
         {/* <!-- End: Partners --> */}

         {/* <!-- Culture --> */}
         <div className="wrapper wrapper-top wrapper-bottom culture">
            <div className="wrapper__header">
               <h4 className="wrapper__header-sub--heading text-uppercase">
                  {secondStory.subtitle}
               </h4>
               <h1 className="wrapper__header-heading text-capitalize">
                  {secondStory.title}
               </h1>
            </div>

            <div className="culture__des rectangle-100 rectangle-pc-50 p-0 ms-0">
               <p className="culture__des-text m-0">{secondStory.text1}</p>
               <p className="culture__des-text m-0">{secondStory.text2}</p>
               <p className="culture__des-text m-0">{secondStory.text3}</p>
            </div>

            <div className="culture__img wrapper-flex">
               <div className="rectangle-100 rectangle-pc-25 wrapper-flex m-0 p-0">
                  <Image
                     className="rectangle-100 rectangle-tab-50 rectangle-pc-100"
                     src={`${
                        process.env.REACT_APP_BASE_IMAGE_URL
                     }/${secondStory?.images?.slice(1, 2)}`}
                     alt="culture image"
                  />
                  <Image
                     className="rectangle-100 rectangle-tab-50 rectangle-pc-100"
                     src={`${
                        process.env.REACT_APP_BASE_IMAGE_URL
                     }/${secondStory?.images?.slice(2, 3)}`}
                     alt="culture image"
                  />
               </div>
               <div className="rectangle-100 rectangle-pc-50">
                  <Image
                     src={`${
                        process.env.REACT_APP_BASE_IMAGE_URL
                     }/${secondStory?.images?.slice(0, 1)}`}
                     alt="culture image"
                  />
               </div>
               <div className="rectangle-100 rectangle-pc-25 wrapper-flex m-0 p-0">
                  <Image
                     className="rectangle-100 rectangle-tab-50 rectangle-pc-100"
                     src={`${
                        process.env.REACT_APP_BASE_IMAGE_URL
                     }/${secondStory?.images?.slice(3, 4)}`}
                     alt="culture image"
                  />
                  <Image
                     className="rectangle-100 rectangle-tab-50 rectangle-pc-100"
                     src={`${
                        process.env.REACT_APP_BASE_IMAGE_URL
                     }/${secondStory?.images?.slice(4, 5)}`}
                     alt="culture image"
                  />
               </div>
            </div>
         </div>
         {/* <!-- End: Culture --> */}

         {/* <!-- Staff --> */}
         {/* <div className="wrapper wrapper-top wrapper-bottom staff">
            <div className="wrapper__header">
               <h4 className="wrapper__header-sub--heading text-uppercase">
                  Resources staff
               </h4>
               <h1 className="wrapper__header-heading text-capitalize">
                  Đội ngũ nhân sự
               </h1>
            </div>

            <div className="wrapper-flex staff__content">
               {staffs?.map((staff, index) => {
                  return (
                     <div
                        key={index}
                        className="rectangle-100 rectangle-tab-50 rectangle-pc-25"
                     >
                        <div
                           className={
                              staffIndexes.includes(index)
                                 ? "staff__content-item active plus-rotate-icon-active"
                                 : "staff__content-item"
                           }
                           onClick={() => toggleActive(index)}
                        >
                           <div className="content">
                              <Image src={staff.avatar} alt="avatar" />

                              <div className="staff__des">
                                 <div className="staff__des-item">
                                    <div className="icon"></div>
                                    <div className="text">
                                       {staff.description}
                                    </div>
                                 </div>
                                 <div className="staff__des-item">
                                    <div className="icon"></div>
                                    <div className="text">{staff.position}</div>
                                 </div>
                                 <div className="staff__des-item">
                                    <div className="icon"></div>
                                    <div className="text">{staff.motto}</div>
                                 </div>
                              </div>
                           </div>

                           <div
                              className="d-flex justify-content-between align-items-start"
                              style={{ cursor: "pointer" }}
                           >
                              <div className="staff__info">
                                 <div className="staff__info-pos">
                                    {staff.role}
                                 </div>
                                 <div className="staff__info-name text-uppercase">
                                    {staff.name}
                                 </div>
                              </div>

                              <div className="staff__more">
                                 <div className="plus-rotate-icon">
                                    <i className="left"></i>
                                    <i className="right"></i>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div> */}
         {/* <!-- End: Staff --></div> */}
      </Fragment>
   );
};

export default About;
