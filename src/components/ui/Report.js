import React from 'react';
import Grid from '@mui/material/Grid';

import { useForm, Form } from './useForm';
import SelectOption from '../controls/SelectOption';
import Input from '../controls/Input';
import Button from '../controls/Button';
import { makeStyles } from '@mui/styles';
import Datepicker from '../controls/DatePicker';
import { TextField } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import * as sectorData from './services';
import * as inforTypeData from './services';

const useStyles = makeStyles((theme) => ({
  leftGrid: {
    '&.MuiGrid-item': {
      width: '100ch',
    },
  },
  RightGrid: {
    '&.MuiGrid-item': {
      width: '100ch',
    },
  },
}));
const initialFValues = {
  id: 0,
  sector: '',
  infoType: '',
  incidentDate: new Date(),
  futureIncidentDate: new Date(),
  userName: '',
  secretkey: '',
  data: '',
  upload: null,
};

const Report = () => {
  const classes = useStyles();
  const { values, handleInputChange } = useForm(initialFValues);
  const navigate = useNavigate();

  const submitData = () => {
    const {
      sector,
      infoType,
      incidentDate,
      futureIncidentDate,
      userName,
      secretkey,
      data,
      upload,
    } = values;
    if (
      sector &&
      infoType &&
      incidentDate &&
      futureIncidentDate &&
      secretkey &&
      userName &&
      data &&
      upload
    ) {
      axios
        .post('http://localhost:8080/intel/create', values)
        .then((res) => alert(res.data.message))
        .catch((err) => alert(err));
      navigate('/feedback');
    } else {
      alert('Every field must be filled!!');
      navigate('/feedback');
    }
  };
  return (
    <Form>
      <Grid container>
        <Grid item xl={6} className={classes.leftGrid}>
          <SelectOption
            name="sector"
            label="Sector"
            value={values.sector}
            onChange={handleInputChange}
            options={sectorData.getSectorCollection()}
          />
          <SelectOption
            name="infoType"
            label="InfoType"
            value={values.infoType}
            onChange={handleInputChange}
            options={inforTypeData.getInfoTypeCollection()}
          />
          <Datepicker
            name="incidentDate"
            label="Incident Date"
            value={values.incidentDate}
            onChange={handleInputChange}
          />
          <Datepicker
            name="futureIncidentDate"
            label="Future Incident Date"
            value={values.futureIncidentDate}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xl={6} className={classes.RightGrid}>
          <Input
            name="userName"
            label="Your Full Name"
            value={values.userName}
            onChange={handleInputChange}
            type="text"
          />
          <Input
            name="secretkey"
            label="Create secret key"
            value={values.secretkey}
            onChange={handleInputChange}
            type="password"
          />
          <TextField
            name="data"
            value={values.data}
            label="Brief About Incident"
            onChange={handleInputChange}
            multiline
            rows={4}
          />

          <label htmlFor="contained-button-file">
            <Input
              name="upload"
              accept="image/*"
              type="file"
              value={values.upload}
              onChange={handleInputChange}
            />
          </label>
          <div>
            <Button type="submit" text="Submit" onClick={submitData} />
            <Button color="default" text="Reset" />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default Report;
