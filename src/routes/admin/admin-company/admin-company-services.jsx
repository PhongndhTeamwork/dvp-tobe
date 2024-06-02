import axios from "axios";
import { useEffect, useState } from "react";

import { Image, Row, Col, Table, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminCompanyServices = () => {
   const { userInfo } = useSelector((state) => state.userLogin);

   const [services, setServices] = useState([]);

   const navigate = useNavigate();

   const [newService, setNewService] = useState({
      serviceName: "",
      description: "",
      serviceInfoJSON: [],
      serviceCategoryJSON: [],
      serviceQuoteJSON: [],
      carouselImages: [],
      quoteIcons: [],
      // indexCarousel: [],
   });


   const [newCarouselImages, setNewCarouselsImages] = useState([]);
   const [newIcons, setNewIcons] = useState([]);
   const [newQuote, setNewQuote] = useState(
      Array(3)
         .fill(0)
         .map((_) => {
            return {
               name: "",
               title: "",
               price: 0,
               descriptions: [],
            };
         })
   );
   const [newCategories, setNewCategories] = useState([]);

   const [newIconImages, setNewIconImages] = useState([]);

   const [quoteCategoryQuantity, setQuoteCategoryQuantity] = useState(3);

   useEffect(() => {
      axios.get("/api/info/services").then(({ data }) => {
         setServices(
            data.services?.map((service) => {
               return {
                  ...service,
                  carouselImages: service.carouselImages?.map(
                     (image) =>
                        process.env.REACT_APP_BASE_IMAGE_URL + "/" + image
                  ),
                  serviceQuotes: service.serviceQuotes.map((quote) => {
                     return {
                        ...quote,
                        icon:
                           process.env.REACT_APP_BASE_IMAGE_URL +
                           "/" +
                           quote.icon,
                     };
                  }),
               };
            })
         );
      });
   }, []);

   const handleChangeCarouselImages = (e, index) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      if (file) {
         let projectImagesTemp = [...newService.carouselImages];
         projectImagesTemp[index] = file;
         setNewService({ ...newService, carouselImages: projectImagesTemp });
         reader.onloadend = () => {
            let imagesTemp = [...newCarouselImages];
            imagesTemp[index] = reader.result;
            setNewCarouselsImages(imagesTemp);
         };
         reader.readAsDataURL(file);
      }
   };

   const handleChangeIcons = (e, index) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      if (file) {
         let iconsTemp = [...newIcons];
         iconsTemp[index] = file;
         setNewIcons(iconsTemp);
         reader.onloadend = () => {
            let imagesTemp = [...newIconImages];
            imagesTemp[index] = reader.result;
            setNewIconImages(imagesTemp);
         };
         reader.readAsDataURL(file);
      }
   };

   const handleInputCategory = (e, quoteIndex, index) => {
      let categoriesTemp = [...newCategories];
      switch (quoteIndex) {
         case 0:
            if (!categoriesTemp[index]?.quote1) {
               categoriesTemp[index] = {
                  ...categoriesTemp[index],
                  quote1: "",
               };
            }
            categoriesTemp[index].quote1 = e.target.value;
            break;
         case 1:
            if (!categoriesTemp[index]?.quote2) {
               categoriesTemp[index] = {
                  ...categoriesTemp[index],
                  quote2: "",
               };
            }
            categoriesTemp[index].quote2 = e.target.value;
            break;
         case 2:
            if (!categoriesTemp[index]?.quote3) {
               categoriesTemp[index] = {
                  ...categoriesTemp[index],
                  quote3: "",
               };
            }
            categoriesTemp[index].quote3 = e.target.value;
            break;
         default:
            break;
      }
      setNewCategories(categoriesTemp);
   };

   const checkHasValidated = () => {
      let isValid = true;
      if (newService.serviceName === "" || newService.description === "") {
         console.log(1);
         isValid = false;
      }

      if (
         newService.quoteIcons.length !== 3 ||
         newService.serviceQuoteJSON.length !== 3
      ) {
         console.log(2);
         isValid = false;
      }
      if (
         newService.quoteIcons.some((element) => {
            return typeof element !== "object";
         }) ||
         newService.carouselImages.some((element) => {
            return typeof element !== "object";
         })
      ) {
         console.log(3);
         isValid = false;
      }

      if (
         newService.serviceQuoteJSON.some(
            (element) =>
               !element.name ||
               !element.title ||
               !element.price ||
               !element.descriptions ||
               element.name === "" ||
               element.title === "" ||
               element.price === ""
         )
      ) {
         console.log(4);
         isValid = false;
      }

      return isValid;
   };

   const handleSubmit = () => {
      const config = {
         headers: {
            Authorization: userInfo,
         },
      };


      newService.quoteIcons = newIcons;

      //? Add serviceQuoteJSON
      newService.serviceQuoteJSON = newQuote.map((quote) => {
         return {
            ...quote,
            descriptions: quote.descriptions.filter(
               (d) => d !== "" && d !== undefined
            ),
         };
      });


      //? Add serviceCategoryJSON
      newService.serviceCategoryJSON = newCategories.map((c) => {
         return {
            ...c,
            quote1:
               c.quote1 === "Uncheck"
                  ? "0"
                  : c.quote1 === "Check"
                  ? "1"
                  : c.quote1,
            quote2:
               c.quote2 === "Uncheck"
                  ? "0"
                  : c.quote2 === "Checked"
                  ? "1"
                  : c.quote2,
            quote3:
               c.quote3 === "Uncheck"
                  ? "0"
                  : c.quote3 === "Check"
                  ? "1"
                  : c.quote3,
         };
      });
      let newCategoriesTemp = newCategories
         .slice(0, quoteCategoryQuantity)
         .filter(
            (c) =>
               c.name &&
               c.quote1 &&
               c.quote2 &&
               c.quote3 &&
               c.name !== "" &&
               c.quote1 !== "" &&
               c.quote2 !== "" &&
               c.quote3 !== ""
         );
      setNewCategories(newCategoriesTemp);
      setQuoteCategoryQuantity(newCategoriesTemp.length);
      newService.serviceCategoryJSON = newCategories;



      let data = { ...newService };


      if (!checkHasValidated()) return;

      const formData = new FormData();

      Object.keys(data).forEach((key) => {
         if(key !== "quoteIcons" && key !== "carouselImages")
         formData.append(key, data[key]);
      });

      data.carouselImages.forEach((carouselImage) => {
         formData.append("carouselImages", carouselImage);
      });

      data.quoteIcons.forEach((quoteIcon) => {
         formData.append("quoteIcons", quoteIcon);
      });

      for (const pair of formData.entries()) {
         console.log(pair[0] + ", " + pair[1]);
      }

      axios
         .post("/api/admin/company/service/save", formData, config)
         .then(({ data }) => {
            console.log(data.message);
         })
         .catch((error) => {
            console.log(error.message);
         });
   };

   return (
      <div className="service">
         <h4 className="mt-0 mb-0">Danh sách dịch vụ</h4>
         <br />
         <div className="admin-company-service__list">
            {services.map(service => {
               return (
                  <div className="admin-company-service__body" onClick={() => {
                     navigate("/admin/dashboard/company/service/"+service.id);
                  }}>
                     {service.serviceName}
                  </div>
               )
            })}            
         </div>
         <h4 className="mt-5">Thêm dịch vụ mới</h4>
         <label htmlFor="">Tên dịch vụ</label>
         <br />
         <input
            type="text"
            className="w-100"
            value={newService.serviceName}
            onChange={(e) => {
               setNewService({
                  ...newService,
                  serviceName: e.target.value,
               });
            }}
         />
         <br />
         <label htmlFor="">Mô tả</label>
         <br />
         <textarea
            rows={5}
            type="text"
            className="w-100"
            value={newService.description}
            onChange={(e) => {
               setNewService({
                  ...newService,
                  description: e.target.value,
               });
            }}
         ></textarea>
         <br />
         <label htmlFor="">Carousel</label>
         <br />
         <div className="carousel__imgs my-4 py-2 border w-100">
            <div className="img w-25 mx-2 border">
               <i className="fa-solid fa-xmark"></i>
               <Image className="w-100" src={newCarouselImages[0]} />
            </div>
            <div className="img w-25 mx-2 border">
               <i className="fa-solid fa-xmark"></i>
               <Image className="w-100" src={newCarouselImages[1]} />
            </div>
            <div className="img w-25 mx-2 border">
               <i className="fa-solid fa-xmark"></i>
               <Image className="w-100" src={newCarouselImages[2]} />
            </div>
         </div>
         <div className="d-flex" style={{ gap: "1rem" }}>
            <input
               type="file"
               multiple
               name=""
               id=""
               onChange={(e) => {
                  handleChangeCarouselImages(e, 0);
               }}
            />
            <input
               type="file"
               multiple
               name=""
               id=""
               onChange={(e) => {
                  handleChangeCarouselImages(e, 1);
               }}
            />
            <input
               type="file"
               multiple
               name=""
               id=""
               onChange={(e) => {
                  handleChangeCarouselImages(e, 2);
               }}
            />
         </div>
         <br />
         <label htmlFor="">Thông tin</label>
         <br />
         <input
            type="text"
            className="w-100"
            value={newService.serviceInfoJSON[0]}
            onChange={(e) => {
               let serviceInfo = [...newService.serviceInfoJSON];
               serviceInfo[0] = e.target.value;
               setNewService({
                  ...newService,
                  serviceInfoJSON: serviceInfo,
               });
            }}
         />
         <br />
         <br />
         <input
            type="text"
            className="w-100"
            value={newService.serviceInfoJSON[1]}
            onChange={(e) => {
               let serviceInfo = [...newService.serviceInfoJSON];
               serviceInfo[1] = e.target.value;
               setNewService({
                  ...newService,
                  serviceInfoJSON: serviceInfo,
               });
            }}
         />
         <br />
         <br />
         <input
            type="text"
            className="w-100"
            value={newService.serviceInfoJSON[2]}
            onChange={(e) => {
               let serviceInfo = [...newService.serviceInfoJSON];
               serviceInfo[2] = e.target.value;
               setNewService({
                  ...newService,
                  serviceInfoJSON: serviceInfo,
               });
            }}
         />
         <br />
         <h4 className="mt-4">Dịch vụ</h4>
         <div className="admin-company-service__quote">
            <Row className="admin-company-service__quote-row">
               {Array(3)
                  .fill(0)
                  .map((_, index) => (
                     <Col
                        key={index + "admin-company"}
                        xs={12}
                        sm={12}
                        md={6}
                        lg={4}
                        xl={4}
                        xxl={4}
                        className="my-2 p-2"
                     >
                        <div className="admin-company-service__quote-col">
                           <label htmlFor="">Tên</label>
                           <br />
                           <input
                              type="text"
                              className="w-100"
                              value={newQuote[index]?.name}
                              onChange={(e) => {
                                 let quoteTemp = [...newQuote];
                                 quoteTemp[index].name = e.target.value;
                                 setNewQuote(quoteTemp);
                              }}
                           />
                           <br />
                           <label htmlFor="">Tiêu đề</label>
                           <br />
                           <input
                              type="text"
                              className="w-100"
                              value={newQuote[index]?.title}
                              onChange={(e) => {
                                 let quoteTemp = [...newQuote];
                                 quoteTemp[index].title = e.target.value;
                                 setNewQuote(quoteTemp);
                              }}
                           />
                           <br />
                           <label htmlFor="">Giá</label>
                           <br />
                           <input
                              type="number"
                              className="w-100"
                              step={500000}
                              min={0}
                              value={newQuote[index]?.price}
                              onChange={(e) => {
                                 let quoteTemp = [...newQuote];
                                 quoteTemp[index].price = e.target.value;
                                 setNewQuote(quoteTemp);
                              }}
                           />
                           <br />
                           <label htmlFor="">Icon</label>
                           <br />
                           <div className="img w-75 mx-2 my-2 border">
                              <Image
                                 className="w-100"
                                 src={newIconImages[index]}
                              />
                           </div>
                           <input
                              type="file"
                              className="w-100"
                              onChange={(e) => {
                                 handleChangeIcons(e, index);
                              }}
                           />
                           <br />
                           <label htmlFor="">Mô tả</label>
                           {Array(index === 1 ? 9 : 8)
                              .fill()
                              .map((_, desIndex) => (
                                 <div key={desIndex + "des"}>
                                    <br />
                                    <input
                                       type="text"
                                       className="w-100"
                                       onChange={(e) => {
                                          let quoteTemp = [...newQuote];
                                          let descriptionTemp = [
                                             ...newQuote[index].descriptions,
                                          ];
                                          descriptionTemp[desIndex] =
                                             e.target.value;
                                          quoteTemp[index].descriptions =
                                             descriptionTemp;
                                          setNewQuote(quoteTemp);
                                       }}
                                    />
                                    <br />
                                 </div>
                              ))}
                        </div>
                     </Col>
                  ))}
            </Row>
         </div>

         <h4 className="mt-5">Danh mục dịch vụ</h4>
         <Button
            variant="success"
            className="my-2"
            onClick={() => {
               setQuoteCategoryQuantity((prev) => prev + 1);
            }}
         >
            Thêm danh mục
         </Button>
         <Button
            variant="danger"
            className="my-2 mx-3"
            onClick={() => {
               setQuoteCategoryQuantity((prev) => prev >1 ? prev - 1 : 1);
            }}
         >
            Xóa danh mục cuối
         </Button>
         <div className="admin-company-service__category">
            <Table striped bordered hover>
               <thead>
                  <tr>
                     <th></th>
                     <th>
                        {newQuote[0].name === "" ? "Quote 1" : newQuote[0].name}
                     </th>
                     <th>
                        {newQuote[1].name === "" ? "Quote 2" : newQuote[1].name}
                     </th>
                     <th>
                        {newQuote[2].name === "" ? "Quote 3" : newQuote[2].name}
                     </th>
                  </tr>
               </thead>
               <tbody>
                  {Array(quoteCategoryQuantity)
                     .fill(0)
                     .map((_, index) => (
                        <tr key={index + "quoteCa"}>
                           <td>
                              <textarea
                                 rows={1}
                                 type="text"
                                 className="w-100"
                                 required
                                 value={newCategories[index]?.name}
                                 onChange={(e) => {
                                    let categoriesTemp = [...newCategories];
                                    if (!categoriesTemp[index]?.name) {
                                       categoriesTemp[index] = {
                                          ...categoriesTemp[index],
                                          name: "",
                                       };
                                    }
                                    categoriesTemp[index].name = e.target.value;
                                    setNewCategories(categoriesTemp);
                                 }}
                              ></textarea>
                           </td>
                           {Array(3)
                              .fill(0)
                              .map((_, quoteIndex) => (
                                 <td key={quoteIndex + "quote-lop"}>
                                    <input
                                       list="quote-categories"
                                       name="quote-category"
                                       id="quote-category"
                                       required
                                       value={
                                          quoteIndex === 0
                                             ? newCategories[index]?.quote1
                                             : quoteIndex === 1
                                             ? newCategories[index]?.quote2
                                             : newCategories[index]?.quote3
                                       }
                                       onChange={(e) => {
                                          handleInputCategory(
                                             e,
                                             quoteIndex,
                                             index
                                          );
                                       }}
                                    />
                                    <datalist id="quote-categories">
                                       <option value="Check" />
                                       <option value="Uncheck" />
                                    </datalist>
                                 </td>
                              ))}
                        </tr>
                     ))}
               </tbody>
            </Table>
         </div>

         <button
            className="btn btn-primary px-4 fs-4 mt-5"
            type="button"
            onClick={() => {
               handleSubmit();
            }}
         >
            Submit
         </button>
      </div>
   );
};

export default AdminCompanyServices;
