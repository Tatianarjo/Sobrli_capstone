import React, { useContext, useEffect } from "react"
import { MoodTrackerContext } from "./MoodTrackerProvider"
import "./MoodTracker.css"
import { useHistory } from 'react-router-dom'

export const MoodTrackerList = () => {

  const { moodTrackers, getMoodTrackers } = useContext(MoodTrackerContext)

  const history = useHistory()

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("MoodTrackerList: useEffect - getMoodTrackers")
    getMoodTrackers()
  }, [])


  return (
      <>
      <h2>Mood Tracker</h2>
      <button onClick={
          () => history.push("/moodTrackers/create")
      }>
          Add Your Mood
      </button>
    <div className="moodTrackers">
      {
        moodTrackers.map(moodTracker => {
          return (
            <div className="moodTracker" id={`moodTracker--${moodTracker.id}`}>
              <div className="moodTracker__feeling">
                Feeling: { moodTracker.feeling }
              </div>
              <div className="moodTracker__yourWhy">
                Your Why: { moodTracker.yourWhy }
              </div>
              <div className="moodTracker__date">
                Date: { moodTracker.date }
              </div>
            </div>
          )
        })
      }
    </div>
    </>
  )
    }
