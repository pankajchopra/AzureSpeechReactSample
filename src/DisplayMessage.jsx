import './styles/style.css'
import './styles/custom.css'
export function DisplayMessage({messageTime, textMessage, messageType}){


    return (
        <main className="msger-chat">
            <div className="msg left-msg">
                <div className="msg-bubble">
                    <div className="msg-text" id="botMsg">
                        <div>{textMessage}</div>
                        <div className="msg-info-time" id="startTime">{messageTime}</div>
                    </div>
                </div>
            </div>
        </main>)

}