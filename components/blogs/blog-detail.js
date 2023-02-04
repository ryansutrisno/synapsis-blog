import {Card, CardHeader, CardBody, Heading, Text} from '@chakra-ui/react';

export default function BlogDetail({title, body}) {
  return (
    <>
      <Card size="lg" variant="elevated">
        <CardHeader>
          <Heading size="md">{title}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{body}</Text>
        </CardBody>
      </Card>
    </>
  );
}
