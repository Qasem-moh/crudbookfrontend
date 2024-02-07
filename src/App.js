import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Details from "./Components/Details";

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
                <Route path="details/:id" element={<Details/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
