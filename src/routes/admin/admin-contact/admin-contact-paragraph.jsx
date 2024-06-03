import { useSelector } from "react-redux";
import { useMemo, useState } from "react";

const AdminContactParagraph = () => {
   const [contactForm, setContactForm] = useState({});

   const { userInfo } = useSelector((state) => state.userLogin);
   const preApi = useMemo(() => {
      return process.env.NODE_ENV === "production"
         ? process.env.REACT_APP_BASE_IMAGE_URL
         : "";
   }, []);
   const handleSubmit = () => {
      const config = {
         headers: {
            Authorization: userInfo,
         },
      };

      const data = { ...contactForm };
      const formData = new FormData();

      Object.keys(data).forEach((key) => {
         formData.append(key, data[key]);
      });

      // axios
      //    .post(preApi+"/api/admin/contact/contact-form/save", formData, config)
      //    .then((response) => {
      //       console.log("Success");
      //    })
      //    .catch((error) => {
      //       console.log(error.message);
      //    });
   };

   return (
      <div className="contact-text">
         <h4 className="mt-5">Chỉnh sửa text form liên hệ</h4>
         <label htmlFor="">Đoạn văn 1</label>
         <br />
         <textarea
            className="w-100 p-2"
            name=""
            id=""
            rows="3"
            onChange={(e) => {
               setContactForm({ ...this, text1: e.target.value });
            }}
         >
            {contactForm?.text1}
         </textarea>
         <br />
         <label htmlFor="">Đoạn văn 2</label>
         <br />
         <textarea
            className="w-100 p-2"
            name=""
            id=""
            rows="3"
            onChange={(e) => {
               setContactForm({ ...this, text2: e.target.value });
            }}
         >
            {contactForm?.text2}
         </textarea>
         <br />

         <button
            className="btn btn-primary px-4 fs-4 mt-5"
            type="button"
            onClick={handleSubmit()}
         >
            Submit
         </button>
         {/* <button className="btn btn-danger px-4 fs-4 mt-5" type="button">
            Hủy
         </button> */}
      </div>
   );
};

export default AdminContactParagraph;
