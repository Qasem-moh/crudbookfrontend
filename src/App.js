import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./Components/Home";
import Add from "./Components/ADD";
import Delete from "./Components/Delete";
import NavBar from "./Components/NavBar";

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
