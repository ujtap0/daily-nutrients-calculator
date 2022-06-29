import { StyledCalendar, CalendarContainer, Title } from './Calendar.style';
import 'react-calendar/dist/Calendar.css';

const CalendarPage = () => {
return (
  <CalendarContainer>
    <Title>DIET DIARY</Title>
    <StyledCalendar />
  </CalendarContainer>
)
}
export default CalendarPage