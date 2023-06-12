import resources from '@/renderer/resources';
import { Stack, Typography } from '@mui/material';
import React from 'react';

export default function Welcome() {
  return (
    <Stack
      height="100vh"
      width="100vw"
      alignItems="center"
      justifyContent="center"
      bg={(theme) => theme.palette.primary.main}
    >
      <Stack width="100%" height="100%" alignItems="center" justifyContent="center" padding={2}>
        <Stack width={200} height={200} alignSelf="center">
          <img src={resources.bikeman} alt="bikema" />
        </Stack>
        <Typography
          sx={(theme) => ({
            fontSize: theme.spacing(2.5),
            fontWeight: 'bold',
          })}
          color="primary"
          variant="h2"
        >
          Welcome to bikeman
        </Typography>
      </Stack>
      <Stack alignItems="center" justifyContent="center" width="100%" height="100%">
        <p>the rest of the content goes her</p>
      </Stack>
    </Stack>
  );
}
