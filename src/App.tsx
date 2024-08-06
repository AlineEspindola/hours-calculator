import React from 'react';
import './App.scss';
import DropdownOperation from './components/DropdownOperation';
import InputTime from './components/InputTime';
import { Divider, InputNumber, Flex, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function App() {
  return (
    <Flex className='container' justify='center'>
      <div className='container__content'>
        <div className='calculator'>
          <div className='calculator__operations'>
            <DropdownOperation />
          </div>
          <div className='calculator__inputs'>
            <InputTime />
            <InputTime />
            <Button type="dashed">
              Adicionar <PlusOutlined />
            </Button>
          </div>
        </div>
        <div className='result'>
          <Divider>Resultado</Divider>
          <InputNumber size="large" readOnly value="00:00:00" />
        </div>
      </div>
    </Flex>
  );
}

export default App;
