import { DownOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Dropdown, Button, Space, Menu } from 'antd';
import { useState } from 'react';

const DropdownOperation: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('sum');

  const handleOptionClick = (e: { key: string }) => {
    setSelectedOption(e.key);
  };

  const options = (
    <Menu onClick={handleOptionClick}>
      <Menu.Item key="sum" icon={<PlusOutlined />} />
      <Menu.Item key="subtract" icon={<MinusOutlined />} />
    </Menu>
  );

  return (
    <Dropdown overlay={options}>
      <Button>
        <Space style={{ padding: "40px 0" }}>
          {selectedOption === 'sum' ? <PlusOutlined /> : <MinusOutlined />}
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  );
};

export default DropdownOperation;
