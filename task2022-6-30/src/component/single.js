
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Single() {
    const [movies, setMovie] = useState();

    let { id } = useParams();
    let usee = useNavigate();
    useEffect(() => {

        // fetch('https://api.themoviedb.org/3/movie/popular?api_key=87115d6974692ee1f6613c961ac0e637')
        //     .then(x => x.json())
        //     .then(data => setMovie(data));

        async function getShows() {
            let x = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=87115d6974692ee1f6613c961ac0e637`);
            let y = await x.json();
            setMovie(y);
        }

        getShows()
    }, []);
console.log(movies)

    return(
    <div class='container'>
        <div class="card">
            <img class="card-img-top" src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movies.backdrop_path}`} alt="" />
            <div class="card-body">
                <h4 class="card-title">{movies.title}</h4>
                <p class="card-text">{movies.release_date}</p>
                <p class="card-text">Vote average :{movies.vote_average}</p>
                <p class="card-text">{movies.overview}</p>
            </div>
        </div>


    </div>
    );
}

export default Single;