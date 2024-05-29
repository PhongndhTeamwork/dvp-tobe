import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

const AdminHiringJob = () => {
   const { userInfo } = useSelector((state) => state.userLogin);

   const [jobs, setJobs] = useState([]);

   useEffect(() => {
      axios.get("/api/hiring").then(({ data }) => {
         setJobs(data.jobs);
      });
   }, []);

   const handleUpdateJob = (index) => {
      const config = {
         headers: {
            Authorization: userInfo,
         },
      };

      // console.log(jobs);

      const data = { ...jobs[index] };

      const formData = new FormData();
      Object.keys(data).forEach((key) => {
         formData.append(key, data[key]);
      });

      // console.log(formData);

      axios
         .post("/api/admin/hiring/job/save", formData, config)
         .then(({ data }) => {
            console.log(data.message);
         })
         .catch((error) => {
            console.log(error.message);
         });
   };

   return (
      <div className="job">
         <h4 className="mt-5">Chỉnh sửa danh sách công việc đang tuyển dụng</h4>
         <button className="btn btn-primary px-4 fs-5 mt-4 mb-2" type="button">
            Thêm mới
         </button>
         <br />

         <div className="list-job p-3 pt-1 my-4 border">
            {jobs?.map((job, index) => (
               <div
                  key={index}
                  className="job-item row w-100 align-items-center mt-3 border-bottom pb-2"
               >
                  <div className="col-10">
                     <input
                        className="fw-medium w-100"
                        defaultValue={job?.jobName}
                        onChange={(e) => {
                           let jobsTemp = [...jobs];
                           jobsTemp[index].jobName = e.target.value;
                           setJobs(jobsTemp);
                        }}
                     />
                     <textarea
                        className="fw-medium w-100 mt-3 p-2"
                        defaultValue={job?.description}
                        rows={4}
                        onChange={(e) => {
                           let jobsTemp = [...jobs];
                           jobsTemp[index].description = e.target.value;
                           setJobs(jobsTemp);
                        }}
                     />
                     <input
                        className="fw-medium w-100 mt-3"
                        defaultValue={job?.contactMail}
                        onChange={(e) => {
                           let jobsTemp = [...jobs];
                           jobsTemp[index].contactMail = e.target.value;
                           setJobs(jobsTemp);
                        }}
                     />
                  </div>

                  <div className="col-2 d-flex flex-column">
                     <Button
                        variant="success"
                        onClick={() => {
                           handleUpdateJob(index);
                        }}
                        className="mb-2"
                     >
                        Sửa
                     </Button>
                     <Button variant="danger" className="mt-2">
                        Xóa
                     </Button>
                  </div>
               </div>
            ))}
         </div>

         {/* <h4 className="mt-5">Thêm vị trí tuyển dụng mới</h4>
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
         <br /> */}

         {/* <button className="btn btn-primary px-4 fs-4 mt-5" type="button">
            Submit
         </button> */}
         {/* <button className="btn btn-danger px-4 fs-4 mt-5" type="button">
            Hủy
         </button> */}
      </div>
   );
};

export default AdminHiringJob;
