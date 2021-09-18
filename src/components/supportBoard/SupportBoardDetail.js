import React, { useContext, useEffect, useState } from "react"
import { SupportBoardContext } from "./SupportBoardProvider"
import "./SupportBoard.css"
import { useParams } from "react-router-dom"

export const SupportBoardDetail = () => {
    const { supportBoards, getSupportBoards } = useContext(SupportBoardContext)
    const [ supportBoard, setSupportBoard ] = useState({ message: "", title: "" })

    useEffect(() => {
        getSupportBoards()
    }, [])
    const { supportBoardId } = useParams();

    const supportBoardIdInt = parseInt(supportBoardId)
    useEffect(() => {
        const thisSupportBoard = supportBoards.find(a => a.id === supportBoardIdInt) || supportBoard

        setSupportBoard(thisSupportBoard)
    }, [supportBoardId])

    return (
    <section className="supportBoard">
        <h3 className="supportBoard__title">{ supportBoard.title }</h3>
        <div className="supportBoard__message">{ supportBoard.message }</div>
        <div className="supportBoard__date">{ supportBoard.date }</div>

    </section>
    )
}
