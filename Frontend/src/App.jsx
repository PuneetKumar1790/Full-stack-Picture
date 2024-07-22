import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import React, {useEffect } from 'react';

function App() {
  const [jokes,setjokes]=useState([])
  useEffect(()=>{
    axios.get('/api/jokes')// to not write full url localhost://--- we use proxy(they think /api has same origin as localhost)
      .then((response)=>{
        setjokes(response.data)
      })
      .catch((error)=>{
        console.log(error)
      })
  })
  return (
    <>
    <h1>Chai and fullstack</h1>
    <p>Jokes:{jokes.length}</p>
    {
      jokes.map((joke,index)=>(
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
          </div>
          ))
    }
    </>
  )
}

export default App
