import './App.css';
import { useState } from 'react';
import YodlrApi from './Api';
import Homepage from './Homepage';
import Navigation from './Navigation';
import { BrowserRouter } from "react-router-dom";
import Routes from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  console.log("App", isLoading, currentUser);

  async function handleSignUp(formData) {
    // form data to be email, firstName, lastName
    console.log("App, handleSignUp");
    try {
      const signUpRes = await YodlrApi.createUser(formData);
      setCurrentUser(signUpRes.id);
      return { success: true, errors: null };
    } catch (err) {
      return { success: false, errors: err }
    }
  }

  async function handleLogout() {
    setCurrentUser(null);
  }


  return (
    <BrowserRouter>
      <Navigation logout={handleLogout} />
      <Routes handleSignUp={handleSignUp} />
    </BrowserRouter>
  )


}



export default App;
