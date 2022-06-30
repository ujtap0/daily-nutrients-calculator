import MenuTag from "./MenuTag.component";

const Menu = ({meal, content}) => {
 return(
  <div>
    <h3>{meal}</h3>
    {content.length>0 && 
      content.map(food => <MenuTag meal={meal} name={food.DESC_KOR}/>)}
  </div>
 )
}
export default Menu;