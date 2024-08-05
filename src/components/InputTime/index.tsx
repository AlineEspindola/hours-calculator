import { InputNumber, Space } from "antd";

const InputTime: React.FC = () => {
  return (
    <Space wrap>
      <InputNumber size="large"  max={9999999} defaultValue={17} />
      <>:</>
      <InputNumber size="large"  max={59} defaultValue={34} />
      <>:</>
      <InputNumber size="large"  max={59} defaultValue={12} />
    </Space>
  );
}

export default InputTime;