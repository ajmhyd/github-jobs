import {
  Badge,
  Box,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import moment from 'moment';
import { Clock as ClockIcon, Compass as CompassIcon } from 'react-feather';
import ReactMarkdown from 'react-markdown';

import { Job } from '../interfaces';

type Props = {
  job: Job;
};
const ListDetail = ({ job }: Props) => {
  const fallbackImage = useColorModeValue(
    '/img/GitHub-Mark-120px-plus.png',
    '/img/GitHub-Mark-Light-120px-plus.png'
  );

  return (
    <VStack align='flex-start'>
      <Box display={{ md: 'flex' }} alignItems='center'>
        <Heading as='h2' size='xl' mr={3}>
          {job.title}
        </Heading>
        <Box>
          <Badge colorScheme='green' variant='outline'>
            {job.type}
          </Badge>
        </Box>
      </Box>
      <Flex align='center' ml={2}>
        <ClockIcon size={12} />
        <Text fontSize='xs' mx={1}>
          {moment(new Date(job.created_at)).startOf('day').fromNow()}
        </Text>
      </Flex>
      <Box d='flex' pt={4}>
        <Image
          borderRadius='sm'
          src={job.company_logo}
          boxSize='48px'
          objectFit='cover'
          fallbackSrc={fallbackImage}
          mr={2}
        />
        <VStack align='flex-start'>
          <Text fontSize='sm' fontWeight='bold'>
            {job.company}
          </Text>
          <Flex align='center'>
            <CompassIcon size={12} />
            <Text fontSize='xs' mx={1}>
              {job.location}
            </Text>
          </Flex>
        </VStack>
      </Box>
      <ReactMarkdown source={job.description} />
    </VStack>
  );
};

export default ListDetail;
