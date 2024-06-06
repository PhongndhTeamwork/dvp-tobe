import "./work-project.css";

import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Image } from "react-bootstrap";

const WorkProject = ({ projects }) => {
   return (
      <div className="work__content">
         <div className="wrapper-flex">
            <div className="rectangle-100 rectangle-tab-50 rectangle-pc-25 p-0">
               <div className="rectangle-100">
                  <Link
                     className="project img-grayscale-hover arrow-right-translate-hover d-block"
                     to={`/cataloge/${projects[0]?.id ?? 1}`}
                     // style={{display:"none"}}
                  >
                     {projects[0] && (
                        <Fragment>
                           <div className="img-grayscale">
                              <Image
                                 src={`${process.env.REACT_APP_BASE_IMAGE_URL}/${projects[0]?.thumbnailSquare}`}
                                 alt="project image"
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
                     )}
                  </Link>
               </div>

               <div className="rectangle-100">
                  <Link
                     className="project img-grayscale-hover arrow-right-translate-hover d-block"
                     to={`/cataloge/${projects[1]?.id ?? 1}`}
                  >
                     {projects[1] &&
                     <Fragment>
                        <div className="img-grayscale">
                           <Image
                              src={`${process.env.REACT_APP_BASE_IMAGE_URL}/${projects[1]?.thumbnailSquare}`}
                              alt="project image"
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
                     </Fragment>}
                  </Link>
               </div>
            </div>

            <div className="rectangle-100 rectangle-tab-50 rectangle-pc-25 p-0">
               <div className="rectangle-100">
                  <Link
                     className="project img-grayscale-hover arrow-right-translate-hover d-block"
                     to={`/cataloge/${projects[2]?.id ?? 1}`}
                  >
                     {projects[2] &&
                     <Fragment>
                        <div className="img-grayscale">
                           <Image
                              src={`${process.env.REACT_APP_BASE_IMAGE_URL}/${projects[2]?.thumbnailSquare}`}
                              alt="project image"
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
                     </Fragment>}
                  </Link>
               </div>

               <div className="rectangle-100">
                  <Link
                     className="project img-grayscale-hover arrow-right-translate-hover d-block"
                     to={`/cataloge/${projects[3]?.id ?? 1}`}
                  >
                     {projects[3] &&
                     <Fragment>
                        <div className="img-grayscale">
                           <Image
                              src={`${process.env.REACT_APP_BASE_IMAGE_URL}/${projects[3]?.thumbnailSquare}`}
                              alt="project image"
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
                     </Fragment>}
                  </Link>
               </div>
            </div>

            <div className="rectangle-100 rectangle-pc-50">
               <Link
                  className="project img-grayscale-hover arrow-right-translate-hover d-block"
                  to={`/cataloge/${projects[4]?.id ?? 1}`}
               >
                  {projects[4] &&
                  <Fragment>
                     <div className="img-grayscale">
                        <Image
                           src={`${process.env.REACT_APP_BASE_IMAGE_URL}/${projects[4]?.thumbnailSquare}`}
                           alt="project image"
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
                  </Fragment>}
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
                  {projects[5] &&
                  <Fragment>
                     <div
                        className="img-grayscale"
                        style={{ height: "100%", aspectRatio: "auto" }}
                     >
                        <Image
                           src={`${process.env.REACT_APP_BASE_IMAGE_URL}/${projects[5]?.thumbnailRect}`}
                           alt="project image"
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
                  </Fragment>}
               </Link>
            </div>

            <div className="rectangle-100 rectangle-pc-25 order-tab-1 order-pc-0">
               <div className="wrapper-flex">
                  <div className="rectangle-100 rectangle-tab-50 rectangle-pc-100">
                     <Link
                        className="project img-grayscale-hover arrow-right-translate-hover d-block"
                        to={`/cataloge/${projects[6]?.id ?? 1}`}
                     >
                        {projects[6] &&
                        <Fragment>
                           <div className="img-grayscale">
                              <Image
                                 src={`${process.env.REACT_APP_BASE_IMAGE_URL}/${projects[6]?.thumbnailSquare}`}
                                 alt="project image"
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
                        </Fragment>}
                     </Link>
                  </div>

                  <div className="rectangle-100 rectangle-tab-50 rectangle-pc-100">
                     <Link
                        className="project img-grayscale-hover arrow-right-translate-hover d-block"
                        to={`/cataloge/${projects[7]?.id ?? 1}`}
                     >
                        {projects[7] &&
                        <Fragment>
                           <div className="img-grayscale">
                              <Image
                                 src={`${process.env.REACT_APP_BASE_IMAGE_URL}/${projects[7]?.thumbnailSquare}`}
                                 alt="project image"
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
                        </Fragment>}
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
                  {projects[8] &&<Fragment>
                     <div className="img-grayscale">
                        <Image
                           src={`${process.env.REACT_APP_BASE_IMAGE_URL}/${projects[8]?.thumbnailSquare}`}
                           alt="project image"
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
                  </Fragment>}
               </Link>
            </div>

            <div className="rectangle-100 rectangle-tab-50 rectangle-pc-25">
               <Link
                  className="project img-grayscale-hover arrow-right-translate-hover d-block"
                  to={`/cataloge/${projects[9]?.id ?? 1}`}
               >
                  {projects[9] &&
                  <Fragment>
                     <div className="img-grayscale">
                        <Image
                           src={`${process.env.REACT_APP_BASE_IMAGE_URL}/${projects[9]?.thumbnailSquare}`}
                           alt="project image"
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
                  </Fragment>}
               </Link>
            </div>

            <div className="rectangle-100 rectangle-tab-50 rectangle-pc-25">
               <Link
                  className="project img-grayscale-hover arrow-right-translate-hover d-block"
                  to={`/cataloge/${projects[10]?.id ?? 1}`}
               >
                  {projects[10] &&
                  <Fragment>
                     <div className="img-grayscale">
                        <Image
                           src={`${process.env.REACT_APP_BASE_IMAGE_URL}/${projects[10]?.thumbnailSquare}`}
                           alt="project image"
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
                  </Fragment>}
               </Link>
            </div>

            <div className="rectangle-100 rectangle-tab-50 rectangle-pc-25">
               <Link
                  className="project img-grayscale-hover arrow-right-translate-hover d-block"
                  to={`/cataloge/${projects[11]?.id ?? 1}`}
               >
                  {projects[11] &&
                  <Fragment>
                     <div className="img-grayscale">
                        <Image
                           src={`${process.env.REACT_APP_BASE_IMAGE_URL}/${projects[11]?.thumbnailSquare}`}
                           alt="project image"
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
                  </Fragment>}
               </Link>
            </div>
         </div>
      </div>
   );
};

export default WorkProject;
