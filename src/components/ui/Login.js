import React from 'react';
import Grid from '@mui/material/Grid';

import { useForm, Form } from './useForm';
import SelectOption from '../controls/SelectOption';
import Input from '../controls/Input';
import Button from '../controls/Button';
import { Card } from '@mui/material';
import side from '../assets/img/side.jpg';
import { makeStyles } from '@mui/styles';
const initialFValues = {
  id: 0,
  email: '',
  password: '',
  userID: 0,
  type: ['Admin', 'SuperAdmin'],
};
const SelectItem = [
  { id: 0, title: 'Admin' },
  { id: 1, title: 'Super Admin' },
];
const useStyles = makeStyles((theme) => ({}));
const Loginpage = () => {
  const classes = useStyles();
  const { values, handleInputChange } = useForm(initialFValues);
  return (
    <Form>
      <Grid container>
        <Grid item xl={8}>
          <SelectOption
            name="userID"
            label="UserType"
            value={values.userID}
            onChange={handleInputChange}
            options={SelectItem}
          />
          <Input
            name="email"
            label="Your registered email"
            value={values.email}
            onChange={handleInputChange}
            type="email"
          />
          <Input
            name="password"
            label="Password"
            value={values.password}
            onChange={handleInputChange}
            type="password"
          />
          <div>
            <Button type="submit" text="Submit" />
            <Button color="default" text="Reset" />
          </div>
        </Grid>
        <Grid item xs={4} className={classes.stamp}>
          <Card variant="outlined">
            <img src={side} alt="" width={'100%'} />
          </Card>
        </Grid>
      </Grid>
    </Form>
  );
};

export default Loginpage;
