import React, { useCallback, useEffect, useState } from 'react';
import './App.scss';
import DropdownOperation from './components/DropdownOperation';
import InputTime from './components/InputTime';
import { Divider, InputNumber, Flex, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import { Typography } from 'antd';
import 'animate.css';

function App() {
  const [totalSeconds, setTotalSeconds] = useState<number>(0);
  const { width, height } = useWindowSize()
  const [amountInputTime, setAmountInputTime] = useState<number>(2);
  const [amoutDropdownOperation, setAmoutDropdownOperation] = useState<number>(1);
  const [inputValues, setInputValues] = useState<number[]>(Array(amountInputTime).fill(0));
  const [cat, setCat] = useState<boolean>(false);
  const { Title } = Typography;

  const addInputTime = () => {
    setAmountInputTime(amountInputTime + 1);
    setAmoutDropdownOperation(amoutDropdownOperation + 1);
    setInputValues([...inputValues, 0]);
  }

  const handleInputChange = useCallback((index: number, value: number) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
    setTotalSeconds(newInputValues.reduce((acc, curr) => acc + curr, 0));

  }, [inputValues]);

  const converterSecondsToHours = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (hours > 9) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `0${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  useEffect(() => {
    if (totalSeconds === 29285) {
      setCat(true);
    } else {
      setCat(false);
    }
  }, [totalSeconds]);

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
              <InputTime key={index} onChange={(value) => handleInputChange(index, value)} />
            ))}
            <Button type="dashed" onClick={addInputTime}>
              Adicionar <PlusOutlined />
            </Button>
          </div>
        </div>
        <div className='result'>
          <Divider>Resultado</Divider>
          <InputNumber size="large" readOnly value={converterSecondsToHours(totalSeconds)} />
          {cat && (
            <>
              <Confetti
                width={width}
                height={height}
              />
              <Title className="animate__animated animate__rollIn" style={{ marginTop: "3vh", fontSize: "#ffa594", color: "pink" }}>Parabéns, meu amor! Feliz aniversário!</Title>
              <img src="https://media.tenor.com/bh9MAiCpL6wAAAAi/birthday-cake.gif" alt="Imagem da gatinha" style={{ width: "230px" }} />
            </>
          )}
        </div>
      </div>
    </Flex>
  );
}

export default App;
