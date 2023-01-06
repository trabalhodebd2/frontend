import React from "react";

import alert from "../../img/alert-circle.svg"

export default (props) => (
    <div className="mt-5 mb-2 self-start ml-3 flex gap-6 cursor-default">
        <img src={alert} />
        <p className="text-primary relative top-0.5">{props.text}</p>
    </div>
)