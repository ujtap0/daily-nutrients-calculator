import { useDispatch } from "react-redux";
import { selectAction } from "./slice";
import { StyledTag } from "./MenuTag.style";

const MenuTag = ({meal, name}) => {
  const dispatch = useDispatch();
  const {removeMeal} = selectAction;
  const mealContent = {meal, name}
  const removeHandler = () => dispatch(removeMeal(mealContent))
  return(
    <StyledTag 
      closable onClose={removeHandler}>{name}</StyledTag>
  )
}
export default MenuTag;