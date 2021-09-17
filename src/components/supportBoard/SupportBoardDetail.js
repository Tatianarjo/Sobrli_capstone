import React, { useContext, useEffect, useState } from "react"
import { SupportBoardContext } from "./SupportBoardProvider"
import "./SupportBoard.css"
import { useParams } from "react-router-dom"

export const SupportBoardDetail = () => {
    const { supportBoards } = useContext(SupportBoardContext)
    const [ supportBoard, setSupportBoard ] = useState({ message: {}, title: {} })

    /*
      
    */
    const { supportBoardId } = useParams();

    
    useEffect(() => {
        const thisSupportBoard = supportBoards.find(a => a.id === supportBoardId) || { message: {}, title: {} }

        setSupportBoard(thisSupportBoard)
    }, [supportBoardId])

    return (
    <section className="supportBoard">
        <h3 className="supportBoard__title">{ supportBoard.title }</h3>
        <div className="supportBoard__message">{ supportBoard.message }</div>
    </section>
    )
}
