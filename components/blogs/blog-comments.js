import {Box, Heading, Text, Card, CardHeader, CardBody} from '@chakra-ui/react';

function Comments({body, name, email}) {
  return (
    <>
      <Card size="sm" mt="3" variant="elevated">
        <CardHeader>
          <Heading size="xs">{body}</Heading>
        </CardHeader>
        <CardBody>
          <Box>
            <Text pt="2" fontSize="xs" fontStyle="italic">
              from : {name}
            </Text>
            <Text pt="1" fontSize="x-small" fontStyle="italic">
              email : {email}
            </Text>
          </Box>
        </CardBody>
      </Card>
    </>
  );
}

export default Comments;
