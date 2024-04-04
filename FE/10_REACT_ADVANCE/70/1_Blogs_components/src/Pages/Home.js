import React from "react"
import Blogs from "../components/Blogs";
import Header from "../components/Header";
import Pagination from "../components/Pagination"

const Home = () => {
    return (
        <div className = "">
            <Header/>
            <div className="w-7/12 max-w-max mx-auto" ><Blogs/></div>
            <Pagination/>
            {/* </div>
            <div> */}
                
        </div>
    )
}

export default Home;