import "../../styles/animation.css";
import "../../styles/base.css";
import "../../styles/font.css";
import "../../styles/style.css";


import Home from "./home/home";
import About from "./about/about";
import Cataloge from "./cataloge/cataloge";
import Contact from "./contact/contact";
import Hiring from "./hiring/hiring";
import Work from "./work/work";
import { Route, Routes } from "react-router-dom";

const UserRoutes = () => {
   return (
      <div className="user-routes">
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cataloge" element={<Cataloge />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/hiring" element={<Hiring />} />
            <Route path="/work" element={<Work />} />
         </Routes>
      </div>
   );
};

export default UserRoutes;
