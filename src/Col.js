import React from 'react'

export default function Col(items, height) {
    const colStyle={
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center', 
        height:`${height}%`,
        border:'2px solid black',
        margin:'1em auto'
    }
    return (
        <div style={colStyle}>
            {items}
        </div>
    )
}
