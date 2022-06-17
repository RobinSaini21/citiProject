import * as React from "react";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import InputAdornment from "@material-ui/core/InputAdornment";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Box from '@mui/material/Box';


const style = (theme) => ({
  notchedOutline: {
      borderColor: '#FFFFFF',
      borderWidth: 1,
      '&:hover': {
          borderColor: '#FFFFFF',
          borderWidth: 2
      },
  }
});
function DatePicker({ getDate }) {
  const calcs = style()
  const [value, setValue] = useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    getDate(value);
  }, [value]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileDatePicker
     fullWidth 
  label=""
    
      style={{boder:"2px solid black"}}
        inputFormat="MM/dd/yyyy"
        value={value}
        // customStyles={{ dateInput: { borderWidth: 0 } }}
        className="calandercs"
        inputVariant="outlined"  
        // InputProps={{
        //   endAdornment: (
        //     <InputAdornment>
        //      <CalendarMonthIcon/>
        //     </InputAdornment>
        //   )
        // }}  
        onChange={handleChange}
        renderInput={({ inputRef, inputProps, InputProps }) => (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <input className="form-control" ref={inputRef} {...inputProps} />
            {InputProps?.endAdornment}
          </Box>
        )}/>
    </LocalizationProvider>
  );
}



// renderInput={(params) => <TextField fullWidth  InputProps={{
//   disableUnderline: true
// }} sx={{border:1}} style={{border:"1px solid grey",borderRadius:"4px"}} {...params} />}
// />

export default DatePicker;
