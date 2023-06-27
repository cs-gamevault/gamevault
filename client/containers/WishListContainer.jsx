import React, { useState } from 'react';
import WishlistGame from '../components/WishListGame';
import { Button } from "@mui/material"
import WishListFilterModal from '../modals/WishListFilterModal';
/**
 * 1. move showfilters into context so it is globally available
 * 2. filters modal needs functionality to actually filter the selections from the database into a list of chosen items
 * 3. add the Select Filters button functionality
 */




const renderGameComponents = () => {
  const output  = [];
  // loops through the list of filtered games in the state
  // adds a WishListGame to an array to populate the container with elements representing individual games
  // must pass down the element's unique informaton to populate modal properly 'gameInfo'
  // updates the state with the output array

  return output;
}

const WishListContainer = () => {
  // NOTE: this needs to go out into context so it is globally available
  const [showFilters, setShowFilterModal] = useState(false);


  return (
    <div>
      {showFilters ? <WishListFilterModal setShowFilterModal={setShowFilterModal} /> : null}
      <Button variant="outlined" onClick={setShowFilterModal(true)}>
        Select Filters
      </Button>
    </div>
  );
};
export default WishListContainer;