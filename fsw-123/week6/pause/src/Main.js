import { useContext } from "react";
import UserContext from "./UserContext";

function Main (){
  const {userName, setUserName} = useContext(UserContext)

  return(
    <>
    <h3>In Main, username is {userName}</h3>
    <button onClick={() => setUserName('Pam')}>Change user name to pam</button>
    </>
  )
}
export default Main;