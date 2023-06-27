import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import LoginContainer from  './containers/LoginContainer';
import HomeContainer from './containers/HomeContainer';
import AccountPage from './components/AccountPage';
import APISearchContainer from './containers/APISearchContainer';
import StickyNavBar from './components/StickyNavBar';
import NoMatch from './components/NoMatch';



const App = () => {

  return (
    <div>
      <h1>Hello world!</h1>
      <Router>
        <Routes>
          <Route path="/" element={<LoginContainer />} />
          <Route path="/home" element={<HomeContainer />} />
          <Route path="/add" element={<APISearchContainer />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <StickyNavBar />
      </Router>
    </div>
  );
};

export default App;