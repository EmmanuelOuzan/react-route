import './App.css';
import { Routes, Route } from "react-router-dom";
import MyName from './Pages/MyName';
import Home from './Pages/Home';
import About from './Pages/About';
import NavBar from './Components/NavBar';
function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="MyName/:name" element={<MyName />} />
      </Routes>
    </div>
  );
}

export default App;
