import { useContext } from "react";
import { TokenContext, UserContext } from "../App";

export  function useUserContextHook(){
  const user = useContext(UserContext)
  const token = useContext(TokenContext)

  return [user,token]
}