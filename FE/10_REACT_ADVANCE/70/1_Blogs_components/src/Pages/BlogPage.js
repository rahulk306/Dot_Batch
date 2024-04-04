import React from "react"
import { useState } from "react";
import { AppContext } from "../context/AppContext";
// import { baseURL } from "../baseUrl";
import {useLocation, useNavigate} from "react-router-dom"
import Header from "../components/Header";
import BlogDetails from "../components/BlogDetails";
import { useContext, useEffect } from "react";

const BlogPage = () => {
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {setLoading, loading} = useContext(AppContext);
    const newUrl = "https://codehelp-apis.vercel.app/api/get-blog"

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs(){
        setLoading(true);
        console.log("blog id is :", blogId);
        // https://codehelp-apis.vercel.app/api/get-blogs
        let url = `${newUrl}?blogId=${blogId}`;

        try{
            const res = await fetch(url);
            const data = await res.json();

            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error){
            console.log("error aagys in blog id wali call");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect( () => {
        if(blogId){
            fetchRelatedBlogs();
        }
    }, [location.pathname])

    return (
        <div className="w-full">
            <Header/>
            <div className = " w-7/12 flex flex-col gap-y-5 mt-20 mx-auto">
                <div >
                    <button className="bg-yellow-500 max-w-fit py-1 px-2 rounded-md text-semibold" onClick = {() => navigation(-1)}>
                        Back
                    </button>
                </div>
                {
                    loading ? (<div> <p>Loading</p> </div>) : 
                    blog ?
                    (
                        <div className=" flex flex-col items-center max-w-max mx-auto" >
                            <BlogDetails post={blog}/>
                            <h2 className="mt-10 text-lg text-bold">Related Blogs</h2>
                            {
                                relatedBlogs.map( (post) => (
                                    <div key = {post.id} className="py-4">
                                        <BlogDetails post = {post}/>
                                    </div>
                                ))
                            }
                        </div>
                    ) : 
                    (<div> <p>No Blog Found</p> </div>)
                }
            </div>
        </div>
    )
}

export default BlogPage;