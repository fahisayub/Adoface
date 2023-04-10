import { Box, Text, Button } from "@chakra-ui/react";

const PostList = ({
  posts,
  handleEdit,
  handleDelete,
  handleLike,
  handleUnlike,
}) => {
  return (
    <Box>
      {posts.map((post) => (
        <Box key={post.id} p={4} borderWidth="1px" borderRadius="lg" mb={4}>
          <Text fontSize="xl">{post.content}</Text>
          <Box
            mt={2}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text fontSize="sm">{`Posted by ${post.user.name}`}</Text>
            <Box>
              <Button
                size="sm"
                colorScheme="teal"
                variant="outline"
                mr={2}
                onClick={() => handleEdit(post)}
              >
                Edit
              </Button>
              <Button
                size="sm"
                colorScheme="red"
                variant="outline"
                mr={2}
                onClick={() => handleDelete(post)}
              >
                Delete
              </Button>
              <Button
                size="sm"
                colorScheme="blue"
                variant="outline"
                mr={2}
                onClick={() => handleLike(post)}
              >
                Like
              </Button>
              <Button
                size="sm"
                colorScheme="purple"
                variant="outline"
                onClick={() => handleUnlike(post)}
              >
                Unlike
              </Button>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default PostList;
