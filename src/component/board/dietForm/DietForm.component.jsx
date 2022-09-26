import { useState } from 'react';
import FoodDescSearch from './FoodDescSearch.component'
import MealPortion from './MealPortion.component';
import { ButtonContainer } from './DietForm.style';

import Modal from '../../ui/Modal.component';

const  DietForm = ({onClose}) => {
  const [meal, setMeal] = useState({});
  const [order, setOrder] = useState(0);

  const prevHandler = () => setOrder(prev=>prev - 1);
  const nextHandler = () => setOrder(prev=>prev + 1);
  const foodHandler = (food) => {
    setMeal(food)
  }

  let currentPage;

  if(order === 0){
    currentPage = <FoodDescSearch foodHandler={foodHandler} nextHandler={nextHandler} />
  }else if(order === 1){
    currentPage = <MealPortion food={meal} onClose={onClose} />
  }

  return (
    <Modal onClose={onClose}>
      {currentPage}
      <ButtonContainer>
        {order > 0 ? <button onClick={prevHandler} className='left'>◀</button> : null}
        {Object.keys(meal).length > 0 && order !== 1? <button onClick={nextHandler} className='right'>▶</button> : null}
      </ButtonContainer>
    </Modal>
)}

export default DietForm;