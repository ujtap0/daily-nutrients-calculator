import styled from "styled-components";
import { Select } from "antd";

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`

export const StyledInput = styled.input`
  border: 0;
  border-bottom: 2px solid #84a59d;
  padding: 0.5rem 1rem;
  width: 65%;
  background-color: transparent;
  margin-bottom: 7px;
  &:focus{
    outline: 0;
  }
`

export const StyledSelect = styled(Select)`
  width: 15%;
`
export const SerachResultContainer = styled.ul`
  width: 65%;
  margin: 1.2rem auto 0;
  padding: 0 2.5rem;
`
export const SearchFoodListItem = styled.li`
  list-style: none;
  font-size: 1.4rem;
  cursor: pointer;
  margin-bottom: 0.7rem;
`
export const PagenationContainer = styled.ul`
  width: 65%;
  margin: 1.2rem auto 0;
  display: flex;
  justify-content: center;
`
export const PageNationNum = styled.li`
  list-style: none;
  cursor: pointer;
  margin-right: 1rem;
  margin-top: 1rem;
`