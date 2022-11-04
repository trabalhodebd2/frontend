import React from "react";

export default (props) => (
    <form 
        className="bg-white w-1/3 min-w-min m-auto p-10 rounded-2xl flex flex-col items-center"
    >{props.children}</form>
)