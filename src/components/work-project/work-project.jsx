import "./work-project.css";

import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Image } from "react-bootstrap";

import RamenImage from "../../assets/images/others/ramen.png";
import ProjectImage1 from "../../assets/images/projects/project-1.png";
import ProjectImage2 from "../../assets/images/projects/project-2.jpg";
import ProjectImage3 from "../../assets/images/projects/project-3.jpg";
import ProjectImage4 from "../../assets/images/projects/project-4.jpg";
import ProjectImage5 from "../../assets/images/projects/project-5.jpg";
import ProjectImage6 from "../../assets/images/projects/project-6.png";

const WorkProject = ({project}) => {
   return (
      <div className="work__content">
         <div className="wrapper-flex">
            <div className="rectangle-100 rectangle-tab-50 rectangle-pc-25 p-0">
               <div className="rectangle-100">
                  <Link
                     className="project img-grayscale-hover arrow-right-translate-hover d-block"
                     to="/cataloge"
                  >
                     <Fragment>
                        <div className="img-grayscale">
                           <Image
                              src={RamenImage}
                              alt="black and white image"
                           />
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
                     </Fragment>
                  </Link>
               </div>

               <div className="rectangle-100">
                  <Link
                     className="project img-grayscale-hover arrow-right-translate-hover d-block"
                     to="/cataloge"
                  >
                     <Fragment>
                        <div className="img-grayscale">
                           <Image
                              src={ProjectImage1}
                              alt="black and white image"
                           />
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
                     </Fragment>
                  </Link>
               </div>
            </div>

            <div className="rectangle-100 rectangle-tab-50 rectangle-pc-25 p-0">
               <div className="rectangle-100">
                  <Link
                     className="project img-grayscale-hover arrow-right-translate-hover d-block"
                     to="/cataloge"
                  >
                     <Fragment>
                        <div className="img-grayscale">
                           <Image
                              src={ProjectImage2}
                              alt="black and white image"
                           />
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
                     </Fragment>
                  </Link>
               </div>

               <div className="rectangle-100">
                  <Link
                     className="project img-grayscale-hover arrow-right-translate-hover d-block"
                     to="/cataloge"
                  >
                     <Fragment>
                        <div className="img-grayscale">
                           <Image
                              src={ProjectImage3}
                              alt="black and white image"
                           />
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
                     </Fragment>
                  </Link>
               </div>
            </div>

            <div className="rectangle-100 rectangle-pc-50">
               <Link
                  className="project img-grayscale-hover arrow-right-translate-hover d-block"
                  to="/cataloge"
               >
                  <Fragment>
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
                  </Fragment>
               </Link>
            </div>
         </div>

         <div className="wrapper-flex top">
            <div className="rectangle-100 rectangle-pc-75">
               <Link
                  className="project img-grayscale-hover arrow-right-translate-hover d-block"
                  to="/cataloge"
                  style={{ aspectRatio: "auto" }}
               >
                  <Fragment>
                     <div className="img-grayscale">
                        <Image
                           src={ProjectImage6}
                           alt="black and white image"
                        />
                     </div>

                     <div className="project__des">
                        <div className="project__des-text">
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit.
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

            <div className="rectangle-100 rectangle-pc-25 order-tab-1 order-pc-0">
               <div className="wrapper-flex">
                  <div className="rectangle-100 rectangle-tab-50 rectangle-pc-100">
                     <Link
                        className="project img-grayscale-hover arrow-right-translate-hover d-block"
                        to="/cataloge"
                     >
                        <Fragment>
                           <div className="img-grayscale">
                              <Image
                                 src={RamenImage}
                                 alt="black and white image"
                              />
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
                        </Fragment>
                     </Link>
                  </div>

                  <div className="rectangle-100 rectangle-tab-50 rectangle-pc-100">
                     <Link
                        className="project img-grayscale-hover arrow-right-translate-hover d-block"
                        to="/cataloge"
                     >
                        <Fragment>
                           <div className="img-grayscale">
                              <Image
                                 src={RamenImage}
                                 alt="black and white image"
                              />
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
                        </Fragment>
                     </Link>
                  </div>
               </div>
            </div>
         </div>

         <div className="wrapper-flex top">
            <div className="rectangle-100 rectangle-tab-50 rectangle-pc-25">
               <Link
                  className="project img-grayscale-hover arrow-right-translate-hover d-block"
                  to="/cataloge"
               >
                  <Fragment>
                     <div className="img-grayscale">
                        <Image
                           src={ProjectImage2}
                           alt="black and white image"
                        />
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
                  </Fragment>
               </Link>
            </div>

            <div className="rectangle-100 rectangle-tab-50 rectangle-pc-25">
               <Link
                  className="project img-grayscale-hover arrow-right-translate-hover d-block"
                  to="/cataloge"
               >
                  <Fragment>
                     <div className="img-grayscale">
                        <Image
                           src={ProjectImage3}
                           alt="black and white image"
                        />
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
                  </Fragment>
               </Link>
            </div>

            <div className="rectangle-100 rectangle-tab-50 rectangle-pc-25">
               <Link
                  className="project img-grayscale-hover arrow-right-translate-hover d-block"
                  to="/cataloge"
               >
                  <Fragment>
                     <div className="img-grayscale">
                        <Image
                           src={ProjectImage4}
                           alt="black and white image"
                        />
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
                  </Fragment>
               </Link>
            </div>

            <div className="rectangle-100 rectangle-tab-50 rectangle-pc-25">
               <Link
                  className="project img-grayscale-hover arrow-right-translate-hover d-block"
                  to="/cataloge"
               >
                  <Fragment>
                     <div className="img-grayscale">
                        <Image
                           src={ProjectImage5}
                           alt="black and white image"
                        />
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
                  </Fragment>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default WorkProject;
