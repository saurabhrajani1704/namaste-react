import RestaurantCard from "./RestaurantCard.js";
import {useState}from "react";
const Body = ()=> {

    //Local State Variables - Super Powerful Variable 
    const [listofRestaurants,setListOfRestaurant]=useState([
        {
            data:
            {
                id: "57451",
                name: "Bikaner's Sweets",
                cloudinaryImageId: "o2amcyjj7oqsoztkx0l5",
                locality: "Indirapuram",
                areaName: "Ghaziabad",
                costForTwo: "₹200 for two",
                cuisines: ["Sweets","Snacks"],
                avgRating: 4.3,
                deliveryTime: 34
            }
        },
        {
            data:
            {
                id: "723194",
                name: "Sashmicks Bakery",
                cloudinaryImageId: "0cb9293ff7ec5559f898add049b547a7",
                locality: "ghandhi Nagar",
                areaName: "Laxmi Nagar",
                costForTwo: "₹500 for two",
                cuisines: ["Desserts","Bakery"],
                avgRating: 3.9,
                deliveryTime: 26
            }
        },
        {
            data:
            {
                id: "723195",
                name: "Garhwal Bakery",
                cloudinaryImageId: "0cb9293ff7ec5559f898add049b547a7",
                locality: "ghandhi Nagar",
                areaName: "Laxmi Nagar",
                costForTwo: "₹500 for two",
                cuisines: ["Desserts","Bakery"],
                avgRating: 4.3,
                deliveryTime: 26
            }
        }
    ]);

    return (
     <div className="body">
         <div className="filter">
            <button 
                className="filter-btn" 
                onClick={() => {
                    setListOfRestaurant()
                    //Filter Logic Here 
                    const filteredList=listofRestaurants.filter(
                        (res)=>res.data.avgRating >4
                    );
                    setListOfRestaurant(filteredList);
                    }}
            >
                Top Rated Restaurants 
            </button>
         </div>
          <div className="res-container">
                {listofRestaurants.map((restaurant)=>(
                    <RestaurantCard key= {restaurant.data.id} resData={restaurant} />
                ))}
                    
         
  
         </div>
     </div>
    ) 
} ;

export default Body;


