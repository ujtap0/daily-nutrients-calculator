import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nutrientAction, nutrientSelector } from '../../../features/Search/slice';

import { Select } from "antd";
const  {Option } = Select

const FoodDescSearch = ({foodHandler, nextHandler}) => {
  const [meal, setMeal] = useState('breakfast')
  const dispatch = useDispatch();
  const inputRef = useRef();
  const {isLoading, data, error} = useSelector(nutrientSelector.all);

  const searchHandler = () => {
    const {load} = nutrientAction;
    let enteredFoodName = inputRef.current.value;
    dispatch(load(enteredFoodName));
  }

  const seletMealHandler = (value) => {
    setMeal(value)
  }

  const selectFoodHandler = (foodData) => {
    const selectedMeal = {meal, foodData}
    foodHandler(selectedMeal);
    nextHandler();
  }

  return(
    <div>
      <div>
        <Select defaultValue="breakfast" onChange={seletMealHandler}>
          <Option value="breakfast">아침</Option>
          <Option value="lunch">점심</Option>
          <Option value="dinner">저녁</Option>
        </Select>
        <input ref={inputRef} />
        <button onClick={searchHandler}>submit</button>
      </div>
      <ul>
        {!isLoading&&data.map((foodData, idx)=>
        <li 
        onClick={selectFoodHandler.bind(undefined, foodData)} key={idx}
        >
          <span>{foodData.DESC_KOR}</span>
        </li>)}
      </ul>
    </div>
  )
}

export default FoodDescSearch;