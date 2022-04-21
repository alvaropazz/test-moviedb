import "./App.css";
import Header from "./components/Header";
import Carrousel from "./components/Carrousel";

const App = () => {
  return (
    <div className="wrapper" data-testid="wrapper">
      <Header />
      <Carrousel title={"Sample"} subtitle={"sample text"} />
    </div>
  );
};

export default App;
