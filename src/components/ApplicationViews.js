import React from "react"
import { Route } from "react-router-dom"
import { MoodTracker } from "./moodTracker/MoodTracker"
import { MoodTrackerList } from "./moodTracker/MoodTrackerList"
import { MoodTrackerForm } from "./moodTracker/MoodTrackerForm"
import { MoodTrackerProvider } from "./moodTracker/MoodTrackerProvider"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            {/* // <moodTrackerProvider> */}
                <Route exact path="/">
                    <MoodTracker />
                </Route>

                <MoodTrackerProvider>
                    <Route exact path="/moodTrackers">
                        <MoodTrackerList />
                    </Route>
                    <Route exact path="/moodTrackers/create">
                        <MoodTrackerForm />
                    </Route>
                </MoodTrackerProvider>
            {/* // </moodTrackerProvider> */}

            {/* Render the animal list when http://localhost:3000/animals */}
            
        </>
    )
}


//add route work from application views.