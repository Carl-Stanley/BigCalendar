import React, {Component} from 'react';

import './App.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment)

class App extends Component {
  
  render () {
    
    
   return ( <div className="App">
    
     
    
    <Calendar
      localizer={localizer}
      
      startAccessor="start"
      endAccessor="end"
    />
     
    </div>
   )}
}

export default App;
