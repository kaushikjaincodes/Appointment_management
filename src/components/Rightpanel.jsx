import React from 'react'
import './rightpanel.css'
const Rightpanel=({ customer })=>{
  return (
    <div className="rightdiv">
    <h3>Customer Details</h3>
    <p>Name: {customer.name}</p>
    <p>Time: {customer.time}</p>
  </div>
  )
}

export default Rightpanel