import { CDN_URL } from "../utils/constants";

const RestaurantCard= (props) => {
    const {resData}= props;

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla,
    }=resData?.info;
    return (
        <div className="res-card m-4 p-4 w-[250px] h-[510px] rounded-lg bg-gray-100 hover:bg-gray-200 ">
            <img className="res-logo w-[230px] h-[210px] rounded-lg" alt="res-logo" src={CDN_URL+cloudinaryImageId}></img>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>Cost For Two: {costForTwo}</h4>
            <h4>Delivery Time: {sla.slaString}</h4>


        </div>
    )
};

export default RestaurantCard;
