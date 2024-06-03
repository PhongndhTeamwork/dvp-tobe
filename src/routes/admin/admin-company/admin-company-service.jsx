import { useMemo } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const AdminCompanyService = () => {
   const { id } = useParams();
   const navigate = useNavigate();

   const preApi = useMemo(() => {
      return process.env.NODE_ENV === "production"
         ? process.env.REACT_APP_BASE_IMAGE_URL
         : "";
   }, []);

   return (
      <div>
         <Button
            variant="dark"
            onClick={() => {
               navigate(-1);
            }}
         >
            Go back
         </Button>
      </div>
   );
};

export default AdminCompanyService;
