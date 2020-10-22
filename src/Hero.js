import React from 'react'

export default function Hero(image, overlay) {
    const heroStyle={
        backgroundImage:`url("${image}")`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        height:'75vh'
    }
    return (
        <div style={heroStyle}>
            {overlay}
        </div>
    )
}
