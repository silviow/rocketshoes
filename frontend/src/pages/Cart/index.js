import React from 'react';
import { Container, ProductTable, Total } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { MdAddCircleOutline, MdRemoveCircleOutline, MdDelete } from 'react-icons/md';
import * as cartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../utils/format';

export default function Cart() {
    const total = useSelector(state => formatPrice(state.cart.reduce((totalSum, product) => {
            return totalSum + product.price * product.amount;
        }, 0))
    );

    const cart = useSelector(state => state.cart.map(product => ({
            ...product,
            subtotal: formatPrice(product.price * product.amount),
        }))
    );

    const dispatch = useDispatch();

    function increment(product) {
        dispatch(cartActions.updateAmountRequest(product.id, product.amount + 1));
    }
    
    function decrement(product) {
        dispatch(cartActions.updateAmountRequest(product.id, product.amount - 1));
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
                            <tr key={product.id}>
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
                                    <button type="button" onClick={() => dispatch(cartActions.removeFromCart(product.id))} >
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