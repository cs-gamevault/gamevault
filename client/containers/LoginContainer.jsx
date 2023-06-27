import React, {useContext} from "react";
import { ApplicationContext } from '../AppContext';
import SignIn from "../components/SignInPage";
import SignUp from "../components/SignUpPage";

const LoginContainer = () => {
  const { filteredWishList } = useContext(ApplicationContext)

  return (
    <div>
      <h3>Login Container</h3>  
    </div>
  )
  
}

export default LoginContainer;