import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink, Outlet } from 'react-router-dom';


// uses icons to navigate between home page, API search page, Account info Page
const StickyNavBar = () => {


  return (
    <div>
      <Outlet />
      <div id="sticky-nav-bar">
        <NavLink to="/wishlist">
          <HomeIcon />
        </NavLink>
        <NavLink to="/explore">
          <AddIcon />
        </NavLink>
        <NavLink to="/account">
          <AccountCircleIcon />
        </NavLink>
      </div>
    </div>
  )

};

export default StickyNavBar;