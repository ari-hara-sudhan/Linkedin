import React from 'react'
import "./InputOptions.css"
function InputOptions({title,Icon,color}) {
    return (
        <div className="inputoptions">
            <Icon style={{color:color}}
             />
             <div>
             <h4>{title}</h4>
             </div>
        
        </div>
    )
}

export default InputOptions
