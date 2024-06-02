import { Image } from "react-bootstrap";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminContactLocation = () => {
   const { userInfo } = useSelector((state) => state.userLogin);

   const [locationImage, setLocationImage] = useState();
   const [locationImageDisplay, setLocationImageDisplay] = useState();
   const [initialLocationImage, setInitialLocationImage] = useState();

   // process.env.REACT_APP_BASE_IMAGE_URL
   useEffect(() => {
      axios.get("/api/info/company").then(({ data }) => {
         setLocationImage(
            process.env.REACT_APP_BASE_IMAGE_URL +
               "/" +
               data.company.companyLocation
         );
         setLocationImageDisplay(
            process.env.REACT_APP_BASE_IMAGE_URL +
               "/" +
               data.company.companyLocation
         );
         setInitialLocationImage(
            process.env.REACT_APP_BASE_IMAGE_URL +
               "/" +
               data.company.companyLocation
         );
      });
   }, []);

   const handleChangeImage = (e) => {
      const file = e.target.files[0];
      if (file) {
         setLocationImage(file);

         const reader = new FileReader();
         reader.onloadend = () => {
            setLocationImageDisplay(reader.result);
         };
         reader.readAsDataURL(file);
      }
   };

   const handleSubmit = () => {
      const config = {
         headers: {
            Authorization: userInfo,
         },
      };

      const data = {
         ...locationImage,
      };

      console.log(data);
      const formData = new FormData();

      Object.keys(data).forEach((key) => {
         formData.append(key, data[key]);
      });

      // axios
      //    .post("/api/admin/home/banner/save", formData, config)
      //    .then((response) => {
      //       console.log("Success");
      //    })
      //    .catch((error) => {
      //       console.log(error.message);
      //    });
   };

   return (
      <div className="img-location">
         <h4 className="mt-5">Chỉnh sửa ảnh location trang liên hệ</h4>

         <label htmlFor="">Ảnh</label>
         <br />
         <Image className="w-50 my-3" src={locationImageDisplay} />
         <br />
         <input
            type="file"
            onChange={(e) => {
               handleChangeImage(e);
            }}
         /> 
         <br />

         <button
            className="btn btn-primary px-4 fs-4 mt-5"
            type="button"
            onClick={() => {
               if (initialLocationImage !== locationImage) handleSubmit();
            }}
         >
            Submit
         </button>
         {/* <button className="btn btn-danger px-4 fs-4 mt-5" type="button">
            Hủy
         </button> */}
      </div>
   );
};

export default AdminContactLocation;
