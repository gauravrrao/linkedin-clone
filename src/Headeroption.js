import React from 'react'
import './headeroption.css'

const Headeroption = ({Icon,title}) => {
  return (
    <div className='option-container'>
        <Icon className="icon"></Icon>
        <span className='title-name'>{title}</span>

    </div>
  )
}

export default Headeroption