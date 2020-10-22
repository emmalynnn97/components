import React from 'react'

export default function Row(items, width) {
    const rowStyle={
        display:'flex',
        justifyContent:'space-evenly',
        alignItems:'flex-start', 
        width:`${width}%`, 
        margin:'0 auto',
        flexWrap:'wrap',
        flexFlow:'wrap',
        height:'inherit'
    }
    return (
        <div style={rowStyle}>
            {items}
        </div>
    )
}
