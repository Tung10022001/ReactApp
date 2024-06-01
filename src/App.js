// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import ShortCourses from './Pages/ShortCourses';
import Register from './Pages/Register';
import NotFound from './Pages/NotFound';
import Dashboard from './Components/Dashboard';


function App() {  
  return (
    <Router>
      <div className="App">
        <Header />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/short-courses" element={<ShortCourses />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
