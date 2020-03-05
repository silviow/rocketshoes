import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Cart } from './styles';
import { MdShoppingBasket } from 'react-icons/md';
import logo from '../../assets/logo.svg';


function Header({ cartSize }) {
    return (
        <Container>
            <Link to="/">
                <img className="logo" src={logo} alt="Rocketshoes" />
            </Link>
            <Cart to="/cart">
                <div>
                    <strong>My cart</strong>
                    <span>{cartSize}</span>
                </div>
                <MdShoppingBasket size={36} color="#fff" />
            </Cart>
        </Container>
    );
}

export default connect(state => ({
    cartSize: state.cart.length,
}))(Header);