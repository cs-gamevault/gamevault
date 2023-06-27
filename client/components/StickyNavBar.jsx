import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

// uses icons to navigate between home page, API search page, Account info Page
const StickyNavBar = () => {


  return (
    <div id="stick-nav-bar">
      <Link to="../home">
        <HomeIcon />
      </Link>
      <Link to="../add">
        <AddIcon />
      </Link>
      <Link to="../account">
        <AccountCircleIcon />
      </Link>
    </div>
  )

};

export default StickyNavBar;