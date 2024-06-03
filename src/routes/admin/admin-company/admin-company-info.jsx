import { Fragment, useMemo } from "react";
import { Image } from "react-bootstrap";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import axios from "axios";

import { Form } from "react-bootstrap";

const AdminCompanyInfo = () => {
   const { userInfo } = useSelector((state) => state.userLogin);

   const preApi = useMemo(() => {
      return process.env.NODE_ENV === "production"
         ? process.env.REACT_APP_BASE_IMAGE_URL
         : "";
   }, []);

   const [companyInfo, setCompanyInfo] = useState({});
   const [images, setImages] = useState([]);

   useEffect(() => {
      axios.get(preApi+"/api/info/company").then(({ data }) => {
         setCompanyInfo({
            ...data.company,
            logoImage:
               process.env.REACT_APP_BASE_IMAGE_URL + "/" + data.company.logoImage,
            companyImage:
               process.env.REACT_APP_BASE_IMAGE_URL +
               "/" +
               data.company.companyImage,
            locationImage:
               process.env.REACT_APP_BASE_IMAGE_URL +
               "/" +
               data.company.locationImage,
         });

         setImages({
            logoImage:
               process.env.REACT_APP_BASE_IMAGE_URL + "/" + data.company.logoImage,
            companyImage:
               process.env.REACT_APP_BASE_IMAGE_URL +
               "/" +
               data.company.companyImage,
            locationImage:
               process.env.REACT_APP_BASE_IMAGE_URL +
               "/" +
               data.company.locationImage,
         });
      });
   }, [preApi]);

   const handleChangeImage = (e, type) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      if (file) {
         switch (type) {
            case "logoImage":
               setCompanyInfo({ ...companyInfo, logoImage: file });
               reader.onloadend = () => {
                  setImages({ ...images, logoImage: reader.result });
               };
               reader.readAsDataURL(file);
               break;

            case "company":
               setCompanyInfo({ ...companyInfo, companyImage: file });
               reader.onloadend = () => {
                  setImages({ ...images, companyImage: reader.result });
               };
               reader.readAsDataURL(file);
               break;

            case "location":
               setCompanyInfo({ ...companyInfo, locationImage: file });
               reader.onloadend = () => {
                  setImages({ ...images, locationImage: reader.result });
               };
               reader.readAsDataURL(file);
               break;
            default:
         }
      }
   };

   const handleSubmit = () => {
      const config = {
         headers: {
            Authorization: userInfo,
         },
      };

      let data = {
         ...companyInfo,
      };

      let date = new Date(data.licenseDate);

      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");

      const formattedDate = `${year}-${month}-${day}`;

      data.licenseDate = formattedDate;

      if (typeof data.logoImage !== "object") delete data.logoImage;
      if (typeof data.companyImage !== "object") delete data.companyImage;
      if (typeof data.locationImage !== "object") delete data.locationImage;
      delete data.logo;

      console.log(data);

      const formData = new FormData();

      Object.keys(data).forEach((key) => {
         formData.append(key, data[key]);
      });

      axios
         .post(preApi+"/api/admin/company/info/save", formData, config)
         .then(({ data }) => {
            if (data.success)
               alert("Lưu thành công");
            else 
               alert("Lưu thất bại", data.message);
         })
         .catch((error) => {
            alert("Lưu thất bại", error.message);
            console.log(error.message);
         });
   };

   return (
      <Fragment>
         <label htmlFor="">Logo công ty</label>
         <br />
         <Image className="w-25 my-4" src={images?.logoImage} alt="" />
         <br />
         <input
            type="file"
            onChange={(e) => {
               handleChangeImage(e, "logoImage");
            }}
         />
         <br />
         <label htmlFor="">Tên công ty</label>
         <br />
         <input
            type="text"
            className="w-100"
            defaultValue={companyInfo?.companyName}
            onChange={(e) => {
               setCompanyInfo({ ...companyInfo, companyName: e.target.value });
            }}
         />
         <br />
         <label htmlFor="">Giới thiệu ngắn</label>
         <br />
         <textarea
            className="w-100 p-2"
            name=""
            id=""
            rows="5"
            onChange={(e) => {
               setCompanyInfo({
                  ...companyInfo,
                  companyDescription: e.target.value,
               });
            }}
            defaultValue={companyInfo?.companyDescription}
         ></textarea>
         <br />
         <label htmlFor="">Ảnh công ty</label>
         <br />
         <Image className="w-75 my-4" src={images?.companyImage} alt="" />
         <input
            type="file"
            onChange={(e) => {
               handleChangeImage(e, "company");
            }}
         />
         <br />

         <label htmlFor="">Ảnh vị trí</label>
         <br />
         <Image className="w-75 my-4" src={images?.locationImage} alt="" />
         {/* <br /> */}
         <input
            type="file"
            onChange={(e) => {
               handleChangeImage(e, "location");
            }}
         />
         <br />
         <label htmlFor="">Số đăng ký</label>
         <br />
         <input
            type="text"
            className="w-100"
            defaultValue={companyInfo?.licenseCode}
            onChange={(e) => {
               setCompanyInfo({ ...companyInfo, licenseCode: e.target.value });
            }}
         />
         <br />
         <label htmlFor="">Ngày cấp phép</label>
         <br />
         <Form.Group className="w-100">
            <DatePicker
               selected={
                  companyInfo.licenseDate
                     ? new Date(companyInfo.licenseDate)
                     : new Date()
               }
               onChange={(date) =>
                  setCompanyInfo({ ...companyInfo, licenseDate: date })
               }
               dateFormat="dd/MM/yyyy"
            />
         </Form.Group>

         {/* <br /> */}
         <label htmlFor="">Nơi cấp phép</label>
         <br />
         <input
            type="text"
            className="w-100"
            defaultValue={companyInfo?.licenseAddress}
            onChange={(e) => {
               setCompanyInfo({
                  ...companyInfo,
                  licenseAddress: e.target.value,
               });
            }}
         />
         <br />
         <label htmlFor="">Địa chỉ công ty</label>
         <br />
         <input
            type="text"
            className="w-100"
            defaultValue={companyInfo?.companyAddress}
            onChange={(e) => {
               setCompanyInfo({
                  ...companyInfo,
                  companyAddress: e.target.value,
               });
            }}
         />
         <br />
         <label htmlFor="">Số điện thoại</label>
         <br />
         <input
            type="tel"
            className="w-100"
            defaultValue={companyInfo?.companyPhone}
            onChange={(e) => {
               setCompanyInfo({ ...companyInfo, companyPhone: e.target.value });
            }}
         />
         <br />
         <label htmlFor="">Email liên hệ</label>
         <br />
         <input
            type="text"
            className="w-100"
            defaultValue={companyInfo?.companyEmail}
            onChange={(e) => {
               setCompanyInfo({ ...companyInfo, companyEmail: e.target.value });
            }}
         />
         <br />
         <label htmlFor="">Website</label>
         <br />
         <input
            type="text"
            className="w-100"
            defaultValue={companyInfo?.companyWebsite}
            onChange={(e) => {
               setCompanyInfo({
                  ...companyInfo,
                  companyWebsite: e.target.value,
               });
            }}
         />
         <br />
         <label htmlFor="">Đường link google map</label>
         <br />
         <textarea
            className="w-100 p-2"
            rows="5"
            onChange={(e) => {
               setCompanyInfo({
                  ...companyInfo,
                  companyLocation: e.target.value,
               });
            }}
            defaultValue={companyInfo?.companyLocation}
         ></textarea>
         <br />
         <label htmlFor="">Link facbook</label>
         <br />
         <input
            type="text"
            className="w-100"
            defaultValue={companyInfo?.companyFacebook}
            onChange={(e) => {
               setCompanyInfo({
                  ...companyInfo,
                  companyFacebook: e.target.value,
               });
            }}
         />
         <br />
         <label htmlFor="">Link instagram</label>
         <br />
         <input
            type="text"
            className="w-100"
            defaultValue={companyInfo?.companyInstagram}
            onChange={(e) => {
               setCompanyInfo({
                  ...companyInfo,
                  companyInstagram: e.target.value,
               });
            }}
         />
         <br />
         <label htmlFor="">Link youtube</label>
         <br />
         <input
            type="text"
            className="w-100"
            placeholder="Câu chuyện về DVP"
            defaultValue={companyInfo?.companyYoutube}
            onChange={(e) => {
               setCompanyInfo({
                  ...companyInfo,
                  companyYoutube: e.target.value,
               });
            }}
         />
         <br />
         <label htmlFor="">Link zalo</label>
         <br />
         <input
            type="text"
            className="w-100"
            defaultValue={companyInfo?.companyZalo}
            onChange={(e) => {
               setCompanyInfo({
                  ...companyInfo,
                  companyZalo: e.target.value,
               });
            }}
         />
         <br />
         <button
            className="btn btn-primary px-4 fs-4 mt-5"
            type="button"
            onClick={() => {
               handleSubmit();
            }}
         >
            Submit
         </button>
         {/* <button className="btn btn-danger px-4 fs-4 mt-5" type="button">
            Hủy
         </button> */}
      </Fragment>
   );
};

export default AdminCompanyInfo;
