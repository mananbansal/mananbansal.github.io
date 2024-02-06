import { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";

const DateSearch = () => {
  // const [dates, setDates] = useState([
  //   new DateObject({ year: 2023, month: 1, day: 22 }),
  //   "December 09 2020",
  //   1597994736000, //unix time in milliseconds (August 21 2020)
  // ]);

  // const [dates, setDates] = useState([
  //   new DateObject().setDay(5),
  //   new DateObject().setDay(14).add(1, "month"),
  // ]);

  const [selectedDate, setSelectedDate] = useState(new DateObject());

  return (
    <div className="text-15 text-light-1 ls-2 lh-16 custom_dual_datepicker">
      <DatePicker
        inputClass="custom_input-picker"
        containerClassName="custom_container-picker"
        value={selectedDate}
        onChange={setSelectedDate}
        numberOfMonths={1}
        offsetY={10}
        format="MMMM DD"
      />
    </div>
  );
};

export default DateSearch;
