import React from "react";
import Addoptions from "./AddOption";
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";
import OptionModal from "./OptionModal";
import OptionalModal from "./OptionModal";


class IndecisionApp extends React.Component{
    state={
        options:[],
        selectedOption:undefined
    };
    handledeleteoptions=()=>{
        this.setState(()=>({options:[]}))
    }
    handledeleteoption=(optionToRemove)=>{
        this.setState((prevState)=>({
            options:prevState.options.filter((option)=>optionToRemove!==option)
        }))
    }
    handleClearSelectionOption=()=>{
        this.setState(()=>({selectedOption:undefined}))
    }
    handlePick=()=>{
        const random=Math.floor(Math.random()*this.state.options.length);
        const option =this.state.options[random];
        this.setState(()=>({
            selectedOption:option
        }))
    }
    handleAddOption=(option)=>{
        if(!option){
            return "enter valid value to add item";
        }else if(this.state.options.indexOf(option)>-1){
            return "this option already exist";
        }
        this.setState((prevState)=>({options:prevState.options.concat(option)}))
    }
    componentDidMount(){
        try{
            const json=localStorage.getItem("options");
            const options=JSON.parse(json);
            if(options){
                this.setState(()=>({options}));
            }
        }
            catch(e){
            }
        
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length!==this.state.options.length){
            const json=JSON.stringify(this.state.options);
            localStorage.setItem("options",json);
        }
    }
    
    render(){
        const title="this is title";
        const subtitle="choose your task";
        return(
            <div>
                <Header subtitle={subtitle}/>
                    <div className="container">
                        <Action 
                        hasOptions={this.state.options.length>0}
                        handlePick={this.handlePick}   
                        />
                        <div className="widget">
                        <Options options={this.state.options}
                                handledeleteoptions={this.handledeleteoptions}
                                handledeleteoption={this.handledeleteoption}/>
                        <Addoptions handleAddOption={this.handleAddOption}/>
                        </div>
                        <OptionalModal selectedOption={this.state.selectedOption}
                        handleClearSelectionOption={this.handleClearSelectionOption}     
                        />
                    </div>
            </div>
        );
    }
}


export default IndecisionApp;