import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledCalendar, CalendarContainer } from './Calendar.style';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';
import { getDietPerMonth } from '../../../utils/firebase/firebase';

const dietHandler = async(year, month) => {
    const data = await getDietPerMonth(year, month);
    console.log(year, month, data);
    return data
}

const Calendar = () => {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const navigate = useNavigate();
  const clickHandler = (day) => {
    const convertedate = 
      new Date(day)
      .toLocaleDateString()
      .replace(/(\s*)/g, "")
      .replace(/.$/, "")
    navigate(`/meal/${convertedate}`)
  }

  const monthYearChangeHandler = ({action, activeStartDate}) => {
    const date = new Date(activeStartDate);
    setMonth(date.getMonth());
    setYear(date.getFullYear())
  }

  useEffect(()=>{
    const getDietCurrentMonth = async() => await dietHandler(year, month);
    getDietCurrentMonth()
  },[month, year]);

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