import React from "react";
import Pagination from "../components/Pagination";
import Blogs from "../components/Blogs";
import Header from "../components/Header";
import {useLocation, useNavigate} from 'react-router-dom'

const TagPage = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);

    return (
        <div className = "flex flex-col items-center mt-20">
            <Header/>
            <div className="w-7/12 flex flex-col">
                <div className="flex gap-x-5">
                    <button className="bg-yellow-500 max-w-fit py-1 px-2 rounded-md text-semibold" onClick = {() => navigation(-1)}>
                        Back
                    </button>
                    <h2>
                        Blogs Tagged <span>#{tag}</span>
                    </h2>
                </div>
                <Blogs/>
            </div>
            <Pagination/>
        </div>
    )
}
export default TagPage;