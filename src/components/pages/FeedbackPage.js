import { Paper } from '@mui/material';
import React from 'react';
import Report from '../ui/Status';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  pageContent: {
    alignItems: 'center',
    width: '50vh',
    margin: 'auto',
    padding: theme.spacing(3),
  },
}));
const ReportPage = () => {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.pageContent}>
      <Report />
    </Paper>
  );
};

export default ReportPage;
