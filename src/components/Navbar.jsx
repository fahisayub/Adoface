import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Flex justifyContent={'space-evenly'} p='10px' bg='green'>
            <Link to='/'>Posts</Link>
            <Link to='/users'>Users</Link>
            <Link to='/analytics'>Analytics</Link>
        </Flex>
    );
};

export default Navbar;