import React from 'react'
import Templet from '../components/Templet';
import signupImg from '../assets/signup.png'

const Signup = ({setIsLoggedIn}) => {
    return ( 
        <Templet
            title = "Join the millionns learning to code with Studynotion for free"
            desc1= "Build skills for today, tomorrow, and beyond."
            desc2= "Education to future-proof your career."
            image = {signupImg}
            formtype="signup"
            setIsLoggedIn={setIsLoggedIn}
        />
    )
}

export default Signup;