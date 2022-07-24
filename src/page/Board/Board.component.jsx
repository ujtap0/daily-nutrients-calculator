import { useState, useEffect } from "react";
import Calendar from "../../component/board/calendar/Carlendar.component";
import UserInfo from "../../component/board/userInfo/UserInfo.component";
import CountWater from "../../component/board/countWater/CountWater.component";
import Diet from "../../component/board/dietTable/Diet.component";

import { Switch } from 'antd';
import { Section, LeftContainer, RightContainer, BoardContainer } from "./Board.style";
import { getDietPerMonth } from "../../utils/firebase/firebase";

const Board = () => {
  const [toggle, setToggle] = useState(true);
  const toggleHandler = () => setToggle((prev)=>!prev);

  const handler = async() => {
    const year = new Date().getFullYear();
      const month = new Date().getMonth();
      const data = await getDietPerMonth(year, month);
      console.log(data);
  }

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
      <button onClick={handler}>데이터 받아오기</button>
    </Section>
  )
}

export default Board