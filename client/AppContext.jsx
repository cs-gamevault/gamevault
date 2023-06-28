import React, { createContext, useState } from 'react';

export const ApplicationContext = createContext(null);

const ApplicationContextProvider = props => {
  const children = props.children;

  const [user_id, setUser_id] = useState(null);
  const [APIResult, setAPIResult] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [filteredWishList, setFilteredWishList] = useState(wishList);
  const [showFiltersModal, setShowFiltersModal] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({});

  return (
    <ApplicationContext.Provider
      value={{
        user_id,
        setUser_id,
        APIResult,
        setAPIResult,
        wishList,
        setWishList,
        filteredWishList,
        setFilteredWishList,
        showFiltersModal,
        setShowFiltersModal,
        selectedFilters,
        setSelectedFilters,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContextProvider;
