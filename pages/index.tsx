import { useState } from 'react';
import {
  Box,
  Center,
  SkeletonCircle,
  SkeletonText,
  useColorModeValue,
} from '@chakra-ui/react';
import { createStyles, makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import queryString from 'query-string';

import { Job } from '../interfaces';
import Layout from '../components/Layout';
import List from '../components/List';
import Location from '../components/Location';
import Search from '../components/Search';
import useJobs from '../hooks/useJobs';

type Props = {
  color: string;
  borderColor: string;
};

const SKELETON = [1, 2, 3, 4, 5];

const useStyles = makeStyles(() =>
  createStyles({
    root: (props: Props) => ({
      '& button': {
        color: props.color,
        borderColor: props.borderColor,
      },
    }),
  })
);

const IndexPage = () => {
  const [page, setPage] = useState(1);
  const [fullTime, setFullTime] = useState(false);
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('all');

  const color = useColorModeValue(
    'rgba(0, 0, 0, 0.87)',
    'rgba(255,255,255,0.92)'
  );
  const borderColor = useColorModeValue(
    'rgba(0, 0, 0, 0.23)',
    'rgba(255,255,255,0.92)'
  );
  const props = { color, borderColor };
  const classes = useStyles(props);

  let count = 0;

  let query = queryString.stringifyUrl({
    url:
      'https://api.allorigins.win/raw?url=https://jobs.github.com/positions.json',
    query: {
      full_time: (fullTime as unknown) as string,
      location: location === 'all' ? null : location,
      search: search === '' ? null : search,
    },
  });

  const { jobs, isLoading } = useJobs(query);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  if (!isLoading) {
    count = Math.ceil(jobs?.length / 5);
  }

  const paginatedItems = (items: Job[], page: number): Job[] => {
    let upper = page * 5;
    let lower = upper - 5;
    return items?.slice(lower, upper);
  };

  return (
    <Layout title='Github Jobs'>
      <Search search={search} setSearch={setSearch} />
      <Box display={{ md: 'flex' }} alignItems='flex-start'>
        <Location
          fullTime={fullTime}
          setFullTime={setFullTime}
          location={location}
          setLocation={setLocation}
        />
        <Box w='100%' p={4}>
          {isLoading ? (
            <>
              {SKELETON.map((item, index) => (
                <Box p='2' m='2' boxShadow='lg' bg='gray' key={index}>
                  <SkeletonCircle size='10' />
                  <SkeletonText mt='2' noOfLines={2} spacing='2' />
                </Box>
              ))}
            </>
          ) : (
            <List items={paginatedItems(jobs, page)} />
          )}
        </Box>
      </Box>
      {jobs?.length > 5 && (
        <Center pt={2}>
          <Pagination
            count={count}
            page={page}
            onChange={handleChange}
            shape='rounded'
            variant='outlined'
            className={classes.root}
          />
        </Center>
      )}
    </Layout>
  );
};

export default IndexPage;
