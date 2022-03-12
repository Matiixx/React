import React from 'react'
import { Card, Container } from 'react-bootstrap'

export default function Comments({name, email, body}) {
  return (
    <>
      <Container className='my-1'>
        <Card className='border-primary px-2'>
          <h6>{name}</h6>
          <p>{body}</p>
          <span style={{textAlign: "right"}}>{email}</span>
        </Card>
      </Container>
    </>
  )
}
