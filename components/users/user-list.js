/* eslint-disable react-hooks/rules-of-hooks */
import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Td,
  Th,
  Tbody,
  Button,
} from '@chakra-ui/react';
import {DeleteIcon} from '@chakra-ui/icons';

function UserList({users, onClickDelete}) {
  return (
    <>
      <TableContainer
        display="block"
        maxWidth="100%"
        maxHeight="100%"
        overflowX="auto"
      >
        <Table size="sm" variant="striped" colorScheme="gray">
          <TableCaption placement="top">List of Users</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Gender</Th>
              <Th>Email</Th>
              <Th>Status</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users &&
              users?.map(({id, name, email, gender, status}) => (
                <Tr key={id}>
                  <Td>{name}</Td>
                  <Td>{gender}</Td>
                  <Td>{email}</Td>
                  <Td>{status}</Td>
                  <Td>
                    <Button
                      variant="solid"
                      colorScheme="red"
                      size="xs"
                      onClick={() => onClickDelete(id)}
                      leftIcon={<DeleteIcon />}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default UserList;
