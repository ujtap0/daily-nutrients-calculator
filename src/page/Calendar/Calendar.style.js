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
 background-color: #fff;
 border: 0;
 border-radius: 16px;
 padding: 40px 50px;
 box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
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
    position: relative;
    &:hover,
    &:active{
      background-color: transparent;
    }
    & > abbr{
      &::before {
        content: '';
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        box-sizing: border-box;
        padding: 20px;
        border-radius: 50%;
        background: rgba(242, 132, 130, 0.4);
        color: #fff;
      }
    }
    
  }
  .react-calendar__tile:enabled:hover{
    background-color: #f7ede2;
    border-radius: 5px;
  }
}
`