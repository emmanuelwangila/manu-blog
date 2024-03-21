import "./App.css";
import "./Navbar.jsx";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Create.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/new-blog" element={<Create />}></Route>
          </Routes>

          {/* <h2>Mastery React</h2> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
