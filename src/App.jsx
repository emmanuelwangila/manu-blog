import "./App.css";
import "./Navbar.jsx";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";

function App() {
  return (
    <div className="App">
      <div className="">
        <Navbar />
        <Home />

        {/* <h2>Mastery React</h2> */}
      </div>
    </div>
  );
}

export default App;
