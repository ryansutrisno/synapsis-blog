import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react';

export default function BlogList({post, onClickDetail}) {
  const {id, title, body, user_id} = post;
  return (
    <Stack key={id}>
      <Card variant="elevated">
        <CardHeader>
          <Heading size="md">{title}</Heading>
        </CardHeader>
        <CardBody>
          <Text noOfLines={[1, 2, 3]}>{body}</Text>
        </CardBody>
        <CardFooter>
          {/* <Button variant="ghost" onClick={() => onClickDetail(id, user_id)}> */}
          <Button variant="ghost">
            <Link href={`/blog/${id}`}>
                Show more
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </Stack>
  );
}
