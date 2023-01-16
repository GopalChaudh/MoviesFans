import React, { Component, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Loading/Loading'
import Localbase from 'localbase';
const FavMoviesCard = lazy(() => import('./FavMoviesCard'))
const db = new Localbase('db')


export default class FavContant extends Component {
  constructor(props){
    super(props);
    this.state ={
      cardInfo:[],
      totalCatagories:[],
      Catagories:[]
    }
  }  
  // RequiredSections = () =>{
  //   const catagories = []

  //     data.map((e) =>
  //     e.genre_ids.map((id)=>genreId.adds(id)))
      
  
   
  // }
    FavCardMaping = () =>{

     if(this.state.cardInfo.length !==0){
          return this.state.cardInfo.map((ele,i)=> <FavMoviesCard 
        key={i}
        id={ele.id} 
        genre={ele.genre_ids}
        src={ele.poster_path} 
        title={ele.title} 
        overview={ele.overview}
        rating={ele.vote_average}
        release_date={ele.release_date}
        />)
      }
      
      
      else{
        return <div className='container'>
      <div className="alert alert-danger" role="alert">
      Add a Item First...
    </div>
    <Link to='/' className='btn btn-success'>Add Items</Link>
    </div>
    } 
    }
  componentDidMount(){
    
      db.collection('favorates').get().then(data =>{
        this.setState({
          cardInfo:[...data]
        })
  
        
      })
    
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
