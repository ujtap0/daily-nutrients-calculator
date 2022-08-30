import { useSelector } from "react-redux";
import { dietSelector } from "../../../features/Diet/slice";
import { StyledTitle, MealContainer, TitleContainer, EachMealContainer, MealType } from "./MealForDay.style";
import MealTag from "./MealTag.component";
import dayjs from 'dayjs';

const MealForDay = () => {
  const { dietByDate } = useSelector(dietSelector.date);
  const convertDate = dayjs(dietByDate.intakenFoodDesk.date).format('YYYY/MM/DD');
  return(
    <MealContainer>
      <TitleContainer>
        <StyledTitle>{`${convertDate} 식단 기록`}</StyledTitle>
      </TitleContainer>
      <EachMealContainer>
        <MealType>아침</MealType>
        <ul>
          {dietByDate.intakenFoodDesk.breakfast.map(food => <MealTag
            foodName={food.foodData.DESC_KOR}
            servingWeight={food.foodData.SERVING_WT}
            portion = {food.portion}
          />)}
        </ul>
      </EachMealContainer>
      <EachMealContainer>
        <MealType>점심</MealType>
        <ul>
          {dietByDate.intakenFoodDesk.lunch.map(food => <MealTag
            foodName={food.foodData.DESC_KOR}
            servingWeight={food.foodData.SERVING_WT}
            portion = {food.portion}
          />)}
        </ul>
      </EachMealContainer>
      <EachMealContainer>
        <MealType>저녁</MealType>
        <ul>
          {dietByDate.intakenFoodDesk.dinner.map(food => <MealTag
            foodName={food.foodData.DESC_KOR}
            servingWeight={food.foodData.SERVING_WT}
            portion = {food.portion}
          />)}
        </ul>
      </EachMealContainer>
    </MealContainer>
  )
}
export default MealForDay