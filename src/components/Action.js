import React from "react";

const Action=(props)=>(
    <div>
         <button 
         className="big_button"
         onClick={props.handlePick}
         disabled={!props.hasOptions}
         >what should I do next</button>
    </div>
);

export default Action;