import "./contact.css";
import { Fragment, useEffect, useRef, useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

import ContactImage1 from "../../../assets/images/contact/contact1.png";
import ContactImage2 from "../../../assets/images/contact/contact2.png";
import OfficeBackground from "../../../assets/images/others/office-bg.jpg";
import ContactIcon1 from "../../../assets/images/contact/contact_icon1.png";
import ContactIcon2 from "../../../assets/images/contact/contact_icon2.png";
import ContactForm from "../../../components/contact-form/contact-form";

const Contact = () => {
   const [story, setStory] = useState({});
   const [contactForm, setContactForm] = useState({});

   const [companyInfos, setCompanyInfos] = useState({});

   const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

   useEffect(() => {
      axios
         .get("/api/info/company")
         .then(({ data }) => {
            setCompanyInfos(data.company);
         })
         .catch((error) => {
            throw new Error(error);
         });
   }, []);

   useEffect(() => {
      axios
         .get("/api/contact")
         .then(({ data }) => {
            setStory(data.story);
            setContactForm(data.contactForm);
         })
         .catch((error) => {
            throw new Error(error);
         });
   }, []);

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <Fragment>
         {/* <!-- Inspiration --> */}
         <div className="wrapper wrapper-top wrapper-bottom inspiration">
            <div className="wrapper__header">
               <h4 className="wrapper__header-sub--heading text-uppercase">
                  {story.subtitle}
               </h4>
               <h1 className="wrapper__header-heading">{story.title}</h1>
               {/* <p>{story.text1}</p>
               <p>{story.text2}</p>
               <p>{story.text3}</p> */}
               <h4 className="inspiration__sub-heading">
                  Liên hệ <span className="line"></span> Hợp tác
               </h4>
            </div>

            <div className="wrapper-flex">
               <div className="rectangle-100 inspiration__img">
                  <Image
                     src={`${
                        process.env.REACT_APP_BASE_IMAGE_URL
                     }/${story?.images?.slice(0, 1)}`}
                  />
               </div>

               <div className="rectangle-0 rectangle-pc-50 inspiration__img-2">
                  <Image
                     className="w-100"
                     src={`${process.env.REACT_APP_BASE_IMAGE_URL}/${companyInfos?.companyImage}`}
                  />
               </div>

               <div className="rectangle-100 rectangle-pc-50 inspiration__info">
                  <h2 className="heading">{companyInfos?.companyName}</h2>
                  <h4 className="sub-heading">
                     {companyInfos?.companyDescription}
                  </h4>

                  <p>{companyInfos?.companyName}</p>
                  <p>GCNĐKKD: {companyInfos?.licenseCode}</p>
                  <p>Cấp ngày: {companyInfos?.licenseDate}</p>
                  <p>Nơi cấp: {companyInfos?.licenseAddress}</p>
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
                     src={`${process.env.REACT_APP_BASE_IMAGE_URL}/${companyInfos?.locationImage}`}
                     alt="office"
                  />
                  <div
                     dangerouslySetInnerHTML={{
                        __html: companyInfos?.companyLocation,
                     }}
                  />
               </div>

               <div className="location__address">
                  <div className="location__address-noise"></div>
                  <div className="location__address-text">
                     <h5>{companyInfos?.companyAddress}</h5>
                     <h5>{companyInfos?.companyPhone}</h5>
                     <h5>{companyInfos?.companyEmail}</h5>
                     <h5>{companyInfos?.companyWebsite}</h5>
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
                           <h1 className="text-uppercase heading">DVP HANOI</h1>
                        </div>
                        <div className="carousel-item">
                           <h1 className="text-uppercase heading text-stroke">
                              DVP HANOI
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
               {contactForm.title}{" "}
            </div>

            <div class="rectangle-100 py-0">
               <div class="wrapper-flex">
                  <div class="wrapper-flex-item d-none d-md-block rectangle-tab-50 p-0">
                     <div class="quote">
                        <div class="quote__heading d-none d-xl-block">
                           {contactForm.title}{" "}
                        </div>

                        <div class="quote__text d-flex justify-content-between align-items-start">
                           <Image src={ContactIcon1} alt="icon 1" />
                           <p>{contactForm.text1}</p>
                        </div>
                        <div class="quote__text d-flex justify-content-between align-items-start">
                           <Image src={ContactIcon2} alt="icon 2" />
                           <p>{contactForm.text2}</p>
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
