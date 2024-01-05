'use client'
import { AlertDialog, Button, Flex } from '@radix-ui/themes'
import React from 'react'

const DeleteIssueButton = () => {
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
    <AlertDialog.Cancel><Button variant="soft" color='red'>Delete</Button></AlertDialog.Cancel>
    </Flex>
    </AlertDialog.Content>
   </AlertDialog.Root>

   
  )
}

export default DeleteIssueButton