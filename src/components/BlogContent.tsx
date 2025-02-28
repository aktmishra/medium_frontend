import { Blog } from "../hooks";
import Avatar from "./Avatar";

const BlogContent = ({blog}: {blog:Blog|undefined}) => {
  return (
    <div className="grid grid-cols-12 px-6 pt-10 justify-between max-w-3xl lg:min-w-4xl ">
      <div className="col-span-8 flex flex-col gap-4">
        <div className="font-bold   text-2xl text-slate-700">
          {blog?.title}
        </div>
        <p className="text-slate-500 font-semibold">
          Posted on <span> 24 Feb, 2025</span>
        </p>
        <p>
           {blog?.content}        </p>
      </div>
      <div className="col-span-4 flex flex-col gap-3 ml-20 pl-8">
        <p className="font-light text-sm text-slate-700">Author</p>
        <div className="flex gap-3">
            <div>
                <Avatar name={blog?.author.name || "Anonymous"} size={40}></Avatar>
            </div>
            <div>
                <p className="font-bold text-md text-slate-700">
                    {blog?.author.name || "Anonymous"}
                </p> 
            </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
