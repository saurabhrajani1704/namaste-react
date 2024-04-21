import { useDispatch, useSelector } from "react-redux";
import ItemList from "./itemList";
import { clearCart } from "../utils/cartSlice";
import { CART_URL, FOOD_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Cart= ()=>{

    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () =>{
        //dispatch an action
        dispatch(clearCart());
    }

    if(cartItems.length===0){
        
        return(
            <div className="mx-auto">
                <img className="w-[50%] mx-auto mb-2" src={CART_URL} alt="cart image"></img>
                <h1 className="mx-auto text-center font-bold text-2xl mb-3">Your Cart is Empty</h1>
                <p className="mx-auto text-center font-medium text-lg mb-3">Looks like you have not added anything to your cart. Go ahead & explore items in menu</p>
                <p className="text-center">
                    <button className="mx-auto p-2 m-2 bg-black text-white rounded-lg mb-5"> <Link to="/">Add Items</Link></button>
                </p>
            </div>
            
        )
    }
    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold ml-10"> Your Cart</h1>
            <div  className="rounded-2xl border-gray-300 border-2 w-[730px]  ml-96 shadow-xl p-4 bg-[#1C1917]">
                <h1 className="text-lg font-medium mb-3 text-white ml-8">Total Items in Cart: {cartItems.length}</h1>
                {cartItems.map((item) => (
                    <div>
                    <div className="flex justify-between flex-row-reverse mb-4" key={item.id}>
                        <p className="text-white font-medium mt-3">₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</p>
                        <p className="text-center text-wrap text-white font-medium mt-4">{item.card.info.name}</p>
                        
                        {/*<p>Count: {cartItems.filter((cartItem) => cartItem.card.info.name === item.card.info.name).length}</p>*/}
                        {cartItems.filter((cartItem) => cartItem.card.info.name === item.card.info.name)&& (
                            <img className="w-24 rounded-lg shadow-lg mt-2 text-white brightness-125" src={FOOD_URL+item.card.info.imageId}></img>
                        )}
                    </div>
                    <hr className="border-2 border-gray-500 mt-[-6px]"></hr>
                    </div>
                    
                ))}
                <hr className="border-1 border-gray-500"></hr>
                <h1 className="text-lg text-right font-medium text-white">Total Amount: ₹{cartItems.reduce((acc, item) => acc + item.card.info.price, 0)/100}</h1>
            </div>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart </button>
                {cartItems.length===0 && <h1>No items in the cart</h1>}
                <ItemList items={cartItems}/>
            </div>
        </div>
    );
};

export default Cart;