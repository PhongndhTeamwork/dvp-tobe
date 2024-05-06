import "./home.scss";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../app/features/userLoginSlice";

const Home = () => {
   const dispatch = useDispatch();
   const userLogin = useSelector((state) => state.userLogin);
   const { userInfo } = userLogin;

   const handleLogin = () => {
      console.log("LOGIN");
      dispatch(login({}));
   };
   const handleGetUser = () => {
      console.log(userLogin);
   };

   return (
      <div>
         Home
         <button onClick={handleLogin}>Login</button>
         <button onClick={handleGetUser}>User</button>
      </div>
   );
};

export default Home;
