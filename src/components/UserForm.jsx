import { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';

const UserForm = ({ user, onSubmit }) => {
  const toast = useToast();
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [bio, setBio] = useState(user ? user.bio : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { name, email, bio };
      const res = await axios.post('/api/users', data);
      toast({
        title: 'Success!',
        description: 'User saved successfully.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      onSubmit(res.data);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong, please try again later.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl id="name">
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="bio">
        <FormLabel>Bio</FormLabel>
        <Textarea
          placeholder="Enter bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </FormControl>
      <Button type="submit" mt={4}>
        Submit
      </Button>
    </form>
  );
};

export default UserForm;
