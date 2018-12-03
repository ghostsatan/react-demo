'use strick'
import React from 'react'

class Mouse extends React.Component{
    constructor(props){
        super(props);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        //_this.state is not a function 访问不到我们想访问的setState方法了
        this.state = {x:0,y:0};
    }
    handleMouseOver(e){
        this.setState({
            x:e.clientX,
            y:e.clientY
        });
    }
    render(){
        return(
            <div onMouseMove={this.handleMouseOver}>
            <p>当前鼠标位置是：{this.state.x},{this.state.y}</p>
            </div>
        )
    }
}

class MouseTracker extends React.Component {
    render() {
      return (
        <div>
          <h1>Move the mouse around!</h1>
          <Mouse />
        </div>
      );
    }
  }
export default Mouse;