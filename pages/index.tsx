import { useState } from 'react';
import Layout from '../components/Layout';
import List from '../components/List';
import Location from '../components/Location';
import Search from '../components/Search';
import useJobs from '../hooks/useJobs';

import { Job } from '../interfaces';
import { Pagination } from '@material-ui/lab';
import { Box, Center } from '@chakra-ui/core';

const IndexPage = () => {
  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const { jobs, isLoading, isError } = useJobs();
  let count = 0;
  if (!isLoading) {
    count = jobs.length / 5;
  };

  const paginatedItems = (items: Job[], page: number): Job[] => {
    let upper = page * 5;
    let lower = upper - 5;
    return items?.slice(lower, upper);
  }
  return (
    <Layout title="Github Jobs">
      <Search />
      <Box display={{ md: "flex" }} alignItems="flex-start">
        <Location />
        <List items={paginatedItems(jobs, page)} isLoading={isLoading} />
      </Box>
      <Center>
        <Pagination count={count} page={page} onChange={handleChange} shape="rounded" />
      </Center>
    </Layout>
  )
}

export default IndexPage;
