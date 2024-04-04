import "./App.css";
// import { useState } from "react";
// import Pagination from "./components/Pagination";
// import Blogs from "./components/Blogs";
// import Header from "./components/Header";
import { AppContext } from "./context/AppContext";
import { useContext } from "react";
import { useEffect } from "react";
import {Routes, Route} from "react-router-dom"
import { useSearchParams } from "react-router-dom";
import {useLocation} from "react-router-dom"
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import TagPage from "./Pages/TagPage";
import CategoryPage from "./Pages/CategoryPage";

function App() {
  const {fetchBlogPosts} = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(()=>{
    
    const page = searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")){
      //iska mtlb tag wala page show krna hai
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page), tag);
    }

    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page), null, category);
    }

    else{
      fetchBlogPosts(Number(page));
    }

  },[location.pathname, location.search]);

  return (
    // <div className="flex flex-col w-full h-full gap-y-1 items-center">
    //   <Header/>
    //   <Blogs/>
    //   <Pagination/>
    // </div>  

    // here we are using dynamic parameter means blogs/:blogId means -> url me blogs ke aage kuch bhi likha hoga usko blogId maan leya jyega.
    
    <div className="w-full h-full mx-auto">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blogs/:blogId" element={<BlogPage/>}/>
      <Route path="/tags/:tag" element={<TagPage/>}/>
      <Route path="/categories/:category" element={<CategoryPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
