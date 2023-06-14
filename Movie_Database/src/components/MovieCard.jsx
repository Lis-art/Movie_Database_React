const MovieCard = (props) => {
    return(
        <article>
            <h2>{props.title}</h2>
            <p>{props.director}</p>
            <p>{props.duration}</p>
            <p>{props.rate} ⭐</p>
            <p>{props.year}</p>
            <div>
                {Array.isArray(props.genre) && props.genre.map((element, index) => (
                    <p key={index}>{element}</p>
                ))}
            </div>
        </article>
    )
}
export default MovieCard;