import "./admin-contact.css";

import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

import Notification from "../../../components/notification/notification";

import OfficeBackground from "../../../assets/images/others/office-bg.jpg";
import { AdminContext } from "../adminContext";

const AdminContact = () => {
   const { fullView } = useContext(AdminContext);

   return (
      <Fragment>
         {/* <!-- Pop up to show notifications --> */}
         {/* <Notification /> */}

         {/* <!-- Loading animation --> */}
         <div id="popup-loader">
            <div className="circle"></div>
         </div>

         <div
            className="content d-flex "
            style={{ width: fullView ? "100vw" : "82.5vw" }}
         >
            <div className="vh-100 content-wrapper px-2 px-lg-4">
               <h4 className="p-3 ps-lg-0 fs-4 text-light fw-semibold">
                  Chỉnh sửa trang liên hệ
               </h4>

               <div className="content-body px-0 py-4 px-md-4">
                  <div className="row">
                     <div className="col-12 col-lg-10 col-xl-8 col-xxl-6">
                        {/* <!-- Story --> */}
                        <div className="story">
                           <h4 className="mt-5">
                              Chỉnh sửa câu chuyện trang liên hệ
                           </h4>

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
                           <label htmlFor="">Subtitle2</label>
                           <br />
                           <input
                              type="text"
                              className="w-50 mb-2"
                              placeholder="Câu chuyện về DVP"
                              value=""
                           />
                           <input
                              type="text"
                              className="w-50"
                              placeholder="Câu chuyện về DVP"
                              value=""
                           />
                           <br />
                           <label htmlFor="">Ảnh tiêu đề</label>
                           <br />
                           <Image
                              className="w-50 my-3"
                              src={OfficeBackground}
                           />
                           <br />
                           <input type="file" name="" id="" />
                           <br />

                           <button
                              className="btn btn-primary px-4 fs-4 mt-5"
                              type="button"
                           >
                              Submit
                           </button>
                           <button
                              className="btn btn-danger px-4 fs-4 mt-5"
                              type="button"
                           >
                              Hủy
                           </button>
                        </div>
                        {/* <!-- End: Story --> */}

                        {/* <!-- Image location --> */}
                        <div className="img-location">
                           <h4 className="mt-5">
                              Chỉnh sửa ảnh location trang liên hệ
                           </h4>

                           <label htmlFor="">Ảnh</label>
                           <br />
                           <Image
                              className="w-50 my-3"
                              src={OfficeBackground}
                           />
                           <br />
                           <input type="file" />
                           <br />

                           <button
                              className="btn btn-primary px-4 fs-4 mt-5"
                              type="button"
                           >
                              Submit
                           </button>
                           <button
                              className="btn btn-danger px-4 fs-4 mt-5"
                              type="button"
                           >
                              Hủy
                           </button>
                        </div>
                        {/* <!-- End: Image location --> */}

                        {/* <!-- Contact text --> */}
                        <div className="contact-text">
                           <h4 className="mt-5">Chỉnh sửa text form liên hệ</h4>
                           <label htmlFor="">Đoạn văn 1</label>
                           <br />
                           <textarea
                              className="w-100 p-2"
                              name=""
                              id=""
                              rows="3"
                           >
                              Đoạn văn chữ thường
                           </textarea>
                           <br />
                           <label htmlFor="">Đoạn văn 2</label>
                           <br />
                           <textarea
                              className="w-100 p-2"
                              name=""
                              id=""
                              rows="3"
                           >
                              Đoạn văn chữ in đậm
                           </textarea>
                           <br />

                           <button
                              className="btn btn-primary px-4 fs-4 mt-5"
                              type="button"
                           >
                              Submit
                           </button>
                           <button
                              className="btn btn-danger px-4 fs-4 mt-5"
                              type="button"
                           >
                              Hủy
                           </button>
                        </div>
                        {/* <!-- End: Contact text --> */}
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- End Body --></img> */}
      </Fragment>
   );
};

export default AdminContact;
