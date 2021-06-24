import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieList = ({searchQuery}) => {
  const [movies, setMovies] = useState([]);

  const deleteMovie = (movie) => {
    setMovies(movies.filter((m) => m.id !== movie.id));
  };

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/550?api_key=e335915f71eb03e30d6bb6a5e525b442"
      );
      console.log(response.data);
      setMovies(response.data);
    }
    getData();
  });

  let filteredMovie = movies.filter((movie) => {
    return (
      movie.title
        .toLowerCase()
        .indexOf(searchQuery.toLowerCase()) !== -1
    );
  });

  return (
    <div className="row ">
      {filteredMovie.map((movie) => (
        <div className="col-lg-4" key={movie.id}>
          <div className="card mb-4 shadow-sm">
            <img
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">{movie.overview}</p>

              <div className="d-flex justify-content-between align-items-center">
                <button
                  type="button"
                  className="btn btn-md btn-outline-danger"
                  onClick={(e) => deleteMovie(movie)}
                >
                  Delete
                </button>
                <h4>
                  <span className="badge bg-primary">{movie.vote_average}</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default MovieList;
