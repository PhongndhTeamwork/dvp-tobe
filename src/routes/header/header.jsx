import "./header.scss";
import {Link} from "react-router-dom";

const Header = () => {
   return (
      <header>
         <div class="wrapper d-flex justify-content-between align-items-center">
            <a href="./index.html" class="header__logo">
               Logo
            </a>

            <ul class="header__nav d-flex justify-content-between align-items-center">
               <li class="header__nav-link">
                  <a href="./about.html">Giới Thiệu</a>
               </li>
               <li class="header__nav-link">
                  <a href="./work.html">Công Việc</a>
               </li>
               <li class="header__nav-link">
                  <a href="./hiring.html">Tuyển Dụng</a>
               </li>
               <li class="header__nav-link">
                  <a href="./contact.html">Liên Hệ</a>
               </li>
            </ul>
         </div>
      </header>
   );
};

export default Header;
