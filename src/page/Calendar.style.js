import styled from "styled-components";
import Calendar from "react-calendar";

export const CalendarContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
`
export const Title = styled.h2`
  font-size: 60px;
  color: #777;
`

export const StyledCalendar = styled(Calendar)`
 width: 100%;
 background-color: #f7ede2;
 border: 0;
 border-radius: 16px;
 padding: 40px 50px;
 button{
   padding: 30px;
   font-size: 18px;
 }
 .react-calendar__navigation{
  margin-bottom: 30px;
  color: #777;
  font-weight: 600;
  button:hover,
  button:active{
    background-color: transparent;
  }
 }
 .react-calendar__month-view__weekdays__weekday{
  font-size: 22px;
  padding: 30px 20px;
  color: #84a59d;
 }
 .react-calendar__tile--now {
    background-color: transparent;
    &:hover,
    &:active{
      background-color: transparent;
    }
    & > abbr {
      box-sizing: border-box;
      padding: 13px;
      border-radius: 50%;
      background: #f28482;
      color: #fff;
    }
  }
  .react-calendar__tile:enabled:hover{
    background-color: #f5cac3;
    border-radius: 5px;
  }
}
`