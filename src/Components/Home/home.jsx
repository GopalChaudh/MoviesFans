import React, { Component,lazy,Suspense } from 'react';
import Loading from '../Loading/Loading';
import './Home.css';

const MoviesData = lazy(() => import('./MoviesData'));

export default class Home extends Component {

  render() {
    
    return (
      <Suspense fallback={<Loading />}>
        <MoviesData />
      </Suspense>
    )
  }

}

