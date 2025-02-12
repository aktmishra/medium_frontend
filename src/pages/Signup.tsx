import Auth from "../components/Auth";
import Quote from "../components/Quote";

const Signup = () => {
  return (
    <div className=" flex justify-center ">
      <Auth type="signup"></Auth>

      <Quote></Quote>
    </div>
  );
};

export default Signup;
