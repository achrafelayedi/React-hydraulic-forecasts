import React, { Component } from "react";
//import DatePicker from "react-date-picker";
import DatePicker from "react-datepicker";

class Calendar extends Component {
  state = {
    date: new Date(),
  };

  onChange = (date) => {
    this.setState({
      date,
    });
  };

  render() {
    return (
      <div className="date-picker">
        <DatePicker onChange={this.onChange} value={this.state.date} />
        {/* <p>Date choisie: {this.state.date.toLocaleDateString()} </p> */}
      </div>
    );
  }
}

export default Calendar;
