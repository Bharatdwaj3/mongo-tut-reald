import {useState} from 'react'
import axios from 'axios'

function Log_out() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [errorMessage, setErrorMessage]=useState('');


       const handleLogout=async()=>{
        try{const response=axios .post("http://localhost:8000/logout")
      console.log('Response',response.data);
      setIsLoggedIn(false);
      setErrorMessage('');
    }catch(error){
        console.log('Login error',error.response?.data?.message||error.message);
        setErrorMessage(error.response?.data?.message||'An error ocuured');
      };
       };

  return (
    <>
      <div style={{
        height: '200px',
        width: '300px',
        border: '2px solid black',
        margin: '20px auto',
        textAlign: 'center',
        padding: '20px',
      }}>
        {isLoggedIn?(
         <>
           <p>You are currently logged in</p>
          <button onClick={handleLogout}>Log_Out</button>
         </>
        ):(
          <p>You are successfullly logged out!!</p>
        )}
      {errorMessage&&<p style={{color:'red'}}>{errorMessage}</p>}
      </div>
    </>
  );
}

export default Log_out