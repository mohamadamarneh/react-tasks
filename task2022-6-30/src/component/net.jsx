
import React, { useState, useEffect } from "react";

const Flix = () => {
    const [movies, setMovie] = useState();

    useEffect(() => {

        // fetch('https://api.themoviedb.org/3/movie/popular?api_key=87115d6974692ee1f6613c961ac0e637')
        //     .then(x => x.json())
        //     .then(data => setMovie(data));

            async function getShows() {
                let x = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=87115d6974692ee1f6613c961ac0e637');
                let y = await x.json();
                setMovie(y.results);
              }

              getShows()
    }, []);
    console.log("sm ", movies);

    return (


        <div >
            <div className='hero'>
                <h2>descover your next movie </h2>
            </div>
        
        <div className='container'>
            <h2>
                Movies
            </h2>


            {/* <img class="card-img-top" src={`https://image.tmdb.org/t/p/w500/${a.poster_path}`} alt="Card image cap" /> */}




            {/* {movies.map(a =>

                <div class="card" style="width: 18rem;">
                    
                    <div class="card-body">
                        <h5 class="card-title">{a.title}</h5>
                        <p class="card-text">gererate in {a.release_date}</p>
                        <a href="#" class="btn btn-primary" idMovie={a.id}>View Details </a>
                    </div>
                </div>


            )} */}







            {/* {count.original_title} */}
            <pre>{JSON.stringify(movies, null, 2)}</pre>
        </div>

        </div>

    )
}

export default Flix;