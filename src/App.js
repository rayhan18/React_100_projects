//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom'
import  Routs  from './Approuts/Routs';
import Appnavigation from './Components/Navigation/Appnavigation'
function App() {
  return (
    < >
      <Appnavigation/>
    < BrowserRouter>
         <Routs/>
    </BrowserRouter>
    
        
    
    </>
  );
}

export default App;
