import React, { Component } from "react";
import DatePicker from "react-date-picker";
//import DatePicker from "react-datepicker";

class Calendar extends Component {
  state = {
    date: new Date(),
    //date: "12/05/2021",
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
      </div>
    );
  }
}

export default Calendar;
