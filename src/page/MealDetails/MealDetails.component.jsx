import Chart from "../../component/details/Chart.component";
import { useParams } from "react-router-dom";
import { getDietByDate } from "../../utils/firebase/firebase";
import { useEffect } from "react";

const MealDetails = () => {
  const { day } = useParams();
  useEffect(()=> {
    getDietByDate(day)
  },[])
  return(
    <Chart />
  )
}
export default MealDetails