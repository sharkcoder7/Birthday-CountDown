import React, { Component } from 'react'

class Clock extends Component {
    render() {
        return (
            <div className="clock">
                <div className="clock__days clock__box">
                    <label className="clock__title">DAYS</label>
                    <label className="clock__amount">300</label>
                </div>
                <div className="clock__hours clock__box">
                    <label className="clock__title">HRS</label>
                    <label className="clock__amount">16</label>
                </div>
                <div className="clock__minutes clock__box">
                    <label className="clock__title">MINS</label>
                    <label className="clock__amount">42</label>
                </div>
                <div className="clock__seconds clock__box">
                    <label className="clock__title">SECS</label>
                    <label className="clock__amount">22</label>
                </div>
            </div>
        )
    }
}

export default Clock;