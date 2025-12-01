import { Component } from 'react';
import Loader from '../components/Loader';
import Movies from '../components/Movies';
import Search from '../components/Search';

const API_KEY = '3a772030';
const API_URL = 'https://www.omdbapi.com';

export default class Main extends Component {
  state = {
    movies: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    this.searchMovie('panda');
  }

  searchMovie = (search = '', type = 'all') => {
    // Validate search input
    if (!search.trim()) {
      return;
    }

    this.setState({ loading: true, error: null });

    const params = {
      apikey: API_KEY,
      s: search.trim(),
    };

    // Only add type if not 'all'
    if (type !== 'all') {
      params.type = type;
    }

    const url = `${API_URL}?${new URLSearchParams(params)}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        if (data.Response === 'True') {
          this.setState({
            movies: data.Search,
            loading: false,
            error: null,
          });
        } else {
          this.setState({
            movies: [],
            loading: false,
            error: data.Error || 'No movies found',
          });
        }
      })
      .catch((error) => {
        console.error('Search error:', error);
        this.setState({
          movies: [],
          loading: false,
          error: 'Failed to fetch movies. Please try again.',
        });
      });
  };

  render() {
    const { movies, loading, error } = this.state;

    return (
      <div className="container content">
        <Search searchMovie={this.searchMovie} />

        {loading && <Loader />}

        {!loading && error && (
          <div className="center-align" style={{ marginTop: '2rem' }}>
            <p style={{ fontSize: '18px', color: '#666' }}>{error}</p>
          </div>
        )}

        {!loading && !error && movies && <Movies movies={movies} />}
      </div>
    );
  }
}
