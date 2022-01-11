import { Button, IconButton, Input } from '@mui/material';
import React from 'react';

const Homepage = () => {
  return (
    <div>
      <label htmlFor="contained-button-file">
        <Input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
        />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
      <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        ></IconButton>
      </label>
    </div>
  );
};

export default Homepage;
