import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../utils/format';
import * as cartActions from '../../store/modules/cart/actions';

function Home({ amount, addToCartRequest }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get('products');

            const data = response.data.map(product => ({
                ...product,
                priceFormatted: formatPrice(product.price).replace(/\xA0/, ""),
            }));

            setProducts(data);
        }

        loadProducts();
    }, []);

    function handleAddProduct(id) {
        addToCartRequest(id);
    }

    return (
        <ProductList>
            { products.map(product => (
                <li key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>
                    <button type="button" onClick={() => handleAddProduct(product.id)}>
                        <div>
                            <MdAddShoppingCart size={16} color="#fff" />
                            {amount[product.id] || 0}
                        </div>
                        <span>ADD TO CART</span>
                    </button>
                </li>
            )) }
        </ProductList>
    );
}

const mapStateToProps = state => ({
    amount: state.cart.reduce((amount, product) => {
        amount[product.id] = product.amount;

        return amount;
    }, {}),
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(cartActions, dispatch)
}

export default new connect(mapStateToProps, mapDispatchToProps)(Home);