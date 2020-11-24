// let count=0;
// const addOne=()=>{
//     count++;
//     renderCounterApp();
//     console.log("addone");
// }
// const minusOne=()=>{
//     count--;
//     renderCounterApp();
// }
// const reset=()=>{
//     count=0;
//     renderCounterApp();
// }

// var appRoot=document.getElementById('app');


// const renderCounterApp=()=>{
//     const templateThree=(
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>add one</button>
//             <button onClick={minusOne}>minus one</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
//     ReactDOM.render(templateThree,appRoot);
// }
// renderCounterApp();
//ReactDOM.render(templateTwo,appRoot);

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleaddone=this.handleaddone.bind(this);
        this.handleminusone=this.handleminusone.bind(this);
        this.handlereset=this.handlereset.bind(this);
        this.state={
            count:0
        }
    }
    handleaddone(){
        this.setState((prevState)=>{
            return {
                count:prevState.count+1
            };
        })
        console.log(this.state.count);
    }
    componentDidMount(){
        try{
            const json=localStorage.getItem("count");
            const count=parseInt(json,10);
            if(!isNaN(count)){
                this.setState(()=>({count}));
            }
        }catch(e){
        }
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.count!==this.state.count){
            const count=JSON.stringify(this.state.count);
            localStorage.setItem("count",count);
        }
    }
    handleminusone(){
        this.setState((prevState)=>{
            return {
                count:prevState.count-1
            }
        })
        console.log("handleminusone");   
    }
    handlereset(){
        this.setState({count:0});
        console.log("handlereset");
    }
    render(){
        return(
            <div>
                <h1>count:{this.state.count}</h1>
                <button onClick={this.handleaddone}>+1</button>
                <button onClick={this.handleminusone}>-1</button>
                <button onClick={this.handlereset}>reset</button>
            </div>
        );
    }
}


ReactDOM.render(<Counter />,document.getElementById("app"));