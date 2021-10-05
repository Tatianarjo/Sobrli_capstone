import React, { useState, useContext, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { CalendarContext } from "./CalendarProvider"
import "./Calendar.css"




export const Calendar = () => {
    const { addCalendar, getCalendars, calendars } = useContext(CalendarContext)
    const userId = parseInt(localStorage.getItem("sobrli_user"))

const userCalendars = calendars?.filter(c=> c.userId == userId)

    const [calendar, setCalendar] = useState({

        "userId": 0,
        "soberDate": ""
    })


    const history = useHistory();

    useEffect(() => {
        getCalendars()
    },[])


    const handleControlledInputChange = (event) => {
        const newDate = { ...calendar.soberDate }

        newDate[event.target.id] = event.target.value
        setCalendar(newDate)
    }

    const handleClickSaveDate = (event) => {
        event.preventDefault()




        if (calendar.soberDate === "") {
            window.alert("Please enter sober date")
        } else {

            const newSoberDate = {
                userId: parseInt(localStorage.getItem('sobrli_user')),
                soberDate: calendar.soberDate

            }
            addCalendar(newSoberDate).then(() => history.push("/calendars"))
          
        }
    }


    

    return (
        <>
        <h1 className="title"> Sobriety!
            {calendars.map(c => {
             
             return  <p> {c.soberDate}</p>
            })}
           </h1>
                {  
                    userCalendars.length == 0 ? 
                    
                    <form className="saveForm">
                    <h2>Enter Sober Date:</h2>
                    <input type="date" id="soberDate" name="soberDate" value={calendar.soberDate} onChange={handleControlledInputChange}></input>
                    <button className="saveDate" type="submit" onClick={handleClickSaveDate}>Post Sober Date</button>
                </form>
                
                :<> </>
                  

                } 
                 
               
                
        </>
    )
}





