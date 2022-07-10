import './App.css';
import NavigationBar from './Components/NavigationBar'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './Components/Footer';
import Teams from './pages/Teams';
import Rajasthan from './Teams/Rajasthan';
import Pune from './Teams/Pune';
import Punjab from './Teams/Punjab';
import Chennai from './Teams/Chennai';
import Delhi from './Teams/Delhi';
import Mumbai from './Teams/Mumbai';
import Bangalore from './Teams/Bangalore';
import Deccan from './Teams/Deccan';
import Kolkata from './Teams/Kolkata';
import Kochi from './Teams/Kochi';
import Hyderabad from './Teams/Hyderabad';
import Gujarat from './Teams/Gujarat';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Teams' element={<Teams/>}/>
          <Route path='/Rajasthan' element={<Rajasthan/>}/>
          <Route path='/Pune' element={<Pune/>}/>
          <Route path='/Punjab' element={<Punjab/>}/>
          <Route path='/Chennai' element={<Chennai/>}/>
          <Route path='/Delhi' element={<Delhi/>}/>
          <Route path='/Mumbai' element={<Mumbai/>}/>
          <Route path='/Bangalore' element={<Bangalore/>}/>
          <Route path='/Deccan' element={<Deccan/>}/>
          <Route path='/Kolkata' element={<Kolkata/>}/>
          <Route path='/Kochi' element={<Kochi/>}/>
          <Route path='/Hyderabad' element={<Hyderabad/>}/>
          <Route path='/Gujarat' element={<Gujarat/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
