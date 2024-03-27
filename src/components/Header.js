import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header= () => {

    const [btnNameReact,setBtnNameReact]=useState("Login");

    const onlineStatus=useOnlineStatus();



    return(
        <nav className="bg-[#FECB0F] shadow-lg">
            <div className="flex justify-between items-center w-[92%] mx-auto">
            <div className="logo-conatiner">
                <img className="h-32 bg-[#fffcf2]" src={LOGO_URL}/>
            </div>
            <div className="flex justify-between items-center">
                <ul className="flex items-center gap-4">
                    <li className="px-5 py-2 font-ubuntu text-xl hover:text-red-700 "> <Link to="/">Home </Link></li>
                    <li className="px-5 py-2 font-ubuntu text-xl  hover:text-red-700"> <Link to ="/about">About Us </Link></li>
                    <li className="px-5 py-2 font-ubuntu text-xl hover:text-red-700"> <Link to ="/grocery">Grocery </Link></li>
                    <li className="px-5 py-2 font-ubuntu text-xl  hover:text-red-700"> <Link to="/contact">Contact us </Link></li>
                </ul>
                <button className="login-btn px-5 py-2  font-ubuntu text-xl  hover:text-red-700" onClick={()=>{
                    btnNameReact==="Login" ? setBtnNameReact("Logout"):setBtnNameReact("Login");
                    }}
                >
                    {btnNameReact}
                </button>
                <button className="bg-black text-white px-5 py-2 ml-6 mt-2 font-ubuntu rounded-xl hover:bg-[#87acec]"> Cart </button>  
            </div>
        </div>
        </nav>
        
    )
};

export default Header; 