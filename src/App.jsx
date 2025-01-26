

import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import LandingPage from './Stores/pages/LandingPage'
//import KitchenPage from './Stores/components/KitchenPage'
import MobilePage from './Stores/pages/MobilePage'
import ComputerPage from './Stores/pages/ComputerPage'
import WatchPage from './Stores/pages/WatchPage'
import MenPage from './Stores/pages/MenPage'
import BooksPage from './Stores/pages/BooksPage'
import WomenwaerPage from './Stores/pages/WomenwaerPage'
import FurniturePage from './Stores/pages/FurniturePage'
import AcPage from './Stores/pages/AcPage'
import KitchenPage from './Stores/pages/KitchenPage'
import MobileSingle from './Stores/single/MobileSingle'
import UserCart from './Stores/UserCart'
import FridgePage from './Stores/pages/FridgePage'
import SpeakersPage from './Stores/pages/SpeakersPage'
import TvPage from './Stores/pages/TvPage'
 import ComputerSingle from './Stores/single/ComputerSingle'
 import FurnitureSingle from './Stores/single/FurnitureSingle'
 import KitchenSingle from './Stores/single/KitchenSingle'
 import AcSingle from './Stores/single/AcSingle'
import MenSingle from './Stores/single/MenSingle'
import WatchSingle from './Stores/single/WatchSingle'
import WomenSingle from './Stores/single/WomenSingle'
import FridgeSingle from './Stores/single/FridgeSingle'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = { <LandingPage />}/>
        <Route path= '/kitchen' element = {<KitchenPage />} />
        <Route path='/mobiles' element= {<MobilePage />} />
        <Route path='/computers' element= {<ComputerPage />} />
        <Route path='/watch' element= {<WatchPage />} />
        <Route path='/fridge' element={<FridgePage />} />
        <Route path='/men' element= {<MenPage />} /> 
        <Route path='/women' element= {<WomenwaerPage />} />             
        <Route path='/furniture' element= {<FurniturePage />} />  
        <Route path='/speakers' element= {<SpeakersPage />} />            
        <Route path='/ac' element= {<AcPage />} />  
        <Route path ='/books' element={<BooksPage/>}/> 
        <Route path ='/tv' element={<TvPage/>}/> 
               
        <Route path='/mobiles/:id' element = {<MobileSingle />} />
      <Route path='/cart' element = {<UserCart />} />
      <Route path='/ac/:id' element = {<AcSingle />} />
      <Route path='/computers/:id' element = {<ComputerSingle />} />
      <Route path='/furniture/:id' element = {<FurnitureSingle />} />
      <Route path='/kitchen/:id' element = {<KitchenSingle />} />
      <Route path='/men/:id' element = {<MenSingle />} />
      <Route path='/watch/:id' element = {<WatchSingle />} />
      <Route path='/women/:id' element = {<WomenSingle />} />
      <Route path='/fridge/:id' element = {<FridgeSingle />} />
      </Routes>
    </div>
  )
}

export default App