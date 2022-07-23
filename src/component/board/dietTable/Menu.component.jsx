import MenuTag from "./MenuTag.component";
import { Container, Wrapper, StyledTitle } from "./Menu.style";

const Menu = ({meal, content}) => {
 return(
  <Container>
    <StyledTitle>{meal}</StyledTitle>
    <Wrapper>
      {content.length>0 && 
        content.map(food => <div>
          <MenuTag meal={meal} name={food.foodData.DESC_KOR}/>
        </div>)}
    </Wrapper>
  </Container>
 )
}
export default Menu;