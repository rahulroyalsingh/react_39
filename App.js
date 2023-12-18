import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from './component/Home';
import About from './component/About';
import NavBar from './component/Navbar';
import User from "./component/User";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<User/>} />
          <Route path="/*" element={<Navigate to="/" />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
