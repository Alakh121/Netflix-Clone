import React, { useContext } from "react";
import { Fragment } from "react";
import { MovieContext } from "./../../ContextApi/MovieContext";

const ListMovies = () => {
  let MOVIES = useContext(MovieContext);

  return (
    <section id="thumbnail_videos">
      <h1>List of Movies</h1>
      <article>
        {MOVIES.map(movie => (
          <div key={movie.id} className="thumbnail">
            <figure>
              <img src={movie.movie_poster} alt={movie.movie_name} />
            </figure>
          </div>
        ))}
      </article>
    </section>
  );
};

export default ListMovies;
