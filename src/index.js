import React,{Suspense,lazy} from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import Footer from './Components/Footer/Footer';
import Loading from './Components/Loading/Loading';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
const Favorate = lazy(() =>import('./Components/Favorate/Favorate'))
const NavBar = lazy(() => import('./Components/NavBar/NavBar'))
const Home = lazy(() => import('./Components/Home/Home'))




createRoot(document.getElementById('root')).render(
        <Router>
            
            <NavBar />
                <Suspense fallback={<Loading />} >
            <Routes>

                <Route path='/' element={<Home />} />
                <Route path="/favorate" element={<Favorate />}/>

            </Routes>
                </Suspense>
            <Footer />
        </Router>
)