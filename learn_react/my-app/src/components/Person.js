import React from 'react'
import './styles.css'

function Person({person}) {
  return (
    <div className='card'>
        <p >Name: {person.name}</p>
        <p>Age: {person.age}</p>
        <p>Skill: {person.skill}</p>
    </div>
  )
}

export default Person

