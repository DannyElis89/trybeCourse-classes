import React from 'react';
import PropType from 'prop-types';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends React.Component {
  constructor() {
    super();

    this.state = {
      checked: false,
      loading: false,
      musicasFavoritadas: [],
    };
  }

  componentDidMount() {
    this.checkFavorites();
  }

  checkFavorites = async () => {
    this.setState({ loading: true });

    const favoritesMusics = await getFavoriteSongs();

    this.setState({
      loading: false,
      musicasFavoritadas: favoritesMusics,
    }, this.initialCheck);
  }

  initialCheck = () => {
    const { infosMusic } = this.props;
    const { musicasFavoritadas } = this.state;

    const verifyFavorites = musicasFavoritadas
      .find((musica) => musica.trackId === infosMusic.trackId);

    if (verifyFavorites) {
      this.setState({ checked: true });
    }
  }

  handleCheckbox = async () => {
    this.setState((prevState) => ({
      checked: !prevState.checked,
      loading: !prevState.loading,
    }));

    const { infosMusic } = this.props;

    await addSong(infosMusic);

    this.setState((prevState) => ({
      loading: !prevState.loading,
    }));
  }

  render() {
    const {
      musicName,
      previewUrl,
      trackId,
    } = this.props;

    const {
      loading,
      checked,
    } = this.state;

    return (
      <div>
        { musicName }
        <audio
          data-testid="audio-component"
          src={ previewUrl }
          controls
        >
          <track kind="captions" />
        </audio>
        <label htmlFor="input-checkbox">
          Favorita
          <input
            type="checkbox"
            id="input-checkbox"
            data-testid={ `checkbox-music-${trackId}` }
            onChange={ this.handleCheckbox }
            checked={ checked }
          />
        </label>
        {loading && <Loading />}
      </div>
    );
  }
}

MusicCard.propTypes = {
  musicName: PropType.string.isRequired,
  previewUrl: PropType.string.isRequired,
  trackId: PropType.number.isRequired,
  infosMusic: PropType.shape({
    trackName: PropType.string.isRequired,
    previewUrl: PropType.string.isRequired,
    trackId: PropType.number.isRequired,
  }).isRequired,
};

export default MusicCard;
