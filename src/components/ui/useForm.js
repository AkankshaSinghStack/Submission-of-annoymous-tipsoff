import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '50%',
      margin: theme.spacing(1),
    },
  },
}));

export const useForm = (initialFValues) => {
  const [values, setValues] = useState(initialFValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return {
    values,
    setValues,
    handleInputChange,
  };
};

export const Form = (props) => {
  const classes = useStyles();

  return (
    <>
      <form autoComplete="off" method="post" className={classes.root}>
        {props.children}
      </form>
    </>
  );
};
