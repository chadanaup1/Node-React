import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom"

import React from 'react'
//import Greetings from "./components/Greeting"
import Animal from './components/Animal'
import HomePage from './pages/HomePage'
import PhotosPages from "./pages/PhotosPages"

function App() {
  return (<>
        <div>App</div>
        <div id="nav">
            <Link to="/">Home</Link>
            <Link to="/photos">PhotosPages</Link>
        </div>
        
        <div className='container'>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/photos" element={<PhotosPages/>}/>
            </Routes>
        </div>
     </>)
  
}

export default App
