import {Box, Container} from '@chakra-ui/react';
import Navbar from './navbar';

function Layout({children}) {
  return (
    <>
      <Navbar />
      <Container p="5" minW="80%" minH="100vh">
        {children}
      </Container>
    </>
  );
}

export default Layout;
