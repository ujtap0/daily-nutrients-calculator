import styled from "styled-components";

export const ButtonContainer = styled.div`
  position: absolute;
  width: 90%;
  display: flex;
  flex-direction: column;
  bottom: 1.3rem;
  button{
    border: 0;
    background: transparent;
    cursor: pointer;
    font-size: 1.8rem;
    color: #84a59d;
    &:hover{
      opacity: 0.7
    }
  }
  .left{
    align-self: flex-start;
  };
  .right{
    align-self: flex-end;
  }
`