import { useState } from 'react';
import { Container, Title, StyledFilledWater,  StyledEmptyWater} from './CountWater.style.jsx'

const CountWater = () => {
  const [ countWater , setCountWater ] = useState(0);
  const onIncreaseHandler = () => setCountWater(prev => prev+1);
  const onDecreaseHandler = () => setCountWater(prev => prev-1);
  return(
    <Container>
      <Title>오늘 몇 잔의 물을 마셨나요?</Title>
      {Array.from({length: countWater}, (v, i)=><StyledFilledWater key={`fill${i}`} onClick={onDecreaseHandler}/>)}
      {Array.from({length: 8-countWater}, (v, i)=><StyledEmptyWater key={`empty${i}`} onClick={onIncreaseHandler}/>)}
    </Container>
  )
}
export default CountWater;

//빈 컵을 클릭하면 순서대로 하니씩 채워진다.(마지막 컵을 클릭해도 첫번째 아이콘 바꾸기)
//채워져 있는 컵을 클릭하면 빈컵으로 count--