import React from 'react'

export default function Item(title, price, image) {
    const itemStyle={
        width:'200px',
        padding:'1em',
    }
    return (
        <div style={itemStyle}>
            <img style={{width:'100%'}} src={image} alt="item"/>
            <h2>{title}</h2>
            <p>${price}</p>
        </div>
    )
}
