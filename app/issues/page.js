import { Button } from '@radix-ui/themes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Issues = () => {
  const containerStyle = {
    backgroundImage: "url('../card.png')",
  
  };
  return (
    <div>
      <Button><Link href="/issues/new">New Issue</Link></Button>
      <div className='h-96 w-96' style={containerStyle}>

      </div>
    </div>
  )
}

export default Issues