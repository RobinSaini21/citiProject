import * as React from "react";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

function TimePicker_({ getTime }) {
  const [value, setValue] = useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  // useEffect(() => {
  //   getDate(value);
  // }, [value]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        // sx={{border: 1,}}
        inputProps={{
          underline: {
            ".&:before": {
              borderBottom: "none",
            },
            ".&:after": {
              borderBottom: "none",
            },
          },
        }}
        value={value}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField
            fullWidth
            InputProps={{
              disableUnderline: true,
              underline: {
                "&&&:before": {
                    borderBottom: "none"
                },
                "&&:after": {
                    borderBottom: "none"
                }
            }
            }}
       
            sx={{ border: "1px solid green", borderRadius: 1 }}
            disableUnderline
            style={{ border: "1px solid grey", borderRadius: "4px" }}
            {...params}
          />
        )}
      />
    </LocalizationProvider>
  );
}

export default TimePicker_;
