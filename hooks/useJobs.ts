import useSWR from 'swr';
import fetch from '../lib/fetch';
import { Job } from '../interfaces';

const useJobs = (query: string) => {
  const { data, error } = useSWR<Job[]>(query, fetch);

  return {
    jobs: data,
    isLoading: !error && !data,
    isError: error
  }
}

export default useJobs;
