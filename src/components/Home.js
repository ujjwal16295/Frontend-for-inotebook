import React, { useState } from 'react'
import { Note } from './Note'
import { AddNote } from './AddNote'

export const Home = (props) => {
 

  return (
    <div className='container my-3'>
 <Note showAlert={props.showAlert}/>
    </div>
  )
}
