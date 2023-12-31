
import './App.css';
import ForgetPasswordPage from './ForgetPasswordPage';
import ResetPasswordPage from './ResetPasswordPage';
import {Routes ,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}/>
    <Route path='/forgot-password' element={<ForgetPasswordPage/>}/>
    < Route path='/resetpassword' element={<ResetPasswordPage/>}/>
    </Routes>
    </div>
  );
}

function Home(){
return(
 < h2>Password</h2>
 
)}
export default App;
