import {Routes, Route} from 'react-router-dom';
import CalendarPage from '../Calendar/Carlendar.component';
import Profile from '../Profile/Profil.component';

const Main = () => {
  return(
    <Routes>
      <Route path=':new-user' element={<Profile />}/>
      <Route path=':board' element={<CalendarPage />}/>
    </Routes>
  )
}
export default Main;