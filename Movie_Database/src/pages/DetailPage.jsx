import { Link, useParams } from 'react-router-dom';
import MovieData from '../assets/data/MovieData';
import './DetailPage.css'

const DetailPage = () => {
  const params = useParams();
  const details = MovieData.find((item) => item.title === params.details);

  if (!details) {
    return <p>Movie not found</p>;
  }

  return (
    <section  className='movie-item'>
      <article >
        <p>{details.title}</p>
        <p>{details.year}</p>
        <p>{details.director}</p>
        <p>{details.duration}</p>
        <p>{details.rate} ⭐</p>
        {details.genre.map((element, index) => (
          <p key={index}>{element}</p>
        ))} 
        <Link to="/moviepage" className="link">
          Movie Overview
        </Link>
      </article>
    </section>
  );
};

export default DetailPage;