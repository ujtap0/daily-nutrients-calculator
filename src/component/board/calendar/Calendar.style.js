import styled from "styled-components";
import Calendar from "react-calendar";

export const CalendarContainer = styled.div`
  max-width: 100%;
`
export const Title = styled.h2`
  font-size: 60px;
  color: #777;
`

export const Point = styled.div`
  position: absolute;
  z-index: 10;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: #93bf85;
  margin-left: 1.2rem;
  margin-top: 1.2rem;
`

export const StyledCalendar = styled(Calendar)`
 width: 100%;
 background-color: #fff;
 border: 0;
 border-radius: 16px;
 padding: 40px 50px;
 box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
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
        padding: 1.7rem;
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