import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

import CatalogeImage1 from "../../../assets/images/cateloge/cataloge1.png";
import CatalogeImage2 from "../../../assets/images/cateloge/cataloge2.png";
import CatalogeImage3 from "../../../assets/images/cateloge/cataloge3.png";
import CatalogeImage4 from "../../../assets/images/cateloge/cataloge4.png";
import CatalogeImage5 from "../../../assets/images/cateloge/cataloge5.png";
import CatalogeImage6 from "../../../assets/images/cateloge/cataloge6.png";
import ProjectImage1 from "../../../assets/images/cateloge/project-1.png";

import CarouselImage2 from "../../../assets/images/carousel/carousel-2.png";
import CarouselImage3 from "../../../assets/images/carousel/carousel-3.png";
import { Fragment } from "react";

const AdminWorkProject = () => {
   return (
      <Fragment>
         <div className="projects">
            <h4 className="mt-5">Chỉnh sửa danh sách dự án</h4>
            <button type="button" className="btn btn-primary mt-4">
               Thêm mới
            </button>

            <div className="list-project mt-4 border pe-3">
               <div className="w-100 p-3 border-bottom">
                  <div className="row align-items-center">
                     <div className="col-2">
                        <Image src={ProjectImage1} alt="" className="w-75" />
                     </div>
                     <div className="col-8">Dự án xây dựng website Bumindo</div>
                     <div className="col-1">
                        <Link to="">Sửa</Link>
                     </div>
                     <div className="col-1">
                        <Link to="" className="text-danger">
                           Xóa
                        </Link>
                     </div>
                  </div>
               </div>

               <div className="w-100 p-3 border-bottom">
                  <div className="row align-items-center">
                     <div className="col-2">
                        <Image
                           src="../assets/img/projects/project-1.png"
                           alt=""
                           className="w-75"
                        />
                     </div>
                     <div className="col-8">Dự án xây dựng website Bumindo</div>
                     <div className="col-1">
                        <Link to="">Sửa</Link>
                     </div>
                     <div className="col-1">
                        <Link to="" className="text-danger">
                           Xóa
                        </Link>
                     </div>
                  </div>
               </div>

               <div className="w-100 p-3 border-bottom">
                  <div className="row align-items-center">
                     <div className="col-2">
                        <Image src={ProjectImage1} alt="" className="w-75" />
                     </div>
                     <div className="col-8">Dự án xây dựng website Bumindo</div>
                     <div className="col-1">
                        <Link to="">Sửa</Link>
                     </div>
                     <div className="col-1">
                        <Link to="" className="text-danger">
                           Xóa
                        </Link>
                     </div>
                  </div>
               </div>

               <div className="w-100 p-3 border-bottom">
                  <div className="row align-items-center">
                     <div className="col-2">
                        <Image src={ProjectImage1} alt="" className="w-75" />
                     </div>
                     <div className="col-8">Dự án xây dựng website Bumindo</div>
                     <div className="col-1">
                        <Link to="">Sửa</Link>
                     </div>
                     <div className="col-1">
                        <Link to="" className="text-danger">
                           Xóa
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="add-project">
            <h4 className="mt-5">Thêm dự án mới</h4>

            <label htmlFor="">Thumbnail</label>
            <div className="banner__img w-50 my-4 border">
               <i className="fa-solid fa-xmark"></i>
               <Image className="w-100" src={CarouselImage2} alt="" />
            </div>
            <input type="file" className="w-100" name="" id="" />
            <br />

            <label htmlFor="">Danh mục sản phẩm</label>
            <br />
            <div className="list-category">
               <div className="category-item d-flex align-items-center p-2">
                  <input type="checkbox" name="" id="" />
                  <h6 className="m-0 ms-3">Branding</h6>
               </div>

               <div className="category-item d-flex align-items-center p-2">
                  <input type="checkbox" name="" id="" />
                  <h6 className="m-0 ms-3">Branding</h6>
               </div>

               <div className="category-item d-flex align-items-center p-2">
                  <input type="checkbox" name="" id="" />
                  <h6 className="m-0 ms-3">Branding</h6>
               </div>
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
                           src={CarouselImage3}
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
      </Fragment>
   );
};

export default AdminWorkProject;
