import React from 'react'

const Mixed = ( props ) => {
    return (
        <h1 
            className="mixed"
            style={{backgroundColor: props.bgColor, color: props.txtColor }}
            >The word is: Hello
        </h1>
    )
}

export default Mixed
