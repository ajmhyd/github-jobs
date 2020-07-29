import useSWR from 'swr';
import fetch from '../lib/fetch';
import { Job } from '../interfaces';

const useJobs = () => {
  const { data, error } = useSWR<Job[]>('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json', fetch);

  return {
    jobs: data,
    isLoading: !error && !data,
    isError: error
  }
}

export default useJobs;
