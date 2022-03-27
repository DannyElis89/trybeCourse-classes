import React from 'react';
import PropType from 'prop-types';
import '../App.css';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2>{ headline }</h2>
    );
  }
}

Title.propTypes = {
  headline: PropType.string,
};

Title.defaultProps = {
  headline: 'Missing headline!',
};

export default Title;
