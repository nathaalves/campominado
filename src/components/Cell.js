import styled from 'styled-components';

const Cell = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 20px;
    height: 20px;
    background-color: ${props => props.color }
    /* border-right: 2px solid ;
    border-bottom: 2px solid black;
    border-top: 2px solid white;
    border-left: 2px solid white; */
`;

export default Cell;