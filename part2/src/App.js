import React, {useState} from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Student from "./pages/Student";
/*import Login from './pages/Login';
import Register from "./pages/Register";*/
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Footer from "./components/Footer";
function App() {
  /*const [currentForm, setCurrentForm] = useState('login');
  
  const toggleForm = (forName) => {
  setCurrentForm(forName);*/
  return (
    <div className="App">   
      <Router>
      <Navbar />
        <Routes>
          {/*<Route exact path='/login' element={< Login />}></Route>
          <Route exact path='/Register' element={< Register />}></Route>*/}
          <Route exact path='/Dashboard' element={< Dashboard />}></Route>
          <Route exact path='/Student' element={< Student />}></Route>
        </Routes>
        <Footer />
      </Router>
      {/*<div className="login">
        {
          currentForm === "login" ? < Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
        }

      </div>*/} 
    </div>    
  );
}
export default App;

