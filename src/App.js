import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; 
import NavBar from './components/NavBar'; 
import ExperimentalPage from './components/ExperimentalPage'; 
import About from './components/About'; 
import NarrativePage from './components/NarrativePage';
import CommercialPage from './components/CommercialPage';
import IWantMyVmagPage from './components/IWantMyVMagPage';
import AJourneyOutWestPage from './components/AJourneyOutWestPage';
import NightlifeArchetypesPage from './components/NightlifeArchetypes'
import ASeasonatUVA from './components/ASeasonatUVAPage';
import BottomBar from './components/BottomBar';
import ISeeYouPage from './components/ISeeYouPage';
import Breathe from './components/Breathe';
import PeaceOfMindPage from './components/PeaceOfMindPage';
import NatureHarmonyPage from './components/NatureHarmonyPage';
import JetsweatPage from './components/Jetsweat';
import TheMothPage from './components/TheMothPage';
import VMagWater from './components/VMagWater';
import HotelFiction from './components/HotelFiction';
import PleaseHoldPage from './components/PleaseHoldPage';
import ToWhomILetGo from './components/ToWhomILetGo'; // Assuming you have this component

function App() {
  useEffect(() => {
    document.title = "KENNETH NGUYEN";
  }, []);

  return (
    <Router>
      <div>
        <NavBar /> 
        <Routes> 
          <Route exact path="/" element={<ExperimentalPage />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/narrative" element={<NarrativePage/>}/>
          <Route path="/commercial" element={<CommercialPage/>}/>
          <Route path="/i-want-my-vmag" element={<IWantMyVmagPage />} /> 
          <Route path="/a-journey-out-west" element={<AJourneyOutWestPage />} /> 
          <Route path="/nightlife-archetypes" element={<NightlifeArchetypesPage />} /> 
          <Route path="/a-season-at-uva" element={<ASeasonatUVA />} />
          <Route path='/i-see-you' element={<ISeeYouPage/>} />
          <Route path='/breathe' element={<Breathe/>} />
          <Route path='/peace-of-mind' element={<PeaceOfMindPage/>} />
          <Route path='/nature-harmony' element={<NatureHarmonyPage/>} />
          <Route path='/jetsweat' element={<JetsweatPage/>}/>
          <Route path='/themoth' element={<TheMothPage/>}/>
          <Route path='/fish-out-of-water' element={<VMagWater/>}/>
          <Route path='/hotel-fiction' element={<HotelFiction/>}/>
          <Route path='/please-hold' element={<PleaseHoldPage/>}/>
          <Route path='/to-whom-i-let-go' element={<ToWhomILetGo/>}/>
          
        </Routes>
        <BottomBar/>
      </div>
    </Router>
  );
}

export default App;
