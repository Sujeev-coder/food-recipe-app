

"use client"

import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'

const Homepage = () => {

  return (
    <>
      <center>

        <div className='bg-yellow-600 text-white h-20 text-5xl p-3 font-extrabold'>

          <h1>SJA Online Fashion</h1>

        </div>

      </center>

      <Nav />

    </>
  )
}

export default Homepage