import React from 'react'
import { Card, Container } from 'react-bootstrap'

export default function Users({name, username, email}) {
  return (
    <>
      <Container className='my-1'>
        <Card className='border-primary px-1'>
          <h6>{name}</h6>
          <span>{username}</span>
          <span>{email}</span>
        </Card>
      </Container>
    </>
  )
}
