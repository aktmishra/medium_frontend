import { Link } from "react-router-dom";
import Avatar from "./Avatar";

 

interface BlogCardProps {
  authorName:string;
  title:string;
  content: string;
  publishedDate: string;
  id: number
}


const BlogCard = ({authorName, title, content, publishedDate,id}:BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
    <div className="flex flex-col justify-center gap-2 min-w-2xl border-b py-4 px-2 border-b-gray-300 cursor-pointer">
      <div className="flex gap-3">
         
        <div>
        <Avatar name="Ankit" size={40}></Avatar>
        </div>
         
        <div className="flex items-center gap-2">
          <p className="font-bold text-md text-slate-700">{authorName}</p>
          <span className="font-semibold  text-sm/tight text-slate-400">{publishedDate}</span>
        </div>
      </div>
      <div className="font-bold   text-2xl text-slate-700">{title}</div>
      <div className="text-slate-600 font-medium ">{content.slice(0, 100)+ "...."}</div>
      <div>
        <div className="text-slate-500 font-semibold">
          {`${Math.ceil(content.length/100)} minute`}
        </div>
      </div>
    </div>
    </Link>
  );
};

export default BlogCard;
