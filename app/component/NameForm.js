'use strick'
import React from 'react'

class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {value:''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange (e){
        this.setState({value:e.target.value});
    }
    handleSubmit (e){
       alert ('你输入的名字是：' + this.state.value);
       e.preventDefault();
    }
    render (){
        return (
            <form onSubmit={this.handleSubmit}>
            <label>姓名
            <input type = 'text' value = {this.state.value}  onChange={this.handleChange} />
            </label>
            <input type = 'submit' value = 'submit'/>
            </form>
        )
    }
}
export default NameForm