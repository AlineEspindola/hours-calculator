import React from 'react';
import './App.scss';
import DropdownOperation from './components/DropdownOperation';
import InputTime from './components/InputTime';
import { Divider, InputNumber } from 'antd';

function App() {
  return (
    <>
      <DropdownOperation />
      <InputTime />
      <InputTime />
      <Divider>Resultado</Divider>
      <InputNumber size="large" min={1} max={999999999999} defaultValue={0} />
    </>
  );
}

export default App;
