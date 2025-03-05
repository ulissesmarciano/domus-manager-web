import React from 'react';
import ToggleDarkLightTheme from '../../components/ToggleDarkLightTheme/ToggleDarkLightTheme';
import styled from 'styled-components';


const Home = ({ isSun, toggleTheme }) => {
    return (
        <Container>
            <h1>Olá</h1>
            <ToggleDarkLightTheme
                isSun={isSun}
                toggleTheme={toggleTheme}
            />
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default Home;