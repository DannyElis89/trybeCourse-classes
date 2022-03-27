import React from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from '../components/Loading';
import AlbumCard from '../components/AlbumCard';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      searchInput: '',
      artista: '',
      disableButton: true,
      loading: false,
      albums: [],
    };
  }

  handleChange = ({ target }) => {
    const caracterMin = 2;

    this.setState({
      searchInput: target.value,
      disableButton: (target.value.length < caracterMin),
    });
  }

  searchArtist = async () => {
    const {
      searchInput,
    } = this.state;

    this.setState({
      searchInput: '',
      loading: true,
    });

    const albumList = await searchAlbumsAPI(searchInput);

    this.setState({
      albums: [...albumList],
      artista: searchInput,
      searchInput: '',
      loading: false,

    });
  }

  render() {
    const {
      searchInput,
      disableButton,
      loading,
      albums,
      artista,
    } = this.state;

    return (
      <div data-testid="page-search">
        <Header />
        {!loading
        && (
          <div>
            <label htmlFor="input-search">
              <input
                data-testid="search-artist-input"
                id="input-search"
                name="searchInput"
                onChange={ this.handleChange }
                value={ searchInput }
              />
            </label>
            <Button
              datatestid="search-artist-button"
              name="enableButton"
              disabled={ disableButton }
              onClick={ this.searchArtist }
              text="Pesquisar"
            />
          </div>
        )}
        {loading && <Loading />}
        <section>
          {albums.length === 0
            ? <h4>Nenhum álbum foi encontrado</h4>
            : (
              <h4>
                Resultado de álbuns de:
                {' '}
                {artista}
              </h4>
            )}
        </section>
        <section>
          {albums.map((album) => ((
            <AlbumCard
              key={ album.collectionId }
              collectionId={ album.collectionId }
              artistName={ album.artistName }
              collectionName={ album.collectionName }
              price={ album.collectionPrice }
              thumbnail={ album.artworkUrl100 }
              realeaseDate={ album.realeaseDate }
              trackCount={ album.trackCount }
              datatestid={ `link-to-album-${album.collectionId}` }
            />
          )))}
        </section>
      </div>
    );
  }
}

export default Search;
