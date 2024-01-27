import React, { useEffect, useState } from 'react'
import Localbase from 'localbase';

let db = new Localbase('db')
function FavButton(props) {

  return (
    <button className={`btn FavButton ${props.newClass}`} onClick={props.Click}>{props.text}</button>
  )

}



export default function MoviesCard({
  id,
  adult,
  genre_ids,
  original_language,
  release_date,
  vote_average,
  vote_count,
  title,
  overview,
  src
}) {
  const [FavText, setFavText] = useState('add');
  const [tclass, setTclass] = useState('btn-success')
  useEffect(() => {
    db.collection('favorates').get().then(list => {

        if (list.length > 0) {
          
          for (let i = 0; i < list.length; i++) {
            if (list[i].id === id) {
              setFavText('remove')
              setTclass('btn-danger')
            }
          }
        }
      })
  }, [id])
  function HandleFavOnClick() {
    if (FavText === 'add') {
      setFavText('remove')
      setTclass("btn-danger")
      db.collection('favorates').add({
        id,
        adult,
        genre_ids,
        original_language,
        release_date,
        vote_average,
        vote_count,
        title,
        overview,
        src
      })
      

    } else {
      setFavText('add')
      setTclass("btn-success")
      db.collection('favorates').doc({ id:id }).delete()
        }
    }



  

  return (
    <div className="card MovieCard-Container" >
      <div className="MoviesCard-image">

        <img src={`https://image.tmdb.org/t/p/w500/${src}`} alt="Loding..." className="card-img-top" />
      </div>
      <div className="MoviesCardFavButton">

        <FavButton
          Click={HandleFavOnClick}
          text={FavText}
          newClass={tclass}
        />
      </div>
      <div className="card-body text-card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{overview}</p>

      </div>
    </div>
  )
}




