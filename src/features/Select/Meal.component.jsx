import { useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSelector } from "./slice";
import MealForm from "./MealForm.component";
import Menu from "./Menu.component";
import { Container, Wrapper, BtnWrapper } from "./Meal.style";
import { submitIntakedFoodsDesk } from "./slice";
import Button from "../../component/ui/Button.component";
import { BUTTON_TYPE_CLASSES } from "../../component/ui/Button.component";

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
        </div>
        <Wrapper>
          <Menu meal='breakfast' content={breakfast}/>
          <Menu meal='lunch' content={lunch}/>
          <Menu meal='dinner' content={dinner}/>
        </Wrapper>
        <BtnWrapper>
          <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={showModalHandler}>입력하기</Button>
          <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={submitHandler}>저장하기</Button>
        </BtnWrapper>
      </Container>
    </Fragment>
  )

}
export default Meal;