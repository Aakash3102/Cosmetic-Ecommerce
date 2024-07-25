import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';
import Hero from './components/Hero/Hero';
import Product from './components/Products/Product';
import Slider from './components/Slider/Slider';
import Testimonials from './components/Testimonials/Testimonials';
import Virtual from './components/virtual/Virtual';

function App() {

  return (
   <div className='App'>
    <Header/>
    <Hero/>
    <Slider/>
    <Virtual/>
    <Product/>
    <Testimonials/>
    <Footer/>
   </div>
  )
}

export default App;
