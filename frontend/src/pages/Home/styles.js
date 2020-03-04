import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
    display: grid;
    grid-gap: 20px;
    list-style: none;
    grid-template-columns: repeat(3, 1fr);

    li {
        display: flex;
        padding: 20px;
        background: #fff;
        border-radius: 18px;
        flex-direction: column;

        img {
            max-width: 250px;
            align-self: center;
        }

        > strong {
            color: #333;
            margin-top: 5px;
            font-size: 16px;
            line-height: 20px;
        }

        > span {
            font-size: 20px;
            font-weight: bold;
            margin: 5px 0 20px;
        }

        button {
            border: 0;
            color: #fff;
            display: flex;
            overflow: hidden;
            margin-top: auto;
            background: #7159c1;
            border-radius: 10px;
            align-items: center;

            &:hover {
                background: ${darken(0.03, '#7159c1')}
            }

            div {
                display: flex;
                align-items: center;
                padding: 13px;
                background: rgba(0,0,0,0.1);
                
                svg {
                    margin-right: 5px;
                }
            }

            span {
                flex: 1;
                font-weight: bold;
                text-align: center;
            }
        }
    }
`;
