import { Background, StyledTitle, Wrapper, StyledContent, TextWrapper } from "./instruction.style";

const Instruction = () => {
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

export default Instruction;