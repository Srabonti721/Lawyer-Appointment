import React, { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import Blog from './Blog';
import { TitleContext } from '../../context/TitleContext';

const Blogs = () => {
    const { setTitle } = useContext(TitleContext);
    const blogsData = useLoaderData();

    useEffect(() => {
        setTitle("Law.BD || blogs");
    }, [setTitle]);
    return (
        <div className=' my-8'>
            <div className='text-center '>
                <h2 className='text-3xl font-bold'>Blogs</h2>
                <p className='text-gray-400 my-8'>let's explore some basic concept that will make a good developer</p>
            </div>
            <div>
                {
                    blogsData.map((blog, index) => <Blog key={index} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;