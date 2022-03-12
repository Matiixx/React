import React from 'react';
import { Button } from 'react-bootstrap';
import { useTheme, useThemeUpdate } from '../contexts/ThemeContext';

export default function FunctionContextComponent() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
    padding: '30px',
    margin: '20px'
  }; 

  return (
    <>
      <Button variant="outline-primary w-50 my-1 mx-auto" onClick={toggleTheme}>Toggle theme</Button>
      <div style={themeStyles}>Function Context Component</div>
    </>
  )
}
