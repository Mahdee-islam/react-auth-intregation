
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import RequiredAuth from './Components/RequiredAuth/RequiredAuth';
import Shipping from './Components/Shipping/Shipping';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
   <AuthProvider>
   <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/home' element = {<Home/> }></Route>
        <Route path = "/register" element = { <Register/> }></Route>
        <Route path = "/login" element = { <Login/>} ></Route>
        <Route path = "/shipping" element = {
          <RequiredAuth>
            <Shipping/>
          </RequiredAuth>
        }
        />
      </Routes>
      </BrowserRouter>
   </AuthProvider>
    </div>
  );
}

export default App;
