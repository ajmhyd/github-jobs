import {
  Box,
  Button,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/core';
import {
  Search as SearchIcon,
  Briefcase as BriefcaseIcon,
} from 'react-feather';

const Search = () => {
  return (
    <Container>
      <InputGroup variant="filled" size="md">
        <InputLeftElement
          width="3rem"
          children={<BriefcaseIcon color="gray" />}
        />
        <Input
          placeholder="Title, companies, expertise or benefits"
          focusBorderColor="blue.200"
          borderRadius="md"
          id="algolia-search"
          aria-label="Search Chakra UI docs"
          size="lg"
        />
        <InputRightElement width="5.5rem">
          <Button size="sm" colorScheme="blue">
            Search
          </Button>
        </InputRightElement>
      </InputGroup>
    </Container>
  );
};

export default Search;
