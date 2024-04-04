import React from "react"
import Header from "../components/Header"
import {useLocation, useNavigate} from "react-router-dom"
import Pagination from "../components/Pagination";
import Blogs from "../components/Blogs";

const CategoryPage = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

    return (
        <div className="mt-20">
            <Header/>
            <div  className = "flex flex-col items-center w-7/12 mx-auto">
                <div className=" flex items-center gap-10">
                    <button  onClick = {() => navigation(-1)}>
                        Back
                    </button>
                    <h2>
                        Blogs on <span>{category}</span>
                    </h2>
                </div>
                <Blogs/>
            </div>
                <Pagination/>
            
        </div>
    )
}

export default CategoryPage;