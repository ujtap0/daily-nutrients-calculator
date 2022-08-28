import { useState, useEffect } from 'react';
import { Container, Title, StyledFilledWater,  StyledEmptyWater} from './CountWater.style.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectAction, selectSelector } from '../../../features/Select/slice.js';

const CountWater = () => {
  const dispatch = useDispatch();
  const { waterCount } = useSelector(selectSelector.all)
  const [ countWater , setCountWater ] = useState(waterCount);
  const onIncreaseHandler = () => setCountWater(prev => prev+1);
  const onDecreaseHandler = () => setCountWater(prev => prev-1);

  useEffect(()=>{
    dispatch(selectAction.setCountWater(countWater));
  },[countWater, dispatch])

  return(
    <Container>
      <Title>오늘 몇 잔의 물을 마셨나요?</Title>
      {Array.from({length: countWater}, (v, i)=><StyledFilledWater key={`fill${i}`} onClick={onDecreaseHandler}/>)}
      {Array.from({length: 8-countWater}, (v, i)=><StyledEmptyWater key={`empty${i}`} onClick={onIncreaseHandler}/>)}
    </Container>
  )
}
export default CountWater;
