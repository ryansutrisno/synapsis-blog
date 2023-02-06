import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
} from '@chakra-ui/react';
import {HamburgerIcon, CloseIcon} from '@chakra-ui/icons';
import Link from 'next/link';
import DarkModeSwitch from '../ui/DarkModeSwitch';
import navStyles from './navbar.module.css';
const Links = [
  {
    id: 1,
    name: 'Home',
    path: '/',
  },
  {
    id: 2,
    name: 'All Users',
    path: '/users',
  },
];

const NavLink = ({children, path}) => (
  <Box
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
  >
    <Link href={path}>{children}</Link>
  </Box>
);

export default function Navbar() {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <div className={navStyles.mobileNav}>
      <Box boxShadow="lg" bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <HStack spacing={8} alignItems={'center'}>
            <Heading size="md">
              <Link href="/">Synapsis Blog</Link>
            </Heading>
            <HStack as={'nav'} spacing={4} display={{base: 'none', md: 'flex'}}>
              {Links.map(({id, name, path}) => (
                <NavLink key={id} path={path}>
                  {name}
                </NavLink>
              ))}
              <DarkModeSwitch />
            </HStack>
          </HStack>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{md: 'none'}}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{md: 'none'}}>
            <Stack as={'nav'} spacing={4}>
              {Links.map(({id, name, path}) => (
                <NavLink key={id} path={path}>
                  {name}
                </NavLink>
              ))}
            </Stack>
            <DarkModeSwitch />
          </Box>
        ) : null}
      </Box>
    </div>
  );
}
