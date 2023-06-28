import React, { createContext, useState } from 'react';

export const ApplicationContext = createContext(null);

const ApplicationContextProvider = props => {
  const children = props.children;

  const [userInfo, setUserInfo] = useState({});
  const [APIResult, setAPIResult] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [filteredWishList, setFilteredWishList] = useState(wishList);
  const [showFiltersModal, setShowFiltersModal] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({});

  return (
    <ApplicationContext.Provider
      value={{
        userInfo,
        setUserInfo,
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
