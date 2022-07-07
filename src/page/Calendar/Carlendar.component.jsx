import { useState } from 'react';
import { useDispatch } from "react-redux";
import { googleSignInStart } from '../../features/Auth/slice';
import { useNavigate } from 'react-router-dom';
import { StyledCalendar, CalendarContainer, Title } from './Calendar.style';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';

const CalendarPage = (value) => {
  const dispatch = useDispatch()
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();
  const clickHandler = () => {
    const stringDate = date.toISOString().split('T')[0]
    navigate(`/meal/${stringDate}`)
  }

  const signInHandler = async() => await dispatch(googleSignInStart())
  
  return (
    <CalendarContainer>
      <button onClick={signInHandler}>로그인</button>
      <Title>DIET DIARY</Title>
      <StyledCalendar 
        formatDay ={(locale, date) => dayjs(date).format('DD')}
        onChange = {setDate}
        value={date}
        onClickDay={clickHandler}
      />
    </CalendarContainer>
  )
}
export default CalendarPage