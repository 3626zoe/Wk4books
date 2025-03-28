import { Link } from "react-router"
import React from 'react'

function Header({ title, slogan }) {
   return (
      <header className="text-center flex flex-col items-center header">
         <Link to="/">
         <h2 className="text-white pt-12 pb-2 text-3xl font-bold">
            {title}
         </h2>
         </Link>
         
         <p className="text-gray-400 text-opacity-80 text-base leading-relaxed xl:w-1/2 lg:w-3/4 mx-auto">
            {slogan}
         </p>
         <div className="flex mt-6 justify-center">
            <hr className="my-[25px] mx-auto w-[100px] border-0 border-t-[6px] border-[rgb(161,218,229)] opacity-100 rounded" />
         </div>
      </header>
   );
}
export default Header;