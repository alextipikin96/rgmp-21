import React from "react";
import DatePicker from "react-datepicker";
import "./DateInput.scss";
import "react-datepicker/dist/react-datepicker.css";

export default ({ startDate, dateHandler }) => (
  <>
    <label form="release_date">release date</label>
    <div className="calendarIcon"></div>
    <DatePicker
      id="release_date"
      selected={(startDate && new Date(startDate)) || null}
      onChange={(date) => dateHandler("release_date", date)}
      placeholderText="Select Date"
    />
  </>
);
