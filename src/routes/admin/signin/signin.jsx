import "./signin.css";

import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import Notification from "../../../components/notification/notification";

const Signin = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const [usernameErrorMessage, setUsernameErrorMessage] = useState("");
   const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

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
      } else if (e.target.value.length < 8) {
         setPasswordErrorMessage("Vui lòng nhập tối thiểu 8 kí tự!");
      } else {
         setPasswordErrorMessage("");
      }
      setPassword(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (username === "") {
         setUsernameErrorMessage("Vui lòng nhập username hoặc email!");
      } else {
         setUsernameErrorMessage("");
      }
      if (password === "") {
         setPasswordErrorMessage("Vui lòng nhập mật khẩu!");
      } else if (password.length < 8) {
         setPasswordErrorMessage("Vui lòng nhập tối thiểu 8 kí tự!");
      } else {
         setPasswordErrorMessage("");
      }
   };

   return (
      <Fragment>
         {/* <!-- Pop up to show notifications --> */}

         <Notification />

         {/* <!-- Loading animation --> */}
         <div id="popup-loader">
            <div className="circle"></div>
         </div>

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
