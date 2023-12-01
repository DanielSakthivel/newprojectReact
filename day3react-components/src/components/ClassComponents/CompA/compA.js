import React from "react";
class CompA extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
    handleIncrement= () => {
      this.setState({
        count: this.state.count +1,
      });
      
    }
    handleDecrement= () => {
        this.setState({
          count: this.state.count -1,
        });
        
      }

      handleReset= () => {
        this.setState({
          count: this.state.count =0,
        });
        
      }
      
    
    render() {
        return <div>CompA
            <h3>Count:{this.state.count}</h3>
            <button onClick={this.handleIncrement}>Increament</button>
            <button onClick={this.handleDecrement}>DEcreament</button>
            <button onClick={this.handleReset}>reset</button>      
        </div>
    }
}
export default CompA;