const MealTag = ({foodName, servingWeight, portion}) => {
  return(
    <div>
      <span>{foodName}</span>
      <span>{`${servingWeight*portion}g`}</span>
    </div>
  )
}
export default MealTag