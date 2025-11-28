import LoadingCard from "@/components/ui/LoadingCard";
import { Blog } from "@/types";

const BlogCardLoading = async () => {
  const res = await fetch(`http://localhost:5000/blogs`);
  const blogs = await res.json();
  return (
    <div>
      <div className="grid grid-cols-3 my-5 gap-4">
        {blogs.map((blog: Blog) => (
          <LoadingCard key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default BlogCardLoading;
