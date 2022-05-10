import "./index.css";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <br />
      <ItemListContainer titulo="catalogo" />
    </div>
  );
}

export default App;
