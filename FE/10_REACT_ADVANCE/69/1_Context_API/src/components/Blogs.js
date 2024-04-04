import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';

const Blogs = () =>
{
    // step 3 -> consume the centralized data provided by the provider using useContext hook
    const {posts, loading} = useContext(AppContext);

    return(
        <div className="w-11/12 max-w-[650px] flex flex-col gap-y-7 py-8 mt-[60px] mb-[60px] items-center justify-center h-full">
        {
            loading ? 
            (<Spinner/>):

            (
                posts.length === 0 ? 
                (   <div>
                        <p>No Post Found</p>
                    </div>
                ) :
                (posts.map( (post) => (
                    <div key={post.id}>
                        <p className="font-bold text-lg">{post.title}</p>
                        <p className="text-sm">
                            By <span className="italic">{post.author}</span> on <span className="font-bold underline">{post.category}</span>
                        </p>
                        <p className="text-sm mt-[4px]">Posted on : {post.date}</p>
                        <p className="text-md mt-[14px]">{post.content}</p>
                        <div className="flex gap-x-1">
                            {post.tags.map((tag,index) => {
                                return <span className="text-blue-700 underline font-bold text-xs mt-[5px]" key={index}>{`#${tag}`}</span>
                            })}
                        </div>
                    </div>
                ) ))
            ) 

        }
        </div>
    )
}

export default Blogs;