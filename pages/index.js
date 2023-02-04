import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Heading,
  Text,
  Stack,
  useToast,
} from '@chakra-ui/react';
import SEO from '@/components/seo';
import BlogList from '@/components/blogs/blog-list';
import {useRequest, useRequestDetail} from '@/hooks/useRequest';

export default function Home() {
  const router = useRouter();
  const toast = useToast();
  const [idUser, setIdUser] = useState('');
  const {
    datas: posts,
    error,
    isLoadingMore,
    size,
    setSize,
    isReachingEnd,
  } = useRequest('posts');
  const {data: user} = useRequestDetail(idUser);
  console.log('userId', user)
  console.log('posts', posts);
  if (error)
    return toast({
      position: 'top-left',
      render: () => (
        <Box color="white" p={3} bg="red.500">
          Error ocured
        </Box>
      ),
    });

    const handleClickDetail = (postId, userId) => {
      // console.log('id', userId)
      console.log('id', postId)
      router.push(userId)
      // setIdUser(userId);
    }
  return (
    <>
      <SEO />
      <Box mb="2">
        <Heading>List Blog</Heading>
      </Box>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
      >
        {posts.map((post, idx) => (
            <BlogList post={post} key={idx} onClickDetail={handleClickDetail} />
        ))}
      </SimpleGrid>
      <Stack mt="5" justify="center" direction="row" align="center">
        <Button
          isLoading={isLoadingMore}
          disabled={isLoadingMore || isReachingEnd}
          onClick={() => setSize(size + 1)}
          loadingText="Load more"
        >
          {isReachingEnd ? 'No more posts' : 'Load more posts'}
        </Button>
      </Stack>
    </>
  );
}
