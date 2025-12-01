import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { ImageOff } from 'lucide-react';
import classes from './styles/movie.module.css';

export default function Movie(props) {
  const { Title, Year, imdbID, Type, Poster } = props;
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Check if poster is invalid
    if (!Poster || Poster === 'N/A') {
      setImageError(true);
      return;
    }

    // Reset states when Poster changes
    setImageError(false);
    setImageLoaded(false);

    // Create new image instance to preload
    const img = new Image();

    const handleLoad = () => {
      setImageLoaded(true);
      setImageError(false);
    };

    const handleError = () => {
      setImageError(true);
      setImageLoaded(false);
    };

    img.onload = handleLoad;
    img.onerror = handleError;
    img.src = Poster;

    // Cleanup
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [Poster]);

  return (
    <div key={imdbID} className={clsx('card', 'movie', classes.movieCard)}>
      <div className={clsx('card-image', 'waves-effect', 'waves-block', 'waves-light', classes.cardImage)}>
        {!imageError ? (
          <>
            {!imageLoaded && <div className={classes.shimmerLoader} />}
            {imageLoaded && (
              <div className={classes.imageContainer}>
                {/* Blurred background */}
                <div className={classes.blurredBackground} style={{ backgroundImage: `url(${Poster})` }} />
                {/* Main image */}
                <img className={clsx('activator', classes.movieImage)} src={Poster} alt={Title} />
              </div>
            )}
          </>
        ) : (
          <div className={classes.noImageWrapper}>
            <div className={classes.noImageContent}>
              <ImageOff size={48} strokeWidth={1.5} className={classes.noImageIcon} />
              <p className={classes.noImageText}>No Image Available</p>
            </div>
          </div>
        )}
      </div>
      <div className={clsx('card-content', classes.cardContent)}>
        <span
          className={clsx('card-title', 'activator', 'grey-text', 'text-darken-4', classes.cardTitle)}
          title={Title}
        >
          {Title}
        </span>
        <p className={classes.cardSubtitle}>
          {Year} <span>{Type}</span>
        </p>
      </div>
    </div>
  );
}
