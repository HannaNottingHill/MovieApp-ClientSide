import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Shawshank Redemption",
      image:
        "https://www.originalfilmart.com/cdn/shop/products/shawshank_redemption_1994_netherlands_original_film_art_f_1200x.jpg?v=1572559870",
      author: "Frank Darabont",
    },
    {
      id: 2,
      title: "The Godfather",
      image:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      author: "Francis Ford Coppola",
    },
    {
      id: 3,
      title: "Pulp Fiction",
      image: "https://flxt.tmsimg.com/assets/p15684_p_v13_an.jpg",
      author: "Quentin Tarantino",
    },
    {
      id: 4,
      title: "The Dark Knight",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg",
      author: "Christopher Nolan",
    },
    {
      id: 5,
      title: "Forrest Gump",
      image: "https://flxt.tmsimg.com/assets/p15829_v_v13_aa.jpg",
      author: "Robert Zemeckis",
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onClick={() => {
            setSelectedMovie(movie);
          }}
        />
      ))}
    </div>
  );
};
