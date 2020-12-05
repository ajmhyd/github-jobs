import {
  Flex,
  IconButton,
  Spacer,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { Moon as MoonIcon, Sun as SunIcon } from 'react-feather';

const Header = () => {
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);

  return (
    <Flex>
      <Text fontSize='2xl' fontWeight='bold'>
        Github
      </Text>
      &nbsp;
      <Text fontSize='2xl'>Jobs</Text>
      <Spacer />
      <IconButton
        size='md'
        fontSize='lg'
        aria-label={`Switch to ${text} mode`}
        variant='ghost'
        color='current'
        marginLeft='2'
        onClick={toggleMode}
        icon={<SwitchIcon />}
      />
    </Flex>
  );
};

export default Header;
