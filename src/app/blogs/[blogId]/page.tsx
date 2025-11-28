import BlogDetails from '@/components/ui/BlogDetails';
import React from 'react';

const BlogDetailsPage = async ({ params }: { params: { blogId: string } }) => {
    const { blogId } = params;
    const res = await fetch(`http://localhost:5000/blogs/${blogId}`, { cache: "no-store" });
    const blog = await res.json();
    return (
        <div className="w-[90%] mx-auto">
            <BlogDetails blog={blog} />
        </div>
    );
};

export default BlogDetailsPage;