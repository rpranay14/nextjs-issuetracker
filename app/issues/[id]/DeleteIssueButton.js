'use client'
import { AlertDialog, Button, Flex } from '@radix-ui/themes'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'


const DeleteIssueButton = ({issueId}) => {
const router=useRouter()
    const handleDelete=async()=>{
        const response=await axios.delete(`http://localhost:3001/issue/${issueId}`);
        if(response.data.success){
            router.push('/issues');
            router.refresh();
        }

    }
  return (
   <AlertDialog.Root>
    <AlertDialog.Trigger>
    <Button color='red'>Delete Issue</Button>
    </AlertDialog.Trigger>
    <AlertDialog.Content>
        <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
        <AlertDialog.Description>Are you sure you want to delete? This action cannot be undone</AlertDialog.Description>
    <Flex gap="2" className='mt-4'>
    <AlertDialog.Cancel><Button variant="soft" color='gray'>Cancel</Button></AlertDialog.Cancel>
    <AlertDialog.Cancel><Button variant="soft" color='red' onClick={()=>handleDelete()}>Delete</Button></AlertDialog.Cancel>
    </Flex>
    </AlertDialog.Content>
   </AlertDialog.Root>

   
  )
}

export default DeleteIssueButton