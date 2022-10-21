import type { NextPage } from 'next';
import { useEffect } from 'react';
import { H1, H2, H3 } from '../components/Typography';
import classes from '../styles/Home.module.css';

const axios = require('axios');

const Home: NextPage = () => {
  // useEffect(() => {
  //   (async () => {
  //     const response = await axios.post(
  //       'https://mw4ksab47k.execute-api.eu-west-1.amazonaws.com/prod/hello',
  //       {
  //         name: 'Yusuf Website'
  //       }
  //     );
  //     console.log(response.data);
  //   })();
  // }, []);

  return (
    <>
      <H1 />
    </>
  );
};

export default Home;
