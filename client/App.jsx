import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import './styles.scss';

import AppContextProvider from './AppContext';
import Login from './components/Login';
import Register from './components/Register';
import WishListContainer from './containers/WishListContainer';
import AccountPage from './components/AccountPage';
import APIContainer from './containers/APIContainer';
import StickyNavBar from './components/StickyNavBar';
import NoMatch from './components/Register';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<StickyNavBar />}>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/wishlist" element={<WishListContainer />} />
      <Route path="/explore" element={<APIContainer />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
  )
);

const App = () => {
  return (
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  );
};

export default App;
