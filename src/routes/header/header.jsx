import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
   return (
      <header>
         <div className="wrapper d-flex justify-content-between align-items-center">
            <Link to="/" className="header__logo">
               Logo
            </Link>

            <ul className="header__nav d-flex justify-content-between align-items-center">
               <li className="header__nav-link">
                  <Link to="./about">Giới Thiệu</Link>
               </li>
               <li className="header__nav-link">
                  <Link to="/work">Công Việc</Link>
               </li>
               <li className="header__nav-link">
                  <Link to="/hiring">Tuyển Dụng</Link>
               </li>
               <li className="header__nav-link">
                  <Link to="/contact">Liên Hệ</Link>
               </li>
            </ul>
         </div>
      </header>
   );
};

export default Header;
