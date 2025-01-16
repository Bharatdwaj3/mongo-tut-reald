import { useState } from 'react';
import axios from 'axios';

function Register() {

   const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
     const [email, setEmail] = useState("");
      const [userdata, setUserData] = useState(false);


     const onChangeName =(e)=>{setName(e.target.value);};
     const onChangeUserName =(e)=>{setUserName(e.target.value);};
     const onChangePassword =(e)=>{setPassword(e.target.value);};
     const onChangeEmail =(e)=>{setEmail(e.target.value);};

    const onSumbit=(e)=>{
      e.preventDefault();
      const userData={
        name:name,
        username:username,
        password:password,
        email:email,
      };
      console.log(userData);
    
     axios
      .post("http://localhost:8000/register", userData)
      .then((res) => {
        console.log(res.data);
        setName(name);
        setUserName(username);
        setPassword(password);
        setEmail(email);
      })
      .catch((error) => {
        console.log(error);
      });
    setUserData(true);

    }

  return (
    <>
      <div>
        {userdata?(<p>User Registered!!!</p>):(
            <div
        style={{
          height: '420px',
          width: '450px',
          border: '3px solid black',
        }}
      >
        <form style={{ padding: '40px' }}  onSubmit={onSumbit}>
          <label>
            Name: <input  required type="text" name="name" onChange={onChangeName}  />
          </label>
          <br />
          <br />
          <label>
            Username: <input  required type="text" name="username" onChange={onChangeUserName}  />
          </label>
          <br />
          <br />
          <label>
            Email: <input  required type="email" placeholder="email" name="email" onChange={onChangeEmail}  />
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
         
      </div>


        )}
      
      </div>
    </>
  );
}
export default Register;