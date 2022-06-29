import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nutrientAction, nutrientSelector } from './slice'

const Search = ({ meal }) => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const {isLoading, data, error} = useSelector(nutrientSelector.all);

  const submitHandler = (event) => {
    event.preventDefault();
    const {load} = nutrientAction;
    let enteredFoodName = inputRef.current.value;
    const mealDesc = {meal, enteredFoodName}
    dispatch(load(mealDesc));
  }

  return(
    <div>
      <form onSubmit={submitHandler}>
        <input ref={inputRef} />
        <button type='submit'>submit</button>
      </form>
      <ul>
        {!isLoading&&data[meal].map((foodData, idx)=><li key={idx}>{foodData.DESC_KOR}</li>)}
      </ul>
    </div>
  )
}

export default Search;