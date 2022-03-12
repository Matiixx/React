import React, { useState } from "react";
import { Button, Container } from 'react-bootstrap';

function App() {

  const [count, setCount] = useState(0);

  function Increment() {
    setCount(p => p + 1);
  }

  function Decrement() {
    setCount(p => p - 1)
  }

  return (
    <>
    <Container className='d-flex align-items-center justify-content-center pt-3' style={{fontSize: "60px"}}>
      <Button variant="outline-danger mx-1" onClick={Decrement}>-</Button>
      <span>{count}</span>
      <Button variant='outline-success mx-1' onClick={Increment}>+</Button>
    </Container>
    </>
  );
}

export default App;
