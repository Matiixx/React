import React from 'react'
import { Card, Container } from 'react-bootstrap'

export default function Post({title, body}) {
  return (
    <>
      <Container className='my-1'>
        <Card className='border-primary px-1'>
          <h6>{title}</h6>
          <p style={{fontSize: "14px"}}>{body}</p>
        </Card>
      </Container>
    </>
  )
}
