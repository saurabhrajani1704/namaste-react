import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header= () => {

    const [btnNameReact,setBtnNameReact]=useState("Login");

    const onlineStatus=useOnlineStatus();
    const {loggedInUser}=useContext(UserContext);

    //Subscribing to the store using a Selector
    const cartItems=useSelector((store)=>store.cart.items);
    console.log("abc");
    console.log(cartItems);




    return(
        <nav className="bg-gray-100 shadow-lg">
            <div className="flex justify-between items-center w-[92%] mx-auto">
            <div className="logo-conatiner">
                <img className="w-28 bg-[#fffcf2] rounded-lg m-2" src={LOGO_URL}/>
            </div>
            <div className="flex justify-between items-center">
                <ul className="flex items-center gap-4">
                    <li className="px-5 py-2 font-poppins text-xl hover:text-red-700 "> <Link to="/">Home </Link></li>
                    <li className="px-5 py-2 font-poppins text-xl  hover:text-red-700"> <Link to ="/about">About Us </Link></li>
                    {/*<li className="px-5 py-2 font-poppins text-xl hover:text-red-700"> <Link to ="/grocery">Grocery </Link></li>*/} 
                    <li className="px-5 py-2 font-poppins text-xl  hover:text-red-700"> <Link to="/contact">Help</Link></li>
                </ul>
                {/*<button className="login-btn px-5 py-2  font-ubuntu text-xl  hover:text-red-700" onClick={()=>{
                    btnNameReact==="Login" ? setBtnNameReact("Logout"):setBtnNameReact("Login");
                    }}
                >
                    {btnNameReact}
                </button>
                */}
                <button className="bg-black text-white px-5 py-2 ml-6 mt-2 font-poppins rounded-xl hover:bg-[#87acec]"><Link to ="/Cart">Cart ({cartItems.length} items)</Link> </button>
                {/*<p className="px-5 py-2 font-ubuntu text-xl">{loggedInUser}</p>*/}  
            </div>
        </div>
        </nav>
        
    )
};

export default Header; 