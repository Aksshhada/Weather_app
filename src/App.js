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
        <p className=''>65 degree F</p>
      </div>
      <div className='humidity'>
        <p>50%</p>
      </div>
      <div className='wind'>
        <p>12 MPH</p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default App