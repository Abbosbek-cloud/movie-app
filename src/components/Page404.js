import clsx from 'clsx';
import classes from './styles/not-found.module.css';

export default function Page404() {
  return (
    <div className={clsx('container', classes.errorWrap)}>
      <div className={classes.wrapperText}>
        <span className={classes.errorCode}>404</span>
        <span className={classes.errorText}>Page Not Found</span>
        <p className={classes.errorDescription}>The page you're looking for doesn't exist or has been moved.</p>
        <a href="/" className={clsx('btn', 'waves-effect', 'waves-light', classes.homeButton)}>
          <i className="material-icons left">home</i>
          Back to Home
        </a>
      </div>
    </div>
  );
}
