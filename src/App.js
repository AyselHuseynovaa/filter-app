import React, { Component } from "react";
import "./style/App.css";
import MovieList from "./Components/MovieList";
import SearchBar from "./Components/SearchBar";
const App =()=> {
 
  // async componentDidMount() {
  //   const response = await axios.get(
  //     "https://api.themoviedb.org/3/movie/550?api_key=e335915f71eb03e30d6bb6a5e525b442"
  //   );
  //   console.log(response.data);
  //   this.setState({ movies: response.data });
  // }

  // deleteMovie = (movie) => {
  //   this.setState({
  //     movies: this.state.movies.filter(m=> m.id !== movie.id),
  //   });
  // };
  // searchMovie = (e) => {
  //   this.setState({ searchQuery: e.target.value });
  // };

  // filtered=()=>{
  //    this.state.movies.filter((movie) => {
  //     return (movie.title.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1);
  //   });

  // }

    // let filteredMovie = this.state.movies.filter((movie) => {
    //   return (movie.title.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1);
    // });

    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row">
          <div className="col-lg-12">
            <SearchBar  />
          </div>
        </div>
        <MovieList   />
      </div>
    );
  }

export default App;
