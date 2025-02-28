import AppBar from "../components/AppBar";
import BlogCard from "../components/BlogCard";
import Skeleton from "../components/Skeleton";
import { useBlogs } from "../hooks";

const BlogsPage = () => {
  const { loading, blogs } = useBlogs();

  if (loading||!blogs) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <Skeleton></Skeleton>
        <Skeleton></Skeleton>
        <Skeleton></Skeleton>
      </div>
    );
  }

  return (
    <>
      <AppBar></AppBar>
      <div className="flex flex-col justify-center items-center max-w-2xl mx-auto">
        {blogs.map((blog) => (
          <div key={blog.id} className="">
            <BlogCard
              authorName={blog.author.name || "Anonymous"}
              content={blog.content}
              title={blog.title}
              publishedDate="27 Feb, 2025"
              id={blog.id}
            ></BlogCard>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogsPage;
