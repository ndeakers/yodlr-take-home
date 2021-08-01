import React from "react";
import SignUpForm from "./SignUpForm";
import { Switch, Route, Redirect } from "react-router";
import AdminPage from "./AdminPage";
import Homepage from "./Homepage";

function Routes({ handleSignUp, handleActivate }) {
  return (
    <Switch>
      <Route exact path="/admin">
        <AdminPage handleActivate={handleActivate} />
      </Route>
      <Route exact path="/signup">
        <SignUpForm handleSignUp={handleSignUp} />
      </Route>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Redirect to="/" />
    </Switch>
  )

}

export default Routes;
