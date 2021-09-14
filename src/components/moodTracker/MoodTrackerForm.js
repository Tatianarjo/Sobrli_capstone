import React, { useContext, useEffect, useState } from "react"
import { MoodTrackerContext } from "./MoodTrackerProvider"
import "./MoodTracker.css"
import { useHistory } from 'react-router-dom'

export const MoodTrackerForm = () => {
    const { addMoodTracker, getMoodTrackers } = useContext(MoodTrackerContext)



    const [moodTracker, setMoodTracker] = useState({
        feeling: "",
        yourWhy: "",
        userId: 0
    });

    const history = useHistory();

    useEffect(() => {
        getMoodTrackers()
    }, [])

    const handleControlledInputChange = (event) => {
        const newMoodTracker = { ...moodTracker }

        newMoodTracker[event.target.id] = event.target.value

        setMoodTracker(newMoodTracker)
    }

    const handleClickSaveMoodTracker = (event) => {
        event.preventDefault()

        const userId = parseInt(localStorage.getItem("sobrli_user"))

        if (moodTracker.feeling === "" || moodTracker.yourWhy ==="") {
            window.alert("Please enter information")
        } else {

            const newMoodTracker = {
                feeling: moodTracker.feeling,
                yourWhy: moodTracker.yourWhy,
                userId: userId
            }
            addMoodTracker(newMoodTracker)
                .then(() => history.push("/moodTrackers"))
        }
    }

    return (
        <form className="moodTrackerForm">
            <h2 className="moodTrackerForm_title">How Are You Today?</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">What's Your Mood?</label>
                    <select name="mood" id="mood" className="form-group" onChange={handleControlledInputChange}>
                        <option value="happy">Happy</option>
                        <option value="sad">Sad</option>
                        <option value="angry">Angry</option>
                        <option value="all over the place">All Over The Place</option>
                    </select>
                    </div>
            </fieldset>

            <fieldset>
            <div className="form-group">
                <label htmlFor="name">How do I feel today?</label>
                <input type="text" id="feeling" required autoFocus className="form-control" placeholder="How do I feel today?" value={moodTracker.feeling} onChange={handleControlledInputChange} />
            </div>
            </fieldset>        
                  
                  <fieldset>
                      <div className="form-group">
                        <label htmlFor="name">What's My Why?</label>
                        <input type="text" id="yourWhy" required autoFocus className="form-control" placeholder="What's My Why?" value={moodTracker.yourWhy} onChange={handleControlledInputChange} />
                      </div>
                  </fieldset>

                  <button className="btn btn-primary" onClick={handleClickSaveMoodTracker}>
                      Save Mood
                  </button>

                
        </form>
    )
}