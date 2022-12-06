import React from 'react'
import { useDrag } from 'react-dnd'

export default function SpriteDrag({ id, sprite }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'sprite',
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))
    // add style to the sprite when it is dragging
    return <img src={sprite} alt='pokemon'
        ref={drag}
        width="50px"
        style={{ border: isDragging ? "5px solid red" : "10px" }} />


}
