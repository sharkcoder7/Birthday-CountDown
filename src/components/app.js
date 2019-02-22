import React, { Component } from 'react';
import Picker from './picker';
import Button from './button';
import Clock from './clock';
import changeDate from './changeDate'

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      active: false
    }
  }

  renderItems = function() {
    if(this.state.active) {
      return [
        <Clock/>,
        ChangeDate('Change Date', () => this.setState({ active: false}))
        
      ]
    }else{ 
      return Button('Generate Countdown', () => this.setState({ active: true }))
    }
  }.bind(this)

  render() {

    //return <div className=""><Clock/></div>

    return (
      <div className="grid">
        <h1 className="grid__title">Birthday Countdown</h1>
        <div className="grid__skew-dark-one-box"></div>
        <div className="grid__skew-dark-two"></div>
        <div className="grid__skew-dark-three"></div>

        <div className="grid__skew-light-one"></div>
        <div className="grid__skew-light-two"></div>
        <div className="grid__skew-light-three-box"></div>

        <Picker/>
        { Button('Generate Countdown', () => this.setState({ active: true })) }
        <Clock/>

      </div>
    );
  }
}
