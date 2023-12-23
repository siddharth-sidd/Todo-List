'use client'
import { comma } from 'postcss/lib/list'
import React, {useState} from 'react'
 
const page = () => {
  const [title, settitle] = useState()
  const [desc, setdesc] = useState()  
  const [ MainTask, setMainTask] = useState([])
  const submitHandler = (e) =>{
    
    e.preventDefault()
    setMainTask([...MainTask, {title, desc}])
    settitle(" ")
    setdesc(" ")
    console.log(MainTask)
}
const Deletehandeler = (i) =>{
     let copytext = [...MainTask]
     copytext.splice(i, 1)
     setMainTask(copytext)
}
let  rendertask= <h1>No Task Avaiable</h1>
if(MainTask.length > 0){
rendertask =  MainTask.map((t,i)=>{
      return(
      <l1 key={i} className='flex items-center justify-between mb-5'>
         <div className=' flex justify-between mb-5 w-2/3'>
          <h5 className=' text-3xl font-semibold'> {t.title} </h5>
          <h6 className=' text-lg font-semibold'> {t.desc} </h6>
        </div>
        <button onClick={ ()=>{ Deletehandeler(i) } } 
         className=' bg-red-400  text-white rounded px-4 py-3 '>Delete</button>
      </l1>
      )
  })
}
  return (
  <>
     <h1 className=' bg-black text-white p-8 mt-10 text-5xl text-bold text-center'> siddharth todo list </h1>
  
    <form onSubmit={submitHandler}>
      <input  className='  border-zinc-800 border-2 text-2xl   m-9 p-3  rounded' type='text'
         placeholder='Entre Title Here' 


         value={title}
         onChange={ (e)=>{
            settitle(e.target.value)
         }} 
          />
      
      <input  className='  border-zinc-800 border-2 text-2xl   m-9 p-3 rounded  ' type='text'
          placeholder='Entre Description Here'


          value={desc}
          onChange={ (e) =>{
            setdesc(e.target.value)
          }}
          
          />

      <button className='bg-black text-white text=2xl px-5 py-3 rounded font-bold '>Add Task</button> 

    </form>
    <hr/>
    <div className='p-8 bg-slate-200'>
      <ul>
        {rendertask}
      </ul>    
    </div>
  </>
     
  )
}
 
 export default page