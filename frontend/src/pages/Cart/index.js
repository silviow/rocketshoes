import React from 'react';
import { Container, ProductTable, Total } from './styles';
import { MdAddCircleOutline, MdRemoveCircleOutline, MdDelete } from 'react-icons/md';

export default function Cart() {
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
                        <tr>
                            <td>
                                <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-feminino/26/HZM-1729-026/HZM-1729-026_zoom2.jpg?ims=326x" alt="Tênis Nike Revolution 5" />
                            </td>
                            <td>
                            <strong>Tênis Nike Revolution 5</strong> 
                            <span>R$189,99</span>
                            </td>
                            <td>
                                <div>
                                    <button type="button">
                                        <MdAddCircleOutline size={20} color="#7159c1" />
                                    </button>
                                    <input type="number" value={3} readOnly />
                                    <button type="button">
                                        <MdRemoveCircleOutline size={20} color="#7159c1" />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>R$569,97</strong>
                            </td>
                            <td>
                                <button type="button">
                                    <MdDelete size={20} color="#7159c1" />
                                </button> 
                            </td>
                        </tr>
                    </tbody>
                </ProductTable>
            </div>
            <footer>
                <button type="button">GO TO CHECKOUT</button>
                <Total>
                    <span>TOTAL</span>
                    <strong>R$569,97</strong>
                </Total>
            </footer>
        </Container>
    );
}
