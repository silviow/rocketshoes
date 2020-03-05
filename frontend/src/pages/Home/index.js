import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../utils/format';
import * as cartActions from '../../store/modules/cart/actions';

class Home extends Component {
    constructor() {
        super();

        this.state = {
            products: [],
        }
    }

    async componentDidMount() {
        const response = await api.get('products');

        const data = response.data.map(product => ({
            ...product,
            priceFormatted: formatPrice(product.price).replace(/\xA0/, ""),
        }));

        this.setState({ products: data });
    }

    handleAddProduct = product => {
        const { addToCart } = this.props;

        addToCart(product);
    }

    render() {
        const { products } = this.state;
        const { amount } = this.props;

        return (
            <ProductList>
                { products.map(product => (
                    <li key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <strong>{product.title}</strong>
                        <span>{product.priceFormatted}</span>
                        <button type="button" onClick={() => this.handleAddProduct(product)}>
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