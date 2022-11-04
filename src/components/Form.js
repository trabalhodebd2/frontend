import React from "react";

export default (props) => (
    <form 
        className="bg-white m-auto p-10 rounded-2xl flex flex-col items-center form"
    >{props.children}</form>
)