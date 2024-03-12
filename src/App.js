import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; 
import NavBar from './components/NavBar'; 
import ExperimentalPage from './components/ExperimentalPage'; 
import About from './components/About'; 
import NarrativePage from './components/NarrativePage';
import IWantMyVmagPage from './components/IWantMyVMagPage';
import AJourneyOutWestPage from './components/AJourneyOutWestPage';
import NightlifeArchetypesPage from './components/NightlifeArchetypes'
import ASeasonatUVA from './components/ASeasonatUVAPage';
import BottomBar from './components/BottomBar';

function App() {
  useEffect(() => {
    document.title = "Kenneth Nguyen - Cinematographer";
  }, []);

  return (
    <Router>
      <div>
        <NavBar /> 
        <Routes> 
          <Route exact path="/" element={<ExperimentalPage />} /> 
          <Route path="/experimental" element={<ExperimentalPage />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/narrative" element={<NarrativePage/>}/>
          <Route path="/i-want-my-vmag" element={<IWantMyVmagPage />} /> 
          <Route path="/a-journey-out-west" element={<AJourneyOutWestPage />} /> 
          <Route path="/nightlife-archetypes" element={<NightlifeArchetypesPage />} /> 
          <Route path="/a-season-at-uva" element={<ASeasonatUVA />} /> 
          
        </Routes>
        <BottomBar/>
      </div>
    </Router>
  );
}

export default App;
