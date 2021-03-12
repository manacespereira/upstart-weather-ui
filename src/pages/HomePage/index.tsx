import React from 'react';
import Weather from './components/Weather';

import { Container } from './styles';

const HomePage: React.FC = () => {
  return (
    <Container xpto="xpto">
      <Weather />
    </Container>
  );
};

export default HomePage;
