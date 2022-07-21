import styled from "styled-components"

export const FilledBtn = styled.button`
  background-color: #f8f9fa;
  border: 1px solid #f8f9fa;
  border-radius: 8px;
  color: #777;
  cursor: pointer;
  font-size: 14px;
  height: 36px;
  line-height: 27px;
  min-width: 54px;
  padding: 0 16px;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: pre;
  transition: all 0.1s;
  &:hover{
    border-color: #84a59d;
    background-color: #84a59d;
    box-shadow: rgba(0, 0, 0, .1) 0 1px 1px;
    color: #fff;
  };
  &:focus{
    border-color: #4285f4;
    outline: none;
  }
`;

export const InvertedBtn = styled.button`
  border: 1px solid #f8f9fa;
  box-shadow: rgba(0, 0, 0, .1) 0 1px 1px;
  background-color: #84a59d;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  height: 36px;
  line-height: 27px;
  min-width: 54px;
  padding: 0 16px;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: pre;
  transition: all 0.1s;
  &:hover{
    background-color: #f8f9fa;
    border: 1px solid #f8f9fa;
    box-shadow: rgba(0, 0, 0, .1) 0 1px 1px;
    color: #777;
  };
  &:focus{
    border-color: #4285f4;
    outline: none;
  }
`;