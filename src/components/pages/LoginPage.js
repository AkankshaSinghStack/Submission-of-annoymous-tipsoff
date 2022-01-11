import Login from '../ui/Login';
import { Paper } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  pageContent: {
    width: '120vh',
    margin: 'auto',
    padding: theme.spacing(3),
  },
}));

const Loginpage = () => {
  const classes = useStyles();
  return (
    <>
      <Paper elevation={3} className={classes.pageContent}>
        <Login />
      </Paper>
    </>
  );
};

export default Loginpage;
