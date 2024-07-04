import { Component }  from "react";
class Message extends Component { 
render()
    {
        return <h1>This is Class Component FROM {this.props.name} Profession is {this.props.profession}</h1>
    }
}
export default Message;
