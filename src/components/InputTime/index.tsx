import { InputNumber, Space } from "antd";
import { useEffect, useState } from "react";
import './InputTime.scss';

const InputTime: React.FC = () => {
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
    setTotalTime((hour * 3600) + (minute * 60) + second);
  }, [hour, minute, second, totalTime])

  return (
    <Space wrap>
      <InputNumber size="large" max={9999999} min={0} defaultValue={0} onChange={changeHour} />
      <>:</>
      <InputNumber size="large" max={59} min={0} defaultValue={0} onChange={changeMinute} />
      <>:</>
      <InputNumber size="large" max={59} min={0} defaultValue={0} onChange={changeSecond} />
    </Space>
  );
}

export default InputTime;