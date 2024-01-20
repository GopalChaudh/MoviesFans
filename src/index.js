import React,{Suspense,lazy} from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import { createRoot } from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import Footer from './Components/Footer/Footer';
import Loading from './Components/Loading/Loading';
import Home from "./Components/Home/Home"
import './index.css'
const Favorate = lazy(() =>import('./Components/Favorate/Favorate'))
const NavBar = lazy(() => import('./Components/NavBar/NavBar'))
import Search from './Components/search/search';




createRoot(document.getElementById('root')).render(
        <Router>
            
            <NavBar />
                <Suspense fallback={<Loading />} >
            <Routes>

                <Route path='/' element={<Home />} />
                <Route path="/favorate" element={<Favorate />}/>
                <Route path='/search' element={<Search />} />

            </Routes>
                </Suspense>
            <Footer />
        </Router>
)