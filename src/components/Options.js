import React from "react";
import Option from "./Option";

const Options =(props)=>(
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your options</h3> 
            <button 
            onClick={props.handledeleteoptions}
            className="button button--link">Remove all</button>
        </div>
    
        {props.options.length ===0&&<p className="widget__message">please add options to start</p>}
        {
            props.options.map((option,index)=><Option key={option} optiontext={option} count={index+1} handledeleteoption={props.handledeleteoption}/>)
        }
    </div>
);


export default Options;