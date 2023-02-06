import {Box, SimpleGrid, Button, Heading, useToast} from '@chakra-ui/react';
import SEO from '@/components/seo';
import BlogList from '@/components/blogs/blog-list';
import {useRequest} from '@/hooks/useRequest';

export default function Home() {
  const toast = useToast();
  const {
    datas: posts,
    error,
    isLoadingMore,
    size,
    setSize,
    isReachingEnd,
  } = useRequest('posts');

  if (error)
    return toast({
      position: 'top-left',
      render: () => (
        <Box color="white" p={3} bg="red.500">
          Error ocured
        </Box>
      ),
    });

  return (
    <>
      <SEO />
      <Box mb="2">
        <Heading>List Blog</Heading>
      </Box>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        {posts.map((post, idx) => (
          <BlogList post={post} key={idx} />
        ))}
      </SimpleGrid>
      <Box mt="5" justify="center" direction="row" align="center">
        <Button
          isLoading={isLoadingMore}
          isDisabled={isLoadingMore || isReachingEnd}
          onClick={() => setSize(size + 1)}
        >
          {isReachingEnd ? 'No more posts' : 'Load more posts'}
        </Button>
      </Box>
    </>
  );
}
