import React, {createContext, useContext, useState} from 'react';

// Create a context
const GlobalContext = createContext();

// Create a custom hook to use the global function
export const useGlobalContext = ()=> useContext(GlobalContext)

// Create a provider component
 export const AppContext = ({ children }) => {

    const [name, setName] = useState(()=> {
        const loggedInUser = localStorage.getItem("loggedInUser")
           if (loggedInUser && loggedInUser!==undefined && loggedInUser!==null ) {
               console.log('loggedInUser:' + loggedInUser)
               return JSON.parse(loggedInUser).name
           } else {
               return 'Mr User'
           }
       })

     const [defaultMessage, setDefaultMessage] = useState(()=>{
        return morningOrEvening() + name + ', I am your Virtual Assistant. Would you like to have your "Morning Briefing"?'
     })
     const getHoursAndMinutesFromDate = () => {
         let currentDate = new Date();
         console.log(currentDate)
         let h = "0" + currentDate.getHours();
         let m = "0" + currentDate.getMinutes();
         let time = h.slice(-2)+":"+m.slice(-2)
       return time;
    };
     const defaultMessageList = [{'messageTime':getHoursAndMinutesFromDate(), 'messageText':defaultMessage, 'messageType':'Greetings'}]

     const [globalMessageList, setGlobalMessageList] = useState(()=>{
        const globalMessageList = localStorage.getItem("messageList")
        if(globalMessageList===null || globalMessageList===undefined){
            localStorage.setItem("messageList", JSON.stringify(defaultMessageList))
            return defaultMessageList;
        }else{
           console.log(globalMessageList)
           return JSON.parse(globalMessageList);
        }
    })

     function morningOrEvening(){
      var today = new Date ()
      var curHr = today.getHours ()
      if (curHr < 12) { return 'Good morning ' }
      else if (curHr < 18) { return 'Good afternoon ' }
      else {return'Good evening ' }
    }
  return (
    <GlobalContext.Provider value={{ defaultMessage, globalMessageList, name }}>
      {children}
    </GlobalContext.Provider>
  );
};


