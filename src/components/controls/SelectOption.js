import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
const SelectOption = (props) => {
  const { name, label, value, options, onChange } = props;
  // const [select, setSelect] = useState(props);
  return (
    <>
      <FormControl variant="outlined">
        <InputLabel>{label}</InputLabel>
        <Select label={label} onChange={onChange} value={value} name={name}>
          <MenuItem value>None</MenuItem>
          {options.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default SelectOption;
