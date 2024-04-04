import React from 'react'
import {useNavigate} from 'react-router-dom'
const Labs = () => {

    const navigate = useNavigate();

    function clickHandler() {
        // move to about Page
        navigate("/about")
    }
    function backHandler() {
        // move to the previous page
        navigate(-1);
    }

    return (
        <div>
            <div>
                This is Lab page
            </div>
            <button onClick = {clickHandler}>Move to About Page</button>
            <br/>
            <button onClick = {backHandler}>Back</button>
        </div>
        
    )
}

export default Labs;