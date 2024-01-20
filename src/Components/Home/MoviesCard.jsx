import React, { useEffect, useState } from 'react'
import { totalMoviesDataArr } from './MoviesData';
import Localbase from 'localbase';

let db = new Localbase('db')
function FavButton(props) {

  return (
    <button className={`btn FavButton ${props.newClass}`} onClick={props.Click}>{props.text}</button>
  )

}



export default function MoviesCard(props) {
  const [FavText, setFavText] = useState('Add to Favorate');
  const [tclass, setTclass] = useState('btn-danger')
  useEffect(() => {
    db.collection('favorates').get().then(list => {

        if (list.length > 0) {
          
          for (let i = 0; i < list.length; i++) {
            if (list[i].id === props.id) {
              setFavText('Added')
              setTclass('btn-success')
            }
          }
        }
      })
  }, [props.id])
  function HandleFavOnClick() {
    if (FavText === 'Add to Favorate') {
      setFavText('Added')
      setTclass("btn-success")
      db.collection('favorates').add({ ...totalMoviesDataArr[props.index] })
      

    } else {
      setFavText('Add to Favorate')
      setTclass("btn-danger")
      db.collection('favorates').doc({ id: props.id }).delete()
        }
    }



  

  return (
    <div className="card MovieCard-Container" >
      <div className="MoviesCard-image">

        <img src={`https://image.tmdb.org/t/p/w500/${props.src}`} alt="Loding..." className="card-img-top" />
      </div>
      <div className="MoviesCardFavButton">

        <FavButton
          Click={HandleFavOnClick}
          text={FavText}
          newClass={tclass}
        />
      </div>
      <div className="card-body text-card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.overview}</p>

      </div>
    </div>
  )
}




