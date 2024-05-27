const AdminContactParagraph = () => {
   return (
      <div className="contact-text">
         <h4 className="mt-5">Chỉnh sửa text form liên hệ</h4>
         <label htmlFor="">Đoạn văn 1</label>
         <br />
         <textarea className="w-100 p-2" name="" id="" rows="3">
            Đoạn văn chữ thường
         </textarea>
         <br />
         <label htmlFor="">Đoạn văn 2</label>
         <br />
         <textarea className="w-100 p-2" name="" id="" rows="3">
            Đoạn văn chữ in đậm
         </textarea>
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

export default AdminContactParagraph;
