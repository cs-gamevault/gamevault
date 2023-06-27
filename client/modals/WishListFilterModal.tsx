import React from "react";
import { FormGroup, FormControlLabel, Checkbox, Switch, Button } from "@mui/material";

const handleSubmit = () => {
  /**
   * submits the selected items into a function to filter out displayed entries
   * that don't match the choices
*/
}

const WishListFilterModal = () => {





  return (
    // render a section for genre
    // render a section for platform
    // render a submit button
    <div>
      <FormGroup id="wishlistfilters">
        <h2>Genre</h2>
        <FormControlLabel control={<Checkbox />} label="Genre#1" />
        <FormControlLabel control={<Checkbox />} label="Genre#2" />
        <br></br>
        <h2>Platform</h2>
        <FormControlLabel control={<Checkbox />} label="Platform#1" />
        <FormControlLabel control={<Checkbox />} label="Platform#2" />
        <br></br>
        <h2>Show Unreleased Games</h2>
        <FormControlLabel control={<Switch />} label="Show Unreleased" />
        <br></br>
        <Button type="submit" variant="contained" onClick={handleSubmit}></Button>        
      </FormGroup>
    </div>
  );





};

export default WishListFilterModal