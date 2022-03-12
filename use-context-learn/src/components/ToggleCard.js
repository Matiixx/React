import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { ThemeProvider } from '../contexts/ThemeContext';
import FunctionContextComponent from './FunctionContextComponent';

export default function ToggleCard() {
  return (
    <Container className='d-flex align-items-center justify-content-center'>
      <div className='w-100' style={{maxWidth: "500px"}}>
        <Card className='text-center mt-4'>
          
          <ThemeProvider>
            <FunctionContextComponent />
          </ThemeProvider>

        </Card>
      </div>
    </Container>
  )
}
