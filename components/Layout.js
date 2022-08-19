import React from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import useStyles from '../utils/styles';

export default function Layout({ children }) {
    const classes = useStyles();
  return (
    <div>
      <Head>
        <title>next amazona</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>Amazona</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        {children}
      </Container>
      <footer>
        <Typography>
            All rights reserved. Next amazona
        </Typography>
      </footer>
    </div>
  );
}
