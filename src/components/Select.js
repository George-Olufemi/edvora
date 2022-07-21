import React,  { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    display: 'block'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [rides, setRides] = useState();
  useEffect(() => {
    axios.get("https://assessment.api.vweb.app/rides")
    .then(response => setRides(response.data))
  }, []);

  return (

    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Age"
          className="w-[168.45px]"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
            rides ? rides.map((ride, index) => (
            <div key={index}>
            <MenuItem value={10}>{ride.state}</MenuItem>
            </div>
            )) : null
          }
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Age"
          className="w-[168.45px]"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
            rides ? rides.map((ride, index) => (
            <div key={index}>
            <MenuItem value={10}>{ride.city}</MenuItem>
            </div>
            )) : null
          }
        </Select>
      </FormControl>
    </div>
  );
}
