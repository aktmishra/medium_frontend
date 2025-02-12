import Auth from "../components/Auth";
import Quote from "../components/Quote";

const Signin = () => {
  return (
    <div className=" flex justify-center ">
      <Auth type="signin"></Auth>

      <Quote></Quote>
    </div>
  );
};

export default Signin;
