import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { dietAction } from '../../../features/Diet/slice';
import { useNavigate } from 'react-router-dom';
import { StyledCalendar, CalendarContainer } from './Calendar.style';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';

const Calendar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const clickHandler = (day) => {
    const convertedate = new Date(day).getTime();
    navigate(`/meal/${convertedate}`)
  }

  const monthYearChangeHandler = ({action, activeStartDate}) => {
    const date = new Date(activeStartDate);
    setMonth(date.getMonth());
    setYear(date.getFullYear())
  }

  useEffect(()=>{
    const { load } = dietAction
    const monthYear = {month, year}
    dispatch(load(monthYear))
  },[dispatch, month, year]);

  return (
    <CalendarContainer>
      <StyledCalendar 
        formatDay ={(locale, date) => dayjs(date).format('DD')}
        onClickDay={(day)=>clickHandler(day)}
        prev2Label={null}
        next2Label={null}
        onActiveStartDateChange={monthYearChangeHandler}
      />
    </CalendarContainer>
  )
}
export default Calendar