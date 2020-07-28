import { Box, Button, Text } from '@chakra-ui/core';

const Footer = () => (
  <Box as="footer" mt={12} textAlign="center">
    <Text fontSize="sm">
      Made with ❤ by{' '}
      <Button as="a" href="https://github.com/ajmhyd" variant="link" color="gray.7">
        Tësh
      </Button>
    </Text>
  </Box>
);

export default Footer;
