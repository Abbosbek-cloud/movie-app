import classes from './styles/loader.module.css';

export default function Loader() {
  return (
    <div className={classes.loaderGrid}>
      {Array(12)
        .fill(0)
        .map((_, index) => (
          <div key={index} className={classes.cardShimmer}>
            <div className={classes.imageShimmer}></div>
            <div className={classes.contentShimmer}>
              <div className={classes.titleShimmer}></div>
              <div className={classes.textShimmer}></div>
            </div>
          </div>
        ))}
    </div>
  );
}
