import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import BlogContent from "../components/BlogContent";
import AppBar from "../components/AppBar";
import Skeleton from "../components/Skeleton";

const FullBlog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Skeleton></Skeleton>
      </div>
    );
  }
  return (
    <>
      <AppBar></AppBar>
      <div className="flex justify-center mx-auto flex-col items-center max-w-3xl">
        <BlogContent blog={blog}></BlogContent>
      </div>
    </>
  );
};

export default FullBlog;
