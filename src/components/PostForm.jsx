import { useState } from 'react';
import { FormControl, FormLabel,  Textarea, Button } from '@chakra-ui/react';

const PostForm = ({ onSubmit }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ content });
    setContent('');
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Content</FormLabel>
        <Textarea value={content} onChange={handleContentChange} placeholder="What's on your mind?" />
      </FormControl>
      <Button type="submit" mt={4}>
        Submit
      </Button>
    </form>
  );
};

export default PostForm;
