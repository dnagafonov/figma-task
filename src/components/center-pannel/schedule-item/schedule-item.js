import React from "react";
import "./schedule-item.css"

const Worker = ({name, image, workTime}) => {
    const currentWorker = workTime.map((el, index) => {
        const style = el ? " isWorkingDay" : "";
        return (
            <li key = {index}>
                <img src={image} alt={name} className = {"avatar" + style}/>
            </li>
        )
    });
    return(
        <div className="display-block">
            <div className="text">{name}</div>
            <ul>{currentWorker}</ul>
        </div>
    )
};

export default Worker;