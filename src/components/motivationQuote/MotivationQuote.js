import React, { useState, useEffect } from "react"
import "./MotivationQuote.css"

export const MotivationQuote = () => {
    const [quote, setQuote] = useState("")

  const config=  {mode:"no-cors", method: "GET"}
    useEffect(() => {
        return fetch("http://localhost:8010/proxy/stoic-quote")
        .then(res => res.json())
        .then(response => {
            setQuote (response.data.quote)})
    }, [])
    
    
    return (<p className="quotes">{quote} </p>)

    
    

    
}


   
