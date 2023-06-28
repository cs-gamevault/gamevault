import React, { useContext } from 'react';

import { FormGroup, FormControlLabel, Checkbox, Switch, Button } from '@mui/material';

import { ApplicationContext } from '../AppContext';



const WishListFiltersModal = props => {
  const { showFiltersModal, setShowFiltersModal, setSelectedFilters } = useContext(ApplicationContext)
  


  const handleSubmit= () => {
    /**
     * Updates state with the selected filter options as an object with keys
     * that match gameData keys, and values that are a list of selected filters.
     * 
     * should it reset the values of the filter options to false (empty)?
     */
  };


  return (
    // render a section for genre
    // render a section for platform
    // render a submit button
    <div id="wishlist-modal">
      <Button
        className="close-modal"
        variant="text"
        onClick={() => {
          setShowFiltersModal(false);
        }}
      >
        x
      </Button>

      <FormGroup id="wishListSelections">
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
        <Button type="submit" variant="contained" onClick={() => { handleSubmit() }}>
          Filter
        </Button>
      </FormGroup>
    </div>
  );
};

export default WishListFiltersModal;
