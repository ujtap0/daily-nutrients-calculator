import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Radio } from "antd";
import { addAdditonalUserInfo } from "../../features/Auth/slice";
import { FormContainer, StyledInput, FieldContainer, StyledLabel, InputContainer, StyledSelect, StyledTitle, StyledBtnContainer, StyledRadio, StyledRadioContainer } from "./ModifyProfile.style";
import Button from "../../component/ui/Button.component";

const ModifyProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [active, setActive] = useState(25);
  const [gender, setGender] = useState('female');
  const heightRef = useRef();
  const weightRef = useRef();
  const genderHandler = e => setGender(e.target.value);
  const activeHandler = e => setActive(e.target.value);

  const submitHandler = async(e) => {
    e.preventDefault();
    const additionalInfo = {
      gender,
      active,
      height: heightRef.current.value,
      weight: weightRef.current.value
    }
    dispatch(addAdditonalUserInfo(additionalInfo))
    navigate('/main/board');
  }

  return(
    <FormContainer>
      <StyledTitle>
        하루 권장 칼로리를 계산하는데 사용됩니다.
      </StyledTitle>
      <form onSubmit={submitHandler}>
        <FieldContainer name="gender" label="성별">
          <StyledLabel>성별</StyledLabel>
          <InputContainer>
            <StyledSelect value={gender} onChange={genderHandler}>
              <option value="male">남성</option>
              <option value="female">여성</option>
            </StyledSelect>
          </InputContainer>
        </FieldContainer>
        <FieldContainer>
          <StyledLabel>활동량</StyledLabel>
          <InputContainer>
          <StyledRadioContainer onChange={activeHandler} value={active}>
            <StyledRadio value={25}>주로 앉아서 생활하거나 매일 가벼운 움직임만 하며 활동량이 적은 경우</StyledRadio>
            <StyledRadio value={30}>규칙적인 생활로 보통의 활동량을 가진 경우</StyledRadio>
            <StyledRadio value={40}>육체노동 등 평소 신체 활동량이 많은 경우</StyledRadio>
          </StyledRadioContainer>
          </InputContainer>
         </FieldContainer>
        <FieldContainer>
          <StyledLabel>키</StyledLabel>
          <InputContainer>
            <StyledInput type="number" ref={heightRef}/>
            <span>cm</span>
          </InputContainer>
         </FieldContainer>
        <FieldContainer>
          <StyledLabel>몸무게</StyledLabel>
          <InputContainer>
            <StyledInput type="number" ref={weightRef}/>
            <span>kg</span>
          </InputContainer>
         </FieldContainer>
         <StyledBtnContainer>
          <Button>초기화</Button>
          <Button>입력</Button>
         </StyledBtnContainer>
      </form>
    </FormContainer>
  )
}
export default ModifyProfile;