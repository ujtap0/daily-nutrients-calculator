import { useEffect } from "react";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { authSelector, googleSignInStart } from "./slice";
import { NavBarContainer, LogoContainer, StyledButton } from "./NavBar.style";

const NavBar = () => {
  const dispatch = useDispatch();
  const signInHandler = async() => dispatch(googleSignInStart());
  const {isNewUser, currentUser, isLoading, error} = useSelector(authSelector.all);

  return(
    <Fragment>
      <NavBarContainer>
        <LogoContainer><h1>잘 먹기록</h1></LogoContainer>
        <div>
          {currentUser===null ? 
            <StyledButton onClick={signInHandler}>로그인</StyledButton> : <StyledButton>로그아웃</StyledButton>
          }
        </div>
      </NavBarContainer>
      <Outlet />
    </Fragment>
  )
}
export default NavBar;