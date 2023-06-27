import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const AccountPage = () => {

  return (
    <div>
      username here
      registered email
      edit password?
      <Link to="../">
        <Button variant="outlined">Log Out</Button>
      </Link>
    </div>
  )

}
export default AccountPage;