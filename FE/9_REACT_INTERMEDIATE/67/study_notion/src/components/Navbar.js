import React from 'react'
import logo from '../assets/Logo.svg'
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify'

const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
 
    return (
        <div className= "flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
            <Link to = "/">
                <img src = {logo} alt="logo" width = {160} height = {32} loading = "lazy"></img>
            </Link>

            <nav>
                <ul className="flex gap-3 text-white">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                    
                </ul>
            </nav>

            {/* Login - Signup - LogOut - Dashboard */}

            <div className="flex items-center gap-x-4">
                { !isLoggedIn &&
                    <Link to = "/login">
                        <button className="bg-gray-800 text-white py-[6px] px-[12px] rounded-[8px] border border-gray-700">
                            LogIn
                        </button>
                    </Link>
                }
                { !isLoggedIn &&
                    <Link to = "/signup">
                        <button  className="bg-gray-800 text-white py-[6px] px-[12px] rounded-[8px] border border-gray-700">
                            SignUp
                        </button>
                    </Link>
                }
                { isLoggedIn &&
                    <Link to = "/">
                        <button onClick ={ () => {
                            setIsLoggedIn(false);
                            toast.error("Logged Out");}
                            }  className="bg-gray-800 text-white py-[6px] px-[12px] rounded-[8px] border border-gray-700">
                             LogOut
                        </button>
                    </Link>
                }
                { isLoggedIn &&
                    <Link to = "/dashboard">
                        <button  className="bg-gray-800 text-white py-[6px] px-[12px] rounded-[8px] border border-gray-700">
                            Dashboard
                        </button>
                    </Link>
                }
            </div>
        </div>
    )
}

export default Navbar;