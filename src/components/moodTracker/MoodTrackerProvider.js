import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const MoodTrackerContext = createContext()

// This component establishes what data can be used.
export const MoodTrackerProvider = (props) => {
    const [moodTrackers, setMoodTrackers] = useState([])

    const getMoodTrackers = () => {
        return fetch("http://localhost:8088/moodTrackers?_expand=user")
        .then(res => res.json())
        .then(setMoodTrackers)
    }

    const addMoodTracker = moodTrackerObj => {
        return fetch("http://localhost:8088/moodTrackers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(moodTrackerObj)
        })
        .then(getMoodTrackers)
    }

    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        <MoodTrackerContext.Provider value={{
            moodTrackers, getMoodTrackers, addMoodTracker
        }}>
            {props.children}
        </MoodTrackerContext.Provider>
    )
}
