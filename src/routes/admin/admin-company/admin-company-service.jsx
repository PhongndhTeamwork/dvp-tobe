import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const AdminCompanyService = () => {
   const { id } = useParams();
   const navigate = useNavigate();

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
