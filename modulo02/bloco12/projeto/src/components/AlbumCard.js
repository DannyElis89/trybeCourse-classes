import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class AlbumCard extends React.Component {
  render() {
    const {
      collectionId,
      artistName,
      collectionName,
      thumbnail,
      datatestid,
    } = this.props;

    return (
      <article>

        <Link
          to={ `/album/${collectionId}` }
          data-testid={ datatestid }
        >
          <img src={ thumbnail } alt={ collectionName } />
          <h5>{collectionName}</h5>
          <h6>{artistName}</h6>
          Detalhes
        </Link>
      </article>
    );
  }
}

AlbumCard.propTypes = {
  datatestid: PropTypes.string.isRequired,
  collectionId: PropTypes.number.isRequired,
  artistName: PropTypes.string.isRequired,
  collectionName: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default AlbumCard;
