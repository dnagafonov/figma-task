import React from "react";

const Worker = ({name, image, workTime}) => {
    const currentWorker = workTime.map((el) => {
        const style = el ? " isWorkingDay" : "";
        return (
            <div key = {el.id}>
                <li>
                    <img src={image} alt={name} className = {"avatar" + style}/>
                </li>
            </div>
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