import { useSelector } from "react-redux";
import { dietSelector } from "../../../features/Diet/slice";
import MealTag from "./MealTag.component";
const MealForDay = () => {
  const { dietByDate } = useSelector(dietSelector.date);
  console.log(dietByDate)
  return(
    <div>
      <div>
        <span>아침</span>
        {dietByDate.intakenFoodDesk.breakfast.map(food => <MealTag
          foodName={food.foodData.DESC_KOR}
          servingWeight={food.foodData.SERVING_WT}
          portion = {food.portion}
        />)}
      </div>
      <div>
        <span>점심</span>
        {dietByDate.intakenFoodDesk.lunch.map(food => <MealTag
          foodName={food.foodData.DESC_KOR}
          servingWeight={food.foodData.SERVING_WT}
          portion = {food.portion}
        />)}
      </div>
      <div>
        <span>저녁</span>
        {dietByDate.intakenFoodDesk.dinner.map(food => <MealTag
          foodName={food.foodData.DESC_KOR}
          servingWeight={food.foodData.SERVING_WT}
          portion = {food.portion}
        />)}
      </div>
    </div>
  )
}
export default MealForDay