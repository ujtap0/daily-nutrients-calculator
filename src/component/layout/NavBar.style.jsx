import styled from "styled-components";
import Button from "../../component/ui/Button.component";

export const NavBarWrapper = styled.div`
  width: 100%;
  padding: 2.3rem 0;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  background-color: #fff;
`
export const NavBarContainer = styled.div`
  font-weight: bold;
  max-width: 110rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LogoContainer = styled.div`
  letter-spacing: 2px;
  h1{
    margin: 0;
  }
`

export const StyledButton = styled(Button)`
  &:first-child{
    margin-right: 0.5rem;
  }
`