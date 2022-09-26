import styled from "styled-components";

export const StyledTitle = styled.h3`
  text-align: center;
  font-size: 2.6rem;
  margin-bottom: 3rem;
`

export const SubmitContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 0 3rem;
`
export const InputContainer = styled.div`
  width: 80%;
  & > span {
    font-size: 2rem;
  }
`
export const StyledInput = styled.input`
  width: 90%;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  border: 0;
  font-size: 1.8rem;
  border-bottom: 2px solid #84a59d;
  background: transparent;
  &:focus{
    outline: 0;
  }
`