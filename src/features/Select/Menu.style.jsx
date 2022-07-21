import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1.3rem;
  width: 100%;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  &:last-child{
    border-right: 0;
  }
`
export const Wrapper = styled.div`
  width: 100%;
`
export const StyledTitle = styled.h3`
  display: block;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`