import React, { Component } from 'react'
import Person from './Person'
import './styles.css'

export class NameList extends Component {
  render() {
    const persons=[
        {
            name:'Bruce',
            age:30,
            skill:'React'
        },
        {
            name:'Clark',
            age:25,
            skill:'Angular'
        },
        {
            name:'Diana',
            age:28,
            skill:'Vue'
        }
    ]
    const personList = persons.map(person=> <Person person={person}/>)
    return (
      <div className='card-container'> 
            {personList}
      </div>
    )
  }
}

export default NameList