import { Box, Text } from '@chakra-ui/react';

const UserAnalytics = ({ totalUsers, topActiveUsers }) => {
  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold">{`Total Users: ${totalUsers}`}</Text>
      <Text fontSize="xl" fontWeight="bold" mt={4}>{`Top 5 Most Active Users:`}</Text>
      <Box mt={2}>
        {topActiveUsers.map((user, index) => (
          <Text key={user.id} fontSize="lg">{`${index + 1}. ${user.name}`}</Text>
        ))}
      </Box>
    </Box>
  );
};

export default UserAnalytics;
