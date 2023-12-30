'use client'
import { Button, Callout, TextArea, TextField } from '@radix-ui/themes'
import React, { useState } from 'react';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Spinner from '@/app/Components/Spinner';

const NewIssue = () => {
    const [title, setTitle] = useState("");
    const [description,setDescription]=useState('');
    const [error,setError]=useState(null)
    const router=useRouter()
    const [isSubmitting,setIsSubmitting]=useState(false)

    const handleSubmit=async()=>{
        console.log(title,description);
        const issue={title,description};
        try {
          setIsSubmitting(true)
          const response=await axios.post('http://localhost:3001/issue',issue)
          if(response.data.success){
            console.log("newws")
            router.push('/issues')
          }
        } catch (error) {
          setError("Something went wrong")
        }   
        finally{
          setIsSubmitting(false)
        } 
    }
    const onChange = (value) => {
       setDescription(value)
      }
  return (
    <div className='p-8 w-[30rem] space-y-2'>
     {error ? <Callout.Root color='red'>
        <Callout.Text>{error}</Callout.Text>
      </Callout.Root> :null}
        <TextField.Root>
            <TextField.Input placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}></TextField.Input>
        </TextField.Root>
       <SimpleMDE  value={description} onChange={onChange}/>
        <Button disabled={isSubmitting} onClick={()=>handleSubmit()}>Submit New Issue {isSubmitting ?<Spinner/> :null}</Button>
    </div>
  )
}

export default NewIssue