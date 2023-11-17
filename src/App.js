import { createContext, useState } from 'react';
import './App.css';
import Destinations from './Components/Destinations/Destinations';
import NavigationBar from './Components/NavBar/NavigationBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Stay from './Components/Stay/Stay';
import LogIn from './Components/LogIn/LogIn';
import SignUp from './Components/SignUp/SignUp';

export const DestinationContext = createContext();
function App() {
  const [destinationInfo, setDestinationInfo] = useState({
    origin: '',
    destination: '',
    startDate: '',
    endDate: ''
  });
  return (
    <DestinationContext.Provider value={[destinationInfo, setDestinationInfo]}>
      <div className="App">
        <Router>
          <NavigationBar/>
          <Routes>
            <Route path='/' element={<Destinations/>}/>
            <Route path='/staying-options' element={<Stay/>}/>
            <Route path='/login' element={<LogIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            {/* <Route/>
            <Route/> */}
          </Routes>
        </Router>
      </div>
    </DestinationContext.Provider>
  );
}

export default App;
