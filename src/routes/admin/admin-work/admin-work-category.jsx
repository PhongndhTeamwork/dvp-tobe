import { Link } from "react-router-dom";

const AdminWorkCategory = () => {
   return (
      <div className="category">
         <h4 className="mt-5">Chỉnh sửa các danh mục dự án</h4>
         <button type="button" className="btn btn-primary mt-4 mb-3">
            Thêm mới
         </button>

         <div className="motto__list border">
            <div className="row w-100 align-items-center border-bottom py-3 ps-4">
               <div className="col-10">
                  <p className="mb-0">Mô tả</p>
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

            <div className="row w-100 align-items-center border-bottom py-3 ps-4">
               <div className="col-10">
                  <p className="mb-0">
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit.
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

            <div className="row w-100 align-items-center border-bottom py-3 ps-4">
               <div className="col-10">
                  <p className="mb-0">Mô tả</p>
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

         <h4 className="mt-4">Thêm danh mục dự án mới</h4>
         <label htmlFor="">Tên danh mục</label>
         <br />
         <input type="text" placeholder="Branding" />
         <br />
         <button className="btn btn-primary px-4 fs-5 mt-4" type="button">
            Submit
         </button>
         <button className="btn btn-danger px-4 fs-5 mt-4" type="button">
            Hủy
         </button>
      </div>
   );
};

export default AdminWorkCategory;
