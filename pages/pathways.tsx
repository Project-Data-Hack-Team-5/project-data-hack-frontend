import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid
} from '@mui/material';
import React from 'react';
import Role from '../components/Role';
import { H1 } from '../components/Typography';

type Props = {};

export default function pathways({}: Props) {
  const data = [
    {
      title: 'Software Engineer',
      salary: '£35,000',
      location: 'Remote',
      type: 'Full-Time'
    },
    {
      title: 'Junior Engineer',
      salary: '£30,000',
      location: 'Remote',
      type: 'Full-Time'
    },
    {
      title: 'Cloud Engineer',
      salary: '£50,000',
      location: 'Remote',
      type: 'Full-Time'
    },
    {
      title: 'Front End Engineer',
      salary: '£50,000',
      location: 'Remote',
      type: 'Full-Time'
    }
  ];
  return (
    <>
      <H1>PATHWAYS</H1>
      <Box
        sx={{
          display: 'flex'
        }}
        alignItems={'center'}
      >
        <p>Filter by: </p>
        <Box sx={{ maxWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Location</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={1}
              label="Location"
              onChange={() => console.log('test')}
            >
              <MenuItem value={1}>Location</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ maxWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Occupation</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={1}
              label="Occupation"
              onChange={() => console.log('test')}
            >
              <MenuItem value={1}>Occupation</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ maxWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={1}
              label="Type"
              onChange={() => console.log('test')}
            >
              <MenuItem value={1}>Type</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Grid
        container
        spacing={2}
        style={{
          margin: '0 auto',
          width: '75%'
        }}
      >
        {data.map((item, index) => {
          return (
            <Grid item xs={3}>
              <Role
                title={item.title}
                salary={item.salary}
                location={item.location}
                type={item.type}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
