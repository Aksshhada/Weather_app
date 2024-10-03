import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const App = () => {

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=18.5204&lon=73.8567&appid=e432f400bda912345d3a38d4959fba7e`

  return (
    <div className='app'>
      <div className='container'>
      <div className='top'>
      <div className='location'>
        <p>Pune</p>
      </div>
      <div className='temp'>
        <h1>60 degree F</h1>
      </div>
      <div className='description'>
        <p>Cloudy</p>
      </div>
      </div>
      <div className='bottom'>
      <div className='feels'>
        <p className='bold'>65 degree F</p>  
        <p>Feels Like</p>
      </div>
      <div className='humidity'>
        <p className='bold'>50%</p>
        <p>Humidity</p>
      </div>
      <div className='wind'>
        <p className='bold'>12 MPH</p>
        <p>Wind Speed</p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default App