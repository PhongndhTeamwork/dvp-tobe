import { Link } from "react-router-dom";

const AdminAboutMotto = () => {
   return (
      <div className="motto">
         <h4 className="mt-5 mb-4">Chỉnh sửa danh sách phương châm</h4>
         <button className="btn btn-primary px-4 fs-5 mb-4" type="button">
            Thêm mới
         </button>
         <br />

         <div className="motto__list border">
            <div className="motto-item row w-100 align-items-center border-bottom py-3 ps-4">
               <div className="col-10">
                  <h6>Tiêu đề</h6>
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

            <div className="motto-item row w-100 align-items-center border-bottom py-3 ps-4">
               <div className="col-10">
                  <h6>Tiêu đề</h6>
                  <p className="mb-0">
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Quos aspernatur incidunt veniam animi officiis,
                     voluptatibus aut placeat reprehenderit similique dolorem
                     corrupti, laborum ab eius! Eaque, sequi? Eius nostrum
                     dolorem similique.
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

            <div className="motto-item row w-100 align-items-center border-bottom py-3 ps-4">
               <div className="col-10">
                  <h6>Tiêu đề</h6>
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

         <h4 className="mt-5">Thêm phương châm mới</h4>

         <label htmlFor="">Tiêu đề</label>
         <br />
         <input type="text" className="w-100" placeholder="Branding" value="" />
         <br />
         <label htmlFor="">Mô tả</label>
         <br />
         <textarea className="w-100 p-3" name="" id="" rows="4"></textarea>

         <button className="btn btn-primary px-4 fs-4 mt-5" type="button">
            Submit
         </button>
         <button className="btn btn-danger px-4 fs-4 mt-5" type="button">
            Hủy
         </button>
      </div>
   );
};

export default AdminAboutMotto;
