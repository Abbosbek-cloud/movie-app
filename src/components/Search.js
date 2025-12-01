import { Component } from 'react';
import clsx from 'clsx';
import classes from './styles/search.module.css';

export default class Search extends Component {
  state = {
    search: 'panda',
    type: 'all',
  };

  handleKey = (e) => {
    if (e.key === 'Enter') {
      this.props.searchMovie(this.state.search, this.state.type);
    }
  };

  handleBtn = (e) => {
    this.props.searchMovie(this.state.search, this.state.type);
  };

  handleFilter = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.searchMovie(this.state.search, this.state.type);
      },
    );
  };

  render() {
    return (
      <div className={clsx('row', classes.searchWrapper)}>
        <div className={clsx('col', 's12', classes.searchContainer)}>
          <div className={classes.searchBox}>
            <div className={clsx('input-field', classes.inputField)}>
              <i className="material-icons prefix">search</i>
              <input
                id="search_input"
                placeholder="Search for movies, series..."
                type="search"
                className={clsx('validate', classes.searchInput)}
                value={this.state.search}
                onChange={(e) => this.setState({ search: e.target.value })}
                onKeyDown={this.handleKey}
              />
              <button
                className={clsx('btn', 'waves-effect', 'waves-light', classes.searchBtn)}
                onClick={this.handleBtn}
              >
                <i className="material-icons">search</i>
              </button>
            </div>
          </div>

          <div className={classes.filterContainer}>
            <span className={classes.filterLabel}>Filter by:</span>
            <div className={classes.filterOptions}>
              <label className={classes.radioLabel}>
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  data-type="all"
                  onChange={this.handleFilter}
                  checked={this.state.type === 'all'}
                />
                <span>All</span>
              </label>
              <label className={classes.radioLabel}>
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  data-type="movie"
                  onChange={this.handleFilter}
                  checked={this.state.type === 'movie'}
                />
                <span>Movies</span>
              </label>
              <label className={classes.radioLabel}>
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  data-type="series"
                  onChange={this.handleFilter}
                  checked={this.state.type === 'series'}
                />
                <span>Series</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
