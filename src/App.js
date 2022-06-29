import { BrowserRouter, Routes, Route } from "react-router-dom";
import CalendarPage from "./page/Calendar/Carlendar.component";
import MealForm from "./page/MealForm/MealForm.component";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CalendarPage />}/>
        <Route path="/meal/:day" element={<MealForm />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


//cors error - long term solution
//server side: if anything comes from localhost 3000 it is okay
//once we get to the full production version of this we launched the production version
//proxy witten in package.json doesn't work anymore because proxy no longer is localhost 8080(서버사이드 쪽 배포전 주소)
//proxy is going to be the exact same url because if they're both launched into develop into production