import styled from 'styled-components';
import { Link } from  'react-router-dom';

export const Container = styled.div`
    display: flex;
    margin: 50px 0;
    align-items: center;
    justify-content: space-between;
`;

export const Cart = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;

    svg {
        transition: transform 0.2s;
    }

    &:hover {
        svg {
            transform: scale(1.08);
        }
    }

    div {
        text-align: right;
        margin-right: 10px;

        strong {
            color: #fff;
            display: block;
        }

        span {
            color: #999;
            font-size: 12px;
        }
    }
`;
