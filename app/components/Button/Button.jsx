"use client"

import { addToCart, removeFromCart } from "@/Global/features/counters/counterSlice";
import { useDispatch } from "react-redux";

const Button = ({ children,data,type }) => {
    const dispatch = useDispatch();
    
    const AddToCart = (data) => {
        dispatch(addToCart(data));
    }
    const RemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    }
    return (

        <div>
            
            {
                type === "add" ? (
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md"
                        onClick={() => AddToCart(data)}
                    >
                        {children}
                    </button>
                ) : (
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md"
                        onClick={() =>RemoveFromCart(data)}
                    >
                        {children}
                    </button>
                )
            }
        </div>
    );
};

export default Button;