import { useContext } from "react";
import UserContext from "./UserContext";

function Footer(){
  const {userName, setUserName} = useContext(UserContext)

  return(
    <>
    <h3>In Footer, username is {userName}</h3>
    <button onClick={() => setUserName("Sam")}>Change user name to Sam</button>
    </>
  )
}
export default Footer;