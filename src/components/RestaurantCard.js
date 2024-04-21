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
        <div className="res-card m-4 p-4 w-[320px] h-[380px] rounded-lg bg-gray-100 hover:bg-gray-200 ">
            <img className="res-logo w-[300px] h-[200px] rounded-lg mb-0" alt="res-logo" src={CDN_URL+cloudinaryImageId}></img>
            <h4 className="font-bold py-4 text-lg my-[-3px]">{name}</h4>
            <p className="font-normal mt-[-13px] mb-1">{cuisines.join(", ")}</p>
            <div className="flex flex-row justify-between">
                <p className="bg-gray-200 p-1 text-sm">{avgRating}⭐</p>
                <h4>{sla.slaString}</h4>
            </div>
                


        </div>
    )
};

export default RestaurantCard;
