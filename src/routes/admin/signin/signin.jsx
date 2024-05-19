import "./signin.css";

import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import Notification from "../../../components/notification/notification";

const Signin = () => {
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

               <form id="form-login" action="dashboard.html" className="mt-4">
                  <div className="input-box">
                     <span className="label-error"></span>
                     <input
                        type="text"
                        placeholder="Nhập username"
                        id="username"
                        name="username"
                     />
                  </div>
                  <div className="input-box">
                     <span className="label-error"></span>
                     <input
                        type="password"
                        placeholder="Nhập mật khẩu"
                        id="password"
                        name="password"
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
