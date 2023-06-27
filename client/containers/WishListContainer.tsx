import React, { useState } from 'react';
import WishlistGame from '../components/WishListGame';
import { Button } from "@mui/material"
import WishListFilterModal from '../modals/WishListFilterModal';
/**
 * 1. move showfilters into context so it is globally available
 * 2. filters modal needs functionality to actually filter the selections from the database into a list of chosen items
 * 3. add the Select Filters button functionality
 */

// NOTE: this needs to go out into context so it is globally available
const [showFilters, setShowFilters] = useState(false);


const renderGameComponents = (): JSX.Element[] => {
  const output: JSX.Element[]= [];
  // loops through the list of games in the state
  // adds a JSX element to an array to populate the container with clickable elements representing individual games

  // must pass in the element's unique informaton to populate modal properly

  return output;
}


const WishListContainer = () => {

  // render the list of wishlist games as buttons that will open info modal
  // render the filter button that opens a filtering modal

  return (
    <div>
      {renderGameComponents()}
      {showFilters ? <WishListFilterModal /> : null}
      <Button variant="outlined" >Select Filters</Button>
    </div>
  );



};
export default WishListContainer;