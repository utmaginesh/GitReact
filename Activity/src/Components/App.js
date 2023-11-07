import '../Assets/css/style.css';
import { User2 } from 'lucide-react';
export const App = ()=>{
  return (
    <div className='form'>
        <div className='fc'>
          <h2 align = "center"><User2/>REGISTRATION FORM</h2>
          <form className='f1'>    
            <div className='ff'>
              <label id='na'>Name:</label>
              <input type="text" id="name"></input>
            </div>
            <div className='ff'>
              <label id='em'>Email:</label>
              <input type="email" id="email"></input>
            </div>
            <div className='ff'>
              <label>Mobile:</label>
              <input type="num" id="num"></input>
            </div>
            <div className='ff'>
              <label>Username:</label>
              <input type="text" id="uname"></input>
            </div>
            <div className='ff'>
              <label>Password:</label>
              <input type="password" id="pass"></input>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
    </div>
  );
}
