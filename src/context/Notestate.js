import Notecontext from "./Notecontext";
import {useState} from 'react'

const Notestate=(props)=>{
    const notes=[]
    const [note,setNote]=useState(notes)
    //to get all notes form api
    const getNotes=async()=>{
      const response=await fetch("https://backend-for-inotebook.onrender.com/api/notes/fetchallnotes",{
        method:"GET",
        headers:{
          "Content-Type":"application/json",
          "auth-token":localStorage.getItem('token')
        }
      })
      const json=await response.json()
      setNote(json)
    }
    //to addnote using api
    const addNote=async(title,description,tag)=>{
      const response=await fetch("https://backend-for-inotebook.onrender.com/api/notes/addnote",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "auth-token":localStorage.getItem('token')
        },
        body:JSON.stringify({title,description,tag})
      })

    }

      //to delete using api
      const deleteNote=async(id)=>{
        const response=await fetch(`https://backend-for-inotebook.onrender.com/api/notes/deletenote/${id}`,{
          method:"DELETE",
          headers:{
            "Content-Type":"application/json",
            "auth-token":localStorage.getItem('token')
          },
        })
        window.location.reload();  
      }
      
      //to delete using api
      const updateNote=async(id,title,description,tag)=>{
        const response=await fetch(`https://backend-for-inotebook.onrender.com/api/notes/updatenote/${id}`,{
          method:"PUT",
          headers:{
            "Content-Type":"application/json",
            "auth-token":localStorage.getItem('token')
          },
          body:JSON.stringify({title,description,tag})
        })
        window.location.reload();  

  
      }
      
   
    return(
        <Notecontext.Provider value={{note,getNotes,addNote,deleteNote,updateNote}}>
                  {props.children}
        </Notecontext.Provider>
    )
}

export default Notestate