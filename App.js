import "./App.css";
import NavBar from "./components/navbar/NavBar.jsx";
import Item from "./components/carousel-item/Item.jsx";
import'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Item />
    </div>
  );
}

export default App;