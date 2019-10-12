import React from 'react'
import "./worker.css"

const refactorWorker = ({name, workTime}) => {
    const week = workTime.map((el ,index) => {
        const style = el ? "work":"chill"
        return <li className={style} key = {index}>{name}</li>
    })
    return{week}
}

export default refactorWorker;