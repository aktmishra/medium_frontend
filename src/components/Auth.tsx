import { Navigate } from "react-router-dom";

 

interface AuthProps {
    children: React.ReactNode; // Type for children prop
  }
 

const Auth  = ({children}: AuthProps) => {
 const jwt = localStorage.getItem("jwt")
if (!jwt||jwt==="") {
    return <Navigate to="/signin" replace={true}></Navigate>;
}
  return children
}

export default Auth
