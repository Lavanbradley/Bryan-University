import { useContext } from "react";
import UserContext from "./UserContext";

function Header (){
  const {userName, setUserName} = useContext(UserContext);

  return(
    <>
    <h3>In Header, username is {userName}</h3>
    <button
    onClick = {() => setUserName("Tom")}>

      Change user name to Tom
    </button>
    </>

  )
}

export default Header;