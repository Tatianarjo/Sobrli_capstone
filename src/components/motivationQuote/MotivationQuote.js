import React, { useState, useEffect } from "react"
import "./MotivationQuote.css"

export const MotivationQuote = () => {
    const [quote, setQuote] = useState("")
//useEffect is what makes it show on the initial loading of the page
//config is the function that's going to make the API show(quote)
    useEffect(()=>{
      config()
    },[])
  const config = () => {

        return fetch("http://localhost:8010/proxy/stoic-quote", {
          method: "GET"
        })
        .then(res => res.json())
        .then(response => {
            setQuote(response.data.quote)})
    }
    

    
    return(
      <>
    <p className="quotes">{quote} </p>
      <div style={{display: "flex", justifyContent: "center"}}>
    <button className="newButton" onClick={config} >New Quote</button>
      </div>
    </>
    )

 
    

    
}


   
