import React from 'react';
import { Container, ProductTable, Total } from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdAddCircleOutline, MdRemoveCircleOutline, MdDelete } from 'react-icons/md';
import * as cartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../utils/format';

function Cart({ cart, total, removeFromCart, updateAmount }) {
    function increment(product) {
        updateAmount(product.id, product.amount + 1);
    }
    
    function decrement(product) {
        updateAmount(product.id, product.amount - 1);
    }

    return (
        <Container>
            <div>
                <ProductTable>
                    <thead>
                        <tr>
                            <th />
                            <th>PRODUCT</th>
                            <th>AMOUNT</th>
                            <th>SUBTOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        { cart.map(product => (
                            <tr>
                                <td>
                                    <img src={product.image} alt={product.title} />
                                </td>
                                <td>
                                <strong>{product.title}</strong> 
                                <span>{product.priceFormatted}</span>
                                </td>
                                <td>
                                    <div>
                                        <button type="button" onClick={() => decrement(product)} >
                                            <MdRemoveCircleOutline size={20} color="#7159c1" />
                                        </button>
                                        <input type="number" value={product.amount} readOnly />
                                        <button type="button" onClick={() => increment(product)}>
                                            <MdAddCircleOutline size={20} color="#7159c1" />
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <strong>{product.subtotal}</strong>
                                </td>
                                <td>
                                    <button type="button" onClick={() => removeFromCart(product.id)} >
                                        <MdDelete size={20} color="#7159c1" />
                                    </button> 
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </ProductTable>
            </div>
            <footer>
                <button type="button">GO TO CHECKOUT</button>
                <Total>
                    <span>TOTAL</span>
                    <strong>{total}</strong>
                </Total>
            </footer>
        </Container>
    );
}

const mapStateToProps = state => ({
    cart: state.cart.map(product => ({
        ...product,
        subtotal: formatPrice(product.price * product.amount),
    })),
    total: formatPrice(state.cart.reduce((total, product) => {
        return total + product.price * product.amount;
    }, 0)),
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(cartActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);