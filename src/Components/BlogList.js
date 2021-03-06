import React from 'react'
import {Link} from 'react-router-dom'

function BlogList({blogs , title}) {
    return (
        <div>
        <h2>{title}</h2>
        {blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
            <h1>{blog.title}</h1>
            <p> Written by:{blog.author}</p>
            </Link>
            </div>
        ))}  
        </div>
    )
}

export default BlogList
