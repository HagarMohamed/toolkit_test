import React, { useEffect } from 'react';
import { getAllPosts } from '../api/postsApi';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Card } from 'react-bootstrap';



const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.allPosts.posts);
  const loading = useSelector((state) => state.allPosts.isLoding);
  const error = useSelector((state) => state.allPosts.error);
  

  useEffect (() =>{
    dispatch(getAllPosts)
  },[dispatch]) 

  const [show, setShow] = useState(true);

  return (
    <div>
      {/* {
        loading ? (<Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>) : (<h2>error</h2>)
      } */}
    
    { 
    posts.length >= 1  ? (posts.map((post) =>{

      return (
      <Card>
      <Card.Header>Quote</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.{' '}
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
      )

    })) 
    : <h2>error</h2>
    }


      
    </div>
  )
}

export default Posts
