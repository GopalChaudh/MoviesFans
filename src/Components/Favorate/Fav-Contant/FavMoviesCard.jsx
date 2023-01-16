import { useState } from 'react'
import Localbase from 'localbase'

const db = new Localbase('db')




export default function FavMoviesCard(props) {
const [clicked,setIsclicked] = useState(false)

  function HandleFavOnClick() {
      db.collection('favorates').doc({ id: props.id }).delete()
        setIsclicked(true)
    }
    
    
   
    return (
      <div className="card mb-3 CardContaint" >
  
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`https://image.tmdb.org/t/p/w500/${props.src}`} className="img-fluid rounded-start" alt="Loading..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h5 className="Rating">{props.rating}<i className="fa-solid fa-star"></i></h5>
        <p className="card-text">{props.overview}</p>
        <p className="card-text"><small className="text-muted">Release-Date {props.release_date}</small> <button className={`btn btn-danger ${clicked ? 'disabled' : null}`} onClick={HandleFavOnClick}>
        {clicked ? 
          <i className="fa-solid fa-trash-can"></i> :
          <i className="fa-regular fa-trash-can"></i>
         }
          </button></p>
        
      </div>
    </div>
  </div>
</div>
    )
}
