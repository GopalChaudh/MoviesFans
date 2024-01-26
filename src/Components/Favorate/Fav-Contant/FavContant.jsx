import React, { Component, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Loading/Loading'
import Localbase from 'localbase';
const FavMoviesCard = lazy(() => import('./FavMoviesCard'));
const db = new Localbase('db');

export default class FavContant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardInfo: [],
      totalCatagories: [],
      Catagories: []
    }
  }

  FavCardMaping = () => {
    if (this.state.cardInfo.length !== 0) {
      return this.state.cardInfo.map((element) => <FavMoviesCard
        key={element.id}
        id={element.id}
        adult={element.adult}
        genre_ids={element.genre_ids}
        original_language ={element.original_language}
        overview={element.overview}
        release_date={element.release_date}
        src = {element.src}
        title = {element.title}
        vote_average = {element.vote_average}
        vote_count = {element.vote_count}
      />)
    } else {
      return (
        <div className='container'>
          <div className="alert alert-danger" role="alert">
            Add an Item First...
          </div>
          <Link to='/' className='btn btn-success'>Add Items</Link>
        </div>
      );
    }
  }

  componentDidMount() {
    db.collection('favorates').get().then(data => {
      const cardInfo = Array.isArray(data) ? data : (data ? [data] : []); // Ensure cardInfo is an array
      this.setState({
        cardInfo: cardInfo
      });
    });
  }
  

  render() {
    return (
      <div className='FavContant-container'>
        <Suspense fallback={<Loading />}>
          {this.FavCardMaping()}
        </Suspense>
      </div>
    )
  }
}
