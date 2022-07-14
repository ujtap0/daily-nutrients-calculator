import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import MealDetails from "./page/MealDetails/MealDetails.component";
import NavBar from "./features/Auth/NavBar.component";
import Main from "./page/Main/Main.component";
import Instruction from "./page/Instruction/Instruction.component";
import { checkUserSession } from './features/Auth/slice';
import { authSelector } from "./features/Auth/slice";

function App() {
  const dispatch = useDispatch();
  const {isNewUser, currentUser, isLoading, error} = useSelector(authSelector.all);
  const navigate = useNavigate();

  useEffect(()=>{
    dispatch(checkUserSession())
  },[]);

  useEffect(()=>{
    if(isNewUser && currentUser !== null){
      navigate('main/new-user');
    }else if(!isNewUser && currentUser !== null){
      navigate('main/board');
    }
  },[currentUser, isNewUser, navigate])

  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Instruction />}/>
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