import { useState, useEffect } from 'react';
import Search from '../Search/Search.component';
import MealPortion from './MealPortion.component';

import Modal from '../../component/ui/Modal.component';

const MealForm = ({onClose}) => {
  const [meal, setMeal] = useState({});
  const [order, setOrder] = useState(0);

  const prevHandler = () => setOrder(prev=>prev - 1);
  const nextHandler = () => setOrder(prev=>prev + 1);
  const foodHandler = (food) => {
    setMeal(food)
  }

  let currentPage;

  if(order === 0){
    currentPage = <Search foodHandler={foodHandler} nextHandler={nextHandler} />
  }else if(order === 1){
    currentPage = <MealPortion food={meal} onClose={onClose} />
  }

  return (
    <Modal onClose={onClose}>
      {currentPage}
      <div>
        {order > 0 ? <button onClick={prevHandler}>prev</button> : null}
        {Object.keys(meal).length > 0 ? <button onClick={nextHandler}>next</button> : null}
      </div>
    </Modal>
)}

export default MealForm;