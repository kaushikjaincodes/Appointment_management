import React from 'react'
import './leftbar.css'

const Leftbar=({ customers, onSelectCustomer })=>{
  return (
    <div className="leftdiv">
      <h3>Appointments</h3>
      <ul>
        {customers.map((customer, index) => (
          <li key={index} onClick={() => onSelectCustomer(customer)}>
            {customer.time}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Leftbar;
