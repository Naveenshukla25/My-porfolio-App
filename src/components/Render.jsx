import React, { useState } from 'react'

const data = [
    {title:"javascript basics",content:"Learn variable function and loop in js"},
    {title:"React overview ",content:"Learn variable function and prop in react"},
    {title:"Node js",content:"Learn server side development"},
    {title:"full stack",content:"Learn both frontent and backend in full stack"},
]

const Render = () => {
  const [content,setContent]= useState(null);
  const handle= (idx)=>{
    setContent(data.find((index) => index === idx))
  }
  return (
    <div>
        <h2>Accordion </h2>
        {
          data.map((item,index)=>(
            <div key={index}>
              <button onClick={() => handle(index)}>
                {item.title}
              </button>
              {content && <div>
                {content}
              </div>}
            </div>
          ))
        }
    </div>
  )
}

export default Render

/*
const [data,setData] = useState([]);
    const [input,setInput] = useState('');

    const handledata = (e)=>{
        e.preventDefault();
        if(!input.trim()) return ;
        setData( [...data, {task:input} ]);
        console.log(data);
        setInput('');
    }
    const handledelete = (deleteIndex)=>{
        setData(data.filter((_, index) => index !== deleteIndex));
    }
  return (
    <div>
      <h2>TODO-APP</h2>
      <input 
        placeholder='add name' 
        value={input}
        onChange={(e)=>  setInput(e.target.value) }
        className='bg-gray-200' />
      <button onClick={handledata} className='bg-slate-500' >add </button>
      <ul>
        {
            data.map((item,index)=>(
            <li key={index} className='bg-gray-200 flex justify-between w-96 rounded-md p-2 mt-2'>            
            Task:{item.task}
            <button onClick={() => handledelete(index)} >
                Delete
            </button>
            </li>
        ))}
      </ul>
    </div> */