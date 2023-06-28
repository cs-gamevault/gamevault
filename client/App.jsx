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
import AccountPage from './components/AccountPage';
import GameContainer from './containers/GameContainer';
import StickyNavBar from './components/StickyNavBar';
import NoMatch from './components/Register';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<StickyNavBar />}>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/wishlist" element={<GameContainer mode="wish" />} />
      <Route path="/explore" element={<GameContainer mode="explore" />} />
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
