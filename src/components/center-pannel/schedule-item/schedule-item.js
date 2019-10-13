import React from "react";
import "./schedule-item.css"

const Worker = ({name, image, workTime}) => {
    const currentWorker = workTime.map((el) => {
        const style = el ? " isWorkingDay" : "";
        return (
            <li key = {el.id}>
                <img src={image} alt={name} className = {"avatar" + style}/>
            </li>
        )
    });
    return(
        <div className="display-block">
            <div>{name}</div>
            <ui>{currentWorker}</ui>
        </div>
    )
};

export default Worker;