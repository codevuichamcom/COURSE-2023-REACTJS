import React from "react";

const Movie = ({ title, releaseDate, onMovieClick }) => {
  console.log("Movie re-render");
  const start = new Date();
  while (new Date() - start < 3000);
  return (
    <div
      onClick={() => {
        onMovieClick();
      }}
    >
      <div>Movie title: {title}</div>
      <div>Release date: {releaseDate}</div>
      {console.log("Movie render done")}
    </div>
  );
};

const MemoMovie = React.memo(Movie);

export { Movie, MemoMovie };
