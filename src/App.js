import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/Home/HomePage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Members from "./components/Teams/Teams";
import Navbar from "./components/Navbar/Navbar";
import Faculty from "./components/FacultyInfo/FacultyInfo";
import Events from "./components/Events/Events";

function App() {
  return (
      <>
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/team" element={<Members />}/>
              <Route path="/faculty" element={<Faculty />}/>
              <Route path="/events" element={<Events />}/>
            </Routes>
          </div>
        </Router>
      </>
  );
}

export default App;
