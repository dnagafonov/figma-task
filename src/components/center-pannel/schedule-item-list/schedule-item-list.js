import React from "react";
import workersList from './workers';
import Worker from "../schedule-item/schedule-item"
import "./schedule-item-list.css"

export default class WorkersList extends React.Component{
    state = {
        workersLis: {workersList}
    };

    createList = () => {
        const list = this.state.workersLis.map(el => {
            return(
                <span className={"display-block"} key={el.id}>{Worker(el)}</span>
            )
        });
        return <div> {list} </div>
    };
    render() {
        return(
            <>
                {this.createList}
            </>
        );
    }
}