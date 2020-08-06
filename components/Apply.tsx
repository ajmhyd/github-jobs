import { Button, Text } from '@chakra-ui/core';
import Link from 'next/link';
import { ArrowLeft as ArrowLeftIcon } from 'react-feather';
import ReactMarkdown from 'react-markdown';

type Props = {
  howToApply: string;
}

const Apply = ({ howToApply }: Props) => {

  return (
    <>
      <Link href="/">
        <Text fontSize="sm">
          <Button as="a" colorScheme="blue" variant="ghost">
            <ArrowLeftIcon size={14} />&nbsp; back to search
        </Button>
        </Text>
      </Link>
      <Text fontSize="sm" fontWeight="bold" textTransform="uppercase"
        color="gray" my={2}>How To Apply</Text>
      <Text fontSize="sm">
        <ReactMarkdown source={howToApply} />
      </Text>
    </>
  );
}

export default Apply;
