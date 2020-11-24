/*let visible=false;

const togglebutton=()=>{
    visible=!visible;
    render();
}

const render=()=>{
    const jsx=(
        <div>
            <h1>visibility toggle</h1>
            <button onClick={togglebutton}>
            {
                visible?"shown":"hidden"
            }
            </button>
            {
                visible&&(
                    <div>
                    <p>Hey there are more details you can see now</p>
                    </div>
                )
            }
        </div>
    )
    ReactDOM.render(jsx,document.getElementById("app"));
}

render();*/

class Jsx extends React.Component{
    constructor(props){
        super(props);
        this.state={
            visible:false
        };
        this.togglebutton=this.togglebutton.bind(this);
        
    }
    togglebutton(){
        this.setState((prevState)=>{
            return {
                visible:!prevState.visible
            }
        })
    }
    render(){
        return(
            <div>
                <h1>visibility toggle</h1>
                <button onClick={this.togglebutton}>
                {
                    this.state.visible?"shown":"hidden"
                }
                </button>
                {
                    this.state.visible&&(
                        <div>
                        <p>Hey there are more details you can see now</p>
                        </div>
                    )
                }
            </div>
        );
    }
}

ReactDOM.render(<Jsx />,document.getElementById("app"));
