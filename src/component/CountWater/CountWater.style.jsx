import styled from "styled-components";
import { ReactComponent as FilledWater } from '../../assets/icon/local_drink_FILL1.svg';
import { ReactComponent as EmptyWater } from '../../assets/icon/local_drink_FILL0.svg';

export const Title = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 3rem
`

export const Container = styled.div`
  padding: 6rem;
  border-radius: 6px;
  margin-bottom: 6rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

export const StyledFilledWater = styled(FilledWater)`
  fill: #429FFD;
`
export const StyledEmptyWater = styled(EmptyWater)`
  fill: #429FFD;
`