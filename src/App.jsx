import "./App.css";
// import "./styles/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";
import Header from "./routes/user/header/header";
import Footer from "./routes/user/footer/footer";
import UserRoutes from "./routes/user/userRoutes";

const App = () => {
   return (
      <div className="App">
         <Header />
         <main>
            <Routes>
               <Route path="/*" element={<UserRoutes />} />
            </Routes>
         </main>
         <Footer />
      </div>
   );
};

export default App;
