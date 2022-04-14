import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, totalDespesas } = this.props;

    return (
      <header>
        <h4 data-testid="email-field">{ email }</h4>
        <h4>
          <span data-testid="total-field">
            {totalDespesas || 0}
          </span>
          {' '}
          <span data-testid="header-currency-field">Moeda: BRL</span>
        </h4>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  totalDespesas: state.wallet.total,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalDespesas: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
