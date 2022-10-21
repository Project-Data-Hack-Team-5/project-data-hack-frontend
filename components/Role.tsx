import { Box } from '@mui/material';
import React from 'react';
import Image from 'next/image';

type Props = {
  title: string;
  salary: string;
  location: string;
  type?: string;
};

export default function Role({ title, salary, location, type }: Props) {
  return (
    <>
      <Box
        sx={{
          display: 'flex'
        }}
        style={{
          borderRadius: '5%',
          backgroundColor: 'white'
        }}
        maxWidth={500}
        padding={1}
        alignItems="center"
      >
        <Box
          display="inline"
          style={{
            marginRight: 10,
            marginLeft: 10
          }}
        >
          <Image
            src="/images/memoji.jpeg"
            alt="Picture of the author"
            width={50}
            height={50}
          />
        </Box>

        <Box flexDirection="column">
          <p
            style={{
              paddingTop: 10,
              paddingBottom: 10
            }}
          >
            {title}
          </p>
          <p>{`${salary} | ${location} | ${type}`}</p>
        </Box>
      </Box>
    </>

    // <Box flexDirection="row">
    //   <Box>Test 1</Box>
    //   <Box>Test 2</Box>
    // </Box>
    // <Box flexDirection="row" border="1px solid red">
    //   <Box flexDirection="row">
    //     {/* Left: Image */}
    // <Box display="inline">
    //   <Image
    //     src="/images/memoji.jpeg"
    //     alt="Picture of the author"
    //     width={50}
    //     height={50}
    //   />
    // </Box>

    // <Box flexDirection="column">
    //   <p>Title</p>
    //   <p>Information</p>
    // </Box>
    //   </Box>
    // </Box>
  );
}
