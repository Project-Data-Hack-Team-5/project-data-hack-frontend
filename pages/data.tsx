import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import Role from '../components/Role';
import { H1 } from '../components/Typography';

type Props = {};
const axios = require('axios');

export default function data({}: Props) {
  const [state, setState] = useState('');
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        'https://mw4ksab47k.execute-api.eu-west-1.amazonaws.com/prod/data'
      );
      setState(JSON.stringify(response.data, null, 2));
    })();
  }, []);

  return (
    <div>
      <pre>{state}</pre>
    </div>
  );
}
