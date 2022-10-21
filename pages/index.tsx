import type { NextPage } from 'next';
import { useEffect } from 'react';

const axios = require('axios');

const Home: NextPage = () => {
  useEffect(() => {
    (async () => {
      const response = await axios.post(
        'https://mw4ksab47k.execute-api.eu-west-1.amazonaws.com/prod/hello',
        {
          name: 'Yusuf Website'
        }
      );
      console.log(response.data);
    })();
  }, []);

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
};

export default Home;
