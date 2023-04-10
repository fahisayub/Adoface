import React, { useState } from 'react';
import { Box, Input, Heading, Flex, Spacer, IconButton, useToast } from '@chakra-ui/react';
import { FaTrash, FaEdit, FaCheck, FaTimes } from 'react-icons/fa';

const UserList = ({ users, onDelete, onEdit }) => {
    const [editUserId, setEditUserId] = useState(null);
    const [editUserName, setEditUserName] = useState('');
    const toast = useToast();
  
    const handleEdit = (user) => {
      setEditUserId(user.id);
      setEditUserName(user.name);
    };
  
    const handleCancelEdit = () => {
      setEditUserId(null);
      setEditUserName('');
    };
  
    const handleSaveEdit = (user) => {
      if (editUserName === '') {
        toast({
          title: 'Error',
          description: 'Name cannot be empty',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        return;
      }
  
      onEdit({ ...user, name: editUserName });
      setEditUserId(null);
      setEditUserName('');
    };
  
    return (
      <Box>
        <Heading as="h3" size="md" mb={2}>User List</Heading>
        <Box>
          {users.map((user) => (
            <Flex key={user.id} p={2} borderWidth="1px" rounded="md" mb={2}>
              {editUserId === user.id ? (
                <>
                  <Input value={editUserName} onChange={(e) => setEditUserName(e.target.value)} />
                  <Spacer />
                  <IconButton icon={<FaCheck />} onClick={() => handleSaveEdit(user)} mr={2} />
                  <IconButton icon={<FaTimes />} onClick={handleCancelEdit} />
                </>
              ) : (
                <>
                  <Box>{user.name}</Box>
                  <Spacer />
                  <IconButton icon={<FaEdit />} onClick={() => handleEdit(user)} mr={2} />
                  <IconButton icon={<FaTrash />} onClick={() => onDelete(user.id)} />
                </>
              )}
            </Flex>
          ))}
        </Box>
      </Box>
    );
  };
  export default UserList;