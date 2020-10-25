import React from 'react'

export default function Col(items, height, fontColor) {
    const colStyle={
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center', 
        height:`${height}%`,
        border:`2px solid ${fontColor}`,
        margin:'1em auto',
        color:fontColor
    }
    return (
        <div style={colStyle}>
            {items}
        </div>
    )
}
