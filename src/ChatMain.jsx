import './styles/style.css'
import './styles/custom.css'
import {ChatInput} from "./ChatInput";
import {DisplayMessage} from "./DisplayMessage";
import {useState, useEffect} from "react";
import {useGlobalContext} from "./GlobalContext";
import {create} from "axios";
import {DisplayMessageList} from "./DisplayMessageList";

export function ChatMain({childSendTheGlobalMessage}){
    const [message, setMessage] = useState("")
    const {globalMessageList} = useGlobalContext()

        const getHoursAndMinutesFromDate = () => {
         let currentDate = new Date();
         console.log(currentDate)
         let h = "0" + currentDate.getHours();
         let m = "0" + currentDate.getMinutes();
         let time = h.slice(-2)+":"+m.slice(-2)
       return time;
    };
    const sendTextToParent = (textMessage, messageType)=>{
        if(textMessage && textMessage!==null) {
            console.log('In sendTextToParent:' + textMessage + ":" + messageType)
            const newMessage = createAMessageObject(textMessage, messageType)
            setMessage(newMessage)
        }else{
            console.log('In sendTextToParent: textInput is None')
        }
    }

    useEffect(()=>{
        console.log("In UseEffect of message in ChatMain")
        if(message.length==0) return
       globalMessageList.push(message)
        console.log('In UseEffect message:'+JSON.stringify(message, null, 2))
       // console.log('globalMessageList:'+globalMessageList)
        console.log(JSON.stringify(globalMessageList, null, 2))
        // Stringify before saving in the localStorage
       localStorage.setItem("messageList", JSON.stringify(globalMessageList))
    },[message])
    function createAMessageObject(msg, messageType){
        const mtype = messageType ?? "question"
        return {'messageTime': getHoursAndMinutesFromDate(), 'messageText':msg, 'messageType': mtype}
    }

    return (
        <div className="msger-chat">
            <DisplayMessageList messageJsonList={globalMessageList}/>
            <ChatInput sendTextToParent={sendTextToParent}/>
        </div>
        )

}