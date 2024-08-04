import React from 'react';
import './App.scss';
import DropdownOperation from './components/DropdownOperation';
import { Col, Flex, Row } from 'antd';

function App() {
  return (
    <Row
      justify="center"
    >
      <Col>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
          <DropdownOperation />
          <DropdownOperation />
        </div>
      </Col>
    </Row>
  );
}

export default App;
