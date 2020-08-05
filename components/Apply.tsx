import Link from 'next/link';
import { ArrowLeft as ArrowLeftIcon } from 'react-feather';
import { Button, Text } from '@chakra-ui/core';
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
      <div>
        <ReactMarkdown source={howToApply} />
      </div>

    </>
  );
}

export default Apply;
