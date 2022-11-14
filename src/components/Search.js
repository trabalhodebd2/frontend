import React from "react";

import search from "../img/search.svg"

export default () => (
    <div className="relative">
        <img src={search} className="absolute left-6 inset-y-5" />
        <input 
            type="text" 
            className="w-full h-[3.75rem] rounded-2xl pl-16 pr-8" 
            placeholder="Pesquisar" 
        />
    </div>
)