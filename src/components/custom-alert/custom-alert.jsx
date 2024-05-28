import { Alert } from "react-bootstrap";
import "./custom-alert.scss";
import { Fragment, useEffect, useState } from "react";

const CustomAlert = ({ variant, message }) => {
   const [showAlert, setShowAlert] = useState(true);

   // Function to hide the alert after 5 seconds
   const hideAlert = () => {
      setTimeout(() => {
         setShowAlert(false);
      }, 5000);
   };

   // Call hideAlert when the component is mounted
   useEffect(() => {
      hideAlert();
   }, []);
   return (
      <Fragment>
         {showAlert && (
            <Alert
               key={variant}
               variant={variant}
               className="custom-alert"
               onClose={() => setShowAlert(false)} dismissible
            >
               {message}
            </Alert>
         )}
      </Fragment>
   );
};

export default CustomAlert;
