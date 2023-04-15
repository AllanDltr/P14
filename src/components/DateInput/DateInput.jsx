import React, {useState} from "react";
import PropTypes from "prop-types";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateField  } from "@mui/x-date-pickers/DateField ";
import dayjs from "dayjs";

export function DateInput ({id, label, name}) {
  const [dateValue, setDateValue] = useState(dayjs());

  const handleChangeDatePicker = (newValue) => {
    setDateValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateField fullWidth
          id={id}
          label={label}
          name={name}
          value={dateValue}
          onChange={handleChangeDatePicker}
        />
    </LocalizationProvider>
  );
}

DateInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

  // const handleChange = (e) => {
  //   handleChange({ target: { name: name, value: e } });
  // };

  // const handleDateChange = (date) => {
  //   const newDate = new Date(date).toLocaleDateString('en-GB')
  //   setBirthDate(newDate)
  //   console.log(birthDate)
  //   // handleDateChange({ target: { name: name, value: birthDate } });
  // }

//   return (
//     <ReactDatePicker
//       dateFormat={dateFormat}
//       selected={defaultDate}
//       // onChange={(date) => handleChange(date)}
//       // onChange={(date) => handleDateChange(date)}
//     />
//   );
// };