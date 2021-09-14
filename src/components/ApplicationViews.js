import React from "react"
import { Route } from "react-router-dom"
import { MoodTracker } from "./moodTracker/MoodTracker"
import { MoodTrackerList } from "./moodTracker/MoodTrackerList"
import { MoodTrackerForm } from "./moodTracker/MoodTrackerForm"
import { MoodTrackerProvider } from "./moodTracker/MoodTrackerProvider"
import { SupportBoard } from "./supportBoard/SupportBoard"
import { SupportBoardList } from "./supportBoard/SupportBoardList"
import { SupportBoardProvider } from "./supportBoard/SupportBoardProvider"


export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            {/* // <moodTrackerProvider> */}
                <Route exact path="/">
                    <MoodTracker />
                    <SupportBoard />
                </Route>

                <MoodTrackerProvider>
                    <Route exact path="/moodTrackers">
                        <MoodTrackerList />
                    </Route>
                    <Route exact path="/moodTrackers/create">
                        <MoodTrackerForm />
                    </Route>
                </MoodTrackerProvider>

                <SupportBoardProvider>
                    <Route exact path="/supports">
                        <SupportBoardList />
                    </Route>
                </SupportBoardProvider>

                
           

            {/* Render the animal list when http://localhost:3000/animals */}
            
        </>
    )
}


//add route work from application views.