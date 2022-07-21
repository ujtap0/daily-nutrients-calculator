import MenuTag from "./MenuTag.component";
import { Container, Wrapper } from "./Menu.style";

const Menu = ({meal, content}) => {
 return(
  <Container>
    <h3>{meal}</h3>
    <Wrapper>
      {content.length>0 && 
        content.map(food => <MenuTag meal={meal} name={food.foodData.DESC_KOR}/>)}
    </Wrapper>
  </Container>
 )
}
export default Menu;