import React from 'react'

const DayOrganizer = (props) =>{
    return (
        <div>
            <p>
                {props.description}
            </p>
            <p>
                {props.day}
            </p>
        </div>
    )
}

export default DayOrganizer