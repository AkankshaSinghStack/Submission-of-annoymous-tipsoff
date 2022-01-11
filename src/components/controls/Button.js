import React from 'react';
import { makeStyles } from '@mui/styles';
import { Button as MuiButton } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    '&.MuiButtonBase-root': {
      width: '14.5ch',
      margin: theme.spacing(1),
      textTransform: 'none',
    },
  },
}));

const Button = (props) => {
  const classes = useStyles();
  const { text, size, color, variant, onClick, ...other } = props;
  return (
    <>
      <MuiButton
        variant={variant || 'contained'}
        size={size || 'large'}
        color={color || 'primary'}
        onClick={onClick}
        {...other}
        className={classes.root}
      >
        {text}
      </MuiButton>
    </>
  );
};

export default Button;
