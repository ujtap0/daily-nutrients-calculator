import { useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSelector } from "./slice";
import MealForm from "./MealForm.component";
import Menu from "./Menu.component";
import { Container, Wrapper } from "./Meal.style";
import { submitIntakedFoodsDesk } from "./slice";

const Meal = () => {
  const dispatch = useDispatch();
  const [isModalShow, setIsModalShow] = useState(false);

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const currentDate = new Date().getDate();

  const {breakfast, lunch, dinner} = useSelector(selectSelector.all);

  const submitData = { 
    date: new Date().toDateString(),
    breakfast, lunch, dinner };
  const submitHandler = () => dispatch(submitIntakedFoodsDesk(submitData))

  const hideModalHandler = () => setIsModalShow(false);
  const showModalHandler = () => setIsModalShow(true);

  return(
    <Fragment>
      {isModalShow && <MealForm onClose={hideModalHandler}/>}
      <Container>
        <div>
          <span>{`${currentYear} / ${currentMonth + 1} / ${currentDate}`}</span>
        <button onClick={showModalHandler}>입력하기</button>
        </div>
        <Wrapper>
          <Menu meal='breakfast' content={breakfast}/>
          <Menu meal='lunch' content={lunch}/>
          <Menu meal='dinner' content={dinner}/>
        </Wrapper>
        <button onClick={submitHandler}>저장하기</button>
      </Container>
    </Fragment>
  )

}
export default Meal;