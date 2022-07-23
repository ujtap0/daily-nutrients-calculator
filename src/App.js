import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import MealDetails from "./page/MealDetails/MealDetails.component";
import NavBar from "./component/layout/NavBar.component";
import Main from "./page/Main/Main.component";
import Intro from "./page/Intro/Intro.component";
import { checkUserSession, authSelector } from './features/Auth/slice';
import { selectSelector, selectAction } from "./features/Select/slice";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isNewUser, currentUser } = useSelector(authSelector.all);
  const { date } = useSelector(selectSelector.all);

  useEffect(() => {
    dispatch(checkUserSession())
    const today = new Date().toLocaleDateString();
    if(date !== today) dispatch(selectAction.clear());
  },[]);

  useEffect(()=>{
    if(isNewUser && currentUser !== null){
      navigate('/main/new-user');
    }
    if(!isNewUser && currentUser !== null){
      navigate('/main/board');
    }
    if(currentUser === null){
      navigate('/')
    }
  },[currentUser, isNewUser, navigate])

  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Intro />}/>
        <Route path="main/*" element={<Main />} />
        <Route path="meal/:day" element={<MealDetails />}/>
      </Route>
    </Routes>
  );
}

export default App;


//cors error - long term solution
//server side: if anything comes from localhost 3000 it is okay
//once we get to the full production version of this we launched the production version
//proxy witten in package.json doesn't work anymore because proxy no longer is localhost 8080(서버사이드 쪽 배포전 주소)
//proxy is going to be the exact same url because if they're both launched into develop into production