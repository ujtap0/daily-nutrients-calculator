import Chart from "../../component/details/Chart.component";
import MealForDay from "../../component/details/Meal/MealForDay.component";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { dietAction } from "../../features/Diet/slice";
import { dietSelector } from '../../features/Diet/slice';

const MealDetails = () => {
  const { day } = useParams();
  const dispatch = useDispatch();
  useEffect(()=> {
    const { loadByDay } = dietAction;
    dispatch(loadByDay(day))
  },[])
  const dailyTotalDiet = useSelector(dietSelector.dailyNutrient);
  return(
    <div>
      {dailyTotalDiet.length > 0 ? 
      <div>
        <Chart />
        <MealForDay />
      </div>
      : null}
    </div>

  )
}
export default MealDetails