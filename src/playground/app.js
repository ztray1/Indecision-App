class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            options:props.options
        };
        this.handledeleteoptions=this.handledeleteoptions.bind(this);
        this.handlePick=this.handlePick.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.handledeleteoption=this.handledeleteoption.bind(this);
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
    handledeleteoptions(){
        this.setState(()=>({options:[]}))
    }
    handledeleteoption(optionToRemove){
        this.setState((prevState)=>({
            options:prevState.options.filter((option)=>optionToRemove!==option)
        }))
    }
    handlePick(){
        const random=Math.floor(Math.random()*this.state.options.length);
        const option =this.state.options[random];
        alert(option);
    }
    handleAddOption(option){
        if(!option){
            return "enter valid value to add item";
        }else if(this.state.options.indexOf(option)>-1){
            return "this option already exist";
        }
        this.setState((prevState)=>({options:prevState.options.concat(option)}))
    }
    render(){
        const title="this is title";
        const subtitle="this is subtitle";
        return(
            <div>
                <Header />
                <Action 
                hasOptions={this.state.options.length>0}
                handlePick={this.handlePick}   
                />
                <Options options={this.state.options}
                         handledeleteoptions={this.handledeleteoptions}
                         handledeleteoption={this.handledeleteoption}/>
                <Addoptions handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps={
    options:[]
}


const Header=(props)=>{
        return (
            <div>
            <h1>{props.title}</h1>
            {props.subtitle&&<h2>{props.subtitle}</h2>}
            </div>
        );
}

Header.defaultProps={
    title:"some default"
}


const Options =(props)=>{
    return (
        <div> 
            <button onClick={props.handledeleteoptions}>Remove all</button>
            {props.options.length ===0&&<p>please add options to start</p>}
            {
                props.options.map((option)=><Option key={option} optiontext={option} handledeleteoption={props.handledeleteoption}/>)
            }
        </div>
    );
}

const Option=(props)=>{
    return(
        <div>
            Options: {props.optiontext}
            <button onClick={
                (e)=>{props.handledeleteoption(props.optiontext)}}
                >remove</button>
        </div>
    );
}


class Addoptions extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state={
            error:undefined
        }
    }
    handleAddOption(e){
        e.preventDefault();
        const option=e.target.elements.option.value.trim();
        const error=this.props.handleAddOption(option);
        this.setState(()=>({error}));
        if(!error){
            e.target.elements.option.value='';
        }
    }
    render(){
        return (
            <div>
                {this.state.error&&<p>{this.state.error}</p>} 
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}

const User=(props)=>{
    return(
        <div>
        <p>name:{props.name}</p>
        <p>age:{props.age}</p>
        </div>
    );
};


ReactDOM.render(<IndecisionApp />,document.getElementById('app'));