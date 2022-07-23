import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAdditonalUserInfo } from "../../features/Auth/slice";
import { FormContainer, StyledInput, FieldContainer, StyledLabel, InputContainer, StyledSelect, StyledTitle, StyledBtnContainer } from "./ModifyProfile.style";
import Button from "../../component/ui/Button.component";

const ModifyProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const year = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(year);
  const [gender, setGender] = useState('female');
  const heightRef = useRef();
  const weightRef = useRef();
  const genderHandler = e => setGender(e.target.value);
  const yearHandler = e => setSelectedYear(e.target.value);

  const submitHandler = async(e) => {
    e.preventDefault();
    const additionalInfo = {
      gender,
      birthYear: selectedYear,
      height: heightRef.current.value,
      weight: weightRef.current.value
    }
    dispatch(addAdditonalUserInfo(additionalInfo))
    navigate('/main/board');
  }

  return(
    <FormContainer>
      <StyledTitle>
        하루 권장 영양소를 계산하는데 사용됩니다.
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
          <StyledLabel>출생연도</StyledLabel>
          <InputContainer>
            <StyledSelect value={selectedYear} onChange={yearHandler}>
              {Array.from(new Array(100), (v, i) => <option key={i} value={year-i}>{year-i}</option>)}
            </StyledSelect>
            <span>년</span>
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