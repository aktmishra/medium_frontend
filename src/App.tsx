 import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import BlogsPage from "./pages/BlogsPage";
import FullBlog from "./pages/FullBlog";
import PublishPage from "./pages/PublishPage";
import Auth from "./components/Auth";

function App() {
   

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SigninPage></SigninPage>}></Route>
        <Route path="/signin" element={<SigninPage></SigninPage>}></Route>
        <Route path="/signup" element={<SignupPage></SignupPage>}></Route>
        <Route path="/blogs" element={<Auth><BlogsPage/></Auth>}></Route>
        <Route path="/blog/:id" element={<Auth><FullBlog/></Auth>}></Route>
        <Route path="/publish" element={<Auth><PublishPage/></Auth>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
