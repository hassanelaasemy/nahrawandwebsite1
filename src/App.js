import "./App.css";

import SliderComming from "./pages/slider/SliderComming";
import Navbar from "./components/Navbar";
import FormationSection from "./pages/formation/FormationSection";
import ContentSection from "./pages/content/ContentSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SliderComming />
      <FormationSection />

      <ContentSection />
    </div>
  );
}

export default App;
