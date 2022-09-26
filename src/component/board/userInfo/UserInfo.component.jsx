/* eslint-disable no-mixed-operators */
import { useSelector } from "react-redux";
import { authSelector } from "../../../features/Auth/slice";
import { Container, Greating, Figure } from './UserInfo.style'

const UserInfo = () => {
  const {currentUser} = useSelector(authSelector.all)
  const calorie = (currentUser.height - 100) * 0.9 * currentUser.active;
  const BMI = (currentUser.weight/((currentUser.height/100)^2)).toFixed(1)
  let weightRange;
  if(BMI < 18.5){
    weightRange = '저체중'
  } else if (18.5 <= BMI < 23) {
    weightRange = '정상 체중'
  } else if (23 <= BMI < 25) {
    weightRange = '과체중'
  } else {
    weightRange = '비만'
  }
  return(
    <Container>
      <Greating>{`${currentUser?.displayName}님 안녕하세요.`}</Greating>
      <div>
        <Figure>{`하루 권장 열량: ${calorie}kcal`}</Figure>
        <Figure>{`체질량 지수: ${BMI}kg/㎡`}</Figure>
        <Figure>{`현재체중은 ${weightRange}입니다`}</Figure>
      </div>
    </Container>
  )
}
export default UserInfo;