const Movie = (props) => {

    return (
        <article>
            <h2>{props.title}</h2>
            <p>{props.year }</p>
            <ul>
                <li>{props.cast[0]}</li>
                <li>{props.cast[1]}</li>

            </ul>
        </article>
        );
}

export default Movie

// another short syntax that comes from arrow functions
// const Movie=(props)=>(<article>{props.title}</article>)
// or
// const Movie=props=>(<article>{props.title}</article>)

