import Movie from './Movie';
import Page404 from './Page404';
import classes from './styles/movies.module.css';

export default function Movies(props) {
  const { movies = [] } = props;

  return (
    <div className={classes.movies}>
      {movies.length ? movies.map((movie) => <Movie key={movie.imdbID} {...movie} />) : <Page404 />}
    </div>
  );
}
