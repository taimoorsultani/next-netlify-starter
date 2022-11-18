import React from 'react';
import { Container } from 'react-bootstrap';
import Head from 'next/head';

import { MattelNavBar } from '../components/MattelNavBar';
import { MattelFooter } from '../components/MattelFooter';

const Wrapper = ({ activeRegion, children }) => {
  return (
    <Container fluid className='min-vh-100'>
      <Head>
        <title>{activeRegion.title}</title>
        <link rel='icon' href='/favicon.png' />
      </Head>
      <div className='row'>
        <div className='col-md-1 col-sm-12'></div>
        <div className='col-md-10 col-sm-12 center-col'>
          <MattelNavBar />
          <Container>{children}</Container>
        </div>
        <div className='col-md-1 col-sm-12'></div>
      </div>
      <MattelFooter />
    </Container>
  );
};

export default Wrapper;
