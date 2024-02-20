import React from "react";
import { Outlet } from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';

function DefaultLayout() {
  return (
    <Container fluid>
      <Outlet />
    </Container>
  );
}

export default DefaultLayout;