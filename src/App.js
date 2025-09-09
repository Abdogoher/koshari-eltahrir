import './App.css';
import { HashRouter  as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Utilites/Navbar';
import HomePage from './Pages/HomePage';
import Manu from './Pages/Manu';
import About from './Pages/About';
import Footer from './Components/Utilites/Footer';
import ContactPage from './Pages/ContactPage';

function App() {
  return (
    <div className="text-4xl font-bold text-brandRed bg-brandYellow  rounded-xl">
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/manu' element={<Manu />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
