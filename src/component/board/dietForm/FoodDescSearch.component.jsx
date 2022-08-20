import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nutrientAction, nutrientSelector } from '../../../features/Search/slice';

import { Select } from "antd";
const  {Option } = Select

const FoodDescSearch = ({foodHandler, nextHandler}) => {
  const {isLoading, data, error, totalPage, searchTerm} = useSelector(nutrientSelector.all);
  const [meal, setMeal] = useState('breakfast')
  const dispatch = useDispatch();
  const inputRef = useRef();

  const searchHandler = () => {
    const { load } = nutrientAction;
    const enteredFoodName = inputRef.current.value;
    const removedSpaceString = enteredFoodName.split(' ').join('');
    const request = {
      searchTerm : removedSpaceString,
      pageNum: 1
    }
    dispatch(load(request));
  }

  const pageNavigateHandler = (pageNum) => {
    const { load } = nutrientAction;
    const request = {
      searchTerm : searchTerm,
      pageNum: pageNum
    };
    dispatch(load(request));
  }

  const seletMealHandler = (value) => {
    setMeal(value)
  }

  const selectFoodHandler = (foodData) => {
    const selectedMeal = {meal, foodData}
    foodHandler(selectedMeal);
    nextHandler();
  }

  let resultList;
  if(data === ''){
    resultList = <p>검색 결과가 없습니다</p>
  } else {
    resultList = data.map((foodData, idx) => 
      <li 
        onClick={selectFoodHandler.bind(undefined, foodData)} 
        key={idx}
      >
        <span>{foodData.DESC_KOR}</span>
      </li>)
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
        {!isLoading&&resultList}
      </ul>
      <ul>
          {!isLoading&&Array.from({length: totalPage}, (v, i) => i + 1)
            .map((pageNum)=><button onClick={(e) => {pageNavigateHandler(pageNum, e)}}>{pageNum}</button>)}
      </ul>
    </div>
  )
}

export default FoodDescSearch;