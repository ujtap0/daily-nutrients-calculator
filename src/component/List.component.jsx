import { Collapse } from 'antd';
import Search from '../features/Search/Search.component';
const { Panel } = Collapse;

const List = () => {
  const onChange = (key) => {
    console.log(key);
  };

  return (<Collapse defaultActiveKey={['1']} onChange={onChange}>
      <Panel header="아침" key="1">
        <Search meal='breakfast' />
      </Panel>
      <Panel header="점심" key="2">
        <Search meal='lunch'/>
      </Panel>
      <Panel header="저녁" key="3">
        <Search meal='dinner' />
      </Panel>
    </Collapse>
)}

export default List;