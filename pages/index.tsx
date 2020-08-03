import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import List from '../components/List';
import Location from '../components/Location';
import Search from '../components/Search';
import useJobs from '../hooks/useJobs';

import { Job } from '../interfaces';
import { Pagination } from '@material-ui/lab';
import { Box, Center } from '@chakra-ui/core';
import queryString from 'query-string';

const IndexPage = () => {
  const [page, setPage] = useState(1);
  const [fullTime, setFullTime] = useState(false);
  const [location, setLocation] = useState("");

  let query = queryString.stringifyUrl({
    url: 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json', query: {
      full_time: fullTime as unknown as string,
      location: location
    }
  })

  console.log(query);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const { jobs, isLoading } = useJobs(query);
  let count = 0;
  if (!isLoading) {
    count = jobs.length / 5;
  };
  console.log(jobs);

  const paginatedItems = (items: Job[], page: number): Job[] => {
    let upper = page * 5;
    let lower = upper - 5;
    return items?.slice(lower, upper);
  }
  return (
    <Layout title="Github Jobs">
      <Search />
      <Box display={{ md: "flex" }} alignItems="flex-start">
        <Location fullTime={fullTime} setFullTime={setFullTime} location={location} setLocation={setLocation} />
        <List items={paginatedItems(jobs, page)} isLoading={isLoading} />
      </Box>
      {
        jobs?.length > 5 && (
          <Center pt={2}>
            <Pagination count={count} page={page} onChange={handleChange} shape="rounded" variant="outlined" />
          </Center>
        )
      }

    </Layout>
  )
}

export default IndexPage;
