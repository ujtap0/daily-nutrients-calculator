import { useState, Fragment } from "react";
import { useSelector } from "react-redux";
import { selectSelector } from "./slice";
import MealForm from "./MealForm.component";
import Menu from "./Menu.component";

const Meal = () => {
  const [isModalShow, setIsModalShow] = useState(false);

  const {breakfast, lunch, dinner} = useSelector(selectSelector.all);

  const hideModalHandler = () => setIsModalShow(false)
  const showModalHandler = () => setIsModalShow(true)
  return(
    <Fragment>
      {isModalShow && <MealForm onClose={hideModalHandler}/>}
      <section>
        <div>
          <Menu meal='breakfast' content={breakfast}/>
          <Menu meal='lunch' content={lunch}/>
          <Menu meal='dinner' content={dinner}/>
        </div>
        <button onClick={showModalHandler}>입력하기</button>
      </section>
    </Fragment>
  )

}
export default Meal;