import {useState} from 'react'
import axios from 'axios'

function Log_In() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [errorMessage, setErrorMessage]=useState('');

     const onChangeUserName =(e)=>{setUserName(e.target.value);};
     const onChangePassword =(e)=>{setPassword(e.target.value);};

    const onSumbit=(e)=>{
      e.preventDefault();
      const userData={
        username:username,
        password:password,
      };
      console.log('Sending login data',userData);
    
     try{const response=axios .post("http://localhost:8000/log_in", userData)
      console.log('Response',response.data);
      setIsLoggedIn(true);
      setErrorMessage('');
    }catch(error){
        console.log('Login error',error.response?.data?.message||error.message);
        setErrorMessage(error.response?.data?.message||'An error ocuured');
      };
};



  return (
    <>
       <div>
        {isLoggedIn?(<p>Welcome Back ,{username}!! You are logged in</p>):(
            <div
        style={{
          height: '420px',
          width: '450px',
          border: '3px solid black',
        }}
      >
        <form style={{ padding: '40px' }}  onSubmit={onSumbit}>
          <label>
            Username: <input  required type="text" name="username" onChange={onChangeUserName}  />
          </label>
          <br />
          <br />
          <label>
            Password: <input  required type="password" placeholder="password" name="password" onChange={onChangePassword}  />
          </label>
          <br />
          <br />
         <button type="submit">Submit</button>
        </form>
         {errorMessage&&<p style={{color:'red'}}>{errorMessage}</p>}
      </div>
        )}
      
      </div>
    </>
  )
}

export default Log_In