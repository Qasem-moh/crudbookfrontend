import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";

function Add() {
    return null;
}

function Delete() {
    return null;
}

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="add" element={<Add />} />
          <Route path="delete" element={<Delete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
