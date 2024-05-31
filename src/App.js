import "./App.css";

import SliderComming from "./pages/slider/SliderComming";
import Navbar from "./components/Navbar";
import FormationSection from "./pages/formation/FormationSection";
import Eventsection from "./pages/event/Eventsection";
import SpeakersSection from "./pages/speakers/SpeakersSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SliderComming />
      <FormationSection />
      <Eventsection />
      <SpeakersSection />
    </div>
  );
}

export default App;
