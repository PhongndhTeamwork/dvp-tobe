import OfficeBackground from "../../../assets/images/others/office-bg.jpg";
import { Image } from "react-bootstrap";

const AdminContactLocation = () => {
   return (
      <div className="img-location">
         <h4 className="mt-5">Chỉnh sửa ảnh location trang liên hệ</h4>

         <label htmlFor="">Ảnh</label>
         <br />
         <Image className="w-50 my-3" src={OfficeBackground} />
         <br />
         <input type="file" />
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

export default AdminContactLocation;
