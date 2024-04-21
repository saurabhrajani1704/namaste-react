import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu= () =>{

    const {resId}=useParams();
    const [showIndex,setShowIndex]=useState(0);
    

    const resInfo=useRestaurantMenu(resId);

    if(resInfo===null){
        return <Shimmer />;
    }
        
        

    const name=resInfo?.cards[2]?.card?.card?.info;
    const itemCards=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>
            c.card?.card?.["@type"]===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

    return(
        <div>
            <h1 className="font-bold text-2xl my-6 ml-96 ">{name.name}</h1>
            <div className="rounded-2xl border-gray-300 border-2 w-[730px] h-40 ml-96 shadow-xl p-4">
                <p className="mb-1 text-base">⭐ {name.avgRating} • ({name.totalRatingsString}) • {name.costForTwoMessage} </p>
                <p className="mb-2 font-bold text-lg">{name.cuisines.join(", ")}</p>
                <p className="mb-2 font-medium text-sm">Outlet: {name.areaName}</p>
                <p className=" mb-2 font-medium text-sm">Delivery Time : {name.sla.deliveryTime} mins</p>

            </div>
           
            {/*accordion building*/}
            {categories.map((category,index) => (
                //controlled components
                <RestaurantCategory 
                    key={category?.card?.card.title}
                    data={category?.card?.card}
                    showItems={index===showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)} 

                />
            ))}
        </div>
    );
};

export default RestaurantMenu;