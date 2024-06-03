import "./admin-header.css";
import { Link, useNavigate } from "react-router-dom";

import { AdminContext } from "../../routes/admin/adminContext";
import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../app/features/userLoginSlice";

const AdminHeader = () => {
   const dispatch = useDispatch();
   // const { userInfo } = useSelector((state) => state.userLogin);
   const { fullView, setFullView } = useContext(AdminContext);

   const [isShowNavDropdown, setIsShowNavDropdown] = useState(false);

   const navigate = useNavigate();

   return (
      <nav className="navbar navbar-expand fixed-top navbar-dark bg-dark">
         {/* <!-- Navbar Brand--> */}
         <Link className="navbar-brand ps-3" to="/admin/dashboard">
            Quản trị viên
         </Link>
         {/* <!-- Sidebar Toggle--> */}
         <button
            className="btn btn-dark btn-sm order-1 order-lg-0 ms-md-5 me-3 me-lg-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sideBarNav"
            onClick={() => {
               setFullView(!fullView);
            }}
         >
            <i className="fas fa-bars"></i>
         </button>

         {/* <!-- Navbar--> */}
         <ul className="navbar-nav ms-auto me-3 me-lg-4">
            <li className="nav-item dropdown">
               <div
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  to=""
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={() => {
                     setIsShowNavDropdown(!isShowNavDropdown);
                  }}
               >
                  <i className="fas fa-user fa-fw"></i>
               </div>
               <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                  style={{ display: isShowNavDropdown ? "block" : "none" }}
                  onClick={() => {
                     setIsShowNavDropdown(!isShowNavDropdown);
                  }}
               >
                  <li>
                     <div
                        style={{
                           borderTopLeftRadius: "0.5rem",
                           borderTopRightRadius: "0.5rem",
                        }}
                        className="dropdown-item"
                     >
                        Cài đặt
                     </div>
                  </li>
                  <li>
                     <div className="dropdown-item">Tài khoản</div>
                  </li>
                  <li>
                     <hr className="dropdown-divider" />
                  </li>
                  <li>
                     <div
                        style={{
                           borderBottomLeftRadius: "0.5rem",
                           borderBottomRightRadius: "0.5rem",
                        }}
                        className="dropdown-item"
                        onClick={async () => {
                           await dispatch(logout());
                           navigate("/admin");
                        }}
                     >
                        Đăng xuất
                     </div>
                  </li>
               </ul>
            </li>
         </ul>
      </nav>
   );
};

export default AdminHeader;
