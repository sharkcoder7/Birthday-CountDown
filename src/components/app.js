import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="grid">
        <div>hi</div>
        <div>hi</div>
        <div>hi</div>
        <div className="grid__skew-light-one"></div>
        <div className="grid__skew-light-two"></div>
        <div className="grid__skew-light-three-box"></div>
      </div>
    );
  }
}
