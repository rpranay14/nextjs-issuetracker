import IssueStatusBadge from '@/app/Components/IssueStatusBadge'
import { Card, Flex, Heading } from '@radix-ui/themes'
import React from 'react'
import Markdown from 'react-markdown'

const IssueDetail = ({issue}) => {
  return (
   <>
        <Heading >{issue.data.title}</Heading>
        <Flex className='space-x-3 mb-3 mt-3'>
        <IssueStatusBadge status={issue.data.status} className="mb-3"/>
        <p>{new Date(issue.data.createdAt).toDateString()}</p>
        </Flex>
        <Card> <Markdown>{issue.data.description}</Markdown></Card>
        </>)
       
}

export default IssueDetail