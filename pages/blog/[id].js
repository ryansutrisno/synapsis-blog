import {useRouter} from 'next/router';
import {Box, Heading, Flex, Button} from '@chakra-ui/react';
import {ChatIcon, ArrowBackIcon} from '@chakra-ui/icons';
import {useRequestComment, useRequestDetail} from '@/hooks/useRequest';
import BlogDetail from '@/components/blogs/blog-detail';
import Comments from '@/components/blogs/blog-comments';

function DetailBlog() {
  const router = useRouter();
  const id = router.query.id;
  const {blog} = useRequestDetail(id);
  const {comments} = useRequestComment(id);

  return (
    <>
      <Box mb="10">
        <Flex alignItems="center" justifyContent="space-between">
          <Heading>Blog Detail</Heading>
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
      <Box mb="3">
        <BlogDetail title={blog?.title} body={blog?.body} />
      </Box>
      <Box mt="10" mb="3">
        <Flex gap="2" alignItems="center" ml="5">
          <Heading size="xs" textTransform="uppercase">
            {comments?.length} Comments
          </Heading>
          <ChatIcon />
        </Flex>
      </Box>
      <Box maxH="10%">
        {comments &&
          comments?.map((item) => (
            <Comments
              key={item.id}
              body={item.body}
              name={item.name}
              email={item.email}
            />
          ))}
      </Box>
    </>
  );
}

export default DetailBlog;
