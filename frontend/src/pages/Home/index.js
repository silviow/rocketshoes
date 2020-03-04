import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../utils/format';

export default class Home extends Component {
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

    render() {
        const { products } = this.state;

        return (
            <ProductList>
                { products.map(product => (
                    <li key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <strong>{product.title}</strong>
                        <span>{product.priceFormatted}</span>
                        <button type="button">
                            <div>
                                <MdAddShoppingCart size={16} color="#fff" /> 3
                            </div>
                            <span>ADD TO CART</span>
                        </button>
                    </li>
                )) }
            </ProductList>
        );
    }
}
