import OfficeBackground from "../../../assets/images/others/office-bg.jpg";
import { AdminContext } from "../adminContext";
import { Image } from "react-bootstrap";

const AdminContactStory = () => {
   return (
      <div className="story">
         <h4 className="mt-5">Chỉnh sửa câu chuyện trang liên hệ</h4>

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
         <Image className="w-50 my-3" src={OfficeBackground} />
         <br />
         <input type="file" name="" id="" />
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

export default AdminContactStory;
