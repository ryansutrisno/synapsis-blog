import Link from 'next/link';
import {Flex, Box, Heading} from '@chakra-ui/react';

function Header() {
  return (
    <Box bg='blue.600' p="3" as="header">
      <Flex
        minWidth="max-content"
        alignItems="center"
        justify="space-between"
        gap="2"
      >
        <Box color='whiteAlpha.900' p="2">
          <Heading size="md">
            <Link href="/">Synapsis Blog</Link>
          </Heading>
        </Box>
        <Box color='whiteAlpha.900' p="2">
          <Heading size="sm">
            <Link href="/users">Users</Link>
          </Heading>
        </Box>
      </Flex>
    </Box>
  );
}

export default Header;
