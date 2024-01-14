import React, { useContext, useEffect,useRef, useState } from 'react'
import Notecontext from '../context/Notecontext'
import { NoteTile } from './NoteTile'
import { AddNote } from './AddNote'
import { useNavigate } from 'react-router-dom'

export const Note = (props) => {
    const context=useContext(Notecontext)
    const navigate=useNavigate()
    const {note,getNotes,updateNote}=context
    useEffect(()=>{
      if(localStorage.getItem('token')){
        console.log("get ran")
        getNotes()

      }else{
        console.log("login ran")
        navigate('/login')
      }
    },[])
    const ref=useRef(null)
    const closeref=useRef(null)
    const [noteformodal,setNote]=useState({_id:"",title:"",description:"",tag:""})
   
    const onChange=(e)=>{
        setNote({...noteformodal,[e.target.name]:e.target.value})
    }
   const updatenote=(currentnote)=>{
      ref.current.click()
      setNote({_id:currentnote._id,title:currentnote.title,description:currentnote.description,tag:currentnote.tag})
      
   }
   const handleclick=()=>{
    const trying={id:noteformodal._id,title:noteformodal.title,description:noteformodal.description,tag:noteformodal.tag}
      updateNote(trying.id,trying.title,trying.description,trying.tag)
      closeref.current.click()
      props.showAlert("updated  succesfully","success")

   }
  return (
    <>
    <AddNote showAlert={props.showAlert}/>
<button type="button" ref={ref} class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">title</label>
    <input type="text" className="form-control" id="title" name='title' value={noteformodal.title} onChange={onChange}  aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">description</label>
    <input type="text" className="form-control" id="description" value={noteformodal.description} onChange={onChange} name='description' />
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">tag</label>
    <input type="text" className="form-control" id="tag" name='tag' value={noteformodal.tag} onChange={onChange} />
  </div>
  
</form>
      </div>
      <div class="modal-footer">
        <button type="button" ref={closeref} class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" disabled={noteformodal.title.length<=5 || noteformodal.description.length<=5 ||noteformodal.tag.length<=5 } class="btn btn-primary" onClick={handleclick}>Save changes</button>
      </div>
    </div>
  </div>
</div>
    <h1>your notes</h1>

    <div className='row my-3'>
    <div className="container">
    {note.length===0&&"no note to show"}
    </div>
    {note.map((note)=>{
  return  <NoteTile key={note._id} updatenote={updatenote} showAlert={props.showAlert} note={note}  />
})}
    </div>
    </>
  )
}
