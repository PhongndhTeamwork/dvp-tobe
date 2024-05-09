import "./App.css";
import "./styles/animation.css";
import "./styles/base.css";
import "./styles/font.css";
import "./styles/style.css";

import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./routes/header/header";
import Footer from "./routes/footer/footer";
import Home from "./routes/home/home";
import About from "./routes/about/about";
import Cataloge from "./routes/cataloge/cataloge";
import Contact from "./routes/contact/contact";
import Hiring from "./routes/hiring/hiring";
import Work from "./routes/work/work";

const App = () => {
   return (
      <div className="App">
         <div className="App">
            <Header />
            <main>
               <Container
                  // className="d-flex justify-content-center"
                  style={{ maxWidth: "100%", paddingLeft: 0, paddingRight: 0 }}
               >
                  <Routes>
                     <Route path="/" element={<Home />} />
                     <Route path="/about" element={<About />} />
                     <Route path="/cataloge" element={<Cataloge />} />
                     <Route path="/contact" element={<Contact />} />
                     <Route path="/hiring" element={<Hiring />} />
                     <Route path="/work" element={<Work />} />
                  </Routes>
               </Container>
            </main>
            <Footer />
         </div>
      </div>
   );
};

export default App;
