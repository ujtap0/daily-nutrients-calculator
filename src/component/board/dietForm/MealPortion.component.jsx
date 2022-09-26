import { useRef } from "react";
import { useDispatch } from "react-redux";
import { selectAction } from "../../../features/Select/slice";
import { nutrientAction } from "../../../features/Search/slice";
import Button from "../../ui/Button.component";
import { BUTTON_TYPE_CLASSES } from "../../ui/Button.component";
import { StyledTitle, StyledInput, SubmitContainer, InputContainer } from "./MealPortion.style";
import dayjs from 'dayjs'
const MealPortion = ({ food, onClose }) => {
  const dispatch = useDispatch();
  const portionRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const { addMeal } = selectAction;
    const { reset } = nutrientAction;
    const amount = portionRef.current.value;
    const date = dayjs().format('YYYY-MM-DD');
    const mealDesk = {
      ...food, 
      portion: amount/food.foodData['SERVING_WT'],
      date
    }
    dispatch(addMeal(mealDesk));
    dispatch(reset());
    onClose();
  }

  return(
    <form onSubmit={submitHandler}>
      <StyledTitle>얼마나 드셨나요?</StyledTitle>
      <SubmitContainer>
        <InputContainer>
          <StyledInput 
            min={+food.foodData['SERVING_WT']} 
            defaultValue={+food.foodData['SERVING_WT']} 
            step={+food.foodData['SERVING_WT']} 
            ref={portionRef}/>
            <span>g</span>
        </InputContainer>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>제출하기</Button>
      </SubmitContainer>
    </form>
  )
}
export default MealPortion