'use client'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import React, { useState } from 'react';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from 'axios';
import { useRouter } from 'next/navigation';

const NewIssue = () => {
    const [title, setTitle] = useState("");
    const [description,setDescription]=useState('');
    const router=useRouter()
    const handleSubmit=async()=>{
        console.log(title,description);
        const issue={title,description};
        const response=await axios.post('http://localhost:3001/issue',issue)
        if(response.data.success){
          console.log("newws")
          router.push('/issues')
        }
        console.log(response.data)
    }
    const onChange = (value) => {
       setDescription(value)
      }
  return (
    <div className='p-8 w-[30rem] space-y-2'>
        <TextField.Root>
            <TextField.Input placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}></TextField.Input>
        </TextField.Root>
       <SimpleMDE  value={description} onChange={onChange}/>
        <Button onClick={()=>handleSubmit()}>Submit New Issue</Button>
    </div>
  )
}

export default NewIssue