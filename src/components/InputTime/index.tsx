import { InputNumber, Space, Badge } from "antd";
import { useEffect, useState } from "react";
import './InputTime.scss';
import { DeleteOutlined } from "@ant-design/icons";

interface InputTimeProps {
  onChange: (totalSeconds: number) => void;
  signalOperation: string;
  index: number;
  onRemove: (index: number) => void;
}

const InputTime: React.FC<InputTimeProps> = ({ onChange, signalOperation, index, onRemove }) => {
  const [totalTime, setTotalTime] = useState<number>(0);
  const [hour, setHour] = useState<number>(0);
  const [minute, setMinute] = useState<number>(0);
  const [second, setSecond] = useState<number>(0);

  const changeHour = (hour: number | null) => {
    if (hour !== null) {
      setHour(hour);
    } else {
      setHour(0);
    }
  }

  const changeMinute = (minute: number | null) => {
    if (minute !== null) {
      setMinute(minute);
    } else {
      setMinute(0);
    }
  }

  const changeSecond = (second: number | null) => {
    if (second !== null) {
      setSecond(second);
    } else {
      setSecond(0);
    }
  }

  useEffect(() => {
    let totalTime = (hour * 3600) + (minute * 60) + second;
    
    if (signalOperation === 'subtract' && index > 0) {
      totalTime = -totalTime;
    }

    onChange(totalTime);
  }, [hour, minute, second, signalOperation, index, onChange])

  return (
    <Space wrap>
      <InputNumber size="large" max={9999999} min={0} defaultValue={0} onChange={changeHour} />
      <>:</>
      <InputNumber size="large" max={59} min={0} defaultValue={0} onChange={changeMinute} />
      <>:</>
      <Badge count={<DeleteOutlined  style={{ cursor: 'pointer' }} onClick={() => onRemove(index)} />}>
        <InputNumber size="large" max={59} min={0} defaultValue={0} onChange={changeSecond} />
      </Badge>
    </Space>
  );
}

export default InputTime;