import BlogDetails from "@/components/ui/BlogDetails";
import { Blog } from "@/types";
import React from "react";

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();
  return blogs.slice(0, 3).map((blog: Blog) => ({
    blogId: blog.id,
  }));
};

const BlogDetailsPage = async ({ params }: { params: { blogId: string } }) => {
  const { blogId } = params;
  const res = await fetch(`http://localhost:5000/blogs/${blogId}`, {
    cache: "no-store",
  });
  const blog = await res.json();
  return (
    <div className="w-[90%] mx-auto">
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
