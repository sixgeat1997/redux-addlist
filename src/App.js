import React, { useState, useEffect } from 'react'
import BearList from './components/BearList'
import InputForm from './components/InputForm';


export default () => {
  return (
    <div>
      <h2>Bears</h2>
      <BearList />
      <InputForm />
    </div>
  )
}
