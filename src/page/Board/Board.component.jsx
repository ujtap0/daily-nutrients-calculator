import { useState } from "react";
import CalendarPage from "../../component/Calendar/Carlendar.component";
import UserInfo from "../../component/UserInfo/UserInfo.component";
import CountWater from "../../component/CountWater/CountWater.component";
import Meal from "../../features/Select/Meal.component";

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
          {toggle ? <Meal/> : <CalendarPage />}
        </RightContainer>
      </BoardContainer>
    </Section>
  )
}

export default Board