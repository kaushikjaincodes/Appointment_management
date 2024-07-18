import React, { useState } from "react";
import "./App.css";
import Addbar from "./components/Addbar";
import Leftbar from "./components/Leftbar";
import Rightpanel from "./components/Rightpanel";
function App() {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  
  const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  const parseTime = (time) => {
    const [timePart, period] = time.split(' ');
    let [hours, minutes] = timePart.split(':').map(Number);

    if (period === 'PM' && hours !== 12) {
      hours += 12;
    } else if (period === 'AM' && hours === 12) {
      hours = 0;
    }

    return { hours, minutes };
  };
  const handleAddCustomer = (name, hours, minutes, period) => {

    const formattedMinutes = formatTime(minutes);

    const newCustomer = { name, time: `${hours}:${formattedMinutes} ${period}` };
    const updatedCustomers = [...customers, newCustomer];

    updatedCustomers.sort((a, b) => {
      const timeA = parseTime(a.time);
      const timeB = parseTime(b.time);
      
      if (timeA.hours !== timeB.hours) {
        return timeA.hours - timeB.hours;
      } else {
        return timeA.minutes - timeB.minutes;
      }
    });
    setCustomers(updatedCustomers);
  };
  return (
    <div className="app">
      <div className="addbarcontainer">
        <Addbar onAddCustomer={handleAddCustomer} />
      </div>
      <div className="bottom">
      <div className="sidebar">
        <Leftbar customers={customers} onSelectCustomer={setSelectedCustomer} />
      </div>
      <div className="bar"></div>
      <div className="right">
        {selectedCustomer && <Rightpanel customer={selectedCustomer}/>}
      </div>
      </div>
    </div>
  );
}

export default App;
