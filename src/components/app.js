import React, { Component } from "react";

import Picker from "./picker";
import Button from "./button";
import Clock from "./clock";
import ChangeDate from "./changeDate";
import LargeText from "./largeText";

import moment from "moment";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.timer = 0;

    this.state = {
      active: false,
      startDate: moment(),
      timeRemaining: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      },
      age: 0
    };

    this.handleGenerate = this.handleGenerate.bind(this);
  }

  handleChange = function(date) {
    console.log("APP JS HANDLE CHANGE", date._d);
    clearInterval(this.timer)
    this.setState({
      startDate: date
    });
  }.bind(this);

  handleGenerate = function() {
    
   
    var bday = this.state.startDate.toDate();
    var today = new Date();
    var currentMonth = today.getMonth();
    var birthMonth = bday.getMonth();

    var timeBetween = today.getTime() - bday.getTime();
    var daysOld = Math.floor(timeBetween / (1000 * 60 * 60 * 24))
    var age = Number((daysOld/365).toFixed(0));
    this.setState({ 
      age,
      active: true
    })

    if(birthMonth > currentMonth) {
      bday.setFullYear(today.getFullYear())
    } else if(birthMonth < currentMonth) {
      bday.setFullYear(today.getFullYear() + 1)
    } else if(birthMonth == currentMonth) {
      var currentDay = today.getDate();
      var birthDay = bday.getDate();

      if(birthDay > currentDay) {
        bday.setFullYear(today.getFullYear())
      }
      if(birthDay <= currentDay) {
        bday.setFullYear(today.getFullYear() + 1)
      }
    }

    var countDownDate = bday.getTime();

    this.timer = setInterval(function() {

      var now = moment().toDate().getTime();
      var distance = countDownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const time = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      const timeRemaining = {
        days,
        hours,
        minutes,
        seconds
      };
      this.setState({ timeRemaining });

      if (distance < 0) {
        clearInterval(this.timer);
        // document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }.bind(this), 1000);
  }.bind(this);

  getBirthDate = function(date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    if(month < 10) {
      return `0${month}/${day}`
    }
    return `${month}/${day}`
  }.bind(this);

  renderItems = function() {
    if (this.state.active) {
      return [
        <Clock key={0} timeRemaining={this.state.timeRemaining} />,
        ChangeDate("Change Date", () => this.setState({ active: false })),
        LargeText(this.getBirthDate(this.state.startDate.toDate())),
        <label key={3} className="grid__remaining">
          Remaining until you turn {this.state.age}
        </label>
      ];
    } else {
      return [
        <Picker
          startDate={this.state.startDate}
          callback={date => this.handleChange(date)}
          key={0}
        />,
        Button("Generate Countdown", () => this.handleGenerate())
      ];
    }
  }.bind(this);

  render() {
    return (
      <div className="grid">
        <h1 className="grid__title">Birthday Countdown</h1>

        <div className="grid__skew-dark-two" />
        <div className="grid__skew-dark-three" />

        <div className="grid__skew-light-one" />
        <div className="grid__skew-light-two" />
        <div className="grid__skew-light-three-box" />

        {this.renderItems()}
      </div>
    );
  }
}