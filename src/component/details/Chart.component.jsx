import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getDietByDate } from '../../features/Diet/slice';

const Chart = () => {
  const { day } = useParams();
  const data = useSelector((state) => getDietByDate(state, day))
  const mealForADay = [
    ...data.breakfast,
    ...data.lunch,
    ...data.dinner,
  ]

  useEffect(()=>{
    console.log(mealForADay)
  },[])

  return(
    <div>디테일 페이지입니다.</div>
  )
}
export default Chart;