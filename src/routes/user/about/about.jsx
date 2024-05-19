import "./about.css";
import { Fragment, useEffect, useRef } from "react";
import { Image } from "react-bootstrap";
import { useState } from "react";
import AccordionService from "../../../components/accordion-service/accordion-service";
import BrandScroll from "../../../components/brand-scroll/brand-scroll";
import axios from "axios";

import ExOfficeImage from "../../../assets/images/others/ex-office.jpg";
import CultureImage1 from "../../../assets/images/culture/culture1.png";
import CultureImage2 from "../../../assets/images/culture/culture2.png";
import CultureImage3 from "../../../assets/images/culture/culture3.png";
import CultureImage4 from "../../../assets/images/culture/culture4.png";
import CultureImage5 from "../../../assets/images/culture/culture5.png";
import Avatar1 from "../../../assets/images/avatar/1.png";
import Avatar2 from "../../../assets/images/avatar/2.png";
import Avatar3 from "../../../assets/images/avatar/3.png";
import Avatar4 from "../../../assets/images/avatar/4.png";
import Avatar5 from "../../../assets/images/avatar/5.png";
import Avatar6 from "../../../assets/images/avatar/6.png";

const About = () => {
   const staffs = [
      {
         avatar: Avatar1,
         description: "30 tuổi - độc thân",
         position: "CEO - Art Director",
         motto: "Không làm thì thôi, đã làm là phải giỏi nhất",
         name: "Trần Ngọc Minh",
         role: "UI - UX Designe",
      },
      {
         avatar: Avatar2,
         description: "30 tuổi - độc thân",
         position: "CEO - Art Director",
         motto: "Không làm thì thôi, đã làm là phải giỏi nhất",
         name: "Trần Ngọc Minh",
         role: "UI - UX Designe",
      },
      {
         avatar: Avatar3,
         description: "30 tuổi - độc thân",
         position: "CEO - Art Director",
         motto: "Không làm thì thôi, đã làm là phải giỏi nhất",
         name: "Trần Ngọc Minh",
         role: "UI - UX Designe",
      },
      {
         avatar: Avatar4,
         description: "30 tuổi - độc thân",
         position: "CEO - Art Director",
         motto: "Không làm thì thôi, đã làm là phải giỏi nhất",
         name: "Trần Ngọc Minh",
         role: "UI - UX Designe",
      },
      {
         avatar: Avatar5,
         description: "30 tuổi - độc thân",
         position: "CEO - Art Director",
         motto: "Không làm thì thôi, đã làm là phải giỏi nhất",
         name: "Trần Ngọc Minh",
         role: "UI - UX Designe",
      },
      {
         avatar: Avatar6,
         description: "30 tuổi - độc thân",
         position: "CEO - Art Director",
         motto: "Không làm thì thôi, đã làm là phải giỏi nhất",
         name: "Trần Ngọc Minh",
         role: "UI - UX Designe",
      },
   ];

   // const services = [
   //    {
   //       title: "Sáng tạo là không giới hạn",
   //       description:
   //          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
   //    },
   //    {
   //       title: "Giá trị cốt lõi",
   //       description:
   //          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
   //    },
   //    {
   //       title: "Lắng nghe khách hàng",
   //       description:
   //          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
   //    },
   //    {
   //       title: "Almost before we knew it, we had left the ground.",
   //       description:
   //          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
   //    },
   // ];

   const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

   // const [isActive, setIsActive] = useState(false);
   const [staffIndexes, setStaffIndexes] = useState([]);

   const [banner, setBanner] = useState({});
   const [firstStory, setFirstStory] = useState({});
   const [secondStory, setSecondStory] = useState({});

   const [expertise, setExpertise] = useState([]);

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   useEffect(() => {
      axios
         .get("/api/about")
         .then(({ data }) => {
            setBanner(data.banner);

            setFirstStory(data.story1);
            setSecondStory(data.story2);

            setExpertise(data.expertises);
         })
         .catch((error) => {
            throw new Error(error);
         });
   }, []);

   const toggleActive = (index) => {
      if (staffIndexes.includes(index)) {
         var removalElementIndex = staffIndexes.indexOf(index);
         staffIndexes.splice(removalElementIndex, 1);
         setStaffIndexes([...staffIndexes]);
      } else {
         setStaffIndexes([...staffIndexes, index]);
      }
   };

   return (
      <Fragment>
         {/* <!-- Banner --> */}
         <div className="banner">
            <div className="banner__bg">
               <div className="banner__bg-eclipse1"></div>
               <div className="banner__bg-eclipse2"></div>
               <div className="banner__bg-eclipse3"></div>
            </div>

            <div className="banner__text">
               <div className="text-center">
                  <div className="text-capitalize">{banner.textstroke2}</div>
                  <div className="text-capitalize">{banner.textuppercase1}</div>
                  <div className="text-capitalize">{banner.textuppercase2}</div>
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

               <div className="rectangle-100 rectangle-pc-50 story__content-img">
                  <Image
                     src={
                        firstStory?.images &&
                        urlRegex.test(firstStory?.images[0])
                           ? firstStory?.images[0]
                           : ExOfficeImage
                     }
                     alt="office"
                  />
               </div>
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
                     src={
                        urlRegex.test(secondStory?.images?.slice(0, 1))
                           ? secondStory?.images[0]
                           : CultureImage2
                     }
                     alt=""
                  />
                  <Image
                     className="rectangle-100 rectangle-tab-50 rectangle-pc-100"
                     src={
                        urlRegex.test(secondStory?.images?.slice(1, 1))
                           ? secondStory.images[1]
                           : CultureImage3
                     }
                     alt=""
                  />
               </div>
               <div className="rectangle-100 rectangle-pc-50">
                  <Image
                     src={
                        urlRegex.test(secondStory?.images?.slice(2, 1))
                           ? secondStory.images[2]
                           : CultureImage1
                     }
                     alt=""
                  />
               </div>
               <div className="rectangle-100 rectangle-pc-25 wrapper-flex m-0 p-0">
                  <Image
                     className="rectangle-100 rectangle-tab-50 rectangle-pc-100"
                     src={
                        urlRegex.test(secondStory?.images?.slice(3, 1))
                           ? secondStory.images[3]
                           : CultureImage4
                     }
                     alt=""
                  />
                  <Image
                     className="rectangle-100 rectangle-tab-50 rectangle-pc-100"
                     src={
                        urlRegex.test(secondStory?.images?.slice(4, 1))
                           ? secondStory.images[4]
                           : CultureImage5
                     }
                     alt=""
                  />
               </div>
            </div>
         </div>
         {/* <!-- End: Culture --> */}

         {/* <!-- Staff --> */}
         <div className="wrapper wrapper-top wrapper-bottom staff">
            <div className="wrapper__header">
               <h4 className="wrapper__header-sub--heading text-uppercase">
                  Resources staff
               </h4>
               <h1 className="wrapper__header-heading text-capitalize">
                  Đội ngũ nhân sự
               </h1>
            </div>

            <div className="wrapper-flex staff__content">
               {staffs.map((staff, index) => {
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
         </div>
         {/* <!-- End: Staff --></div> */}
      </Fragment>
   );
};

export default About;
