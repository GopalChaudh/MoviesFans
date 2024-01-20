import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../Home/MoviesCard';
import axios from 'axios';

const Search = () => {
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryValue = queryParams.get('param');
  const [totalMoviesDataArr, setTotalMoviesDataArr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
          params: {
            api_key: '06293f6c0ca5b9644e6de0b6aee187c5',
            language: 'en-US',
            query: queryValue,
            include_adult: false,
          },
        });
        setTotalMoviesDataArr(response.data.results);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, [queryValue]);

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
    }}>
      {
        (totalMoviesDataArr.length >= 1) &&
          totalMoviesDataArr.map((element, id) => (
            (element.poster_path || element.backdrop_path) && (
              <MoviesCard
                index={id}
                id={element.id}
                key={element.id}
                title={element.title || element.original_title}
                overview={element.overview}
                src={element.poster_path || element.backdrop_path}
              />
            )
          ))
      }
      {
        totalMoviesDataArr.length === 0 && <h1>No movies found.</h1>
      }
    </div>
  );
};

export default Search;
