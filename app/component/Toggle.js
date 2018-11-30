'use strick'
import React from 'react'

class Toggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isToogleOn:true};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        console.log(this.props,this.state);
        this.setState(state => ({
            isToogleOn:!state.isToogleOn
        }));
    }
    render(){
        return (
           <button onClick = {this.handleClick}>点击我一下试试{this.state.isToogleOn ? 'on':'off'}</button>
        );
    }

}
export default Toggle;