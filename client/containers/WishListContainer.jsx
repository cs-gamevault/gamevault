import React, { useEffect, useContext } from 'react';
import { createPortal } from 'react-dom';
import { ApplicationContext } from '../AppContext';
import { Button } from '@mui/material';

import Game from '../components/Game';
import WishListFilterModal from '../modals/WishListFilterModal';
/**
 * Stretch Features
 * 1. filters modal needs functionality to actually filter the selections from the database into a list of chosen items
 * 2. add the Select Filters button functionality
 */

const renderWishList = (filteredGames) => {
  const output = [];
  // loops through the list of filtered games passed in
  // adds a Game component to the output array to populate the container with elements representing individual games
  // must pass down the element's unique informaton to populate modal properly 'gameData'
  // must pass down the componentType property and assign it 'WishList' to properly work with the GameInfoModal
  filteredGames.forEach(gameDataObj => {
    output.push(<Game componentType='WishList' gameData={ gameDataObj } />)

  })

  return output;
};

const ListContainer = () => {
  const portal = document.querySelector('#modalPortal1')
  // use the showFiltersModal to dynamically render the modal
  const { showFiltersModal, setShowFiltersModal, setWishList, filteredWishList } = useContext(ApplicationContext);

  useEffect(() => {
    /**
     * sends a GET request to the database.
     * updates the setWishList with the results
     */
  }, [])

  return (
    <div>
      <h3>List Container: List of Game components should render here once user adds API selectsions to DB.</h3>
      {renderWishList(filteredWishList)}
      {showFiltersModal ? createPortal(<WishListFilterModal />, portal ) : null}
      <Button
        variant="outlined"
        onClick={() => {
          setShowFiltersModal(true);
        }}
      >
        Select Filters
      </Button>
    </div>
  );
};
export default ListContainer;
