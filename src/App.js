import React from 'react';
// import components
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';

import  {Route,Routes,BrowserRouter} from 'react-router-dom'



const App = () => {
  return (
    <BrowserRouter>
    <div className='h-full bg-pattern bg-repeat max-w-[1800px] mx-auto overflow-hidden'>
     
    <Routes>

<Route path='/' element = {<Hero />}/>
<Route path='/register' element = {<Register/>}/>
<Route path='/login' element = {<Login/>}/>


</Routes>
<Footer />
      <div className='h-[380px] md:h-[370px]'></div>
    </div>

 
    </BrowserRouter>
  );
};

export default App;