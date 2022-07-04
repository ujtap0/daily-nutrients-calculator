import { useRef } from "react";
import { useDispatch } from "react-redux";
import { selectAction } from "./slice";
import { nutrientAction } from "../Search/slice";
import { InputNumber } from "antd";

const MealPortion = ({ food, onClose }) => {
  const dispatch = useDispatch();
  const portionRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const { addMeal } = selectAction;
    const { reset } = nutrientAction;
    const portion = portionRef.current.value;
    const mealDesk = {...food, portion}
    dispatch(addMeal(mealDesk));
    dispatch(reset());
    onClose();
  }

  return(
    <form onSubmit={submitHandler}>
      <h3>얼마나 드셨나요?</h3>
      <InputNumber min={100} defaultValue={100} step={100} ref={portionRef}/>
      <button>제출하기</button>
    </form>
  )
}
export default MealPortion