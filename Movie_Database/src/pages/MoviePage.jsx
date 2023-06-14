import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieData from '../assets/data/MovieData';
import './MoviePage.css';
import MovieCard from "../components/MovieCard";


const MoviePage = () => {
  
  const [searchInput, setsearchInput] = useState("");
  const [data, setData] = useState(MovieData);
  const [genre, setGenre] = useState()

  let key;
  useEffect(() => {
    if(genre == "" || genre == undefined){
    } else {
      let copyArray = data.filter(function(movie){
        for(key in movie){
          if(movie[key].includes(genre)){
            return movie;
          }
        }
      });
      setData(copyArray)
    }
  }, [genre])

  const SearchMovie = (e) => {
    setsearchInput(e.target.value);
  }

  const searchedData = data.filter((item) => 
  item.title.toLowerCase().includes(searchInput.toLowerCase()));

  const ascending = () => {
    const copyArray = [...MovieData];
    copyArray.sort((a, b) => a.year - b.year);
    setData(copyArray);
  };

  const descending = () => {
    const copyArray = [...MovieData];
    copyArray.sort((a, b) => b.year - a.year);
    setData(copyArray);
  };

  const rate = () => {
    const copyArray = [...MovieData];
    copyArray.sort((a, y) => y.rate - a.rate);
    setData(copyArray);
  };

  const sortAZ = () => {
    const copy = [...MovieData];
    setData(copy.sort((a, b) => (b.title > a.title ? -1 : 1)));
  };

  const sortZA = () => {
    const copyArray = [...MovieData];
    setData(copyArray.sort((a, b) => (b.title < a.title ? -1 : 1)));
  };

  return (
    <section>
      <div className='btn-div'>
        <button onClick={ascending}>Sort by Date Ascending</button>
        <button onClick={descending}>Sort by Date Descending</button>
        <button onClick={rate}>Sort by Best Rated</button>
        <button onClick={sortAZ}>A - Z</button>
        <button onClick={sortZA}>Z - A</button>
        <input type='text' value={searchInput} onChange={SearchMovie} placeholder='Search Movie'/>
        <form>
                <select onChange={(e) => {setData(MovieData);setGenre(e.target.value)}} name="" id="genre">
                    <option value="">Choose Genre</option>
                    <option value="Crime">Crime</option>
                    <option value="Drama">Drama</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Action">Action</option>
                    <option value="Biography">Biography</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Western">Western</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Romance">Romance</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                    <option value="Family">Family</option>
                    <option value="War">War</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Animation">Animation</option>
                    <option value="Horror">Horror</option>
                    <option value="Music">Music</option>
                    <option value="Musical">Musical</option>
                    <option value="Film-Noir">Film-Noir</option>
                    <option value="Sport">Sport</option>
                </select>
            </form>
      </div>
      <article className='movie-item'>
        {searchedData.map((item, index) => (
          <article key={index}>
            <MovieCard
            title={item.title}
            year={item.year}
            director={item.director}
            duration={item.duration}
            rate={item.rate}
            />
            <Link to={`/detailpage/${encodeURIComponent(item.title)}`} className='link'>Read More</Link>
          </article>
        ))}
      </article>
    </section>
  );
};

export default MoviePage;