import { useState } from 'react';
import {
  Box,
  Button,
  CloseButton,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Radio,
  RadioGroup,
  Switch,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Compass as CompassIcon } from 'react-feather';

type Props = {
  fullTime: boolean;
  location: string;
  setFullTime: (fullTime: boolean) => void;
  setLocation: (location: string) => void;
};

const Location = ({ fullTime, setFullTime, location, setLocation }: Props) => {
  const [locationInput, setLocationInput] = useState('');

  const handleClear = () => {
    setLocationInput('');
    setLocation('all');
  };

  const handleClick = () => {
    setLocation(locationInput);
  };

  const handleChange = (e) => {
    setLocationInput('');
    setLocation(e);
  };

  const handleKeydown = (e) => {
    if (e.key === 'Enter') {
      setLocation(locationInput);
    }
  };

  return (
    <Box maxW='xs' w='100%' py='4'>
      <FormControl as={Flex}>
        <Switch
          isChecked={fullTime}
          onChange={() => setFullTime(!fullTime)}
          id='full-time'
        />
        <FormLabel htmlFor='full-time' ml={2}>
          Full Time
        </FormLabel>
      </FormControl>
      <Text
        fontSize='sm'
        textTransform='uppercase'
        fontWeight='bold'
        color='gray'
        py='4'
      >
        Location
      </Text>
      <InputGroup variant='filled' size='md'>
        <InputLeftElement
          width='3rem'
          children={<CompassIcon color='gray' />}
        />
        <Input
          placeholder='City, state, zip or country'
          focusBorderColor='blue.200'
          borderRadius='md'
          aria-label='Search by location'
          size='lg'
          value={locationInput}
          onChange={(e) => setLocationInput(e.target.value)}
          onKeyDown={handleKeydown}
        />
        <InputRightElement width='7.5rem'>
          <Button size='sm' colorScheme='blue' onClick={handleClick}>
            Search
          </Button>
          <CloseButton size='md' onClick={handleClear} />
        </InputRightElement>
      </InputGroup>
      <RadioGroup onChange={handleChange} value={location}>
        <VStack align='flex-start' py='4'>
          <Radio value='chicago'>Chicago</Radio>
          <Radio value='newyork'>New York</Radio>
          <Radio value='losangeles'>Los Angeles</Radio>
          <Radio value='austin'>Austin</Radio>
        </VStack>
      </RadioGroup>
    </Box>
  );
};

export default Location;
