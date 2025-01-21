import React from "react";
import MovieList from "./MovieList";

import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  const moviesCategories = [
    { title: "Now Playing", movies: movies.nowPlayingMovies },
    { title: "Popular", movies: movies.popularMoviesVideo },
    { title: "Top Rated", movies: movies.topRatedMoviesVideo },
    { title: "Upcoming", movies: movies.upcomingMoviesVideo },
  ];

  return (
    <div className=" bg-black">
      <div className="-mt-52 pl-12 relative z-20">
        {moviesCategories.map((category, index) => (
          <MovieList
            key={index}
            movies={category.movies}
            title={category.title}
          />
        ))}
      </div>
    </div>
  );
};

export default SecondaryContainer;
