import React from 'react'
import '../components/container.css'
import Card from './card/Card'

const Container = () => {
  return (
    <>
    <div className="container">
        <Card name= "Harsh" course="BCA" />
        {/* <Card name= "Devesh" course="BCA" /> */}
    
    </div>
    </>
  )
}

export default Container