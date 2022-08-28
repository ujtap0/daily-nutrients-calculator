import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dietAction } from '../../../features/Diet/slice';
import { useNavigate } from 'react-router-dom';
import { dietSelector } from '../../../features/Diet/slice';
import { StyledCalendar, CalendarContainer, Point } from './Calendar.style';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';

const Calendar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(()=>{
    const { loadByMonth } = dietAction
    const monthYear = {month, year}
    dispatch(loadByMonth(monthYear))
  },[dispatch, month, year]);

  const {isLoading, dietByMonth, error} = useSelector(dietSelector.month);

  console.log(dietByMonth);

  const clickHandler = (day) => {
    const convertedate = new Date(day).getTime();
    navigate(`/meal/${convertedate}`)
  };

  const monthYearChangeHandler = ({action, activeStartDate}) => {
    const date = new Date(activeStartDate);
    setMonth(date.getMonth());
    setYear(date.getFullYear())
  }

  return (
    <CalendarContainer>
      <StyledCalendar 
        formatDay ={(locale, date) => dayjs(date).format('DD')}
        onClickDay={(day)=>clickHandler(day)}
        prev2Label={null}
        next2Label={null}
        onActiveStartDateChange={monthYearChangeHandler}
        tileContent = {({date}) => dietByMonth.find(record =>dayjs(record.intakenFoodDesk.date).format()=== dayjs(date).format()) ? <Point /> : null
        }
      />
    </CalendarContainer>
  )
}
export default Calendar