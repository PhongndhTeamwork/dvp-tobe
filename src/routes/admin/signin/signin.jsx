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
            <div class="circle"></div>
         </div>

         <div class="container">
            <div id="form-signin" class="form">
               <h2>Đăng nhập quản trị viên</h2>

               <form id="form-login" action="dashboard.html" class="mt-4">
                  <div class="input-box">
                     <span class="label-error"></span>
                     <input
                        type="text"
                        placeholder="Nhập username"
                        id="username"
                        name="username"
                     />
                  </div>
                  <div class="input-box">
                     <span class="label-error"></span>
                     <input
                        type="password"
                        placeholder="Nhập mật khẩu"
                        id="password"
                        name="password"
                     />
                  </div>
                  <div class="input-box button">
                     <button type="submit">Đăng nhập</button>
                  </div>
               </form>

               <h3 class="change-link m-0 pt-2 w-100 text-center">
                  <Link to="" class="link">
                     Quên mật khẩu
                  </Link>
               </h3>
            </div>
         </div>
      </Fragment>
   );
};

export default Signin;
