import "./signin.css";

import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Notification from "../../../components/notification/notification";
import { login } from "../../../app/features/userLoginSlice";
import { Spinner } from "react-bootstrap";

const Signin = () => {
   const dispatch = useDispatch();
   const { userInfo, loading, error } = useSelector((state) => state.userLogin);

   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const [usernameErrorMessage, setUsernameErrorMessage] = useState("");
   const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

   const navigate = useNavigate();

   useEffect(() => {
      console.log(userInfo);
      console.log(error);
   }, [userInfo, error]);

   const handleChangeUsername = (e) => {
      if (e.target.value === "") {
         setUsernameErrorMessage("Vui lòng nhập username hoặc email!");
      } else {
         setUsernameErrorMessage("");
      }
      setUsername(e.target.value);
   };
   const handleChangePassword = (e) => {
      if (e.target.value === "") {
         setPasswordErrorMessage("Vui lòng nhập mật khẩu!");
      } else {
         setPasswordErrorMessage("");
      }
      setPassword(e.target.value);
   };

   useEffect(() => {
      if (error) {
         setUsernameErrorMessage("Tài khoản hoặc mật khẩu lỗi!");
         setPasswordErrorMessage("Tài khoản hoặc mật khẩu lỗi!");
      } else {
         setUsernameErrorMessage("");
         setPasswordErrorMessage("");
      }
   }, [error]);

   useEffect(() => {
      if (userInfo) {
         navigate("/admin/dashboard");
      }
   }, [userInfo, navigate]);

   const handleSubmit = (e) => {
      e.preventDefault();
      if (username === "") {
         setUsernameErrorMessage("Vui lòng nhập username hoặc email!");
      } else {
         setUsernameErrorMessage("");
      }
      if (password === "") {
         setPasswordErrorMessage("Vui lòng nhập mật khẩu!");
      } else {
         setPasswordErrorMessage("");
      }
      dispatch(login({ username, password }));
   };

   return (
      <Fragment>
         {/* <!-- Pop up to show notifications --> */}
         {loading ? (
            <div className="signin__spinner">
               <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
               </Spinner>
            </div>
         ) : (
            ""
         )}
         <div className="signin__background"></div>
         <div className="container">
            <div id="form-signin" className="form">
               <h2>Đăng nhập quản trị viên</h2>

               <form
                  id="form-login"
                  onSubmit={(e) => {
                     handleSubmit(e);
                  }}
                  className="mt-4"
               >
                  <div
                     className={`input-box ${
                        usernameErrorMessage !== "" ? "invalid" : ""
                     }`}
                  >
                     <span className="label-error">{usernameErrorMessage}</span>
                     <input
                        type="text"
                        placeholder="Nhập username"
                        id="username"
                        name="username"
                        onChange={(e) => {
                           handleChangeUsername(e);
                        }}
                     />
                  </div>
                  <div
                     className={`input-box ${
                        passwordErrorMessage !== "" ? "invalid" : ""
                     }`}
                  >
                     <span className="label-error">{passwordErrorMessage}</span>
                     <input
                        type="password"
                        placeholder="Nhập mật khẩu"
                        id="password"
                        name="password"
                        onChange={(e) => {
                           handleChangePassword(e);
                        }}
                     />
                  </div>
                  <div className="input-box button">
                     <button type="submit">Đăng nhập</button>
                  </div>
               </form>

               <h3 className="change-link m-0 pt-2 w-100 text-center">
                  <Link to="" className="link">
                     Quên mật khẩu
                  </Link>
               </h3>
            </div>
         </div>
      </Fragment>
   );
};

export default Signin;
