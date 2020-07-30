import ListItem from './ListItem';
import { Job } from '../interfaces';
import { Box, SkeletonCircle, SkeletonText } from '@chakra-ui/core';

type Props = {
  items: Job[];
  isLoading: boolean;
};

const SKELETON = [1, 2, 3, 4, 5];

const List = ({ items, isLoading }: Props) => (
  <Box w="100%" p={4}>
    {!isLoading ? (
      <>
        {SKELETON.map((item, index) => (
          <Box p="4" m="5" boxShadow="lg" bg="gray" key={index}>
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={2} spacing="4" />
          </Box>
        ))}
      </>
    ) : (
      <ul>
        {items?.map((item) => (
          <li key={item.id}>{item.company}</li>
        ))}
      </ul>
    )}
  </Box>
);

export default List;
