import Navbar from './components/Navbar';
import AppointmentsForm from './components/appointments';
import Header from './components/Header';
import Home from './Home';
import Footer from './components/Footer';
import About from './components/About';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { Routes, Router, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

 //const Home = () => <h1>Bine ai venit! </h1>;

const App=()=> {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname !== "/") {
      navigate("/");
    }
  }, []);
  
  return (
    <div id="root">
       <div className="content">
      <Navbar />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programare" element={<AppointmentsForm />} />
        <Route path="/despre" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/:cnp" element={<Dashboard />} />
      </Routes>
    </div>
    <Footer />
    </div>
 );
}

export default App;
