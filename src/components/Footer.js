import { LOGO_URL } from "../utils/constants";
import { SocialIcon } from "react-social-icons";

const Footer  =()=>{
    return (
        <div className="">
        <div className="flex flexrow justify-evenly bg-black">
            <div className="mt-8">
                <img src={LOGO_URL} className="h-28 rounded-lg"></img>
                <h3 className="text-white ml-8 mt-3 mb-3 font-bold text-2xl">Foodigy</h3>
                <SocialIcon url="https://www.linkedin.com/" className="mr-4" target="_blank" fgColor="#fff" bgColor="#000000" style={{ height: 32, width: 32 }} />
                <SocialIcon url="https://www.instagram.com/" className="mr-4" target="_blank" fgColor="#fff" bgColor="#000000" style={{ height: 32, width: 32 }} />
                <SocialIcon url="https://x.com/saurabh17041" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 32, width: 32 }} />
                <SocialIcon url="https://github.com/saurabhrajani1704" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 32, width: 32 }} />
            </div>
            <div classname="row1">
                <h3 className="text-white font-bold mt-8 text-xl mb-3 ">Company</h3>
                <p className="text-gray-400 font-medium text-base mb-2">About Us</p>
                <p className="text-gray-400 font-medium text-base mb-2">Careers</p>
                <p className="text-gray-400 font-medium text-base mb-2">Team</p>
                <p className="text-gray-400 font-medium text-base mb-2">Blog</p>
            </div>
            <div className="row2">
                <h3 className="text-white font-bold mt-8 text-xl mb-3 ">Support</h3>
                <p className="text-gray-400 font-medium text-base mb-2">Contact Us</p>
                <p className="text-gray-400 font-medium text-base mb-2">FAQ</p>
                <p className="text-gray-400 font-medium text-base mb-2">Press</p>
                <p className="text-gray-400 font-medium text-base mb-2">Privacy Policy</p>
            </div>
            <div className="row3">
                <h3 className="text-white font-bold mt-8 text-xl mb-3 ">Services</h3>
                <p className="text-gray-400 font-medium text-base mb-2">Food Delivery</p>
                <p className="text-gray-400 font-medium text-base mb-2">Online Grocery</p>
                <p className="text-gray-400 font-medium text-base mb-2">Order Food</p>
                <p className="text-gray-400 font-medium text-base mb-2">Order Grocery</p>
            </div>
        </div>
        <h3 className="p-2 text-white text-md bg-[#343a40] text-center">© 2024 All Rights Reserved Saurabh Rajani</h3>
        </div>
       
       
    );
}
export default Footer;
