import './styles/style.css'
import './styles/custom.css'
import {DisplayMessage} from "./DisplayMessage";

export function DisplayMessageList({messageJsonList}){
    console.log(typeof messageJsonList)
    console.log("In DisplayMessageList :"+JSON.stringify(messageJsonList, null, 2))
    return (
        <ul className="list">
                {messageJsonList.map(message=> {
                    return (<DisplayMessage
                            {...messageJsonList}
                            key={crypto.randomUUID()}
                            textMessage={message.messageText}
                            messageTime={message.messageTime}
                            messageType={message.messageType}/>
                    )
                })}
        </ul>
    )
}