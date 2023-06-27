import { Button } from "@mui/material";
import React from "react";

// render a modal with 2 button: confirm, cancel
// confirm deletes the game from the database and rerenders the list
// cancel closes the modal by changing setshowdeletemodal to false

const deleteFromDatabase = () => {
  /**
   * sends delete request to database
   */
}

const ConfirmDeleteModal = (props) => {
  const { setShowDeleteModal } = props;

  return (
    <div>
      <h3>Are you sure you want to delete this game from your list?</h3>
      <Button variant="contained" onClick={() => deleteFromDatabase()}>Delete Game</Button>
      <Button variant="outlined" onClick={setShowDeleteModal(false)}>x</Button>
    </div>
  )
  
}

export default ConfirmDeleteModal;