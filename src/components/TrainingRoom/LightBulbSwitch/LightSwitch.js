import React from 'react'
import on from '../../../assets/lighbulb/lightSwitch-on.gif'
import off from '../../../assets/lighbulb/lightSwitch-off.gif'
import "./LightBulbSwitch.css";

class LightSwitch extends React.Component{
  static defaultProps = {
      images:{on, off}
  }
  constructor(props) {
    super(props)
    this.state = {
      state:'off'
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.setState({state: this.state.state === 'off' ? 'on' : 'off'})
    if (this.state.state === 'off' ){
      this.props.turnOn()
    } else{
      this.props.turnOff()
    }
  }
  
  render(){
    return(
      <div className="switch">
        <img src={this.props.images[this.props.state]} alt={`light bulb is ${this.props.state}`}
          onClick={this.handleClick}
        />
      </div>
    )
  }
}

export default LightSwitch
