import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Col, Image, Row } from "react-bootstrap";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { Fragment } from "react";
import CatalogeProject from "../../../components/cataloge-project/cataloge-project";

import CatalogeImage1 from "../../../assets/images/cataloge/cataloge1.png";
import CatalogeImage2 from "../../../assets/images/cataloge/cataloge2.png";
import CatalogeImage3 from "../../../assets/images/cataloge/cataloge3.png";
import CatalogeImage4 from "../../../assets/images/cataloge/cataloge4.png";
import CatalogeImage5 from "../../../assets/images/cataloge/cataloge5.png";
import CatalogeImage6 from "../../../assets/images/cataloge/cataloge6.png";
import ProjectImage1 from "../../../assets/images/cataloge/project-1.png";

// import CarouselImage2 from "../../../assets/images/carousel/carousel-2.png";
// import CarouselImage3 from "../../../assets/images/carousel/carousel-3.png";

const AdminWorkProject = () => {
   const { userInfo } = useSelector((state) => state.userLogin);

   const { id } = useParams();
   const navigate = useNavigate();
   const [project, setProject] = useState([]);

   useEffect(() => {
      axios
         .get("/api/catalog/" + id)
         .then(({ data }) => {
            setProject(data.project);
         })
         .catch((error) => {
            throw new Error(error);
         });
   }, [id]);
   return (
      <div>
         <Button
            variant="dark"
            onClick={() => {
               navigate(-1);
            }}
         >
            Go back
         </Button>

         <div className="add-project">
            <h4 className="mt-5">Thêm dự án mới</h4>

            <label htmlFor="">Thumbnail vuông</label>
            <div className="banner__img w-50 my-4 border">
               <i className="fa-solid fa-xmark"></i>
               <Image
                  className="w-100"
                  alt=""
                  // src={newThumnailImages?.square}
               />
            </div>
            <label htmlFor="">Thumbnail hình chữ nhật</label>
            <div className="banner__img w-50 my-4 border">
               <i className="fa-solid fa-xmark"></i>
               <Image className="w-100" alt="" />
            </div>
            <input type="file" className="w-100" name="" id="" />
            <br />

            <label htmlFor="">Danh mục sản phẩm</label>
            <br />
            <div className="list-category">
               {/* {categories?.map((category, index) => (
                  <div
                     key={index}
                     className="category-item d-flex align-items-center p-2"
                  >
                     <input type="checkbox" name="" id="" />
                     <h6 className="m-0 ms-3">{category.name}</h6>
                  </div>
               ))} */}
            </div>

            <label htmlFor="">Sub title</label>
            <br />
            <input
               type="text"
               className="w-100"
               placeholder="The story of DVP"
               value=""
            />
            <br />
            <label htmlFor="">Title</label>
            <br />
            <input
               type="text"
               className="w-100"
               placeholder="Câu chuyện về DVP"
               value=""
            />
            <br />

            <label htmlFor="">Heading </label>
            <br />
            <input
               type="text"
               className="w-100"
               placeholder="The story of DVP"
               value=""
            />
            <br />
            <label htmlFor="">Đoạn văn 1</label>
            <br />
            <textarea className="w-100 p-2" name="" id="" rows="3">
               Đoạn văn chữ thường
            </textarea>
            <br />
            <label htmlFor="">Đoạn văn 2</label>
            <br />
            <textarea className="w-100 p-2" name="" id="" rows="3">
               Đoạn văn chữ thường
            </textarea>
            <br />

            <label htmlFor="">Tên khách hàng</label>
            <br />
            <input
               type="text"
               className="w-100"
               placeholder="The story of DVP"
               value=""
            />
            <br />
            <label htmlFor="">Ngày hoàn thành</label>
            <br />
            <input type="date" className="w-100" />
            <br />

            <label htmlFor="">Link demo sản phẩm</label>
            <br />
            <input
               type="text"
               className="w-100"
               placeholder="The story of DVP"
               value=""
            />
            <br />

            <label htmlFor="">Hình ảnh dự án</label>
            <br />
            <div className="row mt-5">
               <div className="col-12 py-2">
                  <Image className="w-100" src={CatalogeImage1} alt="" />
               </div>
               <div className="col-12 py-2">
                  <Image
                     className="w-100"
                     src={CatalogeImage2}
                     alt=""
                     srcset=""
                  />
               </div>
               <div className="col-6 py-2">
                  <Image className="w-100" src={CatalogeImage3} alt="" />
               </div>
               <div className="col-6 py-2">
                  <Image className="w-100" src={CatalogeImage4} alt="" />
               </div>
               <div className="col-12 py-2">
                  <Image className="w-100" src={CatalogeImage5} alt="" />
               </div>
               <div className="col-6 py-2">
                  <Image
                     className="w-100"
                     src={CatalogeImage6}
                     alt=""
                     srcset=""
                  />
               </div>
               <div className="col-6">
                  <div className="row">
                     <div className="col-12 py-2">
                        <Image
                           className="w-100"
                           // src={}
                           alt=""
                           srcset=""
                        />
                     </div>
                     <div className="col-12 py-2">
                        <Image
                           className="w-100"
                           src={CatalogeImage4}
                           alt=""
                           srcset=""
                        />
                     </div>
                  </div>
               </div>
            </div>

            <input className="my-2 mt-5" type="file" name="" id="" />
            <br />
            <input className="my-2" type="file" name="" id="" />
            <br />
            <input className="my-2" type="file" name="" id="" />
            <br />
            <input className="my-2" type="file" name="" id="" />
            <br />
            <input className="my-2" type="file" name="" id="" />
            <br />
            <input className="my-2" type="file" name="" id="" />
            <br />
            <input className="my-2" type="file" name="" id="" />
            <br />
            <input className="my-2" type="file" name="" id="" />
            <br />

            <button className="btn btn-primary px-4 fs-5 mt-4" type="button">
               Submit
            </button>
            <button className="btn btn-danger px-4 fs-5 mt-4" type="button">
               Hủy
            </button>
         </div>
      </div>
   );
};

export default AdminWorkProject;
