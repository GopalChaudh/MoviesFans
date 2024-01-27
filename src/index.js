import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import { createRoot } from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
// pages
import Home from "./Components/Home/Home"
import Footer from './Components/Footer/Footer';
import SearchPage from './Components/SearchingPage/Search'; 
import NavBar from './Components/NavBar/NavBar';
import Favorate from './Components/Favorate/Favorate'
//css
import './index.css'
// lazy load




createRoot(document.getElementById('root')).render(
        <Router>
            
            <NavBar />
            <Routes>

                <Route path='/' element={<Home />} />
                <Route path="/favourite" element={<Favorate />}/>
                <Route path="/MoviesFans/favourite" element={<Favorate />}/>
                <Route path='/search' element={<SearchPage />} />
                <Route path='/MoviesFans/search' element={<SearchPage />} />
                <Route path='/MoviesFans/*' element={<Home />} />
                <Route path='*' element={<Home />} />

            </Routes>
            <Footer />
        </Router>
)