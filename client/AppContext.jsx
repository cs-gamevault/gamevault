import React, { createContext, useState } from 'react';

export const ApplicationContext = createContext(null);

const ApplicationContextProvider = props => {
  const children = props.children;

  const [userInfo, setUserInfo] = useState({});
  const [APIFetchResults, setAPIFetchResults] = useState([]);
  const [wishListFetchResults, setWishListFetchResults] = useState([]);
  const [filteredWishList, setFilteredWishList] = useState(15);

  return (
    <ApplicationContext.Provider
      value={{
        userInfo,
        setUserInfo,
        APIFetchResults,
        setAPIFetchResults,
        wishListFetchResults,
        setWishListFetchResults,
        filteredWishList,
        setFilteredWishList,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContextProvider;
