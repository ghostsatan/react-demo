
import React from 'react'
const provinceData = ['Zhejiang', 'Jiangsu','shandong','xibanya','agenting'];

class Favor extends React.Component {
    constructor(props){
        super(props);
        this.state = {value:''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({value:event.target.value});
    }
    handleSubmit(event){
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }
    render() {
      const provinceOptions = provinceData.map(province => <option key={province}>{province}</option>);
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Pick your favorite flavor:
              <select value={provinceData[0]} onChange={this.handleChange}>
              {provinceOptions}
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
}
export default Favor