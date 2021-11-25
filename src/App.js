import "./App.css";
import Cards from "./components/cards";
import Header from "./components/header";
import Search from "./components/search";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Cards />
    </div>
  );
}

export default App;
