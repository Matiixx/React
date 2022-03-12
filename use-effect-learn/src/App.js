import React, { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Else, If, Then } from 'react-if';
import Comments from './components/Comments';
import Post from './components/Post';
import Users from './components/Users';

function App() {

  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(json => setItems(json))
  }, [resourceType]);

  return (
    <>
      <Container className='align-items-center justify-content-center' style={{maxWidth: "500px"}}>
        <div style={{padding: "5px"}} className='w-100'>
          <Button className='mx-1' onClick={() => setResourceType('posts')}>Posts</Button>
          <Button className='mx-1' onClick={() => setResourceType('users')}>Users</Button>
          <Button className='mx-1' onClick={() => setResourceType('comments')}>Comments</Button>
        </div>
      </Container>

      <If condition={resourceType === 'posts'}>
        <Then>
          {items.map(item => {
            return <Post title={item.title} body={item.body}/>
          })}
        </Then>
        <Else>
          <If condition={resourceType === 'users'}>
            <Then>
              {items.map(item => {
                return <Users name={item.name} username={item.username} email={item.email} />
              })}
            </Then>
            <Else>
              <If condition={resourceType === 'comments'}>
                <Then>
                  {items.map(item => {
                   return <Comments name={item.name} body={item.body} email={item.email} />
                  })}
                </Then>
              </If>
            </Else>
          </If>
        </Else>
      </If>


    </>
  );
}

export default App;
