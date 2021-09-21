import React from "react"
import "./Calendar.css"

export const Calendar = () => (
    
    <section className="calendar">
        <label for="start">Enter Your 1st Day Sober Here:</label>

<input type="date" id="start" name="trip-start"></input>
<button>Save Date</button>
        
    </section>
)

// const counterClock = (pass, xxx ) => {
//     return <div> INSIDE <div/>
// }

// return ( 

// <button onClick={

// { dateStamp.length ? <div>sekonsekdlm</div> : <></> }
// { dateStamp.length ? counterClock(passIn, pass) : <></> }

//         >SUBMIT<button/>)
// }

  