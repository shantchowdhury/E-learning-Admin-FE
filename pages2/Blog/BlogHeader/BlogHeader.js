import React from 'react';
import BlogSearch from './BlogSearch/BlogSearch';

const BlogHeader = () => {
    return (
        <div >
            <div className=' w-full flex text-left font-inter '>
                <h1 className=' text-[30px] font-semibold text-dark'>Blogs</h1>
                <button className=' py-2 px-4 rounded-md bg-blue font-poppins font-medium ml-10 text-white cursor-pointer'>Add New</button>
            </div>
            <BlogSearch />
        </div>
    );
};

export default BlogHeader;