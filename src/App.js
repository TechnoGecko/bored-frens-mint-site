import "./App.css";
import {
  About,
  Affiliates,
  Footer,
  Header,
  Navbar,
  Roadmap,
  Team,
  Utility,
} from "./Components/index.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Affiliates />
      <Utility />
      <Roadmap />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
