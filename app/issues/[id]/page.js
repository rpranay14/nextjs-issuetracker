import IssueStatusBadge from '@/app/Components/IssueStatusBadge';
import { Card, Flex, Heading } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import React from 'react'

const IssueDetailComponent = async({params}) => {
    const fetchIssue=async()=>{
        const issue=await fetch(`http://localhost:3001/issue/${params.id}`);
        const data=await issue.json()
        if(!data.success){
            return notFound()
        }
        else{
            return data
        }
       
    }
    const issue=await fetchIssue();
  return (
    
    <div className='px-4 max-w-3xl'>
        <Heading >{issue.data.title}</Heading>
        <Flex className='space-x-3 mb-3 mt-3'>
        <IssueStatusBadge status={issue.data.status} className="mb-3"/>
        <p>{new Date(issue.data.createdAt).toDateString()}</p>
        </Flex>
        <Card> <p>{issue.data.description}</p></Card>
       
        </div>
  )
}

export default IssueDetailComponent