import { createContext, useState} from "react";
const Context = createContext();
const ContextProvider = ({children})=>{
    const [isOn,setOn] = useState(false);
    const [LoggedIn, setLoggedIn] = useState(false);
    const LogIN = ()=>{
      setLoggedIn(true);
    }

    const LogOut = ()=>{
      setLoggedIn(false);
    }

  const SwitchOn = ()=>{
    if(!isOn){
        console.log("CLICKED")
        setOn(true);
    }else{
        console.log("CLICKED")
        setOn(false)
    }
    console.log("CLICKED")
  }

    return(
      <Context.Provider value  = {{isOn, SwitchOn, LoggedIn, LogIN, LogOut}}>
        {children}
      </Context.Provider>
    )
}
export {Context,ContextProvider}