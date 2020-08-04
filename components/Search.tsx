import { useState } from 'react';
import {
  Button,
  CloseButton,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/core';
import {
  Briefcase as BriefcaseIcon,
} from 'react-feather';

type Props = {
  search: string;
  setSearch: (search: string) => void;
}

const Search = ({ search, setSearch }: Props) => {
  const [searchInput, setSearchInput] = useState("");
  const handleClick = () => {
    setSearch(searchInput);
  }
  const handleKeydown = (e) => {
    if (e.key === 'Enter') {
      setSearch(searchInput);
    }
  }
  const handleClear = () => {
    setSearchInput("");
    setSearch("");
  }
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
          aria-label="Search for jobs"
          size="lg"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={handleKeydown}
        />
        <InputRightElement width="7.5rem">
          <Button size="sm" colorScheme="blue" onClick={handleClick}>
            Search
          </Button>
          <CloseButton size="md" onClick={handleClear} />
        </InputRightElement>
      </InputGroup>
    </Container>
  );
};

export default Search;
