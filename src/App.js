import React from 'react';
// import components
import Hero from './components/Hero';

import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import AllMenu from './components/AllMenu';
import SingleMenu from './components/SingleMenu';

import  {Route,Routes,BrowserRouter} from 'react-router-dom'



const App = () => {
  return (
    <BrowserRouter>
    <div className='h-full bg-pattern bg-repeat max-w-[1800px] mx-auto overflow-hidden'>
     
    <Routes>

<Route path='/' element = {<Hero />}/>
<Route path='/register' element = {<Register/>}/>
<Route path='/login' element = {<Login/>}/>
<Route path='/menu' element = {<AllMenu/>}/>
<Route path='/singleorder' element = {<SingleMenu/>}/>



</Routes>
<Footer />
      <div className='h-[380px] md:h-[370px]'></div>
    </div>

 
    </BrowserRouter>
  );
};

export default App;