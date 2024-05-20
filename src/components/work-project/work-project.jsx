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

const WorkProject = ({ projects }) => {
   const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

   return (
      <div className="work__content">
         <div className="wrapper-flex">
            <div className="rectangle-100 rectangle-tab-50 rectangle-pc-25 p-0">
               <div className="rectangle-100">
                  <Link
                     className="project img-grayscale-hover arrow-right-translate-hover d-block"
                     to={`/cataloge/${projects[0]?.id ?? 1}`}
                  >
                     <Fragment>
                        <div className="img-grayscale">
                           <Image
                              src={
                                 urlRegex.test(projects[0]?.images[0])
                                    ? projects[0]?.images[0]
                                    : RamenImage
                              }
                              alt="black and white image"
                           />
                        </div>

                        <div className="project__des">
                           <div className="project__des-text">
                              {projects[0]?.title}
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
                     to={`/cataloge/${projects[1]?.id ?? 1}`}
                  >
                     <Fragment>
                        <div className="img-grayscale">
                           <Image
                              src={
                                 urlRegex.test(projects[1]?.images[0])
                                    ? projects[1]?.images[0]
                                    : ProjectImage1
                              }
                              alt="black and white image"
                           />
                        </div>

                        <div className="project__des">
                           <div className="project__des-text">
                              {projects[1]?.title}
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
                     to={`/cataloge/${projects[2]?.id ?? 1}`}
                  >
                     <Fragment>
                        <div className="img-grayscale">
                           <Image
                              src={
                                 urlRegex.test(projects[2]?.images[0])
                                    ? projects[2]?.images[0]
                                    : ProjectImage2
                              }
                              alt="black and white image"
                           />
                        </div>

                        <div className="project__des">
                           <div className="project__des-text">
                              {projects[2]?.title}
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
                      to={`/cataloge/${projects[3]?.id ?? 1}`}
                  >
                     <Fragment>
                        <div className="img-grayscale">
                           <Image
                              src={
                                 urlRegex.test(projects[3]?.images[0])
                                    ? projects[3]?.images[0]
                                    : RamenImage
                              }
                              alt="black and white image"
                           />
                        </div>

                        <div className="project__des">
                           <div className="project__des-text">
                              {projects[3]?.title}
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
                   to={`/cataloge/${projects[4]?.id ?? 1}`}
               >
                  <Fragment>
                     <div className="img-grayscale">
                        <Image
                           src={
                              urlRegex.test(projects[4]?.images[0])
                                 ? projects[4]?.images[0]
                                 : RamenImage
                           }
                           alt="black and white image"
                        />
                     </div>

                     <div className="project__des">
                        <div className="project__des-text">
                           {projects[4]?.title}
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
                   to={`/cataloge/${projects[5]?.id ?? 1}`}
                  style={{ aspectRatio: "auto" }}
               >
                  <Fragment>
                     <div className="img-grayscale">
                        <Image
                           src={
                              urlRegex.test(projects[5]?.images[0])
                                 ? projects[5]?.images[0]
                                 : ProjectImage6
                           }
                           alt="black and white image"
                        />
                     </div>

                     <div className="project__des">
                        <div className="project__des-text">
                           {projects[5]?.title}
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
                         to={`/cataloge/${projects[6]?.id ?? 1}`}
                     >
                        <Fragment>
                           <div className="img-grayscale">
                              <Image
                                 src={
                                    urlRegex.test(projects[6]?.images[0])
                                       ? projects[6]?.images[0]
                                       : RamenImage
                                 }
                                 alt="black and white image"
                              />
                           </div>

                           <div className="project__des">
                              <div className="project__des-text">
                                 {projects[6]?.title}
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
                         to={`/cataloge/${projects[7]?.id ?? 1}`}
                     >
                        <Fragment>
                           <div className="img-grayscale">
                              <Image
                                 src={
                                    urlRegex.test(projects[7]?.images[0])
                                       ? projects[7]?.images[0]
                                       : RamenImage
                                 }
                                 alt="black and white image"
                              />
                           </div>

                           <div className="project__des">
                              <div className="project__des-text">
                                 {projects[7]?.title}
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
                   to={`/cataloge/${projects[8]?.id ?? 1}`}
               >
                  <Fragment>
                     <div className="img-grayscale">
                        <Image
                           src={
                              urlRegex.test(projects[8]?.images[0])
                                 ? projects[8]?.images[0]
                                 : RamenImage
                           }
                           alt="black and white image"
                        />
                     </div>

                     <div className="project__des">
                        <div className="project__des-text">
                           {projects[8]?.title}
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
                   to={`/cataloge/${projects[9]?.id ?? 1}`}
               >
                  <Fragment>
                     <div className="img-grayscale">
                        <Image
                           src={
                              urlRegex.test(projects[9]?.images[9])
                                 ? projects[0]?.images[0]
                                 : RamenImage
                           }
                           alt="black and white image"
                        />
                     </div>

                     <div className="project__des">
                        <div className="project__des-text">
                           {projects[9]?.title}
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
                   to={`/cataloge/${projects[10]?.id ?? 1}`}
               >
                  <Fragment>
                     <div className="img-grayscale">
                        <Image
                           src={
                              urlRegex.test(projects[10]?.images[0])
                                 ? projects[10]?.images[0]
                                 : RamenImage
                           }
                           alt="black and white image"
                        />
                     </div>

                     <div className="project__des">
                        <div className="project__des-text">
                           {projects[10]?.title}
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
                   to={`/cataloge/${projects[11]?.id ?? 1}`}
               >
                  <Fragment>
                     <div className="img-grayscale">
                        <Image
                           src={
                              urlRegex.test(projects[11]?.images[0])
                                 ? projects[11]?.images[0]
                                 : RamenImage
                           }
                           alt="black and white image"
                        />
                     </div>

                     <div className="project__des">
                        <div className="project__des-text">
                           {projects[11]?.title}
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