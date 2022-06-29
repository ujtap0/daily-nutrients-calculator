import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledCalendar, CalendarContainer, Title } from './Calendar.style';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';

const CalendarPage = (value) => {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();
  const clickHandler = () => {
    const stringDate = date.toISOString().split('T')[0]
    navigate(`/meal/${stringDate}`)
  }

  return (
    <CalendarContainer>
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