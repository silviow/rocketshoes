import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    padding: 30px;
    background: #fff;
    border-radius: 18px;

    div {
        overflow-x: auto;

        ::-webkit-scrollbar {
            height: 10px;
        }

        ::-webkit-scrollbar-track {
            background: #eee;
            border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
            background: #7159c1;
            border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: ${darken(0.03, '#7159c1')};
        }
    }

    footer {
        display: flex;
        margin-top: 30px;
        align-items: center;
        justify-content: space-between;

        button {
            border: 0;
            color: #fff;
            font-weight: bold;
            padding: 13px 20px;
            background: #7159c1;
            border-radius: 10px;

            &:hover {
                background: ${darken(0.03, '#7159c1')};
            }
        }
    }
`;

export const ProductTable = styled.table`
    width: 100%;

    thead th {
        color: #999;
        padding: 13px;
        text-align: left;
    }
    
    tbody td {
        padding: 13px;
        border-bottom: 1px solid #eee;
    }

    img {
        height: 100px;
    }

    strong {
        color: #333;
        display: block;
    }

    span {
        display: block;
        margin-top: 5px;
        font-size: 18px;
        font-weight: bold;
    }

    div {
        display: flex;
        align-items: center;

        input {
            width: 50px;
            color: #666;
            padding: 6px;
            border-radius: 10px;
            border: 1px solid #ddd;
        }
    }

    button {
        border: 0;
        padding: 6px;
        background: none;
    }
`;

export const Total = styled.div`
    display: flex;
    align-items: baseline;

    ::-webkit-scrollbar {
        display: none;
    }

    span {
        color: #999;
        font-weight: bold;
    }

    strong {
        font-size: 20px;
        margin-left: 5px;
    }

    @media (max-width: 400px) {
        align-items: center;
        flex-direction: column;
    }
`;