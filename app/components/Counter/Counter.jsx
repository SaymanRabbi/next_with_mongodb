"use client"

import { decrement, increment } from "@/Global/features/counters/counterSlice";
import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.value)
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(increment(
                 3
            ))}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4"
            >Increment</button>
            <button onClick={() => dispatch(decrement(
               3
            ))}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >Decrement</button>
        </div>
    );
};

export default Counter;