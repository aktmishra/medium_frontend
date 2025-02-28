import { Link } from "react-router-dom";
import Avatar from "./Avatar";

const AppBar = () => {
  return (
    <div className="flex  justify-between py-4 px-10 bg-slate-200 mb-2 min-w-screen">
      <Link to="/blogs">
        <div className="font-bold text-md text-slate-700">Medium</div>
      </Link>
      <div className="flex gap-3 items-center">
        <Link to="/publish">
        <button
          type="button"
          className="mr-5 text-white bg-green-700 hover:bg-green-900 cursor-pointer focus:outline-none  focus:ring-green-300 font-medium rounded-full text-sm px-4 py-2 text-center  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          New
        </button>
        </Link>
        <div>
          <Avatar name="Ankit" size={96}></Avatar>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
