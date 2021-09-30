import React, { useState, createContext } from "react"

export const CalendarContext = createContext()

export const CalendarProvider = (props) => {
    const [calendars, setCalendars] = useState([])
    
    
    const getCalendars = () => {  
       const userId = parseInt(localStorage.getItem("sobrli_user"))
        return fetch(`http://localhost:8088/calendars?userId=${userId}`)
        .then(res => res.json())
        .then(setCalendars)
    }

    const addCalendar = calendarObj => {
        
        return fetch("http://localhost:8088/calendars", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify(calendarObj)
        })
        .then(getCalendars)
    }

    return (
        <CalendarContext.Provider value={{
            calendars, getCalendars, addCalendar
        }}>
            {props.children}
        </CalendarContext.Provider>
    )
}

