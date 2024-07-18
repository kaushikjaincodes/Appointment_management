import React, {useState} from 'react'
import './addbar.css'

const Addbar = ({ onAddCustomer }) => {
  const [name, setName] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [period, setPeriod] = useState('AM');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && hours && minutes) {
      onAddCustomer(name, hours, minutes, period);
      setName('');
      setHours('');
      setMinutes('');
      setPeriod('AM');
    }
  };

  return (
   
    <form onSubmit={handleSubmit}>
      <div className='move'>
        <label htmlFor="name" id='namelabel'>Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          required
          className='namei'
        />
      
      
        <label htmlFor="hours" className='lablestyle'>Hours:</label>
        <input
          type="number"
          id="hours"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          min="1"
          max="12"
          placeholder="HH"
          required
        />
      
      
        <label className='lablestyle' htmlFor="minutes" >Minutes:</label>
        <input
          type="number"
          id="minutes"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
          min="0"
          max="59"
          placeholder="MM"
          required
        />
     
      
        <label htmlFor="period" className='lablestyle'>Period:</label>
        <select
          id="period"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
        >
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      
  </div>
  <div className='addbut'>
      <button type="submit" className='add'>Add</button>
  </div>
    </form>
  )
}

export default Addbar