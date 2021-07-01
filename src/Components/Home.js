import React from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch'

function Home() {

const {data:blogs, loading }= useFetch('http://localhost:8000/blogs')


    return (
        <div className="home">
        {loading && <div>Loading...</div>}
    {/*logical rendering so when the data comes it 
    will render cause the useeffect doesnt use the async await*/ }        
        {blogs && <BlogList blogs={blogs}  title="All Blogs"  />}                   
        </div>
    )
}

export default Home
