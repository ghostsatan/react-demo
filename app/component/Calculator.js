'use strick'
import React from 'react'

const scaleNames = {
    c:'摄氏温度',
    f:'华氏温度'
}
function toCelsius (f){
  return (f-32)*5/9;
}

function toFahrenheit (c){
    return (c*9/5)+32
}

function tryConvert(temp,convert){
    const input = parseFloat(temp);
    if (Number.isNaN(input)){
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}



function Boiling (props){
    // console.log(props);
    if (props.celsius >=100){
        return <p>水即将沸腾</p>
    }else {
        return <p>水不会沸腾</p>
    }
}
class TempInput extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.props.onTemperatureChange(e.target.value);
    }
    render (){
        const temp = this.props.temp;
        const scale = this.props.scale;
        return(
            <fieldset>
            <legend>请输入水的 {scaleNames[scale]}:</legend>
            <input value={temp}
               onChange={this.handleChange} />
            </fieldset>
            
        )
    }
}
class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {temp:'',scale:'c'};
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }
    handleCelsiusChange (temp){
        console.log(this.state);
        this.setState({scale: 'c', temp});
    }
    handleFahrenheitChange(temp) {
        this.setState({scale: 'f', temp});
      }
    handleChange (e){
        this.setState({temp:e.target.value});
    }
    render() {
        const scale = this.state.scale;
        const temperature = this.state.temp;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    
        return (
          <div>
            <TempInput
              scale="c"
              temp={celsius}
              onTemperatureChange={this.handleCelsiusChange} />
            <TempInput
              scale="f"
              temp={fahrenheit}
              onTemperatureChange={this.handleFahrenheitChange} />
            <Boiling
              celsius={parseFloat(celsius)} />
          </div>
        );
      }

}
export default  Calculator 
