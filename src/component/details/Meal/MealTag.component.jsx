import { MealTagContainer } from "./MealTag.style"

const MealTag = ({foodName, servingWeight, portion}) => {
  return(
    <MealTagContainer>
      <span>{foodName}</span>
      <span>{` ${servingWeight*portion}g`}</span>
    </MealTagContainer>
  )
}
export default MealTag