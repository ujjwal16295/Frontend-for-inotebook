import React, { useContext, useEffect, useState } from 'react'
import Notecontext from '../context/Notecontext'

export const NoteTile = (props) => {
    const {title,description,tag,date}=props.note
    const context=useContext(Notecontext)
    const {deleteNote}=context
  
    
  return (
    <>
    <div className='col-md-3 my-3 mx-3'>
        <div className="card" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{date}</h6>
    <p className="card-text">{description}</p>
    <i className=" fa-sharp fa-solid fa-trash mx-2" onClick={()=>{deleteNote(props.note._id);props.showAlert("deleted succesfully","success")
}}></i>
    <i className="fa-regular fa-pen-to-square mx-2" onClick={()=>{props.updatenote(props.note)}} ></i>
  </div>
</div>
    </div>
    

    </>
  )
}
