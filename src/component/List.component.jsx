import { Collapse } from 'antd';
import Search from '../features/Search/Search.component';
import Modal from './ui/Modal.component';
const { Panel } = Collapse;

const List = () => {
  return (
  <Modal>
    <Collapse defaultActiveKey={['1']}>
      <Panel header="아침" key="1">
        <Search meal='breakfast'/>
      </Panel>
      <Panel header="점심" key="2">
        <Search meal='lunch'/>
      </Panel>
      <Panel header="저녁" key="3">
        <Search meal='dinner' />
      </Panel>
    </Collapse>
  </Modal>
)}

export default List;