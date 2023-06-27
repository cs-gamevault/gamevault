import React, { createContext, useState } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import './styles.scss';
import LoginContainer from './containers/LoginContainer';
import HomeContainer from './containers/HomeContainer';
import AccountPage from './components/AccountPage';
import APISearchContainer from './containers/APISearchContainer';
import StickyNavBar from './components/StickyNavBar';
import NoMatch from './components/NoMatch';

const AppContext = createContext(null);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<StickyNavBar />}>
      <Route path="/" element={<LoginContainer />} />
      <Route path="/home" element={<HomeContainer />} />
      <Route path="/add" element={<APISearchContainer />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
  )
);

const App = () => {
  const [userInfo, setUserInfo] = useState({});
  const [APIFetchResults, setAPIFetchResults] = useState([]);
  const [wishListFetchResults, setWishListFetchResults] = useState([]);
  const [filteredWishList, setFilteredWishList] = useState(15);

  return (
    <div>
      <h1>Hello world!</h1>
      <AppContext.Provider
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
        <RouterProvider router={router} />
      </AppContext.Provider>
    </div>
  );
};

export default App;
