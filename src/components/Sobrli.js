import React from "react"
import { Route, Redirect } from "react-router-dom"
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./Sobrli.css"
// import Button from '@material-ui/core/Button';
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "./ApplicationViews";


export const Sobrli = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("sobrli_user")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);
        
      

     

    

    
    

