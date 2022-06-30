import { useDispatch } from "react-redux";
import { selectAction } from "./slice";
import { Tag } from "antd";

const MenuTag = ({meal, name}) => {
  const dispatch = useDispatch();
  const {removeMeal} = selectAction;
  const mealContent = {meal, name}
  const removeHandler = () => dispatch(removeMeal(mealContent))
  return(
    <Tag 
      closable onClose={removeHandler}>{name}</Tag>
  )
}
export default MenuTag;