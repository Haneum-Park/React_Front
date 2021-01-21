// 기본 레이아웃
import React from 'react';
import { Container } from 'react-bootstrap';

import Header from '../Common/Header';
import Footer from '../Common/Footer';

const Layout = () => {
  return (
    <Container>
      <Header />
      <Footer />
    </Container>
  )
}

export default Layout;