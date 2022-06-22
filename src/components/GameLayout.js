import styled from 'styled-components';
import Camp from './Camp';

export default function GameLayout () {


    return (
        <Container>
            <Camp />
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;