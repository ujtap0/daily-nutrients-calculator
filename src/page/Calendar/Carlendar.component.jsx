import { useState } from 'react';
import { useDispatch } from "react-redux";
import { googleSignInStart } from '../../features/Auth/slice';
import { useNavigate } from 'react-router-dom';
import { StyledCalendar, CalendarContainer, Title } from './Calendar.style';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';

const CalendarPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clickHandler = (day) => {
    const convertedate = 
      new Date(day)
      .toLocaleDateString()
      .replace(/(\s*)/g, "")
      .replace(/.$/, "")
    navigate(`/meal/${convertedate}`)
  }

  const signInHandler = async() => dispatch(googleSignInStart())
  return (
    <CalendarContainer>
      <button onClick={signInHandler}>로그인</button>
      <Title>DIET DIARY</Title>
      <StyledCalendar 
        formatDay ={(locale, date) => dayjs(date).format('DD')}
        onClickDay={(day)=>clickHandler(day)}
      />
    </CalendarContainer>
  )
}
export default CalendarPage