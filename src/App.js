//import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom'
import  Routs  from './Approuts/Routs';
import Appnavigation from './Components/Navigation/Appnavigation'
import "react-image-gallery/styles/css/image-gallery.css";
import 'bootstrap/dist/css/bootstrap.min.css';
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
