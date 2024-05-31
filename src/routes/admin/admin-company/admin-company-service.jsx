import axios from "axios";
import { useEffect, useState } from "react";

import CarouselImage1 from "../../../assets/images/carousel/carousel-1.png";
import CarouselImage2 from "../../../assets/images/carousel/carousel-2.png";
import CarouselImage3 from "../../../assets/images/carousel/carousel-3.png";

import { Image, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";




const AdminCompanyService = () => {
   const [services, setServices] = useState([]);

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
               };
            })
         );
      });
   }, []);


   return (
      <div className="service">
         <h4 className="mt-5 mb-4">Chỉnh sửa danh sách dịch vụ</h4>
         <button className="btn btn-primary px-4 fs-5 my-3" type="button">
            Thêm mới
         </button>
         <br />

         <div className="service-list border px-3">
            {services.map((service, serviceIndex) => (
               <div
                  key={serviceIndex}
                  className="service__item row py-4 align-items-center"
               >
                  <div className="col-12 col-md-5">
                     <Carousel interval={1000}>
                        {service?.Carousel?.map((image, imageIndex) => (
                           <Carousel.Item
                              className="carousel-item"
                              key={imageIndex}
                           >
                              <Image
                                 src={image}
                                 className="w-100"
                                 alt="carousel-img-1"
                              />
                           </Carousel.Item>
                        ))}
                     </Carousel>
                  </div>

                  <div className="col-12 col-md-5">
                     {service.serviceInfos?.map((serviceInfo, index) => (
                        <h6 key={index}>{serviceInfo}</h6>
                     ))}
                  </div>

                  <div className="col-1">
                     <Link to="">Sửa</Link>
                  </div>
                  <div className="col-1">
                     <Link className="text-danger" to="">
                        Xóa
                     </Link>
                  </div>
               </div>
            ))}
         </div>

         <h4 className="mt-5">Thêm dịch vụ mới</h4>

         <label htmlFor="">Tên dịch vụ</label>
         <br />
         <input type="text" className="w-100" defaultValue="Branding" />
         <br />
         <label htmlFor="">Carousel</label>
         <br />
         <div className="carousel__imgs my-4 py-2 border w-100">
            <div className="img w-25 mx-2 border">
               <i className="fa-solid fa-xmark"></i>
               <Image className="w-100" src={CarouselImage1} />
            </div>
            <div className="img w-25 mx-2 border">
               <i className="fa-solid fa-xmark"></i>
               <Image className="w-100" src={CarouselImage2} />
            </div>
            <div className="img w-25 mx-2 border">
               <i className="fa-solid fa-xmark"></i>
               <Image className="w-100" src={CarouselImage3} />
            </div>
         </div>
         <input type="file" multiple name="" id="" />
         <br />
         <label htmlFor="">Mô tả</label>
         <br />
         <textarea
            className="w-100 p-3"
            name=""
            id=""
            rows="7"
            defaultValue="Mỗi dòng một mô tả"
         ></textarea>

         <button className="btn btn-primary px-4 fs-4 mt-5" type="button">
            Submit
         </button>
         <button className="btn btn-danger px-4 fs-4 mt-5" type="button">
            Hủy
         </button>
      </div>
   );
}

export default AdminCompanyService;