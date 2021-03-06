import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectSelector } from "../../features/Select/slice";
import { submitIntakedFoodsDesk } from "../../features/Select/slice";
import Diet from "../../component/board/dietTable/Diet.component";

const MealDetails = () => {
  const { day } = useParams();
  const dispatch = useDispatch();
  const {breakfast, lunch, dinner} = useSelector(selectSelector.all);
  const submitData = {
    day, breakfast, lunch, dinner
  }
  const submitHandler = () => dispatch(submitIntakedFoodsDesk(submitData))
  return(
    <Fragment>
      <Diet />
      <button onClick={submitHandler}>제출하기</button>
    </Fragment>
  )
}
export default MealDetails