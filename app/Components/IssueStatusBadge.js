import { Badge } from '@radix-ui/themes'
import React from 'react'

const IssueStatusBadge = ({status}) => {
    const statusmap={
        OPEN:{
            label:"OPEN",
            color:"red"
        },
        IN_PROGRESS:{
            label:"In Progress",
            color:"voilet"
        },
        CLOSED:{
            label:"Closed",
            color:"green"
        }
    }
  return (
    <div>
        <Badge color={statusmap[status].color}>{statusmap[status].label}</Badge>
    </div>
  )
}

export default IssueStatusBadge