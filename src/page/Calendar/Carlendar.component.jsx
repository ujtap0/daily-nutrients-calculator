import { useNavigate } from 'react-router-dom';
import { StyledCalendar, CalendarContainer, Title } from './Calendar.style';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';

const CalendarPage = () => {
  const navigate = useNavigate();
  const clickHandler = (day) => {
    const convertedate = 
      new Date(day)
      .toLocaleDateString()
      .replace(/(\s*)/g, "")
      .replace(/.$/, "")
    navigate(`/meal/${convertedate}`)
  }


  return (
    <CalendarContainer>
      <StyledCalendar 
        formatDay ={(locale, date) => dayjs(date).format('DD')}
        onClickDay={(day)=>clickHandler(day)}
      />
    </CalendarContainer>
  )
}
export default CalendarPage