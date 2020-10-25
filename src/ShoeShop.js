import React from 'react'
import Col from './Col';
import Row from './Row';
import Item from './Item';
export default function ShoeShop() {
    const items=[
        Item('Item 1', 10.99, ''),
        Item(),
        Item()
    ]
    const cols = [
        Col(items, 50, 'white'),
        Col(items),
        Col(items)
    ]
    return (
        <div style={{
            height:'100%',
            width:'100%',
            background:'rgb(150,0,0)'
        }}>
            {Row(cols)}
        </div>
    )
}
