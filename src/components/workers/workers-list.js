import React from 'react'
import refactorWorker from './worker'
import worker from "./worker-list"

export default class WorkerList extends React.Component{
    state = {
        workers: worker
    }

    generateList = () => {
        const res = this.state.workers.map((el, index) => {
            return (
                <div className="" key = {index}>
                    {refactorWorker(el)}
                </div>)
        });
        return (
            <div>
                {res}
            </div>
        );
    }
    render() {
        return(
            this.generateList()
        )
    }
}