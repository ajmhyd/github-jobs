import ListItem from './ListItem';
import { Job } from '../interfaces';
import { Box, Flex, List, SkeletonCircle, SkeletonText } from '@chakra-ui/core';

type Props = {
  items: Job[];
  isLoading: boolean;
};

const SKELETON = [1, 2, 3, 4, 5];

const JobsList = ({ items, isLoading }: Props) => (
  <Box w="100%" p={4}>
    {isLoading ? (
      <>
        {SKELETON.map((item, index) => (
          <Box p="2" m="2" boxShadow="lg" bg="gray" key={index}>
            <SkeletonCircle size="10" />
            <SkeletonText mt="2" noOfLines={2} spacing="2" />
          </Box>
        ))}
      </>
    ) : (
        <List spacing={3}>
          {items?.map((item) => (
            <ListItem key={item.id} data={item} />
          ))}
        </List>
      )}
  </Box>
);

export default JobsList;
