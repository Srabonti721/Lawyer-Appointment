import React from 'react';

const Blog = ({ blog }) => {
    console.log(blog);

    return (
        <div>
            <div className="my-4 p-4 bg-gray-100 collapse collapse-arrow border border-base-300 ">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-semibold my-4 border-b-2 border-dashed border-gray-300">{blog.question}</div>
                <div className="collapse-content text-sm"><span className='text-blue-600 font-semibold'>answer : </span>{blog.answer}</div>
            </div>
        </div>
    );
};

export default Blog;