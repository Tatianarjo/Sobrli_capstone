import React, { useContext, useEffect, useState } from "react"
import { SupportBoardContext } from "./SupportBoardProvider"
import "./SupportBoard.css"
import { useHistory } from 'react-router-dom'

export const SupportBoardForm = () => {
    const { addSupportBoard, getSupportBoards } = useContext(SupportBoardContext)



    const [supportBoard, setSupportBoard] = useState({
        message: "",
        title: "",
        userId: 0,

    });

    const history = useHistory();

    useEffect(() => {
        getSupportBoards()
    }, [])

    const handleControlledInputChange = (event) => {
        const newSupportBoard = { ...supportBoard }

        newSupportBoard[event.target.id] = event.target.value

        setSupportBoard(newSupportBoard)
    }

    const handleClickSaveSupportBoard = (event) => {
        event.preventDefault()

        const userId = parseInt(localStorage.getItem("sobrli_user"))

        if (supportBoard.message === "" || supportBoard.title ==="") {
            window.alert("Please enter information")
        } else {

            const newSupportBoard = {
                message: supportBoard.message,
                title: supportBoard.title,
                userId: userId,
            }
            addSupportBoard(newSupportBoard)
                .then(() => history.push("/supports"))
        }
    }

    return (
        <form className="supportBoardForm">
            <h2 className="supportBoardForm_title">Leave Some Encouraging Words Here</h2>
            <fieldset>
                <div className="form-group">
                <label htmlFor="name">Title</label>
                <input type="text" id="title" required autoFocus className="form-control" placeholder="Title Here" value={supportBoard.title} onChange={handleControlledInputChange} />
            </div>
            </fieldset>        
                  
                  <fieldset>
                      <div className="form-group">
                        <label htmlFor="name">Message</label>
                        <input type="text" id="message" required autoFocus className="form-control" placeholder="Leave some encouragement" value={supportBoard.message} onChange={handleControlledInputChange} />
                      </div>
                  </fieldset>

                  <button className="btn btn-primary" onClick={handleClickSaveSupportBoard}>
                      Add Your Support
                  </button>
        </form>
    )
}