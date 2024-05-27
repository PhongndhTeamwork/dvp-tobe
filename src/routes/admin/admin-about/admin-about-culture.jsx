import { Image } from "react-bootstrap";

import CultureImage1 from "../../../assets/images/culture/culture1.png";
import CultureImage2 from "../../../assets/images/culture/culture2.png";
import CultureImage3 from "../../../assets/images/culture/culture3.png";
import CultureImage4 from "../../../assets/images/culture/culture4.png";
import CultureImage5 from "../../../assets/images/culture/culture5.png";

const AdminAboutCulture = () => {
   return (
      <div className="culture">
                           <h4 className="mt-5">
                              Chỉnh sửa văn hóa trang giới thiệu
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
                           <label htmlFor="">Đoạn văn</label>
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

                           <label className="mt-4" htmlFor="">
                              Thêm ảnh
                           </label>
                           <div className="row justify-content-between mt-4 p-2 border">
                              <div className="col-3 row flex-column justify-content-between">
                                 <div className="col-12">
                                    <Image
                                       className="w-100"
                                       src={CultureImage1}
                                    />
                                 </div>
                                 <div className="col-12">
                                    <Image
                                       className="w-100"
                                       src={CultureImage2}
                                    />
                                 </div>
                              </div>
                              <div className="col-6 row">
                                 <Image className="w-100" src={CultureImage3} />
                              </div>
                              <div className="col-3 row flex-column justify-content-between">
                                 <div className="col-12">
                                    <Image
                                       className="w-100"
                                       src={CultureImage4}
                                    />
                                 </div>
                                 <div className="col-12">
                                    <Image
                                       className="w-100"
                                       src={CultureImage5}
                                    />
                                 </div>
                              </div>
                           </div>

                           <input className="mt-4" type="file" name="" id="" />
                           <br />
                           <input className="mt-3" type="file" name="" id="" />
                           <br />
                           <input className="mt-3" type="file" name="" id="" />
                           <br />
                           <input className="mt-3" type="file" name="" id="" />
                           <br />
                           <input className="mt-3" type="file" name="" id="" />
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
   )
}

export default AdminAboutCulture;