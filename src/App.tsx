import React, { useState } from 'react';
import './App.scss';
import DropdownOperation from './components/DropdownOperation';
import InputTime from './components/InputTime';
import { Divider, InputNumber, Flex, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function App() {
  const [totalSeconds, setTotalSeconds] = useState<number>(0);
  const [amountInputTime, setAmountInputTime] = useState<number>(2);
  const [amoutDropdownOperation, setAmoutDropdownOperation] = useState<number>(1);

  const addInputTime = () => {
    setAmountInputTime(amountInputTime + 1);
    setAmoutDropdownOperation(amoutDropdownOperation + 1);
  }

  return (
    <Flex className='container' justify='center'>
      <div className='container__content'>
        <div className='calculator'>
          <div className='calculator__operations'>
            {Array.from({ length: amoutDropdownOperation }).map((_, index) => (
              <DropdownOperation key={index} />
            ))}
          </div>
          <div className='calculator__inputs'>
            {Array.from({ length: amountInputTime }).map((_, index) => (
              <InputTime key={index} onChange={setTotalSeconds} />
            ))}
            <Button type="dashed" onClick={addInputTime}>
              Adicionar <PlusOutlined />
            </Button>
          </div>
        </div>
        <div className='result'>
          <Divider>Resultado</Divider>
          <InputNumber size="large" readOnly value={totalSeconds} />
        </div>
      </div>
    </Flex>
  );
}

export default App;
