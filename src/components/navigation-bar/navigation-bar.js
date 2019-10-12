import React from 'react'

export default class NavigationBar extends React.Component{

    state = {

    }

    render() {
        return(
            <ul>
                <li><span>Календарь</span></li>
                <li><span>Музыканты</span></li>
                <li ><span>Настройки</span></li>
            </ul>
        )
    }
}