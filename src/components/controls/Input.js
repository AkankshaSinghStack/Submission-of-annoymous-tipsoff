import React from 'react';
import TextField from '@mui/material/TextField';

const Input = (props) => {
  const { name, label, value, onChange, type } = props;
  return (
    <>
      <TextField
        variant="outlined"
        label={label}
        value={value}
        name={name}
        onChange={onChange}
        type={type}
      />
    </>
  );
};

export default Input;
