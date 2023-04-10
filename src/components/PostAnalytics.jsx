import { Box, Text } from '@chakra-ui/react';

const PostAnalytics = ({ totalPosts, topLikedPosts }) => {
  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold">{`Total Posts: ${totalPosts}`}</Text>
      <Text fontSize="xl" fontWeight="bold" mt={4}>{`Top 5 Most Liked Posts:`}</Text>
      <Box mt={2}>
        {topLikedPosts.map((post, index) => (
          <Text key={post.id} fontSize="lg">{`${index + 1}. ${post.content}`}</Text>
        ))}
      </Box>
    </Box>
  );
};

export default PostAnalytics;
