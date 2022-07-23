import {Routes, Route} from 'react-router-dom';
import Board from '../Board/Board.component'
import Profile from '../ModifyProfile/ModifyProfile.component';

const Main = () => {
  return(
    <Routes>
      <Route path=':new-user' element={<Profile />}/>
      <Route path=':board' element={<Board />}/>
    </Routes>
  )
}
export default Main;