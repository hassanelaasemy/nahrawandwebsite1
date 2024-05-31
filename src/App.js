import "./App.css";

import SliderComming from "./pages/slider/SliderComming";
import Navbar from "./components/Navbar";
import FormationSection from "./pages/formation/FormationSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SliderComming />
      <FormationSection/>
    </div>
  );
}

export default App;
