import { useRef } from "react";
import { useDispatch } from "react-redux";
import { selectAction } from "../../../features/Select/slice";
import { nutrientAction } from "../../../features/Search/slice";
import { InputNumber } from "antd";

const MealPortion = ({ food, onClose }) => {
  const dispatch = useDispatch();
  const portionRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const { addMeal } = selectAction;
    const { reset } = nutrientAction;
    const amount = portionRef.current.value;
    const mealDesk = {
      ...food, 
      portion: amount/food.foodData['SERVING_WT']
    }
    dispatch(addMeal(mealDesk));
    dispatch(reset());
    onClose();
  }

  return(
    <form onSubmit={submitHandler}>
      <h3>얼마나 드셨나요?</h3>
      <InputNumber 
        min={+food.foodData['SERVING_WT']} 
        defaultValue={+food.foodData['SERVING_WT']} 
        step={+food.foodData['SERVING_WT']} 
        ref={portionRef}/>
      <button>제출하기</button>
    </form>
  )
}
export default MealPortion