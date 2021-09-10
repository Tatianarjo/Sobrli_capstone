import React from "react"
import "./Sobrli.css"
import Button from '@material-ui/core/Button';
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "./ApplicationViews";


export const Sobrli = () => (
    <>
        <NavBar />
      

        <Button variant="contained" color="primary">
      Hello World
    </Button>

    <ApplicationViews />

   
    
    </>
)