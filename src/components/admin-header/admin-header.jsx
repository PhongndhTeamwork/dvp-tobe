import { Link } from "react-router-dom";

const AdminHeader = () => {
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
         >
            <i className="fas fa-bars"></i>
         </button>

         {/* <!-- Navbar--> */}
         <ul className="navbar-nav ms-auto me-3 me-lg-4">
            <li className="nav-item dropdown">
               <Link
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
               >
                  <i className="fas fa-user fa-fw"></i>
               </Link>
               <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
               >
                  <li>
                     <Link className="dropdown-item" to="#!">
                        Cài đặt
                     </Link>
                  </li>
                  <li>
                     <Link className="dropdown-item" to="#!">
                        Tài khoản
                     </Link>
                  </li>
                  <li>
                     <hr className="dropdown-divider" />
                  </li>
                  <li>
                     <Link className="dropdown-item" to="#!">
                        Đăng xuất
                     </Link>
                  </li>
               </ul>
            </li>
         </ul>
      </nav>
   );
};

export default AdminHeader;
