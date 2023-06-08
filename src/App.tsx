import { useState } from 'react'
import './App.css'
function IsInvalid({isInvalid}: any){
  if(isInvalid === false) {
    return <> </>
  }
  return <>
    <div className="errorToolTip">
    <p className="error">Error! </p>
    <p className="error">The Username or Password that you have entered is invalid. Please try again. </p>
    </div>
  </>
}

function App() {
  const [username,setUsername ] = useState('')
  const [password, setPassword] = useState('')
  const [isInvalid, setIsInvalid] = useState(false)
   const [passwordShown, setPasswordShown] = useState(false);
 
  const submit = () => {
    if(username === "testUser" && password ==="password"){
      setIsInvalid(false)
      return
    }
    setIsInvalid(true)
    console.log(username,password,isInvalid)
  }
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  return (
    <>
      
      <form onSubmit={(event)=> {event.preventDefault(); submit()}}>
        <div className="errorContainer">
        <IsInvalid isInvalid={isInvalid} />
        </div>
        <label>
          Username
          <br />
          <input value={username} onChange={e => setUsername(e.target.value)} name="username" type="text" />
        </label>
        <br />
        <label>
          Password
          <br />
          <div><input value={password} onChange={e => setPassword(e.target.value)} name="password"  type={passwordShown ? "text" : "password"} />
          <button onClick={togglePassword}>Show</button></div>
        </label>
        <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj2nbjBm7P_AhV9XWwGHYKTBC4QtwJ6BAgOEAI&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdQw4w9WgXcQ&usg=AOvVaw0aHtehaphMhOCAkCydRLZU">Forgot Password?</a>
        <br />
        <button >submit </button>
      </form>

   </>
  )
}

export default App
