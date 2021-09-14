import React, { useContext, useEffect } from "react"
import { SupportBoardContext } from "./SupportBoardProvider"
import "./SupportBoard.css"
import { useHistory } from 'react-router-dom'

export const SupportBoardList = () => {

  const { supportBoards, getSupportBoards } = useContext(SupportBoardContext)

  const history = useHistory()

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("SupportBoardList: useEffect - getMoodTrackers")
    getSupportBoards()
  }, [])


  return (
      <>
      <h2>SupportBoard</h2>
      <button onClick={
          () => history.push("/supports/create")
      }>
          Show Your Support
      </button>
    <div className="supportBoards">
      {
        supportBoards.map(supportBoard => {
          return (
            <div className="supportBoard" id={`supportBoard--${supportBoard.id}`}>
              <div className="supportBoard__message">
                Enter Message Here: { supportBoard.message }
              </div>
            </div>
          )
        })
      }
    </div>
    </>
  )
    }