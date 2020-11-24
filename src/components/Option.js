import React from "react";

const Option= (props)=>(
    <div className="option">
        <p className="option__text">{props.count} . {props.optiontext}</p>
        <button onClick={
            (e)=>{props.handledeleteoption(props.optiontext)}}
            className="button--link">remove</button>
    </div>
);

export default Option;