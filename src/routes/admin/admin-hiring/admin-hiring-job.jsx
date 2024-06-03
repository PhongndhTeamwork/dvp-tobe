import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

const AdminHiringJob = () => {
   const { userInfo } = useSelector((state) => state.userLogin);
   const config = {
      headers: {
         Authorization: userInfo,
      },
   };

   const [jobs, setJobs] = useState([]);
   const [newJob, setNewJob] = useState({
      jobName: "",
      description: "",
      contactMail: "",
   });

   useEffect(() => {
      axios.get("/api/hiring").then(({ data }) => {
         setJobs(data.jobs);
      });
   }, []);

   const handleUpdateJob = (index) => {
      const data = { ...jobs[index] };

      const formData = new FormData();
      Object.keys(data).forEach((key) => {
         formData.append(key, data[key]);
      });
      axios
         .post("/api/admin/hiring/job/save", formData, config)
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

   const handleAddJob = () => {
      if (
         newJob.contactMail === "" ||
         newJob.description === "" ||
         newJob.jobName === ""
      ) {
         return;
      }
      let data = { ...newJob };

      const formData = new FormData();

      Object.keys(data).forEach((key) => {
         formData.append(key, data[key]);
      });

      axios
         .post("/api/admin/hiring/job/save", formData, config)
         .then(({ data }) => {
            alert("Lưu thành công");

            axios.get("/api/hiring").then(({ data }) => {
               setJobs(data.jobs);
            });
            setNewJob({
               jobName: "",
               description: "",
               contactMail: "",
            });
         })
         .catch((error) => {
            alert("Lưu thất bại");
            console.log(error.message);
         });
   };

   const handleDeleteJob = (id) => {
      const result = window.confirm("Bạn có chắc chắn muốn xóa ?");
      if (!result) return;
      axios
         .delete(`/api/admin/hiring/job/delete?id=${id}`, config)
         .then(({ data }) => {
            alert("Lưu thành công");
            console.log(data);
            axios.get("/api/hiring").then(({ data }) => {
               setJobs(data.jobs);
            });
         })
         .catch((error) => {
            alert("Lưu thất bại");
            console.log(error.message);
         });
   };

   return (
      <div className="job">
         <h4 className="mt-0">Chỉnh sửa danh sách công việc đang tuyển dụng</h4>
         <br />
         <div className="list-job p-3 pt-1 my-2 border">
            {jobs?.map((job, index) => (
               <div
                  key={index}
                  className="job-item row w-100 align-items-center mt-3 border-bottom pb-2 mb-5 pt-2"
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
                        className="fw-medium w-100 mt-3"
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
                     <Button
                        variant="danger"
                        className="mt-2"
                        onClick={() => {
                           handleDeleteJob(job.id);
                        }}
                     >
                        Xóa
                     </Button>
                  </div>
               </div>
            ))}
         </div>
         <br />

         <h4 className="mt-5">Thêm công việc</h4>
         <br />
         <div className="job-item row w-100 align-items-center mt-3 border-bottom pb-2">
            <div className="col-10">
               <input
                  className="fw-medium w-100"
                  placeholder="Name"
                  value={newJob?.jobName}
                  onChange={(e) => {
                     setNewJob({ ...newJob, jobName: e.target.value });
                  }}
               />
               <textarea
                  className="fw-medium w-100 mt-3"
                  rows={4}
                  placeholder="Description"
                  value={newJob?.description}
                  onChange={(e) => {
                     setNewJob({ ...newJob, description: e.target.value });
                  }}
               />
               <input
                  className="fw-medium w-100 mt-3"
                  placeholder="Contact Mail"
                  value={newJob?.contactMail}
                  onChange={(e) => {
                     setNewJob({ ...newJob, contactMail: e.target.value });
                  }}
               />
            </div>
         </div>

         <button
            className="btn btn-primary px-4 fs-4 mt-5"
            type="button"
            onClick={() => {
               handleAddJob();
            }}
         >
            Thêm
         </button>
         {/* <button className="btn btn-danger px-4 fs-4 mt-5" type="button">
            Hủy
         </button> */}
      </div>
   );
};

export default AdminHiringJob;
