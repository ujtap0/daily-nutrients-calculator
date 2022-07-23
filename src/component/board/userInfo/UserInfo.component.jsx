import { useSelector } from "react-redux";
import { authSelector } from "../../../features/Auth/slice";
import { Container, Greating, Figure } from './UserInfo.style'

const UserInfo = () => {
  const {currentUser} = useSelector(authSelector.all)
  return(
    <Container>
      <Greating>{`${currentUser?.displayName}님 안녕하세요`}</Greating>
      <div>
        <Figure>{`키: ${currentUser?.height}cm`}</Figure>
        <Figure>{`몸무게: ${currentUser?.weight}kg`}</Figure>
      </div>
    </Container>
  )
}
export default UserInfo;