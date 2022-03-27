import React from 'react';
import PropType from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      musicList: [],
      colection: undefined,
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.searchAlbum(id);
  }

  searchAlbum = async (id) => {
    const retorno = await getMusics(id);
    this.setState({ colection: retorno[0] });
    const listMusicsReturned = retorno.filter((elem) => elem.kind === 'song');
    this.setState({ musicList: [...listMusicsReturned] });
  }

  render() {
    const {
      musicList,
      colection,
    } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        {musicList.length > 0
          && (
            <>
              <h3 data-testid="artist-name">
                Artista:
                {' '}
                {colection.artistName}
              </h3>
              <h3 data-testid="album-name">
                Album:
                {' '}
                {colection.collectionName}
              </h3>
            </>)}

        {musicList.length > 0
          && musicList.map((music, index) => ((
            <MusicCard
              key={ index }
              infosMusic={ music }
              musicName={ music.trackName }
              previewUrl={ music.previewUrl }
              trackId={ music.trackId }
            />
          )))}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropType.shape({
    params: PropType.shape({
      id: PropType.string,
    }),
  }).isRequired,

};

export default Album;
