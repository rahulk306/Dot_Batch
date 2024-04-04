import "./App.css";
import { useState } from "react";
import Pagination from "./components/Pagination";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import { AppContext } from "./context/AppContext";
import { useContext } from "react";
import { useEffect } from "react";

function App() {
  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(()=>{
    fetchBlogPosts();
  },[]);

  return (
    <div className="flex flex-col w-full h-full gap-y-1 items-center">
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>  
  );
}

export default App;
