import "./cataloge-project.css";

import { Carousel, Image, Row, Col } from "react-bootstrap";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CatalogeProject = ({ activeIndex, projects }) => {
   const [isMobile, setIsMobile] = useState(false);
   const [isTablet, setIsTablet] = useState(false);

   useEffect(() => {
      const handleResize = () => {
         const width = window.innerWidth;
         if (width < 768) {
            setIsMobile(true);
            setIsTablet(false);
         } else if (width >= 768 && width < 1200) {
            setIsMobile(false);
            setIsTablet(true);
         } else {
            setIsMobile(false);
            setIsTablet(false);
         }
      };
      handleResize();

      window.addEventListener("resize", handleResize);

      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);

   return (
      <div>
         <Carousel interval={null} activeIndex={activeIndex}>
            {!isMobile && !isTablet
               ? Array(Math.ceil(projects.length / 4))
                    .fill()
                    .map((_, slideIndex) => (
                       <Carousel.Item key={slideIndex}>
                          <div className="wrapper-flex">
                             {projects
                                .slice(slideIndex * 4, slideIndex * 4 + 4)
                                .map((project, index) => (
                                   <Link
                                      className="rectangle-tab-50 rectangle-pc-25 project arrow-right-translate-hover d-block"
                                      to={`/cataloge/${project?.id}`}
                                      key={index}
                                      onClick={() => {
                                         window.scrollTo(0, 0);
                                      }}
                                   >
                                      <div className="project__img">
                                         <Image
                                            src={`${process.env.REACT_APP_BASE_IMAGE_URL}/${project?.thumbnailSquare}`}
                                         />
                                      </div>

                                      <div className="project__des">
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
                                   </Link>
                                ))}
                          </div>
                       </Carousel.Item>
                    ))
               : isMobile
               ? projects.map((project, index) => {
                    return (
                       <Carousel.Item key={index}>
                          <div className="wrapper-flex">
                             <Link
                                className="rectangle-100 rectangle-tab-50 rectangle-pc-25 project arrow-right-translate-hover d-block"
                                to={`/cataloge/${project?.id}`}
                                key={index}
                                onClick={() => {
                                   window.scrollTo(0, 0);
                                }}
                             >
                                <div className="project__img">
                                   <Image
                                      src={`${process.env.REACT_APP_BASE_IMAGE_URL}/${project?.thumbnailSquare}`}
                                   />
                                </div>

                                <div className="project__des">
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
                             </Link>
                          </div>
                       </Carousel.Item>
                    );
                 })
               : Array(Math.ceil(projects?.length / 2))
                    .fill()
                    .map((_, slideIndex) => (
                       <Carousel.Item key={slideIndex}>
                          <div className="wrapper-flex">
                             {projects
                                .slice(slideIndex * 2, slideIndex * 2 + 2)
                                .map((project, index) => (
                                   <Link
                                      className="rectangle-tab-50 rectangle-pc-25 project arrow-right-translate-hover d-block"
                                      to={`/cataloge/${project?.id}`}
                                      key={index}
                                      onClick={() => {
                                         window.scrollTo(0, 0);
                                      }}
                                   >
                                      <div className="project__img">
                                         <Image
                                            src={`${process.env.REACT_APP_BASE_IMAGE_URL}/${project?.thumbnailSquare}`}
                                         />
                                      </div>

                                      <div className="project__des">
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
                                   </Link>
                                ))}
                          </div>
                       </Carousel.Item>
                    ))}
         </Carousel>
      </div>
   );
};

export default CatalogeProject;
