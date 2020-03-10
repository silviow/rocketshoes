import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Cart } from './styles';
import { MdShoppingBasket } from 'react-icons/md';
import logo from '../../assets/logo.svg';


export default function Header() {
    const cartSize = useSelector(state => state.cart.length);

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