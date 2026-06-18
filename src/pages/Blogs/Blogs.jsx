import React from 'react';
import { useLoaderData } from 'react-router';

const Blogs = () => {
    const blogsData = useLoaderData();
    console.log(blogsData);
    
    return (
        <div>
            <h2>Blogs</h2>
        </div>
    );
};

export default Blogs;