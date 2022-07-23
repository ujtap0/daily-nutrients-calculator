import { useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSelector } from "../../../features/Select/slice";
import DietForm from "../dietForm/DietForm.component";
import Menu from "./Menu.component";
import { Container, Wrapper, BtnWrapper, AlarmText } from "./Diet.style";
import { submitIntakedFoodsDesk } from "../../../features/Select/slice";
import Button from "../../ui/Button.component";
import { BUTTON_TYPE_CLASSES } from "../../ui/Button.component";

const Diet = () => {
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
      {isModalShow && <DietForm onClose={hideModalHandler}/>}
      <Container>
        <div>
          <span>{`${currentYear} / ${currentMonth + 1} / ${currentDate}`}</span>
        </div>
        <Wrapper>
          {!breakfast.length && !lunch.length && !dinner.length ? 
            <AlarmText>아직 입력된 식단이 없습니다!</AlarmText> :
            <>
              <Menu meal='breakfast' content={breakfast}/>
              <Menu meal='lunch' content={lunch}/>
              <Menu meal='dinner' content={dinner}/>
            </>
          }
          
        </Wrapper>
        <BtnWrapper>
          <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={showModalHandler}>입력하기</Button>
          <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={submitHandler}>저장하기</Button>
        </BtnWrapper>
      </Container>
    </Fragment>
  )

}
export default Diet;