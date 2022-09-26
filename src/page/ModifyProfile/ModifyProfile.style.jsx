import styled from "styled-components";
import { Radio } from "antd";
const { Group } = Radio;

export const FormContainer = styled.div`
  max-width: 56rem;
  margin: 10rem auto;
`
export const StyledTitle = styled.h2`
  font-size: 2.3rem;
  margin-bottom: 6rem;
`

export const FieldContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5rem;
`
export const InputContainer = styled.div`
  width: 70%;
`
export const StyledInput = styled.input`
  width: 90%;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  border: 0;
  font-size: 1.6rem;
  border-bottom: 2px solid #84a59d;
  &:focus{
    outline: 0;
  }
`
export const StyledSelect = styled.select`
  width: 90%;
  font-size: 1.6rem;
  padding: 0.5rem 1rem;
  border: 1px solid  #d3d3d3;
  border-radius: 4px;
  margin-right: 1rem;
`
export const StyledLabel = styled.label`
  font-size: 1.8rem;
`
export const StyledBtnContainer = styled.div`
  text-align: right;
  margin-top: 8rem;
`
export const StyledRadioContainer = styled(Group)`
  padding-top: 1rem
`
export const StyledRadio = styled(Radio)`
  margin-bottom: 1.3rem;
  &:last-child{
    margin-bottom: 0;
  }
`