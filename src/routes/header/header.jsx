import "./header.css";
import {Link} from "react-router-dom";

const Header = () => {
   return (
      <header>
         <div className="wrapper d-flex justify-content-between align-items-center">
            <a href="./index.html" className="header__logo">
               Logo
            </a>

            <ul className="header__nav d-flex justify-content-between align-items-center">
               <li className="header__nav-link">
                  <a href="./about.html">Giới Thiệu</a>
               </li>
               <li className="header__nav-link">
                  <a href="./work.html">Công Việc</a>
               </li>
               <li className="header__nav-link">
                  <a href="./hiring.html">Tuyển Dụng</a>
               </li>
               <li className="header__nav-link">
                  <a href="./contact.html">Liên Hệ</a>
               </li>
            </ul>
         </div>
      </header>
   );
};

export default Header;
