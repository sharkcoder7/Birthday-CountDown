import React, { Component } from 'react';

import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class Picker extends Component {

    handleChange = function(date) {
        this.props.callback(date)
    }.bind(this);

    render () {
        return (
            <div className="picker">
                <DatePicker
                    selected={this.props.startDate}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default Picker;