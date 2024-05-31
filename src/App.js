import "./App.css";

import SliderComming from "./pages/slider/SliderComming";
import Navbar from "./components/Navbar";
import FormationSection from "./pages/formation/FormationSection";

import Eventsection from "./pages/event/Eventsection";
import SpeakersSection from "./pages/speakers/SpeakersSection";

import ContentSection from "./pages/content/ContentSection";


function App() {
  return (
    <div className="App">
      <Navbar />
      <SliderComming />
      <FormationSection />
      <Eventsection />
     <ContentSection />
      <SpeakersSection />

    </div>
  );
}

export default App;
