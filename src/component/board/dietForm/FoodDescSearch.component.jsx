import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nutrientAction, nutrientSelector } from '../../../features/Search/slice';
import { StyledInput,InputContainer, StyledSelect, SearchFoodListItem, SerachResultContainer, PagenationContainer, PageNationNum, NextPageGroup, PrevPageGroup } from "./FoodDescSearch.style";
import Button from "../../ui/Button.component";
import { BUTTON_TYPE_CLASSES } from "../../ui/Button.component";
import { Select } from "antd";
const  { Option } = Select

const FoodDescSearch = ({foodHandler, nextHandler}) => {
  const {isLoading, data, error, totalPage, searchTerm} = useSelector(nutrientSelector.all);
  const [pageGroup, setPageGroup] = useState(10);
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

  const nextPageGroupHandler = () => {
    setPageGroup(prev => prev + 10);
    pageNavigateHandler(pageGroup);
  }
  const prevPageGroupHandler = () => {
    setPageGroup(prev => prev - 10)
    pageNavigateHandler(pageGroup);
  };
  
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
      <SearchFoodListItem 
        onClick={selectFoodHandler.bind(undefined, foodData)} 
        key={idx}
      >
        <span>{foodData.DESC_KOR}</span>
      </SearchFoodListItem>)
  }

  console.log(pageGroup)
  console.log(totalPage)
  return(
    <div>
      <InputContainer>
        <StyledSelect defaultValue="breakfast" onChange={seletMealHandler}>
          <Option value="breakfast">아침</Option>
          <Option value="lunch">점심</Option>
          <Option value="dinner">저녁</Option>
        </StyledSelect>
        <StyledInput ref={inputRef} />
        <Button buttonType={BUTTON_TYPE_CLASSES.filled} onClick={searchHandler}>submit</Button>
      </InputContainer>
      <SerachResultContainer>
        {!isLoading&&resultList}
      </SerachResultContainer>
      <PagenationContainer>
          <PrevPageGroup onClick={prevPageGroupHandler} isPrev={pageGroup>10}>&lt;</PrevPageGroup>
          {!isLoading&&Array.from({length: totalPage}, (v, i) => i + 1)
            .slice(pageGroup-10, pageGroup)
            .map((pageNum)=><PageNationNum onClick={(e) => {pageNavigateHandler(pageNum, e)}}>{pageNum}</PageNationNum>)}
          <NextPageGroup onClick={nextPageGroupHandler} isNext={Math.ceil(totalPage) > pageGroup}>&gt;</NextPageGroup>
      </PagenationContainer>
    </div>
  )
}

export default FoodDescSearch;