'use strick'
import React from 'react'

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date:new Date()};
    }
    componentDidMount (){
        this.timer =  setInterval(
            ()=>{
                this.tick()
            }
        ,1000);
    }
    componentWillMount (){
        clearInterval(this.timer);
    }
    tick (){
        this.setState({
            date:new Date()
        })
    }
    render(){
        return (
            <div>
            <h1>hello,react</h1>
            <h2>现在的时间是:{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }

}
export default Clock;