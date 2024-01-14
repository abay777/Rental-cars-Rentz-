import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TopSection from './components/TopSection';
import Reservation from './components/Reservation';
import Fleets from './components/Fleets';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import BottomBanner from './components/BottomBanner';
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Navbar/>
    <TopSection/>
    <Reservation/>
    <Fleets/>
    <Features/>
    <Testimonials/>
    <BottomBanner/>
    <Footer/>
   
   </>
  )
}

export default App
