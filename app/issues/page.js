import { Button, Table, TableColumnHeaderCell } from '@radix-ui/themes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import IssueStatusBadge from '../Components/IssueStatusBadge';


const fetchIssues=async()=>{
  

    const issues=await fetch("http://localhost:3001/issue");
     const data=await issues.json();

 

return data


}

const Issues =async () => {

    const data=await fetchIssues()
 
 
  
  
  

  return (
    <div className='px-24 '>
      <Button><Link href="/issues/new">New Issue</Link></Button>
      <Table.Root variant='surface' className='max-w-2xl mt-4'>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Created</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.data.map((issue)=>(
           <Table.Row key={issue._id}>
            <Table.Cell><Link href={`/issues/${issue._id}`}>{issue.title}</Link></Table.Cell>
            <Table.Cell><IssueStatusBadge status={issue.status}/></Table.Cell>
            <Table.Cell>{(new Date(issue.createdAt)).toDateString()}</Table.Cell>
           </Table.Row>
          ))}

        </Table.Body>
      </Table.Root>
    </div>
  )
}

export default Issues