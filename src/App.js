
import './App.css';
import Dash from './Components/Dash';
import Welcomepage from './Components/Welcomepage';
import ThirdPage from './Components/ThirdPage';
import Biography_Title from './Components/Biography_Title';
import BiographyContent from './Components/BiographyContent';
import ContinueReading from './Components/ContinueReading';
import Call from './Components/Call';
import Schedule from './Components/Schedule';
import Timelines from './Components/Timelines';
import BackgroundImg from './Components/BackgroundImg';
import Fundraiser_form from './Components/Fundraiser_form';
import { useState } from 'react';
import { useRef } from 'react';

import Contact from './Components/Contact';

function App() {
  /*const scrollTosection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behaviour:'smooth',

    });
  }
  */
  return (
    <div className="w-full">
      <Dash/>
      <Welcomepage />
      <ThirdPage />
      <Biography_Title />
      <BiographyContent />
      <ContinueReading />
      <Call/>
      <Schedule />
      <Fundraiser_form/>
      <Timelines />
      <Contact/>
    </div>
  );
}

export default App;
