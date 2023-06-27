import React from "react";
import { FormGroup, FormControlLabel, Checkbox, Switch, Button } from "@mui/material";

const handleSubmit = () => {
  /**
   * Submits the selected items into a function to filter the displayed entries
   * array from context so it populates accordingly in the wishlist container.
   * 
   * 
   * Add functionality to the 'x' button so it updates the context to show this modal as false
*/
}

const WishListFilterModal = () => {


  return (
    // render a section for genre
    // render a section for platform
    // render a submit button
    <div id="wishlist-modal">
      <Button className="close-modal" variant="text" >x</Button>
      <FormGroup id="wishlistselections">
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
        <Button type="submit" variant="contained" onClick={handleSubmit}>Filter</Button>        
      </FormGroup>
    </div>
  );





};

export default WishListFilterModal