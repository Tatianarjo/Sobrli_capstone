import React, { useContext, useEffect } from "react"
import { SupportBoardContext } from "./SupportBoardProvider"
import "./SupportBoard.css"
import { useHistory, Link } from 'react-router-dom'

export const SupportBoardList = () => {

  const { supportBoards, getSupportBoards } = useContext(SupportBoardContext)

  const history = useHistory()

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("SupportBoardList: useEffect - getSupportBoards")
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
    <section className="supportBoards">
      {
        supportBoards.map(supportBoard => {
          return (
            <div className="supportBoard">
                 <Link to={`/supports/detail/${supportBoard.id}`} key={supportBoard.id}>{supportBoard.title}</Link>
                </div>
          )
        })
      }
    </section>
    </>
  )
    }

