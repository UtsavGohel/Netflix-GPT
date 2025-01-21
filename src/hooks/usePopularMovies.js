import { useEffect } from "react";
import { API_OPTIONS } from "../utils/const";
import { useDispatch } from "react-redux";
import { addPopularMoviesVideo } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    //set it as reversed list as some now playing and popular movies are same
    const reverseData = json.results.sort((a, b) => {
      return a.id - b.id;
    });

    dispatch(addPopularMoviesVideo(reverseData));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
