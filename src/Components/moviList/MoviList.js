import React, {useEffect, useState} from "react"
import "../moviList/movilist.css"
import { Link, useParams } from "react-router-dom"
import Cards from "../card/Cards"
import { Button } from "react-bootstrap"

const MovieList = () => {
    
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type :"popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
        //.then(data => console.log(data.results))
       // console.log(movieList ,'data')
    }

    return (
        <div className="movie__list movie__list_back">
            <div>
                <Link to="/movihomepage"><Button>Home</Button></Link>
                <Link to="/movies/popular"><Button>Movies/popular</Button></Link>
                <Link to="/movies/upcoming"><Button>Movies/upcoming</Button></Link>
                <Link to="/movies/top_rated"><Button>Movies/top_rated</Button></Link>
            </div>
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList?.map(movie => (
                        <Cards movie={movie} key={movie.id}/>
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList;