import { createContext } from "react";
import { useState } from "react";
import { baseURL } from "../baseUrl";


// step 1 -> creation of context
export const AppContext = createContext();  

// step 2 -> creation of provider 
// here children is APP component go to index.js and see 

export default function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    console.log("printing ", loading);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    // data filling pending -> api call krke data le lenge
    async function fetchBlogPosts(page = 2){
        setLoading(true);
        let url = `${baseURL}?page=${page}`;
        try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }
        catch(error){
             console.log("choda");
             setPage(1);
             setPosts([]);
             setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);
    }

    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        handlePageChange,
        fetchBlogPosts
    };

    // here using context provider we have created a centralized data and we will consume this centralized data using a hook named useContext.

    return <AppContext.Provider value = {value}>
        {children}
    </AppContext.Provider>
}