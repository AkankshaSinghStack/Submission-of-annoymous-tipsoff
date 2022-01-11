// import { Grid } from '@mui/material';
// import { makeStyles } from '@mui/styles';
import axios from 'axios';
import React from 'react';
import Button from '../controls/Button';
import Input from '../controls/Input';
import { Form, useForm } from '../ui/useForm';
import { useNavigate } from 'react-router-dom';

// const useStyles = makeStyles((theme) => ({}));
const Feedbackpage = () => {
  const navigate = useNavigate();

  // const classes = useStyles();
  const state = {
    secretkey: '',
  };
  const { values, handleInputChange } = useForm(state);
  const submitStatus = () => {
    const { secretkey } = values;
    if (secretkey) {
      axios
        .post(`http://localhost:8080/feedback/check/${values.secretkey}`)
        .then((response) => alert(response))
        .catch((err) => alert(err));
      navigate('/feedback');
    } else {
      alert('Every field must be filled!!');
      navigate('/feedback');
    }
  };

  return (
    <>
      <Form>
        <Input
          name="secretkey"
          label="Input SecretKey"
          value={values.secretkey}
          onChange={handleInputChange}
          type="password"
        />
        <Button
          type="submit"
          text="Submit"
          onClick={submitStatus}
          style={{ height: '40px', marginTop: '7px' }}
        />
      </Form>
    </>
  );
};

export default Feedbackpage;
