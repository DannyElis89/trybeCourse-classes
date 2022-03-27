import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { FaSearch, FaHeart, FaUserAlt } from 'react-icons/fa';
import Loading from './Loading';
import { getUser } from '../services/userAPI';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      usuario: '',
      carregando: false,
    };
  }

  componentDidMount() {
    this.newUser();
  }

  newUser = async () => {
    this.setState({ carregando: true });
    const infosUser = await getUser();

    this.setState({
      usuario: infosUser.name,
      carregando: false,
    });
  }

  render() {
    const {
      carregando,
      usuario,
    } = this.state;
    const text = `Olá, ${usuario}!`;

    return (
      <header
        data-testid="header-component"
      >

        { carregando
          ? <Loading />
          : <h3 data-testid="header-user-name">{text}</h3>}
        <section>
          <Link to="/search" data-testid="link-to-search">
            Buscar
            {' '}
            <FaSearch />
          </Link>
          <Link to="/favorites" data-testid="link-to-favorites">
            Favoritos
            {' '}
            <FaHeart />
          </Link>
          <Link to="/profile" data-testid="link-to-profile">
            Perfil
            {' '}
            <FaUserAlt />
          </Link>
        </section>
      </header>
    );
  }
}

export default Header;
