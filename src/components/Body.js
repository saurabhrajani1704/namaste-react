import RestaurantCard from "./RestaurantCard.js";
import {useState,useEffect}from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
const Body = ()=> {

    //Local State Variables - Super Powerful Variable 
    const [listofRestaurants,setListOfRestaurant]=useState([]);
    const[filteredRestaurant,setFilteredRestaurant]=useState([]);

    //Creation of State Variable that binds the value of search text 
    const[searchText,setSearchText]= useState("");


    console.log(listofRestaurants);

     
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6989703&lng=77.1387225&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json= await data.json();

       
        //Optional Chaining 
        setListOfRestaurant(json?.data?.cards[4]?.card.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card.card?.gridElements?.infoWithStyle?.restaurants);
    };



    const onlineStatus=useOnlineStatus();

    if(onlineStatus===false){
        return(
            <h1> Looks like you are offline kindly check your internet connection</h1>
        )
    }
    //Conditional Rendering   
    if(listofRestaurants.length===0){
        return <Shimmer />
    }
    return (
     <div className="body">
        <h1 className="mt-12 ml-5 font-bold text-2xl"> Search for your favourite Restaurants</h1>
            <div className="filter flex flex-row">
                <div className="search m-4 p-4">
                    <input 
                        type="text" 
                        className="border border-solid border-black" 
                        value={searchText} 
                        onChange={(e)=>{
                            setSearchText(e.target.value);
                        }}
                    />
                    <button className="px-4 py-2 m-3 text-white bg-black rounded-xl hover:bg-[#87acec]" onClick={()=>{
                        //Filter the restaurant list and update UI 
                        //search text
                        const filteredRestaurant=listofRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText)
                            
                        );

                        setFilteredRestaurant(filteredRestaurant);
                        
                    }}>Search</button>
                </div>
                <div className="search px-4 py-2 mt-9">
                    <button 
                        className="px-4 py-2 text-white bg-black rounded-xl hover:bg-[#87acec]" 
                        onClick={() => {
                            setListOfRestaurant()
                            //Filter Logic Here 
                            const filteredList=listofRestaurants.filter(
                                (res)=>res.info.avgRating > 4
                            );
                            setListOfRestaurant(filteredList);
                            }}
                    >
                        Top Rated Restaurants 
                    </button>
                </div> 
        </div>
        
          <div className="res-container flex flex-wrap">
                {filteredRestaurant.map((restaurant)=>(
                    <Link key= {restaurant.info.id} to={"/restaurant/"+ restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>
                ))}
                    
         
  
         </div>
     </div>
    ) 
} ;

export default Body;


