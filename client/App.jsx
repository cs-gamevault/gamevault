import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import './styles.scss';

import AppContextProvider from './AppContext';
import LoginContainer from './containers/LoginContainer';
import HomeContainer from './containers/HomeContainer';
import AccountPage from './components/AccountPage';
import ExploreContainer from './containers/ExploreContainer';
import StickyNavBar from './components/StickyNavBar';
import NoMatch from './components/NoMatch';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<StickyNavBar />}>
      <Route path="/" element={<LoginContainer />} />
      <Route path="/home" element={<HomeContainer />} />
      <Route path="/explore" element={<ExploreContainer />} />
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
