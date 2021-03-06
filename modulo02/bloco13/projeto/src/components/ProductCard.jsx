import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  render() {
    const {
      productImg,
      productName,
      productPrice,
      freeShipping,
    } = this.props;
    return (
      <div data-testid="product">
        <h3>{ productName }</h3>
        <img src={ productImg } alt={ productName } />
        <span>{ productPrice }</span>
        <br />
        {freeShipping && <span data-testid="free-shipping">Frete Gratis</span>}
      </div>
    );
  }
}

ProductCard.propTypes = {
  productImg: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
  freeShipping: PropTypes.bool.isRequired,
};
