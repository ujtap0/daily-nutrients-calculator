import styled from "styled-components";
import Button from "../../component/ui/Button.component";

export const NavBarContainer = styled.div`
  font-weight: bold;
  height: 6rem;
  max-width: 110rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  padding: 2.5rem 0;
`

export const LogoContainer = styled.div`
  letter-spacing: 2px;
`

export const StyledButton = styled(Button)`
  &:first-child{
    margin-right: 0.5rem;
  }
`