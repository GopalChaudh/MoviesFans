import React, { Component ,Fragment } from 'react'
import MoviesCard from './MoviesCard';
import axios from 'axios';


export let totalMoviesDataArr = []

function Banner(props){
  return(
    <div className="card text-bg-dark Banner-Containar">
    <img src={`https://image.tmdb.org/t/p/w500/${props.src}`}  className="card-img card-img-top" alt="Loading..." />
    <div className="card-img-overlay Banner-Card-contant">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.overview}</p>
    </div>
   
  </div>
  )
}



export default class MoviesData extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      MoviesData:[], 
      
      page:{
        current:1,
        total:0
      },
      Banner:{
        image:'',
        title:'',
        overview:''
      }
    }
   
  }
  
  NextHandle = () =>{
    if(this.state.page.current < this.state.page.total){
      this.setState((prev) => ({page:{
        current:prev.page.current +1,
        total:prev.page.total
      }}))
      this.MoreMovies(this.state.page.current + 1)
  
    }
    
  }

  MoreMovies = async (page) =>{
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=06293f6c0ca5b9644e6de0b6aee187c5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`)
    .then(res =>{
    let totalMovies = [...res.data.results]
    const BannerMovie = totalMovies[0]
    this.setState(() => ({
      Banner:{
      image:BannerMovie.poster_path,
      title:BannerMovie.title,
      overview:BannerMovie.overview
    }}))
   
      this.setState((prev) => ({
        MoviesData:[...prev.MoviesData,...totalMovies]
      }))
      
    
      
    })
  }
  

  MapingCards = () => {
    const { MoviesData } = this.state
    if(MoviesData.length >= 1 ){
      totalMoviesDataArr = MoviesData
      return MoviesData.map( (element,id) => (
        
        <MoviesCard  index={id} id={element.id} key={element.id} title={element.title || element.original_title} overview={element.overview} src={element.poster_path || element.backdrop_path}/>
        
        ))
      }else{
        <h1>Loading....</h1>
      }
  }

  async componentDidMount(){
    

      
  axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=06293f6c0ca5b9644e6de0b6aee187c5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${ this.state.page.current}&with_watch_monetization_types=flatrate`)
  .then(res =>{
  let totalMovies = [...res.data.results]
  const BannerMovie = totalMovies[0]

  this.setState((prev) =>({
    page:{
      current:prev.page.current,
      total:res.data.total_pages
    }
  }))
  this.setState(() => ({
    Banner:{
    image:BannerMovie.poster_path,
    title:BannerMovie.title,
    overview:BannerMovie.overview
  }}))
    
    this.setState(() => ({MoviesData:totalMovies}))
  
    
  })

  }
  componentWillUnmount() {
    const listners = document.querySelectorAll('button')
    listners.forEach((e) =>{
      e.removeEventListener('click',(e) => null)

    })
  
  }


  render() {
    return (
      <Fragment>

        <Banner src={this.state.Banner.image} title={this.state.Banner.title} overview ={this.state.Banner.overview} />
        <div className="Home-section-trending">
          <div className="trending-title">
            <p>Trending</p>
          </div>
          
          <div className="trending-main-content">
          {this.MapingCards()}
        
          </div>
          <div className="next-button-container">
            <div>

          <button type="button" onClick={this.NextHandle} className="btn btn-info">More</button>
          
            </div>
          </div>

        </div>
      </Fragment>
    )
  }
}
