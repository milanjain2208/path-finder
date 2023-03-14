import React from 'react'
import { useState } from 'react'

export const GridItem = props => {
    const [isDead, setDead] = useState(false);
    const isStartOrEndCell = () => {
        return (props.row === 0 && props.col === 0) || (props.row === 39 && props.col === 39)
    }
    const gridItemStyle = {
        backgroundColor: isStartOrEndCell()?"green":"#f0f2f0",
        border: "1px solid black",
        opacity: 0.8
    }
    const handleMouseEnter = (event) => {
        if(event.buttons > 0) {
            !isStartOrEndCell() && setDead(!isDead);
        }
    }
    const handleMouseClick = () => {
        !isStartOrEndCell() && setDead(!isDead);
    }
    return (
        <div style={{...gridItemStyle, backgroundColor: isDead ? "black" : gridItemStyle["backgroundColor"]}} onMouseEnter={handleMouseEnter} onClick={handleMouseClick}></div>
    )
}
