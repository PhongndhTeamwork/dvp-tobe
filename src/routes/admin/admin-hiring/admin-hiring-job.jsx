import { Link } from "react-router-dom";


const AdminHiringJob = () => {
   return (
      <div className="job">
         <h4 className="mt-5">Chỉnh sửa danh sách công việc đang tuyển dụng</h4>
         <button className="btn btn-primary px-4 fs-5 mt-4 mb-2" type="button">
            Thêm mới
         </button>
         <br />

         <div className="list-job p-3 pt-1 my-4 border">
            <div className="job-item row w-100 align-items-center mt-3 border-bottom pb-2">
               <div className="col-10">
                  <h5 className="fw-medium">Designer</h5>
                  <p className="mb-0 fs-6">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Placeat consequatur neque
                  </p>
               </div>

               <div className="col-1">
                  <Link to="" className="">
                     Sửa
                  </Link>
               </div>
               <div className="col-1">
                  <Link to="" className="text-danger">
                     Xóa
                  </Link>
               </div>
            </div>

            <div className="job-item row w-100 align-items-center mt-3 border-bottom pb-2">
               <div className="col-10">
                  <h5 className="fw-medium">Designer</h5>
                  <p className="mb-0 fs-6">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Placeat consequatur neque
                  </p>
               </div>

               <div className="col-1">
                  <Link to="" className="">
                     Sửa
                  </Link>
               </div>
               <div className="col-1">
                  <Link to="" className="text-danger">
                     Xóa
                  </Link>
               </div>
            </div>

            <div className="job-item row w-100 align-items-center mt-3 border-bottom pb-2">
               <div className="col-10">
                  <h5 className="fw-medium">Designer</h5>
                  <p className="mb-0 fs-6">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Placeat consequatur neque
                  </p>
               </div>

               <div className="col-1">
                  <Link to="" className="">
                     Sửa
                  </Link>
               </div>
               <div className="col-1">
                  <Link to="" className="text-danger">
                     Xóa
                  </Link>
               </div>
            </div>
         </div>

         <h4 className="mt-5">Thêm vị trí tuyển dụng mới</h4>
         <label htmlFor="">Vị trí tuyển dụng</label>
         <br />
         <input
            type="text"
            className="w-100"
            placeholder="The story of DVP"
            value=""
         />
         <br />

         <label htmlFor="">Mô tả công việc</label>
         <br />
         <textarea className="w-100 p-2" name="" id="" rows="3">
            Đoạn văn chữ thường
         </textarea>
         <br />
         <label htmlFor="">Hướng dẫn ứng tuyển</label>
         <br />
         <textarea className="w-100 p-2" name="" id="" rows="3">
            Đoạn văn chữ thường
         </textarea>
         <br />
         <label htmlFor="">Email liên hệ</label>
         <br />
         <input
            type="text"
            className="w-100"
            placeholder="Câu chuyện về DVP"
            value=""
         />
         <br />

         <button className="btn btn-primary px-4 fs-4 mt-5" type="button">
            Submit
         </button>
         <button className="btn btn-danger px-4 fs-4 mt-5" type="button">
            Hủy
         </button>
      </div>
   );
};

export default AdminHiringJob;
