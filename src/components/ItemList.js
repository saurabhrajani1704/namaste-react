import { FOOD_URL } from "../utils/constants";
import { addItemToCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const ItemList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItems =(item) =>{
        console.log(item)
        console.log("abc");
        //dispatch an action
        dispatch(addItemToCart(item));
    }



    console.log(items);
    return(
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 text-xl border-b-2 text-left">
                    <div className="flex flex-row justify-between mb-2">
                        <div className="p-2" >
                            <span className="font-bold">{item.card.info.name}</span>
                            <p className="text-base"> ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</p>
                            <p className="text-sm">{item.card.info.description}</p>
                        </div>
                    
                        <img className="w-36 rounded-lg " src={FOOD_URL+item.card.info.imageId}></img>
                    </div>
                    <p className="text-right mr-10">
                            <button
                                className="w-20 rounded-lg bg-black text-white hover:bg-[#87acec] font-poppins text-base" 
                                onClick={() => handleAddItems(item)}
                            >
                                Add
                            </button>

                    </p>
                    
                    
                    
                    
                    
                </div>
            ))}
        </div>
    ); 
};

export default ItemList;