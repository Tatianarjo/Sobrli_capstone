// Add this import at the top
import { useHistory } from 'react-router-dom'

// Invoke the useHistory() hook function
const history = useHistory()

return (
    <>
      <h2>Your Sober Date</h2>
      <button onClick={
        () => history.push("/calendars/create")
      }>
            Add Your Sober Date
      </button>
      <div className="calendars">
      {
        calendars.map(calendar => {
          return (
            <div className="calendar" id={`calendar--${calendar.id}`}>
              <div className="calendar__soberDate">
                Sober Date: { calendar.soberDate }
              </div>
             
            </div>
          )
        })
      }
      </div>
    </>
)
