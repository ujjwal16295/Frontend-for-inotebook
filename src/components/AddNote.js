import React, { useContext, useState } from 'react'

import Notecontext from '../context/Notecontext'

export const AddNote = (props) => {
    const context=useContext(Notecontext)
    const {addNote}=context
    const [note,setNote]=useState({title:"",description:"",tag:""})
    const handleclick=()=>{
        addNote(note.title,note.description,note.tag)
        props.showAlert("added succesfully","success")
    }
    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
  return (
    <div>
        <h1>Add Note</h1>
      <form>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">title</label>
    <input type="text" className="form-control" id="title" name='title' onChange={onChange}  aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">description</label>
    <input type="text" className="form-control" id="description" onChange={onChange} name='description' />
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">tag</label>
    <input type="text" className="form-control" id="tag" name='tag' onChange={onChange} />
  </div>
  
  <button type="submit" disabled={note.title.length<=5 || note.description.length<=5 ||note.tag.length<=5 } className="btn btn-primary" onClick={handleclick}>add</button>
</form>
    </div>
  )
}
