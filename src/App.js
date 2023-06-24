import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Main from './Components/SomeFiles/Main'
import Home from './Components/Home/Home';
import AllServices from './Components/Services/AllServices';
import Digital from './Components/SomeFiles/Digital';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/services' element={<AllServices/>}></Route>
        <Route path='/services/digital' element={<Digital/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
