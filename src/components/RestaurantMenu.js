import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu= () =>{

    const {resId}=useParams();
    

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
        <div className="text-center">
            <h1 className="font-bold text-2xl my-6 ">{name.name}</h1>
            <p className="font-bold text-lg">{name.cuisines.join(", ")} - {name.costForTwoMessage}</p>
            {/*accordion building*/}
            {categories.map((category) => (
                <RestaurantCategory data={category?.card?.card} />
            ))}
        </div>
    );
};

export default RestaurantMenu;