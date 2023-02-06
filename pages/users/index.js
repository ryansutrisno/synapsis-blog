/* eslint-disable react/no-children-prop */
import {useState} from 'react';
import {useRouter} from 'next/router';
import {
  Box,
  Heading,
  Flex,
  Button,
  InputGroup,
  InputLeftElement,
  Input,
  Stack,
  useToast,
} from '@chakra-ui/react';
import {ArrowBackIcon, SearchIcon} from '@chakra-ui/icons';
import {useRequest} from '@/hooks/useRequest';
import UserList from '@/components/users/user-list';

function Users() {
  const toast = useToast();
  const router = useRouter();
  const [valueSearch, setValueSearch] = useState('');
  const {
    datas: users,
    error,
    isLoadingMore,
    size,
    setSize,
    isReachingEnd,
    mutate,
  } = useRequest('users');

  if (error)
    return toast({
      position: 'top-left',
      render: () => (
        <Box color="white" p={3} bg="red.500">
          Error ocured
        </Box>
      ),
    });

  const handleChangeSearch = (e) => {
    setValueSearch(e.target.value);
  };

  const handleDelete = (id) => {
    const url = process.env.NEXT_PUBLIC_BASE_URL;
    const config = {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    };
    fetch(`${url}users/${id}`, config)
      .then((res) => {
        if (res.status === 204) {
          return toast({
            title: 'User deleted',
            position: 'top-left',
            status: 'success',
            duration: 5000,
            isClosable: true,
          });
        }
      })
      .catch((err) => console.log(err));
    setTimeout(() => {
      mutate(users);
    }, 500);
  };

  const filteredUser = users?.filter((value) => {
    if (setValueSearch === '') {
      return value;
    } else if (value.name?.toLowerCase().includes(valueSearch?.toLowerCase())) {
      return value;
    } else if (
      value.email?.toLowerCase().includes(valueSearch?.toLowerCase())
    ) {
      return value;
    }
  });

  return (
    <>
      <Box mb="10">
        <Flex alignItems="center" justifyContent="space-between">
          <Heading>List Users</Heading>
          <Button
            leftIcon={<ArrowBackIcon />}
            onClick={() => router.back()}
            colorScheme="gray"
            variant="ghost"
          >
            Back
          </Button>
        </Flex>
      </Box>
      <Stack>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            type="text"
            placeholder="Name or email"
            onChange={handleChangeSearch}
          />
        </InputGroup>
      </Stack>
      <UserList
        users={filteredUser}
        onClickDelete={handleDelete}
        loading={isLoadingMore}
      />
      <Box mt="5" justify="center" direction="row" align="center">
        <Button
          isLoading={isLoadingMore}
          isDisabled={
            isLoadingMore ||
            isReachingEnd ||
            filteredUser.length === 0 ||
            filteredUser.length < 10
          }
          onClick={() => setSize(size + 1)}
        >
          {isReachingEnd ? 'No more users' : 'Load more users'}
        </Button>
      </Box>
    </>
  );
}

export default Users;
