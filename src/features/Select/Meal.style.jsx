import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  padding: 40px 50px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 16px;
  text-align: left;
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%
`

export const BtnWrapper = styled.div`
  margin-top: 4rem;
  text-align: right;
  button:first-child{
    margin-right: 5px;
  }
`