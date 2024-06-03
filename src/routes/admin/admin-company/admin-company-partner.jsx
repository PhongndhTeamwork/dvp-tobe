import { useSelector } from "react-redux";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Button, Image } from "react-bootstrap";

const AdminCompanyPartner = () => {
   const { userInfo } = useSelector((state) => state.userLogin);
   const config = {
      headers: {
         Authorization: userInfo,
      },
   };
   const [partners, setPartners] = useState([]);
   const [partnerImage, setPartnerImages] = useState([]);

   const [newPartner, setNewPartner] = useState({
      name: "",
      image: "",
   });
   const [newPartnerImage, setNewPartnerImage] = useState();

   useEffect(() => {
      getPartners();
   }, []);

   const handleChangePartnerImage = (e, index) => {
      const file = e.target.files[0];
      if (file) {
         let partnersTemp = [...partners];
         partnersTemp[index].image = file;
         setPartners(partnersTemp);

         const reader = new FileReader();
         reader.onloadend = () => {
            let partnerImagesTemp = [...partnerImage];
            partnerImagesTemp[index] = reader.result;
            setPartnerImages(partnerImagesTemp);
         };
         reader.readAsDataURL(file);
      }
   };

   const handleUpdatePartner = (index) => {
      let data = { ...partners[index] };

      const formData = new FormData();

      Object.keys(data).forEach((key) => {
         formData.append(key, data[key]);
      });

      axios
         .post("/api/admin/about/banner/save", formData, config)
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

   const handleChangeNewPartnerImage = (e) => {
      const file = e.target.files[0];
      if (file) {
         setNewPartner({ ...newPartner, image: file });

         const reader = new FileReader();
         reader.onloadend = () => {
            setNewPartnerImage(reader.result);
         };
         reader.readAsDataURL(file);
      }
   };

   const handleAddPartner = () => {
      let data = { ...newPartner };

      console.log(data);

      const formData = new FormData();

      Object.keys(data).forEach((key) => {
         formData.append(key, data[key]);
      });

      axios
         .post("/api/admin/company/partner/save", formData, config)
         .then(({ data }) => {
            console.log(data.message);
            setNewPartner({
               name: "",
               image: "",
            });
            setNewPartnerImage(null);
            getPartners();
         })
         .catch((error) => {
            console.log(error.message);
         });
   };

   const handleDeletePartner = (id) => {
      const result = window.confirm('Bạn có chắc chắn muốn xóa ?');
      if(!result) return;
      axios
         .delete(`/api/admin/company/partner/delete?id=${id}`, config)
         .then(({data} ) => {
            console.log(data);
            axios.get("/api/about").then(({ data }) => {
               getPartners();
            });
         })
         .catch((error) => {
            console.log(error.message);
         });
   };

   const getPartners = () => {
      axios.get("/api/info/partners").then(({ data }) => {
         setPartners(
            data.partners.map((partner) => {
               return {
                  ...partner,
                  image:
                     process.env.REACT_APP_BASE_IMAGE_URL + "/" + partner.image,
               };
            })
         );
         setPartnerImages(
            data.partners.map(
               (partner) =>
                  process.env.REACT_APP_BASE_IMAGE_URL + "/" + partner.image
            )
         );
      });
   };

   return (
      <Fragment>
         <div className="list-job p-3 pt-1 my-4 border">
            {partners?.map((partner, index) => (
               <div
                  key={index}
                  className="job-item row w-100 align-items-center mt-3 pb-5 mb-5 border-bottom pb-2"
               >
                  <div className="col-10">
                     <input
                        className="fw-medium w-100"
                        defaultValue={partner?.name}
                     />
                     <div
                        className="banner__img w-50 my-4 border"
                        style={{ display: "block" }}
                     >
                        {/* <i className="fa-solid fa-xmark"></i> */}
                        <Image src={partnerImage[index]} width="100%" />
                     </div>
                     <input
                        type="file"
                        onChange={(e) => {
                           handleChangePartnerImage(e, index);
                        }}
                     />
                  </div>

                  <div className="col-2 d-flex flex-column">
                     <Button
                        variant="success"
                        onClick={() => {
                           if (typeof partner.image === "object")
                              handleUpdatePartner(index);
                        }}
                        className="mb-2"
                     >
                        Sửa
                     </Button>
                     <Button
                        variant="danger"
                        className="mt-2"
                        onClick={() => {
                           handleDeletePartner(partner.id);
                        }}
                     >
                        Xóa
                     </Button>
                  </div>
               </div>
            ))}
         </div>
         <h4 className="mt-5">Thêm đối tác</h4>

         <label htmlFor="">Tên</label>
         <br />
         <input
            type="text"
            className="w-100"
            value={newPartner.name}
            onChange={(e) => {
               setNewPartner({ ...newPartner, name: e.target.value });
            }}
         />
         <br />
         <label htmlFor="">Ảnh</label>
         <br />
         <div
            className="banner__img w-50 my-4 border"
            style={{ display: "block" }}
         >
            <Image width="100%" src={newPartnerImage} />
         </div>
         <input
            type="file"
            onChange={(e) => {
               handleChangeNewPartnerImage(e);
            }}
         />
         <br />

         <button
            className="btn btn-primary px-4 fs-4 mt-3"
            type="button"
            onClick={() => {
               if (
                  newPartner.name === "" ||
                  typeof newPartner.image !== "object"
               )
                  return;
               handleAddPartner();
            }}
         >
            Thêm
         </button>
      </Fragment>
   );
};

export default AdminCompanyPartner;
