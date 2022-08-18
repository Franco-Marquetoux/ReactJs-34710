import NavBar from "./Components/NavBar/NavBar";
import Cards from "./Components/Card/Cards";
import "./Components/Card/Cards.css";
import "./Components/CartWidget/CartWidget";
import ItemListContainer from "./Components/ItemList/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <Cards />
    </div>
  );
}

export default App;
