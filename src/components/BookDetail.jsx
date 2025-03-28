import books_reviews from '../json/books.json';
import { useState } from "react";
import React from 'react'

export default function BookDetail({ book }) {
    const item = books_reviews.find((item) => item.ID === book.ID);
  

    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count > 1 ? count - 1 : 1); // 最小值為 1

    const handleBuy = () => {
        setCount(0);  // 按下 "Buy" 按鈕時，將 count 設為 0
    };

    const BuyingWindow = () => {
        document.getElementById('my_modal_1').showModal();
        setCount(0);
    }
    return (
        <div className="book-detail">
            <div className="card bg-[#DCDDDF] flex flex-col lg:flex-row lg:card-side shadow-sm p-4 sm:p-6 lg:p-8">
                <figure>
                    <img 
                        src={item.cover} 
                        alt={item.title} 
                        className="rounded-xl w-full sm:w-32 md:w-40 lg:w-48 h-auto object-contain"
                    />
                </figure>
                <div className="card-body pl-4 sm:pl-6 lg:pl-20">
                    <h1 className="card-title text-3xl + font-semibold text-center lg:text-left text-gray-700">{item.title}</h1>
                    <p className="text-lg text-gray-800 text-center lg:text-left ">{item.author}</p>
                    <p className="text-md text-left flex-wrap w-full sm:w-3/4 md:w-2/3 lg:w-2/3 text-orange-500">
                        {item.summary.substring(0, 300)}
                    </p>
    
                    <button className="btn btn-primary w-full sm:w-auto" onClick={BuyingWindow}>Add To Cart</button>
    
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box h-80 flex flex-col justify-evenly">
                            <h1 className="font-bold text-lg text-center">I want to buy: {item.title}</h1>
                            <div className="card-actions w-full flex justify-center pt-5">
                                <button className="btn btn-primary" onClick={decrement}>-</button>
                                <span className="text-lg font-bold bg-gray-200 px-2 py-1 rounded w-22">{count}</span>
                                <button className="btn btn-primary" onClick={increment}>+</button>
                            </div>
    
                            <div className="modal-action flex justify-center">
                                <form method="dialog">
                                    <button className="btn center btn text-white" style={{ backgroundColor: "#646cffaa" }} onClick={handleBuy}>Buy</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    )
}