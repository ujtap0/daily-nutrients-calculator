import styled from "styled-components";
import BgImg from '../../assets/bg_img.jpg'

export const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 9rem);
  text-align: center;
  position: relative;
`

export const Background = styled.div`
  background-image: url(${BgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100%;
  position: absolute;
  z-index: -1;
  &:after{
    content: '';
    display: block;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
  }
`
export const TextWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 25rem;
`

export const StyledTitle = styled.h3`
  color: #fff;
  font-size: 4.3rem;
  
`
export const StyledContent = styled.p`
color: #fff;
font-size: 2.8rem
`