import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/const";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  //fetch trailer video && updating the store with trailer video

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );

    const json = await data.json();

    const movieTrailers =
      json.results.find((movie) => movie.type === "Trailer") || json.results[0];

    dispatch(addTrailerVideo(movieTrailers));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
