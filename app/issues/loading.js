import React from 'react'
import { Button, Table, TableColumnHeaderCell } from '@radix-ui/themes';
import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const LoadingIssuesPage = () => {
    const data=[1,2,3,4,5]
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
      {data.map((issue,index)=>(
       <Table.Row key={index}>
        <Table.Cell><Skeleton/></Table.Cell>
        <Table.Cell><Skeleton/></Table.Cell>
        <Table.Cell><Skeleton/></Table.Cell>
       </Table.Row>
      ))}

    </Table.Body>
  </Table.Root>
  </div>
  )
}

export default LoadingIssuesPage