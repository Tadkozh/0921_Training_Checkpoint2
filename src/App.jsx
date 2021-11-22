import { Header } from "./components/Header";
import { CharactersList } from "./components/CharactersList";

const App = () => {
  return (
    <div className="App">
      <Header name="Jenny" />
      <CharactersList name="Jenny" />
          
    </div>
  );
}

export default App;
