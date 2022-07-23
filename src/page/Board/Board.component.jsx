import { useState } from "react";
import Calendar from "../../component/board/calendar/Carlendar.component";
import UserInfo from "../../component/board/userInfo/UserInfo.component";
import CountWater from "../../component/board/countWater/CountWater.component";
import Diet from "../../component/board/dietTable/Diet.component";

import { Switch } from 'antd';
import { Section, LeftContainer, RightContainer, BoardContainer } from "./Board.style";

const Board = () => {
  const [toggle, setToggle] = useState(true);
  const toggleHandler = () => setToggle((prev)=>!prev);

  return(
    <Section>
      <Switch defaultChecked onChange={toggleHandler}/>
      <BoardContainer>
        <LeftContainer>
          <UserInfo/>
          <CountWater />
        </LeftContainer>
        <RightContainer>
          {toggle ? <Diet/> : <Calendar />}
        </RightContainer>
      </BoardContainer>
    </Section>
  )
}

export default Board