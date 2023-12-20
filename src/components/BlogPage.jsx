import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 12 //blogs per page
    const [selectedCategory, setSelectedCategory] = useState(null)

    useEffect(() => {
        async function fetchBlogs() {
            // let url = `https://portfolio-isuruumanga-default-rtdb.firebaseio.com/.json?page=${currentPage}&limit=&{pageSize}`;
            let url = `https://blogging-fe8b4-default-rtdb.firebaseio.com/.json?page=${currentPage}&limit=&{pageSize}`;

            //filter by category
            if (selectedCategory) {
                url +=`&category=${selectedCategory}`;
            }
            const response = await fetch(url);
            const data = await response.json();
            setBlogs(data);
        }

        fetchBlogs();


    }, [currentPage, pageSize, selectedCategory])
    console.log(blogs)

    const handlePageChange = () => {
        
    }

    return (
        <div>
            {/* category section */}
            <div>Page Category</div>

            {/* blogCards section */}
            <div><BlogCards blogs={blogs} /></div>

            {/* pagination section */}
            <div>Paginations</div>
            
        </div>
    )
}

export default BlogPage