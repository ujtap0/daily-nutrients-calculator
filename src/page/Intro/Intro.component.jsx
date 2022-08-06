import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelector } from "../../features/Auth/slice";
import { Background, StyledTitle, Wrapper, StyledContent, TextWrapper } from "./Intro.style";

const Intro = () => {
  const navigate = useNavigate();
  const {isNewUser, currentUser } = useSelector(authSelector.all);
  useEffect(()=>{
    if(!isNewUser && currentUser !== null){
      navigate('/main/board');
    }
  },[currentUser, isNewUser, navigate])
  return(
    <Wrapper>
      <Background />
      <TextWrapper>
        <StyledTitle>소중한 당신, 오늘 잘 챙겨 드셨나요?</StyledTitle>
        <StyledContent>오늘 뭘 먹었는지 잘먹기록에 남겨주세요.</StyledContent>
      </TextWrapper>
    </Wrapper>
  )
};

export default Intro;